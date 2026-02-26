import React from 'react'
import Link from 'next/link'

export default function Store() {
  return (
    <div className="space-y-10">
      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-semibold text-primary">Resources and Engagements</h1>
        <p className="mt-4 text-gray-700">The store has been consolidated into focused resources and coaching engagements.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/resources" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-black">
            Resources
          </Link>
          <Link href="/book" className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-black hover:text-white">
            Engagements
          </Link>
        </div>
      </section>
    </div>
  )
}
