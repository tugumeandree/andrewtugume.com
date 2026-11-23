import React from 'react'
import Link from 'next/link'
import { brand, bookingHref, cld, initiatives, primaryCta } from '@/lib/brand'

const engageLinks = [
  { href: primaryCta.href, label: primaryCta.label },
  { href: bookingHref, label: 'Book Andrew to speak' },
  { href: '/faithmasters/invite', label: 'Invite Andrew to teach' },
  { href: '/ecosystem#partner', label: 'Partner with Andrew' },
  { href: '/speaking#media-kit', label: 'Media kit' },
]

const exploreLinks = [
  { href: '/about', label: 'About' },
  { href: '/resources', label: 'Resources' },
  { href: '/ecosystem', label: 'My Ecosystem' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-16">
      <div className="container py-12 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={cld(brand.images.headshot, 120)}
                alt=""
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-accent/60"
              />
              <div>
                <div className="text-lg font-semibold">{brand.name}</div>
                <div className="text-sm text-white/75">{brand.titles.join(' · ')}</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/75 max-w-sm">{brand.headline}</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-wide text-white/75">Initiatives</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {initiatives.map((initiative) => (
                <li key={initiative.href}>
                  <Link href={initiative.href} className="text-white/85 hover:text-white">{initiative.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-wide text-white/75">Engage</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {engageLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/85 hover:text-white">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-wide text-white/75">Connect</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/85 hover:text-white">{link.label}</Link>
                </li>
              ))}
              <li><a href={`mailto:${brand.email}`} className="text-white/85 hover:text-white">{brand.email}</a></li>
              <li><a href={brand.whatsapp} target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-white">WhatsApp {brand.phone}</a></li>
              {brand.socials.map((social) => (
                <li key={social.href}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-white">{social.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/70 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} {brand.name}. All rights reserved.</div>
          <div>{brand.location}</div>
        </div>
      </div>
    </footer>
  )
}
