import { getAllPosts } from '@/lib/blog/posts'
import { NextResponse } from 'next/server'

interface SitemapUrl {
  loc: string
  lastmod: string
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

export async function GET() {
  const posts = await getAllPosts()
  const base = 'https://andrewtugume.com'
  const currentDate = new Date().toISOString().split('T')[0]

  const staticPages: SitemapUrl[] = [
    // Core
    { loc: `${base}/`, lastmod: currentDate, changefreq: 'weekly', priority: 1.0 },
    { loc: `${base}/about`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${base}/contact`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    // Programs
    { loc: `${base}/programs`, lastmod: currentDate, changefreq: 'monthly', priority: 0.9 },
    { loc: `${base}/apply`, lastmod: currentDate, changefreq: 'monthly', priority: 0.9 },
    { loc: `${base}/workmasters`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${base}/techmasters`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${base}/masters/techmasters`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${base}/masters/capitalmasters`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    // Engagements
    { loc: `${base}/book`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { loc: `${base}/one-on-one`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    // Institutions & schools
    { loc: `${base}/institutions`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${base}/schools`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${base}/schools/qraft-academy`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { loc: `${base}/schools/chariot-leadership`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { loc: `${base}/schools/nations-bible`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { loc: `${base}/schools/tabernacle-tech`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    // Content
    { loc: `${base}/blog`, lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { loc: `${base}/resources`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { loc: `${base}/tech-resources`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { loc: `${base}/bible-study`, lastmod: currentDate, changefreq: 'weekly', priority: 0.6 },
    // Topic pages
    { loc: `${base}/faith-knowledge`, lastmod: currentDate, changefreq: 'monthly', priority: 0.5 },
    { loc: `${base}/financial-intelligence`, lastmod: currentDate, changefreq: 'monthly', priority: 0.5 },
    { loc: `${base}/impact`, lastmod: currentDate, changefreq: 'monthly', priority: 0.5 },
    { loc: `${base}/leadership`, lastmod: currentDate, changefreq: 'monthly', priority: 0.5 },
    // Other
    { loc: `${base}/partner`, lastmod: currentDate, changefreq: 'monthly', priority: 0.5 },
  ]

  const postEntries: SitemapUrl[] = posts.map((p) => ({
    loc: `${base}/blog/${p.slug}`,
    lastmod: new Date(p.date).toISOString().split('T')[0],
    changefreq: 'monthly' as const,
    priority: 0.8,
  }))

  const allUrls = [...staticPages, ...postEntries]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
${allUrls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
