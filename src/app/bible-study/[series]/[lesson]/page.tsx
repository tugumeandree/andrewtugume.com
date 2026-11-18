import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getMdxByRelativePath } from '@/lib/mdx'
import { bibleStudy } from '@/lib/brand'

type Params = { params: Promise<{ series: string; lesson: string }> }

const SLUG = /^[a-z0-9-]+$/

// Lessons live in content/bible-study/<series>/<lesson>.mdx. Only plain slugs are
// accepted so a URL can never reach files outside that directory.
async function loadLesson(series: string, lesson: string) {
  if (!SLUG.test(series) || !SLUG.test(lesson)) return null
  return getMdxByRelativePath(`bible-study/${series}/${lesson}.mdx`)
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { series, lesson } = await params
  const result = await loadLesson(series, lesson)
  if (!result) return { title: 'Lesson not found' }

  return {
    title: `${result.frontmatter.title} — ${bibleStudy.name}`,
    description: result.frontmatter.summary,
    alternates: {
      canonical: `https://andrewtugume.com/bible-study/${series}/${lesson}`
    }
  }
}

export default async function LessonPage({ params }: Params) {
  const { series, lesson } = await params
  const result = await loadLesson(series, lesson)
  if (!result) notFound()

  return (
    <article className="max-w-3xl mx-auto">
      <Link href="/bible-study" className="text-sm font-semibold text-scripture">← {bibleStudy.name}</Link>
      <header className="mt-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-scripture">{result.frontmatter.title}</h1>
        {result.frontmatter.scripture && <p className="mt-2 text-gray-700">{result.frontmatter.scripture}</p>}
      </header>
      <div className="mt-8 space-y-4 leading-relaxed text-gray-800">{result.content}</div>
    </article>
  )
}
