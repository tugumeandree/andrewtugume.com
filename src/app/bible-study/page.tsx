import React from 'react'
import { pageMetadata } from '@/lib/seo/metadata'
import Link from 'next/link'
import { generateBreadcrumbSchema } from '@/lib/seo/schema'
import FaqList from '@/components/FaqList'
import PageHero from '@/components/PageHero'
import SubscribeForm from '@/components/SubscribeForm'
import YouTubeEmbed from '@/components/YouTubeEmbed'
import { bibleStudy, brand } from '@/lib/brand'

export const metadata = pageMetadata({
  title: 'Bible Study with Andrew Tugume | Work, Money, Leadership & Life',
  description: 'Free Scripture-centred Bible study on work, leadership, money, stewardship and relationships — weekly online study and YouTube teaching.',
  path: '/bible-study',
  absolute: true,
  image: '/bible-study/opengraph-image',
})

const sectionHeading = 'text-3xl md:text-4xl font-semibold text-scripture leading-tight'
const eyebrow = 'text-xs font-semibold tracking-[0.2em] text-scripture-warm uppercase'

export default function BibleStudyPage() {
  const [featured, ...moreTeachings] = bibleStudy.teachings

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://andrewtugume.com' },
              { name: bibleStudy.name, url: 'https://andrewtugume.com/bible-study' }
            ])
          )
        }}
      />

      <div className="fullbleed bg-[#FBF8F2]">
        <PageHero theme="scripture" eyebrow={bibleStudy.name} title={bibleStudy.headline} intro={bibleStudy.intro}>
          {bibleStudy.youtubeChannelUrl && (
            <a href={bibleStudy.youtubeChannelUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-scripture px-8 py-4 text-base font-semibold text-white hover:bg-primary hover:no-underline">
              Watch Bible Studies ↗
            </a>
          )}
          <a href="#tracks" className="inline-flex items-center justify-center rounded-full border border-scripture/40 px-8 py-4 text-base font-semibold text-scripture hover:bg-white hover:no-underline">
            Explore Study Resources
          </a>
          <Link href="/bible-study/invite" className="inline-flex items-center justify-center rounded-full px-4 py-4 text-base font-semibold text-scripture underline-offset-4 hover:underline">
            Invite Andrew to Teach
          </Link>
        </PageHero>

        {/* Welcome and mission */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className={eyebrow}>Welcome</p>
              <h2 className={`mt-3 ${sectionHeading}`}>{bibleStudy.descriptor}</h2>
              <p className="mt-6 text-lg text-gray-800 leading-relaxed">{bibleStudy.mission}</p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Whether you are exploring the Bible for the first time or have studied it for years, you are welcome
                here. Bring your questions.
              </p>
              <p className="mt-6 font-display text-lg italic text-scripture">— {brand.name}</p>
            </div>
            <div className="rounded-3xl border border-scripture/15 bg-white p-6 md:p-8">
              <h3 className="text-lg font-semibold text-scripture">How we study</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-800">
                {bibleStudy.approach.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-scripture-warm" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Featured teaching — only once real videos are configured */}
        {featured && (
          <section className="px-4 sm:px-6 lg:px-8 pb-16 md:pb-20">
            <div className="max-w-6xl mx-auto">
              <p className={eyebrow}>Featured Teaching</p>
              <h2 className={`mt-3 ${sectionHeading}`}>{featured.title}</h2>
              {featured.scripture && <p className="mt-2 text-gray-700">{featured.scripture}</p>}
              <div className="mt-8 max-w-4xl">
                <YouTubeEmbed id={featured.youtubeId} title={featured.title} />
              </div>
              {moreTeachings.length > 0 && (
                <ul className="mt-10 grid gap-6 md:grid-cols-3">
                  {moreTeachings.slice(0, 6).map((teaching) => (
                    <li key={teaching.youtubeId}>
                      <YouTubeEmbed id={teaching.youtubeId} title={teaching.title} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        )}

        {/* YouTube channel — shown while no individual teachings are featured */}
        {!featured && bibleStudy.youtubeChannelUrl && (
          <section id="watch" className="px-4 sm:px-6 lg:px-8 pb-16 md:pb-20">
            <div className="max-w-6xl mx-auto rounded-3xl border border-scripture/20 bg-white p-8 md:p-12 grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-center">
              <div>
                <p className={eyebrow}>Watch &amp; Subscribe</p>
                <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-scripture">Bible Study With Andrew Tugume on YouTube</h2>
                <p className="mt-3 text-gray-700">
                  Free teaching you can watch any time — studies, series and practical lessons from Scripture.
                </p>
              </div>
              <a
                href={bibleStudy.youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center justify-center rounded-full bg-scripture px-8 py-4 text-base font-semibold text-white hover:bg-primary hover:no-underline md:justify-self-end"
              >
                Visit the channel ↗
              </a>
            </div>
          </section>
        )}

        {/* Weekly study */}
        <section id="weekly" className="px-4 sm:px-6 lg:px-8 pb-16 md:pb-20">
          <div className="max-w-6xl mx-auto rounded-3xl bg-scripture p-8 md:p-12 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#E5D9BF] uppercase">Study Together</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-white">{bibleStudy.weekly.title}</h2>
              <p className="mt-4 text-white/85">
                An interactive study with Scripture reading, context, discussion, questions and practical reflection.
              </p>
              <p className="mt-4 font-semibold text-white">{bibleStudy.weekly.when} · {bibleStudy.weekly.where}</p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <a
                href={bibleStudy.weekly.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-scripture hover:bg-scripture-light hover:no-underline"
              >
                Join on Google Meet ↗
              </a>
            </div>
          </div>
        </section>

        {/* Four tracks */}
        <section id="tracks" className="bg-white px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <p className={eyebrow}>Four Teaching Tracks</p>
            <h2 className={`mt-3 ${sectionHeading}`}>What the Bible teaches about everyday life.</h2>

            <nav aria-label="Teaching tracks" className="mt-8 flex flex-wrap gap-2">
              {bibleStudy.tracks.map((track, index) => (
                <a key={track.id} href={`#${track.id}`} className="rounded-full border border-scripture/20 px-4 py-2 text-sm font-semibold text-scripture hover:bg-scripture-light hover:no-underline">
                  {index + 1}. {track.title.replace(' According to the Bible', '')}
                </a>
              ))}
            </nav>

            <div className="mt-12 space-y-16">
              {bibleStudy.tracks.map((track, index) => (
                <article key={track.id} id={track.id} className="grid gap-8 border-t border-scripture/15 pt-12 lg:grid-cols-[1fr_1.4fr]">
                  <div>
                    <p className="font-display text-5xl text-scripture-warm">{String(index + 1).padStart(2, '0')}</p>
                    <h3 className="mt-4 text-2xl md:text-3xl font-semibold text-scripture leading-snug">{track.title}</h3>
                    <p className="mt-4 text-gray-700 leading-relaxed">{track.purpose}</p>

                    <h4 className="mt-8 text-sm font-semibold tracking-wide text-scripture uppercase">Key passages</h4>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {track.passages.map((passage) => (
                        <li key={passage} className="rounded-full bg-scripture-light px-3 py-1 text-sm text-gray-800">{passage}</li>
                      ))}
                    </ul>
                    <p className="mt-3 text-xs text-gray-600">Every passage is studied in its context.</p>
                  </div>

                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-semibold tracking-wide text-scripture uppercase">Themes</h4>
                      <ol className="mt-3 space-y-1.5 text-sm text-gray-800 list-decimal pl-5">
                        {track.themes.map((theme) => (
                          <li key={theme}>{theme}</li>
                        ))}
                      </ol>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold tracking-wide text-scripture uppercase">You will be able to</h4>
                      <ul className="mt-3 space-y-2 text-sm text-gray-800">
                        {track.outcomes.map((outcome) => (
                          <li key={outcome} className="flex gap-2">
                            <span className="text-scripture-warm" aria-hidden="true">—</span>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                      {track.safeguards && (
                        <div className="mt-6 rounded-2xl bg-scripture-light p-4">
                          <h5 className="text-xs font-semibold tracking-wide text-scripture uppercase">Please note</h5>
                          <ul className="mt-2 space-y-1.5 text-sm text-gray-800">
                            {track.safeguards.map((safeguard) => (
                              <li key={safeguard}>{safeguard}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Formats */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <p className={eyebrow}>Ways to Learn</p>
            <h2 className={`mt-3 ${sectionHeading}`}>Teaching in different formats.</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {bibleStudy.formats.map((format) => (
                <div key={format.title} className="rounded-2xl border border-scripture/15 bg-white p-6">
                  <h3 className="text-lg font-semibold text-scripture">{format.title}</h3>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">{format.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Invite */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16 md:pb-20">
          <div className="max-w-6xl mx-auto rounded-3xl border border-scripture/20 bg-white p-8 md:p-12 grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-center">
            <div>
              <p className={eyebrow}>Seminars & Guest Teaching</p>
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-scripture">Invite Andrew to teach.</h2>
              <p className="mt-3 text-gray-700">
                For churches, ministries, fellowships, universities, Christian professional associations, conferences and retreats.
              </p>
            </div>
            <Link href="/bible-study/invite" className="inline-flex w-fit items-center justify-center rounded-full bg-scripture px-8 py-4 text-base font-semibold text-white hover:bg-primary hover:no-underline md:justify-self-end">
              Send an invitation →
            </Link>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            <p className={eyebrow}>FAQs</p>
            <h2 className={`mt-3 ${sectionHeading}`}>Common questions</h2>
            <div className="mt-8">
              <FaqList faqs={bibleStudy.faqs} />
            </div>
          </div>
        </section>

        {/* Mailing list */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-scripture">Receive new teaching and study resources.</h2>
              <p className="mt-2 text-gray-700">Occasional emails when new teaching, guides or events are published.</p>
            </div>
            <SubscribeForm cta="Join the list" interest="Bible Study" />
          </div>
        </section>
      </div>
    </>
  )
}
