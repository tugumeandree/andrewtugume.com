import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getAllPosts, getPostBySlug, PostMeta } from '@/lib/blog/posts'
import { generateBreadcrumbSchema } from '@/lib/seo/schema'
import { ids } from '@/lib/seo/graph'
import { pageMetadata } from '@/lib/seo/metadata'
import ShareLinks from '@/components/ShareLinks'
import SubscribeForm from '@/components/SubscribeForm'
import { bios, initiatives } from '@/lib/brand'

type Params = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: 'Post Not Found' }
  
  const base = pageMetadata({ title: post.meta.title, description: post.meta.summary || '', path: `/blog/${post.meta.slug}`, type: 'article', image: `/blog/${post.meta.slug}/opengraph-image` })
  const customImage = post.meta.ogImage?.startsWith('http') ? post.meta.ogImage : undefined

  return {
    ...base,
    keywords: post.meta.tags || [],
    authors: [{ name: 'Andrew Tugume', url: 'https://andrewtugume.com/about' }],
    openGraph: {
      ...base.openGraph,
      type: 'article',
      publishedTime: new Date(post.meta.date).toISOString(),
      authors: ['Andrew Tugume'],
      tags: post.meta.tags || [],
      ...(customImage && { images: [{ url: customImage, width: 1200, height: 630, alt: post.meta.title }] }),
    },
  }
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const { meta, content } = post
  const canonical = `https://andrewtugume.com/blog/${meta.slug}`
  const articleDate = new Date(meta.date)
  const publishedDate = articleDate.toISOString()
  const readingTime = Math.ceil(content.split(' ').length / 200) // Approximate reading time

  // Enhanced Article schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: meta.title,
    description: meta.summary,
    image: [`${canonical}/opengraph-image`],
    datePublished: publishedDate,
    dateModified: publishedDate,
    author: { '@id': ids.person },
    publisher: { '@id': ids.person },
    isPartOf: { '@id': ids.website },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonical
    },
    keywords: (meta.tags || []).join(', '),
    wordCount: content.split(' ').length,
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://andrewtugume.com' },
    { name: 'Blog', url: 'https://andrewtugume.com/blog' },
    { name: meta.title },
  ])

  return (
    <>
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema)
        }}
      />
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />

      <div className="max-w-3xl mx-auto py-12">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8 text-sm text-gray-600 flex items-center gap-2">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-primary">Blog</Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">{meta.title.slice(0, 30)}{meta.title.length > 30 ? '...' : ''}</span>
        </nav>

        <article itemScope itemType="https://schema.org/BlogPosting">
          {/* Hidden meta for schema */}
          <meta itemProp="headline" content={meta.title} />
          <meta itemProp="description" content={meta.summary} />
          <meta itemProp="datePublished" content={publishedDate} />
          {meta.image && <meta itemProp="image" content={meta.image} />}

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{meta.title}</h1>
            
            <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <span itemProp="author" itemScope itemType="https://schema.org/Person">
                  <a href="https://andrewtugume.com" className="font-semibold text-gray-900 hover:text-primary">
                    <span itemProp="name">Andrew Tugume</span>
                  </a>
                </span>
              </div>
              <div className="hidden md:block">•</div>
              <time itemProp="datePublished" dateTime={publishedDate}>
                {articleDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
              <div className="hidden md:block">•</div>
              <span>{readingTime} min read</span>
            </div>

            {meta.image?.startsWith('http') && (
              <div className="mb-8 rounded-lg overflow-hidden">
                <Image 
                  src={meta.image} 
                  alt={meta.title} 
                  width={800} 
                  height={450} 
                  className="w-full h-auto"
                  priority 
                />
              </div>
            )}
          </header>

          {/* Article Tags */}
          {meta.tags && meta.tags.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              {meta.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Article Content */}
          <section 
            className="prose prose-lg max-w-none mb-12"
            itemProp="articleBody"
            dangerouslySetInnerHTML={{ __html: content }} 
          />

          {/* Article Footer */}
          <footer className="mt-12 space-y-10 border-t border-gray-200 pt-8">
            <ShareLinks url={canonical} title={meta.title} />

            <div className="rounded-2xl bg-white border border-black/5 p-6">
              <h2 className="text-lg font-semibold text-primary">About the author</h2>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">{bios.short}</p>
              <Link href="/about" className="mt-3 inline-flex text-sm font-semibold">More about Andrew →</Link>
            </div>

            <div className="rounded-2xl bg-primary p-6 md:p-8">
              <h2 className="text-xl font-semibold text-white">Get new articles by email</h2>
              <p className="mt-1 mb-4 text-sm text-white/75">Practical ideas on work, influence and purpose, when they’re published.</p>
              <SubscribeForm tone="dark" interest="Resources" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-primary">Keep going</h2>
              <ul className="mt-3 grid gap-3 sm:grid-cols-3">
                {initiatives.map((initiative) => (
                  <li key={initiative.id}>
                    <Link href={initiative.href} className="block h-full rounded-xl border border-black/5 bg-white p-4 text-sm hover:border-accent hover:no-underline">
                      <span className="block font-semibold text-primary">{initiative.name}</span>
                      <span className="mt-1 block text-gray-700">{initiative.category}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/blog" className="mt-6 inline-flex font-semibold">← All articles</Link>
            </div>
          </footer>
        </article>
      </div>
    </>
  )
}
