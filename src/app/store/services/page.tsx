import React from 'react'
import Link from 'next/link'

export default function Services() {
  return (
    <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
      <h1 className="text-3xl md:text-4xl font-semibold text-primary">Engagements</h1>
      <p className="mt-4 text-gray-700">Service offerings are now handled through direct engagements.</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/book" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-black">
          View Engagements
        </Link>
        <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-black hover:text-white">
          Contact
        </Link>
      </div>
    </section>
  )
}
