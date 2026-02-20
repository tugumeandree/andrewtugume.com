import '../styles/globals.css'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import type { Metadata } from 'next'
import { generateOrganizationSchema } from '@/lib/seo/schema'

export const metadata: Metadata = {
  metadataBase: new URL('https://andrewtugume.com'),
  title: {
    default: 'Andrew Tugume — Educator, Technologist, Investor',
    template: '%s | Andrew Tugume'
  },
  description: 'Educator, Technologist, and Investor helping workers, leaders, and learners succeed through biblical teaching, technology, and practical wisdom. Access WorkMasters, Bible Study, Leadership coaching, and more.',
  keywords: [
    'Andrew Tugume',
    'career coach',
    'business coach',
    'faith and work',
    'Bible study online',
    'leadership coaching',
    'WorkMasters course',
    'entrepreneurship training',
    'Christian teaching',
    'faith-driven business',
    'investor',
    'Bible teaching',
    'leadership development',
    'Nations Bible Community',
    'Chariot Leadership Institute',
    'Qraft Academy',
    'tech educator',
    'TechMasters',
    'online courses',
    'professional development',
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
    description: 'Helping workers, leaders, and learners succeed through biblical teaching, modern technology, and practical business wisdom.',
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
    description: 'Helping workers succeed through faith, technology, and wisdom',
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
        <meta name="theme-color" content="#0F5666" />
        <meta name="msapplication-TileColor" content="#0F5666" />
        
        {/* Performance: Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        
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
              description: 'Educator, Technologist, and Investor helping workers, leaders, and learners succeed through biblical teaching, technology, and practical wisdom.',
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
                { name: 'About', url: 'https://andrewtugume.com/about' },
                { name: 'WorkMasters', url: 'https://andrewtugume.com/workmasters' },
                { name: 'Bible Study', url: 'https://andrewtugume.com/bible-study' },
                { name: 'Blog', url: 'https://andrewtugume.com/blog' },
                { name: 'Leadership', url: 'https://andrewtugume.com/leadership' },
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
