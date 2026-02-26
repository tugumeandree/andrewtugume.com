import React from 'react'
import Link from 'next/link'

export default function QraftAcademy() {
  return (
    <div className="space-y-10">
      <section className="bg-white border border-black/5 rounded-2xl p-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-primary">Qraft Academy</h1>
        <p className="mt-3 text-gray-700">An education institution focused on modern skills, career growth, and execution capability.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="https://qraftacademy.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-black">
            Visit Qraft Academy
          </a>
          <Link href="/apply" className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-black hover:text-white">
            Apply for Mastery Coaching
          </Link>
        </div>
      </section>
    </div>
  )
}
