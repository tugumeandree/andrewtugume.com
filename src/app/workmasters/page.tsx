import React from 'react'
import Link from 'next/link'

export default function WorkMasters() {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">WorkMasters</h1>
          <p className="text-xl mb-3">A Community & Weekly Meetup for Modern Workers</p>
          <p className="text-lg text-blue-100 mb-4">Equipping entrepreneurs, freelancers, and employees with essential modern work skills to work smarter and generate passive income through effective leverage.</p>
          <div className="bg-blue-900/40 border-l-4 border-yellow-400 p-4 rounded">
            <p className="text-sm font-semibold text-yellow-300 mb-1">🎉 Launching in 2026</p>
            <p className="text-sm">First hybrid meetup: <strong className="text-white">Monday, January 6th, 2026</strong> | Community opens for workers in 2026</p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="bg-gradient-to-br from-indigo-50 to-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="text-5xl mb-4">⚒️</div>
            <h2 className="text-3xl font-bold mb-4">Comprehensive Modern Work Skills</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our goal is to help you increase your value by working smarter and to discover strategies for generating passive and automated income through effective leverage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Faith-Based Knowledge */}
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-600">
              <div className="text-3xl mb-3">📖</div>
              <h3 className="text-xl font-bold mb-3">Faith-Based Knowledge</h3>
              <p className="text-gray-600 mb-4">Integrating spiritual principles to guide your professional journey</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <div>
                    <strong>Well-Being:</strong> Mental and physical health practices that enhance personal well-being in the workplace
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <div>
                    <strong>Leadership & Governance:</strong> Ethical leadership rooted in integrity, humility, and service
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <div>
                    <strong>Productivity:</strong> Tools and techniques to enhance efficiency guided by faith-based principles
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <div>
                    <strong>Management:</strong> Effective resource, time, and talent management aligned with spiritual values
                  </div>
                </li>
              </ul>
              <Link href="/faith-knowledge" className="inline-block mt-4 text-blue-600 font-semibold text-sm hover:underline">
                Explore Faith-Based Knowledge →
              </Link>
            </div>

            {/* Digital Skills */}
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-indigo-600">
              <div className="text-3xl mb-3">💻</div>
              <h3 className="text-xl font-bold mb-3">Digital Skills</h3>
              <p className="text-gray-600 mb-4">Enhancing your ability to navigate and excel in the digital landscape</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>AI and automation for productivity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Digital marketing fundamentals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Building your tech stack</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Workflow automation tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Online presence and branding</span>
                </li>
              </ul>
              <Link href="/tech-resources" className="inline-block mt-4 text-indigo-600 font-semibold text-sm hover:underline">
                Explore Digital Skills Resources →
              </Link>
            </div>

            {/* Investment & Financial Intelligence */}
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-600">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-xl font-bold mb-3">Investment & Financial Intelligence</h3>
              <p className="text-gray-600 mb-4">Building your understanding of financial strategies to secure your future</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Biblical investment principles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Financial stewardship and planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Passive income strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Capital raising and management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Fintech tools and platforms</span>
                </li>
              </ul>
              <Link href="/financial-intelligence" className="inline-block mt-4 text-green-600 font-semibold text-sm hover:underline">
                Explore Financial Intelligence →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* School CTA */}
        <div className="mt-6 bg-yellow-50 border-l-4 border-primary p-6 rounded mb-12">
          <h3 className="font-semibold text-xl mb-2">Ready for In-Depth Training?</h3>
          <p className="text-gray-700 mt-2 mb-4">Transform your skills in the <strong>  90 day workmasters accelerator by Qraft Academy</strong>—the school for workers.</p>
          <Link href="/schools/qraft-academy" className="inline-block bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-blue-900">
            Explore Qraft Academy
          </Link>
        </div>

        {/* My Programs and Courses */}
        <h2 className="text-3xl font-bold mb-8">My Programs and Courses</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 mb-12">
          <article className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="font-bold text-xl mb-2">For Entrepreneurs</h3>
            <p className="text-gray-600 mb-4">Building and scaling your businesses with modern and faith based work principles.</p>
            <div className="text-sm text-gray-700 mb-4">
              <div className="font-semibold mb-2">Topics include:</div>
              <ul className="space-y-1 text-sm">
                <li>• Business strategy & planning</li>
                <li>• Raising capital & investment principles</li>
                <li>• Building your brand</li>
                <li>• Digital marketing</li>
                <li>• AI for business automation</li>
                <li>• Financial stewardship</li>
              </ul>
            </div>
            <Link href="#" className="text-primary font-semibold hover:underline">
              View Programs →
            </Link>
          </article>

          <article className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-3">💼</div>
            <h3 className="font-bold text-xl mb-2">For Freelancers</h3>
            <p className="text-gray-600 mb-4">Practical skills and systems for the independent professional.</p>
            <div className="text-sm text-gray-700 mb-4">
              <div className="font-semibold mb-2">Topics include:</div>
              <ul className="space-y-1 text-sm">
                <li>• Freelance workflow automation</li>
                <li>• Building your tech stack</li>
                <li>• Creating digital courses</li>
                <li>• Content marketing strategies</li>
                <li>• Client management systems</li>
                <li>• Passive income strategies</li>
              </ul>
            </div>
            <Link href="/workmasters/techmasters" className="text-primary font-semibold hover:underline">
              View Programs →
            </Link>
          </article>

          <article className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-3">👔</div>
            <h3 className="font-bold text-xl mb-2">For Employees</h3>
            <p className="text-gray-600 mb-4">Excellence in your career while living out your faith at work.</p>
            <div className="text-sm text-gray-700 mb-4">
              <div className="font-semibold mb-2">Topics include:</div>
              <ul className="space-y-1 text-sm">
                <li>• Career advancement strategies</li>
                <li>• AI for productivity</li>
                <li>• Professional development</li>
                <li>• Work-life integration</li>
                <li>• Leadership in the workplace</li>
                <li>• Building wealth as an employee</li>
              </ul>
            </div>
            <Link href="#" className="text-primary font-semibold hover:underline">
              View Programs →
            </Link>
          </article>
        </div>

        {/* Community CTA */}
        <section className="bg-blue-50 border-2 border-blue-300 rounded-lg p-8 text-center">
          <div className="text-5xl mb-4">💼</div>
          <h3 className="text-2xl font-bold mb-3">Join the WorkMasters Community & Weekly Meetup</h3>
          <p className="text-gray-700 mb-4 max-w-2xl mx-auto">
            Connect with workers integrating faith with their careers. Access job boards, mastermind groups, tech discussions, and weekly meetups.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mb-6 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-gray-900 mb-2">🎉 Opening in 2026</p>
            <p className="text-sm text-gray-700"><strong>First Hybrid Meetup:</strong> Monday, January 6th, 2026</p>
            <p className="text-sm text-gray-700"><strong>Weekly Meetups:</strong> Every Tuesday starting January 2026</p>
          </div>
          <Link href="/community" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
            Learn More About Communities
          </Link>
        </section>
      </div>
    </div>
  )
}
