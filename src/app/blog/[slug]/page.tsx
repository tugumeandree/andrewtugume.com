import React from 'react'
import Image from 'next/image'
import type { Metadata } from 'next'
import { getAllPosts, getPostBySlug, PostMeta } from '@/lib/blog/posts'

type Params = { params: { slug: string } }

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) return {}
  const url = `https://andrewtugume.com/blog/${post.meta.slug}`
  const ogUrl = post.meta.ogImage ? post.meta.ogImage : `https://andrewtugume.com/og/${post.meta.slug}`
  return {
    title: post.meta.title,
    description: post.meta.summary,
    alternates: { canonical: url },
    openGraph: {
      title: post.meta.title,
      description: post.meta.summary,
      url,
      images: [{ url: ogUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.meta.title,
      images: [ogUrl],
    },
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  if (!post) return <div className="max-w-4xl mx-auto py-12">Post not found</div>

  const { meta, content } = post
  const canonical = `https://andrewtugume.com/blog/${meta.slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    image: meta.ogImage ? [meta.ogImage] : meta.image ? [meta.image] : [],
    author: { '@type': 'Person', name: 'Andrew Tugume', url: 'https://andrewtugume.com' },
    publisher: {
      '@type': 'Organization',
      name: 'Andrew Tugume',
      logo: { '@type': 'ImageObject', url: 'https://andrewtugume.com/logo.png' }
    },
    datePublished: meta.date,
    dateModified: meta.date,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical }
  }

  return (
    <div className="max-w-3xl mx-auto py-12">
      <article>
        <header className="mb-6">
          <h1 className="text-4xl font-bold mb-2">{meta.title}</h1>
          <div className="text-sm text-gray-500 mb-4">{new Date(meta.date).toLocaleDateString()}</div>
          {meta.image && (
            <div className="mb-6">
              <Image src={meta.image} alt={meta.title} width={1200} height={630} className="rounded-lg" priority />
            </div>
          )}
        </header>

        <section className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />

        <footer className="mt-12">
          <div className="text-sm text-gray-600">Tags: {(meta.tags || []).join(', ')}</div>
        </footer>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  )
}
