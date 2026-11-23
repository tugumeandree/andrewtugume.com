import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { faithmasters } from '@/lib/brand'

// Published FaithMasters lessons: content/bible-study/<series>/<lesson>.mdx.
// The public route moved to /faithmasters; the content directory did not.
// How to publish one: content/bible-study/README.md
const LESSONS_DIR = path.join(process.cwd(), 'content', 'bible-study')
const PUBLIC_DIR = path.join(process.cwd(), 'public')
const SLUG = /^[a-z0-9-]+$/

export type LessonFormat = 'Listen' | 'Watch' | 'Read'

export type Lesson = {
  series: string
  slug: string
  href: string
  title: string
  scripture?: string
  summary?: string
  track: string
  date?: string
  order?: number
  featured: boolean
  audio?: string
  youtubeId?: string
  guide?: { href: string; label: string }
  hasText: boolean
  formats: LessonFormat[]
}

const text = (value: unknown) => (typeof value === 'string' && value.trim() ? value.trim() : undefined)

// A site file counts only when it is really there, so the page never shows a dead control
function publicFile(value: unknown, field: string, source: string) {
  const href = text(value)
  if (!href) return undefined
  const full = path.join(PUBLIC_DIR, href)
  if (href.startsWith('/') && full.startsWith(PUBLIC_DIR + path.sep) && fs.existsSync(full)) return href
  console.warn(`[faithmasters] ${source}: ${field} "${href}" was not found in public/, so it is not shown.`)
  return undefined
}

function readLesson(series: string, file: string): Lesson | null {
  const slug = file.replace(/\.mdx$/, '')
  const source = `content/bible-study/${series}/${file}`
  if (!SLUG.test(slug)) {
    console.warn(`[faithmasters] ${source}: use lowercase letters, numbers and hyphens in the file name. Skipped.`)
    return null
  }

  const { data, content } = matter(fs.readFileSync(path.join(LESSONS_DIR, series, file), 'utf8'))
  if (data.draft === true) return null

  const title = text(data.title)
  if (!title) throw new Error(`${source}: add a title.`)
  const track = faithmasters.tracks.find((item) => item.id === text(data.track))?.id
  if (!track) throw new Error(`${source}: set track to one of ${faithmasters.tracks.map((item) => item.id).join(', ')}.`)

  const audioSource = text(data.audio)
  const audio = audioSource?.startsWith('https://') ? audioSource : publicFile(data.audio, 'audio', source)
  const videoId = text(data.youtubeId)
  const youtubeId = videoId && /^[\w-]{11}$/.test(videoId) ? videoId : undefined
  const guideHref = publicFile(data.guide, 'guide', source)
  const hasText = content.trim().length > 0

  const formats: LessonFormat[] = []
  if (audio) formats.push('Listen')
  if (youtubeId) formats.push('Watch')
  if (hasText) formats.push('Read')
  // Nothing to open yet, so it is not published
  if (formats.length === 0) return null

  // YAML turns an unquoted date into a Date
  const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : text(data.date)

  return {
    series,
    slug,
    href: `/faithmasters/${series}/${slug}`,
    title,
    scripture: text(data.scripture),
    summary: text(data.summary),
    track,
    date,
    order: typeof data.order === 'number' ? data.order : undefined,
    featured: data.featured === true,
    audio,
    youtubeId,
    guide: guideHref ? { href: guideHref, label: text(data.guideLabel) ?? 'Download the study guide' } : undefined,
    hasText,
    formats,
  }
}

// Newest first; undated lessons come last
export function getAllLessons(): Lesson[] {
  if (!fs.existsSync(LESSONS_DIR)) return []

  return fs
    .readdirSync(LESSONS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && SLUG.test(entry.name))
    .flatMap((entry) =>
      fs
        .readdirSync(path.join(LESSONS_DIR, entry.name))
        .filter((file) => file.endsWith('.mdx'))
        .map((file) => readLesson(entry.name, file))
    )
    .filter((lesson): lesson is Lesson => lesson !== null)
    .sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''))
}

export function getLesson(series: string, slug: string) {
  return getAllLessons().find((lesson) => lesson.series === series && lesson.slug === slug)
}

// Only lessons numbered with `order` form a sequence
export function getNextLesson(lesson: Lesson) {
  const { series, order } = lesson
  if (order === undefined) return undefined
  return getAllLessons()
    .filter((item) => item.series === series && item.order !== undefined && item.order > order)
    .sort((a, b) => a.order! - b.order!)[0]
}
