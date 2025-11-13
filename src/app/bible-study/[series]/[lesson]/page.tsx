import React from 'react'
import { getMdxByRelativePath } from '../../../../lib/mdx'

export default async function LessonPage({ params }: { params: { series: string; lesson: string } }) {
  const { series, lesson } = params
  const rel = `${series}/${lesson}.mdx`
  const result = await getMdxByRelativePath(rel)
  if (!result) {
    return (
      <section>
        <h2 className="text-2xl font-semibold">Not found</h2>
        <p className="mt-3 text-gray-700">Lesson not found.</p>
      </section>
    )
  }

  return (
    <article>
      <header>
        <h1 className="text-2xl font-semibold">{result.frontmatter.title}</h1>
      </header>
      <div className="prose max-w-none mt-6">
        {result.content}
      </div>
    </article>
  )
}
