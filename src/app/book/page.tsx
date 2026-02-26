import React from 'react'
import Link from 'next/link'

export default function Engagements() {
  return (
    <div className="space-y-12">
      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <p className="text-sm font-semibold tracking-wide text-accent uppercase">Engagements</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-semibold text-primary">Book Andrew for strategic engagements</h1>
        <p className="mt-4 text-gray-700 max-w-3xl">Speaking, advisory, and team training built around execution, systems, and capital discipline.</p>
        <div className="mt-6">
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-black">
            Request an Engagement
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: 'Keynotes',
            description: 'High-signal talks for leadership teams and events.'
          },
          {
            title: 'Workshops',
            description: 'Hands-on sessions for operating systems and execution.'
          },
          {
            title: 'Advisory sessions',
            description: 'Strategic planning and governance for founders.'
          }
        ].map((item) => (
          <article key={item.title} className="bg-white border border-black/5 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-primary">{item.title}</h2>
            <p className="mt-3 text-sm text-gray-700">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="bg-primary text-white rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold">Need coaching instead?</h2>
        <p className="mt-3 text-white/80">Apply to the mastery programs for structured weekly coaching.</p>
        <div className="mt-6">
          <Link href="/apply" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/90">
            Apply for Mastery Coaching
          </Link>
        </div>
      </section>
    </div>
  )
}
