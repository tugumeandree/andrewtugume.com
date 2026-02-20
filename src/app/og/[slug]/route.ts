import { NextResponse } from 'next/server'
import { getPostBySlug } from '@/lib/blog/posts'

export async function GET(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  const title = post ? post.meta.title : 'Andrew Tugume'
  const description = post ? (post.meta.summary || 'Educator, Technologist, Investor') : 'Educator, Technologist, Investor'

  // Enhanced SVG with better styling
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#0F5666;stop-opacity:1" />
        <stop offset="50%" style="stop-color:#1e7a90;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#064e63;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="4" stdDeviation="3" flood-opacity="0.3"/>
      </filter>
      <style>
        .title { font-family: 'Inter', -apple-system, 'Segoe UI', Arial, sans-serif; font-weight: 700; font-size: 64px; line-height: 1.2; fill: #ffffff; }
        .subtitle { font-family: 'Inter', -apple-system, 'Segoe UI', Arial, sans-serif; font-weight: 500; font-size: 32px; line-height: 1.4; fill: #e0f2f1; }
        .footer { font-family: 'Inter', -apple-system, 'Segoe UI', Arial, sans-serif; font-weight: 400; font-size: 20px; fill: #b2dfdb; }
      </style>
    </defs>
    
    <!-- Background -->
    <rect width="1200" height="630" fill="url(#grad1)"/>
    
    <!-- Decorative circles -->
    <circle cx="1250" cy="-50" r="300" fill="rgba(255,255,255,0.05)"/>
    <circle cx="-100" cy="700" r="400" fill="rgba(255,255,255,0.05)"/>
    
    <!-- Main card background -->
    <rect x="40" y="40" width="1120" height="550" rx="30" fill="rgba(0,0,0,0.2)" filter="url(#shadow)"/>
    <rect x="50" y="50" width="1100" height="530" rx="24" fill="rgba(255,255,255,0.08)" opacity="0.5"/>
    
    <!-- Content wrapper -->
    <g>
      <!-- Title -->
      <text x="80" y="180" class="title">${escapeXml(title.substring(0, 45))}</text>
      
      <!-- Description/Subtitle -->
      <text x="80" y="270" class="subtitle">${escapeXml(description.substring(0, 80))}</text>
      
      <!-- Divider line -->
      <line x1="80" y1="310" x2="180" y2="310" stroke="rgba(255,255,255,0.3)" stroke-width="3" stroke-linecap="round"/>
      
      <!-- Footer text -->
      <text x="80" y="570" class="footer">andrewtugume.com — Educator • Technologist • Investor</text>
    </g>
  </svg>`

  return new NextResponse(svg, { 
    headers: { 
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=31536000, immutable',
    } 
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
    .substring(0, 100) // Limit length
}
