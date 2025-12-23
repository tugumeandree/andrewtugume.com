import { NextResponse } from 'next/server'

export async function GET() {
  const sitemapUrl = 'https://andrewtugume.com/sitemap.xml'
  const body = `User-agent: *\nAllow: /\nSitemap: ${sitemapUrl}\n`
  return new NextResponse(body, { headers: { 'Content-Type': 'text/plain' } })
}
