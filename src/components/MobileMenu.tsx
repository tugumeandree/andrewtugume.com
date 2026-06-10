'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/institutions', label: 'Institutions' },
  { href: '/resources', label: 'Resources' },
]

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        className="md:hidden p-2 text-gray-700"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 md:hidden border-t border-black/10 bg-white">
          <div className="container py-4 flex flex-col gap-4 text-sm font-medium text-gray-700">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link
              href="/apply"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Claim Your Spot
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
