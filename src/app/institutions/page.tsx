import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/seo/schema'

export const metadata: Metadata = {
  title: 'Institutions',
  description: 'Organizations founded by Andrew Tugume across education, leadership, technology, and capital development.',
  alternates: {
    canonical: 'https://andrewtugume.com/institutions'
  }
}

export default function Institutions() {
  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://andrewtugume.com' },
              { name: 'Institutions', url: 'https://andrewtugume.com/institutions' }
            ])
          )
        }}
      />

      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-semibold text-primary">The Institutions Behind the Ecosystem</h1>
        <p className="mt-4 text-gray-700 max-w-3xl">Beyond coaching, I have founded organizations focused on education, leadership, technology, and capital development.</p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div>
          <p className="text-xs font-semibold tracking-wide text-accent uppercase">As an Educator</p>
          <div className="mt-4 space-y-3 lg:space-y-4">
            <article className="bg-white border border-black/5 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-primary">Qraft Academy</h3>
              <p className="mt-2 text-sm text-gray-700">High-performance learning for ambitious professionals and entrepreneurs.</p>
              <Link href="/schools/qraft-academy" className="mt-4 inline-flex text-sm font-semibold text-primary">
                Learn more →
              </Link>
            </article>
            <article className="bg-white border border-black/5 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-primary">Chariot Leadership Institute</h3>
              <p className="mt-2 text-sm text-gray-700">Leadership systems and execution discipline for operators.</p>
              <Link href="/schools/chariot-leadership" className="mt-4 inline-flex text-sm font-semibold text-primary">
                Learn more →
              </Link>
            </article>
            <article className="bg-white border border-black/5 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-primary">Nations Knowledge Community</h3>
              <p className="mt-2 text-sm text-gray-700">Professional knowledge system for disciplined growth.</p>
              <Link href="/schools/nations-bible" className="mt-4 inline-flex text-sm font-semibold text-primary">
                Learn more →
              </Link>
            </article>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-wide text-accent uppercase">As a Technologist</p>
          <div className="mt-4 space-y-3 lg:space-y-4">
            <article className="bg-white border border-black/5 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-primary">Qraft Labs</h3>
              <p className="mt-2 text-sm text-gray-700">Technology products built with disciplined execution and real-world impact.</p>
              <Link href="/institutions/qraft-labs" className="mt-4 inline-flex text-sm font-semibold text-primary">
                Learn more →
              </Link>
            </article>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-wide text-accent uppercase">As an Investor</p>
          <div className="mt-4 space-y-3 lg:space-y-4">
            <article className="bg-white border border-black/5 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-primary">Qraft Capital</h3>
              <p className="mt-2 text-sm text-gray-700">Investment strategy and capital governance for long-term wealth.</p>
              <Link href="/institutions/qraft-capital" className="mt-4 inline-flex text-sm font-semibold text-primary">
                Learn more →
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold">Apply for Mastery Coaching</h2>
        <p className="mt-3 text-white/80">The coaching programs are the operating system behind these institutions.</p>
        <div className="mt-6">
          <Link href="/apply" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/90">
            Apply for Mastery Coaching
          </Link>
        </div>
      </section>
    </div>
  )
}
