import React from 'react'
import Link from 'next/link'

export default function KnowledgeLibrary() {
  return (
    <div className="space-y-12">
      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <p className="text-sm font-semibold tracking-wide text-accent uppercase">Knowledge Library</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-semibold text-primary">Focused insights for ambitious operators</h1>
        <p className="mt-4 text-gray-700 max-w-3xl">
          Short, high-signal learning briefs that reinforce discipline, systems thinking, and execution.
        </p>
        <div className="mt-6">
          <Link href="/apply" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-black">
            Apply for Mastery Coaching
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: 'Execution Rhythm Playbook',
            description: 'A weekly cadence for planning, delivering, and reviewing performance.',
            link: '/resources'
          },
          {
            title: 'Leadership Systems Brief',
            description: 'How to build operating systems that scale your team and decisions.',
            link: '/blog'
          },
          {
            title: 'Capital Discipline Notes',
            description: 'A framework for risk, allocation, and long-term ownership thinking.',
            link: '/masters/capitalmasters'
          }
        ].map((item) => (
          <article key={item.title} className="bg-white border border-black/5 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-primary">{item.title}</h2>
            <p className="mt-3 text-sm text-gray-700">{item.description}</p>
            <Link href={item.link} className="mt-4 inline-flex text-sm font-semibold text-primary">
              Explore →
            </Link>
          </article>
        ))}
      </section>

      <section className="bg-primary text-white rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold">Ready for structured mastery?</h2>
        <p className="mt-3 text-white/80">The library is a preview of the systems you build inside the cohort.</p>
        <div className="mt-6">
          <Link href="/apply" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/90">
            Apply for Mastery Coaching
          </Link>
        </div>
      </section>
    </div>
  )
}
