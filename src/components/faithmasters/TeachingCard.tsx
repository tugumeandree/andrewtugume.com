import React from 'react'
import Link from 'next/link'
import ExternalLink from '@/components/faithmasters/ExternalLink'
import type { LessonFormat } from '@/lib/faithmasters/lessons'

export type LibraryItem = {
  title: string
  href: string
  scripture?: string
  summary?: string
  formats: LessonFormat[]
}

// The title link covers the whole card, so each card has one action
const linkStyles = 'text-faith-teal after:absolute after:inset-0'

export default function TeachingCard({ item, featured = false }: { item: LibraryItem; featured?: boolean }) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-xl bg-white p-5 ring-1 ring-black/10 hover:ring-faith-teal ${
        featured ? 'border-l-4 border-faith-terracotta md:p-8' : ''
      }`}
    >
      <h3 className={`font-semibold leading-snug ${featured ? 'text-xl md:text-2xl' : 'text-lg'}`}>
        {item.href.startsWith('http') ? (
          <ExternalLink href={item.href} className={`inline-flex items-center ${linkStyles}`}>{item.title}</ExternalLink>
        ) : (
          <Link href={item.href} className={linkStyles}>{item.title}</Link>
        )}
      </h3>
      {item.scripture && <p className="mt-1 text-sm font-medium text-faith-sage">{item.scripture}</p>}
      {item.summary && <p className="mt-2 flex-1 leading-relaxed">{item.summary}</p>}
      <p className="mt-3 text-sm text-faith-sage">{item.formats.join(' · ')}</p>
    </article>
  )
}
