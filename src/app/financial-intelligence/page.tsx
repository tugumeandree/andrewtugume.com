import React from 'react'
import Link from 'next/link'

export default function CapitalIntelligence() {
  return (
    <div className="space-y-12">
      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <p className="text-sm font-semibold tracking-wide text-accent uppercase">Capital Intelligence</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-semibold text-primary">Move from income to ownership</h1>
        <p className="mt-4 text-gray-700 max-w-3xl">Disciplined frameworks for portfolio strategy, risk management, and long-term capital growth.</p>
        <div className="mt-6">
          <Link href="/masters/capitalmasters" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-black">
            Explore CapitalMasters
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: 'Investment frameworks',
            description: 'A structure for evaluating opportunities and expected returns.'
          },
          {
            title: 'Portfolio strategy',
            description: 'Allocation discipline across growth, income, and defensive capital.'
          },
          {
            title: 'Risk governance',
            description: 'Downside protection and decision rules that preserve capital.'
          }
        ].map((item) => (
          <article key={item.title} className="bg-white border border-black/5 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-primary">{item.title}</h2>
            <p className="mt-3 text-sm text-gray-700">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="bg-primary text-white rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold">Build a disciplined capital strategy</h2>
        <p className="mt-3 text-white/80">CapitalMasters is the structured program for serious operators.</p>
        <div className="mt-6">
          <Link href="/apply" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/90">
            Apply for Mastery Coaching
          </Link>
        </div>
      </section>
    </div>
  )
}
