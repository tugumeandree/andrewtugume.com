import React from 'react'
import type { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/seo/schema'
import TechMastersNoSSR from './TechMastersNoSSR'

export const metadata: Metadata = {
  title: 'TechMasters — Weekly Tech Mentorship & Coaching',
  description:
    'Choose your track. Join a squad of 3+. Get 4 hours of live tech coaching every month. Career & Skills, Product Dev, and Startup & Scale tracks available.',
  alternates: {
    canonical: 'https://andrewtugume.com/techmasters',
  },
}

export default function TechMastersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://andrewtugume.com' },
              { name: 'TechMasters', url: 'https://andrewtugume.com/techmasters' },
            ])
          ),
        }}
      />
      <TechMastersNoSSR />
    </>
  )
}
