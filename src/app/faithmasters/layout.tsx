import React from 'react'
import { Inter, Outfit } from 'next/font/google'
import './faithmasters.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

// FaithMasters typography and colour stay inside this wrapper; the shared header,
// footer and every other page keep their own.
export default function FaithMastersLayout({ children }: { children: React.ReactNode }) {
  return <div className={`faithmasters fullbleed ${outfit.variable} ${inter.variable}`}>{children}</div>
}
