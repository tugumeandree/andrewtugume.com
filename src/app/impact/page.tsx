import React from 'react'
import Link from 'next/link'

export default function Results() {
  return (
    <div className="space-y-12">
      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <p className="text-sm font-semibold tracking-wide text-accent uppercase">Results</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-semibold text-primary">Outcomes built on structure</h1>
        <p className="mt-4 text-gray-700 max-w-3xl">Performance is the byproduct of disciplined systems and clear accountability.</p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          { value: '92%', label: 'Cohort completion rate' },
          { value: '4.8/5', label: 'Average cohort satisfaction' },
          { value: '3x', label: 'Median execution improvement' }
        ].map((metric) => (
          <div key={metric.label} className="bg-white border border-black/5 rounded-2xl p-6 text-center">
            <div className="text-3xl font-semibold text-primary">{metric.value}</div>
            <div className="mt-2 text-sm text-gray-600">{metric.label}</div>
          </div>
        ))}
      </section>

      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold text-primary">What shifts for operators</h2>
        <ul className="mt-4 space-y-2 text-sm text-gray-700">
          <li>Clear execution cadence and team accountability.</li>
          <li>Sharper product and market decisions.</li>
          <li>Capital discipline with fewer unforced errors.</li>
        </ul>
      </section>

      <section className="bg-primary text-white rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold">Build your results</h2>
        <p className="mt-3 text-white/80">The cohort is built for measurable progress, not hype.</p>
        <div className="mt-6">
          <Link href="/apply" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/90">
            Apply for Mastery Coaching
          </Link>
        </div>
      </section>
    </div>
  )
}
