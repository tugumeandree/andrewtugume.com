import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/seo/schema'

export const metadata: Metadata = {
  title: 'TechMasters — Technology, Product and Innovation Mastery',
  description: 'TechMasters is structured mastery coaching for developers and technical founders who want to build real-world solutions.',
  alternates: {
    canonical: 'https://andrewtugume.com/masters/techmasters'
  }
}

export default function TechMasters() {
  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://andrewtugume.com' },
              { name: 'TechMasters', url: 'https://andrewtugume.com/masters/techmasters' }
            ])
          )
        }}
      />

      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <p className="text-sm font-semibold tracking-wide text-accent uppercase">TechMasters</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-semibold text-primary">Technology, Product and Innovation Mastery</h1>
        <p className="mt-4 text-gray-700 max-w-3xl">
          TechMasters is for builders who want to create technology that solves real economic problems.
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
            <li>Developers moving from delivery to systems leadership.</li>
            <li>Technical founders building real products and durable teams.</li>
            <li>Innovation leaders who want execution discipline and clarity.</li>
          </ul>
        </div>
        <div className="bg-white border border-black/5 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-primary">Core pillars</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li>Product thinking</li>
            <li>Systems architecture</li>
            <li>Research & development</li>
            <li>Technical execution discipline</li>
            <li>Monetization & scale</li>
          </ul>
        </div>
      </section>

      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold text-primary">What is included</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-black/5 p-5">
            <h3 className="text-lg font-semibold text-primary">Weekly</h3>
            <p className="mt-2 text-sm text-gray-700">Structured coaching sessions with technical scorecards and execution reviews.</p>
          </div>
          <div className="rounded-xl border border-black/5 p-5">
            <h3 className="text-lg font-semibold text-primary">Monthly</h3>
            <p className="mt-2 text-sm text-gray-700">Meetups for product teardown, architecture reviews, and peer critique.</p>
          </div>
          <div className="rounded-xl border border-black/5 p-5">
            <h3 className="text-lg font-semibold text-primary">Quarterly</h3>
            <p className="mt-2 text-sm text-gray-700">Performance challenges focused on shipping measurable product outcomes.</p>
          </div>
        </div>
      </section>

      <section className="bg-white border border-black/5 rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-primary">Expected outcomes</h2>
        <ul className="mt-4 space-y-2 text-sm text-gray-700">
          <li>A clear product execution roadmap and delivery cadence.</li>
          <li>Stronger technical leadership and decision discipline.</li>
          <li>Real-world technology that solves economic problems.</li>
        </ul>
      </section>

      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold text-primary">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-primary">How long is the program?</h3>
            <p className="mt-2 text-sm text-gray-700">TechMasters is a 6-month structured cohort. Extensions are available for continued accountability.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">What is the time commitment?</h3>
            <p className="mt-2 text-sm text-gray-700">One weekly coaching session (60-90 minutes), one monthly meetup, and quarterly performance reviews. Plus execution time for building.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">Do I need to know how to code?</h3>
            <p className="mt-2 text-sm text-gray-700">Yes. TechMasters is for technical builders—developers, engineers, and technical founders who write code.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">Is this about learning new frameworks?</h3>
            <p className="mt-2 text-sm text-gray-700">No. This is about product thinking, systems design, and shipping technology that solves real problems. Not tutorial chasing.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">Can I join mid-cohort?</h3>
            <p className="mt-2 text-sm text-gray-700">No. Cohorts start together for peer accountability and shared momentum.</p>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white rounded-2xl p-10 md:p-14">
        <h2 className="text-3xl font-semibold">Ready to apply?</h2>
        <p className="mt-3 text-white/80">TechMasters is a performance system for serious builders.</p>
        <div className="mt-6">
          <Link href="/apply" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/90">
            Apply for Mastery Coaching
          </Link>
        </div>
      </section>
    </div>
  )
}
