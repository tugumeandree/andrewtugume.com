import React from 'react'
import Link from 'next/link'
import { pageMetadata } from '@/lib/seo/metadata'
import { generateBreadcrumbSchema } from '@/lib/seo/schema'
import { getAllLessons, type LessonFormat } from '@/lib/faithmasters/lessons'
import ExternalLink from '@/components/faithmasters/ExternalLink'
import TeachingCard, { type LibraryItem } from '@/components/faithmasters/TeachingCard'
import TrackCard from '@/components/faithmasters/TrackCard'
import Wordmark from '@/components/faithmasters/Wordmark'
import { buttons, sectionTitle } from '@/components/faithmasters/styles'
import SubscribeForm from '@/components/SubscribeForm'
import { faithmasters, SITE_URL, workplaceTraining } from '@/lib/brand'

export const metadata = pageMetadata({
  title: 'FaithMasters | Bible Study with Andrew Tugume',
  description: 'Free Bible teachings on faith, relationships, wellbeing, work, leadership and stewardship. Study at your own pace or join the Friday online Bible study.',
  path: '/faithmasters',
  absolute: true,
  image: '/faithmasters/opengraph-image',
})

const gutter = 'px-4 sm:px-6 lg:px-8'
const inner = 'mx-auto max-w-6xl'

export default function FaithMastersPage() {
  const lessons = getAllLessons()
  const { weekly, youtubeChannelUrl, teachings, tracks } = faithmasters

  const library: LibraryItem[] = [
    ...lessons,
    ...teachings.map((teaching) => ({
      title: teaching.title,
      href: `https://www.youtube.com/watch?v=${teaching.youtubeId}`,
      scripture: teaching.scripture,
      summary: teaching.summary,
      formats: ['Watch'] as LessonFormat[],
    })),
  ]
  const featured = lessons.find((lesson) => lesson.featured) ?? library[0]
  // Older lessons stay reachable from their track
  const recent = library.filter((item) => item !== featured).slice(0, 6)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: SITE_URL },
              { name: faithmasters.name, url: `${SITE_URL}/faithmasters` }
            ])
          )
        }}
      />

      {/* Hero */}
      <section className={`bg-white py-10 md:py-16 ${gutter}`}>
        <div className={inner}>
          <p className="flex flex-col gap-1">
            <Wordmark className="text-2xl md:text-3xl" />
            <span className="text-faith-sage">{faithmasters.byline}</span>
          </p>
          <h1 className="mt-8 max-w-3xl text-4xl md:text-6xl font-semibold leading-[1.1] text-faith-teal">{faithmasters.tagline}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed">{faithmasters.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {lessons.length > 0 ? (
              <a href="#library" className={buttons.teal}>Explore the Free Library</a>
            ) : (
              <ExternalLink href={youtubeChannelUrl} className={buttons.teal}>Watch Bible Studies</ExternalLink>
            )}
            <a href="#weekly" className={buttons.outline}>Join the Friday Bible Study</a>
          </div>
        </div>
      </section>

      {/* Start studying */}
      <section id="library" className={`py-12 md:py-16 ${gutter}`}>
        <div className={inner}>
          <h2 className={sectionTitle}>Start studying</h2>

          {featured && (
            <div className="mt-6 grid gap-4">
              <TeachingCard item={featured} featured />
              {recent.length > 0 && (
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {recent.map((item) => (
                    <li key={item.href}>
                      <TeachingCard item={item} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          <div id="watch" className="mt-6 flex flex-col gap-5 rounded-xl bg-white p-5 md:p-8 ring-1 ring-black/10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-xl font-semibold text-faith-teal">{faithmasters.byline} on YouTube</h3>
              <p className="mt-2 leading-relaxed">
                Watch the teachings any time, free and without signing in. Then bring your questions to the Friday study.
              </p>
            </div>
            <ExternalLink href={youtubeChannelUrl} className={`${buttons.outline} shrink-0`}>Open the channel</ExternalLink>
          </div>
        </div>
      </section>

      {/* Four tracks */}
      <section id="tracks" className={`pb-12 md:pb-16 ${gutter}`}>
        <div className={inner}>
          <h2 className={sectionTitle}>Four teaching tracks</h2>
          <p className="mt-2 text-lg">{faithmasters.coreMessage}</p>
          <div className="mt-6 grid items-start gap-4 md:grid-cols-2">
            {tracks.map((track) => (
              <TrackCard
                key={track.id}
                track={track}
                lessons={lessons.filter((lesson) => lesson.track === track.id).map(({ title, href }) => ({ title, href }))}
              />
            ))}
          </div>
          <p className="mt-6 leading-relaxed">
            Want help applying leadership or stewardship teaching with your team?{' '}
            <Link href={workplaceTraining.href} className="font-semibold underline">Request Workplace Training</Link>
          </p>
        </div>
      </section>

      {/* Friday study */}
      <section id="weekly" className={`fm-on-teal bg-faith-teal text-white py-12 md:py-16 ${gutter}`}>
        <div className={`${inner} flex flex-col gap-6 md:flex-row md:items-center md:justify-between`}>
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold">{weekly.title}</h2>
            <p className="mt-2 text-lg font-medium">{weekly.when}</p>
            <p className="mt-2 leading-relaxed">Read Scripture together, ask questions and talk through what it means for the week ahead.</p>
          </div>
          <ExternalLink href={weekly.href} className={`${buttons.terracotta} shrink-0`}>Join on Google Meet</ExternalLink>
        </div>
      </section>

      {/* How we study */}
      <section className={`bg-white py-12 md:py-16 ${gutter}`}>
        <div className={inner}>
          <h2 className={sectionTitle}>How we study</h2>
          <ol className="mt-6 grid gap-6 md:grid-cols-3 md:gap-8">
            {faithmasters.approach.map((step) => (
              <li key={step.title} className="border-l-4 border-faith-terracotta pl-4">
                <h3 className="text-lg font-semibold text-faith-teal">{step.title}</h3>
                <p className="mt-1 leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Invitations and workplace training */}
      <section className={`py-12 md:py-16 ${gutter}`}>
        <div className={`${inner} grid gap-4 md:grid-cols-2`}>
          <div className="flex flex-col rounded-xl bg-white p-5 md:p-8 ring-1 ring-black/10">
            <h2 className="text-xl md:text-2xl font-semibold text-faith-teal">For churches, ministries and fellowships</h2>
            <p className="mt-2 flex-1 leading-relaxed">
              Ask Andrew to teach or preach at your service, conference, retreat, student group or fellowship.
            </p>
            <Link href="/faithmasters/invite" className={`${buttons.outline} mt-6 sm:self-start`}>Invite Andrew to Teach</Link>
          </div>
          <div id="workplace-training" className="flex flex-col rounded-xl bg-white p-5 md:p-8 ring-1 ring-black/10">
            <h2 className="text-xl md:text-2xl font-semibold text-faith-teal">For organisations and teams</h2>
            <p className="mt-2 flex-1 leading-relaxed">{workplaceTraining.description}</p>
            <Link href={workplaceTraining.href} className={`${buttons.teal} mt-6 sm:self-start`}>Request Workplace Training</Link>
          </div>
        </div>
      </section>

      {/* Optional updates */}
      <section className={`bg-white py-12 md:py-16 ${gutter}`}>
        <div className={`${inner} grid gap-6 md:grid-cols-2 md:items-center`}>
          <div>
            <h2 className={sectionTitle}>Get updates by email</h2>
            <p className="mt-2 leading-relaxed">Optional. Everything in the public library stays open without signing up.</p>
          </div>
          <SubscribeForm cta="Get updates" interest="FaithMasters" />
        </div>
      </section>
    </>
  )
}
