import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Andrew Tugume - Speaking, Consulting & Training',
  description: 'Book Andrew Tugume for speaking engagements, consulting, training, or personalized coaching. Transform your team, church, or organization.',
}

export default function BookAndrew() {
  const bookingOptions = [
    {
      title: 'Speaking Engagement',
      icon: '🎤',
      description: 'Invite Andrew to speak at your church, conference, or corporate event',
      duration: 'Keynote or Workshop',
      price: 'Custom Quote',
      color: 'from-blue-600 to-indigo-600',
      borderColor: 'border-blue-200',
      included: [
        'Keynote or workshop delivery',
        'Custom content for your audience',
        'Q&A session',
        'Digital resources for attendees',
        'Pre-event consultation'
      ],
      href: '/contact?subject=Speaking+Engagement'
    },
    {
      title: 'Corporate Training',
      icon: '🏢',
      description: 'Upskill your team with custom training in leadership, technology, or course creation',
      duration: 'Half-day or Full-day',
      price: 'Custom Quote',
      color: 'from-green-600 to-emerald-600',
      borderColor: 'border-green-200',
      included: [
        'Customized curriculum design',
        'Interactive workshops',
        'Team assessments',
        'Training materials & resources',
        'Follow-up support (30 days)'
      ],
      href: '/contact?subject=Corporate+Training'
    },
    {
      title: 'Ministry Consultation',
      icon: '⛪',
      description: 'Strategic guidance for churches and ministries on leadership, technology, or growth',
      duration: '4-8 weeks',
      price: 'Starting at $2,497',
      color: 'from-purple-600 to-pink-600',
      borderColor: 'border-purple-200',
      included: [
        'Organizational assessment',
        'Strategic planning sessions',
        'Technology & systems review',
        'Implementation roadmap',
        'Ongoing support & check-ins'
      ],
      href: '/contact?subject=Ministry+Consultation'
    },
    {
      title: 'Business Consulting',
      icon: '💼',
      description: 'Faith-driven business strategy for entrepreneurs and startups',
      duration: '2-4 sessions',
      price: 'Starting at $997',
      color: 'from-amber-600 to-orange-600',
      borderColor: 'border-amber-200',
      included: [
        'Business model analysis',
        'Growth strategy development',
        'Product/market fit assessment',
        'Fundraising guidance',
        'Action plan with milestones'
      ],
      href: '/contact?subject=Business+Consulting'
    },
    {
      title: '1-on-1 Coaching',
      icon: '🤝',
      description: 'Personalized coaching for leadership, career, or personal development',
      duration: '3-6 months',
      price: 'Starting at $997',
      color: 'from-indigo-600 to-blue-600',
      borderColor: 'border-indigo-200',
      popular: true,
      included: [
        'Weekly or bi-weekly sessions',
        'Personalized development plan',
        'Email support between sessions',
        'Resources & assessments',
        'Goal tracking & accountability'
      ],
      href: '/one-on-one'
    },
    {
      title: 'Course Creation',
      icon: '🎓',
      description: 'Done-for-you or guided course creation for your expertise',
      duration: '6-12 weeks',
      price: 'Custom Quote',
      color: 'from-red-600 to-pink-600',
      borderColor: 'border-red-200',
      included: [
        'Curriculum design & structure',
        'Content development support',
        'Video production guidance',
        'Platform setup & launch',
        'Marketing strategy'
      ],
      href: '/masters/coursemasters'
    },
    {
      title: 'Technology Consulting',
      icon: '💻',
      description: 'Build your tech product with expert guidance from ideation to launch',
      duration: '8-16 weeks',
      price: 'Custom Quote',
      color: 'from-teal-600 to-cyan-600',
      borderColor: 'border-teal-200',
      included: [
        'Product strategy & planning',
        'Technology stack selection',
        'Development roadmap',
        'Architecture & design review',
        'Launch preparation'
      ],
      href: '/masters/techmasters'
    },
    {
      title: 'Investment Coaching',
      icon: '💰',
      description: 'Personal guidance on investing, wealth building, and financial literacy',
      duration: '3-6 months',
      price: 'Custom Quote',
      color: 'from-green-600 to-teal-600',
      borderColor: 'border-green-200',
      included: [
        'Personal financial assessment',
        'Custom investment strategy',
        'Portfolio review & optimization',
        'Monthly check-in calls',
        'Direct access via WhatsApp/Email'
      ],
      href: '/masters/capitalmasters'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-blue-800 to-slate-900 text-white rounded-xl p-8 md:p-12 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg" 
              alt="Andrew Tugume" 
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white/30"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Andrew Tugume</h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-6">
            Educator • Technologist • Investor
          </p>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Transform your organization, team, or personal journey with Andrew's expertise in biblical teaching, modern technology, and practical business wisdom.
          </p>
        </div>
      </section>

      {/* Booking Options */}
      <section className="mb-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Engagement</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you need a speaker, consultant, coach, or trainer—Andrew brings decades of experience helping individuals and organizations thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {bookingOptions.map((option, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-8 border-2 ${option.borderColor} relative`}
            >
              {option.popular && (
                <div className="absolute -top-3 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold">
                  POPULAR
                </div>
              )}
              <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-lg flex items-center justify-center text-3xl mb-4`}>
                {option.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{option.title}</h3>
              <p className="text-gray-700 mb-4">{option.description}</p>
              
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                <div className="text-sm text-gray-600">
                  <div className="font-semibold">Duration</div>
                  <div>{option.duration}</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    {option.price}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-sm text-gray-600">What's Included:</h4>
                <ul className="space-y-2">
                  {option.included.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href={option.href}
                className={`block w-full text-center bg-gradient-to-r ${option.color} text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-all`}
              >
                Book This Service
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Book Andrew */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 md:p-12 mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Book Andrew?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">Deep Biblical Foundation</h3>
            <p className="text-gray-700">
              Every engagement is rooted in sound biblical teaching, helping you integrate faith with your work and calling.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">Proven Track Record</h3>
            <p className="text-gray-700">
              Over a decade of experience helping thousands of individuals, teams, and organizations thrive in their calling.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">Practical & Actionable</h3>
            <p className="text-gray-700">
              Not just theory—you'll leave with concrete strategies, tools, and action plans you can implement immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">What People Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-600">
            <p className="text-gray-700 italic mb-4">
              "Andrew's keynote transformed how our team thinks about work. His blend of biblical wisdom and practical tech insights was exactly what we needed."
            </p>
            <div className="font-semibold text-sm">— Pastor John M., Church Leadership Conference</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-green-600">
            <p className="text-gray-700 italic mb-4">
              "The corporate training Andrew provided helped our team launch three successful products. His strategic guidance was invaluable."
            </p>
            <div className="font-semibold text-sm">— Sarah K., Tech Startup CEO</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-purple-600">
            <p className="text-gray-700 italic mb-4">
              "1-on-1 coaching with Andrew gave me clarity on my calling and the confidence to launch my ministry. Worth every investment."
            </p>
            <div className="font-semibold text-sm">— David T., Ministry Leader</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-blue-900 text-white rounded-xl p-8 md:p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
          Let's discuss how I can help you, your team, or your organization thrive.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors">
            Send a Booking Request
          </Link>
          <Link href="/one-on-one" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
            Explore 1-on-1 Coaching
          </Link>
        </div>
        <div className="mt-6 text-sm text-blue-200">
          📧 andrewtugume2@gmail.com • 📞 +256 755 017 384
        </div>
      </section>
    </div>
  )
}
