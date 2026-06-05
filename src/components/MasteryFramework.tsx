import React from 'react'

interface Pillar {
  title: string
  description: string
  icon: string
}

const pillars: Pillar[] = [
  {
    title: 'Work',
    description: 'Career strategy, productivity, and professional mastery',
    icon: '💼'
  },
  {
    title: 'Leadership',
    description: 'Vision, decision-making, and leading through complexity',
    icon: '👥'
  },
  {
    title: 'Learning',
    description: 'Knowledge systems, skill development, and continuous growth',
    icon: '📚'
  },
  {
    title: 'Technology',
    description: 'Innovation, product thinking, and technical execution',
    icon: '⚙️'
  },
  {
    title: 'Capital',
    description: 'Investment strategy, wealth building, and financial mastery',
    icon: '💰'
  }
]

export default function MasteryFramework() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-white/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-10 md:mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary">
            The Five Pillars of Mastery
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
            Everything we teach connects to one of these five domains. Nothing is random. Every program, every session, every framework is designed to build mastery across these pillars in ways that compound.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid gap-4 md:gap-6 md:grid-cols-5 mb-10 md:mb-12">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white border border-black/5 rounded-xl p-6 text-center hover:border-accent/30 hover:shadow-md transition-all"
            >
              <div className="text-4xl mb-3">{pillar.icon}</div>
              <h3 className="text-xl font-semibold text-primary">{pillar.title}</h3>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Framework explanation */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-black/5 rounded-2xl p-8 md:p-10">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-primary mb-4">How This Framework Works</h3>
            <div className="space-y-3 text-gray-700">
              <p>
                <span className="font-semibold text-primary">Work</span> is where you deploy your skills and build income.
              </p>
              <p>
                <span className="font-semibold text-primary">Leadership</span> is how you multiply that impact through others.
              </p>
              <p>
                <span className="font-semibold text-primary">Learning</span> is the engine that keeps you evolving and relevant.
              </p>
              <p>
                <span className="font-semibold text-primary">Technology</span> is the leverage that scales your work and systems.
              </p>
              <p>
                <span className="font-semibold text-primary">Capital</span> is the ultimate evolution—moving from earning to owning.
              </p>
              <p className="pt-3 border-t border-black/10 mt-3">
                <span className="font-semibold text-primary">The goal:</span> To operate with mastery across all five pillars, creating sustainable advantage in your career, business, and wealth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
