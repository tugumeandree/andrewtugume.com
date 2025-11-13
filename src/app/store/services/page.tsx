import React from 'react'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      id: 1,
      title: '1-on-1 Leadership Coaching',
      description: 'Personalized coaching to develop your Christ-centered leadership',
      duration: '6 sessions (3 months)',
      price: 997,
      image: '/assets/service-coaching.jpg',
      slug: 'coaching',
      included: [
        'Six 60-minute coaching calls',
        'Custom leadership development plan',
        'Email support between sessions',
        'Leadership assessment & resources'
      ]
    },
    {
      id: 2,
      title: 'Career Transition Consulting',
      description: 'Strategic guidance for your next career move in tech or ministry',
      duration: '4 sessions (2 months)',
      price: 697,
      image: '/assets/service-career.jpg',
      slug: 'career-consulting',
      included: [
        'Four 90-minute strategy sessions',
        'Resume/portfolio review',
        'Interview preparation',
        'Job search action plan'
      ]
    },
    {
      id: 3,
      title: 'Business Strategy Session',
      description: 'Faith-driven business consulting for entrepreneurs',
      duration: 'Single 2-hour session',
      price: 297,
      image: '/assets/service-business.jpg',
      slug: 'business-strategy',
      included: [
        'One 2-hour intensive session',
        'Business analysis & recommendations',
        'Action plan with next steps',
        '30-day email follow-up'
      ]
    },
    {
      id: 4,
      title: 'Speaking Engagement',
      description: 'Invite Andrew to speak at your church, conference, or organization',
      duration: 'Custom',
      price: 'Custom',
      image: '/assets/service-speaking.jpg',
      slug: 'speaking',
      included: [
        'Keynote or workshop delivery',
        'Custom content tailored to your audience',
        'Q&A session',
        'Resources for attendees'
      ]
    }
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Services & Consulting</h1>
      <p className="text-gray-700 mb-8">Work directly with Andrew to accelerate your growth in leadership, career, or business.</p>

      {/* Services Grid */}
      <div className="space-y-8 mb-12">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition">
            <div className="md:flex">
              <img src={service.image} alt={service.title} className="w-full md:w-80 h-64 object-cover" />
              <div className="p-8 flex-1">
                <h3 className="font-bold text-2xl mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <div className="text-sm text-gray-500 mb-2">Duration: {service.duration}</div>
                  <div className="text-3xl font-bold text-primary mb-4">
                    {typeof service.price === 'number' ? `$${service.price}` : service.price}
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Included:</h4>
                  <ul className="space-y-1">
                    {service.included.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-700">✓ {item}</li>
                    ))}
                  </ul>
                </div>
                <Link 
                  href={service.slug === 'speaking' ? '/partner/opportunities' : `/store/services/${service.slug}`} 
                  className="inline-block bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-blue-900"
                >
                  {service.slug === 'speaking' ? 'Submit Invitation' : 'Book Now'}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonial */}
      <section className="bg-gray-100 rounded-lg p-8 mb-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg italic text-gray-700 mb-4">
            "Working with Andrew transformed how I lead my team. His insights are deeply biblical yet intensely practical. I saw immediate results."
          </p>
          <div className="font-semibold">— David M., Senior Director</div>
        </div>
      </section>

      {/* Custom Services */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-200">
        <h3 className="text-xl font-bold mb-4">Need Something Different?</h3>
        <p className="text-gray-700 mb-4">Looking for custom consulting, training for your organization, or curriculum development? Let's discuss your specific needs.</p>
        <Link href="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-blue-900">
          Contact Us for Custom Solutions
        </Link>
      </section>
    </div>
  )
}
