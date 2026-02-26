import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/seo/schema'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Essays, insights, and tools for high-performance operators across career, technology, and capital.',
  alternates: {
    canonical: 'https://andrewtugume.com/resources'
  }
}

export default function Resources() {
  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://andrewtugume.com' },
              { name: 'Resources', url: 'https://andrewtugume.com/resources' }
            ])
          )
        }}
      />

      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-semibold text-primary">Resources</h1>
        <p className="mt-4 text-gray-700 max-w-3xl">Short, high-signal insights on execution, systems, and capital discipline.</p>
      </section>

      <section className="space-y-12">
        <div>
          <h2 className="text-3xl font-semibold text-primary">Career Resources</h2>
          <p className="mt-2 text-gray-700">Systems for leadership, positioning, and career capital.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <article className="bg-white border border-black/5 rounded-2xl p-6">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase">Essay</p>
              <h3 className="mt-2 text-lg font-semibold text-primary">Building Career Capital</h3>
              <p className="mt-3 text-sm text-gray-700">A framework for accumulating leverage, skills, and negotiating power over 5-10 years.</p>
            </article>
            <article className="bg-white border border-black/5 rounded-2xl p-6">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase">Checklist</p>
              <h3 className="mt-2 text-lg font-semibold text-primary">Leadership Systems Audit</h3>
              <p className="mt-3 text-sm text-gray-700">20-point checklist to audit your execution systems, team clarity, and KPI discipline.</p>
            </article>
            <article className="bg-white border border-black/5 rounded-2xl p-6">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase">Framework</p>
              <h3 className="mt-2 text-lg font-semibold text-primary">Positioning Strategy</h3>
              <p className="mt-3 text-sm text-gray-700">How to position yourself as the go-to operator in your domain.</p>
            </article>
            <article className="bg-white border border-black/5 rounded-2xl p-6">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase">Tool</p>
              <h3 className="mt-2 text-lg font-semibold text-primary">Career Roadmap Template</h3>
              <p className="mt-3 text-sm text-gray-700">Quarterly planning template for tracking progression and execution milestones.</p>
            </article>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-primary">Technology Resources</h2>
          <p className="mt-2 text-gray-700">Product thinking, architecture, and execution discipline.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <article className="bg-white border border-black/5 rounded-2xl p-6">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase">Essay</p>
              <h3 className="mt-2 text-lg font-semibold text-primary">Product Thinking for Engineers</h3>
              <p className="mt-3 text-sm text-gray-700">Moving beyond shipping features to thinking in systems, leverage, and economic impact.</p>
            </article>
            <article className="bg-white border border-black/5 rounded-2xl p-6">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase">Framework</p>
              <h3 className="mt-2 text-lg font-semibold text-primary">Technical Architecture Blueprint</h3>
              <p className="mt-3 text-sm text-gray-700">Scalable system design patterns for building durable products.</p>
            </article>
            <article className="bg-white border border-black/5 rounded-2xl p-6">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase">Checklist</p>
              <h3 className="mt-2 text-lg font-semibold text-primary">Execution Rhythm Template</h3>
              <p className="mt-3 text-sm text-gray-700">Weekly, monthly, and quarterly review cadence for product teams.</p>
            </article>
            <article className="bg-white border border-black/5 rounded-2xl p-6">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase">Tool</p>
              <h3 className="mt-2 text-lg font-semibold text-primary">Monetization Scorecard</h3>
              <p className="mt-3 text-sm text-gray-700">Metrics framework for evaluating product sustainability and growth.</p>
            </article>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-primary">Investing Resources</h2>
          <p className="mt-2 text-gray-700">Portfolio strategy, risk management, and capital discipline.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <article className="bg-white border border-black/5 rounded-2xl p-6">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase">Essay</p>
              <h3 className="mt-2 text-lg font-semibold text-primary">From Income to Ownership</h3>
              <p className="mt-3 text-sm text-gray-700">The mindset shift from earning to building a durable portfolio and long-term wealth.</p>
            </article>
            <article className="bg-white border border-black/5 rounded-2xl p-6">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase">Framework</p>
              <h3 className="mt-2 text-lg font-semibold text-primary">Risk Management Playbook</h3>
              <p className="mt-3 text-sm text-gray-700">Principles for downside protection and asset allocation discipline.</p>
            </article>
            <article className="bg-white border border-black/5 rounded-2xl p-6">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase">Tool</p>
              <h3 className="mt-2 text-lg font-semibold text-primary">Portfolio Tracker Template</h3>
              <p className="mt-3 text-sm text-gray-700">Quarterly review framework for tracking allocation, rebalancing, and performance.</p>
            </article>
            <article className="bg-white border border-black/5 rounded-2xl p-6">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase">Checklist</p>
              <h3 className="mt-2 text-lg font-semibold text-primary">Financial Governance Audit</h3>
              <p className="mt-3 text-sm text-gray-700">15-point checklist for evaluating your capital discipline and decision-making.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="mt-12 bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold text-primary">Get weekly operational insights</h2>
        <p className="mt-3 text-gray-700 max-w-2xl">Short, high-signal notes on execution, systems, and discipline. Delivered every Sunday.</p>
        <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 rounded-full border border-black/10 px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            required
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-black"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-3 text-xs text-gray-600">No spam, ever. Unsubscribe instantly.</p>
      </section>

      <section className="bg-primary text-white rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold">Apply for Mastery Coaching</h2>
        <p className="mt-3 text-white/80">Resources are a taste of the structured accountability inside the cohort.</p>
        <div className="mt-6">
          <Link href="/apply" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/90">
            Apply for Mastery Coaching
          </Link>
        </div>
      </section>
    </div>
  )
}
