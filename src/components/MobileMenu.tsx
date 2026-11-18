'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { navLinks, primaryCta } from '@/lib/brand'

const mobileLinks = [{ href: '/', label: 'Home' }, ...navLinks]

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Close whenever the route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'unset'
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = 'unset'
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className="lg:hidden p-2 text-gray-700"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((prev) => !prev)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="absolute top-full left-0 right-0 lg:hidden border-t border-black/10 bg-white shadow-lg">
          <div className="container py-4 flex flex-col gap-1 text-base font-medium text-gray-800">
            {mobileLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? 'page' : undefined}
                className="rounded-lg px-2 py-2.5 hover:bg-black/5 no-underline"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={primaryCta.href}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:no-underline"
            >
              {primaryCta.label}
            </Link>
          </div>
        </nav>
      )}
    </>
  )
}
