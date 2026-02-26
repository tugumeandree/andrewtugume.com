import '../styles/globals.css'
import React from 'react'
import Header from '../components/HeaderClientOnly'
import Footer from '../components/Footer'
import type { Metadata } from 'next'
import { generateOrganizationSchema } from '@/lib/seo/schema'

export const metadata: Metadata = {
  metadataBase: new URL('https://andrewtugume.com'),
  title: {
    default: 'Andrew Tugume — Educator, Technologist, Investor',
    template: '%s | Andrew Tugume'
  },
  description: 'Educator, technologist, and investor helping ambitious African professionals, founders, and operators master career growth, technology execution, and disciplined capital.',
  keywords: [
    'Andrew Tugume',
    'mastery coaching',
    'career strategy',
    'leadership systems',
    'technology execution',
    'product strategy',
    'investment discipline',
    'capital allocation',
    'African founders',
    'operators',
    'investors',
    'WorkMasters',
    'TechMasters',
    'CapitalMasters',
  ],
  authors: [{ name: 'Andrew Tugume', url: 'https://andrewtugume.com' }],
  creator: 'Andrew Tugume',
  publisher: 'Andrew Tugume',
  referrer: 'strict-origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['en_GB', 'sw_KE', 'sw_TZ'],
    url: 'https://andrewtugume.com',
    siteName: 'Andrew Tugume',
    title: 'Andrew Tugume — Educator, Technologist, Investor',
    description: 'Helping ambitious professionals and founders build skill, systems, and disciplined capital through structured mastery coaching.',
    images: [
      {
        url: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg',
        width: 1200,
        height: 630,
        alt: 'Andrew Tugume - Educator, Technologist, Investor',
        type: 'image/jpeg',
      },
      {
        url: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg',
        width: 800,
        height: 600,
        alt: 'Andrew Tugume - Professional headshot',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@_drewtugume',
    creator: '@_drewtugume',
    title: 'Andrew Tugume — Educator, Technologist, Investor',
    description: 'Helping ambitious professionals and founders build skill, systems, and disciplined capital.',
    images: {
      url: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg',
      alt: 'Andrew Tugume portrait',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION_CODE || '',
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION_CODE || '',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://andrewtugume.com',
    languages: {
      'en-US': 'https://andrewtugume.com',
      'en': 'https://andrewtugume.com',
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Canonical URL */}
        <link rel="canonical" href="https://andrewtugume.com" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0F5666" />
        
        {/* Theme Colors */}
        <meta name="theme-color" content="#0B0B0B" />
        <meta name="msapplication-TileColor" content="#0B0B0B" />
        
        {/* Performance: Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="mobile-alternate" content="https://andrewtugume.com" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Andrew Tugume" />
        
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { send_page_view: true, 'anonymize_ip': true });`,
              }}
            />
          </>
        )}
      </head>
      <body className="overflow-x-hidden">
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema())
          }}
        />
        
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Andrew Tugume',
              url: 'https://andrewtugume.com',
              description: 'Educator, technologist, and investor helping ambitious professionals build skill, systems, and disciplined capital.',
              image: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://andrewtugume.com/search?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            })
          }}
        />
        
        {/* Navigational Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SiteNavigationElement',
              name: 'Main Navigation',
              url: 'https://andrewtugume.com',
              mainEntity: [
                { name: 'Home', url: 'https://andrewtugume.com' },
                { name: 'About', url: 'https://andrewtugume.com/about' },
                { name: 'Programs', url: 'https://andrewtugume.com/programs' },
                { name: 'Institutions', url: 'https://andrewtugume.com/institutions' },
                { name: 'Resources', url: 'https://andrewtugume.com/resources' },
                { name: 'Apply', url: 'https://andrewtugume.com/apply' },
              ],
            })
          }}
        />
        
        <Header />
        <main className="container py-6 md:py-12">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
