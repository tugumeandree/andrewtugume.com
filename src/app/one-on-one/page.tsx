import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'One-on-One Coaching with Andrew Tugume',
  description: 'Get personalized coaching from Andrew Tugume. Transform your leadership, career, faith, or business with expert guidance tailored to your journey.',
}

export default function OneOnOne() {
  const coachingTracks = [
    {
      title: 'Leadership Coaching',
      icon: '👑',
      description: 'Develop Christ-centered leadership skills to guide teams, churches, or organizations effectively',
      color: 'from-purple-600 to-pink-600',
      borderColor: 'border-purple-200',
      ideal: [
        'Pastors & ministry leaders',
        'Team managers & directors',
        'Emerging leaders',
        'Church planters'
      ],
      outcomes: [
        'Clarity on your leadership calling',
        'Effective team management skills',
        'Biblical leadership framework',
        'Communication & influence mastery',
        'Strategic decision-making ability'
      ]
    },
    {
      title: 'Career & Calling Coaching',
      icon: '🎯',
      description: 'Navigate career transitions, discover your calling, and build a God-honoring professional path',
      color: 'from-blue-600 to-indigo-600',
      borderColor: 'border-blue-200',
      ideal: [
        'Career transitioners',
        'Recent graduates',
        'Professionals seeking purpose',
        'Entrepreneurs starting out'
      ],
      outcomes: [
        'Clear understanding of your calling',
        'Career direction & strategy',
        'Resume/portfolio optimization',
        'Interview & negotiation skills',
        'Faith-work integration'
      ]
    },
    {
      title: 'Business & Entrepreneurship Coaching',
      icon: '💼',
      description: 'Launch, grow, or scale your business with biblical principles and proven strategies',
      color: 'from-green-600 to-teal-600',
      borderColor: 'border-green-200',
      popular: true,
      ideal: [
        'Startup founders',
        'Solo entrepreneurs',
        'Small business owners',
        'Social enterprise leaders'
      ],
      outcomes: [
        'Business model clarity',
        'Product-market fit validation',
        'Growth & scaling strategies',
        'Fundraising guidance',
        'Biblical stewardship practices'
      ]
    },
    {
      title: 'Technology & Product Coaching',
      icon: '💻',
      description: 'Build your tech product, master new skills, or transition into the technology industry',
      color: 'from-indigo-600 to-blue-600',
      borderColor: 'border-indigo-200',
      ideal: [
        'Aspiring developers',
        'Product managers',
        'Tech entrepreneurs',
        'Career switchers to tech'
      ],
      outcomes: [
        'Technical skill development',
        'Product strategy & roadmap',
        'Technology stack decisions',
        'Portfolio & project guidance',
        'Industry entry strategy'
      ]
    },
    {
      title: 'Faith & Spiritual Growth Coaching',
      icon: '📖',
      description: 'Deepen your relationship with God and integrate faith into every area of your life',
      color: 'from-amber-600 to-orange-600',
      borderColor: 'border-amber-200',
      ideal: [
        'New believers',
        'Spiritual seekers',
        'Mature Christians seeking depth',
        'Ministry preparation'
      ],
      outcomes: [
        'Deeper biblical understanding',
        'Personal discipleship plan',
        'Prayer & spiritual disciplines',
        'Faith-work integration',
        'Ministry readiness assessment'
      ]
    },
    {
      title: 'Wealth & Investment Coaching',
      icon: '💰',
      description: 'Build wealth biblically with smart investing, financial literacy, and generational planning',
      color: 'from-green-600 to-emerald-600',
      borderColor: 'border-green-200',
      ideal: [
        'New investors',
        'Wealth builders',
        'Financial planners',
        'Family stewards'
      ],
      outcomes: [
        'Personal investment strategy',
        'Portfolio optimization',
        'Wealth building roadmap',
        'Risk management understanding',
        'Biblical stewardship principles'
      ]
    }
  ]

  const pricingOptions = [
    {
      name: '3-Month Intensive',
      duration: '12 weeks',
      sessions: 'Weekly 60-min sessions',
      price: '$997',
      features: [
        '12 one-on-one coaching calls',
        'Personalized action plan',
        'Email support between sessions',
        'Custom resources & assessments',
        'Goal tracking dashboard',
        'End-of-program review'
      ],
      recommended: false
    },
    {
      name: '6-Month Transformation',
      duration: '24 weeks',
      sessions: 'Bi-weekly 60-min sessions',
      price: '$1,797',
      features: [
        '12 one-on-one coaching calls',
        'Comprehensive development plan',
        'Unlimited email support',
        'Priority WhatsApp access',
        'Monthly progress reports',
        'Custom resources & assessments',
        'Quarterly strategy reviews',
        '3 months post-program support'
      ],
      recommended: true,
      savings: 'Save $397'
    },
    {
      name: 'VIP Annual Partnership',
      duration: '12 months',
      sessions: 'Bi-weekly 90-min sessions',
      price: '$2,997',
      features: [
        '24 extended coaching calls',
        'Year-long strategic partnership',
        'Unlimited email & WhatsApp',
        'Priority scheduling',
        'Quarterly in-depth reviews',
        'Custom tools & frameworks',
        'Access to exclusive events',
        'Direct phone line access',
        'Lifetime alumni community'
      ],
      recommended: false,
      savings: 'Best Value - Save $897'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-blue-800 to-indigo-900 text-white rounded-xl p-8 md:p-12 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg" 
              alt="Andrew Tugume" 
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white/30"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">One-on-One Coaching</h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-6">
            Personalized Guidance from Andrew Tugume
          </p>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            Get customized coaching tailored to your unique journey, challenges, and goals. Whether you're developing leadership skills, building a business, or deepening your faith—I'm here to guide you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?subject=1-on-1+Coaching" className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors">
              Apply for Coaching
            </Link>
            <a href="#pricing" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Coaching Tracks */}
      <section className="mb-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Coaching Track</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the area where you need guidance, or combine multiple tracks for comprehensive transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {coachingTracks.map((track, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-8 border-2 ${track.borderColor} relative`}
            >
              {track.popular && (
                <div className="absolute -top-3 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold">
                  MOST POPULAR
                </div>
              )}
              <div className={`w-16 h-16 bg-gradient-to-br ${track.color} rounded-lg flex items-center justify-center text-3xl mb-4`}>
                {track.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{track.title}</h3>
              <p className="text-gray-700 mb-6">{track.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-sm text-gray-600">Ideal For:</h4>
                <ul className="space-y-2">
                  {track.ideal.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-blue-600">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-4">
                <h4 className="font-semibold mb-3 text-sm">What You'll Achieve:</h4>
                <ul className="space-y-2">
                  {track.outcomes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 md:p-12 mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="font-bold text-lg mb-2">Apply</h3>
            <p className="text-gray-700 text-sm">
              Fill out a brief application sharing your goals and current challenges.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="font-bold text-lg mb-2">Discovery Call</h3>
            <p className="text-gray-700 text-sm">
              We'll have a 30-min call to ensure we're a good fit and discuss your coaching track.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="font-bold text-lg mb-2">Customize Plan</h3>
            <p className="text-gray-700 text-sm">
              I'll create a personalized coaching plan tailored to your unique journey.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              4
            </div>
            <h3 className="font-bold text-lg mb-2">Transform</h3>
            <p className="text-gray-700 text-sm">
              We'll work together through regular sessions and ongoing support.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mb-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Investment Options</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the commitment level that fits your goals and timeline. All options include personalized guidance and ongoing support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pricingOptions.map((option, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-sm p-8 border-2 relative ${
                option.recommended 
                  ? 'border-accent shadow-lg scale-105' 
                  : 'border-gray-200'
              }`}
            >
              {option.recommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold">
                  RECOMMENDED
                </div>
              )}
              {option.savings && (
                <div className="absolute -top-3 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {option.savings}
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{option.name}</h3>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-4">
                {option.price}
              </div>
              <div className="text-sm text-gray-600 mb-2">{option.duration}</div>
              <div className="text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">{option.sessions}</div>

              <ul className="space-y-3 mb-8">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="/contact?subject=1-on-1+Coaching"
                className={`block w-full text-center px-6 py-3 rounded-lg font-bold transition-all ${
                  option.recommended
                    ? 'bg-gradient-to-r from-accent to-amber-600 text-white hover:opacity-90'
                    : 'bg-primary text-white hover:bg-blue-900'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Not sure which option is right for you? Let's talk.
          </p>
          <Link 
            href="/contact?subject=Coaching+Consultation" 
            className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>

      {/* Why Choose 1-on-1 */}
      <section className="bg-white rounded-xl shadow-sm p-8 md:p-12 mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose One-on-One Coaching?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Fully Personalized</h3>
              <p className="text-gray-700">Every session is customized to your unique situation, challenges, and goals—not generic advice.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Proven Experience</h3>
              <p className="text-gray-700">Over a decade of helping hundreds of individuals achieve breakthrough results in their calling.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Biblical Foundation</h3>
              <p className="text-gray-700">All coaching is rooted in sound biblical teaching, helping you integrate faith with every area of life.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Actionable Results</h3>
              <p className="text-gray-700">Walk away from every session with clear action steps, tools, and frameworks you can implement immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-200">
            <div className="text-4xl mb-4">👨‍💼</div>
            <p className="text-gray-700 italic mb-4">
              "Andrew's coaching helped me transition from corporate to ministry leadership. His guidance gave me confidence and clarity I didn't have before."
            </p>
            <div className="font-semibold text-sm">— Pastor Michael, Uganda</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-6 border-2 border-green-200">
            <div className="text-4xl mb-4">👩‍💻</div>
            <p className="text-gray-700 italic mb-4">
              "In 6 months of coaching, I launched my SaaS product and secured my first 50 paying customers. Andrew's tech and business insights were game-changing."
            </p>
            <div className="font-semibold text-sm">— Sarah, Kenya</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-200">
            <div className="text-4xl mb-4">🎯</div>
            <p className="text-gray-700 italic mb-4">
              "Andrew helped me discover my calling and gave me a roadmap to get there. Best investment I've ever made in myself."
            </p>
            <div className="font-semibold text-sm">— David, Tanzania</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 md:p-12 mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div>
            <h3 className="font-bold text-lg mb-2">How do I know if coaching is right for me?</h3>
            <p className="text-gray-700">
              If you're feeling stuck, unclear about your direction, or ready to level up but need guidance—coaching is perfect. Schedule a free consultation and we'll determine if we're a good fit.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Can I switch coaching tracks mid-program?</h3>
            <p className="text-gray-700">
              Absolutely! Your needs may evolve, and we can adjust your coaching focus at any time to serve you best.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">What if I need to reschedule a session?</h3>
            <p className="text-gray-700">
              Life happens. Just give 24-hour notice and we'll reschedule. Sessions are flexible around your schedule.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Do you offer payment plans?</h3>
            <p className="text-gray-700">
              Yes! We offer flexible payment plans for all coaching programs. Contact us to discuss options that work for your budget.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Is there a guarantee?</h3>
            <p className="text-gray-700">
              I'm committed to your success. If after the first two sessions you feel coaching isn't right for you, we'll refund 50% of your investment.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-indigo-900 text-white rounded-xl p-8 md:p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Journey?</h2>
        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
          Let's work together to help you thrive in your God-given calling. Apply today and let's discuss how 1-on-1 coaching can accelerate your growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact?subject=1-on-1+Coaching+Application" className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors">
            Apply for Coaching Now
          </Link>
          <Link href="/contact?subject=Free+Consultation" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
            Schedule Free Consultation
          </Link>
        </div>
        <div className="mt-6 text-sm text-blue-200">
          📧 andrewtugume2@gmail.com • 📞 +256 755 017 384 • 💬 WhatsApp Available
        </div>
      </section>
    </div>
  )
}
