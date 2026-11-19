import type { Metadata } from 'next'
import { brand, SITE_URL } from '@/lib/brand'

type PageMetadataInput = {
  title: string
  description: string
  path: string
  // true when the title already names Andrew, so the "| Andrew Tugume" suffix is skipped
  absolute?: boolean
  type?: 'website' | 'article' | 'profile'
  // path of the section's own opengraph-image route, when it has one
  image?: string
}

// Gives every page its own canonical URL, Open Graph and Twitter card. Pages use the
// default social image unless they pass the path of their own opengraph-image route.
export function pageMetadata({ title, description, path, absolute = false, type = 'website', image: imagePath = '/opengraph-image' }: PageMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`
  const fullTitle = absolute ? title : `${title} | ${brand.name}`
  const image = { url: imagePath, width: 1200, height: 630, alt: absolute ? title : fullTitle }

  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      type,
      siteName: brand.name,
      locale: 'en_GB',
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      site: '@_drewtugume',
      creator: '@_drewtugume',
      images: [image.url],
    },
  }
}
