import React from 'react'
import Link from 'next/link'

export default function InstitutionsSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-accent uppercase">Built Infrastructure</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-primary">
            The Institutions Supporting This Ecosystem
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
            The five pillars of mastery aren't theory. They're built on real institutions, real teams, and real results. Here's what I've created to prove it.
          </p>
        </div>

        {/* Institutions grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Education pillar */}
          <div className="bg-white border border-black/5 rounded-2xl p-8">
            <div className="text-4xl mb-4">📚</div>
            <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Learning Mastery</p>
            <h3 className="text-lg font-semibold text-primary mb-4">As an Educator</h3>
            <p className="text-sm text-gray-700 mb-6 leading-relaxed">
              I've founded and led schools focused on practical leadership and knowledge development across Africa. These institutions have trained thousands of professionals.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link href="/schools/qraft-academy" className="text-primary font-semibold hover:text-accent transition-colors">
                  → Qraft Academy
                </Link>
                <p className="text-xs text-gray-600 mt-1">Technical education and skill development</p>
              </li>
              <li className="pt-2">
                <Link href="/schools/chariot-leadership" className="text-primary font-semibold hover:text-accent transition-colors">
                  → Chariot Leadership Institute
                </Link>
                <p className="text-xs text-gray-600 mt-1">Executive and emerging leader development</p>
              </li>
              <li className="pt-2">
                <Link href="/schools/nations-bible" className="text-primary font-semibold hover:text-accent transition-colors">
                  → Nations Knowledge Community
                </Link>
                <p className="text-xs text-gray-600 mt-1">Faith-based professional discipleship</p>
              </li>
            </ul>
          </div>

          {/* Technology pillar */}
          <div className="bg-white border border-black/5 rounded-2xl p-8">
            <div className="text-4xl mb-4">⚙️</div>
            <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Technology Mastery</p>
            <h3 className="text-lg font-semibold text-primary mb-4">As a Technologist</h3>
            <p className="text-sm text-gray-700 mb-6 leading-relaxed">
              I've built technology solutions and led innovation across critical sectors including energy, automation, and artificial intelligence. These systems serve real markets.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link href="/institutions/qraft-labs" className="text-primary font-semibold hover:text-accent transition-colors">
                  → Solar Energy Solutions
                </Link>
                <p className="text-xs text-gray-600 mt-1">Sustainable technology implementation</p>
              </li>
              <li className="pt-2">
                <Link href="/institutions/qraft-labs" className="text-primary font-semibold hover:text-accent transition-colors">
                  → Mechatronics & Automation
                </Link>
                <p className="text-xs text-gray-600 mt-1">Industrial systems and robotics</p>
              </li>
              <li className="pt-2">
                <Link href="/institutions/qraft-labs" className="text-primary font-semibold hover:text-accent transition-colors">
                  → Artificial Intelligence
                </Link>
                <p className="text-xs text-gray-600 mt-1">AI applications for business</p>
              </li>
            </ul>
          </div>

          {/* Capital pillar */}
          <div className="bg-white border border-black/5 rounded-2xl p-8">
            <div className="text-4xl mb-4">💰</div>
            <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Capital Mastery</p>
            <h3 className="text-lg font-semibold text-primary mb-4">As an Investor & Fund Manager</h3>
            <p className="text-sm text-gray-700 mb-6 leading-relaxed">
              I've deployed and managed capital across commodity markets, logistics, real estate, and family office structures. These are proven return-generating platforms.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link href="/institutions/qraft-capital" className="text-primary font-semibold hover:text-accent transition-colors">
                  → Commodities Trading
                </Link>
                <p className="text-xs text-gray-600 mt-1">Coffee, cocoa, vanilla markets</p>
              </li>
              <li className="pt-2">
                <Link href="/institutions/qraft-capital" className="text-primary font-semibold hover:text-accent transition-colors">
                  → Transport & Logistics
                </Link>
                <p className="text-xs text-gray-600 mt-1">Supply chain and distribution</p>
              </li>
              <li className="pt-2">
                <Link href="/institutions/qraft-capital" className="text-primary font-semibold hover:text-accent transition-colors">
                  → Real Estate & Family Office
                </Link>
                <p className="text-xs text-gray-600 mt-1">Property and wealth management</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-12 bg-gradient-to-r from-primary/5 to-accent/5 border border-black/5 rounded-2xl p-8 text-center">
          <p className="text-gray-700 leading-relaxed">
            This infrastructure isn't built on theory. It's built on capital deployment, team execution, and real market outcomes. When I coach you on the Five Pillars of Mastery, I'm teaching from systems I've built and scaled.
          </p>
        </div>
      </div>
    </section>
  )
}
