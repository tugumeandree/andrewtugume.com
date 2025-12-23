import '../styles/globals.css'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://andrewtugume.com'),
  title: {
    default: 'Andrew Tugume — Teacher, Technologist, Investor',
    template: '%s | Andrew Tugume'
  },
  description: 'Andrew Tugume helps youthrough WorkMasters, Bible Study, and Leadership Exchange. Join millions of members transforming their work, faith, and leadership.',
  keywords: [
    'Andrew Tugume',
    'Career and business coach',
    'faith and work',
    'Bible study',
    'leadership coaching',
    'WorkMasters',
    'entrepreneurship training',
    'Christian teaching',
    'faith-driven business',
    'investor',
    'Bible teaching',
    'leadership development',
    'Nations Bible School',
    'Chariot Leadership Institute',
    'Qraft Academy',
    'technologist',
    'javascript educator'
  ],
  authors: [{ name: 'Andrew Tugume', url: 'https://andrewtugume.com' }],
  creator: 'Andrew Tugume',
  publisher: 'Andrew Tugume',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://andrewtugume.com',
    siteName: 'Andrew Tugume',
    title: 'Andrew Tugume — Teacher, Technologist, Investor',
    description: 'Helping you integrate faith with their calling through biblical teaching, modern technology, and practical business wisdom.',
    images: [
      {
        url: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg',
        width: 1200,
        height: 630,
        alt: 'Andrew Tugume - Teacher, Technologist, Investor',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@_drewtugume',
    creator: '@_drewtugume',
    title: 'Andrew Tugume — Teacher, Technologist, Investor',
    description: 'Helping yousucceed.',
    images: ['https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your actual verification code
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://andrewtugume.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#0F5666" />
        {/* Preconnect to Google Fonts and load Inter with font-display swap for better LCP */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { send_page_view: true });`,
              }}
            />
          </>
        )}
      </head>
      <body className="overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Andrew Tugume',
              url: 'https://andrewtugume.com',
              image: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg',
              jobTitle: 'Teacher, Technologist, Investor',
              description: 'Helping yousucceed through biblical teaching, modern technology, and practical business wisdom.',
              sameAs: [
                'https://x.com/_drewtugume',
              ],
              knowsAbout: [
                'Biblical Teaching',
                'Christian Business',
                'Leadership Development',
                'Technology Education',
                'Faith and Work Integration'
              ],
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'Educational Background'
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Andrew Tugume',
              url: 'https://andrewtugume.com',
              description: 'Faith-driven resources for scholars, workers, and leaders',
              publisher: {
                '@type': 'Person',
                name: 'Andrew Tugume'
              }
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
