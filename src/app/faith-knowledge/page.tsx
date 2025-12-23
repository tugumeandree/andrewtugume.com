import React from 'react'
import Link from 'next/link'

export default function FaithKnowledge() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Faith-Based Knowledge</h1>
          <p className="text-xl mb-8">Integrating spiritual principles to guide your professional journey</p>
        </div>
      </section>

      {/* Latest Faith-Based Content */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Latest Faith-Based Knowledge Content</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Biblical wisdom for integrating faith with your work and professional development.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Well-Being: Biblical Practices for Mental Health at Work', category: 'Well-Being', date: 'Nov 15, 2025' },
              { title: 'Leadership with Integrity: Lessons from Biblical Leaders', category: 'Leadership', date: 'Nov 8, 2025' },
              { title: 'Productivity Through Sabbath Rest: Working Smarter, Not Harder', category: 'Productivity', date: 'Oct 30, 2025' },
              { title: 'Managing Resources Like a Steward, Not an Owner', category: 'Management', date: 'Oct 22, 2025' }
            ].map((post, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition">
                <div className="text-xs text-blue-600 font-semibold mb-2">{post.category}</div>
                <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                <div className="text-sm text-gray-600 mb-3">{post.date}</div>
                <Link href="#" className="text-blue-600 font-semibold text-sm hover:underline">
                  Read Article →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Four Pillars of Faith-Based Knowledge</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Well-Being */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl shadow-md p-8 border-t-4 border-green-600">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold mb-4">Well-Being</h3>
              <p className="text-gray-700 mb-4">
                Promoting mental and physical health as a reflection of spiritual health, with practices that enhance personal well-being in the workplace.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Biblical principles for mental health</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Spiritual practices for workplace peace</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Boundaries and work-life integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Physical health and stewardship</span>
                </li>
              </ul>
              <Link href="#" className="text-green-600 font-semibold hover:underline">
                Explore Well-Being Resources →
              </Link>
            </div>

            {/* Leadership & Governance */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-md p-8 border-t-4 border-purple-600">
              <div className="text-4xl mb-4">👑</div>
              <h3 className="text-2xl font-bold mb-4">Leadership & Governance</h3>
              <p className="text-gray-700 mb-4">
                Developing ethical leadership skills rooted in integrity, humility, and service, along with an understanding of governance principles that prioritize community welfare.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Servant leadership principles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Ethical decision-making frameworks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Governance with integrity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Leading with humility and service</span>
                </li>
              </ul>
              <Link href="#" className="text-purple-600 font-semibold hover:underline">
                Explore Leadership Resources →
              </Link>
            </div>

            {/* Productivity */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl shadow-md p-8 border-t-4 border-orange-600">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4">Productivity</h3>
              <p className="text-gray-700 mb-4">
                Equipping you with tools and techniques to enhance efficiency and effectiveness in your work processes, guided by faith-based principles.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Biblical time management principles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Sabbath rest and productivity rhythms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Purpose-driven work strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Excellence without burnout</span>
                </li>
              </ul>
              <Link href="#" className="text-orange-600 font-semibold hover:underline">
                Explore Productivity Resources →
              </Link>
            </div>

            {/* Management */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-md p-8 border-t-4 border-blue-600">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4">Management</h3>
              <p className="text-gray-700 mb-4">
                Providing strategies for effective resource management, including time and talent, to achieve organizational goals in alignment with spiritual values.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Stewardship-based resource management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Talent development and empowerment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Time management with eternal perspective</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Kingdom-centered goal setting</span>
                </li>
              </ul>
              <Link href="#" className="text-blue-600 font-semibold hover:underline">
                Explore Management Resources →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bible Study Connection */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">📖</div>
          <h2 className="text-3xl font-bold mb-4">Deepen Your Biblical Foundation</h2>
          <p className="text-lg text-gray-700 mb-8">
            Explore our comprehensive Bible study courses to build a solid theological foundation for your work and life.
          </p>
          <Link href="/bible-study" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700">
            Explore Bible Studies
          </Link>
        </div>
      </section>

      {/* CTA to Schools */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Structured Training?</h2>
          <p className="text-xl mb-8">Join Nations Bible School for comprehensive biblical education that transforms your life and work.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/schools/nations-bible" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100">
              Explore Nations Bible School
            </Link>
            <Link href="/community" className="bg-white/20 backdrop-blur border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/30">
              Join Community
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
