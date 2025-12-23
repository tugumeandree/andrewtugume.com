# Andrew Tugume

> **Teacher  Technologist  Investor**  
> Helping yousucceed

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

##  Project Overview

This is the official website for Andrew Tugume
### The Three Vehicles

1. **WorkMasters**  For Workers
   - Content for entrepreneurs, freelancers, and employees
   - Qraft Academy school
   - Millions of community members

2. **Bible Study & Discipleship**  For Bible Scholars
   - Scripture teaching and application
   - Nations Bible School
   - Millions of community members

3. **Leadership Exchange**  For Leaders
   - Bible-based leadership frameworks
   - Chariot Leadership Institute
   - Millions of  community members

Plus **TechMasters** for technology education across all three pillars.

##  Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** MDX for rich content authoring
- **Images:** Cloudinary CDN
- **Deployment:** Vercel (recommended)

##  Project Structure

```
andrewtugume.com/
 src/
    app/                    # Next.js App Router pages
       about/             # About Andrew page
       workmasters/       # WorkMasters content
       bible-study/       # Bible Study content
       leadership/        # Leadership content
       schools/           # Four school pages
       layout.tsx         # Root layout with SEO
       page.tsx           # Home page
       sitemap.ts         # Dynamic sitemap
       robots.ts          # Robots.txt
    components/            # Reusable components
       Header.tsx         # Mobile-responsive nav
       Footer.tsx         # Footer with social links
       AndrewsDesk.tsx    # Personal update component
    styles/                # Global styles
 public/                    # Static assets
```

##  Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/tugumeandree/andrewtugume.com.git
cd andrewtugume.com

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

##  Key Features

### SEO Optimized
-  Comprehensive metadata and Open Graph tags
-  Twitter Card integration (@_drewtugume)
-  Schema.org structured data (Person, WebSite)
-  Dynamic sitemap and robots.txt
-  Semantic HTML with proper heading hierarchy
-  Image optimization with Cloudinary

### Mobile-First Design
-  Fully responsive across all devices
-  Hamburger menu with slide-out navigation
-  Touch-friendly tap targets (44px minimum)
-  Optimized typography scaling
-  No horizontal scrolling

### Performance
-  AVIF and WebP image formats
-  Static asset caching (1 year)
-  Lazy loading for below-fold images
-  Gzip compression
-  Optimized bundle sizes

### Accessibility
-  ARIA labels for screen readers
-  Keyboard navigation support
-  Semantic HTML structure
-  Focus management in mobile menu

##  Design System

### Colors
- **Primary:** #0F5666 (Teal Blue)
- **Accent:** #D9A441 (Gold)
- **Workers:** Blue (#2563EB)
- **Scholars:** Purple (#9333EA)
- **Leaders:** Green (#16A34A)
- **Technology:** Indigo (#4F46E5)

### Typography
- **Font:** Inter, system-ui, -apple-system
- **Scale:** Responsive with breakpoint-aware sizing

##  Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Run production build
npm run lint         # Lint code
npm run type-check   # TypeScript type checking
```

##  Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Configure environment variables (if any)
4. Deploy

### Environment Variables

Create a .env.local file for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
GOOGLE_VERIFICATION_CODE=your-verification-code
```

##  Analytics & SEO

- **Google Search Console:** Submit sitemap at /sitemap.xml
- **Structured Data:** Validated with Google Rich Results Test
- **Performance:** Lighthouse score targets 90+

##  Contributing

This is a personal website project. However, if you notice bugs or have suggestions:

1. Open an issue
2. Submit a pull request
3. Reach out on Twitter: [@_drewtugume](https://x.com/_drewtugume)

##  Content Management

Content is managed through:
- MDX files for blog posts and lessons
- Component-based pages for main navigation
- Cloudinary for image hosting

##  License

MIT License - feel free to learn from this codebase!

##  Connect

- **Website:** [andrewtugume.com](https://andrewtugume.com)
- **Twitter/X:** [@_drewtugume](https://x.com/_drewtugume)
- **Email:** Contact form on website

---

**Built with  by Andrew Tugume**  
*Integrating faith with work, one line of code at a time.*
