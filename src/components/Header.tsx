import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'
import { brand, cld, navLinks, primaryCta } from '@/lib/brand'

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur border-b border-black/5 sticky top-0 z-50">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <div className="container py-4 flex items-center justify-between gap-6 relative">
        <Link href="/" className="flex items-center gap-3 no-underline hover:no-underline shrink-0">
          <img
            src={cld(brand.images.headshot, 96)}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-cover ring-2 ring-accent/60"
          />
          <div className="leading-tight">
            <div className="text-base font-semibold text-primary">{brand.name}</div>
            <div className="text-xs text-gray-600">{brand.titles.join('. ')}.</div>
          </div>
        </Link>

        <MobileMenu />

        <nav aria-label="Main" className="hidden lg:flex items-center gap-5 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="whitespace-nowrap hover:text-primary no-underline">
              {link.label}
            </Link>
          ))}
          <Link
            href={primaryCta.href}
            className="whitespace-nowrap inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-black hover:no-underline"
          >
            {primaryCta.label}
          </Link>
        </nav>
      </div>
    </header>
  )
}
