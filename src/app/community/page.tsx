import React from 'react'
import Link from 'next/link'

export default function CommunityHub() {
  const communities = [
    {
      name: 'WorkMasters Community',
      slug: 'workmasters',
      tagline: 'For Workers - Community & Weekly Meetup',
      description: 'Connect with entrepreneurs, freelancers and employees integrating faith with work. Join weekly hybrid meetups starting January 2026.',
      members: 'Opening 2026',
      activeThisWeek: 'First meetup: Jan 6, 2026',
      color: 'blue',
      icon: '💼',
      benefits: [
        'Weekly hybrid meetups (Every Tuesday)',
        'First meetup: Monday, January 6th, 2026',
        'Exclusive job board',
        'Resource library access',
        'Live mastermind groups'
      ]
    },
    {
      name: 'Nations Bible Community',
      slug: 'nations-bible',
      tagline: 'For Scholars',
      description: 'Join scholars worldwide in deep Scripture study, prayer support, and spiritual growth.',
      members: '2,154',
      activeThisWeek: '589',
      color: 'purple',
      icon: '📖',
      benefits: [
        'Weekly study groups',
        'Prayer wall & support',
        'Book club discussions',
        'Live teaching sessions'
      ]
    },
    {
      name: 'Chariot Leadership Community',
      slug: 'chariot-leadership',
      tagline: 'For Leaders',
      description: 'Develop Christ-centered leadership with peers, mentors, and expert guidance.',
      members: '823',
      activeThisWeek: '267',
      color: 'green',
      icon: '👑',
      benefits: [
        'Leadership challenges',
        'Peer accountability groups',
        'Expert interviews',
        'Case study discussions'
      ]
    }
  ]

  const testimonials = [
    {
      text: "The WorkMasters Community connected me with a mentor who helped me launch my freelance business. I'm now serving clients globally!",
      author: "Sarah M.",
      community: "WorkMasters"
    },
    {
      text: "I've been a Christian for years, but the Nations Bible Community helped me understand Scripture at a whole new level. The weekly study groups are life-changing.",
      author: "David K.",
      community: "Nations Bible"
    },
    {
      text: "The accountability and peer learning in the Chariot Leadership Community have made me a better leader in my church and workplace.",
      author: "Pastor James O.",
      community: "Chariot Leadership"
    }
  ]

  const faqs = [
    {
      question: "Are the communities free to join?",
      answer: "Yes! Basic access to all three communities is completely free. We also offer premium tiers with additional benefits like exclusive events, advanced resources, and priority support."
    },
    {
      question: "Can I join multiple communities?",
      answer: "Absolutely! Many members are part of multiple communities. For example, you might be in both WorkMasters and Nations Bible Community."
    },
    {
      question: "How much time do I need to commit?",
      answer: "As much or as little as you want. Participate in weekly live sessions, engage in discussions when you have time, or simply access the resource libraries. It's designed to fit your schedule."
    },
    {
      question: "Do I need to be enrolled in a school to join?",
      answer: "No! Communities are open to everyone. However, school students automatically get premium community access as part of their enrollment."
    },
    {
      question: "What platforms do you use?",
      answer: "Our communities run on Circle.so, which includes mobile apps, discussion threads, direct messaging, event calendars, and resource libraries. It's like having your own private social network."
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your People, Deepen Your Journey</h1>
          <p className="text-xl mb-8">Join vibrant communities where faith meets everyday life—work, Scripture, and leadership.</p>
          <div className="flex gap-4 justify-center text-sm">
            <div className="bg-white/20 backdrop-blur rounded-lg px-6 py-3">
              <div className="text-2xl font-bold">4,224</div>
              <div className="text-sm">Total Members</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-6 py-3">
              <div className="text-2xl font-bold">1,198</div>
              <div className="text-sm">Active This Week</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-6 py-3">
              <div className="text-2xl font-bold">52</div>
              <div className="text-sm">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Community</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {communities.map((community) => (
              <div key={community.slug} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className={`bg-gradient-to-r ${
                  community.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  community.color === 'purple' ? 'from-purple-500 to-purple-600' :
                  'from-green-500 to-green-600'
                } text-white p-6 text-center`}>
                  <div className="text-5xl mb-3">{community.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{community.name}</h3>
                  <p className="text-sm opacity-90">{community.tagline}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{community.description}</p>
                  
                  {/* Stats */}
                  <div className="flex gap-4 mb-6 text-sm">
                    <div>
                      <div className="font-bold text-lg text-primary">{community.members}</div>
                      <div className="text-gray-600 text-xs">Members</div>
                    </div>
                    <div>
                      <div className="font-bold text-lg text-green-600">{community.activeThisWeek}</div>
                      <div className="text-gray-600 text-xs">Active This Week</div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-sm">Key Benefits:</h4>
                    <ul className="space-y-1 text-sm">
                      {community.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-gray-700">✓ {benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    href={`/community/${community.slug}`}
                    className="block w-full bg-primary text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition"
                  >
                    Join Now - Free
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Members Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.community} Member</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Don't Journey Alone</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-bold mb-2">Find Your People</h3>
              <p className="text-gray-700 text-sm">Connect with like-minded scholars who share your calling and challenges.</p>
            </div>
            <div>
              <div className="text-4xl mb-3">💡</div>
              <h3 className="font-bold mb-2">Get Real Answers</h3>
              <p className="text-gray-700 text-sm">Ask questions, share struggles, and receive personalized support from the community.</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-bold mb-2">Accelerate Growth</h3>
              <p className="text-gray-700 text-sm">Access exclusive content, resources, and relationships that propel you forward.</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            Communities are the missing link between passive consumption and active transformation.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b pb-6">
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-xl mb-8">Pick the community that matches where you are in your journey.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/community/workmasters" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
              WorkMasters →
            </Link>
            <Link href="/community/nations-bible" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
              Nations Bible →
            </Link>
            <Link href="/community/chariot-leadership" className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
              Chariot Leadership →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
