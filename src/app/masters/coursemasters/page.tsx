import React from 'react'
import Link from 'next/link'

export default function CourseMasters() {
  return (
    <div className="space-y-12">
      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <p className="text-sm font-semibold tracking-wide text-accent uppercase">CourseMasters Studio</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-semibold text-primary">Learning design for ambitious teams</h1>
        <p className="mt-4 text-gray-700 max-w-3xl">
          A learning design studio that helps organizations build high-performance training systems.
        </p>
        <div className="mt-6">
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-black">
            Discuss a Project
          </Link>
        </div>
      </section>
    </div>
  )
}
