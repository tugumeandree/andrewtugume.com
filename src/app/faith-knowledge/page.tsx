import React from 'react'
import Link from 'next/link'

export default function StrategicPrinciples() {
  return (
    <div className="space-y-12">
      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <p className="text-sm font-semibold tracking-wide text-accent uppercase">Strategic Principles</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-semibold text-primary">Operating principles for serious growth</h1>
        <p className="mt-4 text-gray-700 max-w-3xl">Clear thinking, disciplined execution, and resilient systems.</p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {[
          {
            title: 'Clarity',
            description: 'Define the mission, priorities, and measurable outcomes.'
          },
          {
            title: 'Discipline',
            description: 'Build habits and cadence that make execution automatic.'
          },
          {
            title: 'Governance',
            description: 'Create decision rules that protect focus and reduce noise.'
          },
          {
            title: 'Resilience',
            description: 'Design systems that endure volatility and scale responsibly.'
          }
        ].map((item) => (
          <article key={item.title} className="bg-white border border-black/5 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-primary">{item.title}</h2>
            <p className="mt-3 text-sm text-gray-700">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="bg-primary text-white rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold">Put the principles into practice</h2>
        <p className="mt-3 text-white/80">Mastery coaching turns principles into repeatable operating systems.</p>
        <div className="mt-6">
          <Link href="/apply" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/90">
            Apply for Mastery Coaching
          </Link>
        </div>
      </section>
    </div>
  )
}
