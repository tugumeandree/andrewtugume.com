import React from 'react'
import Link from 'next/link'

export default function LeadershipCommunity() {
  return (
    <div className="space-y-10">
      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-semibold text-primary">Leadership Community</h1>
        <p className="mt-4 text-gray-700">Access to leadership accountability and peer review is included inside the mastery cohorts.</p>
        <div className="mt-6">
          <Link href="/apply" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-black">
            Apply for Mastery Coaching
          </Link>
        </div>
      </section>
    </div>
  )
}
