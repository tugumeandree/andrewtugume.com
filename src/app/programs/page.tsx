import React from 'react'
import { pageMetadata } from '@/lib/seo/metadata'
import Link from 'next/link'
import { generateBreadcrumbSchema } from '@/lib/seo/schema'
import OfferTile from '@/components/OfferTile'
import PageHero from '@/components/PageHero'
import { bibleStudy, bookingHref, influencemasters, workmasters } from '@/lib/brand'

export const metadata = pageMetadata({
  title: 'Programmes — WorkMasters, InfluenceMasters & Bible Study',
  description: 'Every programme from Andrew Tugume with its current status — WorkMasters, InfluenceMasters and Bible Study with Andrew Tugume.',
  path: '/programs',
  absolute: true,
})

export default function Programs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://andrewtugume.com' },
              { name: 'Programmes', url: 'https://andrewtugume.com/programs' }
            ])
          )
        }}
      />

      <div className="fullbleed">
        <PageHero
          eyebrow="Explore Programmes"
          title="Find the programme that fits where you are."
          intro="Every programme shows its current status. Where dates or prices are not yet confirmed, you can join an interest list or enquire."
        >
          <a href="#workmasters" className="inline-flex items-center justify-center rounded-full bg-work-accent px-6 py-3 text-sm font-semibold text-work hover:bg-white hover:no-underline">WorkMasters</a>
          <a href="#influencemasters" className="inline-flex items-center justify-center rounded-full bg-[#F2C9D0] px-6 py-3 text-sm font-semibold text-influence hover:bg-white hover:no-underline">InfluenceMasters</a>
          <a href="#bible-study" className="inline-flex items-center justify-center rounded-full bg-scripture-light px-6 py-3 text-sm font-semibold text-scripture hover:bg-white hover:no-underline">Bible Study</a>
        </PageHero>

        <section id="workmasters" className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.2em] text-work-text uppercase">{workmasters.category}</p>
            <div className="mt-3 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-3xl md:text-4xl font-semibold text-work">WorkMasters</h2>
              <Link href="/workmasters" className="text-sm font-semibold text-work-text">About WorkMasters →</Link>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {workmasters.offers.map((offer) => (
                <OfferTile key={offer.id} offer={{ ...offer, cta: { ...offer.cta, href: `/workmasters${offer.cta.href}` } }} accent="work" anchor={false} />
              ))}
            </div>
          </div>
        </section>

        <section id="influencemasters" className="bg-influence-light px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.2em] text-influence uppercase">{influencemasters.category}</p>
            <div className="mt-3 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-3xl md:text-4xl font-semibold text-influence">InfluenceMasters</h2>
              <Link href="/influencemasters" className="text-sm font-semibold text-influence">About InfluenceMasters →</Link>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {influencemasters.offers.map((offer) => (
                <OfferTile key={offer.id} offer={{ ...offer, cta: { ...offer.cta, href: `/influencemasters${offer.cta.href}` } }} accent="influence" anchor={false} />
              ))}
            </div>
          </div>
        </section>

        <section id="bible-study" className="bg-scripture-light px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.2em] text-scripture-warm uppercase">Biblical Wisdom for Everyday Life</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-scripture">{bibleStudy.name}</h2>
            <p className="mt-4 max-w-3xl text-gray-800">
              Bible Study is teaching, not a programme to buy. Join the weekly study, explore the four tracks, or invite
              Andrew to teach.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <Link href="/bible-study#weekly" className="block rounded-2xl bg-white p-6 hover:no-underline">
                <span className="block text-lg font-semibold text-scripture">{bibleStudy.weekly.title}</span>
                <span className="mt-1 block text-sm text-gray-700">{bibleStudy.weekly.when}</span>
              </Link>
              <Link href="/bible-study#tracks" className="block rounded-2xl bg-white p-6 hover:no-underline">
                <span className="block text-lg font-semibold text-scripture">Four teaching tracks</span>
                <span className="mt-1 block text-sm text-gray-700">Work, money, stewardship, relationships</span>
              </Link>
              <Link href="/bible-study/invite" className="block rounded-2xl bg-white p-6 hover:no-underline">
                <span className="block text-lg font-semibold text-scripture">Invite Andrew to teach</span>
                <span className="mt-1 block text-sm text-gray-700">Churches, ministries and Christian organisations</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-6xl mx-auto rounded-3xl border border-black/5 bg-white p-8 md:p-12 grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary">Bringing Andrew to your organisation?</h2>
              <p className="mt-2 text-gray-700">Keynotes, workshops and training for conferences, companies and institutions.</p>
            </div>
            <Link href={bookingHref} className="inline-flex w-fit items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white hover:bg-black hover:no-underline md:justify-self-end">
              Book Andrew to speak →
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
