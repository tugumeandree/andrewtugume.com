import React from 'react'
import Link from 'next/link'

export default function Schools() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Our Schools</h1>
      <p className="text-gray-700 mb-8">Transform your learning journey with specialized, in-depth training at one of our three schools.</p>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
        {/* Qraft Academy */}
        <article className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-primary">
          <img src="/assets/qraft-logo.svg" alt="Qraft Academy" className="h-12 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Qraft Academy</h2>
          <p className="text-sm text-gray-600 mb-4">The School for Workers</p>
          <p className="text-gray-700 mb-4">Master modern work skills—digital, data, design, capital development, and course creation—grounded in biblical principles.</p>
          <Link href="/schools/qraft-academy" className="inline-block bg-primary text-white px-4 py-2 rounded">Explore Qraft Academy</Link>
        </article>

        {/* Chariot Leadership Institute */}
        <article className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-yellow-300">
          <img src="/assets/chariot-logo.svg" alt="Chariot Leadership Institute" className="h-12 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Chariot Leadership Institute</h2>
          <p className="text-sm text-gray-600 mb-4">The School for Leaders</p>
          <p className="text-gray-700 mb-4">Develop Bible-based leadership skills for team leaders, pastors, executives, and emerging leaders.</p>
          <Link href="/schools/chariot-leadership" className="inline-block bg-primary text-white px-4 py-2 rounded">Explore Chariot Institute</Link>
        </article>

        {/* Nations Bible Community */}
        <article className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-yellow-400">
          <img src="/assets/nations-logo.svg" alt="Nations Bible Community" className="h-12 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Nations Bible Community</h2>
          <p className="text-sm text-gray-600 mb-4">The School for Scholars</p>
          <p className="text-gray-700 mb-4">Comprehensive, structured Bible training for individuals and groups seeking deep theological knowledge.</p>
          <Link href="/schools/nations-bible" className="inline-block bg-primary text-white px-4 py-2 rounded">Explore Nations Bible Community</Link>
        </article>
      </div>
    </section>
  )
}
