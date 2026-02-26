import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generateBreadcrumbSchema, generateCourseSchema } from '@/lib/seo/schema'

export const metadata: Metadata = {
  title: 'WorkMasters — Career, Leadership and Execution Mastery',
  description: 'WorkMasters is structured mastery coaching for ambitious professionals and founders who want disciplined career and business growth.',
  alternates: {
    canonical: 'https://andrewtugume.com/workmasters'
  }
}

export default function WorkMasters() {
  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateCourseSchema(
              'WorkMasters: Career, Leadership and Execution Mastery',
              'Structured mastery coaching for ambitious professionals and founders.',
              'workmasters',
              'Andrew Tugume'
            )
          )
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://andrewtugume.com' },
              { name: 'WorkMasters', url: 'https://andrewtugume.com/workmasters' }
            ])
          )
        }}
      />

      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <p className="text-sm font-semibold tracking-wide text-accent uppercase">WorkMasters</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-semibold text-primary">Career, Leadership and Execution Mastery</h1>
        <p className="mt-4 text-gray-700 max-w-3xl">
          WorkMasters is for builders who refuse average careers and want structured progression.
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
            <li>Operators and managers stepping into bigger leadership scopes.</li>
            <li>Founders who need execution discipline and business model clarity.</li>
            <li>Professionals ready to build career capital and negotiation leverage.</li>
          </ul>
        </div>
        <div className="bg-white border border-black/5 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-primary">Core pillars</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li>Career capital strategy</li>
            <li>Business model clarity</li>
            <li>Leadership systems</li>
            <li>Productivity architecture</li>
            <li>Raising capital with confidence</li>
          </ul>
        </div>
      </section>

      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold text-primary">What is included</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-black/5 p-5">
            <h3 className="text-lg font-semibold text-primary">Weekly</h3>
            <p className="mt-2 text-sm text-gray-700">Structured coaching sessions with goals, scorecards, and execution reviews.</p>
          </div>
          <div className="rounded-xl border border-black/5 p-5">
            <h3 className="text-lg font-semibold text-primary">Monthly</h3>
            <p className="mt-2 text-sm text-gray-700">In-person or virtual meetups for playbooks, peer accountability, and case studies.</p>
          </div>
          <div className="rounded-xl border border-black/5 p-5">
            <h3 className="text-lg font-semibold text-primary">Quarterly</h3>
            <p className="mt-2 text-sm text-gray-700">Performance challenges that force measurable progress and real outcomes.</p>
          </div>
        </div>
      </section>

      <section className="bg-white border border-black/5 rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-primary">Expected outcomes</h2>
        <ul className="mt-4 space-y-2 text-sm text-gray-700">
          <li>Clear career roadmap with leverage and negotiating power.</li>
          <li>Execution systems that remove chaos from weekly priorities.</li>
          <li>Leadership confidence built on data and accountability.</li>
        </ul>
      </section>

      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold text-primary">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-primary">How long is the program?</h3>
            <p className="mt-2 text-sm text-gray-700">WorkMasters is a 6-month structured cohort. Extensions are available for continued accountability.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">What is the time commitment?</h3>
            <p className="mt-2 text-sm text-gray-700">One weekly coaching session (60-90 minutes), one monthly meetup, and quarterly performance reviews. Plus execution time for your goals.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">Is this for employees or entrepreneurs?</h3>
            <p className="mt-2 text-sm text-gray-700">Both. WorkMasters serves professionals building career capital and founders building scalable businesses.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">What if I'm not making progress?</h3>
            <p className="mt-2 text-sm text-gray-700">Weekly accountability means we catch stalls early. If you're not executing, we adjust strategy or scope.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">Can I join mid-cohort?</h3>
            <p className="mt-2 text-sm text-gray-700">No. Cohorts start together for peer accountability and shared momentum.</p>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white rounded-2xl p-10 md:p-14">
        <h2 className="text-3xl font-semibold">Ready to apply?</h2>
        <p className="mt-3 text-white/80">WorkMasters is a performance system. Apply if you are ready for accountability.</p>
        <div className="mt-6">
          <Link href="/apply" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/90">
            Apply for Mastery Coaching
          </Link>
        </div>
      </section>
    </div>
  )
}
