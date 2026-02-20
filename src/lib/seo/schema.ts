// JSON-LD Schema markup generators for comprehensive SEO
import { Metadata } from 'next'

export interface SchemaOrganization {
  '@context': string
  '@type': string
  name: string
  url: string
  logo: string
  description: string
  sameAs: string[]
  address: {
    '@type': string
    addressCountry: string
  }
  founder?: {
    '@type': string
    name: string
  }
}

export interface SchemaArticle {
  '@context': string
  '@type': string
  headline: string
  description?: string
  image?: string | string[]
  datePublished: string
  dateModified?: string
  author: {
    '@type': string
    name: string
    url?: string
  }
  publisher: {
    '@type': string
    name: string
    logo?: {
      '@type': string
      url: string
    }
  }
}

export interface SchemaBreadcrumb {
  '@context': string
  '@type': string
  itemListElement: Array<{
    '@type': string
    position: number
    name: string
    item?: string
  }>
}

export interface SchemaEventPage {
  '@context': string
  '@type': string
  name: string
  description: string
  url: string
  eventAttendanceMode?: string
  startDate?: string
  endDate?: string
  offers?: Array<{
    '@type': string
    url: string
    price: string
    priceCurrency: string
    availability: string
  }>
}

export interface SchemaFAQ {
  '@context': string
  '@type': string
  mainEntity: Array<{
    '@type': string
    name: string
    acceptedAnswer: {
      '@type': string
      text: string
    }
  }>
}

// Organization Schema - Core schema for the website
export function generateOrganizationSchema(): SchemaOrganization {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Andrew Tugume',
    url: 'https://andrewtugume.com',
    logo: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg',
    description: 'Educator, Technologist, and Investor helping workers, leaders, and learners succeed through biblical teaching, technology, and practical wisdom.',
    sameAs: [
      'https://twitter.com/_drewtugume',
      'https://linkedin.com/in/andrewtugume',
      'https://youtube.com/@andrewtugume',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    founder: {
      '@type': 'Person',
      name: 'Andrew Tugume',
    },
  }
}

// Article Schema - for blog posts
export function generateArticleSchema(
  title: string,
  description: string | undefined,
  slug: string,
  publishedDate: string,
  modifiedDate?: string,
  image?: string,
): SchemaArticle {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description || '',
    image: image || `https://andrewtugume.com/og/${slug}`,
    datePublished: new Date(publishedDate).toISOString(),
    dateModified: modifiedDate ? new Date(modifiedDate).toISOString() : new Date(publishedDate).toISOString(),
    author: {
      '@type': 'Person',
      name: 'Andrew Tugume',
      url: 'https://andrewtugume.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Andrew Tugume',
      logo: {
        '@type': 'ImageObject',
        url: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg',
      },
    },
  }
}

// Breadcrumb Schema - for navigation hierarchy
export function generateBreadcrumbSchema(
  breadcrumbs: Array<{ name: string; url?: string }>,
): SchemaBreadcrumb {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      ...(crumb.url && { item: crumb.url }),
    })),
  }
}

// Person/Creator Schema
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Andrew Tugume',
    url: 'https://andrewtugume.com',
    image: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg',
    jobTitle: ['Educator', 'Technologist', 'Investor'],
    sameAs: [
      'https://twitter.com/_drewtugume',
      'https://linkedin.com/in/andrewtugume',
      'https://youtube.com/@andrewtugume',
    ],
    description: 'Educator, Technologist, and Investor helping workers, leaders, and learners succeed.',
  }
}

// Course Schema - for educational offerings
export function generateCourseSchema(
  name: string,
  description: string,
  slug: string,
  organizationName: string = 'Andrew Tugume',
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: name,
    description: description,
    url: `https://andrewtugume.com/${slug}`,
    provider: {
      '@type': 'Organization',
      name: organizationName,
      sameAs: 'https://andrewtugume.com',
    },
  }
}

// Service Schema - for services offered
export function generateServiceSchema(
  name: string,
  description: string,
  serviceType: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: name,
    description: description,
    serviceType: serviceType,
    provider: {
      '@type': 'Organization',
      name: 'Andrew Tugume',
      url: 'https://andrewtugume.com',
    },
  }
}

// LocalBusiness Schema - for location-based services
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Andrew Tugume',
    description: 'Educational and technology services',
    url: 'https://andrewtugume.com',
    image: 'https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg',
  }
}

// FAQ Schema
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>,
): SchemaFAQ {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

// WebPage Schema
export function generateWebPageSchema(
  titleText: string,
  descriptionText: string,
  url: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: titleText,
    description: descriptionText,
    url: url,
    isPartOf: {
      '@id': 'https://andrewtugume.com',
    },
    inLanguage: 'en-US',
  }
}

// Aggregate Rating Schema - for testimonials/reviews
export function generateAggregateRatingSchema(
  ratingValue: number,
  reviewCount: number,
  bestRating: number = 5,
  worstRating: number = 1,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: ratingValue,
    bestRating: bestRating,
    worstRating: worstRating,
    reviewCount: reviewCount,
  }
}

// Video Schema
export function generateVideoSchema(
  name: string,
  description: string,
  thumbnailUrl: string,
  uploadDate: string,
  duration: string = 'PT0M0S',
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: name,
    description: description,
    thumbnailUrl: thumbnailUrl,
    uploadDate: uploadDate,
    duration: duration,
  }
}
