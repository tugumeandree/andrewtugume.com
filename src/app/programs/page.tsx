import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/seo/schema'

export const metadata: Metadata = {
  title: 'Mastery Coaching Programs',
  description: 'Three structured mastery coaching programs: WorkMasters, TechMasters, and CapitalMasters.',
  alternates: {
    canonical: 'https://andrewtugume.com/programs'
  }
}

export default function Programs() {
  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://andrewtugume.com' },
              { name: 'Programs', url: 'https://andrewtugume.com/programs' }
            ])
          )
        }}
      />

      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-semibold text-primary">The Mastery Coaching Programs</h1>
        <p className="mt-4 text-gray-700 max-w-3xl">
          These are operating systems for serious growth. Each program includes weekly coaching, monthly meetups, quarterly performance challenges, and accountability tracking.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <article className="bg-white border border-black/5 rounded-2xl p-6">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase">WorkMasters</p>
          <h2 className="mt-2 text-xl font-semibold text-primary">Career, Leadership and Execution Mastery</h2>
          <p className="mt-3 text-sm text-gray-700">For professionals and entrepreneurs who want to accelerate income, sharpen positioning, and build structured growth.</p>
          <Link href="/workmasters" className="mt-4 inline-flex text-sm font-semibold text-primary">
            Explore WorkMasters →
          </Link>
        </article>
        <article className="bg-white border border-black/5 rounded-2xl p-6">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase">TechMasters</p>
          <h2 className="mt-2 text-xl font-semibold text-primary">Technology, Product and Innovation Mastery</h2>
          <p className="mt-3 text-sm text-gray-700">For developers and technical founders who want to build real-world solutions.</p>
          <Link href="/masters/techmasters" className="mt-4 inline-flex text-sm font-semibold text-primary">
            Explore TechMasters →
          </Link>
        </article>
        <article className="bg-white border border-black/5 rounded-2xl p-6">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase">CapitalMasters</p>
          <h2 className="mt-2 text-xl font-semibold text-primary">Investment and Wealth Mastery</h2>
          <p className="mt-3 text-sm text-gray-700">For disciplined individuals ready to move from income to ownership.</p>
          <Link href="/masters/capitalmasters" className="mt-4 inline-flex text-sm font-semibold text-primary">
            Explore CapitalMasters →
          </Link>
        </article>
      </section>

      <section className="bg-primary text-white rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold">Apply for the next cohort</h2>
        <p className="mt-3 text-white/80">One primary intake. Limited cohort size. Structured accountability.</p>
        <div className="mt-6">
          <Link href="/apply" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/90">
            Apply for Mastery Coaching
          </Link>
        </div>
      </section>
    </div>
  )
}
