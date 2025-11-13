import React from 'react'
import Link from 'next/link'

export default function ChariotLeadership() {
  return (
    <section>
      <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
        <img src="/assets/chariot-logo.svg" alt="Chariot Leadership Institute" className="h-16 mb-4" />
        <h1 className="text-3xl font-bold mb-2">Chariot Leadership Institute</h1>
        <p className="text-xl text-gray-600 mb-4">The School for Leaders</p>
        <p className="text-gray-700 mb-6">Develop Bible-based leadership skills for team leaders, pastors, executives, and emerging leaders through practical frameworks and spiritual formation.</p>
        <div className="flex gap-4">
          <Link href="/schools/chariot-leadership/enroll" className="bg-primary text-white px-6 py-3 rounded-md">Enroll Now</Link>
          <Link href="/leadership" className="border px-6 py-3 rounded-md">Explore Free Leadership Content</Link>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Programs</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mb-8">
        <article className="bg-white rounded shadow p-4">
          <h3 className="font-semibold">Foundations of Biblical Leadership</h3>
          <p className="text-sm text-gray-600 mt-2">Core principles for leading with conviction and integrity.</p>
          <Link href="/schools/chariot-leadership/foundations" className="text-primary text-sm mt-2 inline-block">Learn More</Link>
        </article>
        <article className="bg-white rounded shadow p-4">
          <h3 className="font-semibold">Leading Teams & Organizations</h3>
          <p className="text-sm text-gray-600 mt-2">Practical skills for managing people and resources.</p>
          <Link href="/schools/chariot-leadership/teams" className="text-primary text-sm mt-2 inline-block">Learn More</Link>
        </article>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Why Chariot Leadership Institute?</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
        <li>Biblical leadership principles</li>
        <li>Real-world case studies and frameworks</li>
        <li>Coaching and peer mentorship</li>
        <li>Leadership development assessments</li>
      </ul>

      <div className="bg-gray-50 rounded p-6">
        <h3 className="font-semibold mb-2">Ready to Lead with Purpose?</h3>
        <p className="text-gray-700 mb-4">Join leaders transforming their teams and organizations.</p>
        <Link href="/schools/chariot-leadership/enroll" className="bg-primary text-white px-6 py-2 rounded">Enroll Today</Link>
      </div>
    </section>
  )
}
