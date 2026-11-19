import React from 'react'
import { pageMetadata } from '@/lib/seo/metadata'
import Link from 'next/link'
import { generateBreadcrumbSchema } from '@/lib/seo/schema'
import ContactForm from '@/components/ContactForm'
import EcosystemOverview from '@/components/EcosystemOverview'
import PageHero from '@/components/PageHero'
import SectionHeading from '@/components/SectionHeading'
import { capitalDimensions, ecosystem, initiatives, partnershipTypes } from '@/lib/brand'

export const metadata = pageMetadata({
  title: 'Ecosystem: Qraft Group & Future of Work Forum',
  description: 'How WorkMasters, InfluenceMasters and Bible Study connect to Qraft Group (Rata Qraft Solutions Limited), Qraft Academy, Qraft Capital and the Future of Work Forum.',
  path: '/ecosystem',
})

const initiativeColours = {
  work: 'border-work-accent',
  influence: 'border-influence',
  scripture: 'border-scripture',
}

export default function Ecosystem() {
  const { qraftGroup, futureOfWorkForum } = ecosystem

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://andrewtugume.com' },
              { name: 'My Ecosystem', url: 'https://andrewtugume.com/ecosystem' }
            ])
          )
        }}
      />

      <div className="fullbleed">
        <PageHero
          eyebrow="My Ecosystem"
          title="One purpose, several connected initiatives."
          intro="My personal-brand work sits alongside a corporate business and a wider ecosystem initiative. Each has its own role — here is how they fit together."
        >
          <a href="#partner" className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-semibold text-primary hover:bg-[#D6B566] hover:no-underline">
            Partner with Andrew
          </a>
        </PageHero>

        {/* Structure diagram */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              eyebrow="How It Fits Together"
              title="Three layers, clearly distinguished."
              intro="Ownership and collaboration are different things. This map shows which is which."
            />

            <figure className="mt-12" aria-label="Ecosystem structure">
              <ol className="space-y-4">
                <li className="rounded-3xl bg-primary p-6 md:p-8 text-white">
                  <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">1 · Personal brand — AndrewTugume.com</p>
                  <div className="mt-5 grid gap-4 md:grid-cols-3">
                    {initiatives.map((initiative) => (
                      <Link
                        key={initiative.id}
                        href={initiative.href}
                        className={`block rounded-2xl border-l-4 ${initiativeColours[initiative.id]} bg-white/5 p-5 text-white hover:bg-white/10 hover:no-underline`}
                      >
                        <span className="block text-lg font-semibold">{initiative.name}</span>
                        <span className="mt-1 block text-sm text-white/75">{initiative.category}</span>
                      </Link>
                    ))}
                  </div>
                </li>

                <li className="rounded-3xl border border-black/10 bg-white p-6 md:p-8">
                  <p className="text-xs font-semibold tracking-[0.2em] text-gray-600 uppercase">
                    2 · Corporate business — {qraftGroup.relationship.toLowerCase()}
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-primary">
                    {qraftGroup.name} <span className="text-base font-normal text-gray-700">({qraftGroup.legalName})</span>
                  </p>
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    {qraftGroup.businesses.map((business) => (
                      <a key={business.id} href={`#${business.id}`} className="block rounded-2xl bg-[#F7F6F2] p-5 hover:no-underline">
                        <span className="block text-lg font-semibold text-primary">{business.name}</span>
                        <span className="mt-1 block text-sm text-gray-700">{business.category} · {business.programmes.join(', ')}</span>
                      </a>
                    ))}
                  </div>
                </li>

                <li className="rounded-3xl border border-dashed border-black/20 bg-white p-6 md:p-8">
                  <p className="text-xs font-semibold tracking-[0.2em] text-gray-600 uppercase">
                    3 · {futureOfWorkForum.relationship}
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-primary">{futureOfWorkForum.name}</p>
                  <p className="mt-1 text-sm text-gray-700">{futureOfWorkForum.category} · {futureOfWorkForum.programmes.join(', ')}</p>
                </li>
              </ol>
              <figcaption className="mt-4 text-sm text-gray-700">
                Solid borders show ownership; the dashed border shows a connected initiative and strategic collaboration.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Four dimensions */}
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <SectionHeading eyebrow="Four Dimensions" title="Developing capital at every level." />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {capitalDimensions.map((dimension) => (
                <div key={dimension.title} className="rounded-2xl border border-black/5 bg-[#F7F6F2] p-6">
                  <h3 className="text-lg font-semibold text-primary">{dimension.title}</h3>
                  <p className="mt-2 text-sm text-gray-700">{dimension.body}</p>
                  <p className="mt-4 text-sm font-semibold text-primary">{dimension.home}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detail */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <SectionHeading eyebrow="The Connected Initiatives" title="Qraft Group and the Future of Work Forum." />
            <div className="mt-10">
              <EcosystemOverview detailed />
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section className="bg-primary px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <SectionHeading tone="dark" eyebrow="Collaborate" title="Ways to work together." />
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {partnershipTypes.map((type) => (
                <div key={type.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold text-white">{type.title}</h3>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed">{type.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="partner" className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionHeading
                eyebrow="Partner with Andrew"
                title="Start a conversation."
                intro="Tell us about your organisation and what you have in mind."
              />
              <p className="mt-6 text-sm text-gray-700">
                Booking a talk? Use the <Link href="/speaking#book">speaking request form</Link>. Inviting Andrew to teach
                at a church or ministry? Use the <Link href="/bible-study/invite">teaching invitation form</Link>.
              </p>
            </div>
            <ContactForm
              heading="Partnership enquiry"
              subjectLabel="Type of partnership"
              subjects={partnershipTypes.map((type) => type.title)}
              showOrganisation
              submitLabel="Send enquiry"
            />
          </div>
        </section>
      </div>
    </>
  )
}
