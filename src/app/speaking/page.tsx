import React from 'react'
import type { Metadata } from 'next'
import { generateBreadcrumbSchema, generatePersonSchema } from '@/lib/seo/schema'
import Link from 'next/link'
import Button from '@/components/Button'
import BookingForm from '@/components/BookingForm'
import CopyButton from '@/components/CopyButton'
import PageHero from '@/components/PageHero'
import SectionHeading from '@/components/SectionHeading'
import TalkCard from '@/components/TalkCard'
import {
  appearances,
  audiences,
  bios,
  brand,
  engagementFormats,
  signatureTalks
} from '@/lib/brand'

export const metadata: Metadata = {
  title: 'Book Andrew Tugume to Speak — Keynotes, Panels & Podcasts',
  description:
    'Book Andrew Tugume for keynotes, panels, workshops, corporate training, and podcast interviews on the future of work, leadership, technology, and capital in Africa.',
  alternates: {
    canonical: 'https://andrewtugume.com/speaking'
  },
  openGraph: {
    title: 'Book Andrew Tugume to Speak',
    description: 'Keynotes, panels, workshops, and podcast interviews on the future of work, leadership, technology, and capital.',
    url: 'https://andrewtugume.com/speaking',
    type: 'profile',
    images: [{ url: brand.images.headshot, width: 1200, height: 630, alt: brand.name }]
  }
}

// Cloudinary serves the original file as a download with fl_attachment
const downloadUrl = (url: string) => url.replace('/upload/', '/upload/fl_attachment/')

const headshots = [
  { label: 'Portrait headshot', src: brand.images.headshot },
  { label: 'Landscape feature photo', src: brand.images.portrait },
]

const steps = [
  { title: 'Send your request', body: 'Share the event, audience, date, and format using the form below.' },
  { title: 'Confirm fit & availability', body: 'Andrew’s team confirms availability, fee, and logistics.' },
  { title: 'Tailor the session', body: 'A short briefing call shapes the talk around your audience and goals.' },
  { title: 'Deliver & follow through', body: 'Andrew delivers, and your audience gets resources to keep going.' },
]

export default function Speaking() {
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
              { name: 'Speaking', url: 'https://andrewtugume.com/speaking' }
            ])
          )
        }}
      />

      <div className="fullbleed">
        <PageHero
          eyebrow="Speaking · Podcasts · Media"
          title="Develop potential. Create value. Live with purpose."
          intro="Andrew Tugume brings the perspective of an educator, technologist and investor to conferences, leadership teams, universities and podcasts — with ideas audiences can act on the next morning."
          image={brand.images.headshot}
        >
          <Button asLink href="#book" variant="accent" size="lg" className="hover:no-underline">Book Andrew</Button>
          <Button asLink href="#media-kit" variant="ghost" size="lg" className="hover:no-underline">Download media kit</Button>
        </PageHero>

        {/* Signature talks */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              eyebrow="Signature Talks"
              title="Topics Andrew speaks on."
              intro="Every talk is tailored to your audience. These are starting points — custom topics are welcome."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {signatureTalks.map((talk, index) => (
                <TalkCard key={talk.title} talk={talk} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Formats and audiences */}
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <SectionHeading eyebrow="Formats" title="Ways to engage." />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {engagementFormats.map((format) => (
                  <div key={format.title} className="rounded-2xl border border-black/5 bg-[#F7F6F2] p-6">
                    <h3 className="text-lg font-semibold text-primary">{format.title}</h3>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">{format.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading eyebrow="Audiences" title="Who books Andrew." />
              <ul className="mt-8 divide-y divide-black/5 border-y border-black/5">
                {audiences.map((audience) => (
                  <li key={audience} className="flex items-center gap-3 py-3 text-gray-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                    {audience}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Past stages — hidden until appearances are added in src/lib/brand.ts */}
        {appearances.length > 0 && (
          <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="max-w-6xl mx-auto">
              <SectionHeading eyebrow="Stages & Platforms" title="Where Andrew has spoken." />
              <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {appearances.map((appearance) => (
                  <li key={`${appearance.name}-${appearance.date}`} className="rounded-2xl border border-black/5 bg-white p-6">
                    <p className="text-xs font-semibold tracking-[0.15em] text-accent uppercase">
                      {appearance.type}{appearance.date ? ` · ${appearance.date}` : ''}
                    </p>
                    {appearance.href ? (
                      <a href={appearance.href} target="_blank" rel="noopener noreferrer" className="mt-2 block text-lg font-semibold text-primary">
                        {appearance.name} →
                      </a>
                    ) : (
                      <p className="mt-2 text-lg font-semibold text-primary">{appearance.name}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Process */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <SectionHeading eyebrow="How Booking Works" title="Simple from request to stage." />
            <ol className="mt-10 grid gap-6 md:grid-cols-4">
              {steps.map((step, index) => (
                <li key={step.title} className="border-t-2 border-accent pt-5">
                  <p className="text-sm font-semibold text-accent">Step {index + 1}</p>
                  <h3 className="mt-2 text-lg font-semibold text-primary">{step.title}</h3>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Booking form */}
        <section id="book" className="bg-primary px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionHeading
                tone="dark"
                eyebrow="Booking Request"
                title="Invite Andrew to your event or show."
                intro="Tell us about your event, podcast, or team. The more detail you share, the faster we can confirm."
              />
              <div className="mt-10 space-y-4 text-sm text-white/80">
                <p className="text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">Prefer to reach out directly?</p>
                <p>
                  <a href={`mailto:${brand.email}?subject=Speaking%20invitation`} className="text-white hover:text-accent">{brand.email}</a>
                </p>
                <p>
                  <a href={brand.whatsapp} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent">
                    WhatsApp {brand.phone}
                  </a>
                </p>
                <p className="text-white/75">{brand.location}</p>
                <p className="pt-4 text-white/75">
                  Inviting Andrew to teach or preach at a church or ministry?{' '}
                  <Link href="/bible-study/invite" className="text-white underline hover:text-accent">Use the teaching invitation form</Link>.
                </p>
              </div>
            </div>
            <BookingForm />
          </div>
        </section>

        {/* Media kit */}
        <section id="media-kit" className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              eyebrow="Media Kit"
              title="Everything hosts and organizers need."
              intro="Approved bios and photos for event programs, podcast show notes, and promotion."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
              <div className="space-y-6">
                <article className="rounded-2xl border border-black/5 bg-white p-6 md:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-primary">Short bio</h3>
                    <CopyButton text={bios.short} />
                  </div>
                  <p className="mt-4 text-sm text-gray-700 leading-relaxed">{bios.short}</p>
                </article>
                <article className="rounded-2xl border border-black/5 bg-white p-6 md:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-primary">Full bio</h3>
                    <CopyButton text={bios.long} />
                  </div>
                  <div className="mt-4 space-y-3 text-sm text-gray-700 leading-relaxed">
                    {bios.long.split('\n\n').map((paragraph) => (
                      <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                    ))}
                  </div>
                </article>
                <article className="rounded-2xl border border-black/5 bg-white p-6 md:p-8">
                  <h3 className="text-lg font-semibold text-primary">Introduction line</h3>
                  <p className="mt-4 text-sm text-gray-700 leading-relaxed italic">
                    “Please welcome {brand.name} — educator, technologist and investor, founder of WorkMasters,
                    InfluenceMasters and Bible Study with Andrew Tugume, here to help us develop our potential, create
                    value and live with purpose.”
                  </p>
                </article>
              </div>

              <div className="space-y-6">
                {headshots.map((photo) => (
                  <figure key={photo.src} className="overflow-hidden rounded-2xl border border-black/5 bg-white">
                    <img src={photo.src} alt={`${brand.name} — ${photo.label}`} className="aspect-[4/3] w-full object-cover" />
                    <figcaption className="flex items-center justify-between gap-4 p-4">
                      <span className="text-sm font-semibold text-primary">{photo.label}</span>
                      <a
                        href={downloadUrl(photo.src)}
                        className="rounded-full border border-black/10 px-4 py-1.5 text-xs font-semibold text-primary hover:border-accent hover:no-underline"
                      >
                        Download
                      </a>
                    </figcaption>
                  </figure>
                ))}
                <div className="rounded-2xl border border-black/5 bg-white p-6">
                  <h3 className="text-sm font-semibold text-primary">Handles for promotion</h3>
                  <ul className="mt-3 space-y-1 text-sm">
                    {brand.socials.map((social) => (
                      <li key={social.href}>
                        <a href={social.href} target="_blank" rel="noopener noreferrer">{social.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
