import React from 'react'
import Link from 'next/link'

export default function Products() {
  return (
    <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
      <h1 className="text-3xl md:text-4xl font-semibold text-primary">Resources</h1>
      <p className="mt-4 text-gray-700">Product listings have moved into the resource library.</p>
      <div className="mt-6">
        <Link href="/resources" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-black">
          Explore Resources
        </Link>
      </div>
    </section>
  )
}
