import React from 'react'
import { pageMetadata } from '@/lib/seo/metadata'
import Link from 'next/link'
import { generateBreadcrumbSchema } from '@/lib/seo/schema'
import { getAllPosts } from '@/lib/blog/posts'
import ContactForm from '@/components/ContactForm'
import FaqList from '@/components/FaqList'
import OfferTile from '@/components/OfferTile'
import PageHero from '@/components/PageHero'
import SectionHeading from '@/components/SectionHeading'
import StepList from '@/components/StepList'
import { influencemasters } from '@/lib/brand'

export const metadata = pageMetadata({
  title: 'InfluenceMasters: Thought Leadership Training',
  description: 'Discover your voice, develop original ideas and build credible authority. InfluenceMasters helps experts and leaders turn knowledge into influence.',
  path: '/influencemasters',
  image: '/influencemasters/opengraph-image',
})

export default async function InfluenceMasters() {
  const posts = (await getAllPosts()).slice(0, 3)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://andrewtugume.com' },
              { name: 'InfluenceMasters', url: 'https://andrewtugume.com/influencemasters' }
            ])
          )
        }}
      />

      <div className="fullbleed">
        <PageHero theme="influence" eyebrow={`InfluenceMasters · ${influencemasters.category}`} title={influencemasters.promise} intro={influencemasters.definition}>
          <a href="#enquire" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-influence hover:bg-influence-light hover:no-underline">
            Join the interest list
          </a>
          <a href="#programmes" className="inline-flex items-center justify-center rounded-full border border-white/50 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 hover:no-underline">
            Explore the programmes
          </a>
        </PageHero>

        {/* Influence capital */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-influence uppercase">Influence Capital</p>
            <blockquote className="mt-6 font-display text-2xl md:text-4xl italic leading-snug text-primary">
              The credibility, intellectual assets, communication and relationships that enable people to extend their impact.
            </blockquote>
          </div>
        </section>

        {/* Audience and problems */}
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Who It Serves" title="For people whose ideas deserve a wider reach." />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {influencemasters.audience.map((item) => (
                  <li key={item} className="rounded-xl bg-influence-light px-4 py-3 text-gray-800">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading eyebrow="The Problem" title="Expertise is not the same as influence." />
              <ul className="mt-8 space-y-2 text-gray-800">
                {influencemasters.problems.map((problem) => (
                  <li key={problem} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-influence" aria-hidden="true" />
                    {problem}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Method */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              eyebrow="The Method"
              title="The Influence Asset Cycle"
              intro="Six stages for turning what you know into influence that lasts."
            />
            <div className="mt-10">
              <StepList steps={influencemasters.cycle} numberClassName="text-influence" />
            </div>
          </div>
        </section>

        {/* Programmes */}
        <section id="programmes" className="bg-influence-light px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              eyebrow="Programmes & Services"
              title="Ways to develop your influence."
              intro="InfluenceMasters programmes are being prepared. Join the interest list to hear first when places open."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {influencemasters.offers.map((offer) => (
                <OfferTile key={offer.id} offer={offer} accent="influence" />
              ))}
            </div>
          </div>
        </section>

        {/* Articles */}
        {posts.length > 0 && (
          <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <SectionHeading eyebrow="Articles" title="Ideas in writing." />
                <Link href="/resources" className="shrink-0 text-sm font-semibold text-influence">All resources →</Link>
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {posts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="block rounded-2xl border border-black/5 bg-white p-6 hover:border-influence/40 hover:no-underline">
                    <h3 className="font-display text-xl font-semibold text-primary">{post.title}</h3>
                    {post.summary && <p className="mt-2 text-sm text-gray-700">{post.summary}</p>}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQs */}
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            <SectionHeading eyebrow="FAQs" title="Questions about InfluenceMasters" />
            <div className="mt-8">
              <FaqList faqs={influencemasters.faqs} />
            </div>
          </div>
        </section>

        {/* Interest list */}
        <section id="enquire" className="bg-influence px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              tone="dark"
              eyebrow="Interest List"
              title="Be first to know when places open."
              intro="Tell us which programme interests you. Andrew’s team will contact you as details are confirmed."
            />
            <ContactForm
              heading="InfluenceMasters interest"
              subjectLabel="I’m interested in"
              subjects={influencemasters.offers.map((offer) => offer.name)}
              showOrganisation
              messageRequired={false}
              submitLabel="Join the interest list"
            />
          </div>
        </section>
      </div>
    </>
  )
}
