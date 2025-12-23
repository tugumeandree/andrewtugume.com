import { getAllPosts } from '@/lib/blog/posts'
import { escapeXml } from '@/lib/seo/utils'
import { NextResponse } from 'next/server'

export async function GET() {
  const posts = await getAllPosts()
  const base = 'https://andrewtugume.com'
  const siteTitle = 'Andrew Tugume'
  const siteDesc = 'Teaching, technology, and investing insights to integrate faith and work.'

  const items = posts.map(p => `
    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${base}/blog/${p.slug}</link>
      <guid isPermaLink="true">${base}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description>${escapeXml(p.summary || '')}</description>
    </item>
  `).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>${escapeXml(siteTitle)}</title>
      <link>${base}</link>
      <description>${escapeXml(siteDesc)}</description>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      ${items}
    </channel>
  </rss>`

  return new NextResponse(xml, { headers: { 'Content-Type': 'application/rss+xml' } })
}

function escapeXml(str?: string) {
  if (!str) return ''
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')
}
