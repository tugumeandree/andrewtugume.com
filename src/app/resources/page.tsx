import React from 'react'
import { pageMetadata } from '@/lib/seo/metadata'
import Link from 'next/link'
import { generateBreadcrumbSchema } from '@/lib/seo/schema'
import { getAllPosts } from '@/lib/blog/posts'
import PageHero from '@/components/PageHero'
import SectionHeading from '@/components/SectionHeading'
import SubscribeForm from '@/components/SubscribeForm'
import { bibleStudy, mediaItems, resourceCategories } from '@/lib/brand'

export const metadata = pageMetadata({
  title: 'Resources: Articles, Frameworks & Teaching',
  description: 'Free articles, frameworks and Bible teaching from Andrew Tugume on productivity, influence, leadership, the future of work and biblical wisdom.',
  path: '/resources',
})

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })

const collections = [
  {
    title: 'Bible Study teaching tracks',
    kicker: 'Bible Study',
    description: 'Four tracks on work, money, stewardship and relationships, with key passages and outcomes.',
    href: '/bible-study#tracks',
    className: 'bg-scripture-light',
  },
  {
    title: 'The Work Value Engine',
    kicker: 'WorkMasters',
    description: 'Seven steps from what you know to work that creates lasting value.',
    href: '/workmasters',
    className: 'bg-work-light',
  },
  {
    title: 'The Influence Asset Cycle',
    kicker: 'InfluenceMasters',
    description: 'Six stages for turning what you know into influence that lasts.',
    href: '/influencemasters',
    className: 'bg-influence-light',
  },
]

export default async function Resources() {
  const posts = await getAllPosts()
  const mediaByCategory = resourceCategories
    .map((category) => ({ category, items: mediaItems.filter((item) => item.category === category) }))
    .filter((group) => group.items.length > 0)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://andrewtugume.com' },
              { name: 'Resources', url: 'https://andrewtugume.com/resources' }
            ])
          )
        }}
      />

      <div className="fullbleed">
        <PageHero
          eyebrow="Resources"
          title="Read, watch and learn."
          intro="Articles, frameworks, Bible teaching and media — published as they are ready, and free to use."
        />

        {/* Frameworks and collections */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <SectionHeading eyebrow="Frameworks & Collections" title="Start with the core ideas." />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {collections.map((collection) => (
                <Link key={collection.title} href={collection.href} className={`flex flex-col rounded-2xl p-6 hover:no-underline ${collection.className}`}>
                  <span className="text-xs font-semibold tracking-[0.15em] text-gray-700 uppercase">{collection.kicker}</span>
                  <span className="mt-3 text-xl font-semibold text-primary">{collection.title}</span>
                  <span className="mt-2 flex-1 text-sm text-gray-700">{collection.description}</span>
                  <span className="mt-5 text-sm font-semibold text-primary">Open →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Articles */}
        <section id="articles" className="bg-white px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <SectionHeading eyebrow="Articles" title="Latest writing." />
            {posts.length > 0 ? (
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {posts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="block rounded-2xl border border-black/5 bg-[#F7F6F2] p-6 hover:border-accent/40 hover:no-underline">
                    <p className="text-xs text-gray-600">Andrew Tugume · {formatDate(post.date)}</p>
                    <h3 className="mt-2 text-xl font-semibold text-primary">{post.title}</h3>
                    {post.summary && <p className="mt-2 text-sm text-gray-700">{post.summary}</p>}
                  </Link>
                ))}
              </div>
            ) : (
              <p className="mt-8 text-gray-700">New articles are on the way.</p>
            )}
          </div>
        </section>

        {/* Media — grouped by category once entries exist */}
        {mediaByCategory.length > 0 && (
          <section id="media" className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="max-w-6xl mx-auto">
              <SectionHeading eyebrow="Watch & Listen" title="Talks, podcasts and interviews." />
              <div className="mt-10 space-y-10">
                {mediaByCategory.map((group) => (
                  <div key={group.category}>
                    <h3 className="text-lg font-semibold text-primary">{group.category}</h3>
                    <ul className="mt-4 grid gap-4 md:grid-cols-3">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <a href={item.href} target="_blank" rel="noopener noreferrer" className="block h-full rounded-2xl border border-black/5 bg-white p-5 hover:no-underline">
                            <span className="text-xs font-semibold tracking-[0.15em] text-gray-600 uppercase">{item.type} · {item.platform}</span>
                            <span className="mt-2 block font-semibold text-primary">{item.title}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Bible Study */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-6xl mx-auto rounded-3xl bg-scripture-light p-8 md:p-12">
            <p className="text-xs font-semibold tracking-[0.2em] text-scripture-warm uppercase">{bibleStudy.name}</p>
            <h2 className="mt-3 text-3xl font-semibold text-scripture">Bible teaching and study</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {bibleStudy.tracks.map((track) => (
                <li key={track.id}>
                  <Link href={`/bible-study#${track.id}`} className="font-semibold text-scripture">{track.title} →</Link>
                </li>
              ))}
            </ul>
            {bibleStudy.youtubeChannelUrl && (
              <a
                href={bibleStudy.youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center rounded-full bg-scripture px-6 py-3 text-sm font-semibold text-white hover:bg-primary hover:no-underline"
              >
                Watch Bible teaching on YouTube ↗
              </a>
            )}
            <p className="mt-6 text-sm text-gray-700">Study guides and workbooks will appear here as they are published.</p>
          </div>
        </section>

        {/* Subscribe */}
        <section className="px-4 sm:px-6 lg:px-8 pb-8">
          <div className="max-w-6xl mx-auto rounded-3xl border border-black/5 bg-white p-8 md:p-12 grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-primary">Get new resources by email.</h2>
              <p className="mt-3 text-gray-700">Articles, frameworks and teaching as they are published.</p>
            </div>
            <SubscribeForm interest="Resources" />
          </div>
        </section>
      </div>
    </>
  )
}
