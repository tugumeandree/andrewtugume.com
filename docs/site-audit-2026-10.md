# andrewtugume.com — Site Audit & Implementation Plan

**Date:** 21 October 2026
**Scope:** The full working tree, including the uncommitted speaking, offers, library and partners work (`src/lib/brand.ts`, `/speaking`, `/store`, `/library`, `/partners`, `/api/booking`).
**Target positioning:** *"Andrew Tugume: Empowering workers, leaders, and believers with faith, skills, and capital in Africa."*
**Roles to project:** educator · technologist · work/productivity consultant · software engineer · speaker · investor
**Ventures to connect:** Qraft Solutions Hub · Qraft Academy · WorkMasters · CapitalMasters · Chara Experience

**How findings were checked:** reading the code, running a production build (`next build`, which passes), and probing a local `next start` with curl and headless Chrome. Severity: 🔴 critical · 🟠 high · 🟡 medium · ⚪ low.

---

## 0. Executive summary

The site is built on a modern stack and is mostly server-rendered, but it has four structural problems:

1. **Broken SEO plumbing.** Every page outputs the homepage as its canonical URL, and pages that set their own canonical output two conflicting tags. `robots.txt` blocks `/_next/` (the site's CSS and JS) and blocks the sitemap. All favicons are missing. Social preview images are SVG, which LinkedIn, Facebook, and X don't render.
2. **The entity story doesn't match the positioning.** The positioning ("workers, leaders, believers · faith, skills, capital") appears nowhere. Two of the five ventures (Qraft Solutions Hub, Chara Experience) are never mentioned. Meanwhile at least eight *other* names compete for attention: TechMasters, CourseMasters, Chariot Leadership Institute, Tabernacle Tech Institute, Nations Knowledge Community, Qraft Labs, Qraft Capital, and "Rata Qraft Solutions Limited". Faith content exists but has been deliberately downplayed (`/faith-knowledge` is now titled "Strategic Principles", and Nations Bible is described as a "legacy" community).
3. **Sprawling, overlapping routes.** About 40 routes, of which about 15 are thin, duplicated, redirected, or orphaned. For example, `/techmasters` and `/masters/techmasters` are both live and both in the sitemap; `/schools`, `/institutions`, and `/community` overlap; so do `/programs`, `/store`, and `/apply`.
4. **Conversion paths have holes.** The flagship mastermind's apply button points at a placeholder form URL. `/apply` has no form (only WhatsApp and email). Newsletter sign-ups email Andrew but aren't stored anywhere. There are no consulting or software-engineering service pages, even though both are roles in the positioning.

**Single biggest performance issue:** the headshot (`andrew tugume.jpg`) is **9.7 MB** and is loaded as a raw `<img>` in the Header *and* the Footer on every page, displayed at 36–48 px.

---

## 1. Current architecture

### 1.1 Stack and deployment

| Item | Finding | Severity |
|---|---|---|
| Framework | Next.js **16.1.6**, App Router, Turbopack (`next.config.js` → `turbopack: {}`) | — |
| React | **react 18.3.1** is installed; Next 16 requires React 19. `netlify.toml` sets `NPM_FLAGS = "--legacy-peer-deps"`, which hides the conflict. `@types/react` is 19, so the types don't match the runtime. | 🟠 |
| Language | TypeScript 5.9, `@/*` path alias | — |
| Styling | Tailwind **3.4** (`tailwind.config.cjs`): two colors (`primary #0B0B0B`, `accent #C7A14B`) plus custom `mm`/`ms` breakpoints used only by `/mastermind`. Global styles in `src/styles/globals.css`. | 🟡 |
| Fonts | Google Fonts `<link>` in `src/app/layout.tsx` (Sora 300–700 plus Playfair Display 500–700). Not `next/font`, so loading is render-blocking and can shift layout. | 🟠 |
| Content | MDX in `content/posts/` (**one post**: `2025-12-23-welcome.mdx`). Two separate pipelines: `src/lib/blog/posts.ts` (unified/remark → HTML) and `src/lib/mdx.ts` (`@mdx-js/mdx evaluate`, used only by the Bible-study lesson route). There is no `content/bible-study/` directory. | 🟡 |
| Backend | Route handlers: `src/app/api/contact`, `api/subscribe`, `api/booking` (all use the Resend REST API), `og/[slug]`, `twitter/[slug]` (SVG generators), `rss.xml`, `sitemap.xml` (custom route), plus `robots.ts` | — |
| Deploy | Netlify with `@netlify/plugin-nextjs`. Node 20 is set in `.nvmrc` and `netlify.toml`. | — |
| Analytics | GA4 via an inline script in `layout.tsx`, enabled only when `NEXT_PUBLIC_GA_ID` is set. No conversion events. | 🟡 |
| Lint/test | `"lint": "next lint"` is **broken**, because `next lint` was removed in Next 16 (verified: "Invalid project directory … \lint"). There's no ESLint config and no tests. | 🟠 |

### 1.2 Rendering

- Almost every page is a **static server component**, which is good. Build output: 45 routes, most `○ Static`.
- Client components: `error.tsx`, `MobileMenu`, `ContactForm`, `BookingForm`, `SubscribeForm`, `CopyButton`, and **`src/app/techmasters/TechMastersClient.tsx` (500 lines, the whole page is client-side just to switch pricing modes)**. 🟡
- `src/app/bible-study/[series]/[lesson]/page.tsx` destructures `params` synchronously. In Next 16 `params` is a Promise, so the route can never resolve a lesson, and it returns **HTTP 200 "Not found"** (a soft 404). It also has no `generateMetadata` and no `generateStaticParams`. 🔴
- `src/app/blog/[slug]/page.tsx` renders an `<h1>Post Not Found</h1>` with **HTTP 200** (verified: `/blog/nope` → 200) instead of calling `notFound()`. 🟠

### 1.3 Component organization

- `src/components/` is flat and has two layers:
  - **Legacy primitives that are barely used:** `Card`, `Container`, `Section`, `Typography` (H1–H4, Body, Caption, Lead). Most pages hand-write the same card class string (`bg-white border border-black/5 rounded-2xl p-6`) instead, about 60 times.
  - **Newer composed sections:** `PageHero`, `SectionHeading`, `OfferCard`, `TalkCard`, `PartnerCard`, `IdentitySection`, and others.
- Content lives in three places: `src/lib/brand.ts` (new single source), hard-coded arrays inside pages (`about`, `apply`, `programs`, `mastermind`, `bible-study`, `TechMastersClient`), and `src/lib/seo/utils.ts` → `SOCIAL_LINKS` / `SITE_DESCRIPTION` (stale, with a teal-era description).

### 1.4 Duplicated code / content

| Duplicate | Files |
|---|---|
| Same program pages twice | `src/app/techmasters/*` **and** `src/app/masters/techmasters/page.tsx`. Both are live and both are in the sitemap. |
| Overlapping institution hubs | `src/app/schools/page.tsx` (titled "Institutions"), `src/app/institutions/page.tsx`, `src/app/community/page.tsx` |
| Overlapping program/offer hubs | `src/app/programs/page.tsx`, `src/app/store/page.tsx`, `src/app/apply/page.tsx` (each re-lists programs with different copy) |
| Overlapping resource hubs | `src/app/resources/page.tsx`, `src/app/tech-resources/page.tsx`, `src/app/library/page.tsx` |
| OG generators | `src/app/og/[slug]/route.ts` and `src/app/twitter/[slug]/route.ts` (nearly identical SVGs in the old teal brand) |
| Markdown pipelines | `src/lib/blog/posts.ts` vs `src/lib/mdx.ts` |
| Brand constants | `src/lib/brand.ts` vs `src/lib/seo/utils.ts` (`SITE_*`, `SOCIAL_LINKS`) vs hard-coded strings in `layout.tsx`, `schema.ts`, `public/site.webmanifest` |

### 1.5 Dead code / dead routes

- **Shadowed by redirects in `next.config.js`** (the page can never render): `src/app/subscribe/page.tsx`, `src/app/masters/coursemasters/page.tsx` (*the most recent commit edited it, but it redirects to `/programs`*), `src/app/community/{workmasters,chariot-leadership,nations-bible}/page.tsx`, `src/app/partner/give/page.tsx`.
- **Linked but missing (404):** `/privacy` and `/terms` (`Footer.tsx`), `/institutions/qraft-labs` and `/institutions/qraft-capital` (`institutions/page.tsx`), `/search` (the SearchAction in the `layout.tsx` JSON-LD).
- **Unused dependencies:** `framer-motion`, `@mdx-js/react`, `remark`, `remark-html`, `date-fns` (no imports found).
- **Mostly unused helpers:** `src/lib/seo/utils.ts` (most exports), `generateFAQSchema`, `generateLocalBusinessSchema`, `generateVideoSchema`, `generateAggregateRatingSchema` in `src/lib/seo/schema.ts`, and `src/lib/posts.ts` (a one-line re-export).
- **Repo clutter:** `workmasters` and `workmasters.enc` at the repo root are two identical 640×640 JPEGs. Five `SEO_*.md` files and `README.md` describe Next 14 and the teal brand.

### 1.6 Architectural risks

| Risk | Detail | Sev |
|---|---|---|
| Leaked secret | `.env.example` contains a real-looking `RESEND_API_KEY=re_gkX4…`. It must be **rotated** and replaced with a placeholder. | 🔴 |
| React/Next mismatch | See 1.1; future Next minor versions may break at runtime. | 🟠 |
| Manual `<head>` in App Router | `layout.tsx` hand-writes canonical, icons, theme-color and manifest tags *and* sets `metadata`, which produces duplicates and conflicts (see §3). | 🔴 |
| Conflicting security headers | `netlify.toml` sets `X-Frame-Options: DENY`; `next.config.js` sets `SAMEORIGIN`. No CSP. `X-XSS-Protection` is deprecated. | ⚪ |
| Email deliverability | The API routes send from `noreply@andrewtugume.com`. **TODO: Confirm content** — is the domain verified in Resend? `api/contact` and `api/subscribe` report success even when no key is set, so leads can be lost silently. | 🟠 |
| No rate limiting | `/api/contact` and `/api/subscribe` have no honeypot and no rate limit (`/api/booking` has a honeypot). | 🟡 |
| Hot-linked third-party images | `foundr.com/...How-to-create-an-online-course.jpg` and `personalefinance.com/...webp` in `src/app/programs/page.tsx` and `src/app/apply/page.tsx`. Copyright, reliability, and off-brand problems. `foundr.com` is whitelisted in `next.config.js`. | 🟠 |

---

## 2. UI/UX audit

### 2.1 Visual hierarchy and typography
- **Good:** the black/gold palette and the Playfair + Sora pairing read as premium. The newer sections (`PageHero`, `SpeakingSection`, `ProofStrip`) have strong hierarchy.
- **Weak:** about 25 legacy pages (`one-on-one`, `institutions`, `schools/*`, `faith-knowledge`, `impact`, `leadership`, `tech-resources`, `contact`, `resources`, `masters/*`) use one template: a white rounded card, a 4xl heading, one paragraph, and a black "Claim Your Spot" pill. It looks generic, like a template site, and clashes with the new full-bleed pages.
- **Two design systems:** `src/app/mastermind/page.tsx` uses its own palette (navy `#16233E`, orange `#E87722`, `#3D4759`, and others, with 23+ hard-coded hex values) and custom breakpoints. It feels like a different site.
- The type scale is ad hoc: `text-3xl md:text-5xl`, `text-4xl md:text-6xl`, `text-[17px]`, `text-[12px]`, and so on. There are no tokens.
- Inline `style={{ fontFamily: 'Playfair Display, serif' }}` appears in four components (`TalkCard`, `ProofStrip`, `PartnerCard`, `PartnersSection`) instead of a Tailwind `font-display` utility.

### 2.2 Color and contrast
- `primary` is pure black (#0B0B0B), so a page alternates between pure black and off-white `#F7F6F2` with no mid-tone surface. The legacy teal (`#0F5666`) survives in `site.webmanifest`, the `mask-icon` in `layout.tsx`, and both OG generators.
- See §7 for contrast failures.

### 2.3 Navigation
- Header: About · Speaking · Offers · Library · Partners plus **Book Andrew** (`src/lib/brand.ts → navLinks`). There's no entry for **Ventures**, **Consulting/Services**, or **Faith**, which are core to the new positioning.
- Header subtitle: "Educator. Technologist. Investor." doesn't match the six target roles.
- About 15 live routes can't be reached from the nav (orphans): `/programs`, `/institutions`, `/schools/*`, `/faith-knowledge`, `/financial-intelligence`, `/impact`, `/leadership`, `/community`, `/tech-resources`, `/workmasters`, `/masters/*`, `/mastermind`, `/bible-study`.
- `MobileMenu.tsx`: no Escape-to-close, no focus trap, no `aria-controls`, and it doesn't close when the route changes (only when a link is clicked).

### 2.4 Hero (`src/components/HeroImproved.tsx`)
- The headline "Shaping the future of work and leadership in Africa." **does not state the target positioning.** It should name workers, leaders, and believers, and faith, skills, and capital.
- `brand.positioning` says "Founder of Rata Qraft Solutions Limited (Qraft Academy and many Masters programs)". That introduces a fourth Qraft name, and "many Masters programs" reads as vague. **TODO: Confirm content** — the canonical legal and brand names.
- The portrait is a CSS `background-image`, so it can't be prioritized as the LCP image, has no alt text, and crops unpredictably on mobile. The `-mt-10 md:-mt-16` hack pulls the hero under the sticky header.
- `h-[88vh] md:h-[100vh]` with content centered vertically means that on tall desktops the CTAs sit far from the top.

### 2.5 CTAs and conversion paths (details in §8)
- Legacy pages say "Claim Your Spot" (→ `/apply`) while new pages say "Book Andrew" (→ `/speaking#book`). There's no single primary-action rule.

### 2.6 Content clarity
- Repeated defensive copy ("This is not motivational speaking", "not theory", "not hype") appears on several pages (`about`, `FinalCTA` was rewritten, `faith-knowledge`, `impact`). It reads as insecure rather than authoritative.
- The deliberate scrubbing of faith (`/faith-knowledge` → "Strategic Principles"; `/schools/nations-bible` → "legacy … consolidated") **contradicts the "believers / faith" positioning**.

### 2.7 Mobile
- The new pages work at 390–520 px (verified with headless Chrome). The legacy pages are fine but plain. On `/store`, the sticky category nav scrolls horizontally with no fade or affordance to show there's more.

---

## 3. SEO audit

| # | Issue | Evidence / files | Sev |
|---|---|---|---|
| S1 | **Every page's canonical points to the homepage**, and pages with their own `alternates.canonical` emit two canonical tags | `layout.tsx` hard-codes `<link rel="canonical" href="https://andrewtugume.com">` and also sets `metadata.alternates.canonical`. Verified: `/speaking` outputs `canonical=/` **and** `canonical=/speaking`; `/faith-knowledge` outputs `canonical=/` only. | 🔴 |
| S2 | About 20 pages have **no metadata**, so they inherit the homepage title and description (duplicate titles and descriptions) | `bible-study/[series]/[lesson]`, `community/*`, `faith-knowledge`, `financial-intelligence`, `impact`, `leadership`, `masters/coursemasters`, `one-on-one`, `partner/give`, `schools/*` (all 5), `subscribe`, `tech-resources` | 🔴 |
| S3 | `robots.ts` disallows **`/_next/`** (Google can't load the CSS and JS it needs to render pages) and **`/sitemap.xml`**. The Googlebot group overrides `*`, so the rules differ per bot. `host` is non-standard. | `src/app/robots.ts` | 🔴 |
| S4 | Favicons are referenced but missing: `/favicon.ico` (404), `/apple-touch-icon.png`, `/favicon-32x32.png`, `/favicon-16x16.png`, `/safari-pinned-tab.svg` | `layout.tsx`, `public/` contains only `assets/og-home.png` and `site.webmanifest` | 🟠 |
| S5 | Blog OG and Twitter images are **SVG**, which LinkedIn, Facebook, X, and WhatsApp don't render. They also use the teal brand. | `src/app/og/[slug]/route.ts`, `src/app/twitter/[slug]/route.ts`, used by `blog/[slug]` `generateMetadata` | 🟠 |
| S6 | Default OG image is the 9.7 MB portrait JPG. `public/assets/og-home.png` exists but isn't used. Cards declare 1200×630, but the image isn't that size. | `layout.tsx`, `page.tsx`, `about/page.tsx` | 🟠 |
| S7 | Sitemap: hand-written route; `lastmod` = today for every static URL (misleading); lists duplicates (`/techmasters` + `/masters/techmasters`) and thin pages; obsolete `xmlns:mobile`; omits `/bible-study` | `src/app/sitemap.xml/route.ts` | 🟡 |
| S8 | Soft 404s (200 responses on missing content) | `blog/[slug]`, `bible-study/[series]/[lesson]` | 🟠 |
| S9 | `alternateLocale: ['en_GB','sw_KE','sw_TZ']` and `alternates.languages` all point to the same English URL, with no Swahili content | `layout.tsx` | 🟡 |
| S10 | Empty verification tags: `google: process.env… \|\| ''` and the same for Yandex | `layout.tsx` | ⚪ |
| S11 | Heading issues: `blog/[slug]` contains two `<h1>` branches (fine at runtime); legacy pages jump from h1 to h3; `SectionHeading` always renders `<h2>`, even on pages where the hero is the only h1 (fine) | — | ⚪ |
| S12 | Internal linking: about 15 orphan routes (see §2.3); `/masters/coursemasters` is linked from `about`, `apply`, and `programs` but redirects; legacy pages' only internal link is `/apply` | — | 🟠 |
| S13 | URL structure is inconsistent: `/workmasters` vs `/masters/capitalmasters` vs `/techmasters`; `/schools/nations-bible` for something branded "Nations Knowledge Community" | — | 🟡 |
| S14 | **Local relevance is weak.** "Kampala" appears in 3 files and "Uganda" in 2. Organization schema says `addressCountry: 'US'`. No location appears in titles or descriptions. No Google Business Profile link. | `src/lib/seo/schema.ts → generateOrganizationSchema` | 🟠 |
| S15 | Image alt text: mostly present (`alt={brand.name}`), but the hero portrait is a CSS background (no alt); `PageHero` uses `alt=""` (acceptable, decorative); program images use the title as alt | — | ⚪ |
| S16 | RSS: no `atom:link` self-reference; teal-era description ("…integrate faith and work") | `src/app/rss.xml/route.ts` | ⚪ |

---

## 4. AEO audit (answer engines)

*Can an assistant answer "Who is Andrew Tugume? What does he do? Who does he serve? How do I book him?" directly from the site?*

| Question | Is the answer on the site? | Gap |
|---|---|---|
| Who is Andrew Tugume? | Partly: `/about`, `bios.short` in `/speaking#media-kit` | There's no one-sentence definition that uses the target positioning and all six roles, placed high on `/` and `/about`. |
| What does he do? | Spread across `/store`, `/programs`, `/apply`, `/speaking` | There's **no consulting page and no software-engineering page**. Services aren't listed as discrete, named offerings with "who it's for / outcome / format / how to engage". |
| Who does he serve? | Implicit ("professionals, founders, operators") | Workers, leaders, and **believers** aren't named as audiences anywhere. |
| What ventures? | Inconsistent names (§5) | Qraft Solutions Hub and Chara Experience are missing. |
| Where is he based? | `brand.location` (media kit, footer) | Not in schema `address`; not in page copy near the definition. |
| How to contact/book? | Yes: `/speaking#book`, `/contact`, WhatsApp | Good. Add a `ContactPoint` to schema. |
| Pricing? | Mastermind and TechMasters only | **TODO: Confirm content** for the others. |

**Missing:**
- **No FAQs anywhere.** `generateFAQSchema` exists but nothing uses it.
- No question-led headings ("What is WorkMasters?", "How much does it cost to book Andrew?").
- No `/faq` page.
- No definitional opening paragraph on any venture page.
- No `llms.txt`.

---

## 5. GEO audit (generative search and citation)

| Signal | State | Sev |
|---|---|---|
| **Entity consistency** | Andrew's titles vary: "Educator. Technologist. Investor." (header), "Educator · Technologist · Investor · Speaker" (`brand.titles`), and "Educator, Technologist, Investor" (titles and schema). None include *software engineer* or *work/productivity consultant*. The company appears as "Rata Qraft Solutions Limited", "Qraft Solutions", "Qraft Labs", "Qraft Capital", and never as "Qraft Solutions Hub". The faith community appears as both "Nations Bible" (URL) and "Nations Knowledge Community". | 🔴 |
| **Venture scope** | Live: TechMasters, CourseMasters, Chariot Leadership Institute, Tabernacle Tech Institute, Nations Knowledge Community. **Not in your target list.** **TODO: Confirm content** — active, merged under a listed venture, or retired? Missing: **Qraft Solutions Hub**, **Chara Experience** (0 mentions). | 🔴 |
| **Person schema** | `generatePersonSchema` has `name`, `url`, `image`, `jobTitle`, and `sameAs` (3 links), and a mission description. It has no `founder`/`worksFor` links to Organization entities, no `knowsAbout`, no `address` (Kampala), no `alternateName` ("Coach Drew"), no `alumniOf`/`award` (TODO: Confirm content), and no stable `@id`. | 🟠 |
| **Organization schema** | It models *Andrew* as an Organization with `addressCountry: 'US'` and stale `sameAs` (`linkedin.com/in/andrewtugume`, `youtube.com/@andrewtugume` — **TODO: Confirm content**, do these exist?). There are no Organization nodes for the ventures. | 🔴 |
| **Original frameworks** | "Five Pillars of Mastery" (Work · Leadership · Learning · Technology · Capital) was **removed from the homepage** in the last change (`MasteryFramework.tsx` deleted). "Nine-offer architecture" exists only inside `/mastermind`. Neither has its own citable page. | 🟠 |
| **Authoritative content** | **1 blog post.** The `/resources` items are titles with no content behind them. The Bible-study lesson route can't render (§1.2). | 🔴 |
| **Case studies** | None. Testimonials in `src/components/TestimonialsSection.tsx` are anonymous ("Operations Lead, Nairobi") with specific numeric outcomes ("$80K → $165K"). **TODO: Confirm content** — are they real and attributable? If not, remove them. | 🟠 |
| **Proof stats** | `brand.stats`: 5,000+ trained · 10+ years · 3 schools founded (but 5 institutions are listed) · **"100M+ capital deployed" (no currency)**. **TODO: Confirm content** for all four. | 🟠 |
| **External credibility** | `appearances`, `mediaItems`, and `alliances` are empty. No press mentions, publications, or awards. **TODO: Confirm content.** | 🟠 |
| **Author identity on content** | The blog post has the author name but no author box, no link to `/about`, and no `author.@id`. | 🟡 |

---

## 6. Performance audit

| # | Issue | Files | Sev |
|---|---|---|---|
| P1 | **9.7 MB headshot** loaded twice on every page via raw `<img>` at 36–48 px | `Header.tsx`, `Footer.tsx`, `about/page.tsx`, `speaking/page.tsx` (media kit), `PageHero.tsx` | 🔴 |
| P2 | Hero portrait: a 252 KB PNG used as a CSS background. Cloudinary `f_auto,q_auto,w_1600` brings it to **23 KB** (measured). It can't be preloaded or prioritized. | `HeroImproved.tsx` | 🟠 |
| P3 | Render-blocking Google Fonts `<link>` (8 weights) | `layout.tsx` | 🟠 |
| P4 | Unused dependencies: `framer-motion`, `@mdx-js/react`, `remark`, `remark-html`, `date-fns` (they don't reach the bundle, but slow installs and widen the security surface) | `package.json` | ⚪ |
| P5 | The whole `/techmasters` page is a 500-line client component | `src/app/techmasters/TechMastersClient.tsx` | 🟡 |
| P6 | Layout-shift risk: `<img>` without width and height in `Header`, `Footer`, `PartnerCard` (logos), `PageHero`, `programs`, `apply`; late font swap | — | 🟡 |
| P7 | Hot-linked third-party images (uncached, third-party latency) | `programs/page.tsx`, `apply/page.tsx` | 🟡 |
| P8 | No `priority`/`fetchPriority` on any above-the-fold image | — | 🟡 |
| P9 | Animation: no motion library is used (good). `html { scroll-behavior: smooth }` in `globals.css` isn't wrapped in `prefers-reduced-motion` (see A6). | `globals.css` | ⚪ |

Static rendering covers about 95% of routes, so **TTFB and JS weight are healthy**. Core Web Vitals risk is driven almost entirely by images and fonts.

---

## 7. Accessibility audit

| # | Issue | Files | Sev |
|---|---|---|---|
| A1 | No skip-to-content link; `<main>` has no `id` | `layout.tsx`, `Header.tsx` | 🟠 |
| A2 | The global focus ring is `ring-primary` (black), which is invisible on the black sections (`ProofStrip`, `SpeakingSection`, `PageHero`, `FinalCTASection`, footer) | `globals.css`, `Button.tsx` | 🟠 |
| A3 | Mobile menu: no Escape handling, no focus trap or return, no `aria-controls`, and the overlay doesn't sit above content as a modal | `MobileMenu.tsx` | 🟡 |
| A4 | Contrast: `text-white/50` (and `/60`) on #0B0B0B is about 4.0–4.6:1, borderline for small text; `text-gray-400` on #F7F6F2 is about 2.4:1 (fails); gold `#C7A14B` text on white is about 2.3:1 (fails for the eyebrow labels on light sections) | 6× `white/50`, 7× `white/60`, 4× `gray-400`, 9× `gray-500`, all `text-accent` eyebrows on light backgrounds | 🟠 |
| A5 | Forms: labels are present (good). Error and success messages use `aria-live` (good). No `aria-invalid` and no field-level error messages. `ContactForm` nests a white card inside another card on `/contact`. | `ContactForm.tsx`, `BookingForm.tsx` | ⚪ |
| A6 | No `prefers-reduced-motion` handling anywhere (0 matches) | `globals.css` | 🟡 |
| A7 | Global `a { hover:underline }` also underlines button-style links unless each one opts out | `globals.css` | ⚪ |
| A8 | Emoji used as icons without `aria-hidden` remain in legacy pages | e.g. `programs/page.tsx`, `apply/page.tsx` | ⚪ |

---

## 8. Conversion audit

| Journey | Current path | Gaps | Sev |
|---|---|---|---|
| **Speaking / podcast** | `/speaking#book` → `BookingForm` → `/api/booking` (Resend) | Good structure. No calendar or availability info, no confirmation email to the requester, no GA event. Testimonials from event organizers are missing (TODO: Confirm content). | 🟡 |
| **Consulting (work/productivity)** | None. `/one-on-one` (Private Advisory) is the nearest. | **No consulting service page**: scope, deliverables, engagement model, intake. | 🔴 |
| **Software engineering / tech** | None for Andrew. TechMasters is mentorship. | **No page** for software-engineering services and no link to Qraft Solutions Hub. TODO: Confirm whether these are offered personally or through Qraft Solutions Hub. | 🔴 |
| **Corporate training** | An `OfferCard` on `/store` → `/speaking#book` | Needs its own page (formats, curriculum, outcomes) and intake. | 🟠 |
| **Programs** (WorkMasters, CapitalMasters, mastermind) | `/store` → program page → `/apply` (WhatsApp/email only) | **The mastermind apply button goes to `https://forms.gle/REPLACE_WITH_APPLICATION_FORM`** (`mastermind/page.tsx:7`). `/apply` has no form, so applications can't be tracked. | 🔴 |
| **Partnerships** | `/partners#partner-with-andrew` → `ContactForm` | Fine. Partners list is empty (TODO: Confirm content). | ⚪ |
| **Newsletter / lead magnet** | `SubscribeForm` → `/api/subscribe` | Emails Andrew only. **There's no list**, no double opt-in, and no delivered lead magnet. Digital toolkits are "Coming soon". | 🟠 |
| **Faith (believers)** | `/bible-study` (orphaned) | Not in the nav. Lesson pages are broken. Chara Experience is missing. | 🟠 |
| **Social proof** | `ProofStrip` stats, anonymous testimonials | Unverified (see §5). No logos, no press, no named endorsements. | 🟠 |
| **Measurement** | GA4 page views only | No events for `booking_submit`, `contact_submit`, `subscribe`, `apply_click`, `whatsapp_click`. | 🟠 |

---

## A. Prioritized backlog

Impact and effort are rated **H / M / L**. "Phase" refers to the phases in section C.

| ID | Item | Files / routes | Impact | Effort | Phase |
|---|---|---|---|---|---|
| B01 | Rotate the Resend key; put a placeholder in `.env.example` | `.env.example`, Resend dashboard, Netlify env | H | L | 1 |
| B02 | Remove the hard-coded `<head>` canonical, icon, and theme tags; move everything into `metadata`/`viewport`; give every page its own canonical | `src/app/layout.tsx` | H | L | 1 |
| B03 | Add `metadata` to the ~20 pages that have none (or 301 them away per B12) | see S2 | H | M | 1 |
| B04 | Fix `robots.ts` (allow `/_next/`, don't block the sitemap, one rule group) | `src/app/robots.ts` | H | L | 1 |
| B05 | Replace the sitemap route with `app/sitemap.ts`, using real `lastmod` values and only canonical URLs | `src/app/sitemap.xml/route.ts` → `src/app/sitemap.ts` | M | L | 1 |
| B06 | Add favicons and app icons through the App Router conventions; fix the manifest colors | `src/app/icon.png`, `apple-icon.png`, `favicon.ico`, `public/site.webmanifest` → `src/app/manifest.ts` | M | L | 1 |
| B07 | PNG OG images with `next/og` `ImageResponse` in the gold/black brand; a static default OG image | `src/app/opengraph-image.tsx`, `src/app/blog/[slug]/opengraph-image.tsx`; delete `og/[slug]`, `twitter/[slug]` | H | M | 1 |
| B08 | Rebuild the JSON-LD graph: Person (`@id`), ventures as Organizations (`founder` → Person), WebSite; fix the country, `sameAs`, and SearchAction | `src/lib/seo/schema.ts`, `layout.tsx` | H | M | 1 |
| B09 | Return `notFound()` for missing posts and lessons; fix async `params` in the lesson route | `blog/[slug]/page.tsx`, `bible-study/[series]/[lesson]/page.tsx` | M | L | 1 |
| B10 | Upgrade to React 19 and matching types; remove `--legacy-peer-deps`; replace `next lint` with ESLint flat config + `tsc` | `package.json`, `netlify.toml`, `eslint.config.mjs` | M | M | 1 |
| B11 | **Decide the entity model**: canonical names for Andrew's roles and the 5 ventures; status of TechMasters, CourseMasters, Chariot, Tabernacle, Nations, Qraft Labs/Capital, and "Rata Qraft Solutions Limited" | `src/lib/brand.ts` (single source) | H | L (decision) | 1 |
| B12 | Consolidate routes and add 301s (target sitemap in section B) | `next.config.js`, delete/merge pages | H | M | 1 |
| B13 | Fix the 9.7 MB headshot: `next/image` everywhere, or Cloudinary `f_auto,q_auto,w_*` URLs | `Header.tsx`, `Footer.tsx`, `PageHero.tsx`, `about/page.tsx`, `speaking/page.tsx`, `brand.ts` | H | L | 1 |
| B14 | Self-host fonts with `next/font` (Sora + Playfair, subset weights) | `layout.tsx`, `tailwind.config.cjs` | M | L | 2 |
| B15 | Design tokens: color scale (ink, surface, gold with AA-safe variants), type scale, spacing, radius, `font-display`; delete inline `fontFamily` | `tailwind.config.cjs`, `globals.css`, 4 components | H | M | 2 |
| B16 | Component library: consolidate `Card`, `Container`, `Section`, `Typography`, and `Button` with `SectionHeading`, `PageHero`, cards; add `Faq`, `Breadcrumbs`, `CTABand`, `VentureCard`, `ServiceCard` | `src/components/*` → `src/components/ui/*`, `src/components/sections/*` | H | M | 2 |
| B17 | Accessible header and mobile nav (skip link, Escape, focus trap, gold focus ring) | `Header.tsx`, `MobileMenu.tsx`, `globals.css` | M | M | 2 |
| B18 | Homepage rewritten around the positioning and the workers / leaders / believers × faith / skills / capital matrix | `src/app/page.tsx`, `HeroImproved.tsx`, `IdentitySection.tsx`, `brand.ts` | H | M | 3 |
| B19 | `/about` rewrite: definitional lead, six roles, timeline (TODO: Confirm content), ventures, beliefs | `src/app/about/page.tsx` | H | M | 3 |
| B20 | Service pages: Consulting, Training, Speaking, Advisory, Software & Technology | new `src/app/work-with-me/*` | H | M | 4 |
| B21 | Venture hub plus 5 venture pages, each with a definition, audience, offer, external link, and Organization schema | new `src/app/ventures/*` | H | M | 4 |
| B22 | Replace the mastermind form placeholder; build a real `/apply` form with an `/api/apply` route | `mastermind/page.tsx`, `apply/page.tsx`, new `api/apply/route.ts` | H | M | 4 |
| B23 | Newsletter: connect a real list (Resend Audiences or an ESP — TODO: Confirm choice), double opt-in, lead magnet | `api/subscribe/route.ts`, `SubscribeForm.tsx` | M | M | 4 |
| B24 | Case-study template plus the first 2–3 case studies (TODO: Confirm content) | new `content/case-studies/*`, `src/app/case-studies/*` | H | M | 4 |
| B25 | FAQ system: a site-wide `/faq` plus per-page FAQ blocks with `FAQPage` schema | new `src/components/Faq.tsx`, `src/app/faq/page.tsx`, service and venture pages | H | M | 5 |
| B26 | Framework pages: Five Pillars of Mastery, Nine-Offer Architecture | new `src/app/frameworks/[slug]` + `content/frameworks/*` | H | M | 5 |
| B27 | Unify the MDX pipeline (one loader for posts, lessons, frameworks, case studies); author box; categories; related links | `src/lib/content/*`, `blog/[slug]`, `bible-study/*` | M | M | 5 |
| B28 | Publish cornerstone content (8–12 pieces across faith, work, leadership, technology, capital) | `content/posts/*` | H | H | 5 |
| B29 | `llms.txt` and a plain-text "About Andrew" fact sheet | `src/app/llms.txt/route.ts` | M | L | 5 |
| B30 | Motion: scroll reveals with `motion-safe:` CSS, or a small `framer-motion` use behind reduced-motion checks | `src/components/*` | L | M | 6 |
| B31 | Bring `/mastermind` onto the main design system | `src/app/mastermind/page.tsx`, `tailwind.config.cjs` (`mm`/`ms`) | M | M | 6 |
| B32 | GA4 conversion events plus Search Console and Bing Webmaster | `layout.tsx` → `src/components/Analytics.tsx`, the forms | M | L | 7 |
| B33 | Security headers: one source, add CSP, remove the deprecated ones | `next.config.js`, `netlify.toml` | L | L | 7 |
| B34 | Rate limiting and a honeypot on contact and subscribe | `api/contact`, `api/subscribe` | M | L | 7 |
| B35 | Repo cleanup: delete `workmasters`, `workmasters.enc`, stale `SEO_*.md`, unused dependencies, unused SEO utils; rewrite `README.md` | repo root, `package.json`, `src/lib/seo/utils.ts` | L | L | 1 |
| B36 | Privacy and Terms pages (TODO: Confirm legal content) | new `src/app/privacy`, `src/app/terms` | M | L | 4 |

---

## B. Target sitemap and page architecture

The organizing principle is **Andrew (the master brand) → what he does (Work with me) → what he built (Ventures) → what he teaches (Insights, Faith, Frameworks) → proof (Case studies, Partners)**.

```
/                                   Home — positioning, roles, audiences, ventures, proof, CTAs
/about                              Definitional bio, 6 roles, story, beliefs, timeline*
  /about/media-kit                  (moved from /speaking#media-kit) bios, photos, fact sheet

/work-with-me                       Services hub — "How can I help?" router
  /work-with-me/speaking            (current /speaking) keynotes, podcasts, booking form
  /work-with-me/consulting          Work & productivity consulting*            NEW
  /work-with-me/training            Corporate & team training*                 NEW
  /work-with-me/advisory            1:1 private advisory (from /one-on-one)
  /work-with-me/technology          Software engineering & tech advisory*      NEW
                                    (or a pointer to Qraft Solutions Hub — TODO: Confirm)

/ventures                           Venture hub — one card per venture, clear relationship lines
  /ventures/qraft-solutions-hub     *                                          NEW
  /ventures/qraft-academy           (from /schools/qraft-academy)
  /ventures/workmasters             (from /workmasters)
  /ventures/capitalmasters          (from /masters/capitalmasters)
  /ventures/chara-experience        *                                          NEW
  [TODO: Confirm — TechMasters / CourseMasters / Chariot / Tabernacle / Nations:
   fold into a venture above, list under "Past & affiliated", or retire]

/programs                           Offers & shop (current /store): masterminds, courses, toolkits
  /programs/mastermind              (from /mastermind)
  /apply                            Real application form

/faith                              Believers hub — faith & work, Chara Experience link*
  /faith/bible-study                (from /bible-study)
  /faith/bible-study/[series]/[lesson]

/insights                           Blog (from /blog) — categories: work, leadership, faith, technology, capital
  /insights/[slug]
/frameworks                         Original IP hub                              NEW
  /frameworks/five-pillars-of-mastery
  /frameworks/nine-offer-architecture
/library                            Resources hub (merges /resources, /tech-resources)
/case-studies                       *                                            NEW
  /case-studies/[slug]
/partners                           Ecosystem & alliances*
/faq                                Consolidated FAQ                             NEW
/contact
/privacy, /terms                    *                                            NEW

* = needs content you supply (TODO: Confirm content)
```

**301 redirects to add** (`next.config.js`):
- `/speaking` → `/work-with-me/speaking`
- `/one-on-one` → `/work-with-me/advisory`
- `/store` → `/programs`
- `/mastermind` → `/programs/mastermind`
- `/workmasters` → `/ventures/workmasters`
- `/masters/capitalmasters` → `/ventures/capitalmasters`
- `/schools/qraft-academy` → `/ventures/qraft-academy`
- `/bible-study/*` → `/faith/bible-study/*`
- `/blog/*` → `/insights/*`
- `/resources` and `/tech-resources` → `/library`
- `/institutions`, `/schools`, `/community` → `/ventures`
- `/faith-knowledge` → `/faith`
- `/financial-intelligence` → `/ventures/capitalmasters`
- `/leadership` and `/impact` → `/work-with-me` or `/about`
- `/techmasters`, `/masters/*`, and the remaining `/schools/*` → per the B11 decision

**Navigation (header):** About · Work with me ▾ · Ventures ▾ · Programs · Insights ▾ (Insights, Faith, Frameworks, Library) · **Book Andrew** (primary) · Contact (secondary).

**Footer:** four columns (Work with me · Ventures · Learn · Connect) plus NAP (name, address, phone: "Kampala, Uganda") plus socials.

---

## C. Phased implementation plan

### Phase 1 — Technical foundations and SEO/AEO/GEO

**Goal:** a correct, crawlable, consistent entity before any visual work.

1. **Security and hygiene** (B01, B35): rotate the key; clean `.env.example`; delete `workmasters`, `workmasters.enc`, and the stale `SEO_*.md` files; `npm uninstall framer-motion @mdx-js/react remark remark-html date-fns` (reinstall framer-motion in Phase 6 if needed).
2. **Toolchain** (B10): React 19 + `@types/react@19`; drop `--legacy-peer-deps` in `netlify.toml`; `eslint.config.mjs` (`eslint-config-next`); scripts `lint` = `eslint .`, `typecheck` = `tsc --noEmit`.
3. **Entity model** (B11): put **one** canonical record in `src/lib/brand.ts`:
   - `person`: name, alternateName "Coach Drew", tagline (the positioning), six roles, location Kampala UG, sameAs
   - `ventures[]`: id, legal name, display name, one-line definition, URL, status
   - `audiences`: workers, leaders, believers
   - `pillars`: faith, skills, capital

   Delete `SITE_*`/`SOCIAL_LINKS` from `src/lib/seo/utils.ts` and import from `brand.ts` everywhere (`layout.tsx`, `schema.ts`, `rss.xml`, `manifest`). **TODO: Confirm content**: the venture names, URLs, and descriptions; the status of every non-listed venture.
4. **Metadata** (B02, B03, S9, S10):
   - In `layout.tsx`, remove the manual `<link rel="canonical">`, icons, `theme-color` and manifest tags; move the theme color into `export const viewport`.
   - Set `alternates: { canonical: './' }` at the root so every page self-canonicalizes. Drop the Swahili locales. Only emit verification tags when the env vars are set.
   - Add a `buildMetadata({ title, description, path, image })` helper in `src/lib/seo/metadata.ts` and use it on every page.
5. **Crawl files** (B04, B05, B06):
   - Rewrite `src/app/robots.ts`.
   - Replace `src/app/sitemap.xml/route.ts` with `src/app/sitemap.ts` (static routes from a route registry plus posts with real dates).
   - Add `src/app/icon.png`, `apple-icon.png`, `favicon.ico`, `manifest.ts`; delete `public/site.webmanifest`.
6. **Structured data** (B08): in `src/lib/seo/schema.ts`, build one `@graph` that includes:
   - `Person#andrew` (jobTitle ×6, knowsAbout, address Kampala UG, alternateName, sameAs, founder → ventures)
   - `Organization#<venture>` ×5 (founder → `#andrew`)
   - `WebSite` (no SearchAction until `/search` exists)

   Emit it once from `layout.tsx`. Delete the `SiteNavigationElement`.
7. **OG images** (B07): `src/app/opengraph-image.tsx` (the default) and `src/app/blog/[slug]/opengraph-image.tsx` with `ImageResponse`, in gold on black. Remove `og/[slug]` and `twitter/[slug]`.
8. **Correctness** (B09): `notFound()` in `blog/[slug]`; `await params`, `generateStaticParams`, and `generateMetadata` in the lesson route.
9. **Route consolidation** (B12): add the 301s from section B. Pages are moved (not rewritten) in this phase so URLs settle early.
10. **Image weight** (B13): add a `cld(url, { w })` helper in `src/lib/images.ts` that inserts `f_auto,q_auto,w_…`. Use `next/image` (or `cld`) in `Header`, `Footer`, `PageHero`, `about`, `speaking`, and the hero.

**Done when:**
- Lighthouse SEO scores 100 on 5 sample pages.
- Every page has a unique title and a self-referencing canonical.
- The Rich Results test validates Person and Organization.
- `/blog/nope` returns 404.
- LinkedIn Post Inspector shows a PNG card.

### Phase 2 — Design system and UI/UX foundation
1. **Fonts** (B14): `next/font/google` for Sora and Playfair exposed as CSS variables; `fontFamily: { sans, display }` in `tailwind.config.cjs`.
2. **Tokens** (B15):
   - Colors: `ink` (950–600), `surface` (`#F7F6F2`, white, `#EFEBE3`), `gold` (500 `#C7A14B` for dark backgrounds; 700 ≈ `#8A6A22` for gold *text on light backgrounds*, to reach AA).
   - Semantic `focus` color, type scale (`display-xl` to `caption`), section spacing (`py-section`), radius scale.
   - Remove the inline `fontFamily` styles (`TalkCard`, `ProofStrip`, `PartnerCard`, `PartnersSection`).
3. **Components** (B16): reorganize into `src/components/ui/` (Button, Card, Badge, Container, Eyebrow, Input, Select, Textarea, Field) and `src/components/sections/` (PageHero, SectionHeading, CTABand, ProofStrip, Faq, Breadcrumbs, VentureCard, ServiceCard, OfferCard, TalkCard). Retire `Typography.tsx`, `Section.tsx`, and the hand-written card class strings.
4. **Navigation** (B17):
   - Header with Work with me and Ventures dropdowns (keyboard operable).
   - `MobileMenu` as a modal dialog (focus trap, Escape, `aria-controls`, closes on route change).
   - Skip link plus `<main id="main">`.
   - Gold focus ring on dark sections.
   - Global `motion-reduce` guard for `scroll-behavior`.
5. **Page templates**: `ServicePageTemplate`, `VenturePageTemplate`, `ArticleTemplate` (with author box), `HubTemplate`.

**Done when:** every legacy card-style page renders through the new templates without copy changes, and axe shows 0 serious violations.

### Phase 3 — Homepage and core pages
1. **Home** (`src/app/page.tsx`, `HeroImproved.tsx`, `IdentitySection.tsx`, `brand.ts`):
   - H1 carries the positioning.
   - Subhead names the six roles.
   - Primary CTA: Book Andrew. Secondary: Work with me.
   - Hero portrait as `next/image priority` instead of a CSS background; remove the `-mt` hack.
   - **"Who I serve" matrix**: Workers / Leaders / Believers × Faith / Skills / Capital, each cell linking to the relevant venture or service.
   - Then: Ventures strip (5 cards), Work-with-me router, a frameworks teaser (restore *Five Pillars of Mastery* as a link to `/frameworks/...`), latest Insights, proof (verified stats only), FAQ (5 Qs), and the final CTA band.
2. **About** (`src/app/about/page.tsx`):
   - A definitional first paragraph (AEO).
   - Six-role grid.
   - Story (keep the existing copy).
   - Timeline (TODO: Confirm content: education, career milestones, founding dates).
   - Ventures and beliefs.
   - "Andrew at a glance" fact box (location, languages*, focus areas, contact).
3. **Media kit** → `/about/media-kit` (move from `/speaking`); add a downloadable one-sheet PDF (TODO: Confirm content).
4. **Contact** (`src/app/contact/page.tsx`): a router ("I want to book / hire / partner / join a program / ask something"), each option going to the right form with the subject prefilled; NAP block; map link to Kampala (optional).
5. **Faith hub** (`/faith`): restore the faith framing; Bible-study series; Chara Experience link (TODO: Confirm what Chara Experience is and how it relates).

### Phase 4 — Services, ventures, case studies, and conversion paths
1. **Service pages** under `/work-with-me/*`. Each has:
   - who it's for
   - problems solved
   - outcomes (no numbers unless verified)
   - formats and duration
   - process
   - pricing or "from" price (TODO: Confirm content)
   - FAQ
   - an intake form
   - `Service` schema with `provider` → `#andrew`
2. **Venture pages** under `/ventures/*`. Each has:
   - a one-sentence definition
   - Andrew's role (Founder / CEO, TODO: Confirm)
   - audience and flagship offer
   - an external site link
   - `Organization` schema
   - an explicit relationship line ("WorkMasters is a program by Andrew Tugume, delivered through Qraft Academy" — TODO: Confirm the true relationships)
3. **Applications** (B22): replace `APPLICATION_FORM_URL` in `mastermind/page.tsx`. Build an `ApplyForm` plus `/api/apply` (Resend, honeypot, confirmation email to the applicant). Make `/apply?program=` preselect the program.
4. **Lead capture** (B23): a real list in `api/subscribe/route.ts` (TODO: Confirm ESP); a lead magnet (e.g. a Five Pillars self-assessment PDF, TODO: Confirm content); thank-you states.
5. **Case studies** (B24): an MDX template (context → challenge → approach → outcome → quote), only with client permission. **TODO: Confirm content.**
6. **Proof**: fill `appearances`, `mediaItems`, and `alliances` in `brand.ts` (TODO: Confirm content). Verify or remove the `TestimonialsSection` quotes and `brand.stats`.
7. **Legal** (B36): `/privacy`, `/terms`.

### Phase 5 — Content, blog/MDX, FAQs, and internal linking
1. **One content layer** (B27): `src/lib/content/` with typed loaders for `posts`, `lessons`, `frameworks`, and `caseStudies`; shared MDX components; delete `src/lib/mdx.ts` and `src/lib/posts.ts`. Add `@tailwindcss/typography`, since `prose` is currently used without the plugin.
2. **Insights**: categories (work, leadership, faith, technology, capital), an author box linking to `/about` with `author.@id`, reading time, related posts, breadcrumbs, and `BlogPosting` schema with `isPartOf` and `about`.
3. **Frameworks** (B26): `/frameworks/five-pillars-of-mastery` and `/frameworks/nine-offer-architecture`, each with a definition, diagram, steps, an "applied in" section linking to ventures, and `DefinedTermSet`/`CreativeWork` schema.
4. **FAQ** (B25): a `Faq` component that renders `<details>` plus `FAQPage` JSON-LD. Use it on `/faq`, `/`, every service page, and every venture page. Seed questions: "Who is Andrew Tugume?", "What does Andrew speak about?", "How do I book Andrew?", "Where is Andrew based?", "What is WorkMasters?", "What is Qraft Solutions Hub?", "Does Andrew work with churches?", "What is Chara Experience?" (answers marked TODO where unknown).
5. **Cornerstone content** (B28): 8–12 pieces, at least 2 per pillar. **TODO: Confirm content**; the topics come from `signatureTalks`.
6. **Internal linking**: each service links to its 2 related ventures, 2 insights, and 1 framework; each insight links to 1 service and 1 venture; every hub links to all of its children; there are no orphan routes (check with a script during Phase 7).
7. **AI-readiness** (B29): `src/app/llms.txt/route.ts` (who, what, ventures, key URLs, contact).

### Phase 6 — Motion, premium interactions, and polish
1. Scroll-reveal for sections using CSS `@keyframes` behind the `motion-safe:` variant (no library needed). Reinstall `framer-motion` only if you need shared-layout transitions, for example in the venture switcher.
2. Micro-interactions: button press states, card hover lift (transform only, so no layout shift), a menu open/close transition, and a sticky "Book Andrew" pill on mobile after the user scrolls past the hero.
3. Bring `/mastermind` (B31) onto the main tokens; retire the `mm`/`ms` breakpoints and its private palette.
4. Editorial polish: pull quotes, a "Faith · Skills · Capital" visual motif, consistent photography (TODO: Confirm a new photoshoot or assets), and gold rules and dividers.
5. Use `next/image` with blur placeholders for every Cloudinary image.

### Phase 7 — Performance, accessibility, analytics, and launch QA
1. **Performance**: Lighthouse CI budgets (LCP < 2.5 s, CLS < 0.05, JS < 120 kB per route); slim `TechMastersClient` so only the toggle is a client island (or remove it per B11); audit the Cloudinary transforms.
2. **Accessibility**: an axe run on every route; keyboard walkthroughs of the nav, forms, and dropdowns; contrast fixes per §7; `aria-invalid` and field errors on forms.
3. **Analytics** (B32): `src/components/Analytics.tsx` via `next/script` with `afterInteractive`. Events: `booking_submit`, `apply_submit`, `contact_submit`, `subscribe`, `whatsapp_click`, `email_click`, `outbound_venture_click`. Set up Search Console and Bing Webmaster and submit the sitemap.
4. **Security** (B33, B34): set headers in one place (`next.config.js`) with a CSP that allows GA, Cloudinary, and Google Fonts (or none, after `next/font`); remove the `netlify.toml` duplicates; add rate limiting to the API routes.
5. **Launch QA checklist**:
   - redirect map test (every old URL → 200 at its new home)
   - broken-link crawl
   - Rich Results test
   - OG previews (LinkedIn, X, WhatsApp)
   - mobile pass at 360/390/768
   - an end-to-end submission through each form
   - Resend domain verification (TODO: Confirm)
   - 404/500 pages on-brand
   - updated `README.md`

---

## Open content decisions (TODO: Confirm content)

1. Canonical names and URLs for **Qraft Solutions Hub**, **Chara Experience**, and "Rata Qraft Solutions Limited", and how the ventures relate to each other.
2. The status of TechMasters, CourseMasters, Chariot Leadership Institute, Tabernacle Tech Institute, Nations Knowledge Community, Qraft Labs, and Qraft Capital.
3. Verification of `brand.stats` (including the currency for "100M+") and of the `TestimonialsSection` quotes.
4. Whether software engineering is offered personally or through Qraft Solutions Hub.
5. Consulting and training scope, formats, and pricing.
6. Credentials, education, awards, press, past stages, podcasts, and partners.
7. The choice of newsletter platform; the mastermind application form; Resend domain verification.
8. Whether `youtube.com/@andrewtugume` and `linkedin.com/in/andrewtugume` (currently in the old schema) are real.
