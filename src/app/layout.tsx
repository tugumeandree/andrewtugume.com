import '../styles/globals.css'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import type { Metadata } from 'next'
import Analytics from '../components/Analytics'
import { siteGraph } from '@/lib/seo/graph'

export const metadata: Metadata = {
  metadataBase: new URL('https://andrewtugume.com'),
  title: {
    default: 'Andrew Tugume — Educator, Technologist, Investor',
    template: '%s | Andrew Tugume'
  },
  description: 'Andrew Tugume is an educator, technologist and investor helping people develop their potential, create value and live with purpose through WorkMasters, InfluenceMasters and Bible Study with Andrew Tugume.',
  keywords: [
    'Andrew Tugume',
    'WorkMasters',
    'InfluenceMasters',
    'Bible Study with Andrew Tugume',
    'productive capital development',
    'influence capital development',
    'Bible study Uganda',
    'Kampala',
    'Qraft Group',
    'Qraft Academy',
    'Qraft Capital',
    'Future of Work Forum',
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
    locale: 'en_GB',
    siteName: 'Andrew Tugume',
    title: 'Andrew Tugume — Educator, Technologist, Investor',
    description: 'Develop your potential, create value and live with purpose — through WorkMasters, InfluenceMasters and Bible Study with Andrew Tugume.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@_drewtugume',
    creator: '@_drewtugume',
    title: 'Andrew Tugume — Educator, Technologist, Investor',
    description: 'Develop your potential, create value and live with purpose — through WorkMasters, InfluenceMasters and Bible Study with Andrew Tugume.',
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
    ...(process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION_CODE && { google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION_CODE }),
    ...(process.env.NEXT_PUBLIC_YANDEX_VERIFICATION_CODE && { yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION_CODE }),
  },
  alternates: {
    types: { 'application/rss+xml': [{ url: '/rss.xml', title: 'Andrew Tugume — Insights' }] },
  },

}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
        
      </head>
      <body className="overflow-x-hidden">

        {/* Site-wide entity graph: Person, WebSite, initiatives, businesses */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraph()) }}
        />
        
        <Header />
        <main id="main" className="container py-6 md:py-12">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
