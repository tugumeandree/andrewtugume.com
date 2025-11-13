import React from 'react'
import Link from 'next/link'

export default function ChariotLeadershipCommunity() {
  const features = [
    {
      icon: '🎯',
      title: 'Leadership Challenges',
      description: 'Monthly practical challenges to develop specific leadership competencies with community accountability.'
    },
    {
      icon: '📊',
      title: 'Case Study Discussions',
      description: 'Analyze real-world leadership scenarios, share insights, and learn from collective wisdom.'
    },
    {
      icon: '🎙️',
      title: 'Expert Interviews',
      description: 'Access exclusive interviews with successful Christ-centered leaders across industries.'
    },
    {
      icon: '👥',
      title: 'Accountability Groups',
      description: 'Small peer groups (3-5 leaders) meeting weekly for mutual accountability and support.'
    },
    {
      icon: '📚',
      title: 'Leadership Library',
      description: 'Curated collection of frameworks, assessments, templates, and leadership resources.'
    },
    {
      icon: '🌟',
      title: 'Mentorship Matching',
      description: 'Get paired with experienced leaders for one-on-one guidance and career navigation.'
    }
  ]

  const tiers = [
    {
      name: 'Free Member',
      price: '$0',
      features: [
        'Access to discussion forums',
        'Monthly expert interviews',
        'Basic leadership resources',
        'Community directory'
      ]
    },
    {
      name: 'Premium Member',
      price: '$39/mo',
      popular: true,
      features: [
        'Everything in Free, plus:',
        'Weekly accountability groups',
        'Full leadership library',
        'Monthly challenges with prizes',
        'Mentorship matching',
        'Live case study sessions',
        'Priority event access'
      ]
    },
    {
      name: 'Chariot Institute Student',
      price: 'Included',
      features: [
        'All Premium benefits, plus:',
        'Course cohort groups',
        'Direct instructor access',
        'Advanced frameworks',
        'Lifetime community access'
      ]
    }
  ]

  const testimonials = [
    {
      text: "The accountability group keeps me grounded. Every week I bring my leadership challenges to 4 other leaders who challenge and encourage me. It has transformed how I lead my team.",
      author: "Michael T.",
      role: "Director of Operations, Tech Company"
    },
    {
      text: "Being matched with a mentor who has led successful teams for 20 years has been invaluable. The community resources alone are worth 10x the membership cost.",
      author: "Rev. Grace N.",
      role: "Senior Pastor, Multi-Site Church"
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-6xl mb-4">👑</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Chariot Leadership Community</h1>
          <p className="text-xl mb-6">Where Christian leaders sharpen each other—building influence, character, and Kingdom impact.</p>
          <div className="flex gap-6 justify-center text-sm mb-8">
            <div>
              <div className="text-2xl font-bold">823</div>
              <div className="text-sm opacity-90">Members</div>
            </div>
            <div>
              <div className="text-2xl font-bold">267</div>
              <div className="text-sm opacity-90">Active This Week</div>
            </div>
            <div>
              <div className="text-2xl font-bold">38</div>
              <div className="text-sm opacity-90">Countries</div>
            </div>
          </div>
          <Link href="#join" className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
            Join the Community - Free
          </Link>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Who This Community Is For</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '⛪', title: 'Church Leaders', desc: 'Pastors, elders, ministry directors leading congregations and teams' },
              { icon: '💼', title: 'Business Executives', desc: 'C-suite leaders, directors, and managers in corporate environments' },
              { icon: '🚀', title: 'Entrepreneurs', desc: 'Founders and CEOs building organizations and leading teams' },
              { icon: '🌱', title: 'Emerging Leaders', desc: 'Rising leaders preparing for greater responsibility and influence' }
            ].map((type, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-green-50 rounded-lg p-6">
                <div className="text-4xl">{type.icon}</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{type.title}</h3>
                  <p className="text-gray-700 text-sm">{type.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Community Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-700 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Initiatives */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Active Leadership Challenges</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { challenge: 'Difficult Conversations', timeframe: 'November 2025', participants: 142, description: 'Practice having crucial conversations with grace and truth' },
              { challenge: 'Delegation Mastery', timeframe: 'December 2025', participants: 98, description: 'Learn to delegate effectively and empower your team' },
              { challenge: 'Vision Casting', timeframe: 'January 2026', participants: 67, description: 'Develop and communicate a compelling vision for your organization' }
            ].map((initiative, idx) => (
              <div key={idx} className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
                <h3 className="font-bold text-xl mb-2">{initiative.challenge}</h3>
                <div className="text-sm text-gray-600 space-y-1 mb-4">
                  <div>Timeframe: {initiative.timeframe}</div>
                  <div>{initiative.participants} participants</div>
                  <div className="text-gray-700 mt-2">{initiative.description}</div>
                </div>
                <button className="w-full bg-green-700 text-white px-4 py-2 rounded font-semibold hover:bg-green-800">
                  Join Challenge
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="space-y-8">
            {[
              { step: 1, title: 'Join & Connect', desc: 'Create your profile sharing your leadership context, goals, and challenges.' },
              { step: 2, title: 'Find Your Group', desc: 'Get matched with an accountability group or join open discussions and case studies.' },
              { step: 3, title: 'Engage Weekly', desc: 'Attend live sessions, participate in challenges, and connect with mentors.' },
              { step: 4, title: 'Apply & Grow', desc: 'Implement what you learn in your actual leadership context with community support.' },
              { step: 5, title: 'Go Deeper', desc: 'Consider Chariot Leadership Institute for comprehensive leadership development.' }
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-16 bg-white" id="join">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Membership Options</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, idx) => (
              <div key={idx} className={`bg-white rounded-lg shadow-lg overflow-hidden ${tier.popular ? 'ring-4 ring-green-700' : ''}`}>
                {tier.popular && (
                  <div className="bg-green-700 text-white text-center py-2 font-bold text-sm">MOST POPULAR</div>
                )}
                <div className="p-8">
                  <h3 className="font-bold text-2xl mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-6">{tier.price}</div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, fidx) => (
                      <li key={fidx} className="text-sm text-gray-700">
                        {feature.includes('Everything') || feature.includes('All') ? (
                          <span className="italic">{feature}</span>
                        ) : (
                          <>✓ {feature}</>
                        )}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold ${tier.popular ? 'bg-green-700 text-white hover:bg-green-800' : 'bg-gray-200 hover:bg-gray-300'}`}>
                    {tier.name === 'Chariot Institute Student' ? 'Enroll in Institute' : tier.price === '$0' ? 'Join Free' : 'Upgrade to Premium'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Leaders Sharpening Leaders</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 shadow-md">
                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                <div className="font-bold">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Principle */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">⚔️</div>
          <h2 className="text-3xl font-bold mb-4">Iron Sharpens Iron</h2>
          <p className="text-xl text-gray-700 mb-8 italic">"As iron sharpens iron, so one person sharpens another." - Proverbs 27:17</p>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Leadership is not meant to be a lonely journey. You need peers who understand your challenges, mentors who have walked your path, and accountability to keep you faithful to your calling.
          </p>
        </div>
      </section>

      {/* Integration Pathways */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Your Leadership Journey</h2>
          <div className="flex flex-wrap justify-center gap-4 items-center text-lg font-semibold">
            <Link href="/leadership" className="bg-white px-6 py-3 rounded-lg shadow hover:shadow-lg">Free Content</Link>
            <span className="text-2xl">→</span>
            <div className="bg-green-700 text-white px-6 py-3 rounded-lg shadow">Community</div>
            <span className="text-2xl">→</span>
            <Link href="/schools/chariot-leadership" className="bg-white px-6 py-3 rounded-lg shadow hover:shadow-lg">Chariot Institute</Link>
            <span className="text-2xl">→</span>
            <Link href="/partner" className="bg-white px-6 py-3 rounded-lg shadow hover:shadow-lg">Partnership</Link>
          </div>
          <p className="mt-8 text-gray-700">Great leaders are formed in community, not isolation.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-green-700 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Join 823 Leaders Growing Together</h2>
          <p className="text-xl mb-8">Find accountability, wisdom, and support from Christian leaders across 38 countries.</p>
          <button className="bg-white text-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
            Join Chariot Leadership Community - Free
          </button>
          <p className="mt-4 text-sm opacity-90">Free access to start • Premium features available • Cancel anytime</p>
        </div>
      </section>
    </div>
  )
}
