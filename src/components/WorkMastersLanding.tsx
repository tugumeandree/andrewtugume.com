'use client'

import Link from 'next/link'
import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import TestimonialsCarousel, { type Testimonial } from './TestimonialsCarousel'

const benefits = [
  {
    title: 'Raise Capital Confidently',
    description: 'Build investor-ready pitches, trackable traction, and credible financials.',
    icon: (
      <svg className="h-7 w-7 text-amber-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Lead High-Impact Teams',
    description: 'Build systems, governance, and culture that scales with your vision.',
    icon: (
      <svg className="h-7 w-7 text-amber-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: 'Build Personal Wealth',
    description: 'Master investments, budgeting, and wealth strategies that fit Uganda.',
    icon: (
      <svg className="h-7 w-7 text-amber-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v4H3V3zm0 6h18v12H3V9zm6 3h6" />
      </svg>
    )
  }
]

const testimonials: Testimonial[] = [
  {
    quote: 'Doubled income in 90 days after applying the weekly coaching playbooks.',
    name: 'Sarah',
    role: 'Freelancer'
  },
  {
    quote: 'Closed my first UGX 25M deal and finally built a repeatable sales process.',
    name: 'Martin',
    role: 'Founder'
  },
  {
    quote: 'Got promoted after restructuring my team and delivery system.',
    name: 'Daisy',
    role: 'Operations Lead'
  }
]

export default function WorkMastersLanding() {
  const [calendarOpen, setCalendarOpen] = useState(false)
  const calendarId = 'workmasters-calendar-modal'

  const nextMeetup = useMemo(
    () => ({ date: 'March 28, 2026', title: 'Leadership in Agri-Tech', location: 'Kampala / Entebbe' }),
    []
  )

  return (
    <section className="mt-10 md:mt-14 -mx-4 sm:mx-0">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-blue-900 to-amber-700 text-white px-6 py-10 sm:px-10 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-5xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">WorkMasters: Master Your Career, Business &amp; Wealth</h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl">
            Weekly private coaching + monthly public meetups + quarterly challenges. Excel in investment, business dev, raising capital, skills/career growth, management, leadership &amp; governance.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/workmasters"
              className="inline-flex items-center justify-center bg-amber-400 text-slate-900 font-semibold px-6 py-3 rounded-lg hover:bg-amber-300 transition-colors"
            >
              Join Weekly Coaching
            </Link>
            <button
              type="button"
              className="inline-flex items-center justify-center border border-white/60 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setCalendarOpen(true)}
              aria-haspopup="dialog"
              aria-controls={calendarId}
            >
              Next Meetup
            </button>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white/10 border border-white/10 rounded-xl p-5 backdrop-blur"
            >
              <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-blue-100">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </div>

      {calendarOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4" role="presentation">
          <div
            id={calendarId}
            role="dialog"
            aria-modal="true"
            aria-labelledby="workmasters-calendar-title"
            className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 id="workmasters-calendar-title" className="text-xl font-bold text-gray-900">Next Meetup</h2>
              <button
                type="button"
                onClick={() => setCalendarOpen(false)}
                className="h-9 w-9 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100"
                aria-label="Close meetup calendar"
              >
                ✕
              </button>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <div className="text-sm uppercase tracking-wide text-slate-500">{nextMeetup.location}</div>
              <div className="text-2xl font-bold text-slate-900 mt-2">{nextMeetup.date}</div>
              <div className="text-base text-slate-700 mt-1">{nextMeetup.title}</div>
              <div className="mt-4 grid grid-cols-7 gap-2 text-xs text-center text-slate-600" aria-hidden="true">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
                  <div key={day} className="font-semibold">{day}</div>
                ))}
                {Array.from({ length: 28 }).map((_, idx) => (
                  <div
                    key={idx}
                    className={`py-1 rounded ${idx === 27 ? 'bg-amber-200 text-slate-900 font-semibold' : 'bg-white border border-slate-200'}`}
                  >
                    {idx + 1}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <Link
                href="/workmasters"
                className="flex-1 inline-flex items-center justify-center bg-primary text-white font-semibold px-5 py-3 rounded-lg hover:bg-blue-800 transition-colors"
              >
                Reserve a Seat
              </Link>
              <button
                type="button"
                onClick={() => setCalendarOpen(false)}
                className="flex-1 inline-flex items-center justify-center border border-gray-300 text-gray-700 font-semibold px-5 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
