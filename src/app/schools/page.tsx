import React from 'react'
import Link from 'next/link'

export default function InstitutionsIndex() {
  return (
    <div className="space-y-12">
      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-semibold text-primary">Institutions</h1>
        <p className="mt-4 text-gray-700 max-w-3xl">These institutions support the broader ecosystem of education, leadership, technology, and capital development.</p>
        <div className="mt-6">
          <Link href="/institutions" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-black">
            View Institutions Overview
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="bg-white border border-black/5 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-primary">Qraft Academy</h2>
          <p className="mt-3 text-sm text-gray-700">Skill development and career acceleration programs.</p>
          <Link href="/schools/qraft-academy" className="mt-4 inline-flex text-sm font-semibold text-primary">View profile →</Link>
        </article>
        <article className="bg-white border border-black/5 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-primary">Chariot Leadership Institute</h2>
          <p className="mt-3 text-sm text-gray-700">Leadership development and governance training.</p>
          <Link href="/schools/chariot-leadership" className="mt-4 inline-flex text-sm font-semibold text-primary">View profile →</Link>
        </article>
        <article className="bg-white border border-black/5 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-primary">Nations Community</h2>
          <p className="mt-3 text-sm text-gray-700">Legacy education initiatives now consolidated into the ecosystem.</p>
          <Link href="/schools/nations-bible" className="mt-4 inline-flex text-sm font-semibold text-primary">View profile →</Link>
        </article>
        <article className="bg-white border border-black/5 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-primary">Tabernacle Tech Institute</h2>
          <p className="mt-3 text-sm text-gray-700">Digital skills and innovation training.</p>
          <Link href="/schools/tabernacle-tech" className="mt-4 inline-flex text-sm font-semibold text-primary">View profile →</Link>
        </article>
      </section>
    </div>
  )
}
