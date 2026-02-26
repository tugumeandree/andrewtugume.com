import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generateBreadcrumbSchema, generateWebPageSchema } from '@/lib/seo/schema'

export const metadata: Metadata = {
  title: 'Andrew Tugume — Educator, Technologist, Investor',
  description: 'Mastery coaching for ambitious African professionals, founders, and operators to build skill, systems, and disciplined capital.',
  alternates: {
    canonical: 'https://andrewtugume.com'
  },
  openGraph: {
    title: 'Andrew Tugume — Educator, Technologist, Investor',
    description: 'Master your career, technology, and wealth through structured mastery coaching.',
    url: 'https://andrewtugume.com',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg',
        width: 1200,
        height: 630,
        alt: 'Andrew Tugume - Educator, Technologist, Investor'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andrew Tugume — Educator, Technologist, Investor',
    description: 'Master your career, technology, and wealth through structured mastery coaching.'
  }
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateWebPageSchema(
              'Andrew Tugume - Educator, Technologist, Investor',
              'Mastery coaching for ambitious African professionals, founders, and operators.',
              'https://andrewtugume.com'
            )
          )
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([{ name: 'Home', url: 'https://andrewtugume.com' }])
          )
        }}
      />

      <section className="relative overflow-hidden rounded-2xl bg-white border border-black/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(199,161,75,0.15),_transparent_45%)]" />
        <div className="relative px-6 py-14 md:px-12 md:py-20">
          <div className="max-w-5xl">
            <p className="text-sm font-semibold tracking-wide text-accent uppercase">Andrew Tugume</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-semibold text-primary">Master Your Career, Technology and Wealth.</h1>
            <p className="mt-4 text-base md:text-lg text-gray-700 max-w-3xl">
              I coach ambitious professionals, founders, and operators to build real skill, scalable systems, and disciplined capital through structured weekly mentorship and quarterly performance challenges.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-black"
              >
                Apply for Mastery Coaching
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-black hover:text-white"
              >
                Explore the Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary">The Mastery Coaching Programs</h2>
            <p className="mt-3 text-gray-700 max-w-2xl">These are not courses. They are operating systems for serious growth.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="bg-white border border-black/5 rounded-2xl p-6">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase">WorkMasters</p>
              <h3 className="mt-2 text-xl font-semibold text-primary">Career, Leadership and Execution Mastery</h3>
              <p className="mt-3 text-sm text-gray-700">For professionals and entrepreneurs who want to accelerate income, sharpen positioning, and build structured career or business growth.</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>Career capital strategy</li>
                <li>Business model clarity</li>
                <li>Leadership systems</li>
                <li>Productivity architecture</li>
                <li>Raising capital with confidence</li>
              </ul>
              <Link href="/workmasters" className="mt-5 inline-flex text-sm font-semibold text-primary">
                Explore WorkMasters →
              </Link>
              <p className="mt-4 text-xs text-gray-600">WorkMasters is for builders who refuse average careers and want structured progression.</p>
            </article>

            <article className="bg-white border border-black/5 rounded-2xl p-6">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase">TechMasters</p>
              <h3 className="mt-2 text-xl font-semibold text-primary">Technology, Product and Innovation Mastery</h3>
              <p className="mt-3 text-sm text-gray-700">For developers, technical founders, and innovation leaders who want to build real-world solutions, not just learn theory.</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>Product thinking</li>
                <li>Systems architecture</li>
                <li>Research and development</li>
                <li>Technical execution discipline</li>
                <li>Monetization and scale</li>
              </ul>
              <Link href="/masters/techmasters" className="mt-5 inline-flex text-sm font-semibold text-primary">
                Explore TechMasters →
              </Link>
              <p className="mt-4 text-xs text-gray-600">TechMasters is for builders who want to create technology that solves real economic problems.</p>
            </article>

            <article className="bg-white border border-black/5 rounded-2xl p-6">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase">CapitalMasters</p>
              <h3 className="mt-2 text-xl font-semibold text-primary">Investment and Wealth Mastery</h3>
              <p className="mt-3 text-sm text-gray-700">For disciplined individuals ready to move from income to ownership.</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>Investment frameworks</li>
                <li>Portfolio strategy</li>
                <li>Risk management</li>
                <li>Financial governance</li>
                <li>Long-term capital growth</li>
              </ul>
              <Link href="/masters/capitalmasters" className="mt-5 inline-flex text-sm font-semibold text-primary">
                Explore CapitalMasters →
              </Link>
              <p className="mt-4 text-xs text-gray-600">CapitalMasters is for operators who want to think like investors and build durable wealth.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="mt-16 bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary">Built From Real Experience</h2>
          <p className="mt-4 text-gray-700">
            I am not a motivational speaker. I build companies, systems, and capital structures.
          </p>
          <p className="mt-4 text-gray-700">
            As an educator, I design high-performance learning systems. As a technologist, I build and advise on scalable products. As an investor, I focus on disciplined capital allocation and governance.
          </p>
          <p className="mt-4 text-gray-700">My work sits at the intersection of skill, systems, and capital.</p>
          <Link href="/about" className="mt-6 inline-flex text-sm font-semibold text-primary">
            View Full Bio →
          </Link>
        </div>
      </section>

      <section className="mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary">The Institutions Behind the Ecosystem</h2>
          <p className="mt-3 text-gray-700">Beyond coaching, I have founded organizations focused on education, leadership, technology, and capital development.</p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="bg-white border border-black/5 rounded-2xl p-6">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase">As an Educator</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li><Link href="/schools/qraft-academy" className="hover:text-primary">Qraft Academy</Link></li>
                <li><Link href="/schools/chariot-leadership" className="hover:text-primary">Chariot Leadership Institute</Link></li>
                <li><Link href="/schools/nations-bible" className="hover:text-primary">Nations Knowledge Community</Link></li>
              </ul>
            </div>
            <div className="bg-white border border-black/5 rounded-2xl p-6">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase">As a Technologist</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li><Link href="/institutions/qraft-labs" className="hover:text-primary">Qraft Labs</Link></li>
              </ul>
            </div>
            <div className="bg-white border border-black/5 rounded-2xl p-6">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase">As an Investor</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li><Link href="/institutions/qraft-capital" className="hover:text-primary">Qraft Capital</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary">Results From the Community</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="rounded-xl border border-black/5 p-6">
              <p className="text-sm text-gray-700">"I rebuilt my career strategy and doubled my responsibility within six months. The systems are rigorous and clear."</p>
              <p className="mt-4 text-xs font-semibold text-primary">Operations Lead, Nairobi</p>
            </article>
            <article className="rounded-xl border border-black/5 p-6">
              <p className="text-sm text-gray-700">"TechMasters pushed me from shipping features to thinking in systems. My product now has a real growth loop."</p>
              <p className="mt-4 text-xs font-semibold text-primary">Product Founder, Lagos</p>
            </article>
            <article className="rounded-xl border border-black/5 p-6">
              <p className="text-sm text-gray-700">"CapitalMasters gave me an investment framework that finally matches my income and risk profile."</p>
              <p className="mt-4 text-xs font-semibold text-primary">Founder-Investor, Kampala</p>
            </article>
          </div>
        </div>
      </section>

      <section className="mt-16 bg-primary text-white rounded-2xl p-10 md:p-14">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold">Ready to Operate at a Higher Level?</h2>
          <p className="mt-3 text-white/80">Mastery requires structure. Structure requires commitment.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-start gap-3">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/90"
            >
              Apply for Mastery Coaching
            </Link>
            <p className="text-xs text-white/70">Limited intake per cohort.</p>
          </div>
        </div>
      </section>
    </>
  )
}
