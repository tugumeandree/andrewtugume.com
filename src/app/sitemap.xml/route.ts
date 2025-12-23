import { getAllPosts } from '@/lib/blog/posts'
import { NextResponse } from 'next/server'

export async function GET() {
  const posts = await getAllPosts()
  const base = 'https://andrewtugume.com'

  const urls = [
    `${base}/`,
    `${base}/about`,
    `${base}/book`,
    `${base}/one-on-one`,
    `${base}/workmasters`,
    `${base}/community`,
    // add others as needed
  ]

  const postEntries = posts.map((p) => `  <url>\n    <loc>${base}/blog/${p.slug}</loc>\n    <lastmod>${new Date(p.date).toISOString()}</lastmod>\n  </url>`).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url>\n    <loc>${u}</loc>\n  </url>`).join('\n')}\n${postEntries}\n</urlset>`

  return new NextResponse(xml, { headers: { 'Content-Type': 'application/xml' } })
}
