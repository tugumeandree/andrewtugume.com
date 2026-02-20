# SEO Quick Reference & Developer Guide

## 🏗️ Adding SEO to New Pages

### Step 1: Import Required Utilities
```tsx
import type { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/seo/schema'
import { getCanonicalUrl } from '@/lib/seo/utils'
```

### Step 2: Create Page Metadata
```tsx
export const metadata: Metadata = {
  title: 'Page Title | Andrew Tugume',
  description: 'Compelling meta description (155-160 chars max)',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  alternates: {
    canonical: getCanonicalUrl('/your-page'),
  },
  openGraph: {
    title: 'Page Title',
    description: 'Meta description',
    url: 'https://andrewtugume.com/your-page',
    type: 'website',
    images: [
      {
        url: 'image-url',
        width: 1200,
        height: 630,
        alt: 'Alt text',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Title',
    description: 'Meta description',
  },
}
```

### Step 3: Add Schema Markup
```tsx
export default function YourPage() {
  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: 'Home', url: 'https://andrewtugume.com' },
            { name: 'Your Page', url: 'https://andrewtugume.com/your-page' }
          ]))
        }}
      />
      
      {/* Your page content */}
    </>
  )
}
```

---

## 📝 Metadata Length Guidelines

| Element | Min | Max | Ideal |
|---------|-----|-----|-------|
| Title | 30 | 60 | 50-55 |
| Meta Description | 120 | 160 | 155-160 |
| H1 | 20 | 70 | 40-60 |
| URL slug | 5 | 75 | 40-50 |
| Image alt text | 5 | 125 | 50-125 |

---

## 🔗 Available Schema Types

### Quick Import
```tsx
import {
  generateOrganizationSchema,
  generatePersonSchema,
  generateArticleSchema,
  generateCourseSchema,
  generateServiceSchema,
  generateLocalBusinessSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema,
  generateVideoSchema,
  generateAggregateRatingSchema,
} from '@/lib/seo/schema'
```

### Usage Examples

**Organization Schema:**
```tsx
generateOrganizationSchema()
```

**Person Schema:**
```tsx
generatePersonSchema()
```

**Article Schema:**
```tsx
generateArticleSchema(
  title,
  description,
  slug,
  publishedDate,
  modifiedDate,
  imageUrl
)
```

**Course Schema:**
```tsx
generateCourseSchema(
  'Course Name',
  'Description',
  'course-slug',
  'Course Provider'
)
```

**Breadcrumb Schema:**
```tsx
generateBreadcrumbSchema([
  { name: 'Home', url: 'https://andrewtugume.com' },
  { name: 'Blog', url: 'https://andrewtugume.com/blog' },
  { name: 'Post Title' }
])
```

**FAQ Schema:**
```tsx
generateFAQSchema([
  { question: 'What is...?', answer: 'Answer here' },
  { question: 'How do...?', answer: 'Answer here' }
])
```

---

## 🖼️ Image Optimization

### Use Next.js Image Component
```tsx
import Image from 'next/image'

<Image
  src="url"
  alt="Descriptive alt text"
  width={800}
  height={600}
  priority // Add for above-the-fold images
  className="w-full h-auto"
/>
```

### Image Alt Text Best Practices
```
❌ Bad: "image.jpg", "photo", "pic"
✅ Good: "Andrew Tugume speaking at tech conference"
✅ Good: "WorkMasters course module overview"
✅ Good: "Bible study group discussing Proverbs"
```

### OG Image Generation
- Automatically generated at `/og/[slug]`
- Use in metadata: `https://andrewtugume.com/og/blog-post-slug`
- Twitter images: `/twitter/[slug]`
- No manual image needed—SVG generated from title/description

---

## 🔍 SEO Helper Functions

```tsx
import {
  getCanonicalUrl,
  slugify,
  sanitizeMetaDescription,
  sanitizeMetaTitle,
  generateKeywords,
  getImageMetadata,
  getOGImageUrl,
  generateAlternateLinks,
} from '@/lib/seo/utils'

// Generate canonical URL
const url = getCanonicalUrl('/blog/my-post')
// → 'https://andrewtugume.com/blog/my-post'

// Create SEO-friendly slug
const slug = slugify('My Blog Post Title')
// → 'my-blog-post-title'

// Trim description to optimal length
const desc = sanitizeMetaDescription(longDescription)
// → Automatically trimmed and ended with '...'

// Trim title with suffix
const title = sanitizeMetaTitle('Long Title', 'Andrew Tugume', 60)

// Generate OG image URL
const ogUrl = getOGImageUrl('blog-post-slug')
// → 'https://andrewtugume.com/og/blog-post-slug'
```

---

## 🎯 Recommended Keywords by Page

### Homepage
- Andrew Tugume
- Educator, Technologist, Investor
- WorkMasters
- Bible study online
- Leadership coaching
- Faith and work

### Blog
- [Blog topic] tutorial
- [Topic] for beginners
- How to [accomplish goal]
- Best practices for [topic]
- [Topic] guide

### About
- About Andrew Tugume
- Educator biography
- Technologist background
- Entrepreneur story
- Faith and work integration

### WorkMasters
- Career coaching
- Business coaching
- Leadership development
- Professional development
- Entrepreneurship training

### Bible Study
- Online Bible study
- Bible lessons
- Scripture study
- Faith learning
- Christian education

---

## 📱 Mobile Optimization Checklist

- [ ] Responsive design on all breakpoints
- [ ] Touch targets at least 48x48px
- [ ] Readable text without zooming
- [ ] No horizontal scroll
- [ ] Forms easy to fill on mobile
- [ ] CTAs prominent and clickable
- [ ] Images scale properly
- [ ] Fast load time (<3s)

---

## 🔗 Internal Linking Best Practices

### Structure
- Link to related articles
- Use descriptive anchor text
- 2-5 internal links per 1000 words
- Link to pillar content from supporting pages
- Create content clusters

### Example
```tsx
// Good anchor text
<Link href="/workmasters">
  Join WorkMasters for career coaching
</Link>

// Bad anchor text
<Link href="/workmasters">
  Click here
</Link>
```

---

## 📊 Keyword Research Template

| Keyword | Monthly Volume | Difficulty | Content Type | Intent |
|---------|---|---|---|---|
| faith and work | 1200 | High | Blog post | Informational |
| WorkMasters course | 80 | Low | Product page | Commercial |
| career coaching Uganda | 200 | Medium | Blog post | Local |

---

## ✅ Pre-Launch SEO Checklist

### Content
- [ ] All pages have unique H1
- [ ] Proper heading hierarchy
- [ ] Meta descriptions on all pages
- [ ] Internal links implemented
- [ ] 300+ words on important pages
- [ ] Images have alt text
- [ ] External links to authority sites

### Technical
- [ ] Sitemap submitted to GSC
- [ ] Robots.txt configured
- [ ] SSL certificate valid
- [ ] Mobile responsive tested
- [ ] Page speed checked
- [ ] No broken links
- [ ] Structured data validated

### On-Page
- [ ] Keyword in title
- [ ] Keyword in description
- [ ] Keyword in H1
- [ ] Keyword in first 100 words
- [ ] Natural keyword placement (no stuffing)
- [ ] Proper URL structure

### Social
- [ ] OpenGraph tags added
- [ ] Twitter cards configured
- [ ] Image previews tested
- [ ] Social sharing buttons working
- [ ] Schema markup validated

---

## 🚨 Common SEO Mistakes to Avoid

❌ **Duplicate Content**
Solution: Use canonical URLs, avoid multiple versions of same content

❌ **Thin Content**
Solution: Create 1500+ word posts with depth and examples

❌ **Keyword Stuffing**
Solution: Natural keyword placement (2-3 times per 1000 words)

❌ **Poor Internal Linking**
Solution: Link strategically with descriptive anchor text

❌ **Ignored Mobile Users**
Solution: Mobile-first design and testing

❌ **Missing Meta Tags**
Solution: Add unique meta descriptions to all pages

❌ **Broken Links**
Solution: Regularly audit and fix broken links

❌ **Slow Page Speed**
Solution: Optimize images, CSS, and use caching

---

## 🔄 Update Existing Pages

When updating page content:

1. Check Google Search Console for current rankings
2. Improve content for top keywords (even small improvements help)
3. Add internal links to newer, related content
4. Update metadata if needed
5. Monitor rankings for changes
6. Test mobile experience
7. Validate structured data

---

## 📈 Success Metrics Dashboard

Track these monthly:

```
Organic Traffic: ______ (+__% vs. last month)
Total Keywords Ranking: ______ 
Keywords in Top 10: ______
Keywords in Top 3: ______
Average CTR: _____%
Average Position: ______
Crawl Errors (GSC): ______
Pages Indexed: ______
```

---

## 🆘 Troubleshooting

### Pages Not Indexing?
1. Check Google Search Console coverage
2. Request indexing manually
3. Verify canonical URLs are correct
4. Check robots.txt isn't blocking
5. Ensure no `noindex` tags

### Rankings Dropped?
1. Check for penalties in GSC
2. Review recent changes
3. Check for technical issues
4. Analyze competitor changes
5. Review content quality

### Low CTR from SERPs?
1. Improve meta description (add trigger words)
2. Improve title (add benefit or number)
3. Add schema for rich snippets
4. Check SERP position (optimize for top 3)
5. A/B test new titles/descriptions

---

## 📚 Resources

### Tools Used
- Google Search Console
- Google Analytics 4
- Google PageSpeed Insights
- Screaming Frog SEO Spider
- Google Structured Data Testing Tool

### Learning
- Google Search Central Blog
- Moz SEO Beginner's Guide
- Backlinko SEO Guides
- Schema.org Documentation

---

## 💡 Pro Tips

1. **Content is King** - Write for users first, search engines second
2. **Links Matter** - Build relationships and get backlinks
3. **Speed Counts** - Optimize images and remove unused scripts
4. **Mobile First** - Design and test for mobile devices first
5. **Consistency** - Publish regularly and maintain quality
6. **Monitor** - Check GSC and Analytics weekly
7. **Iterate** - Improve existing content frequently

---

## 🔐 Environment Variables

Create `.env.local` file in project root:

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Search Console Verification
NEXT_PUBLIC_GOOGLE_VERIFICATION_CODE=your-verification-code-here

# Yandex Verification (optional)
NEXT_PUBLIC_YANDEX_VERIFICATION_CODE=your-yandex-code-here
```

Then reference in code:
```tsx
{process.env.NEXT_PUBLIC_GA_ID && (
  // GA script loads
)}
```

---

**Last Updated:** February 2026
**Version:** 1.0 (Enterprise SEO)
**Maintainer:** Development Team
