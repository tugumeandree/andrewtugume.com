/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dwa3soopc/**',
      },
      {
        protocol: 'https',
        hostname: 'foundr.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    unoptimized: false,
  },
  
  // Compression and performance
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  productionBrowserSourceMaps: false,
  
  // Turbopack configuration (Next.js 16+)
  turbopack: {},
  
  // Security and SEO headers
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'CDN-Cache-Control',
            value: 'max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'CDN-Cache-Control',
            value: 'max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, s-maxage=604800',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
        ],
      },
      {
        source: '/rss.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/rss+xml',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
        ],
      },
      {
        source: '/:all*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()',
          },
        ],
      },
    ]
  },

  // Redirects for SEO — see docs/brand-architecture-2027/01-audit-and-plan.md
  async redirects() {
    const permanent = (source, destination) => ({ source, destination, permanent: true })

    return [
      // Offers hub → Explore Programmes
      permanent('/store', '/programs'),
      permanent('/store/products', '/programs'),
      permanent('/store/services', '/programs'),
      permanent('/store/events', '/programs'),

      // Institutions and partners → Ecosystem
      permanent('/partners', '/ecosystem'),
      permanent('/partner', '/ecosystem'),
      permanent('/partner/give', '/ecosystem#partner'),
      permanent('/institutions', '/ecosystem'),
      permanent('/schools', '/ecosystem'),
      permanent('/schools/qraft-academy', '/ecosystem#qraft-academy'),

      // CourseMasters → Qraft Academy; CapitalMasters → Qraft Capital
      permanent('/masters/coursemasters', '/ecosystem#qraft-academy'),
      permanent('/masters/capitalmasters', '/ecosystem#qraft-capital'),
      permanent('/financial-intelligence', '/ecosystem#qraft-capital'),

      // ContentMasters → InfluenceMasters (no legacy pages existed; catches external links)
      permanent('/contentmasters', '/influencemasters'),
      permanent('/content-masters', '/influencemasters'),

      // Unified resource library
      permanent('/library', '/resources'),
      permanent('/tech-resources', '/resources'),
      permanent('/subscribe', '/resources'),

      // Programme pages folded into WorkMasters
      permanent('/one-on-one', '/workmasters#advisory'),
      permanent('/leadership', '/workmasters'),
      permanent('/community', '/workmasters'),
      permanent('/community/workmasters', '/workmasters'),

      // Bible Study → FaithMasters. Nested paths, query strings and #anchors carry over;
      // older faith routes go straight to the new page so there are no redirect chains.
      // The landing page has its own rule: an empty :path* leaves a trailing slash on Vercel.
      permanent('/bible-study', '/faithmasters'),
      permanent('/bible-study/:path+', '/faithmasters/:path+'),
      permanent('/faith-knowledge', '/faithmasters'),

      // Retired programmes and institutions (pages deleted November 2026)
      permanent('/techmasters', '/programs'),
      permanent('/masters/techmasters', '/programs'),
      permanent('/workmasters/techmasters', '/programs'),
      permanent('/schools/chariot-leadership', '/ecosystem'),
      permanent('/community/chariot-leadership', '/ecosystem'),
      permanent('/schools/tabernacle-tech', '/ecosystem'),
      permanent('/schools/nations-bible', '/faithmasters'),
      permanent('/community/nations-bible', '/faithmasters'),

      // Other
      permanent('/impact', '/about'),
      permanent('/book', '/speaking#book'),
      permanent('/media', '/speaking#media-kit'),
    ]
  },

  // Rewrites for clean URLs
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [],
    }
  },
}

module.exports = nextConfig

