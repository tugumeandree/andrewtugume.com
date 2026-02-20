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

  // Static pages with their change frequency and priority
  const staticPages: SitemapUrl[] = [
    { loc: `${base}/`, lastmod: currentDate, changefreq: 'weekly', priority: 1.0 },
    { loc: `${base}/about`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${base}/book`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${base}/one-on-one`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${base}/workmasters`, lastmod: currentDate, changefreq: 'weekly', priority: 0.9 },
    { loc: `${base}/community`, lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { loc: `${base}/chariot-leadership`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${base}/nations-bible`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${base}/faith-knowledge`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { loc: `${base}/financial-intelligence`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { loc: `${base}/impact`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { loc: `${base}/leadership`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${base}/bible-study`, lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { loc: `${base}/blog`, lastmod: currentDate, changefreq: 'daily', priority: 0.9 },
    { loc: `${base}/tech-resources`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { loc: `${base}/schools`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${base}/masters/coursemasters`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${base}/masters/techmasters`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: `${base}/store`, lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { loc: `${base}/store/events`, lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { loc: `${base}/store/products`, lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { loc: `${base}/store/services`, lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { loc: `${base}/subscribe`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { loc: `${base}/partner`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { loc: `${base}/contact`, lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
  ]

  // Dynamic blog posts
  const postEntries: SitemapUrl[] = posts.map((p) => ({
    loc: `${base}/blog/${p.slug}`,
    lastmod: new Date(p.date).toISOString().split('T')[0],
    changefreq: 'monthly' as const,
    priority: 0.8,
  }))

  // Combine all URLs
  const allUrls = [...staticPages, ...postEntries]

  // Generate XML
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
