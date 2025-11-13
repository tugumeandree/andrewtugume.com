import React from 'react'
import Link from 'next/link'
import TechCallout from '@/components/TechCallout'

export default function Leadership() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-8 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Leadership Exchange</h1>
        <p className="text-xl text-green-100">Bible-based leadership principles and practical frameworks for team leaders, pastors, and executives.</p>
      </div>

      {/* Tech Integration Notice */}
      <div className="mb-12 bg-gradient-to-r from-indigo-50 to-green-50 border-l-4 border-indigo-600 p-6 rounded-lg">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Now Including: Technology for Leaders</h3>
            <p className="text-gray-700 mb-3">Learn to lead remote teams, make data-driven decisions, and scale your impact digitally. Topics include leadership tech stack, cybersecurity, digital communication, and more.</p>
            <Link href="/schools/tabernacle-tech" className="inline-flex items-center text-indigo-700 font-semibold hover:text-indigo-800">
              Explore Digital Leader Track
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Chariot Leadership Institute CTA */}
      <div className="mt-6 bg-green-50 border-l-4 border-green-400 p-6 rounded-lg mb-12">
        <h3 className="font-bold text-xl text-gray-900">Ready to Lead with Purpose?</h3>
        <p className="text-gray-700 mt-2">Develop your leadership through structured programs at <strong>Chariot Leadership Institute</strong>—the school for leaders.</p>
        <Link href="/schools/chariot-leadership" className="inline-block mt-4 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">Explore Chariot Leadership Institute</Link>
      </div>

      {/* Leadership Content */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Leadership Content</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-xl text-gray-900">Leading with Conviction: Four Biblical Practices for Modern Teams</h3>
            <p className="text-gray-600 mt-2">Practical steps leaders can implement this week to build Christ-centered culture.</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
              <span className="px-2 py-1 bg-green-100 text-green-700 rounded">Team Building</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded">8 min read</span>
            </div>
            <Link href="/leadership/biblical-practices" className="inline-block mt-4 text-green-600 font-semibold hover:text-green-700">Read Article →</Link>
          </article>

          <article className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-xl text-gray-900">Servant Leadership in the Digital Age</h3>
            <p className="text-gray-600 mt-2">How to lead with humility while leveraging modern communication tools.</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
              <span className="px-2 py-1 bg-green-100 text-green-700 rounded">Digital Leadership</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded">6 min read</span>
            </div>
            <Link href="/leadership/servant-leadership-digital" className="inline-block mt-4 text-green-600 font-semibold hover:text-green-700">Read Article →</Link>
          </article>
        </div>
      </div>

      {/* Latest Tech for Leaders Content */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Tech for Leaders</h2>
          <Link href="/tech-resources" className="text-indigo-600 font-semibold hover:text-indigo-700">View All Tools →</Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <article className="p-4 bg-gradient-to-br from-indigo-50 to-green-50 rounded-lg border border-indigo-200">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Leading Remote Teams</h3>
            <p className="text-sm text-gray-600">Tools and strategies for effective virtual leadership</p>
            <Link href="/blog/leading-remote-teams" className="text-indigo-600 text-sm font-semibold mt-2 inline-block">Read Guide →</Link>
          </article>

          <article className="p-4 bg-gradient-to-br from-indigo-50 to-green-50 rounded-lg border border-indigo-200">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Data-Driven Decisions</h3>
            <p className="text-sm text-gray-600">Using analytics to inform leadership without losing wisdom</p>
            <Link href="/blog/data-driven-leadership" className="text-indigo-600 text-sm font-semibold mt-2 inline-block">Learn More →</Link>
          </article>

          <article className="p-4 bg-gradient-to-br from-indigo-50 to-green-50 rounded-lg border border-indigo-200">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Digital Communication</h3>
            <p className="text-sm text-gray-600">Slack, Teams, and async collaboration best practices</p>
            <Link href="/blog/digital-communication-leaders" className="text-indigo-600 text-sm font-semibold mt-2 inline-block">Explore →</Link>
          </article>

          <article className="p-4 bg-gradient-to-br from-indigo-50 to-green-50 rounded-lg border border-indigo-200">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Cybersecurity for Leaders</h3>
            <p className="text-sm text-gray-600">Protecting your team and organization from digital threats</p>
            <Link href="/blog/cybersecurity-leaders" className="text-indigo-600 text-sm font-semibold mt-2 inline-block">Read Now →</Link>
          </article>
        </div>
      </div>

      {/* Tech Callout */}
      <TechCallout 
        track="leader"
        context="Master the technology stack for modern leadership—remote teams, data analytics, digital communication, and cybersecurity."
      />
    </section>
  )
}
