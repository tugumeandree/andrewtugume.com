import React from 'react'
import Link from 'next/link'

export default function MasteryNetwork() {
  return (
    <div className="space-y-12">
      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <p className="text-sm font-semibold tracking-wide text-accent uppercase">Mastery Network</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-semibold text-primary">A focused community for operators</h1>
        <p className="mt-4 text-gray-700 max-w-3xl">Cohort members gain access to a private network for accountability, feedback, and execution support.</p>
        <div className="mt-6">
          <Link href="/apply" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-black">
            Apply for Mastery Coaching
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: 'Weekly check-ins',
            description: 'Share progress and remove bottlenecks with peers.'
          },
          {
            title: 'Operator feedback',
            description: 'Get structured feedback on execution and systems.'
          },
          {
            title: 'Cohort accountability',
            description: 'Stay consistent with a shared performance rhythm.'
          }
        ].map((item) => (
          <article key={item.title} className="bg-white border border-black/5 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-primary">{item.title}</h2>
            <p className="mt-3 text-sm text-gray-700">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="bg-primary text-white rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold">Private access is cohort-only</h2>
        <p className="mt-3 text-white/80">Apply to join the next intake and unlock the network.</p>
        <div className="mt-6">
          <Link href="/apply" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/90">
            Apply for Mastery Coaching
          </Link>
        </div>
      </section>
    </div>
  )
}
