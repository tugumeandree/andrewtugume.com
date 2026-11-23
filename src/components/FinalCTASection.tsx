import React from 'react'
import Link from 'next/link'
import { brand } from '@/lib/brand'

const paths = [
  {
    title: 'Build Productive Capital',
    body: 'Turn your skills into valuable offers and productive systems.',
    href: '/workmasters',
    accent: 'text-work-accent',
  },
  {
    title: 'Develop Your Influence',
    body: 'Find your voice and turn your ideas into lasting assets.',
    href: '/influencemasters',
    accent: 'text-[#E8B4BE]',
  },
  {
    title: 'Explore FaithMasters',
    body: 'Study Scripture and apply its wisdom to everyday life.',
    href: '/faithmasters',
    accent: 'text-[#C9D3B5]',
  },
]

export default function FinalCTASection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-6xl mx-auto rounded-3xl bg-primary p-8 md:p-14">
        <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">What Will You Develop Next?</h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {paths.map((path) => (
            <Link
              key={path.title}
              href={path.href}
              className="group block rounded-2xl border border-white/15 bg-white/5 p-6 hover:border-accent hover:no-underline"
            >
              <h3 className={`text-2xl font-semibold ${path.accent}`}>{path.title}</h3>
              <p className="mt-2 text-sm text-white/80">{path.body}</p>
              <p className="mt-6 text-sm font-semibold text-white">Start here →</p>
            </Link>
          ))}
        </div>

        <p className="mt-8 text-sm text-white/75">
          Prefer to talk first? Email{' '}
          <a href={`mailto:${brand.email}`} className="text-white hover:text-accent">{brand.email}</a> or{' '}
          <a href={brand.whatsapp} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent">message on WhatsApp</a>.
        </p>
      </div>
    </section>
  )
}
