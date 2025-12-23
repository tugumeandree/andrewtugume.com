import React from 'react'
import Link from 'next/link'

export default function TabernacleTechInstitute() {
  const tracks = [
    {
      name: 'Digital Scholar Track',
      audience: 'For Scholars',
      tagline: 'Use technology to deepen your study and amplify your impact',
      color: 'purple',
      icon: '📱',
      courses: [
        { title: 'Digital Discipleship 101', weeks: 4, description: 'Learn to use apps, tools, and platforms for spiritual growth' },
        { title: 'Content Creation for the Gospel', weeks: 6, description: 'Video, audio, and writing skills to share your faith online' },
        { title: 'Bible Study Apps Mastery', weeks: 3, description: 'Deep dive into Logos, Accordance, Olive Tree, and more' },
        { title: 'Faith & Tech Ethics', weeks: 4, description: 'Navigate AI, social media, and digital life with biblical wisdom' }
      ]
    },
    {
      name: 'Digital Worker Track',
      audience: 'For Workers',
      tagline: 'Master tech tools to excel in your work and business',
      color: 'blue',
      icon: '💻',
      courses: [
        { title: 'AI for the Christian Entrepreneur', weeks: 6, description: 'ChatGPT, Midjourney, and automation for ethical business growth' },
        { title: 'Build Your Business Website', weeks: 4, description: 'No-code website building with WordPress, Webflow, or Squarespace' },
        { title: 'Digital Marketing Fundamentals', weeks: 8, description: 'SEO, email marketing, and social media for Kingdom businesses' },
        { title: 'Productivity Tech Stack', weeks: 5, description: 'Notion, Airtable, automation tools for maximum efficiency' }
      ]
    },
    {
      name: 'Digital Leader Track',
      audience: 'For Leaders',
      tagline: 'Lead effectively in the digital age',
      color: 'green',
      icon: '🚀',
      courses: [
        { title: 'The Digital-First Leader', weeks: 6, description: 'Lead remote teams, manage online communities, and build digital influence' },
        { title: 'Ministry Tech Stack Setup', weeks: 4, description: 'CRM, email platforms, websites, and management tools for ministries' },
        { title: 'Data for Decision Making', weeks: 5, description: 'Use analytics and metrics to guide strategic ministry decisions' },
        { title: 'Cybersecurity for Leaders', weeks: 3, description: 'Protect your organization, data, and people online' }
      ]
    }
  ]

  const pricing = [
    {
      name: 'Single Course',
      price: '$147',
      features: [
        'Access to one course',
        '4-8 weeks of content',
        'Live weekly sessions',
        'Course materials & templates',
        'Community discussion access',
        'Certificate of completion'
      ]
    },
    {
      name: 'Track Bundle',
      price: '$497',
      popular: true,
      features: [
        'All 4 courses in one track',
        'Save $91 vs individual courses',
        'Everything in Single Course, plus:',
        'Track-specific project',
        'Priority instructor access',
        'Lifetime resource updates',
        'Track completion certificate'
      ]
    },
    {
      name: 'All-Access Pass',
      price: '$997',
      features: [
        'ALL 12 courses (3 tracks)',
        'Save $769 vs individual courses',
        'Everything in Track Bundle, plus:',
        'Monthly tech office hours',
        'Private Slack community',
        'Early access to new courses',
        'Lifetime access to all content'
      ]
    }
  ]

  const testimonials = [
    {
      text: "The AI for Christian Entrepreneur course helped me automate 40% of my business tasks. I'm now serving more clients with less stress and more margin for ministry.",
      author: "Samuel K.",
      role: "Freelance Designer, Ghana"
    },
    {
      text: "I was intimidated by technology, but Digital Discipleship 101 showed me how simple tools can transform my quiet time and Bible study. Game-changer!",
      author: "Rachel M.",
      role: "Stay-at-Home Mom, USA"
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-6xl mb-4">⚒️</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tabernacle Tech Institute</h1>
          <p className="text-2xl mb-2 font-semibold">Equipping for the Digital Age with Ancient Wisdom</p>
          <p className="text-lg mb-8 opacity-90">Practical technology training for scholars, workers, and leaders—rooted in biblical stewardship.</p>
          <div className="bg-white/10 backdrop-blur rounded-lg inline-block px-6 py-3 mb-8">
            <div className="text-sm opacity-90 mb-1">Technology as a modern-day tool for the tabernacle</div>
            <div className="text-xs italic">"And I have filled him with the Spirit of God, with wisdom, understanding, and knowledge in all kinds of crafts." - Exodus 31:3</div>
          </div>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link href="#tracks" className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
              Explore Courses
            </Link>
            <Link href="#pricing" className="bg-white/20 backdrop-blur text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Technology Is a Tool For:</h2>
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {[
              { icon: '🛠️', title: 'Creation', desc: 'Building, designing, and innovating like Bezalel' },
              { icon: '📢', title: 'Influence', desc: 'Amplifying truth and leadership in the digital public square' },
              { icon: '⚖️', title: 'Stewardship', desc: 'Managing resources, time, and platforms wisely' },
              { icon: '🤝', title: 'Connection', desc: 'Building genuine community and spreading the Gospel' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Tracks */}
      <section className="py-16 bg-gray-50" id="tracks">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Choose Your Learning Track</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Pick the track that matches your calling, or take the All-Access Pass to master technology across all three dimensions.
          </p>
          
          <div className="space-y-12">
            {tracks.map((track, idx) => (
              <div key={idx} className={`bg-white rounded-lg shadow-lg overflow-hidden`}>
                <div className={`p-6 ${
                  track.color === 'purple' ? 'bg-gradient-to-r from-purple-600 to-purple-700' :
                  track.color === 'blue' ? 'bg-gradient-to-r from-blue-600 to-blue-700' :
                  'bg-gradient-to-r from-green-600 to-green-700'
                } text-white`}>
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">{track.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{track.name}</h3>
                      <p className="text-sm opacity-90">{track.audience}</p>
                      <p className="text-lg mt-1">{track.tagline}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {track.courses.map((course, cidx) => (
                      <div key={cidx} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                        <h4 className="font-bold text-lg mb-2">{course.title}</h4>
                        <div className="text-sm text-gray-600 mb-2">{course.weeks} weeks</div>
                        <p className="text-sm text-gray-700">{course.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
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
              { step: 1, title: 'Choose Your Track', desc: 'Select Digital Scholar, Digital Worker, or Digital Leader based on your calling.' },
              { step: 2, title: 'Learn by Doing', desc: 'Watch video lessons, complete hands-on projects, and build real skills you can use immediately.' },
              { step: 3, title: 'Join Live Sessions', desc: 'Attend weekly live Q&A, get feedback on your projects, and learn from peers.' },
              { step: 4, title: 'Apply in Real Life', desc: 'Use your new skills in your actual ministry, work, or personal life with instructor support.' },
              { step: 5, title: 'Earn Your Certificate', desc: 'Complete the track and receive a certificate showcasing your new technical competencies.' }
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
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

      {/* Pricing */}
      <section className="py-16 bg-gray-50" id="pricing">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing & Enrollment</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((tier, idx) => (
              <div key={idx} className={`bg-white rounded-lg shadow-lg overflow-hidden ${tier.popular ? 'ring-4 ring-indigo-600' : ''}`}>
                {tier.popular && (
                  <div className="bg-indigo-600 text-white text-center py-2 font-bold text-sm">MOST POPULAR</div>
                )}
                <div className="p-8">
                  <h3 className="font-bold text-2xl mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-indigo-600 mb-6">{tier.price}</div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, fidx) => (
                      <li key={fidx} className="text-sm text-gray-700">
                        {feature.includes('Everything') || feature.includes('Save') ? (
                          <span className="italic">{feature}</span>
                        ) : (
                          <>✓ {feature}</>
                        )}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold ${tier.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-200 hover:bg-gray-300'}`}>
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="font-bold mb-2">Add Tech Education to Your School</h4>
            <p className="text-gray-700 mb-4">Already enrolled in Qraft Academy, Nations Bible School, or Chariot Leadership Institute? Add any Tech Track as an elective for just $297 (save $200).</p>
            <Link href="/contact" className="text-indigo-600 font-semibold">Contact Us to Add Tech Elective →</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Student Success Stories</h2>
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

      {/* Integration */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Integrated Learning Ecosystem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold text-xl mb-3">For Qraft Academy Students</h3>
              <p className="text-gray-700 mb-4">Combine your work development training with digital tools to accelerate your career or business.</p>
              <Link href="/schools/qraft-academy" className="text-indigo-600 font-semibold">Learn More →</Link>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold text-xl mb-3">For Nations Bible Students</h3>
              <p className="text-gray-700 mb-4">Enhance your biblical training with digital discipleship tools and online ministry skills.</p>
              <Link href="/schools/nations-bible" className="text-indigo-600 font-semibold">Learn More →</Link>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold text-xl mb-3">For Chariot Institute Students</h3>
              <p className="text-gray-700 mb-4">Add digital-first leadership competencies to your Christ-centered leadership development.</p>
              <Link href="/schools/chariot-leadership" className="text-indigo-600 font-semibold">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-indigo-600 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Master Technology for Kingdom Impact</h2>
          <p className="text-xl mb-8">Join hundreds learning to use digital tools for creation, influence, stewardship, and connection.</p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
            Enroll in Tabernacle Tech Institute
          </button>
          <p className="mt-4 text-sm opacity-90">Start with a single course • Track bundles available • Lifetime access</p>
        </div>
      </section>
    </div>
  )
}
