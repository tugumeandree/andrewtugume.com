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
  testimonial: string
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
      {
        tag: 'Leadership Exchange',
        title: 'Peer Leadership and Strategic Exchange',
        description: 'A networked leadership forum for accountability, strategic review, and shared execution insights.',
        features: [
          'Accountability partnerships',
          'Strategy sessions and reviews',
          'Performance evaluation frameworks',
          'Decision-making processes',
          'Leadership growth acceleration'
        ],
        cta: 'Inquire About Leadership Exchange',
        ctaLink: '/contact',
        image: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1780618459/ILSZ9458_11zon_meuy7y.jpg',
        testimonial: 'The structured accountability keeps me focused on what matters most.'
      },
      {
        tag: 'Workers & Leaders Bible Study · Fridays · 8 PM EAT',
        title: 'Scripture as a Framework for Work, Leadership, and Stewardship',
        description: 'A weekly online study for professionals, founders, and investors who refuse to keep faith and work separate. Biblical wisdom applied to careers, business, capital, and leadership — every Friday at 8 PM EAT on Google Meet.',
        features: [
          'Biblical leadership and authority',
          'Stewardship, wealth, and capital principles',
          'Decision-making and character formation',
          'Purpose, calling, and workplace influence',
          'Live discussion and practical application'
        ],
        cta: 'Join This Friday\'s Study',
        ctaLink: 'https://meet.google.com/jbq-qumi-ntf',
        image: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1781178700/workers_and_leaders_bible_study_vcs4fu.png',
        testimonial: 'This study reshaped how I think about work, money, and leadership. The biblical frameworks are as rigorous as any business course I have taken.'
      }
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
                  <article key={pidx} className="bg-white border border-black/5 rounded-2xl overflow-hidden hover:border-accent/30 hover:shadow-md transition-all h-full flex flex-col">
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
                      <Button asLink href={program.ctaLink} variant="secondary" size="sm" className="mt-5 w-full sm:w-auto text-left">
                        {program.cta} →
                      </Button>

                      {/* Testimonial */}
                      <p className="mt-4 pt-4 border-t border-black/5 text-xs text-gray-600 italic leading-relaxed">
                        "{program.testimonial}"
                      </p>
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
