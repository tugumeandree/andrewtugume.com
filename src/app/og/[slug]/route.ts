import { NextResponse } from 'next/server'
import { getPostBySlug } from '@/lib/blog/posts'

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  const slug = params.slug
  const post = await getPostBySlug(slug)
  const title = post ? post.meta.title : 'Andrew Tugume'

  const svg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0" x2="1">
        <stop offset="0%" stop-color="#0F5666" />
        <stop offset="100%" stop-color="#2563eb" />
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="#0f172a" />
    <rect x="40" y="40" width="1120" height="550" rx="24" fill="url(#g)" opacity="0.95" />
    <text x="100" y="220" font-family="Inter, Arial, sans-serif" font-size="56" fill="#fff" font-weight="700">${escapeXml(title)}</text>
    <text x="100" y="300" font-family="Inter, Arial, sans-serif" font-size="28" fill="#e6f7ff">Andrew Tugume — Teacher • Technologist • Investor</text>
  </svg>`

  return new NextResponse(svg, { headers: { 'Content-Type': 'image/svg+xml' } })
}

function escapeXml(str?: string) {
  if (!str) return ''
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')
}
