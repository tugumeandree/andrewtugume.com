import React from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/institutions', label: 'Institutions' },
  { href: '/resources', label: 'Resources' },
  { href: '/apply', label: 'Apply' }
]

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-16">
      <div className="container py-10 md:py-14">
        <div className="grid gap-8 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg"
                alt="Andrew Tugume"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <div className="text-lg font-semibold">Andrew Tugume</div>
                <div className="text-sm text-white/70">Educator. Technologist. Investor.</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/70 max-w-md">
              Mastery coaching for ambitious African professionals, founders, and operators who want structured growth in career, technology, and capital.
            </p>
            <div className="mt-6">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-primary hover:bg-white/90"
              >
                Apply for Mastery Coaching
              </Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold tracking-wide text-white/70">Navigation</div>
            <ul className="mt-3 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold tracking-wide text-white/70">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><a href="mailto:andrewtugume2@gmail.com" className="hover:text-white">andrewtugume2@gmail.com</a></li>
              <li><a href="tel:+256755017384" className="hover:text-white">+256 755 017 384</a></li>
              <li><a href="https://www.linkedin.com/in/andrew-tugume-402ba3142/" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a></li>
              <li><a href="https://x.com/_drewtugume" target="_blank" rel="noopener noreferrer" className="hover:text-white">X</a></li>
              <li><a href="https://www.instagram.com/coachdrew_tugume/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Andrew Tugume. All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
