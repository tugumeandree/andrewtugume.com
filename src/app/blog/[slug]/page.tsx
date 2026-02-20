import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllPosts, getPostBySlug, PostMeta } from '@/lib/blog/posts'
import { generateBreadcrumbSchema, generateArticleSchema } from '@/lib/seo/schema'

type Params = { params: { slug: string } }

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) return { title: 'Post Not Found' }
  
  const url = `https://andrewtugume.com/blog/${post.meta.slug}`
  const ogUrl = post.meta.ogImage ? post.meta.ogImage : `https://andrewtugume.com/og/${post.meta.slug}`
  const articleDate = new Date(post.meta.date)
  const publishedTime = articleDate.toISOString()
  
  return {
    title: post.meta.title,
    description: post.meta.summary,
    keywords: post.meta.tags || [],
    authors: [{ name: 'Andrew Tugume', url: 'https://andrewtugume.com' }],
    creator: 'Andrew Tugume',
    alternates: { 
      canonical: url
    },
    openGraph: {
      title: post.meta.title,
      description: post.meta.summary,
      url,
      type: 'article',
      publishedTime: publishedTime,
      authors: ['Andrew Tugume'],
      tags: post.meta.tags || [],
      images: [
        { 
          url: ogUrl, 
          width: 1200, 
          height: 630,
          alt: post.meta.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.meta.title,
      description: post.meta.summary,
      images: [ogUrl],
      creator: '@_drewtugume',
    },
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  if (!post) {
    return (
      <div className="max-w-4xl mx-auto py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-6">Sorry, the blog post you're looking for doesn't exist.</p>
        <Link href="/blog" className="text-primary hover:underline font-semibold">
          ← Go back to blog
        </Link>
      </div>
    )
  }

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
    image: meta.ogImage ? [meta.ogImage] : meta.image ? [meta.image] : [],
    datePublished: publishedDate,
    dateModified: publishedDate,
    author: {
      '@type': 'Person',
      name: 'Andrew Tugume',
      url: 'https://andrewtugume.com',
      image: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Andrew Tugume',
      logo: {
        '@type': 'ImageObject',
        url: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg',
        width: 192,
        height: 192,
      }
    },
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

            {(meta.image || meta.ogImage) && (
              <div className="mb-8 rounded-lg overflow-hidden">
                <Image 
                  src={meta.image || meta.ogImage!} 
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
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">About Andrew Tugume</h3>
                  <p className="text-sm text-gray-700">
                    Educator, Technologist, and Investor helping workers, leaders, and learners succeed through biblical teaching, 
                    modern technology, and practical business wisdom.
                  </p>
                  <Link href="/about" className="text-primary hover:underline text-sm font-semibold mt-2 inline-block">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>

            {/* Related Post Links */}
            <div className="mt-8">
              <Link href="/blog" className="text-primary hover:underline font-semibold">
                ← Back to all posts
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </>
  )
}
