import React from 'react'
import Link from 'next/link'

const capitals = [
  {
    name: 'Productive Capital',
    definition: 'The capabilities, assets, systems and relationships that enable people to create and capture value through their work.',
    href: '/workmasters',
    programme: 'WorkMasters',
    rule: 'border-work-accent',
    link: 'text-work-text',
  },
  {
    name: 'Influence Capital',
    definition: 'The credibility, intellectual assets, communication and relationships that enable people to extend their impact.',
    href: '/influencemasters',
    programme: 'InfluenceMasters',
    rule: 'border-influence',
    link: 'text-influence',
  },
]

export default function PurposeSection() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-6xl mx-auto grid gap-14 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Why This Work Matters</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-primary leading-tight">
            Potential Is a Beginning. Development Makes It Useful.
          </h2>
          <div className="mt-6 space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
            <p>
              Many people carry far more than they use — knowledge, skill, experience and ideas that never become
              valuable work or lasting contribution.
            </p>
            <p>
              Knowledge alone is not enough. People need opportunities to develop their capabilities, apply ideas,
              build systems, communicate value and make responsible decisions.
            </p>
            <p>
              Alongside this, I teach the Bible as its own source of wisdom and reflection — offered openly to anyone
              who wants to explore it, whatever their background.
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Personal Capital Development</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-primary leading-tight">Two kinds of capital worth developing.</h2>
          <div className="mt-8 space-y-6">
            {capitals.map((capital) => (
              <div key={capital.name} className={`border-l-4 ${capital.rule} pl-6`}>
                <h3 className="text-2xl font-semibold text-primary">{capital.name}</h3>
                <p className="mt-2 text-gray-700 leading-relaxed">{capital.definition}</p>
                <Link href={capital.href} className={`mt-3 inline-flex text-sm font-semibold ${capital.link}`}>
                  Developed through {capital.programme} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
