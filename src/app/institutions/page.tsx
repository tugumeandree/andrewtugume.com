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
        <div className="bg-white border border-black/5 rounded-2xl p-6">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase">As an Educator</p>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li><Link href="/schools/qraft-academy" className="hover:text-primary">Qraft Academy</Link></li>
            <li><Link href="/schools/chariot-leadership" className="hover:text-primary">Chariot Leadership Institute</Link></li>
            <li><Link href="/schools/nations-bible" className="hover:text-primary">Nations Knowledge Community</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-black/5 rounded-2xl p-6">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase">As a Technologist</p>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li><Link href="/institutions/qraft-labs" className="hover:text-primary">Qraft Labs</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-black/5 rounded-2xl p-6">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase">As an Investor</p>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li><Link href="/institutions/qraft-capital" className="hover:text-primary">Qraft Capital</Link></li>
          </ul>
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
