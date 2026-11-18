import React from 'react'
import type { Metadata } from 'next'
import { generatePersonSchema, generateWebPageSchema } from '@/lib/seo/schema'
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
import { brand } from '@/lib/brand'

const title = 'Andrew Tugume — Educator, Technologist, Investor'

export const metadata: Metadata = {
  title: { absolute: title },
  description: brand.description,
  alternates: {
    canonical: 'https://andrewtugume.com'
  },
  openGraph: {
    title,
    description: brand.headline,
    url: 'https://andrewtugume.com',
    type: 'website',
    images: [{ url: brand.images.headshot, alt: brand.name }]
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: brand.headline
  }
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebPageSchema(title, brand.description, 'https://andrewtugume.com'))
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generatePersonSchema()) }}
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

        <FinalCTASection />
      </div>
    </>
  )
}
