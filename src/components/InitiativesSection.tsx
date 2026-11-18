import React from 'react'
import Link from 'next/link'
import SectionHeading from '@/components/SectionHeading'
import { initiatives, type Accent } from '@/lib/brand'

const cardStyles: Record<Accent, { card: string; category: string; title: string; body: string; cta: string }> = {
  work: {
    card: 'bg-work text-white',
    category: 'text-work-accent',
    title: 'text-white',
    body: 'text-white/80',
    cta: 'bg-work-accent text-work hover:bg-white',
  },
  influence: {
    card: 'bg-influence-light',
    category: 'text-influence',
    title: 'text-influence italic',
    body: 'text-gray-800',
    cta: 'bg-influence text-white hover:bg-primary',
  },
  scripture: {
    card: 'bg-scripture-light',
    category: 'text-scripture-warm',
    title: 'text-scripture',
    body: 'text-gray-800',
    cta: 'bg-scripture text-white hover:bg-primary',
  },
}

export default function InitiativesSection() {
  return (
    <section id="initiatives" className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          align="center"
          eyebrow="Three Ways to Engage"
          title="Choose where you want to grow."
          intro="Two programmes for developing personal capital, and a distinct initiative for studying Scripture and applying it to everyday life."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {initiatives.map((initiative) => {
            const style = cardStyles[initiative.id]
            return (
              <article key={initiative.id} className={`flex flex-col rounded-3xl p-8 md:p-10 ${style.card}`}>
                <p className={`text-xs font-semibold tracking-[0.2em] uppercase ${style.category}`}>{initiative.category}</p>
                <h3 className={`mt-4 text-3xl font-semibold leading-tight ${style.title}`}>{initiative.name}</h3>
                <p className={`mt-4 flex-1 text-base leading-relaxed ${style.body}`}>{initiative.summary}</p>
                <Link
                  href={initiative.href}
                  className={`mt-8 inline-flex w-fit items-center rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:no-underline ${style.cta}`}
                >
                  {initiative.cta} →
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
