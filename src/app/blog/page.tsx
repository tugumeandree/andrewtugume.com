import React from 'react'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog/posts'
import type { Metadata } from 'next'
import { generateBreadcrumbSchema, generateWebPageSchema } from '@/lib/seo/schema'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Essays on execution, leadership systems, technology strategy, and disciplined capital for ambitious operators.',
  alternates: {
    canonical: 'https://andrewtugume.com/blog',
  },
  openGraph: {
    title: 'Insights — Andrew Tugume',
    description: 'Essays on execution, leadership systems, technology strategy, and disciplined capital.',
    url: 'https://andrewtugume.com/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insights — Andrew Tugume',
    description: 'Essays on execution, leadership systems, technology strategy, and disciplined capital.',
  },
}

export default async function BlogIndex() {
  const posts = await getAllPosts()
  
  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebPageSchema(
            'Insights - Andrew Tugume',
            'Essays on execution, leadership systems, technology strategy, and disciplined capital.',
            'https://andrewtugume.com/blog'
          ))
        }}
      />
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: 'Home', url: 'https://andrewtugume.com' },
            { name: 'Blog', url: 'https://andrewtugume.com/blog' }
          ]))
        }}
      />
      
      <div className="max-w-6xl mx-auto py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-semibold">Insights</h1>
          <p className="text-gray-700 mt-2 text-lg">Execution, leadership systems, technology strategy, and disciplined capital for ambitious operators.</p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <article 
              key={post.slug} 
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <meta itemProp="author" content="Andrew Tugume" />
              <meta itemProp="datePublished" content={new Date(post.date).toISOString()} />
              <h2 className="text-xl font-semibold mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary" itemProp="headline">
                  {post.title}
                </Link>
              </h2>
              <div className="text-xs text-gray-500 mb-3">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
              <p className="text-gray-700 mb-4" itemProp="description">{post.summary}</p>
              <div className="flex items-center justify-between">
                <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-primary">Read →</Link>
                <div className="text-xs text-gray-500">{(post.tags || []).slice(0, 3).map(t => `#${t}`).join(' ')}</div>
              </div>
            </article>
          ))}
        </div>
        
        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No blog posts found yet. Check back soon!</p>
          </div>
        )}
      </div>
    </>
  )
}
