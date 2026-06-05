import React from 'react'

interface AuthorityItem {
  role: string
  dimension: string
  proof: string[]
}

const authorityItems: AuthorityItem[] = [
  {
    role: 'Educator',
    dimension: 'Learning & Development',
    proof: [
      'Founded 3 leadership schools',
      'Trained 5000+ professionals',
      'Developed mastery frameworks taught across Africa'
    ]
  },
  {
    role: 'Technologist',
    dimension: 'Innovation & Systems',
    proof: [
      'Built technology solutions in energy, automation, AI',
      'Led product strategy for scalable systems',
      'Architected solutions serving thousands'
    ]
  },
  {
    role: 'Investor',
    dimension: 'Capital & Wealth',
    proof: [
      'Deployed capital across commodities, logistics, real estate',
      'Managed fund investments generating returns',
      'Built family office infrastructure'
    ]
  },
  {
    role: 'Founder',
    dimension: 'Building & Operations',
    proof: [
      'Founded and scaled multiple ventures',
      'Built organizations generating measurable impact',
      'Structured systems that outlast individual effort'
    ]
  },
  {
    role: 'Specialist',
    dimension: 'Future of Work',
    proof: [
      'Research-backed frameworks on work evolution',
      'Speaking and thought leadership across Africa',
      'Building ecosystems where leaders operate with clarity'
    ]
  }
]

export default function AuthorityPillars() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-10 md:mb-12 text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-accent uppercase">Five Dimensions of Mastery</p>
          <h2 className="mt-2 md:mt-3 text-3xl md:text-4xl font-semibold text-primary">
            Why I'm Building This
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
            I don't coach from theory. Everything I teach comes from building, failing, learning, and succeeding across multiple domains. Here's what I bring to every conversation:
          </p>
        </div>

        {/* Authority grid */}
        <div className="grid gap-4 md:gap-6 md:grid-cols-5">
          {authorityItems.map((item, idx) => (
            <div key={idx} className="bg-white border border-black/5 rounded-xl p-6 hover:border-accent/30 transition-all">
              {/* Role */}
              <p className="text-xs font-semibold tracking-widest text-accent uppercase">
                {item.role}
              </p>
              
              {/* Dimension */}
              <h3 className="mt-3 text-lg font-semibold text-primary">
                {item.dimension}
              </h3>
              
              {/* Proof points */}
              <ul className="mt-4 space-y-2">
                {item.proof.map((proof, pidx) => (
                  <li key={pidx} className="text-sm text-gray-700 flex gap-2">
                    <span className="text-accent font-bold flex-shrink-0">→</span>
                    <span>{proof}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust statement */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            This is not motivational speaking. Everything I teach has been tested in real businesses, with real teams, under real pressure. You're learning from someone who has operated at every level of this ecosystem.
          </p>
        </div>
      </div>
    </section>
  )
}
