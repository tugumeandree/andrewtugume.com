import React from 'react'
import Link from 'next/link'
import { pageMetadata } from '@/lib/seo/metadata'
import { generateBreadcrumbSchema } from '@/lib/seo/schema'
import BookingForm from '@/components/BookingForm'
import PageHero from '@/components/PageHero'
import { brand, faithmasters, workplaceTraining } from '@/lib/brand'

export const metadata = pageMetadata({
  title: 'Invite Andrew Tugume to Teach or Preach | FaithMasters',
  description: 'Invite Andrew Tugume to teach or preach at your church, ministry, fellowship, university, conference or retreat.',
  path: '/faithmasters/invite',
  absolute: true,
  image: '/faithmasters/opengraph-image',
})

const hosts = [
  'Churches',
  'Ministries',
  'Christian fellowships',
  'Universities and student groups',
  'Christian professional associations',
  'Conferences and retreats',
  'Community organisations',
]

export default function InvitePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://andrewtugume.com' },
              { name: faithmasters.name, url: 'https://andrewtugume.com/faithmasters' },
              { name: 'Invite Andrew', url: 'https://andrewtugume.com/faithmasters/invite' }
            ])
          )
        }}
      />

      <div>
        <PageHero
          theme="faith"
          eyebrow={`${faithmasters.name} · ${faithmasters.byline}`}
          title="Invite Andrew to teach."
          intro="Share the details of your gathering. Andrew’s team will reply about availability — no invitation is confirmed until you hear back."
        />

        <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-faith-teal">Who can invite</h2>
                <ul className="mt-3 space-y-1.5 text-faith-slate">
                  {hosts.map((host) => (
                    <li key={host}>{host}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-faith-teal">Example seminar themes</h2>
                <ul className="mt-3 space-y-1.5 text-faith-slate">
                  {faithmasters.seminarThemes.map((theme) => (
                    <li key={theme}>{theme} Seminar</li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-faith-sage">
                  Teaching can also draw on any of the <Link href="/faithmasters#tracks" className="underline">four tracks</Link>.
                </p>
              </div>
              <div className="text-sm text-faith-sage">
                <p>
                  Planning training for a company or team?{' '}
                  <Link href={workplaceTraining.href} className="underline">Request Workplace Training</Link>
                </p>
                <p className="mt-4">Prefer to write directly?</p>
                <p className="mt-1">
                  <a href={`mailto:${brand.email}?subject=Teaching%20invitation`}>{brand.email}</a>
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-black/10">
              <BookingForm variant="ministry" />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
