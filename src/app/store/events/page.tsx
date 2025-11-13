import React from 'react'
import Link from 'next/link'

export default function Events() {
  const events = [
    {
      id: 1,
      title: 'Faith & Work Summit 2026',
      date: 'March 15-17, 2026',
      location: 'Virtual & In-Person (Nairobi, Kenya)',
      description: '3-day immersive conference on integrating faith and work',
      price: 197,
      earlyBird: 147,
      image: '/assets/event-summit.jpg',
      slug: 'faith-work-summit',
      type: 'Conference'
    },
    {
      id: 2,
      title: 'Biblical Leadership Workshop',
      date: 'Monthly (Next: Dec 10, 2025)',
      location: 'Virtual',
      description: 'Half-day intensive on Christ-centered leadership principles',
      price: 47,
      image: '/assets/event-leadership-workshop.jpg',
      slug: 'leadership-workshop',
      type: 'Workshop'
    },
    {
      id: 3,
      title: 'Bible Study Retreat',
      date: 'June 20-23, 2026',
      location: 'In-Person (Location TBA)',
      description: '4-day deep dive into Scripture with community',
      price: 397,
      image: '/assets/event-bible-retreat.jpg',
      slug: 'bible-retreat',
      type: 'Retreat'
    },
    {
      id: 4,
      title: 'Entrepreneurship Bootcamp',
      date: 'Quarterly (Next: Jan 15, 2026)',
      location: 'Virtual',
      description: '2-day intensive on building God-centered businesses',
      price: 97,
      image: '/assets/event-entrepreneur-bootcamp.jpg',
      slug: 'entrepreneur-bootcamp',
      type: 'Bootcamp'
    }
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Events & Experiences</h1>
      <p className="text-gray-700 mb-8">Join transformative experiences designed for deep learning and meaningful connection.</p>

      {/* Upcoming Events */}
      <div className="space-y-6 mb-12">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition flex flex-col md:flex-row">
            <img src={event.image} alt={event.title} className="w-full md:w-64 h-48 object-cover" />
            <div className="p-6 flex-1">
              <div className="text-xs text-primary font-semibold mb-2">{event.type}</div>
              <h3 className="font-bold text-2xl mb-2">{event.title}</h3>
              <div className="text-sm text-gray-600 mb-2">
                <div>📅 {event.date}</div>
                <div>📍 {event.location}</div>
              </div>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <div className="flex items-center justify-between">
                <div>
                  {event.earlyBird && (
                    <div>
                      <span className="text-sm text-gray-500">Early Bird: </span>
                      <span className="text-xl font-bold text-green-600">${event.earlyBird}</span>
                      <span className="text-sm text-gray-400 ml-2 line-through">${event.price}</span>
                    </div>
                  )}
                  {!event.earlyBird && (
                    <span className="text-2xl font-bold text-primary">${event.price}</span>
                  )}
                </div>
                <Link href={`/store/events/${event.slug}`} className="bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-blue-900">
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Event Calendar */}
      <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6">Full Event Calendar</h2>
        <div className="bg-gray-100 rounded h-96 flex items-center justify-center">
          <div className="text-gray-500">[Interactive Calendar Placeholder - Shows all upcoming events]</div>
        </div>
      </section>

      {/* Group Discounts */}
      <section className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-8 border border-yellow-200">
        <h3 className="text-xl font-bold mb-4">Bring Your Team & Save</h3>
        <p className="text-gray-700 mb-4">Register 5+ people for any event and get 20% off per person. Perfect for churches, businesses, and ministry teams.</p>
        <Link href="/contact" className="text-primary font-semibold">Contact Us for Group Rates →</Link>
      </section>
    </div>
  )
}
