import React from 'react'
import Link from 'next/link'

export default function PartnershipInquiry() {
  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      <section className="bg-white border border-black/5 rounded-2xl p-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-primary">Partnership Inquiry</h1>
        <p className="mt-3 text-gray-700">For collaboration, sponsorship, or institutional partnerships, contact the team.</p>
        <div className="mt-6">
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-black">
            Contact Andrew
          </Link>
        </div>
      </section>
    </div>
  )
}
