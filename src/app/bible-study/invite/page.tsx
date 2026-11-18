import React from 'react'
import type { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/seo/schema'
import BookingForm from '@/components/BookingForm'
import PageHero from '@/components/PageHero'
import { bibleStudy, brand } from '@/lib/brand'

export const metadata: Metadata = {
  title: 'Invite Andrew Tugume to Teach',
  description:
    'Invite Andrew Tugume to teach or preach at your church, ministry, fellowship, university, conference or retreat.',
  alternates: {
    canonical: 'https://andrewtugume.com/bible-study/invite'
  }
}

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
              { name: bibleStudy.name, url: 'https://andrewtugume.com/bible-study' },
              { name: 'Invite Andrew', url: 'https://andrewtugume.com/bible-study/invite' }
            ])
          )
        }}
      />

      <div className="fullbleed bg-[#FBF8F2]">
        <PageHero
          theme="scripture"
          eyebrow={bibleStudy.name}
          title="Invite Andrew to teach."
          intro="Share the details of your gathering. Andrew’s team will reply about availability — no invitation is confirmed until you hear back."
        />

        <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-scripture">Who can invite</h2>
                <ul className="mt-3 space-y-1.5 text-gray-800">
                  {hosts.map((host) => (
                    <li key={host}>{host}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-scripture">Example seminar themes</h2>
                <ul className="mt-3 space-y-1.5 text-gray-800">
                  {bibleStudy.seminarThemes.map((theme) => (
                    <li key={theme}>{theme} Seminar</li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-gray-700">Teaching can also draw on any of the four study tracks.</p>
              </div>
              <div className="text-sm text-gray-700">
                <p>Prefer to write directly?</p>
                <p className="mt-1">
                  <a href={`mailto:${brand.email}?subject=Teaching%20invitation`}>{brand.email}</a>
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-scripture/15">
              <BookingForm variant="ministry" />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
