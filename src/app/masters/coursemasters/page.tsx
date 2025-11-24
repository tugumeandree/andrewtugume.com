import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CourseMasters — Learn Course Creation with Andrew Tugume',
  description: 'Master course creation with expert guidance from Andrew Tugume - teacher, instructional designer, and learning & development expert. Individual training, team programs, and done-for-you course creation services.',
}

export default function CourseMasters() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 text-white rounded-2xl p-8 md:p-12 mb-12">
        <div className="max-w-4xl">
          <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🎓 Masters Program — For Everyone
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">CourseMasters</h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-6">
            Learn how to create transformational courses from a master teacher
          </p>
          <p className="text-lg text-white/90 mb-8">
            With years of experience as a teacher, instructional designer, learning & development expert, and successful course creator, I help individuals and teams design, develop, and deliver powerful learning experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#services" className="bg-white text-amber-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors">
              Explore Services
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* What is CourseMasters */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">What is CourseMasters?</h2>
        <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-lg mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            CourseMasters is my comprehensive course creation program built on <strong>vast experience</strong> as a:
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-amber-600 font-bold">✓</span>
              <span><strong>Teacher</strong> — Understanding pedagogy and how people learn</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 font-bold">✓</span>
              <span><strong>Instructional Designer</strong> — Structuring content for maximum impact</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 font-bold">✓</span>
              <span><strong>Learning & Development Expert</strong> — Building scalable training systems</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 font-bold">✓</span>
              <span><strong>Course Creator</strong> — Proven track record with successful online courses</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">How I Can Help You</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Individual Training */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-amber-600">
            <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Individual Training</h3>
            <p className="text-gray-700 mb-6">
              One-on-one mentorship to help you create your first course or level up your existing offerings. Perfect for solo entrepreneurs, coaches, and consultants.
            </p>
            <ul className="space-y-3 mb-6 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Personal course strategy session</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Content structure & curriculum design</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Instructional design best practices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Platform selection & setup guidance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Launch strategy & marketing tips</span>
              </li>
            </ul>
            <Link href="/contact" className="block text-center bg-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-amber-700 transition-colors">
              Enroll in Individual Training
            </Link>
          </div>

          {/* Team Training */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-orange-600">
            <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Team Training</h3>
            <p className="text-gray-700 mb-6">
              Transform your entire organization's approach to training and development. Ideal for companies building internal training programs or selling courses.
            </p>
            <ul className="space-y-3 mb-6 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Company-wide course creation system</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>L&D team training & certification</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Custom templates & frameworks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Ongoing support & consultation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>ROI tracking & optimization</span>
              </li>
            </ul>
            <Link href="/contact" className="block text-center bg-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-700 transition-colors">
              Request Team Training Quote
            </Link>
          </div>
        </div>

        {/* Done-For-You Service */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl shadow-lg p-8 border-2 border-red-200">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-20 h-20 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Done-For-You Course Creation</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Don't have time to create your course? Let me do it for you. I'll handle everything from content extraction to final production.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">What's Included:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Content strategy & outline</li>
                      <li>• Script writing & editing</li>
                      <li>• Slide design & visuals</li>
                      <li>• Video production guidance</li>
                      <li>• Platform setup & launch</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Perfect For:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Busy executives & experts</li>
                      <li>• Authors turning books into courses</li>
                      <li>• Companies launching training fast</li>
                      <li>• Speakers packaging their content</li>
                    </ul>
                  </div>
                </div>
                <Link href="/contact" className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-colors">
                  Get Custom Quote for Done-For-You Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready-Made Courses */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Ready-Made Courses by Andrew</h2>
        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-amber-600">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Learn From My Own Courses</h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Experience my teaching firsthand by enrolling in courses I've created. See the CourseMasters methodology in action.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🎓</div>
              <h4 className="text-xl font-bold mb-2">Course Creation Fundamentals</h4>
              <p className="text-gray-600 text-sm mb-4">
                Master the basics of instructional design and course development
              </p>
              <Link href="/store/products" className="text-amber-600 font-semibold hover:text-amber-700">
                Enroll Now →
              </Link>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">📹</div>
              <h4 className="text-xl font-bold mb-2">Video Course Production</h4>
              <p className="text-gray-600 text-sm mb-4">
                Learn to create professional video courses on any budget
              </p>
              <Link href="/store/products" className="text-amber-600 font-semibold hover:text-amber-700">
                Enroll Now →
              </Link>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">💰</div>
              <h4 className="text-xl font-bold mb-2">Launch & Sell Your Course</h4>
              <p className="text-gray-600 text-sm mb-4">
                Marketing strategies to get your course in front of buyers
              </p>
              <Link href="/store/products" className="text-amber-600 font-semibold hover:text-amber-700">
                Enroll Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose CourseMasters */}
      <section className="mb-12 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Learn Course Creation With Me?</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="flex gap-4">
            <div className="text-3xl">📚</div>
            <div>
              <h3 className="font-bold text-lg mb-2">Proven Teaching Experience</h3>
              <p className="text-gray-700 text-sm">Years of experience teaching in classrooms, online, and through workshops across multiple disciplines.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">🎯</div>
            <div>
              <h3 className="font-bold text-lg mb-2">Instructional Design Expertise</h3>
              <p className="text-gray-700 text-sm">Professional training in how to structure learning experiences for maximum retention and transformation.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">💼</div>
            <div>
              <h3 className="font-bold text-lg mb-2">Corporate L&D Background</h3>
              <p className="text-gray-700 text-sm">Built training programs for companies, understanding both individual and enterprise needs.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">🚀</div>
            <div>
              <h3 className="font-bold text-lg mb-2">Successful Course Creator</h3>
              <p className="text-gray-700 text-sm">I practice what I teach—my own courses have helped thousands of students achieve real results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Course?</h2>
        <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
          Whether you want to learn, need a team trained, or want it done for you—I'm here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-white text-amber-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors">
            Book a Free Consultation
          </Link>
          <Link href="/about" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
            Learn More About Andrew
          </Link>
        </div>
      </section>
    </div>
  )
}
