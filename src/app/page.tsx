import React from 'react'
import Link from 'next/link'
import AndrewsDesk from '@/components/AndrewsDesk'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Andrew Tugume — Teacher, Technologist, Investor',
  description: 'Join millions of youtransforming their calling. Access WorkMasters, Bible Study, and Leadership Exchange. Free resources, proven frameworks, real community.',
  openGraph: {
    title: 'Andrew Tugume — Teacher, Technologist, Investor',
    description: 'Join millions of youtransforming their calling. Access WorkMasters, Bible Study, and Leadership Exchange.',
    url: 'https://andrewtugume.com',
    type: 'website',
  },
}

export default function Home() {
  return (
    <>
      {/* Hero Section - Andrew-Centric */}
      <section 
        className="relative bg-gradient-to-br from-primary via-blue-800 to-slate-900 text-white rounded-xl md:rounded-2xl overflow-hidden -mx-4 sm:mx-0"
        aria-label="Andrew Tugume Introduction"
      >
        <div className="relative px-4 py-12 sm:px-8 md:px-12 md:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              {/* Andrew's Photo */}
              <div className="flex-shrink-0">
                <img 
                  src="https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg" 
                  alt="Andrew Tugume - Teacher, Technologist, and Investor helping scholars integrate faith with work" 
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white/20 shadow-2xl"
                  width="192"
                  height="192"
                  loading="eager"
                />
              </div>
              
              {/* Hero Content */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
                  Andrew Tugume
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-200 mb-4 md:mb-6">
                  Teacher • Technologist • Investor
                </p>
                <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 md:mb-8 max-w-3xl mx-auto md:mx-0">
                  I am here to help you succeed and thrive in your calling through sound teaching, modern technology, and practical wisdom. Welcome to my ecosystem of faith-driven resources.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
                  <Link 
                    href="/about" 
                    className="bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
                  >
                    About My Story
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link 
                    href="#my-work" 
                    className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center"
                  >
                    Explore My Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Triple Expertise Section */}
      <section className="mt-8 md:mt-12 grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3" aria-label="Andrew's Expertise">
        <article className="bg-white p-6 md:p-8 rounded-xl shadow-sm border-t-4 border-blue-600">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
            <svg className="w-7 h-7 md:w-8 md:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">As a Teacher</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          I share my expertise in <strong>learning and development</strong>, <strong>instructional design</strong>,course creation and EdTech<strong>in the CourseMasters Program</strong>, I run three registered schools: <strong>Qraft Academy</strong>, <strong>Chariot Leadership Institute</strong>, and <strong>Nations Bible School</strong>
          </p>
        </article>

        <article className="bg-white p-6 md:p-8 rounded-xl shadow-sm border-t-4 border-indigo-600">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
            <svg className="w-7 h-7 md:w-8 md:h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">As a Technologist</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            I believe technology is what will change the economic state of Africa. Through <strong>my TechMasters Program And Qraft Labs</strong>, I equip young people and build tech solutions.
          </p>
        </article>

        <article className="bg-white p-6 md:p-8 rounded-xl shadow-sm border-t-4 border-green-600">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
            <svg className="w-7 h-7 md:w-8 md:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">As an Investor</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            I bring real-world business experience and financial wisdom to every teaching. Through <strong>WorkMasters</strong> and <strong>Chariot Leadership Institute</strong>, I help entrepreneurs and leaders build sustainable, faith-driven ventures.
          </p>
        </article>
      </section>

      {/* Masters Programs - For Everyone */}
      <section className="mt-12 md:mt-16 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl md:rounded-2xl p-6 md:p-12 -mx-4 sm:mx-0">
        <div className="text-center mb-8 md:mb-12">
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full text-sm font-semibold text-primary mb-4">
            For Scholars, Workers & Leaders
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4">The Masters Programs</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Three comprehensive programs available to everyone—no matter which journey you're on
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3">
          {/* CourseMasters */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-amber-600">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-7 h-7 md:w-8 md:h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">CourseMasters</h3>
            <p className="text-sm md:text-base text-gray-700 mb-4">
              Learn how to create transformational courses from my vast experience as a teacher, instructional designer, and course creator.
            </p>
            <div className="space-y-2 mb-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-amber-600">✓</span>
                <span>Individual & Team Training</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-600">✓</span>
                <span>Done-For-You Course Creation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-600">✓</span>
                <span>Ready-Made Courses</span>
              </div>
            </div>
            <Link href="/masters/coursemasters" className="block text-center bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
              Explore CourseMasters →
            </Link>
          </div>

          {/* TechMasters */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-indigo-600">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-7 h-7 md:w-8 md:h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">TechMasters</h3>
            <p className="text-sm md:text-base text-gray-700 mb-4">
              Build state-of-the-art technology with my vast experience as a software engineer and technologist.
            </p>
            <div className="space-y-2 mb-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-indigo-600">✓</span>
                <span>Research & Development</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-indigo-600">✓</span>
                <span>Product Development</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-indigo-600">✓</span>
                <span>Skills & Business Development</span>
              </div>
            </div>
            <Link href="/masters/techmasters" className="block text-center bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              Explore TechMasters →
            </Link>
          </div>

          {/* CapitalMasters */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-600">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-7 h-7 md:w-8 md:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">CapitalMasters</h3>
            <p className="text-sm md:text-base text-gray-700 mb-4">
              Learn to invest and build wealth from my vast experience as an investor in startups, real estate, and financial markets.
            </p>
            <div className="space-y-2 mb-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Investment Education</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Financial Literacy</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Wealth Building Strategies</span>
              </div>
            </div>
            <Link href="/masters/capitalmasters" className="block text-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Explore CapitalMasters →
            </Link>
          </div>
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <p className="text-gray-700 mb-4 max-w-3xl mx-auto px-4">
            <strong>These programs are for everyone—</strong> whether you're a scholar growing in knowledge, a worker building your career, or a leader shepherding others. My expertise as a teacher, technologist, and investor is available to help you succeed.
          </p>
        </div>
      </section>

      {/* Andrew's Desk - Personal Update */}
      <section className="mt-8 md:mt-12" aria-label="From Andrew's Desk">
        <AndrewsDesk 
          date="November 2025"
          title="Why I Built This Ecosystem"
          message="For years, I struggled to integrate my faith with my work as a technologist and investor. I saw scholars who loved God but felt disconnected from their Monday-through-Friday lives. I saw entrepreneurs with great ideas but no biblical framework for business. I saw leaders burning out because they separated 'spiritual leadership' from 'practical management.' That's why I created WorkMasters, Nations Bible School, Chariot Leadership Institute, and Tabernacle Tech—each one addresses a gap I personally experienced. My prayer is that these resources help you thrive in your God-given calling, wherever He's placed you."
          cta={{
            text: "Read My Full Story",
            href: "/about"
          }}
        />
      </section>

      {/* My Work - The Three Vehicles */}
      <section id="my-work" className="mt-12 md:mt-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4">My Work: Three Vehicles for Your Journey</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Everything I create is designed to help you integrate faith with your calling. Choose the vehicle that matches where you are right now.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3">
          {/* For Workers - WorkMasters */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">For Workers</h3>
            </div>
            <h4 className="text-lg md:text-xl font-semibold text-blue-600 mb-3">WorkMasters</h4>
            <p className="text-sm md:text-base text-gray-700 mb-4">
              In my WorkMasters program, <strong>I teach</strong> freelancers, entrepreneurs, and employees how to turn faith into thriving work through TechMasters, CapitalMasters, and CourseMasters.
            </p>
            <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-xs md:text-sm text-gray-700">
                <strong>As an investor and technologist,</strong> I bring practical business wisdom and digital skills to help you build sustainable ventures.
              </p>
            </div>
            <div className="space-y-2 mb-6">
              <Link href="/workmasters" className="block text-sm md:text-base text-blue-600 font-semibold hover:text-blue-700">
                → Free WorkMasters Content
              </Link>
              <Link href="/schools/qraft-academy" className="block text-sm md:text-base text-blue-600 font-semibold hover:text-blue-700">
                → Qraft Academy (School for Workers)
              </Link>
              <Link href="/community/workmasters" className="block text-sm md:text-base text-blue-600 font-semibold hover:text-blue-700">
                → Join Our Community (1,247 members)
              </Link>
            </div>
          </div>

          {/* For Scholars - Bible Study */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-l-4 border-purple-600 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">For Scholars</h3>
            </div>
              <h4 className="text-lg md:text-xl font-semibold text-purple-600 mb-3">Bible Study & Discipleship</h4>
            <p className="text-sm md:text-base text-gray-700 mb-4">
              <strong>As a teacher,</strong> my deepest passion is helping scholars understand Scripture. Through my Bible Study series and Nations Bible School, <strong>I make</strong> God's Word accessible and transformative. We welcome students from primary through tertiary institutions.
            </p>
            <div className="mb-4 p-3 bg-purple-50 rounded-lg border border-purple-100">
              <p className="text-xs md:text-sm text-gray-700">
                <strong>Teaching is my calling.</strong> I've dedicated my life to making deep theological truths practical and understandable for everyday scholars.
              </p>
            </div>
            <div className="space-y-2 mb-6">
              <Link href="/bible-study" className="block text-sm md:text-base text-purple-600 font-semibold hover:text-purple-700">
                → Free Bible Study Series
              </Link>
              <Link href="/schools/nations-bible" className="block text-sm md:text-base text-purple-600 font-semibold hover:text-purple-700">
                → Nations Bible School (School for Scholars)
              </Link>
              <Link href="/community/nations-bible" className="block text-sm md:text-base text-purple-600 font-semibold hover:text-purple-700">
                → Join Our Community (2,154 members)
              </Link>
            </div>
          </div>

          {/* For Leaders - Leadership Exchange */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-l-4 border-green-600 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">For Leaders</h3>
            </div>
            <h4 className="text-lg md:text-xl font-semibold text-green-600 mb-3">Leadership Exchange</h4>
            <p className="text-sm md:text-base text-gray-700 mb-4">
              Through my Chariot Leadership Institute, <strong>I've trained</strong> pastors, executives, and emerging leaders using Bible-based frameworks. <strong>As a leader of organizations, I know these challenges firsthand.</strong>
            </p>
            <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-100">
              <p className="text-xs md:text-sm text-gray-700">
                <strong>I've led teams, built organizations, and faced the hard decisions.</strong> My teaching comes from real experience, not theory.
              </p>
            </div>
            <div className="space-y-2 mb-6">
              <Link href="/leadership" className="block text-sm md:text-base text-green-600 font-semibold hover:text-green-700">
                → Free Leadership Content
              </Link>
              <Link href="/schools/chariot-leadership" className="block text-sm md:text-base text-green-600 font-semibold hover:text-green-700">
                → Chariot Leadership Institute
              </Link>
              <Link href="/community/chariot-leadership" className="block text-sm md:text-base text-green-600 font-semibold hover:text-green-700">
                → Join Our Community (823 members)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Social Proof */}
      <section className="mt-12 md:mt-16 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl md:rounded-2xl p-6 md:p-12 -mx-4 sm:mx-0">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4">The Impact We're Making Together</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
            Join <strong>our community</strong> of youtransforming their callings
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">10,247</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-600">Resource Downloads</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">4,224</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-600">Community Members</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">523</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-600">Students Trained</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">52</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-600">Countries Reached</div>
          </div>
        </div>

        <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2">
          <blockquote className="bg-white rounded-xl shadow-sm p-5 md:p-6 border-l-4 border-blue-600">
            <p className="text-sm md:text-base text-gray-700 italic mb-3 md:mb-4">
              "Andrew's teaching in WorkMasters helped me integrate my faith with my business in a way that completely transformed how I operate. His practical wisdom as an investor made all the difference."
            </p>
            <footer className="text-xs md:text-sm font-semibold text-gray-900">— Sarah K., Entrepreneur</footer>
          </blockquote>
          <blockquote className="bg-white rounded-xl shadow-sm p-5 md:p-6 border-l-4 border-purple-600">
            <p className="text-sm md:text-base text-gray-700 italic mb-3 md:mb-4">
              "As a teacher, Andrew has an incredible gift for making deep theology accessible. The Nations Bible School course changed how I read and apply Scripture."
            </p>
            <footer className="text-xs md:text-sm font-semibold text-gray-900">— Pastor David M., Small Group Leader</footer>
          </blockquote>
        </div>
      </section>

      {/* Newsletter & Connect */}
      <section className="mt-12 md:mt-16 bg-gradient-to-r from-primary to-blue-900 text-white rounded-xl md:rounded-2xl p-6 md:p-12 text-center -mx-4 sm:mx-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-4">Get Weekly Insights from My Desk</h2>
        <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
          Every week, I share biblical insights, tech tips, and business wisdom to help you thrive in your calling.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto px-4" action="/api/subscribe" method="post">
          <input 
            type="email" 
            name="email" 
            placeholder="Your email address" 
            className="flex-1 rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white" 
            required 
          />
          <button 
            type="submit" 
            className="bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-blue-50 transition-colors whitespace-nowrap"
          >
            Join 10,000+ Subscribers
          </button>
        </form>
      </section>
    </>
  )
}
