import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/seo/schema'

export const metadata: Metadata = {
  title: 'Programs — Mastery Coaching for Work, Leadership, Learning, Technology & Capital',
  description:
    'Six programs built around one mission: shaping the future of work and leadership in Africa. WorkMasters, Leadership Exchange, Bible Study, CourseMasters, TechMasters, and CapitalMasters.',
  alternates: {
    canonical: 'https://andrewtugume.com/programs',
  },
}

const MEET_URL = 'https://meet.google.com/jbq-qumi-ntf'

const tracks = [
  {
    label: 'Work & Leadership Mastery',
    tagline: 'Master your career, sharpen your leadership, and build on the principles that govern both',
    programs: [
      {
        tag: 'WorkMasters',
        title: 'Career, Productivity and Management Mastery',
        description:
          'For professionals, consultants, entrepreneurs, and investors who want to accelerate income, sharpen positioning, and build structured career or business growth.',
        features: [
          'Career strategy and positioning',
          'Productivity architecture',
          'Leadership and management frameworks',
          'Business development systems',
          'Capital raising with confidence',
        ],
        image: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1780507670/WorkMasters_2_pthuuz.jpg',
        href: '/workmasters',
        cta: 'Explore WorkMasters',
        applyCta: 'Apply via WhatsApp',
        applyHref: 'https://wa.me/256755017384',
        external: false,
      },
      {
        tag: 'Leadership Exchange',
        title: 'Peer Leadership and Strategic Exchange',
        description:
          'A networked leadership forum for accountability, strategic review, and shared execution insights. For managers, executives, and founders who want to lead with more clarity and fewer blind spots.',
        features: [
          'Accountability partnerships',
          'Strategy sessions and reviews',
          'Performance evaluation frameworks',
          'Decision-making processes',
          'Leadership growth acceleration',
        ],
        image: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1780618459/ILSZ9458_11zon_meuy7y.jpg',
        href: '/contact',
        cta: 'Inquire About Leadership Exchange',
        applyCta: 'Inquire Now',
        applyHref: 'https://wa.me/256755017384',
        external: false,
      },
      {
        tag: 'Workers & Leaders Bible Study',
        title: 'Scripture as a Framework for Work, Leadership, and Stewardship',
        description:
          'A free weekly online study for professionals, founders, and investors integrating biblical wisdom into careers, business, leadership, and capital. Every Friday at 8 PM EAT on Google Meet.',
        features: [
          'Biblical leadership and authority',
          'Stewardship, wealth, and capital principles',
          'Decision-making and character formation',
          'Purpose, calling, and workplace influence',
          'Live discussion and practical application',
        ],
        image: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1781178700/workers_and_leaders_bible_study_vcs4fu.png',
        href: '/bible-study',
        cta: 'Learn More',
        applyCta: 'Join This Friday · Free',
        applyHref: MEET_URL,
        external: true,
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
        description:
          'For teams and organizations building high-performance training systems that scale knowledge and skill across their operations.',
        features: [
          'Curriculum strategy and design',
          'Course production and delivery',
          'Learning experience optimization',
          'Engagement and retention systems',
          'Launch strategy and support',
        ],
        image: 'https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg',
        href: '/masters/coursemasters',
        cta: 'Explore CourseMasters',
        applyCta: 'Apply via WhatsApp',
        applyHref: 'https://wa.me/256755017384',
        external: false,
      },
      {
        tag: 'TechMasters',
        title: 'Technology, Product and Innovation Mastery',
        description:
          'For developers, technical founders, and innovation leaders who want to build real-world solutions and lead with technical discipline — not just write code.',
        features: [
          'Product thinking and strategy',
          'Systems architecture',
          'Research and development practice',
          'Technical execution discipline',
          'Monetization and scaling',
        ],
        image: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1615551883/IMG_5942_c83b2h.jpg',
        href: '/techmasters',
        cta: 'Explore TechMasters',
        applyCta: 'Apply via WhatsApp',
        applyHref: 'https://wa.me/256755017384',
        external: false,
      },
      {
        tag: 'CapitalMasters',
        title: 'Investment and Wealth Mastery',
        description:
          'For disciplined individuals and operators ready to move from income to ownership and build durable, long-term wealth through structured investment frameworks.',
        features: [
          'Investment frameworks and thesis',
          'Portfolio strategy and management',
          'Risk assessment and governance',
          'Financial governance structures',
          'Long-term capital growth',
        ],
        image: 'https://personalefinance.com/wp-content/uploads/Top-Characteristics-of-Finance-FAQ-What-are-Finance-Characteristics-Frequently-Asked-Questions.webp',
        href: '/masters/capitalmasters',
        cta: 'Explore CapitalMasters',
        applyCta: 'Apply via WhatsApp',
        applyHref: 'https://wa.me/256755017384',
        external: false,
      },
    ],
  },
]

export default function Programs() {
  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://andrewtugume.com' },
              { name: 'Programs', url: 'https://andrewtugume.com/programs' },
            ])
          ),
        }}
      />

      {/* ── Hero ── */}
      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <p className="text-sm font-semibold tracking-widest text-accent uppercase">The Mastery Ecosystem</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-primary max-w-3xl leading-tight">
          Six programs. Two tracks. One mission.
        </h1>
        <p className="mt-4 text-gray-700 max-w-3xl leading-relaxed">
          Every program is built to help ambitious professionals master work and leadership — through
          learning, technology, and capital. Choose the program that matches where you are and what
          you are building.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/apply"
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white hover:bg-black"
          >
            Apply Now
          </Link>
          <a
            href="https://wa.me/256755017384"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-primary px-7 py-3 text-sm font-semibold text-primary hover:bg-black hover:text-white"
          >
            Ask a Question on WhatsApp
          </a>
        </div>
      </section>

      {/* ── Programs by track ── */}
      <div className="space-y-14">
        {tracks.map((track) => (
          <div key={track.label}>
            <div className="mb-8 pb-5 border-b-2 border-accent/20">
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
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {program.description}
                    </p>
                    <ul className="mt-4 space-y-1.5 flex-1">
                      {program.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-accent font-bold flex-shrink-0 mt-0.5">✓</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-col gap-2">
                      <a
                        href={program.applyHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-black"
                      >
                        {program.applyCta}
                      </a>
                      <Link
                        href={program.href}
                        className="inline-flex items-center justify-center rounded-full border border-black/10 px-5 py-2 text-xs font-semibold text-gray-600 hover:border-primary hover:text-primary"
                      >
                        {program.cta} →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── What's included across cohort programs ── */}
      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <p className="text-sm font-semibold tracking-widest text-accent uppercase">What's Included</p>
        <h2 className="mt-3 text-2xl font-semibold text-primary">Every cohort program includes</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-black/5 bg-black/[0.02] p-5">
            <h3 className="text-sm font-semibold text-primary">Weekly Coaching</h3>
            <p className="mt-2 text-sm text-gray-600">Structured sessions with goals, scorecards, and accountability reviews.</p>
          </div>
          <div className="rounded-xl border border-black/5 bg-black/[0.02] p-5">
            <h3 className="text-sm font-semibold text-primary">Monthly Meetups</h3>
            <p className="mt-2 text-sm text-gray-600">Private sessions for feedback, playbooks, and real-world case studies.</p>
          </div>
          <div className="rounded-xl border border-black/5 bg-black/[0.02] p-5">
            <h3 className="text-sm font-semibold text-primary">Quarterly Challenges</h3>
            <p className="mt-2 text-sm text-gray-600">Performance sprints designed to produce measurable, reviewable outcomes.</p>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-primary text-white rounded-2xl p-10 md:p-14 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">Not sure which program is right for you?</h2>
        <p className="mt-4 text-white/70 max-w-xl mx-auto">
          Send a WhatsApp message with your name, current role, and goals. The right program will become clear.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/256755017384"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-semibold text-primary hover:bg-accent/90"
          >
            Message on WhatsApp
          </a>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white hover:border-white"
          >
            View the Apply Page
          </Link>
        </div>
      </section>
    </div>
  )
}
