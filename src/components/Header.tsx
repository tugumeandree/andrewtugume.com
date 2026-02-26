'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/institutions', label: 'Institutions' },
  { href: '/resources', label: 'Resources' }
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileOpen])

  return (
    <header className="bg-white/95 backdrop-blur border-b border-black/5 sticky top-0 z-50">
      <div className="container py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <img
            src="https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg"
            alt="Andrew Tugume"
            className="h-9 w-9 rounded-full object-cover"
          />
          <div className="leading-tight">
            <div className="text-base font-semibold text-primary">Andrew Tugume</div>
            <div className="text-xs text-gray-600">Educator. Technologist. Investor.</div>
          </div>
        </Link>

        <button
          type="button"
          className="md:hidden p-2 text-gray-700"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary no-underline">
              {link.label}
            </Link>
          ))}
          <Link
            href="/apply"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-black"
          >
            Apply for Mastery Coaching
          </Link>
        </nav>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-black/10 bg-white">
          <div className="container py-4 flex flex-col gap-4 text-sm font-medium text-gray-700">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link
              href="/apply"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Apply for Mastery Coaching
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
