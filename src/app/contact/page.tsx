import React from 'react'
import { pageMetadata } from '@/lib/seo/metadata'
import { generateBreadcrumbSchema } from '@/lib/seo/schema'
import ContactForm from '@/components/ContactForm'

export const metadata = pageMetadata({
  title: 'Contact Andrew Tugume',
  description: 'Contact Andrew Tugume about WorkMasters, InfluenceMasters, Bible Study, speaking or partnerships — by form, email or WhatsApp.',
  path: '/contact',
  absolute: true,
})

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://andrewtugume.com' },
              { name: 'Contact', url: 'https://andrewtugume.com/contact' }
            ])
          )
        }}
      />

      <div className="space-y-10 max-w-5xl mx-auto">
        <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-semibold text-primary">Contact</h1>
          <p className="mt-4 text-gray-700">Questions about WorkMasters, InfluenceMasters, Bible Study, speaking or partnerships — send a note below.</p>
        </section>

        <section className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <ContactForm showOrganisation />
          <div className="space-y-6">
            <div className="bg-white border border-black/5 rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-primary">Direct contact</h2>
              <div className="mt-3 space-y-2 text-sm text-gray-700">
                <div><a href="mailto:andrewtugume2@gmail.com" className="hover:text-primary">andrewtugume2@gmail.com</a></div>
                <div><a href="tel:+256755017384" className="hover:text-primary">+256 755 017 384</a></div>
              </div>
            </div>
            <div className="bg-primary text-white rounded-2xl p-6">
              <h2 className="text-lg font-semibold">Looking for a programme?</h2>
              <p className="mt-2 text-white/80 text-sm">See every programme and its current status.</p>
              <div className="mt-4">
                <a href="/programs" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-primary hover:bg-white/90 hover:no-underline">
                  Explore Programmes
                </a>
              </div>
            </div>
            <div className="bg-white border border-black/5 rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-primary">Specific requests</h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="/speaking#book">Book Andrew to speak</a></li>
                <li><a href="/bible-study/invite">Invite Andrew to teach</a></li>
                <li><a href="/ecosystem#partner">Partnership enquiry</a></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
