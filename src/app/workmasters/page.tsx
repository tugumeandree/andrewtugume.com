import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import WorkMastersApplyForm from '@/components/WorkMastersApplyForm'

export const metadata: Metadata = {
  title: 'WorkMasters | Andrew Tugume – Career, Business & Leadership Coaching',
  description: 'Join WorkMasters for weekly coaching, meetups & challenges in Uganda.'
}

const learningGrid = [
  'Investment: Build UGX 10M portfolio',
  'Raise Capital: Pitch to VCs',
  'Career Growth: Negotiate a 2x raise',
  'Business Dev: Close UGX 50M contracts',
  'Leadership: Build high-impact teams',
  'Management: Create KPI dashboards',
  'Sales: Build pipeline and follow-up',
  'Skills: Master modern digital tools',
  'Governance: Build founder discipline'


const timelineItems = [
  {
    title: 'Weeks 1-4 Coaching Sprint',
    description: 'Weekly 1:1 Zoom coaching to build goals, KPIs, and accountability.'
  },
  {
    title: 'Monthly Meetup Agenda',
    description: 'Public meetups in Kampala/Entebbe: workshops, networking, and case studies.'
  },
  {
    title: 'Q1 2026 Challenge',
    description: '30-day challenge: “Scale Your Side Hustle.”'
  }
]

const audienceCards = [
  {
    title: 'Employee',
    description: 'Climb the career ladder with performance systems and leadership skills.'
  },
  {
    title: 'Freelancer',
    description: 'Scale your gig income, pricing, and client acquisition.'
  },
  {
    title: 'Founder',
    description: 'Raise capital and build a fundable, scalable business.'
  },
  {
    title: 'Agri-preneur',
    description: 'Expand operations, access financing, and build market leverage.'
  }
]

const pricingOptions = [
  {
    title: 'Private Coaching',
    price: 'UGX 500K/mo',
    spots: '5 spots',
    highlight: true
  },
  {
    title: 'Meetups',
    price: 'UGX 50K/event',
    spots: 'Unlimited'
  },
  {
    title: 'Quarterly Challenge',
    price: 'UGX 200K',
    spots: '20 spots'
  }
]

const successStories = [
  {
    name: 'John, Startup Founder',
    result: 'Raised UGX 100M funding',
    image: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg'
  },
  {
    name: 'Grace, Freelancer',
    result: 'Tripled monthly retainers',
    image: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg'
  },
  {
    name: 'Patrick, Team Lead',
    result: 'Promoted to Head of Ops',
    image: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg'
  },
  {
    name: 'Agnes, Agri-preneur',
    result: 'Expanded to 3 districts',
    image: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg'
  }
]

const upcomingEvent = {
  name: 'Meetup: Mar 28, 2026 – Leadership in Agri-Tech',
  startDate: '2026-03-28T10:00:00+03:00',
  endDate: '2026-03-28T13:00:00+03:00',
  location: 'Kampala / Entebbe'
}

export default function WorkMasters() {
  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: upcomingEvent.name,
            startDate: upcomingEvent.startDate,
            endDate: upcomingEvent.endDate,
            eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode',
            eventStatus: 'https://schema.org/EventScheduled',
            location: {
              '@type': 'Place',
              name: upcomingEvent.location
            }
          })
        }}
      />

      <nav className="sticky top-16 z-40 bg-white/90 backdrop-blur border border-gray-200 rounded-xl px-4 py-3 flex flex-wrap gap-4 items-center justify-between">
        <div className="text-sm font-semibold text-gray-700">WorkMasters</div>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link href="/" className="text-gray-600 hover:text-primary">Home</Link>
          <Link href="/schools/qraft-academy" className="text-gray-600 hover:text-primary">Qraft Academy</Link>
          <Link href="/workmasters" className="text-primary font-semibold">WorkMasters</Link>
          <Link href="/contact" className="text-gray-600 hover:text-primary">Contact</Link>
        </div>
      </nav>

      <section className="-mx-4 sm:mx-0 bg-gradient-to-br from-slate-900 via-blue-900 to-amber-700 text-white rounded-2xl px-6 py-10 md:px-12">
        <div className="max-w-5xl">
          <div className="text-sm uppercase tracking-wide text-amber-200 mb-3">Ugandan professionals, freelancers, entrepreneurs</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">WorkMasters</h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-6">
            Weekly coaching, monthly meetups, and quarterly challenges to master your career, business, and wealth.
          </p>
          <div className="aspect-video w-full max-w-3xl bg-black/40 rounded-xl overflow-hidden border border-white/20">
            <iframe
              title="WorkMasters Coaching Video"
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">What is WorkMasters?</h2>
        <p className="text-gray-700 text-base md:text-lg max-w-4xl">
          Exclusive for Ugandan employees, freelancers, and entrepreneurs: weekly 1:1 Zoom coaching + monthly Kampala/Entebbe meetups + quarterly 30-day challenges.
        </p>
      </section>

      <section className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">What You'll Learn</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {learningGrid.map((item) => (
            <div key={item} className="bg-white border border-gray-200 rounded-lg p-4 text-sm text-gray-700">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Program Structure</h2>
        <div className="space-y-4">
          {timelineItems.map((item, idx) => (
            <div key={item.title} className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                {idx + 1}
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex-1">
                <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
                <div className="text-sm text-gray-700">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 md:p-8 border border-gray-200">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Who It's For</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audienceCards.map((card) => (
            <div key={card.title} className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="text-lg font-semibold mb-2">{card.title}</div>
              <div className="text-sm text-gray-700">{card.description}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 md:p-8 border border-amber-200">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Pricing & Spots</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {pricingOptions.map((option) => (
            <div
              key={option.title}
              className={`rounded-xl p-5 border ${option.highlight ? 'border-amber-400 bg-white' : 'border-amber-200 bg-white/80'}`}
            >
              <div className="text-lg font-semibold mb-2">{option.title}</div>
              <div className="text-2xl font-bold text-slate-900 mb-1">{option.price}</div>
              <div className="text-sm text-gray-600 mb-4">{option.spots}</div>
              <div className="text-sm font-semibold text-amber-700">Apply now - limited!</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Success Stories</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {successStories.map((story) => (
            <div key={story.name} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
              <div className="flex items-center gap-4">
                <img
                  src={story.image}
                  alt={story.name}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-semibold text-gray-900">{story.name}</div>
                  <div className="text-sm text-gray-700">{story.result}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 md:p-8 border border-gray-200">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Upcoming</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <div className="font-semibold text-gray-900">{upcomingEvent.name}</div>
            <div className="text-sm text-gray-700">{upcomingEvent.location}</div>
          </div>
          <div className="text-sm text-gray-600">Mar 28, 2026 · 10:00 AM - 1:00 PM</div>
        </div>
      </section>

      <WorkMastersApplyForm />

      <section className="bg-slate-900 text-white rounded-2xl p-6 md:p-8">
        <div className="text-lg font-semibold">Andrew Tugume - Educator, Technologist, Investor</div>
        <div className="text-sm text-slate-300 mt-2">Connect: @_drewtugume · LinkedIn · YouTube</div>
        <div className="text-xs text-slate-400 mt-4">©2026 Andrew Tugume. All rights reserved.</div>
      </section>
    </div>
  )
}
