import React from 'react'
import Link from 'next/link'
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo/schema'
import { pageMetadata } from '@/lib/seo/metadata'
import FaqList from '@/components/FaqList'
import PageHero from '@/components/PageHero'
import { bibleStudy, generalFaqs, influencemasters, workmasters } from '@/lib/brand'

export const metadata = pageMetadata({
  title: 'FAQ — About Andrew Tugume & His Programmes',
  description: 'Answers to common questions about Andrew Tugume, WorkMasters, InfluenceMasters, Bible Study with Andrew Tugume, speaking invitations and how to get in touch.',
  path: '/faq',
  absolute: true,
})

const groups = [
  { id: 'about-andrew', title: 'About Andrew Tugume', faqs: generalFaqs, href: '/about' },
  { id: 'workmasters', title: 'WorkMasters', faqs: workmasters.faqs, href: '/workmasters' },
  { id: 'influencemasters', title: 'InfluenceMasters', faqs: influencemasters.faqs, href: '/influencemasters' },
  { id: 'bible-study', title: 'Bible Study with Andrew Tugume', faqs: bibleStudy.faqs, href: '/bible-study' },
]

export default function FaqPage() {
  const allFaqs = groups.flatMap((group) => group.faqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(allFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://andrewtugume.com' },
              { name: 'FAQ', url: 'https://andrewtugume.com/faq' }
            ])
          )
        }}
      />

      <div className="fullbleed">
        <PageHero
          eyebrow="Frequently Asked Questions"
          title="Questions, answered."
          intro="Who Andrew is, what each initiative offers, and how to take part, book a talk or get in touch."
        />

        <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            <nav aria-label="FAQ topics" className="flex flex-wrap gap-2">
              {groups.map((group) => (
                <a key={group.id} href={`#${group.id}`} className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-primary hover:border-accent hover:no-underline">
                  {group.title}
                </a>
              ))}
            </nav>

            <div className="mt-12 space-y-16">
              {groups.map((group) => (
                <section key={group.id} id={group.id}>
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                    <h2 className="text-2xl md:text-3xl font-semibold text-primary">{group.title}</h2>
                    <Link href={group.href} className="text-sm font-semibold">Learn more →</Link>
                  </div>
                  <div className="mt-6">
                    <FaqList faqs={group.faqs} schema={false} />
                  </div>
                </section>
              ))}
            </div>

            <p className="mt-16 text-gray-700">
              Still have a question? <Link href="/contact" className="font-semibold">Get in touch</Link>.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
