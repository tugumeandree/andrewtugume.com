import React from 'react'
import Link from 'next/link'

export default function WorkMastersCommunity() {
  const features = [
    {
      icon: '💼',
      title: 'Job Board',
      description: 'Exclusive freelance opportunities, job postings, and partnership opportunities from community members and partners.'
    },
    {
      icon: '🤝',
      title: 'Mastermind Groups',
      description: 'Weekly peer groups (4-6 members) for accountability, problem-solving, and mutual support in your business or career.'
    },
    {
      icon: '📚',
      title: 'Resource Library',
      description: 'Templates, guides, contracts, and tools for freelancing, entrepreneurship, investing, and career development.'
    },
    {
      icon: '🎙️',
      title: 'Live Q&A Sessions',
      description: 'Weekly sessions with Andrew and guest experts answering your work, business, and career questions.'
    },
    {
      icon: '💡',
      title: 'Case Study Reviews',
      description: 'Submit your business or career challenges for community feedback and expert analysis.'
    },
    {
      icon: '🌍',
      title: 'Global Network',
      description: 'Connect with workers from 52+ countries—find collaborators, mentors, and clients worldwide.'
    }
  ]

  const tiers = [
    {
      name: 'Free Member',
      price: '$0',
      features: [
        'Access to discussion forums',
        'Monthly Q&A sessions',
        'Basic resource library',
        'Community directory'
      ]
    },
    {
      name: 'Premium Member',
      price: '$29/mo',
      popular: true,
      features: [
        'Everything in Free, plus:',
        'Weekly mastermind groups',
        'Full resource library with templates',
        'Weekly Q&A sessions',
        'Job board access',
        'Priority support',
        'Exclusive workshops'
      ]
    },
    {
      name: 'Qraft Academy Student',
      price: 'Included',
      features: [
        'All Premium benefits, plus:',
        'Dedicated student cohort groups',
        'Course-specific discussions',
        'Alumni network access',
        'Lifetime community access'
      ]
    }
  ]

  const testimonials = [
    {
      text: "I found my first three freelance clients through the WorkMasters job board. The mastermind group keeps me accountable to my business goals every week.",
      author: "Emmanuel T.",
      role: "Freelance Developer, Nigeria"
    },
    {
      text: "The resource library saved me hundreds of hours. I got contract templates, pricing guides, and business frameworks that would have taken me years to develop.",
      author: "Grace M.",
      role: "Business Owner, Kenya"
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-6xl mb-4">💼</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">WorkMasters Community</h1>
          <p className="text-xl mb-6">Where faith meets work—for entrepreneurs, freelancers and employees pursuing excellence.</p>
          <div className="flex gap-6 justify-center text-sm mb-8">
            <div>
              <div className="text-2xl font-bold">1,247</div>
              <div className="text-sm opacity-90">Members</div>
            </div>
            <div>
              <div className="text-2xl font-bold">342</div>
              <div className="text-sm opacity-90">Active This Week</div>
            </div>
            <div>
              <div className="text-2xl font-bold">47</div>
              <div className="text-sm opacity-90">Countries</div>
            </div>
          </div>
          <Link href="#join" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
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
              { icon: '🚀', title: 'Entrepreneurs', desc: 'Building God-centered businesses that solve real problems' },
              { icon: '💻', title: 'Freelancers', desc: 'Offering skills and services while maintaining integrity' },
              { icon: '📈', title: 'Investors', desc: 'Stewarding capital for Kingdom impact and financial return' },
              { icon: '👔', title: 'Employees', desc: 'Pursuing excellence and influence in your workplace' }
            ].map((type, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-gray-50 rounded-lg p-6">
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

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="space-y-8">
            {[
              { step: 1, title: 'Join the Community', desc: 'Create your free account and complete your profile to connect with the right people.' },
              { step: 2, title: 'Introduce Yourself', desc: 'Share your story, goals, and what you are working on in the introduction thread.' },
              { step: 3, title: 'Join a Mastermind', desc: 'Get matched with a weekly peer group (premium members) or join open discussions.' },
              { step: 4, title: 'Engage & Grow', desc: 'Participate in live sessions, access resources, post jobs and opportunities, and build relationships.' },
              { step: 5, title: 'Level Up', desc: 'Consider enrolling in Qraft Academy for structured training while staying connected to the community.' }
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
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
      <section className="py-16 bg-gray-50" id="join">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Membership Options</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, idx) => (
              <div key={idx} className={`bg-white rounded-lg shadow-lg overflow-hidden ${tier.popular ? 'ring-4 ring-blue-600' : ''}`}>
                {tier.popular && (
                  <div className="bg-blue-600 text-white text-center py-2 font-bold text-sm">MOST POPULAR</div>
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
                  <button className={`w-full py-3 rounded-lg font-semibold ${tier.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 hover:bg-gray-300'}`}>
                    {tier.name === 'Qraft Academy Student' ? 'Enroll in Qraft Academy' : tier.price === '$0' ? 'Join Free' : 'Upgrade to Premium'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Member Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-8">
                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                <div className="font-bold">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Pathways */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Your Complete Journey</h2>
          <div className="flex flex-wrap justify-center gap-4 items-center text-lg font-semibold">
            <Link href="/workmasters" className="bg-white px-6 py-3 rounded-lg shadow hover:shadow-lg">Free Content</Link>
            <span className="text-2xl">→</span>
            <div className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow">Community</div>
            <span className="text-2xl">→</span>
            <Link href="/schools/qraft-academy" className="bg-white px-6 py-3 rounded-lg shadow hover:shadow-lg">Qraft Academy</Link>
            <span className="text-2xl">→</span>
            <Link href="/partner" className="bg-white px-6 py-3 rounded-lg shadow hover:shadow-lg">Partnership</Link>
          </div>
          <p className="mt-8 text-gray-700">Start anywhere on the journey. The community connects it all.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your People?</h2>
          <p className="text-xl mb-8">Join 1,247 workers integrating faith with their careers and businesses.</p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
            Join WorkMasters Community - Free
          </button>
          <p className="mt-4 text-sm opacity-90">No credit card required • Cancel anytime • Premium upgrade available</p>
        </div>
      </section>
    </div>
  )
}
