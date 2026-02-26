import React from 'react'
import Link from 'next/link'

export default function NationsCommunity() {
  return (
    <div className="space-y-10">
      <section className="bg-white border border-black/5 rounded-2xl p-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-primary">Nations Knowledge Community</h1>
        <p className="mt-3 text-gray-700">A legacy learning community within the broader ecosystem. Content has been consolidated into the mastery programs and resources.</p>
        <div className="mt-6">
          <Link href="/resources" className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-black hover:text-white">
            Explore Resources
          </Link>
        </div>
      </section>
    </div>
  )
}
