import React from 'react'
import Link from 'next/link'

export default function PrivateAdvisory() {
  return (
    <div className="space-y-12">
      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <p className="text-sm font-semibold tracking-wide text-accent uppercase">Private Advisory</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-semibold text-primary">High-trust advisory for founders and operators</h1>
        <p className="mt-4 text-gray-700 max-w-3xl">Limited availability for strategic clarity, execution systems, and capital discipline.</p>
        <div className="mt-6">
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-black">
            Request Availability
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="bg-white border border-black/5 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-primary">Best fit</h2>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li>Founders scaling a product or team.</li>
            <li>Executives building execution cadence.</li>
            <li>Operators transitioning into ownership.</li>
          </ul>
        </article>
        <article className="bg-white border border-black/5 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-primary">Focus areas</h2>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li>Execution systems and KPIs.</li>
            <li>Decision governance and leadership rhythm.</li>
            <li>Capital strategy and risk discipline.</li>
          </ul>
        </article>
      </section>

      <section className="bg-primary text-white rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold">Prefer cohort-based coaching?</h2>
        <p className="mt-3 text-white/80">The mastery programs are the core path for structured growth.</p>
        <div className="mt-6">
          <Link href="/apply" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/90">
            Apply for Mastery Coaching
          </Link>
        </div>
      </section>
    </div>
  )
}
