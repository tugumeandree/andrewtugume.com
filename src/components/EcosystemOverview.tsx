import React from 'react'
import Link from 'next/link'
import { ecosystem } from '@/lib/brand'

// Shows the corporate business and the connected initiative — distinct from
// the personal-brand programmes, and without implying ownership beyond what is stated.
export default function EcosystemOverview({ detailed = false }: { detailed?: boolean }) {
  const { qraftGroup, futureOfWorkForum } = ecosystem

  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
      <article id={qraftGroup.id} className="rounded-3xl border border-black/10 bg-white p-6 md:p-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-gray-600 uppercase">{qraftGroup.relationship}</p>
        <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-primary">{qraftGroup.name}</h3>
        <p className="mt-1 text-sm text-gray-700">{qraftGroup.legalName}</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {qraftGroup.businesses.map((business) => (
            <div key={business.id} id={business.id} className="rounded-2xl bg-[#F7F6F2] p-5">
              <p className="text-xs font-semibold tracking-[0.15em] text-gray-600 uppercase">{business.category}</p>
              <h4 className="mt-2 text-xl font-semibold text-primary">{business.name}</h4>
              {detailed && <p className="mt-2 text-sm text-gray-700">{business.description}</p>}
              <p className="mt-3 text-sm text-gray-700">{business.programmes.join(' · ')}</p>
              {business.href && (
                <a href={business.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex text-sm font-semibold text-primary">
                  Visit {business.name} ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </article>

      <article id={futureOfWorkForum.id} className="rounded-3xl border border-black/10 bg-white p-6 md:p-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-gray-600 uppercase">{futureOfWorkForum.relationship}</p>
        <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-primary">{futureOfWorkForum.name}</h3>
        <p className="mt-1 text-sm text-gray-700">{futureOfWorkForum.category}</p>
        {detailed && <p className="mt-4 text-sm text-gray-700">{futureOfWorkForum.description}</p>}
        <ul className="mt-6 space-y-3">
          {futureOfWorkForum.programmes.map((programme) => (
            <li key={programme} className="rounded-2xl bg-[#F7F6F2] p-5 text-lg font-semibold text-primary">{programme}</li>
          ))}
        </ul>
      </article>

      {!detailed && (
        <p className="lg:col-span-2 text-sm text-gray-700">
          These are connected initiatives, separate from the personal-brand programmes on this site.{' '}
          <Link href="/ecosystem" className="font-semibold">See how it all fits together →</Link>
        </p>
      )}
    </div>
  )
}
