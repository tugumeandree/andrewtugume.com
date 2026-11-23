import React from 'react'
import Link from 'next/link'
import SectionHeading from '@/components/SectionHeading'
import StatusBadge from '@/components/StatusBadge'
import { getAllPosts } from '@/lib/blog/posts'
import { faithmasters, workmasters, type Status } from '@/lib/brand'

type FeaturedItem = {
  kicker: string
  title: string
  body: string
  href: string
  cta: string
  status?: Status
  external?: boolean
}

// Only real, current items are featured. Nothing renders for content that does not exist yet.
export default async function FeaturedSection() {
  const [latestPost] = await getAllPosts()
  const live = workmasters.offers.find((offer) => offer.id === 'live')
  const latestTeaching = faithmasters.teachings[0]

  const items: FeaturedItem[] = []

  if (live) {
    items.push({
      kicker: 'WorkMasters',
      title: live.name,
      body: live.format,
      href: '/workmasters#live',
      cta: live.cta.label,
      status: live.status,
    })
  }

  if (latestTeaching) {
    items.push({
      kicker: 'Latest Bible teaching',
      title: latestTeaching.title,
      body: latestTeaching.summary || latestTeaching.scripture || 'Watch the latest teaching.',
      href: `https://www.youtube.com/watch?v=${latestTeaching.youtubeId}`,
      cta: 'Watch now',
      external: true,
    })
  }

  items.push({
    kicker: 'FaithMasters',
    title: faithmasters.weekly.title,
    body: `${faithmasters.weekly.when} · ${faithmasters.weekly.where}`,
    href: '/faithmasters#weekly',
    cta: 'Join the study',
  })

  if (latestPost) {
    items.push({
      kicker: 'Latest essay',
      title: latestPost.title,
      body: latestPost.summary || 'Read the latest essay.',
      href: `/blog/${latestPost.slug}`,
      cta: 'Read the essay',
    })
  }

  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Featured" title="Programmes and resources to start with." />
        <div className={`mt-10 grid gap-6 md:grid-cols-2 ${items.length >= 3 ? 'lg:grid-cols-3' : ''}`}>
          {items.map((item) => (
            <article key={item.title} className="flex flex-col rounded-2xl border border-black/5 bg-[#F7F6F2] p-6">
              <div className="flex items-start justify-between gap-3">
                <p className="text-xs font-semibold tracking-[0.15em] text-gray-600 uppercase">{item.kicker}</p>
                {item.status && <StatusBadge status={item.status} />}
              </div>
              <h3 className="mt-3 text-xl font-semibold text-primary">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm text-gray-700">{item.body}</p>
              {item.external ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="mt-5 text-sm font-semibold text-primary">
                  {item.cta} →
                </a>
              ) : (
                <Link href={item.href} className="mt-5 text-sm font-semibold text-primary">
                  {item.cta} →
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
