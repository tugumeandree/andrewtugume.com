import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generateBreadcrumbSchema, generatePersonSchema } from '@/lib/seo/schema'

export const metadata: Metadata = {
  title: 'About Andrew Tugume',
  description: 'Andrew Tugume is an educator, technologist, and investor focused on mastery systems for ambitious African professionals, founders, and operators.',
  alternates: {
    canonical: 'https://andrewtugume.com/about'
  },
  openGraph: {
    title: 'About Andrew Tugume',
    description: 'Educator, technologist, investor, and mastery coach building systems for disciplined growth.',
    url: 'https://andrewtugume.com/about',
    type: 'profile',
    images: [
      {
        url: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg',
        width: 400,
        height: 400,
        alt: 'Andrew Tugume'
      }
    ]
  },
  twitter: {
    card: 'summary',
    title: 'About Andrew Tugume',
    description: 'Educator, technologist, investor, and mastery coach.'
  }
}

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generatePersonSchema())
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://andrewtugume.com' },
              { name: 'About', url: 'https://andrewtugume.com/about' }
            ])
          )
        }}
      />

      <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            src="https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg"
            alt="Andrew Tugume"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover"
          />
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm font-semibold tracking-wide text-accent uppercase">Andrew Tugume</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-semibold text-primary">Educator. Technologist. Investor.</h1>
            <p className="mt-4 text-base text-gray-700">
              I build mastery systems that help ambitious professionals, founders, and operators turn ambition into structured execution.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link href="/apply" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-black">
                Apply for Mastery Coaching
              </Link>
              <Link href="/programs" className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-black hover:text-white">
                Explore the Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <article className="bg-white border border-black/5 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-primary">Educator</h2>
          <p className="mt-3 text-sm text-gray-700">I design high-performance learning systems that make complex skills practical and measurable.</p>
          <p className="mt-3 text-xs text-gray-600">Focus: curricula, instruction, performance frameworks.</p>
        </article>
        <article className="bg-white border border-black/5 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-primary">Technologist</h2>
          <p className="mt-3 text-sm text-gray-700">I build and advise on scalable products, helping teams execute with clarity and technical discipline.</p>
          <p className="mt-3 text-xs text-gray-600">Focus: product systems, architecture, execution rhythm.</p>
        </article>
        <article className="bg-white border border-black/5 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-primary">Investor</h2>
          <p className="mt-3 text-sm text-gray-700">I focus on disciplined capital allocation, governance, and long-term ownership.</p>
          <p className="mt-3 text-xs text-gray-600">Focus: portfolios, risk, capital strategy.</p>
        </article>
      </section>

      <section className="mt-12 bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold text-primary">Built From Real Experience</h2>
        <p className="mt-4 text-gray-700">
          I am not a motivational speaker. I build companies, systems, and capital structures. My work is grounded in execution, not hype.
        </p>
        <p className="mt-4 text-gray-700">
          The mastery programs translate that experience into weekly structure, accountability, and performance challenges.
        </p>
      </section>

      <section className="mt-12 bg-white border border-black/5 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold text-primary">What I believe</h2>
        <ul className="mt-4 space-y-2 text-sm text-gray-700">
          <li>Clarity beats intensity. Define the system, then execute.</li>
          <li>Skill compounds when measured weekly and reviewed monthly.</li>
          <li>Leadership is a set of habits, not a title.</li>
          <li>Wealth is built through disciplined allocation and governance.</li>
        </ul>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="bg-white border border-black/5 rounded-2xl p-6">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase">2019</p>
          <h3 className="mt-2 text-lg font-semibold text-primary">Learning systems built</h3>
          <p className="mt-2 text-sm text-gray-700">Launched structured curricula and performance frameworks for serious learners.</p>
        </div>
        <div className="bg-white border border-black/5 rounded-2xl p-6">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase">2021</p>
          <h3 className="mt-2 text-lg font-semibold text-primary">Product execution scaled</h3>
          <p className="mt-2 text-sm text-gray-700">Advised and shipped technology products with disciplined execution cadence.</p>
        </div>
        <div className="bg-white border border-black/5 rounded-2xl p-6">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase">2023</p>
          <h3 className="mt-2 text-lg font-semibold text-primary">Capital discipline refined</h3>
          <p className="mt-2 text-sm text-gray-700">Established investment governance and long-horizon portfolio strategy.</p>
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-primary">Featured work</h2>
          <p className="mt-3 text-gray-700 max-w-2xl">The programs are built as operating systems for focused, measurable growth.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <article className="bg-white border border-black/5 rounded-2xl p-6">
            <p className="text-xs font-semibold tracking-wide text-accent uppercase">WorkMasters</p>
            <h3 className="mt-2 text-xl font-semibold text-primary">Career, Leadership and Execution Mastery</h3>
            <p className="mt-3 text-sm text-gray-700">For professionals and founders who want structured progression and performance accountability.</p>
            <Link href="/workmasters" className="mt-5 inline-flex text-sm font-semibold text-primary">
              Explore WorkMasters →
            </Link>
          </article>
          <article className="bg-white border border-black/5 rounded-2xl p-6">
            <p className="text-xs font-semibold tracking-wide text-accent uppercase">TechMasters</p>
            <h3 className="mt-2 text-xl font-semibold text-primary">Technology, Product and Innovation Mastery</h3>
            <p className="mt-3 text-sm text-gray-700">For builders who want to ship technology that solves real economic problems.</p>
            <Link href="/masters/techmasters" className="mt-5 inline-flex text-sm font-semibold text-primary">
              Explore TechMasters →
            </Link>
          </article>
          <article className="bg-white border border-black/5 rounded-2xl p-6">
            <p className="text-xs font-semibold tracking-wide text-accent uppercase">CapitalMasters</p>
            <h3 className="mt-2 text-xl font-semibold text-primary">Investment and Wealth Mastery</h3>
            <p className="mt-3 text-sm text-gray-700">For operators who want to think like investors and build durable wealth.</p>
            <Link href="/masters/capitalmasters" className="mt-5 inline-flex text-sm font-semibold text-primary">
              Explore CapitalMasters →
            </Link>
          </article>
        </div>
      </section>

      <section className="mt-12 bg-primary text-white rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold">Work with Andrew</h2>
        <p className="mt-3 text-white/80">If you want structure, discipline, and measurable progress, apply to the next cohort.</p>
        <div className="mt-6">
          <Link href="/apply" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/90">
            Apply for Mastery Coaching
          </Link>
        </div>
      </section>
    </>
  )
}
