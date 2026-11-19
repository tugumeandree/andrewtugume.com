import { getAllPosts } from '@/lib/blog/posts'
import { escapeXml } from '@/lib/seo/utils'
import { brand, SITE_URL } from '@/lib/brand'
import { NextResponse } from 'next/server'

export async function GET() {
  const posts = await getAllPosts()

  const items = posts.map((post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <dc:creator>${escapeXml(brand.name)}</dc:creator>
      <description>${escapeXml(post.summary || '')}</description>
      ${(post.tags || []).map((tag) => `<category>${escapeXml(tag)}</category>`).join('')}
    </item>`).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(`${brand.name} — Insights`)}</title>
    <link>${SITE_URL}</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <description>${escapeXml(brand.description)}</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`

  return new NextResponse(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } })
}
