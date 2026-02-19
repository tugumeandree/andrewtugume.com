import React from 'react'
import Link from 'next/link'

export default function NationsBibleCommunity() {
  const features = [
    {
      icon: '📖',
      title: 'Book Clubs',
      description: 'Monthly group studies through books of the Bible with discussion guides and expert teaching.'
    },
    {
      icon: '🙏',
      title: 'Prayer Wall',
      description: 'Share prayer requests, pray for others, and witness answered prayers in our community.'
    },
    {
      icon: '📚',
      title: 'Study Resources',
      description: 'Access study guides, commentaries, original language tools, and theological resources.'
    },
    {
      icon: '🎥',
      title: 'Live Teaching Sessions',
      description: 'Weekly live sessions with Andrew teaching through Scripture, answering questions, and discussing theology.'
    },
    {
      icon: '👥',
      title: 'Study Groups',
      description: 'Join weekly small groups organized by time zone, language, or current study topic.'
    },
    {
      icon: '📝',
      title: 'Scripture Memorization',
      description: 'Community challenges, accountability partners, and tools to hide God\'s Word in your heart.'
    }
  ]

  const tiers = [
    {
      name: 'Free Member',
      price: '$0',
      features: [
        'Access to discussion forums',
        'Monthly teaching sessions',
        'Prayer wall access',
        'Basic study resources'
      ]
    },
    {
      name: 'Premium Member',
      price: '$19/mo',
      popular: true,
      features: [
        'Everything in Free, plus:',
        'Weekly study groups',
        'Full resource library',
        'Weekly live teaching',
        'Advanced study tools',
        'Download audio/video teachings',
        'Exclusive book clubs'
      ]
    },
    {
      name: 'Nations Bible Community Student',
      price: 'Included',
      features: [
        'All Premium benefits, plus:',
        'Course-specific discussions',
        'Cohort study groups',
        'Direct instructor access',
        'Lifetime community access'
      ]
    }
  ]

  const testimonials = [
    {
      text: "I have been a Christian for 20 years, but the Nations Bible Community helped me understand Scripture at a depth I never knew was possible. The weekly study groups are transformational.",
      author: "Mary K.",
      role: "Educator, Uganda"
    },
    {
      text: "The prayer wall is incredible. Seeing scholars from around the world interceding for each other reminds me we are truly one body in Christ.",
      author: "Pastor John D.",
      role: "Pastor, South Africa"
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-6xl mb-4">📖</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nations Bible Community</h1>
          <p className="text-xl mb-6">A global family of scholars pursuing deeper understanding of God\'s Word together.</p>
          <div className="flex gap-6 justify-center text-sm mb-8">
            <div>
              <div className="text-2xl font-bold">2,154</div>
              <div className="text-sm opacity-90">Members</div>
            </div>
            <div>
              <div className="text-2xl font-bold">589</div>
              <div className="text-sm opacity-90">Active This Week</div>
            </div>
            <div>
              <div className="text-2xl font-bold">52</div>
              <div className="text-sm opacity-90">Countries</div>
            </div>
          </div>
          <Link href="#join" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
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
              { icon: '🌱', title: 'New Scholars', desc: 'Just starting your faith journey and eager to learn Scripture' },
              { icon: '📖', title: 'Devoted Learners', desc: 'Hungry for deeper theological understanding and biblical knowledge' },
              { icon: '👨‍🏫', title: 'Educators & Leaders', desc: 'Preparing to teach others and wanting solid biblical foundation' },
              { icon: '🌍', title: 'Global Scholars', desc: 'From any nation seeking authentic community centered on God\'s Word' }
            ].map((type, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-purple-50 rounded-lg p-6">
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

      {/* Current Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Active Studies & Book Clubs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { book: 'Romans', leader: 'Andrew Tugume', week: 'Week 8 of 12', participants: 247 },
              { book: 'Gospel of John', leader: 'Dr. Sarah M.', week: 'Week 3 of 10', participants: 189 },
              { book: 'Psalms Deep Dive', leader: 'Pastor James K.', week: 'Week 5 of 8', participants: 156 }
            ].map((study, idx) => (
              <div key={idx} className="bg-purple-50 rounded-lg p-6 border-2 border-purple-200">
                <h3 className="font-bold text-xl mb-2">{study.book}</h3>
                <div className="text-sm text-gray-600 space-y-1 mb-4">
                  <div>Led by: {study.leader}</div>
                  <div>{study.week}</div>
                  <div>{study.participants} participants</div>
                </div>
                <button className="w-full bg-purple-600 text-white px-4 py-2 rounded font-semibold hover:bg-purple-700">
                  Join This Study
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
              { step: 1, title: 'Create Your Profile', desc: 'Join the community and share where you are in your faith journey.' },
              { step: 2, title: 'Join a Study Group', desc: 'Pick a current book club or study group that fits your schedule and interests.' },
              { step: 3, title: 'Engage in Community', desc: 'Post on the prayer wall, ask questions in forums, and connect with other scholars.' },
              { step: 4, title: 'Attend Live Sessions', desc: 'Join weekly teaching sessions, Q&A, and special events with Andrew and guest educators.' },
              { step: 5, title: 'Deepen Your Knowledge', desc: 'Consider Nations Bible Community for systematic theological training.' }
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
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
              <div key={idx} className={`bg-white rounded-lg shadow-lg overflow-hidden ${tier.popular ? 'ring-4 ring-purple-600' : ''}`}>
                {tier.popular && (
                  <div className="bg-purple-600 text-white text-center py-2 font-bold text-sm">MOST POPULAR</div>
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
                  <button className={`w-full py-3 rounded-lg font-semibold ${tier.popular ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-gray-200 hover:bg-gray-300'}`}>
                    {tier.name === 'Nations Bible Community Student' ? 'Enroll in Bible School' : tier.price === '$0' ? 'Join Free' : 'Upgrade to Premium'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Lives Changed by Scripture</h2>
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

      {/* Integration Pathways */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Your Faith Journey</h2>
          <div className="flex flex-wrap justify-center gap-4 items-center text-lg font-semibold">
            <Link href="/bible-study" className="bg-white px-6 py-3 rounded-lg shadow hover:shadow-lg">Free Studies</Link>
            <span className="text-2xl">→</span>
            <div className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow">Community</div>
            <span className="text-2xl">→</span>
            <Link href="/schools/nations-bible" className="bg-white px-6 py-3 rounded-lg shadow hover:shadow-lg">Bible School</Link>
            <span className="text-2xl">→</span>
            <Link href="/partner" className="bg-white px-6 py-3 rounded-lg shadow hover:shadow-lg">Partnership</Link>
          </div>
          <p className="mt-8 text-gray-700">Growth happens in community. Start here.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-purple-600 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Join Your Global Bible Family</h2>
          <p className="text-xl mb-8">Over 2,154 scholars from 52 countries studying God\'s Word together.</p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
            Join Nations Bible Community - Free
          </button>
          <p className="mt-4 text-sm opacity-90">Start with free access • Upgrade anytime • Cancel anytime</p>
        </div>
      </section>
    </div>
  )
}
