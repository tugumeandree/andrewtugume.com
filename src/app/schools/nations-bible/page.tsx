import React from 'react'
import Link from 'next/link'

export default function NationsBible() {
  return (
    <section>
      <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
        <img src="/assets/nations-logo.svg" alt="Nations Bible School" className="h-16 mb-4" />
        <h1 className="text-3xl font-bold mb-2">Nations Bible School</h1>
        <p className="text-xl text-gray-600 mb-4">The School for Believers</p>
        <p className="text-gray-700 mb-6">Comprehensive, structured Bible training for individuals and groups seeking deep theological knowledge and practical application of Scripture.</p>
        <div className="flex gap-4">
          <Link href="/schools/nations-bible/enroll" className="bg-primary text-white px-6 py-3 rounded-md">Enroll Now</Link>
          <Link href="/bible-study" className="border px-6 py-3 rounded-md">Explore Free Bible Study Content</Link>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Programs</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mb-8">
        <article className="bg-white rounded shadow p-4">
          <h3 className="font-semibold">Old Testament Survey</h3>
          <p className="text-sm text-gray-600 mt-2">A comprehensive journey through the books of the Old Testament.</p>
          <Link href="/schools/nations-bible/old-testament" className="text-primary text-sm mt-2 inline-block">Learn More</Link>
        </article>
        <article className="bg-white rounded shadow p-4">
          <h3 className="font-semibold">New Testament Survey</h3>
          <p className="text-sm text-gray-600 mt-2">In-depth study of the Gospels, Acts, Epistles, and Revelation.</p>
          <Link href="/schools/nations-bible/new-testament" className="text-primary text-sm mt-2 inline-block">Learn More</Link>
        </article>
        <article className="bg-white rounded shadow p-4">
          <h3 className="font-semibold">Biblical Theology</h3>
          <p className="text-sm text-gray-600 mt-2">Systematic study of key theological themes across Scripture.</p>
          <Link href="/schools/nations-bible/theology" className="text-primary text-sm mt-2 inline-block">Learn More</Link>
        </article>
        <article className="bg-white rounded shadow p-4">
          <h3 className="font-semibold">Hermeneutics & Application</h3>
          <p className="text-sm text-gray-600 mt-2">Learn how to properly interpret and apply the Bible.</p>
          <Link href="/schools/nations-bible/hermeneutics" className="text-primary text-sm mt-2 inline-block">Learn More</Link>
        </article>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Why Nations Bible School?</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
        <li>Comprehensive Bible education</li>
        <li>Structured curriculum with quizzes and assessments</li>
        <li>Video lessons and downloadable study guides</li>
        <li>Small group discussion guides</li>
        <li>Certificate upon completion</li>
      </ul>

      <div className="bg-gray-50 rounded p-6">
        <h3 className="font-semibold mb-2">Ready to Deepen Your Faith?</h3>
        <p className="text-gray-700 mb-4">Join believers around the world growing in biblical knowledge.</p>
        <Link href="/schools/nations-bible/enroll" className="bg-primary text-white px-6 py-2 rounded">Enroll Today</Link>
      </div>
    </section>
  )
}
