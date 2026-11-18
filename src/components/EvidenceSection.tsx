import React from 'react'
import SectionHeading from '@/components/SectionHeading'
import { evidence } from '@/lib/brand'

// Renders only verified entries from src/lib/brand.ts; hidden while the list is empty.
export default function EvidenceSection() {
  if (evidence.length === 0) return null

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Evidence & Impact" title="Work that speaks for itself." />
        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {evidence.map((item) => (
            <li key={item.title} className="rounded-2xl border border-black/5 bg-white p-6">
              <p className="text-xs font-semibold tracking-[0.15em] text-gray-600 uppercase">{item.type}</p>
              <h3 className="mt-2 text-lg font-semibold text-primary">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{item.detail}</p>
              {item.source && <p className="mt-3 text-xs text-gray-600">{item.source}</p>}
              {item.href && (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex text-sm font-semibold">
                  View →
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
