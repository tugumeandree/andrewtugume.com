import React from 'react'
import type { Talk } from '@/lib/brand'

export default function TalkCard({ talk, index, tone = 'light' }: { talk: Talk; index: number; tone?: 'light' | 'dark' }) {
  const dark = tone === 'dark'

  return (
    <article
      className={`flex h-full flex-col rounded-2xl p-6 md:p-8 ${
        dark ? 'bg-white/5 border border-white/10' : 'bg-white border border-black/5'
      }`}
    >
      <p className="text-3xl text-accent" style={{ fontFamily: 'Playfair Display, serif' }}>
        {String(index + 1).padStart(2, '0')}
      </p>
      <h3 className={`mt-4 text-xl md:text-2xl font-semibold leading-snug ${dark ? 'text-white' : 'text-primary'}`}>
        {talk.title}
      </h3>
      <p className={`mt-3 text-sm leading-relaxed ${dark ? 'text-white/70' : 'text-gray-700'}`}>{talk.summary}</p>
      <ul className={`mt-5 space-y-2 text-sm flex-1 ${dark ? 'text-white/80' : 'text-gray-700'}`}>
        {talk.takeaways.map((takeaway) => (
          <li key={takeaway} className="flex gap-2">
            <span className="text-accent">—</span>
            <span>{takeaway}</span>
          </li>
        ))}
      </ul>
      <p className={`mt-6 pt-4 border-t text-xs ${dark ? 'border-white/10 text-white/50' : 'border-black/5 text-gray-500'}`}>
        Ideal for: {talk.audience}
      </p>
    </article>
  )
}
