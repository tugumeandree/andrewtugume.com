'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const TECHMASTERS_COMMUNITY_URL = 'https://chat.whatsapp.com/CRu4bzb3dxj3BpNFFom7MU'

// ─── Types ────────────────────────────────────────────────────────────────────

type BillingMode = 'group' | 'private'
type BillingCycle = 'monthly' | 'annual'

interface Tier {
  id: string
  name: string
  tagline: string
  free: boolean
  groupMonthly: number | null
  privateHourly: number | null
  features: string[]
  highlight?: string
  cta: string
  ctaHref: string
}

// ─── Pricing utility ──────────────────────────────────────────────────────────

function resolvePrice(
  tier: Tier,
  mode: BillingMode,
  cycle: BillingCycle
): { label: string; sub: string } {
  if (tier.free) return { label: 'Free', sub: 'No credit card required' }

  if (mode === 'group' && tier.groupMonthly !== null) {
    const monthly = tier.groupMonthly
    const annual = Math.round((monthly * 10) / 12)
    const saving = (monthly - annual) * 12
    return {
      label: `$${cycle === 'annual' ? annual : monthly}/mo`,
      sub:
        cycle === 'annual'
          ? `Billed annually · Save $${saving}/yr`
          : 'Billed monthly',
    }
  }

  if (mode === 'private' && tier.privateHourly !== null) {
    return {
      label: `$${tier.privateHourly}/hr`,
      sub: 'Pay per session · No commitment',
    }
  }

  return { label: '—', sub: '' }
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const TIERS: Tier[] = [
  {
    id: 'community',
    name: 'Tier 1: The Community Hub (Free)',
    tagline: 'Start here. Learn with peers.',
    free: true,
    groupMonthly: null,
    privateHourly: null,
    features: [
      'TechMasters Community monthly meetup',
      'Live technical talks',
      'Live quizzes & challenges',
      'Community Slack channel',
    ],
    highlight: 'Top quiz performers win 50% off Career & Skills',
    cta: 'Join TechMasters Community',
    ctaHref: TECHMASTERS_COMMUNITY_URL,
  },
  {
    id: 'career',
    name: 'Tier 2: Career Accelerator ($90/mo)',
    tagline: 'For developers aiming for senior roles.',
    free: false,
    groupMonthly: 90,
    privateHourly: 60,
    features: [
      '1 hr/week live mentorship call',
      'Private Slack channel',
      'Session recordings',
      'Code review & feedback',
      'Career roadmap template',
    ],
    cta: 'Subscribe Now',
    ctaHref: '/apply?track=career',
  },
  {
    id: 'product',
    name: 'Tier 3: Product Lab ($132/mo)',
    tagline: 'For builders moving from idea to MVP.',
    free: false,
    groupMonthly: 132,
    privateHourly: 85,
    features: [
      '1 hr/week product coaching',
      'Private Slack channel',
      'Session recordings',
      'MVP scoping framework',
      'Stakeholder pitch review',
    ],
    cta: 'Subscribe Now',
    ctaHref: '/apply?track=product',
  },
  {
    id: 'startup',
    name: 'Tier 4: Founder’s Circle ($177/mo)',
    tagline: 'For founders managing companies and ops.',
    free: false,
    groupMonthly: 177,
    privateHourly: 110,
    features: [
      '1 hr/week leadership coaching',
      'Private Slack channel',
      'Session recordings',
      'Ops & systems playbook',
      'Investor-readiness checklist',
      'Priority email support',
    ],
    cta: 'Subscribe Now',
    ctaHref: '/apply?track=startup',
  },
]

// ─── Toggle ───────────────────────────────────────────────────────────────────

function Toggle({
  options,
  value,
  onChange,
  badge,
}: {
  options: readonly [string, string]
  value: string
  onChange: (v: string) => void
  badge?: string
}) {
  return (
    <div className="inline-flex items-center gap-3">
      <div className="flex rounded-full bg-black/5 p-1">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`rounded-full px-5 py-1.5 text-sm font-semibold capitalize transition-colors duration-200 ${
              value === opt
                ? 'bg-primary text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      {badge && (
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-accent">
          {badge}
        </span>
      )}
    </div>
  )
}

// ─── PricingCard ──────────────────────────────────────────────────────────────

function PricingCard({
  tier,
  mode,
  cycle,
  isFeatured,
}: {
  tier: Tier
  mode: BillingMode
  cycle: BillingCycle
  isFeatured: boolean
}) {
  const { label, sub } = resolvePrice(tier, mode, cycle)
  const primaryHref = mode === 'private' && !tier.free ? `/apply?track=${tier.id}&type=private` : tier.ctaHref
  const isExternalPrimaryHref = primaryHref.startsWith('http')

  return (
    <div
      className={`relative flex flex-col rounded-2xl p-6 transition-shadow ${
        isFeatured
          ? 'bg-primary text-white shadow-xl ring-2 ring-primary'
          : 'bg-white border border-black/5'
      }`}
    >
      {isFeatured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-3 py-1 text-xs font-bold text-primary">
          Most Popular
        </span>
      )}

      {/* Header */}
      <div className="mb-4">
        <h3 className={`text-lg font-bold ${isFeatured ? 'text-white' : 'text-primary'}`}>
          {tier.name}
        </h3>
        <p className={`mt-1 text-sm ${isFeatured ? 'text-white/70' : 'text-gray-500'}`}>
          {tier.tagline}
        </p>
      </div>

      {/* Price */}
      <div className="mb-6">
        <span
          className={`text-4xl font-extrabold tracking-tight ${
            isFeatured ? 'text-white' : 'text-primary'
          }`}
        >
          {label}
        </span>
        {sub && (
          <p className={`mt-1 text-xs ${isFeatured ? 'text-white/60' : 'text-gray-400'}`}>
            {sub}
          </p>
        )}
      </div>

      {/* Feature list */}
      <div className="mb-6 flex-1">
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-wide ${
            isFeatured ? 'text-white/50' : 'text-gray-400'
          }`}
        >
          What you get
        </p>
        <ul className="m-0 list-none space-y-2.5 p-0">
          {tier.features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm leading-relaxed">
              <span
                aria-hidden="true"
                className={`mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                  isFeatured
                    ? 'border border-white/25 bg-white/10 text-white'
                    : 'bg-accent/15 text-accent'
                }`}
              >
                ✓
              </span>
              <span className={isFeatured ? 'text-white/80' : 'text-gray-700'}>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Highlight callout */}
      {tier.highlight && (
        <div
          className={`mb-4 rounded-xl p-3 text-xs ${
            isFeatured ? 'bg-white/10 text-white/80' : 'bg-amber-50 text-accent'
          }`}
        >
          ★ {tier.highlight}
        </div>
      )}

      {/* CTA */}
      <div className="flex flex-col gap-2">
        {/* Primary button */}
        {isExternalPrimaryHref ? (
          <a
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
              isFeatured
                ? 'bg-accent text-primary hover:opacity-90'
                : tier.free
                ? 'border border-primary text-primary hover:bg-primary hover:text-white'
                : 'bg-primary text-white hover:bg-black'
            }`}
          >
            {mode === 'private' && !tier.free ? 'Book 1-on-1' : tier.cta}
          </a>
        ) : (
          <Link
            href={primaryHref}
            className={`flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
              isFeatured
                ? 'bg-accent text-primary hover:opacity-90'
                : tier.free
                ? 'border border-primary text-primary hover:bg-primary hover:text-white'
                : 'bg-primary text-white hover:bg-black'
            }`}
          >
            {mode === 'private' && !tier.free ? 'Book 1-on-1' : tier.cta}
          </Link>
        )}

        {/* Secondary private link for group view */}
        {mode === 'group' && !tier.free && (
          <Link
            href={`/apply?track=${tier.id}&type=private`}
            className={`flex items-center justify-center rounded-full border px-5 py-2 text-xs font-medium transition-colors ${
              isFeatured
                ? 'border-white/30 text-white/60 hover:border-white hover:text-white'
                : 'border-black/10 text-gray-400 hover:border-primary hover:text-primary'
            }`}
          >
            Or book 1-on-1 · ${tier.privateHourly}/hr
          </Link>
        )}
      </div>
    </div>
  )
}

// ─── Main client component ────────────────────────────────────────────────────

export default function TechMastersClient() {
  const [mode, setMode] = useState<BillingMode>('group')
  const [cycle, setCycle] = useState<BillingCycle>('monthly')

  return (
    <div className="space-y-16">
      {/* ── Hero ── */}
      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-14 text-center">
        <p className="text-sm font-semibold tracking-widest text-accent uppercase">TechMasters</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-primary max-w-3xl mx-auto leading-tight">
          Weekly Mentorship for the Next Generation of Tech Leaders.
        </h1>
        <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
          Choose your track. Join a squad of 3+. Get 4 hours of live coaching every month.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/apply"
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white hover:bg-black"
          >
            Apply for TechMasters
          </Link>
          <Link
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 px-7 py-3 text-sm font-semibold text-gray-700 hover:border-primary hover:text-primary"
          >
            See Pricing ↓
          </Link>
        </div>

        {/* Stats strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
          {[
            { stat: '4 hrs', label: 'live coaching / month' },
            { stat: '3+', label: 'people per squad' },
            { stat: '4 tracks', label: 'to choose from' },
            { stat: '100%', label: 'live & interactive' },
          ].map(({ stat, label }) => (
            <div key={label} className="text-center">
              <span className="block text-2xl font-bold text-primary">{stat}</span>
              <span className="block text-xs text-gray-500 mt-0.5">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="scroll-mt-24">
        {/* Controls */}
        <div className="mb-10 flex flex-col items-center gap-5">
          <h2 className="text-3xl font-bold text-primary">Choose Your Track</h2>
          <p className="text-gray-500 text-sm max-w-lg text-center">
            All paid tracks include weekly live sessions, private Slack access, and full recordings.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <Toggle
              options={['group', 'private'] as const}
              value={mode}
              onChange={(v) => setMode(v as BillingMode)}
              badge={mode === 'group' ? 'Best Value for 3+ people' : undefined}
            />

            {mode === 'group' && (
              <Toggle
                options={['monthly', 'annual'] as const}
                value={cycle}
                onChange={(v) => setCycle(v as BillingCycle)}
                badge={cycle === 'annual' ? '2 months free' : undefined}
              />
            )}
          </div>

          {mode === 'private' && (
            <p className="text-xs text-gray-400 max-w-xs text-center">
              Private sessions are billed per hour. No subscription or commitment required.
            </p>
          )}
        </div>

        {/* Grid: 1 col → 2 col → 4 col */}
        <div className="grid gap-4 pt-5 sm:grid-cols-2 md:grid-cols-4">
          {TIERS.map((tier) => (
            <PricingCard
              key={tier.id}
              tier={tier}
              mode={mode}
              cycle={cycle}
              isFeatured={tier.id === 'product'}
            />
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section>
        <h2 className="text-2xl font-bold text-primary mb-6">How TechMasters Works</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              step: '01',
              title: 'Pick your track',
              desc: 'Choose the focus area that matches your current stage — career growth, product building, or startup leadership.',
            },
            {
              step: '02',
              title: 'Join your squad',
              desc: "You'll be matched with 3+ peers at the same level. Squads keep you accountable and make sessions richer.",
            },
            {
              step: '03',
              title: 'Show up and ship',
              desc: 'Every month you get 4 hours of live coached sessions. Bring your real problems, leave with a plan.',
            },
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-white border border-black/5 rounded-2xl p-6">
              <span className="text-xs font-bold tracking-widest text-accent">{step}</span>
              <h3 className="mt-2 text-lg font-semibold text-primary">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section>
        <h2 className="text-2xl font-bold text-primary mb-6">Common Questions</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              q: 'What does "squad" mean?',
              a: 'A squad is a group of 3 or more members in the same weekly session. It reduces cost and makes coaching more dynamic.',
            },
            {
              q: 'Can I switch tracks later?',
              a: 'Yes. You can switch at the start of any new billing period — just email us before your renewal date.',
            },
            {
              q: 'What if I miss a session?',
              a: 'All sessions are recorded and shared in your private Slack channel within 24 hours.',
            },
            {
              q: 'Is private coaching different content?',
              a: 'Same curriculum but tailored entirely to you. No group, no shared agenda — just your goals, your pace.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-white border border-black/5 rounded-2xl p-6">
              <h3 className="text-base font-semibold text-primary">{q}</h3>
              <p className="mt-2 text-sm text-gray-600">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-primary rounded-2xl p-8 md:p-14 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to level up?</h2>
        <p className="mt-3 text-white/70 max-w-xl mx-auto">
          Start free in the community, or apply directly to the track that matches your goals. Squad spots are limited.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/apply"
            className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-semibold text-primary hover:bg-accent/90"
          >
            Apply for TechMasters
          </Link>
          <a
            href={TECHMASTERS_COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white hover:border-white"
          >
            Join TechMasters Community
          </a>
        </div>
      </section>
    </div>
  )
}
