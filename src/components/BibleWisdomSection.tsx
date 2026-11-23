import React from 'react'
import Link from 'next/link'
import YouTubeEmbed from '@/components/YouTubeEmbed'
import { faithmasters } from '@/lib/brand'

export default function BibleWisdomSection() {
  const featured = faithmasters.teachings[0]

  return (
    <section className="bg-scripture-light px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-scripture-warm uppercase">{faithmasters.name} · {faithmasters.byline}</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-scripture leading-tight">
            Faith Is Not Separate From Everyday Decisions.
          </h2>
          <p className="mt-5 text-base md:text-lg text-gray-800 leading-relaxed">
            Explore what Scripture teaches about work, leadership, money, stewardship, relationships and peace through
            careful Bible study and practical reflection.
          </p>
        </div>

        {featured && (
          <div className="mt-10 max-w-3xl">
            <YouTubeEmbed id={featured.youtubeId} title={featured.title} />
          </div>
        )}

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {faithmasters.tracks.map((track) => (
            <li key={track.id}>
              <Link
                href={`/faithmasters#${track.id}`}
                className="block h-full rounded-2xl border border-scripture/15 bg-white p-6 hover:border-scripture/40 hover:no-underline"
              >
                <h3 className="text-lg font-semibold text-scripture leading-snug">{track.title}</h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">{track.summary}</p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
          <Link
            href="/faithmasters"
            className="inline-flex w-fit items-center rounded-full bg-scripture px-6 py-3 text-sm font-semibold text-white hover:bg-primary hover:no-underline"
          >
            Explore FaithMasters →
          </Link>
          {faithmasters.youtubeChannelUrl && (
            <a
              href={faithmasters.youtubeChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center rounded-full border border-scripture/40 px-6 py-3 text-sm font-semibold text-scripture hover:bg-white hover:no-underline"
            >
              Watch on YouTube ↗
            </a>
          )}
          <p className="text-sm text-gray-700">
            {faithmasters.weekly.title}: {faithmasters.weekly.when}, {faithmasters.weekly.where.toLowerCase()}.
          </p>
        </div>
      </div>
    </section>
  )
}
