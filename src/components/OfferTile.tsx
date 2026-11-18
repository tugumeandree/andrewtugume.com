import React from 'react'
import Link from 'next/link'
import StatusBadge from '@/components/StatusBadge'
import type { Accent, Offer } from '@/lib/brand'

const accentStyles: Record<Accent, { kicker: string; rule: string; link: string }> = {
  work: { kicker: 'text-work-text', rule: 'border-t-work-accent', link: 'text-work hover:text-work-text' },
  influence: { kicker: 'text-influence', rule: 'border-t-influence', link: 'text-influence hover:text-primary' },
  scripture: { kicker: 'text-scripture-warm', rule: 'border-t-scripture', link: 'text-scripture hover:text-primary' },
}

export default function OfferTile({ offer, accent, anchor = true }: { offer: Offer; accent: Accent; anchor?: boolean }) {
  const style = accentStyles[accent]

  return (
    <article id={anchor ? offer.id : undefined} className={`flex h-full flex-col rounded-2xl border border-black/5 border-t-4 ${style.rule} bg-white p-6 md:p-7`}>
      <div className="flex items-start justify-between gap-3">
        <p className={`text-xs font-semibold tracking-[0.15em] uppercase ${style.kicker}`}>{offer.kicker}</p>
        <StatusBadge status={offer.status} />
      </div>
      <h3 className="mt-3 text-2xl font-semibold text-primary leading-snug">{offer.name}</h3>

      <dl className="mt-5 flex-1 space-y-3 text-sm">
        <div>
          <dt className="font-semibold text-primary">For</dt>
          <dd className="text-gray-700">{offer.audience}</dd>
        </div>
        <div>
          <dt className="font-semibold text-primary">Problem solved</dt>
          <dd className="text-gray-700">{offer.problem}</dd>
        </div>
        <div>
          <dt className="font-semibold text-primary">Outcome</dt>
          <dd className="text-gray-700">{offer.outcome}</dd>
        </div>
        <div>
          <dt className="font-semibold text-primary">Format</dt>
          <dd className="text-gray-700">{offer.format}</dd>
        </div>
        {offer.duration && (
          <div>
            <dt className="font-semibold text-primary">Duration</dt>
            <dd className="text-gray-700">{offer.duration}</dd>
          </div>
        )}
      </dl>

      <Link href={offer.cta.href} className={`mt-6 inline-flex text-sm font-semibold hover:no-underline ${style.link}`}>
        {offer.cta.label} →
      </Link>
    </article>
  )
}
