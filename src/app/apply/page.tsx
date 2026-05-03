import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/seo/schema'

export const metadata: Metadata = {
  title: 'Apply for Mastery Coaching',
  description: 'Apply directly via WhatsApp, phone call, or email for the next mastery coaching cohort.',
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
          The mastery programs are high-touch and cohort-based. Apply directly via WhatsApp, phone call, or email to join the next intake for WorkMasters, TechMasters, or CapitalMasters.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-primary mb-6">Who these programs are for</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white border border-black/5 rounded-2xl overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src="https://res.cloudinary.com/dwa3soopc/image/upload/v1777800891/Andrew%20Bio%20Photos/WorkMasters/reduce_words___i_need_202605031233_a05fzr.jpg"
                alt="WorkMasters"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-primary">WorkMasters</h3>
              <p className="mt-3 text-sm text-gray-700">Operators and managers stepping into leadership. Founders building execution discipline.</p>
            </div>
          </div>
          <div className="bg-white border border-black/5 rounded-2xl overflow-hidden">
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-primary">TechMasters</h3>
              <p className="mt-3 text-sm text-gray-700">Developers and technical founders. Builders shipping real-world solutions.</p>
              <Link
                href="/techmasters"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white hover:bg-black"
              >
                Explore TechMasters
              </Link>
            </div>
          </div>
          <div className="bg-white border border-black/5 rounded-2xl overflow-hidden">
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-primary">CapitalMasters</h3>
              <p className="mt-3 text-sm text-gray-700">Operators ready to move from income to ownership. Disciplined investors.</p>
            </div>
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
              <h3 className="text-lg font-semibold text-primary">Contact directly</h3>
              <p className="mt-1 text-sm text-gray-700">Send a WhatsApp message, call, or email with your name, goals, and preferred program.</p>
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

      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold text-primary mb-3">Apply Directly</h2>
        <p className="text-sm text-gray-700 max-w-3xl">
          Choose any channel below and share your full name, the program you want to join, and your current goals.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <a
            href="https://wa.me/256755017384"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-black"
          >
            WhatsApp
          </a>
          <a
            href="tel:+256755017384"
            className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
          >
            Call +256 755 017 384
          </a>
          <a
            href="mailto:andrewtugume2@gmail.com?subject=Mastery%20Coaching%20Application"
            className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
          >
            Email Application
          </a>
        </div>

        <p className="mt-5 text-xs text-gray-600">
          Response time is usually within 1-2 business days.
        </p>
      </section>

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
