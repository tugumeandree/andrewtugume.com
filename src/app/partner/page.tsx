import React from 'react'
import Link from 'next/link'

export default function Partner() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-900 text-white rounded-lg p-12 mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Partner With Us</h1>
        <p className="text-xl mb-2">Your partnership fuels transformation</p>
        <p className="text-lg opacity-90">Join us in equipping scholars, workers, and leaders around the world</p>
      </section>

      {/* Mission & Impact Preview */}
      <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">Why Partner?</h2>
        <p className="text-gray-700 mb-6">Every partnership—financial, resource, expertise, or opportunity—creates ripples of eternal impact. Together, we're building a movement that integrates faith, work, and leadership across nations.</p>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-sm text-gray-600">Lives Transformed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-gray-600">Countries Reached</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-gray-600">Learners Equipped</div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <Link href="/impact" className="text-primary font-semibold">See Our Full Impact Report →</Link>
        </div>
      </section>

      {/* Giving Options */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Ways to Partner</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Financial Giving */}
          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-primary">
            <h3 className="text-xl font-bold mb-3">💰 Financial Giving</h3>
            <p className="text-gray-700 mb-4">Support our mission through one-time or recurring donations. Your gift enables scholarships, content creation, and operational sustainability.</p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <input type="radio" name="amount" id="monthly" />
                <label htmlFor="monthly" className="text-sm">Monthly Partnership ($25, $50, $100, $250)</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name="amount" id="onetime" />
                <label htmlFor="onetime" className="text-sm">One-Time Gift (Any Amount)</label>
              </div>
            </div>

            <h4 className="font-semibold mb-2">Designate Your Gift:</h4>
            <select className="w-full border rounded p-2 mb-4 text-sm">
              <option>Where Most Needed</option>
              <option>Scholarships (Learners in Need)</option>
              <option>Content Production (Free Resources)</option>
              <option>Operations (Ministry Infrastructure)</option>
              <option>Specific School Support</option>
            </select>

            <Link href="/partner/give" className="block w-full bg-primary text-white text-center py-3 rounded font-semibold hover:bg-blue-900">Give Now</Link>
          </div>

          {/* Resource Giving */}
          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-yellow-400">
            <h3 className="text-xl font-bold mb-3">📦 Resource Giving</h3>
            <p className="text-gray-700 mb-4">Contribute physical resources like books, equipment, materials, or technology that support our training programs.</p>
            
            <h4 className="font-semibold mb-2">Current Needs:</h4>
            <ul className="text-sm space-y-1 mb-6 text-gray-700">
              <li>• Video production equipment</li>
              <li>• Biblical reference books</li>
              <li>• Student workbooks & materials</li>
              <li>• Technology (laptops, tablets)</li>
            </ul>

            <Link href="/partner/resources" className="block w-full bg-primary text-white text-center py-3 rounded font-semibold hover:bg-blue-900">Submit Resource Offer</Link>
          </div>

          {/* Opportunity Giving */}
          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-yellow-300">
            <h3 className="text-xl font-bold mb-3">🎤 Opportunity Giving</h3>
            <p className="text-gray-700 mb-4">Invite Andrew to speak, teach, or partner with your organization, church, conference, or media platform.</p>
            
            <h4 className="font-semibold mb-2">Speaking Topics:</h4>
            <ul className="text-sm space-y-1 mb-6 text-gray-700">
              <li>• Biblical Work & Vocation</li>
              <li>• Leadership Development</li>
              <li>• Scripture Teaching</li>
              <li>• Faith & Entrepreneurship</li>
            </ul>

            <Link href="/partner/opportunities" className="block w-full bg-primary text-white text-center py-3 rounded font-semibold hover:bg-blue-900">Submit Opportunity</Link>
          </div>

          {/* Expertise Giving */}
          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-green-400">
            <h3 className="text-xl font-bold mb-3">🎨 Expertise Giving</h3>
            <p className="text-gray-700 mb-4">Volunteer your professional skills to advance the mission through design, development, marketing, or strategic consulting.</p>
            
            <h4 className="font-semibold mb-2">Skills We Need:</h4>
            <ul className="text-sm space-y-1 mb-6 text-gray-700">
              <li>• Graphic Design & Branding</li>
              <li>• Web Development</li>
              <li>• Video Editing</li>
              <li>• Marketing & SEO</li>
              <li>• Strategic Planning</li>
            </ul>

            <Link href="/partner/volunteer" className="block w-full bg-primary text-white text-center py-3 rounded font-semibold hover:bg-blue-900">Volunteer Your Skills</Link>
          </div>
        </div>
      </section>

      {/* Corporate Matching */}
      <section className="bg-gradient-to-r from-gray-100 to-white rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">💼 Corporate Matching</h2>
        <p className="text-gray-700 mb-4">Many employers will match charitable donations. Check if your company offers a matching program and <strong>double your impact</strong> at no extra cost to you!</p>
        <Link href="/partner/corporate-matching" className="text-primary font-semibold">Learn About Corporate Matching →</Link>
      </section>

      {/* Testimonials */}
      <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6">Partner Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <blockquote className="border-l-4 border-primary p-4 bg-gray-50">
            <p className="text-gray-700 italic mb-2">"Supporting Andrew's ministry has been one of the best investments we've made. Seeing workers equipped to integrate faith and work is transformational."</p>
            <footer className="text-sm font-semibold">— James & Lisa, Monthly Partners</footer>
          </blockquote>
          <blockquote className="border-l-4 border-primary p-4 bg-gray-50">
            <p className="text-gray-700 italic mb-2">"I donated my design skills to help with the ministry's branding. It's fulfilling to use my talents for Kingdom impact."</p>
            <footer className="text-sm font-semibold">— Maria, Volunteer Designer</footer>
          </blockquote>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-white rounded-lg p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Invest in Eternal Impact</h2>
        <p className="text-xl mb-6">Your partnership today creates transformation for generations.</p>
        <Link href="/partner/give" className="inline-block bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition">Become a Partner →</Link>
      </section>
    </div>
  )
}
