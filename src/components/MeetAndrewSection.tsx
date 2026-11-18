import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { brand, roles } from '@/lib/brand'

export default function MeetAndrewSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-[0.85fr_1.15fr] items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
          <Image
            src={brand.images.headshot}
            alt={`Portrait of ${brand.name}`}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Meet Andrew</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-primary leading-tight">
            {brand.titles.join('. ')}.
          </h2>
          <p className="mt-5 text-base md:text-lg text-gray-700 leading-relaxed">{brand.statement}</p>

          <dl className="mt-8 divide-y divide-black/5 border-y border-black/5">
            {roles.map((item) => (
              <div key={item.role} className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-4">
                <dt className="text-sm font-semibold tracking-wide text-primary uppercase">{item.role}</dt>
                <dd className="text-sm text-gray-700 leading-relaxed">{item.body}</dd>
              </div>
            ))}
          </dl>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-black hover:no-underline"
          >
            Read My Story →
          </Link>
        </div>
      </div>
    </section>
  )
}
