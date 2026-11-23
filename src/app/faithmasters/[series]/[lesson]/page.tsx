import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getMdxByRelativePath } from '@/lib/mdx'
import { getAllLessons, getLesson, getNextLesson } from '@/lib/faithmasters/lessons'
import { ids } from '@/lib/seo/graph'
import { pageMetadata } from '@/lib/seo/metadata'
import { generateBreadcrumbSchema } from '@/lib/seo/schema'
import LessonFormats from '@/components/faithmasters/LessonFormats'
import { buttons } from '@/components/faithmasters/styles'
import { faithmasters, SITE_URL } from '@/lib/brand'

type Params = { params: Promise<{ series: string; lesson: string }> }

// Lessons are built ahead of time from the published files; any other address is a 404
export const dynamicParams = false

export function generateStaticParams() {
  return getAllLessons().map((lesson) => ({ series: lesson.series, lesson: lesson.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { series, lesson: slug } = await params
  const lesson = getLesson(series, slug)
  if (!lesson) return { title: 'Lesson not found' }

  return pageMetadata({
    title: `${lesson.title} — ${faithmasters.name}`,
    description: lesson.summary ?? [lesson.title, lesson.scripture, faithmasters.byline].filter(Boolean).join('. '),
    path: lesson.href,
    type: 'article',
    image: '/faithmasters/opengraph-image',
  })
}

export default async function LessonPage({ params }: Params) {
  const { series, lesson: slug } = await params
  const lesson = getLesson(series, slug)
  if (!lesson) notFound()

  const mdx = lesson.hasText ? await getMdxByRelativePath(`bible-study/${lesson.series}/${lesson.slug}.mdx`) : null
  const track = faithmasters.tracks.find((item) => item.id === lesson.track)
  const next = getNextLesson(lesson)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LearningResource',
            name: lesson.title,
            description: lesson.summary,
            url: `${SITE_URL}${lesson.href}`,
            datePublished: lesson.date,
            isAccessibleForFree: true,
            author: { '@id': ids.person },
            isPartOf: { '@id': ids.initiative('scripture') },
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: SITE_URL },
              { name: faithmasters.name, url: `${SITE_URL}/faithmasters` },
              { name: lesson.title, url: `${SITE_URL}${lesson.href}` }
            ])
          )
        }}
      />

      <article className="mx-auto max-w-3xl px-4 sm:px-6 py-10 md:py-16">
        <Link href={`/faithmasters#${lesson.track}`} className="inline-flex min-h-[44px] items-center font-medium underline">
          Back to {track?.title}
        </Link>

        <header className="mt-4">
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-faith-teal">{lesson.title}</h1>
          {lesson.scripture && <p className="mt-2 text-lg font-medium text-faith-sage">{lesson.scripture}</p>}
          {lesson.summary && <p className="mt-4 text-lg leading-relaxed">{lesson.summary}</p>}
        </header>

        <div className="mt-8">
          <LessonFormats title={lesson.title} formats={lesson.formats} audio={lesson.audio} youtubeId={lesson.youtubeId}>
            {mdx?.content}
          </LessonFormats>
        </div>

        {lesson.guide && (
          <p className="mt-10">
            <a href={lesson.guide.href} download className={buttons.outline}>{lesson.guide.label}</a>
          </p>
        )}

        {next && (
          <p className="mt-10 border-t border-black/10 pt-6">
            <span className="block text-sm text-faith-sage">Next lesson</span>
            <Link href={next.href} className="mt-1 inline-block text-lg font-semibold underline">{next.title}</Link>
          </p>
        )}
      </article>
    </>
  )
}
