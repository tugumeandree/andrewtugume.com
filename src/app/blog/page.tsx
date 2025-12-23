import React from 'react'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog/posts'

export default async function BlogIndex() {
  const posts = await getAllPosts()
  return (
    <div className="max-w-6xl mx-auto py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-gray-700 mt-2">Insights on faith, work, technology and investing.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <article key={post.slug} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:text-primary">{post.title}</Link>
            </h2>
            <div className="text-xs text-gray-500 mb-3">{new Date(post.date).toLocaleDateString()}</div>
            <p className="text-gray-700 mb-4">{post.summary}</p>
            <div className="flex items-center justify-between">
              <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-primary">Read →</Link>
              <div className="text-xs text-gray-500">{(post.tags || []).slice(0,3).map(t => `#${t}`).join(' ')}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
