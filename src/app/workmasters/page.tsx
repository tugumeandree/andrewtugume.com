import React from 'react'
import { pageMetadata } from '@/lib/seo/metadata'
import Link from 'next/link'
import { generateBreadcrumbSchema } from '@/lib/seo/schema'
import ContactForm from '@/components/ContactForm'
import FaqList from '@/components/FaqList'
import OfferTile from '@/components/OfferTile'
import PageHero from '@/components/PageHero'
import SectionHeading from '@/components/SectionHeading'
import StepList from '@/components/StepList'
import SubscribeForm from '@/components/SubscribeForm'
import { workmasters } from '@/lib/brand'

export const metadata = pageMetadata({
  title: 'WorkMasters: Productivity & Offer Building',
  description: 'WorkMasters helps professionals, consultants and founders turn skills into valuable offers, productive systems and income-generating assets.',
  path: '/workmasters',
  image: '/workmasters/opengraph-image',
})

const offerById = (id: string) => workmasters.offers.find((offer) => offer.id === id)!
const advancedOffers = ['worksmart', 'offers', 'advisory'].map(offerById)
const live = offerById('live')
const circle = offerById('circle')

export default function WorkMasters() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://andrewtugume.com' },
              { name: 'WorkMasters', url: 'https://andrewtugume.com/workmasters' }
            ])
          )
        }}
      />

      <div className="fullbleed">
        <PageHero theme="work" eyebrow={`WorkMasters · ${workmasters.category}`} title={workmasters.promise} intro={workmasters.philosophy}>
          <a href="#live" className="inline-flex items-center justify-center rounded-full bg-work-accent px-8 py-4 text-base font-semibold text-work hover:bg-white hover:no-underline">
            Start with WorkMasters LIVE
          </a>
          <a href="#offers-catalogue" className="inline-flex items-center justify-center rounded-full border border-white/50 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 hover:no-underline">
            See all programmes
          </a>
        </PageHero>

        {/* Audience and problem */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Who WorkMasters Serves" title="For people with valuable skills." />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {workmasters.audience.map((item) => (
                  <li key={item} className="rounded-xl bg-white border border-black/5 px-4 py-3 text-gray-800">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading eyebrow="The Productive-Capital Problem" title="Skill alone does not create value." />
              <p className="mt-6 text-gray-700">Many capable people struggle to:</p>
              <ul className="mt-4 space-y-2 text-gray-800">
                {workmasters.problems.map((problem) => (
                  <li key={problem} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-work-accent" aria-hidden="true" />
                    {problem}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Method */}
        <section className="bg-work-light px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              eyebrow="The Method"
              title="The Work Value Engine"
              intro="Seven steps from what you know to work that creates lasting value."
            />
            <div className="mt-10">
              <StepList steps={workmasters.engine} numberClassName="text-work-text" />
            </div>
          </div>
        </section>

        {/* Free entry point */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              eyebrow="Start Here"
              title="Learn monthly. Gather in person."
              intro="WorkMasters LIVE and CIRCLE happen in the same week each month — one online and open to all, one in person and by invitation."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <OfferTile offer={live} accent="work" />
              <OfferTile offer={circle} accent="work" />
            </div>
          </div>
        </section>

        {/* Catalogue */}
        <section id="offers-catalogue" className="bg-white px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              eyebrow="Go Further"
              title="Training, implementation and advisory."
              intro="Practical programmes for building productive systems, valuable offers and greater leverage."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {advancedOffers.map((offer) => (
                <OfferTile key={offer.id} offer={offer} accent="work" />
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-700">
              The Offer Accelerator builds on the{' '}
              <Link href="/mastermind" className="font-semibold">Make More &amp; Better Offers mastermind</Link>.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            <SectionHeading eyebrow="FAQs" title="Questions about WorkMasters" />
            <div className="mt-8">
              <FaqList faqs={workmasters.faqs} />
            </div>
          </div>
        </section>

        {/* Enquiry */}
        <section id="enquire" className="bg-work px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                tone="dark"
                eyebrow="Get Involved"
                title="Register your interest."
                intro="Tell us what you’re interested in and Andrew’s team will follow up with dates, details and availability."
              />
              <div className="mt-8 rounded-2xl border border-white/15 p-6">
                <h3 className="text-lg font-semibold text-white">Just want the WorkMasters LIVE dates?</h3>
                <p className="mt-1 mb-4 text-sm text-white/75">Leave your email and we’ll send them when they’re confirmed.</p>
                <SubscribeForm tone="dark" cta="Send me the dates" interest="WorkMasters LIVE" />
              </div>
            </div>
            <ContactForm
              heading="WorkMasters enquiry"
              subjectLabel="I’m interested in"
              subjects={workmasters.offers.map((offer) => offer.name)}
              showOrganisation
              messageRequired={false}
              submitLabel="Send enquiry"
            />
          </div>
        </section>
      </div>
    </>
  )
}
