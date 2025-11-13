import React from 'react'
import Link from 'next/link'

export default function Store() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-900 text-white rounded-lg p-12 mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Store & Events</h1>
        <p className="text-xl">Practical resources and transformative experiences for your journey</p>
      </section>

      {/* Featured Offers */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Featured Offers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition">
            <img src="/assets/product-workbook.jpg" alt="Leadership Workbook" className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="text-xs text-primary font-semibold mb-2">DIGITAL PRODUCT</div>
              <h3 className="font-bold text-lg mb-2">Biblical Leadership Workbook</h3>
              <p className="text-sm text-gray-600 mb-4">12-week guide to developing Christ-centered leadership</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">$29</span>
                <Link href="/store/products/leadership-workbook" className="bg-primary text-white px-4 py-2 rounded text-sm font-semibold">Buy Now</Link>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition">
            <img src="/assets/event-conference.jpg" alt="Annual Conference" className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="text-xs text-yellow-600 font-semibold mb-2">EVENT</div>
              <h3 className="font-bold text-lg mb-2">Faith & Work Summit 2026</h3>
              <p className="text-sm text-gray-600 mb-4">3-day conference • Virtual & In-Person</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">$197</span>
                <Link href="/store/events/faith-work-summit" className="bg-primary text-white px-4 py-2 rounded text-sm font-semibold">Register</Link>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition">
            <img src="/assets/service-coaching.jpg" alt="Coaching" className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="text-xs text-green-600 font-semibold mb-2">SERVICE</div>
              <h3 className="font-bold text-lg mb-2">1-on-1 Coaching Package</h3>
              <p className="text-sm text-gray-600 mb-4">6 sessions • Work, Leadership, or Bible</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">$997</span>
                <Link href="/store/services/coaching" className="bg-primary text-white px-4 py-2 rounded text-sm font-semibold">Book Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/store/products" className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg transition border-l-4 border-primary">
            <h3 className="text-xl font-bold mb-2">📚 Products</h3>
            <p className="text-gray-700 mb-3">Digital and physical resources to support your growth</p>
            <div className="text-sm text-gray-600">eBooks • Workbooks • Video Courses • Resource Kits</div>
          </Link>

          <Link href="/store/services" className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg transition border-l-4 border-green-400">
            <h3 className="text-xl font-bold mb-2">🤝 Services</h3>
            <p className="text-gray-700 mb-3">Personalized coaching and consulting for transformation</p>
            <div className="text-sm text-gray-600">1-on-1 Coaching • Group Mentoring • Consulting</div>
          </Link>

          <Link href="/store/events" className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg transition border-l-4 border-yellow-400">
            <h3 className="text-xl font-bold mb-2">🎉 Events</h3>
            <p className="text-gray-700 mb-3">Immersive experiences for deep learning and connection</p>
            <div className="text-sm text-gray-600">Conferences • Workshops • Retreats • Webinars</div>
          </Link>

          <Link href="/store/bundles" className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg transition border-l-4 border-purple-400">
            <h3 className="text-xl font-bold mb-2">🎁 Bundles</h3>
            <p className="text-gray-700 mb-3">Special-priced packages combining multiple resources</p>
            <div className="text-sm text-gray-600">Starter Kits • Complete Collections • Limited Offers</div>
          </Link>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6">What Customers Are Saying</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <blockquote className="border-l-4 border-primary p-4 bg-gray-50">
            <p className="text-gray-700 italic mb-2">"The Leadership Workbook transformed how I lead my team. Practical and biblically grounded."</p>
            <footer className="text-sm font-semibold">— Michael R.</footer>
          </blockquote>
          <blockquote className="border-l-4 border-primary p-4 bg-gray-50">
            <p className="text-gray-700 italic mb-2">"Attending the Faith & Work Summit was a turning point in my career. Highly recommend!"</p>
            <footer className="text-sm font-semibold">— Angela T.</footer>
          </blockquote>
          <blockquote className="border-l-4 border-primary p-4 bg-gray-50">
            <p className="text-gray-700 italic mb-2">"1-on-1 coaching gave me clarity and direction. Worth every investment."</p>
            <footer className="text-sm font-semibold">— Daniel K.</footer>
          </blockquote>
        </div>
      </section>

      {/* Value Guarantee */}
      <section className="bg-gradient-to-r from-gray-100 to-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Our Value Guarantee</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">Every product, service, and event is designed to deliver transformation, not just information. If you're not satisfied, we offer a 30-day money-back guarantee on most offerings.</p>
      </section>
    </div>
  )
}
