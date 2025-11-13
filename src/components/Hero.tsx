import React from 'react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-white rounded-lg p-8 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Faith, Work, and Leadership — Rooted & Ready</h1>
          <p className="mt-3 text-gray-700">Practical Bible teaching and modern work skills for entrepreneurs, freelancers, and leaders. Courses, studies and coaching grounded in Scripture and built for today’s world.</p>

          <div className="mt-6 flex gap-4">
            <Link href="/" className="inline-block bg-primary text-white px-5 py-2 rounded-md">Explore the Three Ministries</Link>
            <Link href="/subscribe" className="inline-block border px-5 py-2 rounded-md">Subscribe for weekly insights</Link>
          </div>
        </div>
        <div className="mt-6 md:mt-0 md:ml-8">
          <div className="w-64 h-36 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">[Hero image]</div>
        </div>
      </div>
    </section>
  )
}
