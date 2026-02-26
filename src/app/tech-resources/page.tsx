import React from 'react'
import Link from 'next/link'

const tools = [
  {
    name: 'Execution Dashboard',
    description: 'Weekly scorecard template for tracking goals, KPIs, and accountability.',
    link: '#'
  },
  {
    name: 'Founder Operating System',
    description: 'Decision framework for prioritizing product, capital, and team actions.',
    link: '#'
  },
  {
    name: 'Capital Allocation Brief',
    description: 'Simple structure for evaluating opportunities and managing downside.',
    link: '#'
  }
]

export default function TechResources() {
  return (
    <div className="space-y-12">
      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-semibold text-primary">Execution Tools</h1>
        <p className="mt-4 text-gray-700 max-w-3xl">
          A curated library of systems and frameworks used inside the mastery coaching programs.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {tools.map((tool) => (
          <article key={tool.name} className="bg-white border border-black/5 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-primary">{tool.name}</h2>
            <p className="mt-3 text-sm text-gray-700">{tool.description}</p>
            <Link href={tool.link} className="mt-4 inline-flex text-sm font-semibold text-primary">
              Access tool →
            </Link>
          </article>
        ))}
      </section>

      <section className="bg-primary text-white rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold">Apply for Mastery Coaching</h2>
        <p className="mt-3 text-white/80">Want the full system and accountability? Apply to join the cohort.</p>
        <div className="mt-6">
          <Link href="/apply" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/90">
            Apply for Mastery Coaching
          </Link>
        </div>
      </section>
    </div>
  )
}
