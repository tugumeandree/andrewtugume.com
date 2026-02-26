import React from 'react'
import Link from 'next/link'

export default function Events() {
  return (
    <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
      <h1 className="text-3xl md:text-4xl font-semibold text-primary">Events</h1>
      <p className="mt-4 text-gray-700">Cohort meetups and private sessions are shared directly with applicants.</p>
      <div className="mt-6">
        <Link href="/apply" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-black">
          Apply for Mastery Coaching
        </Link>
      </div>
    </section>
  )
}
