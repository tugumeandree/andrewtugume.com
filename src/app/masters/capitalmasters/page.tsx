import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/seo/schema'

export const metadata: Metadata = {
  title: 'CapitalMasters — Investment and Wealth Mastery',
  description: 'CapitalMasters is structured mastery coaching for disciplined individuals ready to move from income to ownership.',
  alternates: {
    canonical: 'https://andrewtugume.com/masters/capitalmasters'
  }
}

export default function CapitalMasters() {
  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://andrewtugume.com' },
              { name: 'CapitalMasters', url: 'https://andrewtugume.com/masters/capitalmasters' }
            ])
          )
        }}
      />

      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <p className="text-sm font-semibold tracking-wide text-accent uppercase">CapitalMasters</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-semibold text-primary">Investment and Wealth Mastery</h1>
        <p className="mt-4 text-gray-700 max-w-3xl">
          CapitalMasters is for operators who want to think like investors and build durable wealth.
        </p>
        <div className="mt-6">
          <Link href="/apply" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-black">
            Apply for Mastery Coaching
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="bg-white border border-black/5 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-primary">Who it is for</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li>Professionals building an ownership mindset.</li>
            <li>Founders transitioning from income to capital strategy.</li>
            <li>Operators who want disciplined investment frameworks.</li>
          </ul>
        </div>
        <div className="bg-white border border-black/5 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-primary">Core pillars</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li>Investment frameworks</li>
            <li>Portfolio strategy</li>
            <li>Risk management</li>
            <li>Financial governance</li>
            <li>Long-term capital growth</li>
          </ul>
        </div>
      </section>

      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold text-primary">What is included</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-black/5 p-5">
            <h3 className="text-lg font-semibold text-primary">Weekly</h3>
            <p className="mt-2 text-sm text-gray-700">Capital strategy sessions with portfolio reviews and accountability.</p>
          </div>
          <div className="rounded-xl border border-black/5 p-5">
            <h3 className="text-lg font-semibold text-primary">Monthly</h3>
            <p className="mt-2 text-sm text-gray-700">Meetups focused on investment thesis, governance, and decision discipline.</p>
          </div>
          <div className="rounded-xl border border-black/5 p-5">
            <h3 className="text-lg font-semibold text-primary">Quarterly</h3>
            <p className="mt-2 text-sm text-gray-700">Performance challenges tied to portfolio goals and capital growth.</p>
          </div>
        </div>
      </section>

      <section className="bg-white border border-black/5 rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-primary">Expected outcomes</h2>
        <ul className="mt-4 space-y-2 text-sm text-gray-700">
          <li>A clear capital strategy and portfolio roadmap.</li>
          <li>Risk management habits that protect downside.</li>
          <li>Disciplined allocation for long-term ownership.</li>
        </ul>
      </section>

      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold text-primary">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-primary">How long is the program?</h3>
            <p className="mt-2 text-sm text-gray-700">CapitalMasters is a 6-month structured cohort. Extensions are available for continued accountability.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">What is the time commitment?</h3>
            <p className="mt-2 text-sm text-gray-700">One weekly session (60-90 minutes), one monthly meetup, and quarterly portfolio reviews. Plus execution time for your capital plan.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">Do I need to be a full-time investor?</h3>
            <p className="mt-2 text-sm text-gray-700">No. This is for operators and professionals who want disciplined investment systems alongside their primary work.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">Is this about trading or speculation?</h3>
            <p className="mt-2 text-sm text-gray-700">No. CapitalMasters focuses on long-term ownership, governance, and risk-managed portfolio strategy.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">Can I join mid-cohort?</h3>
            <p className="mt-2 text-sm text-gray-700">No. Cohorts start together for peer accountability and shared momentum.</p>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white rounded-2xl p-10 md:p-14">
        <h2 className="text-3xl font-semibold">Ready to apply?</h2>
        <p className="mt-3 text-white/80">CapitalMasters is a discipline-first program for serious operators.</p>
        <div className="mt-6">
          <Link href="/apply" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/90">
            Apply for Mastery Coaching
          </Link>
        </div>
      </section>
    </div>
  )
}
