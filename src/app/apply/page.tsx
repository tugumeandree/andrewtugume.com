import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/seo/schema'

export const metadata: Metadata = {
  title: 'Claim Your Spot',
  description: 'Apply for WorkMasters, Leadership Exchange, TechMasters, CourseMasters, CapitalMasters, or join the Workers & Leaders Bible Study.',
  alternates: {
    canonical: 'https://andrewtugume.com/apply'
  }
}

const MEET_URL = 'https://meet.google.com/jbq-qumi-ntf'

const tracks = [
  {
    label: 'Work & Leadership Mastery',
    tagline: 'Master your career, sharpen your leadership, and build on principles that govern both',
    programs: [
      {
        tag: 'WorkMasters',
        title: 'Career, Productivity and Management Mastery',
        description: 'For professionals, consultants, entrepreneurs, and investors who want to accelerate income, sharpen positioning, and build structured career or business growth.',
        image: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1780507670/WorkMasters_2_pthuuz.jpg',
        cta: 'Apply for WorkMasters',
        ctaHref: null,
        learnHref: '/workmasters',
      },
      {
        tag: 'Leadership Exchange',
        title: 'Peer Leadership and Strategic Exchange',
        description: 'A networked leadership forum for accountability, strategic review, and shared execution insights. For managers, executives, and founders.',
        image: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1780618459/ILSZ9458_11zon_meuy7y.jpg',
        cta: 'Inquire About Leadership Exchange',
        ctaHref: null,
        learnHref: '/contact',
      },
      {
        tag: 'Workers & Leaders Bible Study',
        title: 'Scripture as a Framework for Work, Leadership, and Stewardship',
        description: 'A free weekly online study for professionals, founders, and investors integrating biblical wisdom into careers, business, and leadership. Every Friday at 8 PM EAT on Google Meet.',
        image: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1781178700/workers_and_leaders_bible_study_vcs4fu.png',
        cta: 'Join This Friday\'s Study',
        ctaHref: MEET_URL,
        learnHref: '/bible-study',
      },
    ],
  },
  {
    label: 'Learning, Technology & Capital',
    tagline: 'The three disciplines through which work and leadership are built, scaled, and sustained',
    programs: [
      {
        tag: 'CourseMasters',
        title: 'Learning Design and Course Systems',
        description: 'For teams and organizations building high-performance training systems that scale knowledge and skill across their operations.',
        image: 'https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg',
        cta: 'Apply for CourseMasters',
        ctaHref: null,
        learnHref: '/masters/coursemasters',
      },
      {
        tag: 'TechMasters',
        title: 'Technology, Product and Innovation Mastery',
        description: 'For developers, technical founders, and innovation leaders who want to build real-world solutions and lead with technical discipline.',
        image: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1615551883/IMG_5942_c83b2h.jpg',
        cta: 'Apply for TechMasters',
        ctaHref: null,
        learnHref: '/techmasters',
      },
      {
        tag: 'CapitalMasters',
        title: 'Investment and Wealth Mastery',
        description: 'For disciplined individuals and operators ready to move from income to ownership and build durable, long-term wealth.',
        image: 'https://personalefinance.com/wp-content/uploads/Top-Characteristics-of-Finance-FAQ-What-are-Finance-Characteristics-Frequently-Asked-Questions.webp',
        cta: 'Apply for CapitalMasters',
        ctaHref: null,
        learnHref: '/masters/capitalmasters',
      },
    ],
  },
]

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

      {/* ── Hero ── */}
      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <p className="text-sm font-semibold tracking-widest text-accent uppercase">Claim Your Spot</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-primary max-w-3xl leading-tight">
          Choose your program. Start your mastery journey.
        </h1>
        <p className="mt-4 text-gray-700 max-w-3xl">
          Six programs. Two tracks. One mission: shaping the future of work and leadership through learning, technology, and capital. Apply directly via WhatsApp, call, or email.
        </p>
      </section>

      {/* ── Programs by track ── */}
      <div className="space-y-12">
        {tracks.map((track) => (
          <div key={track.label}>
            <div className="mb-6 pb-5 border-b-2 border-accent/20">
              <h2 className="text-2xl font-semibold text-primary">{track.label}</h2>
              <p className="mt-1 text-sm text-gray-600">{track.tagline}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {track.programs.map((program) => (
                <article
                  key={program.tag}
                  className="bg-white border border-black/5 rounded-2xl overflow-hidden flex flex-col hover:border-accent/30 hover:shadow-md transition-all"
                >
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.tag}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-xs font-semibold tracking-wide text-accent uppercase">
                      {program.tag}
                    </p>
                    <h3 className="mt-2 text-base font-semibold text-primary leading-snug">
                      {program.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-1">
                      {program.description}
                    </p>
                    <div className="mt-5 flex flex-col gap-2">
                      {program.ctaHref ? (
                        <a
                          href={program.ctaHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-black"
                        >
                          {program.cta}
                        </a>
                      ) : (
                        <a
                          href="https://wa.me/256755017384"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-black"
                        >
                          {program.cta}
                        </a>
                      )}
                      <Link
                        href={program.learnHref}
                        className="inline-flex items-center justify-center rounded-full border border-black/10 px-5 py-2 text-xs font-semibold text-gray-600 hover:border-primary hover:text-primary"
                      >
                        Learn more →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── What's included ── */}
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

      {/* ── Application steps ── */}
      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold text-primary">How to apply</h2>
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

      {/* ── Apply directly ── */}
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
        <p className="mt-5 text-xs text-gray-600">Response time is usually within 1–2 business days.</p>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold text-primary mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-primary">When does the next cohort start?</h3>
            <p className="mt-2 text-sm text-gray-700">Cohorts start quarterly. Exact dates are confirmed after your intake interview.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">Can I apply for more than one program?</h3>
            <p className="mt-2 text-sm text-gray-700">Yes. Some participants combine WorkMasters with CapitalMasters, or TechMasters with CourseMasters. Mention both programs when you apply and we'll discuss what makes sense.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">What's the time commitment?</h3>
            <p className="mt-2 text-sm text-gray-700">One weekly coaching session (60–90 minutes), one monthly meetup, and quarterly performance reviews. Plus execution time for your goals.</p>
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
            <p className="mt-2 text-sm text-gray-700">Cohorts are capped at 8–12 participants to maintain high-touch accountability and real feedback.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">Is the Bible Study free?</h3>
            <p className="mt-2 text-sm text-gray-700">Yes. The Workers & Leaders Bible Study is a free weekly session open to any professional who wants to integrate biblical wisdom into their work and leadership. Join any Friday at 8 PM EAT on Google Meet.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
