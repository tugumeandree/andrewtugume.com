import React from 'react'

export default function MissionVisionSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-gradient-to-b from-primary/5 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold tracking-widest text-accent uppercase">Our Movement</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-primary leading-tight">
            Why This Matters
          </h2>
        </div>

        {/* Mission & Vision statements */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Mission */}
          <div className="bg-white border border-black/5 rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-primary mb-3">Our Mission</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              To shape the future of work and leadership in Africa through learning, technology, and capital.
            </p>
            <div className="mt-6 space-y-2 text-sm text-gray-600">
              <p>We believe African professionals deserve:</p>
              <ul className="space-y-1">
                <li>✓ Clear systems, not vague inspiration</li>
                <li>✓ Accountability, not empty promises</li>
                <li>✓ Real results, not motivational theater</li>
              </ul>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white border border-black/5 rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-primary mb-3">Our Vision</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              An economically transformed and prosperous Africa powered by future-ready people, organizations, and leaders.
            </p>
            <div className="mt-6 space-y-2 text-sm text-gray-600">
              <p>This means:</p>
              <ul className="space-y-1">
                <li>✓ Professionals operating with mastery and clarity</li>
                <li>✓ Organizations led by disciplined leaders</li>
                <li>✓ Capital deployed by people with frameworks</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Movement narrative */}
        <div className="bg-gradient-to-r from-accent/10 to-primary/10 border border-black/5 rounded-2xl p-10">
          <h3 className="text-xl font-semibold text-primary mb-6">The Movement We're Building</h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Africa has talent. Africa has ambition. Africa has hunger. What Africa often lacks is <span className="font-semibold text-primary">systems</span>.
            </p>
            <p>
              We're building ecosystems where professionals, founders, technologists, and investors can operate with clarity, discipline, and capital. Not random growth. Not motivational speaking. Real systems. Real results.
            </p>
            <p>
              Every person who masters their career, builds a leadership practice, scales their learning, creates technology that works, or deploys capital strategically—they multiply. They influence teams. They build companies. They shape industries.
            </p>
            <p className="pt-4 border-t border-black/10">
              That's the movement. And that's why this work matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
