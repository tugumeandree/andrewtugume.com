import React from 'react'
import Link from 'next/link'
import TechCallout from '@/components/TechCallout'

export default function BibleStudy() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl p-8 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Bible Study</h1>
        <p className="text-xl text-purple-100">Comprehensive Bible teaching for everyone — series, lessons, and study guides.</p>
      </div>

      {/* Tech Integration Notice */}
      <div className="mb-12 bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-600 p-6 rounded-lg">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Now Including: Technology for Believers</h3>
            <p className="text-gray-700 mb-3">Learn to use digital tools for discipleship, Bible study, and gospel impact. Topics include Bible study apps, content creation, digital evangelism, and more.</p>
            <Link href="/schools/tabernacle-tech" className="inline-flex items-center text-indigo-700 font-semibold hover:text-indigo-800">
              Explore Digital Believer Track
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Nations Bible School CTA */}
      <div className="mt-6 bg-purple-50 border-l-4 border-purple-400 p-6 rounded-lg mb-12">
        <h3 className="font-bold text-xl text-gray-900">Want Structured Bible Training?</h3>
        <p className="text-gray-700 mt-2">Deepen your knowledge with comprehensive programs at <strong>Nations Bible School</strong>—the school for believers.</p>
        <Link href="/schools/nations-bible" className="inline-block mt-4 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">Explore Nations Bible School</Link>
      </div>

      {/* Content Series */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Free Bible Study Series</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-xl text-gray-900">Romans: Grace for Work and Life</h3>
            <p className="text-gray-600 mt-2">A short 3-lesson series on Romans 1–4 focused on vocation and gospel power.</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
              <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded">3 Lessons</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded">Theology of Work</span>
            </div>
            <Link href="/bible-study/romans-grace/lesson-1" className="inline-block mt-4 text-purple-600 font-semibold hover:text-purple-700">Start Lesson 1 →</Link>
          </article>

          <article className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-xl text-gray-900">Psalms for the Weary Leader</h3>
            <p className="text-gray-600 mt-2">Finding rest and renewal in the songs of David during seasons of leadership fatigue.</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
              <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded">5 Lessons</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded">Leadership</span>
            </div>
            <Link href="/bible-study/psalms-weary" className="inline-block mt-4 text-purple-600 font-semibold hover:text-purple-700">Start Series →</Link>
          </article>
        </div>
      </div>

      {/* Latest Tech for Believers Content */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Tech for Believers</h2>
          <Link href="/tech-resources" className="text-indigo-600 font-semibold hover:text-indigo-700">View All Tools →</Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <article className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Best Bible Study Apps</h3>
            <p className="text-sm text-gray-600">Comparing Logos, YouVersion, and Accordance for deep study</p>
            <Link href="/blog/best-bible-apps" className="text-indigo-600 text-sm font-semibold mt-2 inline-block">Read Guide →</Link>
          </article>

          <article className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Creating Gospel Content</h3>
            <p className="text-sm text-gray-600">Using Canva and CapCut to share your faith online</p>
            <Link href="/blog/gospel-content-creation" className="text-indigo-600 text-sm font-semibold mt-2 inline-block">Learn How →</Link>
          </article>

          <article className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Digital Discipleship</h3>
            <p className="text-sm text-gray-600">Making disciples in the age of smartphones and social media</p>
            <Link href="/blog/digital-discipleship" className="text-indigo-600 text-sm font-semibold mt-2 inline-block">Read More →</Link>
          </article>

          <article className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Theology of Technology</h3>
            <p className="text-sm text-gray-600">What the Bible says about tools, innovation, and creation</p>
            <Link href="/blog/theology-of-technology" className="text-indigo-600 text-sm font-semibold mt-2 inline-block">Explore →</Link>
          </article>
        </div>
      </div>

      {/* Tech Callout */}
      <TechCallout 
        track="believer"
        context="Master Bible study apps, create gospel content, and use technology for discipleship and spiritual growth."
      />
    </section>
  )
}
