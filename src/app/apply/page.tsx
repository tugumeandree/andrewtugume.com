import React from 'react'
import type { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/seo/schema'
import ApplicationForm from '@/components/ApplicationForm'

export const metadata: Metadata = {
  title: 'Apply for Mastery Coaching',
  description: 'Apply to the next cohort of Andrew Tugume\'s mastery coaching programs.',
  alternates: {
    canonical: 'https://andrewtugume.com/apply'
  }
}

export default function Apply() {
  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://andrewtugume.com' },
              { name: 'Apply', url: 'https://andrewtugume.com/apply' }
            ])
          )
        }}
      />

      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-semibold text-primary">Apply for Mastery Coaching</h1>
        <p className="mt-4 text-gray-700 max-w-3xl">
          The mastery programs are high-touch and cohort-based. Apply to join the next intake for WorkMasters, TechMasters, or CapitalMasters.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-primary mb-6">Who these programs are for</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white border border-black/5 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-primary">WorkMasters</h3>
            <p className="mt-3 text-sm text-gray-700">Operators and managers stepping into leadership. Founders building execution discipline.</p>
          </div>
          <div className="bg-white border border-black/5 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-primary">TechMasters</h3>
            <p className="mt-3 text-sm text-gray-700">Developers and technical founders. Builders shipping real-world solutions.</p>
          </div>
          <div className="bg-white border border-black/5 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-primary">CapitalMasters</h3>
            <p className="mt-3 text-sm text-gray-700">Operators ready to move from income to ownership. Disciplined investors.</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="bg-white border border-black/5 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-primary">Weekly coaching</h2>
          <p className="mt-3 text-sm text-gray-700">Structured sessions with goals, scorecards, and accountability reviews.</p>
        </div>
        <div className="bg-white border border-black/5 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-primary">Monthly meetups</h2>
          <p className="mt-3 text-sm text-gray-700">Private sessions for feedback, playbooks, and real-world case studies.</p>
        </div>
        <div className="bg-white border border-black/5 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-primary">Quarterly challenges</h2>
          <p className="mt-3 text-sm text-gray-700">Performance sprints designed to produce measurable outcomes.</p>
        </div>
      </section>

      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold text-primary">Application steps</h2>
        <ol className="mt-6 space-y-4">
          <li className="flex gap-4">
            <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white text-sm font-semibold">1</span>
            <div>
              <h3 className="text-lg font-semibold text-primary">Submit your application</h3>
              <p className="mt-1 text-sm text-gray-700">Tell us about yourself, your goals, and which program interests you.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white text-sm font-semibold">2</span>
            <div>
              <h3 className="text-lg font-semibold text-primary">Quick intake interview</h3>
              <p className="mt-1 text-sm text-gray-700">We'll confirm fit, discuss your expectations, and answer questions.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white text-sm font-semibold">3</span>
            <div>
              <h3 className="text-lg font-semibold text-primary">Cohort placement and onboarding</h3>
              <p className="mt-1 text-sm text-gray-700">You'll receive your cohort start date and full program details.</p>
            </div>
          </li>
        </ol>
      </section>

      <ApplicationForm />

      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold text-primary mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-primary">When does the next cohort start?</h3>
            <p className="mt-2 text-sm text-gray-700">Cohorts start quarterly. Exact dates are confirmed after your intake interview.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">What's the time commitment?</h3>
            <p className="mt-2 text-sm text-gray-700">One weekly coaching session (60-90 minutes), one monthly meetup, and quarterly performance reviews. Plus execution time for your goals.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">Do I need to commit to the full 6 months?</h3>
            <p className="mt-2 text-sm text-gray-700">Yes. The programs are structured for 6-month cohorts. We don't accept mid-cohort joiners to preserve accountability and group dynamics.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">What if I can't make the weekly session?</h3>
            <p className="mt-2 text-sm text-gray-700">Weekly sessions are mandatory. If you miss more than two in a cohort, you'll be asked to apply for the next intake.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">How many people are in each cohort?</h3>
            <p className="mt-2 text-sm text-gray-700">Cohorts are capped at 8-12 participants to maintain high-touch accountability and real feedback.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
