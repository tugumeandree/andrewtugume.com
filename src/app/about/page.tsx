import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generateBreadcrumbSchema, generatePersonSchema } from '@/lib/seo/schema'

export const metadata: Metadata = {
  title: 'About Andrew Tugume — Building People, Systems & Capital for Africa\'s Future',
  description:
    'Andrew Tugume is an educator, technologist, and investor shaping the future of work and leadership in Africa through workforce development programs, leadership institutions, and capital formation.',
  keywords: [
    'Andrew Tugume',
    'African leadership development',
    'workforce development Africa',
    'future of work Africa',
    'economic transformation Africa',
    'entrepreneur Uganda',
    'Qraft Solutions',
    'WorkMasters',
    'TechMasters',
    'CapitalMasters',
  ],
  alternates: {
    canonical: 'https://andrewtugume.com/about',
  },
  openGraph: {
    title: 'About Andrew Tugume — Building People, Systems & Capital for Africa\'s Future',
    description:
      'Educator, technologist, and investor working at the intersection of workforce development, leadership, technology, and capital in Africa.',
    url: 'https://andrewtugume.com/about',
    type: 'profile',
    images: [
      {
        url: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg',
        width: 1200,
        height: 630,
        alt: 'Andrew Tugume',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Andrew Tugume',
    description:
      'Educator, technologist, and investor shaping the future of work and leadership in Africa.',
  },
}

const beliefs = [
  {
    title: 'Human Potential',
    body: "Africa's greatest asset is its people. Every investment in human development is an investment in Africa's economic future. Potential without a system to develop it is potential wasted.",
  },
  {
    title: 'Lifelong Learning',
    body: 'Learning is not a phase of life. It is the engine of personal and economic transformation. The professionals who keep learning are the ones who keep growing — and keep leading.',
  },
  {
    title: 'Leadership',
    body: 'Leadership shapes organizations, communities, and nations. When leaders develop, everything around them develops. The quality of leadership at every level determines the ceiling of what is possible.',
  },
  {
    title: 'Technology',
    body: 'Technology should amplify human potential, not replace it. The goal is not to chase every new tool — it is to build people who can make technology work on real problems at real scale.',
  },
  {
    title: 'Stewardship',
    body: 'Capital is a responsibility before it is a reward. Managing resources well — money, time, relationships, and influence — is the foundation of lasting wealth and lasting impact.',
  },
  {
    title: 'Wealth Creation',
    body: 'Wealth is built through disciplined systems, not lucky moments. Moving from income to ownership requires frameworks, governance, and long-term thinking — not just harder work.',
  },
  {
    title: 'Character',
    body: 'Character matters as much as competence. Skill without integrity produces short-term results. Character is what makes performance sustainable and leadership trustworthy at scale.',
  },
  {
    title: 'Service',
    body: 'The purpose of building is not accumulation. It is service — creating environments where others can grow, contribute, and reach their potential. That is what makes a life of building worthwhile.',
  },
]

const ecosystem = [
  {
    category: 'Learning',
    items: [
      { name: 'Qraft Academy', description: 'A structured learning institution developing future-ready professionals.' },
      { name: 'CourseMasters', description: 'Helping organizations design high-performance training systems that scale.', href: '/masters/coursemasters' },
    ],
  },
  {
    category: 'Leadership',
    items: [
      { name: 'Chariot Leadership Institute', description: 'Developing leaders for Africa\'s organizations, communities, and institutions.', href: '/schools/chariot-leadership' },
      { name: 'Leadership Exchange', description: 'A peer accountability and strategic review forum for active leaders and executives.', href: '/contact' },
    ],
  },
  {
    category: 'Workforce Development',
    items: [
      { name: 'WorkMasters', description: 'Career, productivity, and management mastery for professionals, founders, and operators.', href: '/workmasters' },
    ],
  },
  {
    category: 'Technology',
    items: [
      { name: 'TechMasters', description: 'Product and innovation mastery for developers, builders, and technical founders.', href: '/techmasters' },
      { name: 'Qraft Solutions', description: 'Technology advisory and development for organizations building real-world solutions.' },
    ],
  },
  {
    category: 'Capital',
    items: [
      { name: 'CapitalMasters', description: 'Investment and wealth mastery for operators ready to build durable, long-term wealth.', href: '/masters/capitalmasters' },
    ],
  },
  {
    category: 'Community',
    items: [
      { name: 'Nations Knowledge Community', description: 'A community for knowledge-driven professionals and leaders building across Africa.', href: '/schools/nations-bible' },
      { name: 'Workers & Leaders Bible Study', description: 'Weekly integration of biblical wisdom into work, leadership, stewardship, and decision-making.', href: '/bible-study' },
    ],
  },
]

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generatePersonSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://andrewtugume.com' },
              { name: 'About', url: 'https://andrewtugume.com/about' },
            ])
          ),
        }}
      />

      <div className="space-y-12">

        {/* ── 1. Hero ──────────────────────────────────────────── */}
        <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-14">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <img
              src="https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg"
              alt="Andrew Tugume"
              className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1 text-center md:text-left">
              <p className="text-sm font-semibold tracking-widest text-accent uppercase">
                Andrew Tugume — Educator. Technologist. Investor.
              </p>
              <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-primary max-w-2xl leading-tight">
                Building People, Systems &amp; Capital for Africa's Future
              </h1>
              <p className="mt-5 text-lg text-gray-700 max-w-2xl leading-relaxed">
                Andrew Tugume works at the intersection of workforce development, leadership, technology,
                and capital — with one aim: to shape the future of work and leadership in Africa.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white hover:bg-black"
                >
                  Explore Programs
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-primary px-7 py-3 text-sm font-semibold text-primary hover:bg-black hover:text-white"
                >
                  Work With Andrew
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Origin Story ──────────────────────────────────── */}
        <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">My Story</p>
          <h2 className="mt-3 text-3xl font-semibold text-primary max-w-2xl leading-snug">
            I did not set out to build institutions. I set out to solve a problem.
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed max-w-3xl">
            <p>
              Early in my career, I worked alongside professionals and teams who were technically
              capable but operationally stuck. They had degrees, ambition, and ideas — but no systems
              for execution, no frameworks for decision-making, and no real understanding of how
              capital works or how to position themselves within it.
            </p>
            <p>
              I kept seeing the same pattern: organizations that could not retain talent, leaders
              who could not delegate, founders who could not scale, and professionals who could not
              convert their skill into the income and influence it deserved. The problem was not
              ability. It was the absence of structured development — the kind that builds people
              from the inside out, not the kind that fills a room for a weekend and leaves nothing
              behind.
            </p>
            <p>
              That observation became a question: What would it take to develop people who are
              genuinely ready for the demands of modern work, leadership, and entrepreneurship in
              Africa?
            </p>
            <p>
              The answer was not more content. It was systems. Structured, accountable,
              execution-oriented systems that translate knowledge into repeatable performance.
              So I started building them — programs, institutions, and communities designed to
              develop people over time, not just in a moment.
            </p>
          </div>
        </section>

        {/* ── 3. The Challenge ─────────────────────────────────── */}
        <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">The Challenge</p>
          <h2 className="mt-3 text-3xl font-semibold text-primary max-w-2xl leading-snug">
            Africa has the talent. The infrastructure to develop it is still being built.
          </h2>
          <p className="mt-5 text-gray-700 max-w-3xl leading-relaxed">
            Africa has the fastest-growing workforce in the world. It also has some of the most
            significant gaps between human potential and economic outcome. The challenge is not a
            lack of talent. It is the absence of systems designed to develop, deploy, and sustain
            that talent at scale.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Talent without systems',
                body: 'Professionals with real skill but no structured path for career growth, positioning, or execution discipline.',
              },
              {
                title: 'Leadership gaps',
                body: 'Leaders promoted into authority before they have developed the internal infrastructure that leadership demands.',
              },
              {
                title: 'Learning without application',
                body: 'Training investments that produce knowledge but not performance — because learning is disconnected from accountability.',
              },
              {
                title: 'Technology acceleration',
                body: 'Rapid technological change that most of the workforce is not equipped to leverage, lead, or build with.',
              },
              {
                title: 'Capital access and literacy',
                body: 'Limited access to capital, and limited frameworks for managing and multiplying it when it is available.',
              },
              {
                title: 'Founders without frameworks',
                body: 'Entrepreneurs with vision and courage but without the operational and financial discipline that turns vision into viable organizations.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-black/5 bg-black/[0.02] p-5">
                <h3 className="text-sm font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-700 max-w-3xl leading-relaxed">
            These are not problems that can be solved with a single course or a motivational event.
            They require infrastructure — learning institutions, coaching programs, leadership
            communities, and investment frameworks working together over time.
          </p>
        </section>

        {/* ── 4. Mission & Vision ──────────────────────────────── */}
        <section className="bg-primary text-white rounded-2xl p-8 md:p-12">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">Mission &amp; Vision</p>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold">Mission</h2>
              <p className="mt-3 text-xl text-white/90 leading-snug font-medium">
                To shape the future of work and leadership in Africa.
              </p>
              <p className="mt-4 text-white/70 text-sm leading-relaxed">
                This means developing the professionals, leaders, founders, and investors
                who will build Africa's next generation of organizations and institutions.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Vision</h2>
              <p className="mt-3 text-xl text-white/90 leading-snug font-medium">
                An economically transformed Africa powered by future-ready people, organizations,
                and leaders.
              </p>
              <p className="mt-4 text-white/70 text-sm leading-relaxed">
                This is not a five-year plan. It is a generational commitment. Africa's
                transformation will be driven by the quality of its people — those who can
                execute, govern, build, and allocate capital with discipline and purpose.
              </p>
            </div>
          </div>
        </section>

        {/* ── 5. Beliefs ───────────────────────────────────────── */}
        <section>
          <div className="mb-8">
            <p className="text-sm font-semibold tracking-widest text-accent uppercase">What I Believe</p>
            <h2 className="mt-3 text-3xl font-semibold text-primary">
              Eight principles that shape everything I build
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {beliefs.map((b) => (
              <article key={b.title} className="bg-white border border-black/5 rounded-2xl p-6">
                <h3 className="text-base font-semibold text-primary">{b.title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{b.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── 6. The Ecosystem ─────────────────────────────────── */}
        <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">The Ecosystem</p>
          <h2 className="mt-3 text-3xl font-semibold text-primary max-w-2xl leading-snug">
            Building an Ecosystem for Transformation
          </h2>
          <p className="mt-4 text-gray-700 max-w-3xl leading-relaxed">
            These are not isolated projects. They are the components of a single answer to a single
            question: How do you build a generation of people ready to lead Africa's economic
            transformation? Each institution addresses a specific gap. Together, they form an ecosystem.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ecosystem.map((group) => (
              <div key={group.category} className="rounded-xl border border-black/5 p-6">
                <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-4">
                  {group.category}
                </p>
                <div className="space-y-4">
                  {group.items.map((item) => (
                    <div key={item.name}>
                      <h3 className="text-sm font-semibold text-primary">
                        {item.href ? (
                          <Link href={item.href} className="hover:text-accent">
                            {item.name} →
                          </Link>
                        ) : (
                          item.name
                        )}
                      </h3>
                      <p className="mt-1 text-xs text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 7. Experience & Credibility ──────────────────────── */}
        <section>
          <div className="mb-8">
            <p className="text-sm font-semibold tracking-widest text-accent uppercase">Experience</p>
            <h2 className="mt-3 text-3xl font-semibold text-primary">Built from real work</h2>
            <p className="mt-3 text-gray-600 max-w-2xl">
              The programs are grounded in direct experience — not theory borrowed from other contexts.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                area: 'Workforce Development',
                detail:
                  'Designed and delivered structured career and leadership development programs for professionals and organizations across Uganda, with a focus on execution discipline and measurable progression.',
              },
              {
                area: 'Curriculum Design',
                detail:
                  'Built learning frameworks and performance systems for training institutions and corporate teams — moving organizations from ad hoc training to structured, outcome-driven learning.',
              },
              {
                area: 'Technology & Product',
                detail:
                  'Founded Qraft Solutions and led technical teams through the full cycle of product development, from problem definition to architecture to production — in markets where infrastructure is rarely predictable.',
              },
              {
                area: 'Leadership Development',
                detail:
                  'Founded Chariot Leadership Institute to develop leaders for Africa\'s organizations and communities, with programs grounded in governance, accountability, and character formation.',
              },
              {
                area: 'Entrepreneurship',
                detail:
                  'Built multiple ventures across education, technology, and consulting — navigating the operational, financial, and leadership realities of building in an emerging market.',
              },
              {
                area: 'Investment & Capital',
                detail:
                  'Developed investment frameworks and portfolio strategies grounded in disciplined governance, risk management, and long-term ownership thinking — and trained others to do the same.',
              },
            ].map((item) => (
              <article
                key={item.area}
                className="bg-white border border-black/5 rounded-2xl p-6"
              >
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wide">{item.area}</h3>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── 8. Beyond the Work ───────────────────────────────── */}
        <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">Beyond the Work</p>
          <h2 className="mt-3 text-3xl font-semibold text-primary max-w-xl leading-snug">
            The person behind the programs
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed max-w-3xl">
            <p>
              Outside the programs and institutions, I am a student of scripture, a teacher, and
              someone who finds genuine purpose in watching people unlock potential they did not
              know they had.
            </p>
            <p>
              My faith shapes how I think about work, stewardship, and service. It is the reason
              the Workers &amp; Leaders Bible Study exists — because I believe the principles in
              scripture are as relevant to business and leadership as any management framework, and
              that the professionals who integrate both tend to build something more durable than
              those who keep the two separate.
            </p>
            <p>
              I read widely. I teach because it forces clarity. I build community because
              transformation rarely happens in isolation — and because the most important growth in
              any person's life usually happens in relationship with others who are doing the same work.
            </p>
            <p>
              The mission is serious and the timeline is long. The people who sustain long missions
              are the ones who know exactly why they are doing it.
            </p>
          </div>
        </section>

        {/* ── 9. Invitation ────────────────────────────────────── */}
        <section>
          <div className="mb-8">
            <p className="text-sm font-semibold tracking-widest text-accent uppercase">Join the Mission</p>
            <h2 className="mt-3 text-3xl font-semibold text-primary">
              This work is bigger than any single program.
            </h2>
            <p className="mt-4 text-gray-700 max-w-2xl leading-relaxed">
              There are several ways to engage — depending on where you are and what you are building.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Programs',
                body: 'Join a mastery cohort and develop the skills, systems, and discipline your career or business demands. WorkMasters, TechMasters, CapitalMasters, CourseMasters.',
                href: '/programs',
                cta: 'Explore Programs',
              },
              {
                title: 'Communities',
                body: 'Participate in Leadership Exchange, the Workers & Leaders Bible Study, or the Nations Knowledge Community. Transformation rarely happens alone.',
                href: '/bible-study',
                cta: 'Join a Community',
              },
              {
                title: 'Coaching',
                body: 'For founders and executives who want direct, high-accountability strategic work. Limited availability.',
                href: '/one-on-one',
                cta: 'Inquire About Coaching',
              },
              {
                title: 'Partnerships',
                body: 'If you lead an organization focused on workforce development, education, or economic transformation in Africa — let\'s talk.',
                href: '/contact',
                cta: 'Start a Conversation',
              },
              {
                title: 'Engagements',
                body: 'Speaking, advisory, and team training for leadership teams, organizations, and events.',
                href: '/book',
                cta: 'Request an Engagement',
              },
              {
                title: 'Institutions',
                body: 'If you are building in learning, leadership, or capital in Africa, there may be an opportunity to collaborate across the ecosystem.',
                href: '/contact',
                cta: 'Explore Collaboration',
              },
            ].map((item) => (
              <article key={item.title} className="bg-white border border-black/5 rounded-2xl p-6 flex flex-col">
                <h3 className="text-base font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-1">{item.body}</p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex text-sm font-semibold text-primary hover:text-accent"
                >
                  {item.cta} →
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* ── 10. Final CTA ────────────────────────────────────── */}
        <section className="bg-primary text-white rounded-2xl p-10 md:p-14 text-center">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">
            Andrew Tugume
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold max-w-2xl mx-auto leading-snug">
            Let's Build the Future Together
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto leading-relaxed">
            If you are serious about your development, your organization, or Africa's future —
            there is a program, a community, or a conversation for you here.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-semibold text-primary hover:bg-accent/90"
            >
              Apply for Coaching
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white hover:border-white"
            >
              Explore Programs
            </Link>
          </div>
        </section>

      </div>
    </>
  )
}
