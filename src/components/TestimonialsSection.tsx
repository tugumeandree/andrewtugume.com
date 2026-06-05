import React from 'react'

interface Testimonial {
  quote: string
  name: string
  role: string
  location: string
  program: string
  outcome: string
}

const testimonials: Testimonial[] = [
  {
    quote: 'I rebuilt my career strategy and doubled my responsibility within six months. The systems are rigorous and clear.',
    name: 'Operations Lead',
    role: 'Operations & Management',
    location: 'Nairobi',
    program: 'WorkMasters',
    outcome: '$80K → $165K annual responsibility'
  },
  {
    quote: 'TechMasters pushed me from shipping features to thinking in systems. My product now has a real growth loop.',
    name: 'Product Founder',
    role: 'Technical Founder',
    location: 'Lagos',
    program: 'TechMasters',
    outcome: '1 product/year → 3 strategic products/year'
  },
  {
    quote: 'CapitalMasters gave me an investment framework that finally matches my income and risk profile.',
    name: 'Founder-Investor',
    role: 'Entrepreneur & Investor',
    location: 'Kampala',
    program: 'CapitalMasters',
    outcome: 'Scattered savings → Structured portfolio'
  }
]

export default function TestimonialsSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-white/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-accent uppercase">Results From the Community</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-primary">
            What Happens When You Commit to Mastery
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
            These are real results from real people who went through the coaching process. They had clarity before they had results.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <article
              key={idx}
              className="bg-white border border-black/5 rounded-2xl p-8 hover:border-accent/30 hover:shadow-md transition-all flex flex-col"
            >
              {/* Quote */}
              <blockquote className="text-lg text-gray-700 leading-relaxed italic mb-6 flex-1">
                "{testimonial.quote}"
              </blockquote>

              {/* Person info */}
              <div className="border-t border-black/5 pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-xs text-gray-600">{testimonial.role} • {testimonial.location}</p>
                  </div>
                </div>

                {/* Program */}
                <div className="bg-accent/10 rounded-lg p-3 mb-4">
                  <p className="text-xs font-semibold tracking-wide text-accent uppercase">Program</p>
                  <p className="text-sm font-semibold text-primary">{testimonial.program}</p>
                </div>

                {/* Outcome */}
                <div className="bg-primary/5 rounded-lg p-3">
                  <p className="text-xs font-semibold tracking-wide text-primary uppercase">Outcome</p>
                  <p className="text-sm text-gray-700">{testimonial.outcome}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Social proof statement */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-gray-700 leading-relaxed">
            These results come from clarity, commitment, and the right systems. They're not outliers. They're the pattern we see consistently.
          </p>
        </div>
      </div>
    </section>
  )
}
