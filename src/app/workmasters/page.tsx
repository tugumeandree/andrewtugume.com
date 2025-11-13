import React from 'react'
import Link from 'next/link'

export default function WorkMasters() {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">WorkMasters</h1>
          <p className="text-xl">Biblical principles and modern skills for entrepreneurs, freelancers, investors, and employees pursuing excellence in work.</p>
        </div>
      </section>

      {/* Tech Integration Notice */}
      <section className="bg-indigo-50 border-b-4 border-indigo-600 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-4xl mb-3">⚒️</div>
          <h2 className="text-2xl font-bold mb-2">Now Including: Technology for Workers</h2>
          <p className="text-gray-700 mb-4">Every WorkMasters program now integrates practical technology training—AI, digital marketing, productivity tools, and more.</p>
          <Link href="/tech-resources" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700">
            Explore Tech Resources →
          </Link>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* School CTA */}
        <div className="mt-6 bg-yellow-50 border-l-4 border-primary p-6 rounded mb-12">
          <h3 className="font-semibold text-xl mb-2">Ready for In-Depth Training?</h3>
          <p className="text-gray-700 mt-2 mb-4">Transform your skills with structured programs at <strong>Qraft Academy</strong>—the school for workers.</p>
          <Link href="/schools/qraft-academy" className="inline-block bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-blue-900">
            Explore Qraft Academy
          </Link>
        </div>

        {/* Three Programs */}
        <h2 className="text-3xl font-bold mb-8">Our Programs</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 mb-12">
          <article className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-3">💻</div>
            <h3 className="font-bold text-xl mb-2">TechMasters</h3>
            <p className="text-gray-600 mb-4">Practical digital skills and freelance workflows for the tech-savvy Christian worker.</p>
            <div className="text-sm text-gray-700 mb-4">
              <div className="font-semibold mb-2">Topics include:</div>
              <ul className="space-y-1 text-sm">
                <li>• AI for business productivity</li>
                <li>• Digital marketing fundamentals</li>
                <li>• Building your tech stack</li>
                <li>• Freelance workflow automation</li>
              </ul>
            </div>
            <Link href="/workmasters/techmasters" className="text-primary font-semibold hover:underline">
              View TechMasters Program →
            </Link>
          </article>

          <article className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="font-bold text-xl mb-2">CapitalMasters</h3>
            <p className="text-gray-600 mb-4">Capital development for entrepreneurs and investors seeking Kingdom-centered wealth building.</p>
            <div className="text-sm text-gray-700 mb-4">
              <div className="font-semibold mb-2">Topics include:</div>
              <ul className="space-y-1 text-sm">
                <li>• Raising capital biblically</li>
                <li>• Investment principles</li>
                <li>• Financial stewardship</li>
                <li>• Using fintech tools wisely</li>
              </ul>
            </div>
            <Link href="#" className="text-primary font-semibold hover:underline">
              View CapitalMasters Program →
            </Link>
          </article>

          <article className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-3">📚</div>
            <h3 className="font-bold text-xl mb-2">CourseMasters</h3>
            <p className="text-gray-600 mb-4">Course development content for freelancers, especially coaches and consultants.</p>
            <div className="text-sm text-gray-700 mb-4">
              <div className="font-semibold mb-2">Topics include:</div>
              <ul className="space-y-1 text-sm">
                <li>• Creating digital courses</li>
                <li>• Content marketing strategies</li>
                <li>• Course platform selection</li>
                <li>• Automating your teaching business</li>
              </ul>
            </div>
            <Link href="#" className="text-primary font-semibold hover:underline">
              View CourseMasters Program →
            </Link>
          </article>
        </div>

        {/* Recent Tech-Focused Content */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Latest Tech for Workers Content</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Biblical Productivity with AI: Using ChatGPT Ethically', category: 'AI & Ethics', date: 'Nov 10, 2025' },
              { title: 'Building Your Freelance Tech Stack in 2025', category: 'Productivity', date: 'Nov 5, 2025' },
              { title: 'Digital Marketing for Christian Entrepreneurs', category: 'Marketing', date: 'Oct 28, 2025' },
              { title: 'Cybersecurity Basics Every Freelancer Needs', category: 'Security', date: 'Oct 20, 2025' }
            ].map((post, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition">
                <div className="text-xs text-indigo-600 font-semibold mb-2">{post.category}</div>
                <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                <div className="text-sm text-gray-600 mb-3">{post.date}</div>
                <Link href="#" className="text-primary font-semibold text-sm hover:underline">
                  Read Article →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Community CTA */}
        <section className="bg-blue-50 border-2 border-blue-300 rounded-lg p-8 text-center">
          <div className="text-5xl mb-4">💼</div>
          <h3 className="text-2xl font-bold mb-3">Join the WorkMasters Community</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Connect with 1,247 workers integrating faith with their careers. Access job boards, mastermind groups, and tech discussions.
          </p>
          <Link href="/community/workmasters" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
            Join Community - Free
          </Link>
        </section>
      </div>
    </div>
  )
}
