import React from 'react'
import Button from '@/components/Button'

interface Program {
  tag: string
  title: string
  description: string
  features: string[]
  cta: string
  ctaLink: string
  image: string
  testimonial?: string
  featured?: boolean
  badge?: string
}

interface PillarGroup {
  pillar: string
  icon: string
  tagline: string
  programs: Program[]
}

const pillarGroups: PillarGroup[] = [
  {
    pillar: 'Work & Leadership Mastery',
    icon: '🎯',
    tagline: 'Master your career, sharpen your leadership, and build on principles that govern both',
    programs: [
      {
        tag: 'Mastermind · Founding Cohort · Starts 10 Oct',
        title: 'Make More & Better Offers',
        description: 'An eight-week mastermind for consultants tired of waiting for the phone to ring. Build the nine-offer architecture that makes demand something you manufacture, not something you hope for.',
        features: [
          'The nine-offer architecture',
          'A priced, written core offer',
          'A live offer taking money by week five',
          'Weekly live coaching in a 12-seat cohort',
          'A full lead-generation and closing system'
        ],
        cta: 'Apply for a Seat',
        ctaLink: '/mastermind',
        image: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1780507670/WorkMasters_2_pthuuz.jpg',
        featured: true,
        badge: 'Applications Open'
      },
      {
        tag: 'WorkMasters',
        title: 'Career, Productivity and Management Mastery',
        description: 'For professionals, consultants, entrepreneurs and investors who want to accelerate income, sharpen positioning, and build structured career or business growth.',
        features: [
          'Career strategy and positioning',
          'Productivity architecture',
          'Consulting, freelancing & solopreneurship',
          'Business development systems',
          'Leadership and management frameworks',
          'Capital raising with confidence'
        ],
        cta: 'Explore WorkMasters',
        ctaLink: '/workmasters',
        image: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1780507670/WorkMasters_2_pthuuz.jpg',
        testimonial: 'I rebuilt my career strategy and doubled my responsibility within six months. The systems are rigorous and clear.'
      },
    ]
  },
  {
    pillar: 'Learning, Technology & Capital',
    icon: '⚡',
    tagline: 'The three disciplines through which work and leadership are built, scaled, and sustained',
    programs: [
      {
        tag: 'CourseMasters',
        title: 'Learning Design and Course Systems',
        description: 'For teams and organizations building high-performance training systems that scale knowledge and skill across their operations.',
        features: [
          'Curriculum strategy and design',
          'Course production and delivery',
          'Learning experience optimization',
          'Engagement and retention systems',
          'Launch strategy and support'
        ],
        cta: 'Explore CourseMasters',
        ctaLink: '/masters/coursemasters',
        image: 'https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg',
        testimonial: 'Our training ROI increased 3x after restructuring with these principles.'
      },
      {
        tag: 'TechMasters',
        title: 'Technology, Product and Innovation Mastery',
        description: 'For developers, technical founders, and innovation leaders who want to build real-world solutions, not just learn theory.',
        features: [
          'Product thinking and strategy',
          'Systems architecture',
          'Research and development practice',
          'Technical execution discipline',
          'Monetization and scaling'
        ],
        cta: 'Explore TechMasters',
        ctaLink: '/techmasters',
        image: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1615551883/IMG_5942_c83b2h.jpg',
        testimonial: 'TechMasters pushed me from shipping features to thinking in systems. My product now has a real growth loop.'
      },
      {
        tag: 'CapitalMasters',
        title: 'Investment and Wealth Mastery',
        description: 'For disciplined individuals and operators ready to move from income to ownership and build durable wealth.',
        features: [
          'Investment frameworks and thesis',
          'Portfolio strategy and management',
          'Risk assessment and management',
          'Financial governance structures',
          'Long-term capital growth'
        ],
        cta: 'Explore CapitalMasters',
        ctaLink: '/masters/capitalmasters',
        image: 'https://personalefinance.com/wp-content/uploads/Top-Characteristics-of-Finance-FAQ-What-are-Finance-Characteristics-Frequently-Asked-Questions.webp',
        testimonial: 'CapitalMasters gave me an investment framework that finally matches my income and risk profile.'
      }
    ]
  }
]

export default function ProgramsEcosystem() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-accent uppercase">The Mastery Ecosystem</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-primary">
            Shaping the Future of Work and Leadership
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
            One mission. Two tracks. Every program is built to help ambitious professionals master work and leadership — through learning, technology, and capital.
          </p>
        </div>

        {/* Programs by pillar */}
        <div className="space-y-16">
          {pillarGroups.map((group, gidx) => (
            <div key={gidx}>
              {/* Pillar header */}
              <div className="mb-8 flex items-center gap-3 pb-6 border-b-2 border-accent/20">
                <span className="text-3xl">{group.icon}</span>
                <div>
                  <h3 className="text-2xl font-semibold text-primary">{group.pillar}</h3>
                  <p className="text-sm text-gray-600 mt-1">{group.tagline}</p>
                </div>
              </div>

              {/* Programs in pillar */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {group.programs.map((program, pidx) => (
                  <article
                    key={pidx}
                    className={`relative bg-white rounded-2xl overflow-hidden transition-all h-full flex flex-col ${
                      program.featured
                        ? 'border-2 border-accent shadow-lg ring-4 ring-accent/10 md:-translate-y-1'
                        : 'border border-black/5 hover:border-accent/30 hover:shadow-md'
                    }`}
                  >
                    {program.badge && (
                      <span className="absolute top-3 right-3 z-10 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary shadow">
                        {program.badge}
                      </span>
                    )}
                    {/* Image */}
                    {program.image ? (
                      <div className="w-full h-48 overflow-hidden">
                        <img
                          src={program.image}
                          alt={program.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-48 bg-gradient-to-br from-accent/10 to-primary/5 flex items-center justify-center">
                        <span className="text-3xl">{group.icon}</span>
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-xs font-semibold tracking-wide text-accent uppercase">
                        {program.tag}
                      </p>
                      <h4 className="mt-2 text-xl font-semibold text-primary leading-tight">
                        {program.title}
                      </h4>
                      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                        {program.description}
                      </p>

                      {/* Features */}
                      <ul className="mt-4 space-y-2 text-sm text-gray-700 flex-1">
                        {program.features.map((feature, fidx) => (
                          <li key={fidx} className="flex gap-2">
                            <span className="text-accent font-bold flex-shrink-0">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <Button
                        asLink
                        href={program.ctaLink}
                        variant={program.featured ? 'primary' : 'secondary'}
                        size="sm"
                        className="mt-5 w-full sm:w-auto text-left"
                      >
                        {program.cta} →
                      </Button>

                      {/* Testimonial */}
                      {program.testimonial && (
                        <p className="mt-4 pt-4 border-t border-black/5 text-xs text-gray-600 italic leading-relaxed">
                          "{program.testimonial}"
                        </p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-6">
            Not sure which program is for you? Start with a conversation.
          </p>
          <Button asLink href="/apply" variant="primary" size="md" className="inline-flex rounded-full px-8 py-3">
            Claim Your Spot
          </Button>
        </div>
      </div>
    </section>
  )
}
