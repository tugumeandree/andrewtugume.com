import React from 'react'
import type { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/seo/schema'

export const metadata: Metadata = {
  title: 'Apply for Mastery Coaching',
  description: 'Apply to the next cohort of Andrew Tugume’s mastery coaching programs.',
  alternates: {
    canonical: 'https://andrewtugume.com/apply'
  }
}

export default function Apply() {
  return (
    <div className="space-y-10">
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

      <section className="bg-primary text-white rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold">Application steps</h2>
        <ol className="mt-4 space-y-3 text-sm text-white/80 list-decimal list-inside">
          <li>Submit the application form.</li>
          <li>Complete a short intake interview.</li>
          <li>Receive your cohort placement and onboarding.</li>
        </ol>
        <div className="mt-6">
          <a
            href="mailto:andrewtugume2@gmail.com?subject=Mastery%20Coaching%20Application"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/90"
          >
            Start Application
          </a>
          <p className="mt-3 text-xs text-white/70">Limited intake per cohort.</p>
        </div>
      </section>
    </div>
  )
}
