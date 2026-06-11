import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/seo/schema'

const MEET_URL = 'https://meet.google.com/jbq-qumi-ntf'

export const metadata: Metadata = {
  title: 'Workers & Leaders Bible Study — Biblical Wisdom for Work, Leadership, and Stewardship',
  description:
    'A weekly online Bible study for professionals, leaders, founders, and investors who want to integrate biblical wisdom into their careers, businesses, and leadership. Every Friday, 8–9 PM EAT on Google Meet.',
  keywords: [
    'Workers and Leaders Bible Study',
    'Christian professionals Bible study',
    'faith and work',
    'biblical leadership',
    'biblical stewardship',
    'Christian entrepreneurs',
    'workplace discipleship',
    'faith-based leadership development',
    'biblical wisdom for business',
    'Andrew Tugume Bible Study',
  ],
  alternates: {
    canonical: 'https://andrewtugume.com/bible-study',
  },
  openGraph: {
    title: 'Workers & Leaders Bible Study — Biblical Wisdom for Work, Leadership, and Stewardship',
    description:
      'A weekly online Bible study for professionals, founders, and investors integrating scripture with work, leadership, and stewardship.',
    url: 'https://andrewtugume.com/bible-study',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workers & Leaders Bible Study',
    description:
      'Weekly scripture-based leadership and stewardship study for professionals, founders, and investors. Every Friday, 8–9 PM EAT.',
  },
}

const topics = [
  {
    title: 'Biblical Leadership',
    description:
      'Authority, servanthood, accountability, and building teams that outlast their founders. What scripture says about leading people well.',
  },
  {
    title: 'Faith and Work',
    description:
      'The theology of vocation. Why your work is not separate from your faith — and how to bring integrity and purpose into every role.',
  },
  {
    title: 'Stewardship and Wealth',
    description:
      'Biblical frameworks for managing, multiplying, and giving resources. Principles for moving from consumption to ownership.',
  },
  {
    title: 'Decision-Making',
    description:
      'Wisdom literature, discernment, and navigating uncertainty. How scripture equips leaders to make sound judgements under pressure.',
  },
  {
    title: 'Character and Integrity',
    description:
      'The formation of a leader who can be trusted at scale. Why character is not a soft skill — it is the foundation of everything.',
  },
  {
    title: 'Purpose and Calling',
    description:
      'Identifying your assignment and aligning your work with conviction. What it means to build with a clear sense of mandate.',
  },
  {
    title: 'Influence and Service',
    description:
      'Leading not for position but for lasting impact. How scripture reframes power as a tool for service, not status.',
  },
  {
    title: 'Productivity and Discipline',
    description:
      'What the Bible says about time, focus, excellence, and rest. Principles that make high performance sustainable.',
  },
]

const audience = [
  {
    title: 'Employees',
    description:
      'Professionals navigating career growth, workplace culture, and how to lead without title.',
  },
  {
    title: 'Consultants',
    description:
      'Independent practitioners building sustainable practices grounded in integrity and clear positioning.',
  },
  {
    title: 'Entrepreneurs',
    description:
      'Founders building businesses that are commercially serious and spiritually grounded.',
  },
  {
    title: 'Executives',
    description:
      'Senior leaders making decisions with wide-reaching impact — who want those decisions to reflect their values.',
  },
  {
    title: 'Investors',
    description:
      'Capital allocators who want a stewardship framework that goes deeper than return-on-investment.',
  },
  {
    title: 'Emerging Leaders',
    description:
      'Developing character before authority. Building the internal infrastructure that leadership demands.',
  },
]

const testimonials = [
  {
    quote:
      "I've been to corporate leadership programs and I've been to church. This is the first time someone connected both without compromising either. The rigor changed how I operate.",
    name: 'Senior Manager',
    role: 'Technology Sector',
  },
  {
    quote:
      "As a founder, I've been looking for a framework that holds ambition and integrity together. This study gave me that. The sessions on stewardship alone reshaped how I think about capital.",
    name: 'Founder & CEO',
    role: 'Early-Stage Startup',
  },
  {
    quote:
      "What surprised me most is how practical it is. Every Friday I leave with something I can apply on Monday. Not just inspiration — structure.",
    name: 'Business Owner',
    role: 'Investor',
  },
]

export default function BibleStudyPage() {
  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://andrewtugume.com' },
              { name: 'Workers & Leaders Bible Study', url: 'https://andrewtugume.com/bible-study' },
            ])
          ),
        }}
      />

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-14">
        <p className="text-sm font-semibold tracking-widest text-accent uppercase">
          Workers &amp; Leaders Bible Study
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-primary max-w-3xl leading-tight">
          Scripture Is Not Separate From Your Work. It Is the Foundation.
        </h1>
        <p className="mt-5 text-lg text-gray-700 max-w-2xl leading-relaxed">
          A weekly study for professionals, leaders, founders, and investors who want to integrate
          biblical wisdom into how they work, lead, build, and steward what they have been given.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
            Every Friday
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-1.5 text-sm font-medium text-gray-700">
            8:00 – 9:00 PM EAT
          </span>
          <a
            href={MEET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-1.5 text-sm font-medium text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors"
          >
            Online · Google Meet ↗
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={MEET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white hover:bg-black"
          >
            Join This Friday's Study
          </a>
          <Link
            href="#topics"
            className="inline-flex items-center justify-center rounded-full border border-black/10 px-7 py-3 text-sm font-semibold text-gray-700 hover:border-primary hover:text-primary"
          >
            View Upcoming Topics ↓
          </Link>
        </div>
      </section>

      {/* ── Why This Study Exists ─────────────────────────────── */}
      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <p className="text-sm font-semibold tracking-widest text-accent uppercase">Why This Study Exists</p>
        <h2 className="mt-3 text-3xl font-semibold text-primary max-w-2xl leading-snug">
          Most professionals were taught to keep faith out of the room.
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <p className="text-gray-700 leading-relaxed">
            Strategy stays in the boardroom. Scripture stays in the sanctuary. The result is a
            generation of leaders who are professionally capable but spiritually disconnected from
            the work they spend most of their lives doing.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The Bible is one of the most sophisticated frameworks ever written on leadership,
            stewardship, decision-making, character, and purpose. This study exists to close the
            gap — not by softening the faith or simplifying the work, but by reading scripture
            seriously and applying it precisely where it belongs.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Careers', icon: '📈' },
            { label: 'Business', icon: '🏗️' },
            { label: 'Leadership', icon: '🎯' },
            { label: 'Investing', icon: '⚖️' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-xl border border-black/5 bg-black/[0.02] px-4 py-3"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm font-semibold text-primary">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── What We Explore ───────────────────────────────────── */}
      <section id="topics" className="scroll-mt-20">
        <div className="mb-8">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">Topics We Cover</p>
          <h2 className="mt-3 text-3xl font-semibold text-primary">What We Explore Together</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Each session is anchored in scripture and applied to the realities of professional and
            organizational life.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic) => (
            <article
              key={topic.title}
              className="bg-white border border-black/5 rounded-2xl p-6 hover:border-accent/30 hover:shadow-sm transition-all"
            >
              <h3 className="text-base font-semibold text-primary">{topic.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{topic.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Who It Is For ─────────────────────────────────────── */}
      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <p className="text-sm font-semibold tracking-widest text-accent uppercase">Who It Is For</p>
        <h2 className="mt-3 text-3xl font-semibold text-primary">Built for People Who Take Both Seriously</h2>
        <p className="mt-3 text-gray-600 max-w-2xl">
          This is not a study for people who want to keep faith and work separate. It is for those
          who refuse to.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audience.map((group) => (
            <div key={group.title} className="rounded-xl border border-black/5 bg-black/[0.02] p-5">
              <h3 className="text-base font-semibold text-primary">{group.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{group.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Format ────────────────────────────────────────────── */}
      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <p className="text-sm font-semibold tracking-widest text-accent uppercase">Format</p>
        <h2 className="mt-3 text-3xl font-semibold text-primary">How Each Session Works</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              label: 'Weekly · Every Friday',
              detail: '8:00 – 9:00 PM East Africa Time. One focused hour, no time wasted.',
              href: undefined as string | undefined,
            },
            {
              label: 'Online via Google Meet',
              detail: 'Join from anywhere. No commute, no venue — just the study.',
              href: MEET_URL,
            },
            {
              label: 'Scripture-Based',
              detail:
                'The Bible is the primary text. We read it seriously, in context, and with intellectual rigour.',
              href: undefined as string | undefined,
            },
            {
              label: 'Interactive Discussion',
              detail:
                'Not a lecture. Questions, observations, and real-world application are part of every session.',
              href: undefined as string | undefined,
            },
            {
              label: 'Practical Application',
              detail:
                'Every session ends with something actionable — a principle to carry into the week ahead.',
              href: undefined as string | undefined,
            },
            {
              label: 'Questions and Reflection',
              detail:
                'Space to bring your real questions about faith, work, and the tension between them.',
              href: undefined as string | undefined,
            },
          ].map((item) => {
            const inner = (
              <>
                <h3 className="text-sm font-semibold text-primary">{item.label}{item.href ? ' ↗' : ''}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.detail}</p>
              </>
            )
            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-black/5 p-5 block hover:border-accent/30 hover:shadow-sm transition-all"
              >
                {inner}
              </a>
            ) : (
              <div key={item.label} className="rounded-xl border border-black/5 p-5">
                {inner}
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────── */}
      <section>
        <div className="mb-8">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">What Participants Say</p>
          <h2 className="mt-3 text-3xl font-semibold text-primary">From the Room</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="bg-white border border-black/5 rounded-2xl p-6 flex flex-col justify-between"
            >
              <p className="text-sm text-gray-700 leading-relaxed italic">"{t.quote}"</p>
              <footer className="mt-6 pt-4 border-t border-black/5">
                <p className="text-sm font-semibold text-primary">{t.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <section className="bg-primary text-white rounded-2xl p-10 md:p-14 text-center">
        <p className="text-sm font-semibold tracking-widest text-accent uppercase">
          Workers &amp; Leaders Bible Study
        </p>
        <h2 className="mt-4 text-3xl md:text-4xl font-semibold max-w-2xl mx-auto leading-snug">
          Grow Spiritually. Lead Effectively. Work With Purpose.
        </h2>
        <p className="mt-4 text-white/70 max-w-xl mx-auto">
          Every Friday at 8 PM EAT on Google Meet. Come as you are. Bring your real questions.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={MEET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-semibold text-primary hover:bg-accent/90"
          >
            Join This Friday's Study
          </a>
          <Link
            href="#topics"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white hover:border-white"
          >
            View Topics ↑
          </Link>
        </div>
      </section>
    </div>
  )
}
