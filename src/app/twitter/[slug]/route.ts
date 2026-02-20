import { NextResponse } from 'next/server'
import { getPostBySlug } from '@/lib/blog/posts'

export async function GET(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  const title = post ? post.meta.title : 'Andrew Tugume'
  const description = post ? (post.meta.summary || 'Educator, Technologist, Investor') : 'Educator, Technologist, Investor'

  // Twitter-optimized SVG (larger text for better reading on Twitter cards)
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="twitterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#0F5666;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#2563eb;stop-opacity:1" />
      </linearGradient>
      <style>
        .twitter-title { font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; font-weight: bold; font-size: 72px; fill: #ffffff; line-height: 1.2; }
        .twitter-subtitle { font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; font-weight: 500; font-size: 32px; fill: #e6f7ff; line-height: 1.3; }
        .twitter-brand { font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; font-weight: 600; font-size: 24px; fill: #b2dfdb; }
      </style>
    </defs>
    
    <!-- Background gradient -->
    <rect width="1200" height="630" fill="url(#twitterGrad)"/>
    
    <!-- Accent rectangles -->
    <rect x="0" y="0" width="6" height="630" fill="#ffffff" opacity="0.3"/>
    
    <!-- Main content area -->
    <rect x="60" y="60" width="1080" height="510" rx="20" fill="rgba(0,0,0,0.15)" opacity="0.7"/>
    
    <!-- Title -->
    <text x="100" y="180" class="twitter-title">${escapeXml(title.substring(0, 40))}</text>
    
    <!-- Subtitle -->
    <text x="100" y="280" class="twitter-subtitle">${escapeXml(description.substring(0, 60))}</text>
    
    <!-- Brand footer -->
    <text x="100" y="570" class="twitter-brand">@_drewtugume • andrewtugume.com</text>
  </svg>`

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}

function escapeXml(str?: string) {
  if (!str) return ''
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}
