'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import type { Track } from '@/lib/brand'

type TrackCardProps = {
  track: Track
  lessons: { title: string; href: string }[]
}

export default function TrackCard({ track, lessons }: TrackCardProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null)

  // Links such as /faithmasters#stewardship open the track they point to
  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash === `#${track.id}` && detailsRef.current) detailsRef.current.open = true
    }
    openFromHash()
    window.addEventListener('hashchange', openFromHash)
    return () => window.removeEventListener('hashchange', openFromHash)
  }, [track.id])

  return (
    <article id={track.id} className="rounded-xl bg-white p-5 md:p-6 ring-1 ring-black/10">
      <h3 className="text-xl font-semibold text-faith-teal">{track.title}</h3>
      <p className="mt-2 leading-relaxed">{track.summary}</p>

      <details ref={detailsRef} className="group mt-2">
        <summary className="inline-flex min-h-[44px] items-center gap-2 rounded font-semibold text-faith-teal hover:underline">
          {lessons.length > 0 ? 'View teachings' : 'View study topics'}
          <span className="sr-only">: {track.title}</span>
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="transition-transform motion-reduce:transition-none group-open:rotate-180"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </summary>

        <div className="mt-3 space-y-6 border-t border-black/10 pt-5">
          {lessons.length > 0 && (
            <ul className="space-y-2">
              {lessons.map((lesson) => (
                <li key={lesson.href}>
                  <Link href={lesson.href} className="font-medium underline">{lesson.title}</Link>
                </li>
              ))}
            </ul>
          )}

          <div>
            <h4 className="font-semibold text-faith-teal">Passages</h4>
            <p className="mt-1 leading-relaxed">{track.passages.join('; ')}</p>
          </div>
          <div>
            <h4 className="font-semibold text-faith-teal">Themes</h4>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              {track.themes.map((theme) => (
                <li key={theme}>{theme}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-faith-teal">What you will be able to do</h4>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              {track.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </div>
          {track.safeguards && (
            <div className="rounded-lg bg-faith-sand p-4">
              <h4 className="font-semibold text-faith-teal">Please note</h4>
              <ul className="mt-1 list-disc space-y-1 pl-5">
                {track.safeguards.map((safeguard) => (
                  <li key={safeguard}>{safeguard}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </details>
    </article>
  )
}
