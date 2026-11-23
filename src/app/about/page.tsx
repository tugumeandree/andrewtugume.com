import React from 'react'
import { pageMetadata } from '@/lib/seo/metadata'
import Link from 'next/link'
import { generateBreadcrumbSchema } from '@/lib/seo/schema'
import { profilePageSchema } from '@/lib/seo/graph'
import EcosystemOverview from '@/components/EcosystemOverview'
import { bookingHref, brand, cld, facts, initiatives } from '@/lib/brand'

export const metadata = pageMetadata({
  title: 'About Andrew Tugume | Educator, Technologist & Investor',
  description: 'Meet Andrew Tugume, a Kampala-based educator, technologist and investor and founder of WorkMasters, InfluenceMasters and Qraft Group.',
  path: '/about',
  absolute: true,
  type: 'profile',
})

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


export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema()) }}
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
              src={cld(brand.images.headshot, 400)}
              alt={`Portrait of ${brand.name}`}
              width={192}
              height={192}
              className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1 text-center md:text-left">
              <p className="text-sm font-semibold tracking-widest text-accent uppercase">
                Andrew Tugume — Educator. Technologist. Investor.
              </p>
              <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-primary max-w-2xl leading-tight">
                I help people discover what they carry, develop what they know and put it to meaningful use.
              </h1>
              <p className="mt-5 text-lg text-gray-700 max-w-2xl leading-relaxed">
                I’m Andrew Tugume — an educator, technologist and investor based in {brand.location}. Through
                practical education, productive work, intellectual development and biblical teaching, I help
                people develop their potential, create value and live with purpose.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Link
                  href="/#initiatives"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white hover:bg-black"
                >
                  Explore My Work
                </Link>
                <Link
                  href={bookingHref}
                  className="inline-flex items-center justify-center rounded-full border border-primary px-7 py-3 text-sm font-semibold text-primary hover:bg-black hover:text-white"
                >
                  Book Andrew to Speak
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── At a glance (direct facts for search and answer engines) ── */}
        <section aria-labelledby="at-a-glance" className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
          <h2 id="at-a-glance" className="text-sm font-semibold tracking-widest text-accent uppercase">Andrew Tugume at a glance</h2>
          <dl className="mt-6 grid gap-x-10 gap-y-4 md:grid-cols-2">
            {facts.map((fact) => (
              <div key={fact.label} className="border-t border-black/5 pt-4">
                <dt className="text-xs font-semibold tracking-wide text-gray-600 uppercase">{fact.label}</dt>
                <dd className="mt-1 text-gray-800">{fact.value}</dd>
              </div>
            ))}
          </dl>

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

        {/* ── 6. My Work ───────────────────────────────────────── */}
        <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">My Work</p>
          <h2 className="mt-3 text-3xl font-semibold text-primary max-w-2xl leading-snug">
            Three initiatives, one purpose.
          </h2>
          <p className="mt-4 text-gray-700 max-w-3xl leading-relaxed">
            WorkMasters and InfluenceMasters make up my Personal Capital Development work — helping people develop
            productive capital and influence capital. FaithMasters is distinct: it is Bible teaching, grounded in
            Scripture, and its public library is free and never depends on joining a commercial programme.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {initiatives.map((initiative) => (
              <Link
                key={initiative.id}
                href={initiative.href}
                className="block rounded-xl border border-black/5 p-6 hover:border-accent/40 hover:no-underline"
              >
                <span className="block text-xs font-semibold tracking-widest text-gray-600 uppercase">{initiative.category}</span>
                <span className="mt-2 block text-lg font-semibold text-primary">{initiative.name} →</span>
                <span className="mt-2 block text-sm text-gray-700">{initiative.summary}</span>
              </Link>
            ))}
          </div>

          <h3 className="mt-12 text-xl font-semibold text-primary">The wider ecosystem</h3>
          <p className="mt-2 mb-6 text-gray-700 max-w-3xl">
            Alongside my personal-brand work, I founded Rata Qraft Solutions Limited (Qraft Group), and my work
            connects to the Future of Work Forum.
          </p>
          <EcosystemOverview />
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
                  'Led technical teams through the full cycle of product development, from problem definition to architecture to production — in markets where infrastructure is rarely predictable.',
              },
              {
                area: 'Leadership Development',
                detail:
                  'Developed leadership programmes for organisations and communities, grounded in governance, accountability, and character formation.',
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
              My faith shapes how I think about work, stewardship, and service. It is the reason{' '}
              <Link href="/faithmasters">FaithMasters</Link> exists — because I believe the principles in
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
              Ways to engage with my work.
            </h2>
            <p className="mt-4 text-gray-700 max-w-2xl leading-relaxed">
              There are several ways to engage — depending on where you are and what you are building.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'WorkMasters',
                body: 'Develop productive capital — turn your skills and expertise into valuable offers, productive systems and income-generating assets.',
                href: '/workmasters',
                cta: 'Explore WorkMasters',
              },
              {
                title: 'InfluenceMasters',
                body: 'Develop influence capital — your voice, original ideas and credible authority.',
                href: '/influencemasters',
                cta: 'Explore InfluenceMasters',
              },
              {
                title: 'FaithMasters',
                body: 'Study Scripture and its application to work, leadership, money, stewardship and relationships.',
                href: '/faithmasters',
                cta: 'Explore FaithMasters',
              },
              {
                title: 'Speaking',
                body: 'Keynotes, workshops, panels and podcast interviews for organisations and events.',
                href: bookingHref,
                cta: 'Book Andrew',
              },
              {
                title: 'Guest Teaching',
                body: 'Bible teaching and seminars for churches, ministries and Christian organisations.',
                href: '/faithmasters/invite',
                cta: 'Invite Andrew to teach',
              },
              {
                title: 'Partnerships',
                body: 'Collaborate on programmes, events, sponsorship, media or institutional initiatives.',
                href: '/ecosystem#partner',
                cta: 'Start a conversation',
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
            What Will You Develop Next?
          </h2>
          <p className="mt-4 text-white/75 max-w-xl mx-auto leading-relaxed">
            Explore the programmes, study the Bible with us, or start a conversation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/programs"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-semibold text-primary hover:bg-accent/90"
            >
              Explore Programmes
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white hover:border-white"
            >
              Get in Touch
            </Link>
          </div>
        </section>

      </div>
    </>
  )
}
