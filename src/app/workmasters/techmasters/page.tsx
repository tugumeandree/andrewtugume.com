import React from 'react'
import Link from 'next/link'

export default function TechMastersRedirect() {
  return (
    <div className="space-y-10">
      <section className="bg-white border border-black/5 rounded-2xl p-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-primary">TechMasters</h1>
        <p className="mt-3 text-gray-700">The TechMasters program now lives at its dedicated page.</p>
        <div className="mt-6">
          <Link href="/masters/techmasters" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-black">
            Go to TechMasters
          </Link>
        </div>
      </section>
    </div>
  )
}
