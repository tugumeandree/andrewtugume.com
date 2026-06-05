import React from 'react'
import type { Metadata } from 'next'
import { generateBreadcrumbSchema, generateWebPageSchema } from '@/lib/seo/schema'
import HeroImproved from '@/components/HeroImproved'
import AuthorityPillars from '@/components/AuthorityPillars'
import MasteryFramework from '@/components/MasteryFramework'
import ProgramsEcosystem from '@/components/ProgramsEcosystem'
import PersonalStory from '@/components/PersonalStory'
import MissionVisionSection from '@/components/MissionVisionSection'
import InstitutionsSection from '@/components/InstitutionsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FinalCTASection from '@/components/FinalCTASection'
import ProofStrip from '@/components/ProofStrip'

export const metadata: Metadata = {
  title: 'Andrew Tugume — Educator, Technologist, Investor',
  description: 'Mastery coaching for ambitious African professionals, founders, and operators to build skill, systems, and disciplined capital.',
  alternates: {
    canonical: 'https://andrewtugume.com'
  },
  openGraph: {
    title: 'Andrew Tugume — Educator, Technologist, Investor',
    description: 'Master your career, technology, and wealth through structured mastery coaching.',
    url: 'https://andrewtugume.com',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg',
        width: 1200,
        height: 630,
        alt: 'Andrew Tugume - Educator, Technologist, Investor'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andrew Tugume — Educator, Technologist, Investor',
    description: 'Master your career, technology, and wealth through structured mastery coaching.'
  }
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateWebPageSchema(
              'Andrew Tugume - Educator, Technologist, Investor',
              'Mastery coaching for ambitious African professionals, founders, and operators.',
              'https://andrewtugume.com'
            )
          )
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([{ name: 'Home', url: 'https://andrewtugume.com' }])
          )
        }}
      />

      <div className="home-fullbleed">
        {/* Hero Section - Transformation-focused */}
        <HeroImproved />

        {/* Proof Strip - Quick credibility metrics */}
        <ProofStrip />

        {/* Authority Section - Establish credibility early */}
        <AuthorityPillars />

        {/* Mastery Framework - Explain the system */}
        <MasteryFramework />

        {/* Programs Organized by Pillar - Show ecosystem */}
        <ProgramsEcosystem />

        {/* Personal Story - Enhanced and moved higher */}
        <PersonalStory />

        {/* Mission & Vision - Movement narrative */}
        <MissionVisionSection />

        {/* Institutions - Infrastructure supporting mission */}
        <InstitutionsSection />

        {/* Testimonials - Social proof */}
        <TestimonialsSection />

        {/* Final CTA - Transformation-focused */}
        <FinalCTASection />
      </div>
    </>
  )
}
