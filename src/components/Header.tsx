import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/institutions', label: 'Institutions' },
  { href: '/resources', label: 'Resources' },
]

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur border-b border-black/5 sticky top-0 z-50">
      <div className="container py-4 flex items-center justify-between relative">
        <Link href="/" className="flex items-center gap-3">
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

        <MobileMenu />

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
            Claim Your Spot
          </Link>
        </nav>
      </div>
    </header>
  )
}
