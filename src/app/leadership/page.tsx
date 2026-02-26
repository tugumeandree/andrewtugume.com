import React from 'react'
import Link from 'next/link'

export default function LeadershipSystems() {
  return (
    <div className="space-y-12">
      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <p className="text-sm font-semibold tracking-wide text-accent uppercase">Leadership Systems</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-semibold text-primary">Build teams that execute</h1>
        <p className="mt-4 text-gray-700 max-w-3xl">
          Leadership is a system. These insights focus on governance, clarity, and performance discipline.
        </p>
        <div className="mt-6">
          <Link href="/workmasters" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-black">
            Explore WorkMasters
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="bg-white border border-black/5 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-primary">Execution discipline</h2>
          <p className="mt-3 text-sm text-gray-700">Build weekly rhythms that keep teams focused and accountable.</p>
          <Link href="/resources" className="mt-4 inline-flex text-sm font-semibold text-primary">Browse resources →</Link>
        </article>
        <article className="bg-white border border-black/5 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-primary">Decision governance</h2>
          <p className="mt-3 text-sm text-gray-700">Create systems for prioritization, escalation, and ownership clarity.</p>
          <Link href="/blog" className="mt-4 inline-flex text-sm font-semibold text-primary">Read insights →</Link>
        </article>
      </section>

      <section className="bg-primary text-white rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold">Lead with structure</h2>
        <p className="mt-3 text-white/80">Mastery coaching turns leadership intent into repeatable execution.</p>
        <div className="mt-6">
          <Link href="/apply" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/90">
            Apply for Mastery Coaching
          </Link>
        </div>
      </section>
    </div>
  )
}
