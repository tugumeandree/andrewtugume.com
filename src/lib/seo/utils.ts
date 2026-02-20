export const SITE_BASE = 'https://andrewtugume.com'
export const SITE_NAME = 'Andrew Tugume'
export const SITE_AUTHOR = 'Andrew Tugume'
export const SITE_DESCRIPTION = 'Educator, Technologist, and Investor helping workers, leaders, and learners succeed through biblical teaching, technology, and practical wisdom.'

export function escapeXml(str?: string) {
  if (!str) return ''
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')
}

export function siteBase() {
  return SITE_BASE
}

// Canon URLs
export function getCanonicalUrl(path: string): string {
  return `${SITE_BASE}${path.startsWith('/') ? path : '/' + path}`
}

// OpenGraph URLs for social sharing
export function getOGImageUrl(slug: string, type: 'og' | 'twitter' = 'og'): string {
  return `${SITE_BASE}/${type}/${slug}`
}

// Slug generation from title
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Generate meta description with proper length
export function sanitizeMetaDescription(description: string, maxLength: number = 155): string {
  const sanitized = description.replace(/\n/g, ' ').trim()
  if (sanitized.length <= maxLength) return sanitized
  return sanitized.substring(0, maxLength).replace(/\s+\S*$/, '') + '...'
}

// Generate meta title with proper length
export function sanitizeMetaTitle(title: string, suffix?: string, maxLength: number = 60): string {
  const fullTitle = suffix ? `${title} | ${suffix}` : title
  if (fullTitle.length <= maxLength) return fullTitle
  return fullTitle.substring(0, maxLength - 3) + '...'
}

// Structured data helper
export function renderJsonLd(data: any): string {
  return JSON.stringify(data)
}

// Keywords helper for a page
export function generateKeywords(baseKeywords: string[], additionalKeywords?: string[]): string[] {
  const combined = [...baseKeywords]
  if (additionalKeywords) {
    combined.push(...additionalKeywords)
  }
  return [...new Set(combined)] // Remove duplicates
}

// Social media URLs
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/_drewtugume',
  linkedin: 'https://linkedin.com/in/andrewtugume',
  youtube: 'https://youtube.com/@andrewtugume',
  instagram: 'https://instagram.com/andrewtugume',
}

// Rich snippet helper for ratings
export function createRichSnippet(rating: number, reviewCount: number) {
  return {
    ratingValue: Math.min(Math.max(rating, 1), 5),
    reviewCount: Math.max(reviewCount, 0),
  }
}

// Preload links for performance
export interface PreloadLink {
  rel: 'preload' | 'prefetch'
  href: string
  as: 'script' | 'style' | 'image' | 'font' | 'fetch'
  type?: string
  crossOrigin?: string
}

// Image optimization helpers
export function getImageMetadata(url: string, alt: string, width: number = 1200, height: number = 630) {
  return {
    url,
    alt,
    width,
    height,
  }
}

// Locale and hreflang support
export interface AlternateLink {
  hreflang: string
  href: string
}

export function generateAlternateLinks(path: string, locales: string[] = ['en']): AlternateLink[] {
  return locales.map((locale) => ({
    hreflang: locale,
    href: `${SITE_BASE}${locale === 'en' ? '' : '/' + locale}${path}`,
  }))
}

// Mobile-first meta viewport
export const MOBILE_VIEWPORT = 'width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover'
