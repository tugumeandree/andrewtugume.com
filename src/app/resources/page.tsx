import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/seo/schema'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Essays, insights, and tools for high-performance operators across career, technology, and capital.',
  alternates: {
    canonical: 'https://andrewtugume.com/resources'
  }
}

export default function Resources() {
  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://andrewtugume.com' },
              { name: 'Resources', url: 'https://andrewtugume.com/resources' }
            ])
          )
        }}
      />

      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-semibold text-primary">Resources</h1>
        <p className="mt-4 text-gray-700 max-w-3xl">Short, high-signal insights on execution, systems, and capital discipline.</p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="bg-white border border-black/5 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-primary">Insights</h2>
          <p className="mt-3 text-sm text-gray-700">Weekly notes on decision systems, leadership, and operator discipline.</p>
          <Link href="/blog" className="mt-4 inline-flex text-sm font-semibold text-primary">
            Visit the Blog →
          </Link>
        </article>
        <article className="bg-white border border-black/5 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-primary">Execution Tools</h2>
          <p className="mt-3 text-sm text-gray-700">Frameworks and checklists built from the mastery coaching playbooks.</p>
          <Link href="/tech-resources" className="mt-4 inline-flex text-sm font-semibold text-primary">
            Explore Tools →
          </Link>
        </article>
      </section>

      <section className="bg-primary text-white rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold">Apply for Mastery Coaching</h2>
        <p className="mt-3 text-white/80">Resources are a taste of the structured accountability inside the cohort.</p>
        <div className="mt-6">
          <Link href="/apply" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/90">
            Apply for Mastery Coaching
          </Link>
        </div>
      </section>
    </div>
  )
}
