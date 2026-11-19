import React from 'react'
import { pageMetadata } from '@/lib/seo/metadata'
import { generateWebPageSchema } from '@/lib/seo/schema'
import FaqList from '@/components/FaqList'
import Link from 'next/link'
import HeroImproved from '@/components/HeroImproved'
import InitiativesSection from '@/components/InitiativesSection'
import PurposeSection from '@/components/PurposeSection'
import BibleWisdomSection from '@/components/BibleWisdomSection'
import MeetAndrewSection from '@/components/MeetAndrewSection'
import FeaturedSection from '@/components/FeaturedSection'
import EcosystemOverview from '@/components/EcosystemOverview'
import EvidenceSection from '@/components/EvidenceSection'
import FinalCTASection from '@/components/FinalCTASection'
import SectionHeading from '@/components/SectionHeading'
import { brand, generalFaqs } from '@/lib/brand'

export const metadata = pageMetadata({
  title: 'Andrew Tugume | Educator, Technologist & Investor, Kampala',
  description: 'Andrew Tugume is a Kampala-based educator, technologist and investor. Explore WorkMasters, InfluenceMasters and Bible Study with Andrew Tugume.',
  path: '',
  absolute: true,
})

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebPageSchema(`${brand.name} — ${brand.titles.join(', ')}`, brand.description, 'https://andrewtugume.com'))
        }}
      />

      <div className="home-fullbleed">
        {/* Hero - Who, what, and next step */}
        <HeroImproved />

        {/* Three flagship initiatives, equal visibility */}
        <InitiativesSection />

        {/* Why this work matters + Personal Capital Development */}
        <PurposeSection />

        {/* Bible Study as a distinct, welcoming initiative */}
        <BibleWisdomSection />

        {/* Founder introduction */}
        <MeetAndrewSection />

        {/* Only real, current programmes and resources */}
        <FeaturedSection />

        {/* Wider ecosystem - connected, not personal-brand programmes */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              eyebrow="Wider Ecosystem"
              title="Connected initiatives."
              intro="My personal-brand work connects to a corporate business and a wider ecosystem initiative."
            />
            <div className="mt-10">
              <EcosystemOverview />
            </div>
          </div>
        </section>

        {/* Verified evidence only - hidden until entries exist */}
        <EvidenceSection />

        {/* Direct answers for search and answer engines */}
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <SectionHeading eyebrow="Questions" title="About Andrew Tugume" />
            <div className="mt-8">
              <FaqList faqs={generalFaqs.slice(0, 5)} />
            </div>
            <Link href="/faq" className="mt-6 inline-flex text-sm font-semibold">All questions →</Link>
          </div>
        </section>

        <FinalCTASection />
      </div>
    </>
  )
}
