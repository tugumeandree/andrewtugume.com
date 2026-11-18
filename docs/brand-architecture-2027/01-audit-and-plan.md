# AndrewTugume.com — 2027 Brand Architecture
## Part 1: Pre-implementation deliverables (audit, sitemap, migration matrix, design plan)

**Prepared:** 18 November 2026 · **Branch:** `feature/brand-architecture-2027` (nothing is committed to `main` or deployed)
**Builds on:** `docs/site-audit-2026-10.md` (technical, SEO and accessibility audit). This document doesn't repeat those findings, except where they affect the new architecture.

---

## 1. Existing website audit

### 1.1 Stack (confirmed)
- **Framework:** Next.js 16.1.6 (App Router), React 18.3, TypeScript, Tailwind 3.4.
- **Hosting:** Netlify (`@netlify/plugin-nextjs`).
- **Content:**
  - MDX blog in `content/posts/` (**1 post**).
  - A Bible-study lesson route with no lesson files.
- **No CMS, database, authentication, payments, event-registration system, or LMS.**
- **Forms** (all send email through Resend):
  - `/api/contact`
  - `/api/subscribe` (emails Andrew; there's no list)
  - `/api/booking` (speaking requests)
- **Analytics:** GA4 page views only, enabled only when `NEXT_PUBLIC_GA_ID` is set.

### 1.2 Search results for brand terms (the whole repo was searched, including unlinked routes)

| Term | Found in | Notes |
|---|---|---|
| WorkMasters | 14 files: `/workmasters`, `/apply`, `/programs`, `/about`, `/leadership`, `/mastermind`, `/community/workmasters` (redirected) | A 6-month coaching cohort. The Make More & Better Offers mastermind belongs to the same family. |
| InfluenceMasters | **0** | New |
| ContentMasters | **0** | No legacy URLs exist in the repo |
| CourseMasters | 6 files; `/masters/coursemasters` (redirected to `/programs` in `next.config.js`) | |
| TechMasters | 13 files; **two live duplicate pages** `/techmasters` and `/masters/techmasters`; free WhatsApp community plus paid tiers ($90–$177/mo) | Status needs an owner decision |
| TalentMasters, SystemMasters | **0** | New names (ecosystem only) |
| CapitalMasters | 10 files; `/masters/capitalmasters`, `/financial-intelligence` | Moves to Qraft Capital |
| Qraft Academy | 6 files; `/schools/qraft-academy` links to `https://qraftacademy.com/` | The only verified ecosystem URL |
| Qraft Capital | 1 file (`/institutions`, linking to a non-existent `/institutions/qraft-capital`) | |
| Qraft Group / Rata Qraft Solutions | Only in the `src/lib/brand.ts` positioning line (your edit) | |
| Future of Work Forum / Tour / Awards | **0** ("future of work" appears only as a phrase) | New |
| Bible Study | `/bible-study` ("Workers & Leaders Bible Study": weekly, **Fridays 8–9 PM EAT, Google Meet `meet.google.com/jbq-qumi-ntf`**); `/bible-study/[series]/[lesson]` (broken); `/faith-knowledge` (renamed "Strategic Principles") | Real and running (needs confirmation for 2027) |
| Chariot Leadership Institute | 5 files; `/schools/chariot-leadership` | Not in the new architecture |
| Nations Knowledge Community | 4 files; `/schools/nations-bible` (described as "legacy") | Not in the new architecture |
| Tabernacle Tech Institute | `/schools/tabernacle-tech` | Not in the new architecture |
| YouTube | Only `youtube.com/@andrewtugume` in old schema/utils (**unverified**). No channel URL, channel ID, playlists or videos. | The URL must be configurable and confirmed |
| Rachael Aine, Collins Atuhaire, WorkSmart, LIVE, CIRCLE | **0** | New |

### 1.3 Route inventory

**Visibility:** Nav = in the header menu · Linked = linked from another page · Orphan = no inbound links · Redirected = a redirect in `next.config.js` shadows the page (it can never render).
**Quality:** H/M/L. **Alignment:** fit with the 2027 architecture. **Priority:** P1–P5 follow your §54–58.

| Route | Purpose | Visibility | Quality | Alignment | SEO considerations | Recommended action | Pri |
|---|---|---|---|---|---|---|---|
| `/` | Home | Nav | M (rebuilt last month around speaking) | Low: wrong positioning, unverified stats and testimonials | Inherits root canonical | **Rebuild** per §29–38 | P1 |
| `/about` | Bio | Nav | H (story, beliefs) | Medium: lists the old ecosystem | Good metadata | **Update** hero, ecosystem and invitation sections; keep the story | P1 |
| `/workmasters` | 6-month cohort | Orphan | M | Medium | Course schema | **Rebuild** as the Productive Capital hub | P2 |
| `/mastermind` | Make More & Better Offers (Oct 2026 cohort) | Orphan | H (copy), but **the apply button is a placeholder form, the dates have passed, and "12 seats remaining" is hard-coded** | Feeds the WorkMasters Offer Accelerator | Own metadata | Keep the URL; **point the broken form at the WorkMasters enquiry**; owner to confirm whether the cohort closed | P2 |
| `/bible-study` | Weekly Friday study | Orphan | M; **3 anonymous testimonials** | High | Own metadata | **Rebuild** per §18; keep the weekly study; remove unverified testimonials | P2 |
| `/bible-study/[series]/[lesson]` | Lesson pages | Orphan | **Broken** (params not awaited; no content; 200 on missing) | High (future) | Soft 404 | Fix to return 404 until lessons exist | P3 |
| `/programs` | Program catalogue (5 programmes) | Orphan | M | Low (TechMasters, CourseMasters, CapitalMasters) | Own metadata | **Rebuild** as the "Explore Programmes" hub for all three initiatives | P1 |
| `/apply` | WhatsApp/email application | Linked | M | Low (lists old programmes) | Own metadata | Keep for now; re-point in Phase 4 | P4 |
| `/resources` | Resource titles **with no content behind them** | Nav | L (presents non-existent toolkits) | Medium | Own metadata | **Rebuild** as the unified library from real content only | P3 |
| `/library`* | Library hub | Nav* | M | Medium | Own metadata | **Merge into `/resources`**; 301 | P3 |
| `/tech-resources` | Tools list | Orphan | L | Low | No metadata | 301 → `/resources` | P3 |
| `/blog`, `/blog/[slug]` | Essays (1 post) | Linked | M | High | Missing posts are soft 404s; SVG OG images | Keep; label as "Insights" in Resources | P3 |
| `/speaking`* | Talks, booking form, media kit | Nav* | H | Medium (unverified stats, old bios) | Own metadata | **Keep** as the speaking/partnerships pathway (footer, About); remove unverified claims; route ministry invitations to `/bible-study/invite` | P1 |
| `/store`* | Offers & shop | Nav* | M | Low (old offers, "coming soon" toolkits that don't exist) | | 301 → `/programs` | P1 |
| `/partners`* | Partners + enquiry | Nav* | M | Medium | | **Merge into `/ecosystem`**; 301 | P1 |
| `/institutions` | Institutions list | Orphan | L (2 links to 404s) | Low | Own metadata | 301 → `/ecosystem` | P1 |
| `/schools` | Same as `/institutions` | Orphan | L | Low | No metadata | 301 → `/ecosystem` | P1 |
| `/schools/qraft-academy` | Qraft Academy stub | Linked | L | High (ecosystem) | No metadata | 301 → `/ecosystem#qraft-academy` | P1 |
| `/schools/chariot-leadership`, `/schools/nations-bible`, `/schools/tabernacle-tech` | Institution stubs | Linked from `/schools` | L | **Unknown** | No metadata | **Keep live, remove from navigation; owner decision** (don't redirect unrelated programmes to the wrong place) | P5 |
| `/masters/capitalmasters` | CapitalMasters | Orphan | M | Moves to Qraft Capital | Own metadata | 301 → `/ecosystem#qraft-capital` | P1 |
| `/financial-intelligence` | "Capital Intelligence" stub | Orphan | L | Moves to Qraft Capital | No metadata | 301 → `/ecosystem#qraft-capital` | P1 |
| `/masters/coursemasters` | CourseMasters | Redirected → `/programs` | L | Moves to Qraft Academy | | Change the redirect → `/ecosystem#qraft-academy` | P1 |
| `/techmasters`, `/masters/techmasters` | TechMasters (duplicate pages) | Orphan | M | **Unknown** | Duplicate content | **Keep; owner decision** (legacy or future) | P5 |
| `/one-on-one` | Private advisory | Linked | L | Feeds WorkMasters Advisory | No metadata | 301 → `/workmasters#advisory` | P2 |
| `/faith-knowledge` | "Strategic Principles" stub | Orphan | L | Low | No metadata | 301 → `/bible-study` | P2 |
| `/leadership`, `/impact`, `/community` | Thin stubs | Orphan | L | Low | No metadata | 301 → `/workmasters` (leadership), `/about` (impact), `/workmasters#circle` (community) | P1 |
| `/contact` | Contact form | Linked | M | High | Own metadata | Keep; add interest routing | P1 |
| `/subscribe`, `/community/*`, `/partner/give` | Already redirected | — | — | — | — | Keep the redirects; update targets | P1 |
| `/api/contact`, `/api/subscribe` | Email | — | **Report success when sending fails**; no spam protection | — | — | **Fix** (§45 requirement) | P1 |
| `/og/[slug]`, `/twitter/[slug]` | SVG social images | — | Social platforms don't render SVG | — | — | Phase 5 | P5 |

\* Uncommitted work from the previous session.

### 1.4 Components and assets
- **Reusable:** `PageHero`, `SectionHeading`, `Button` (with an accent variant), `TalkCard`, `BookingForm`, `ContactForm`, `SubscribeForm`, `CopyButton`, `ProofStrip`, `Header`, `MobileMenu`, `Footer`.
- **Being retired** (homepage-only, replaced): `IdentitySection`, `SpeakingSection`, `OffersSection`, `OfferCard`, `LibrarySection`, `PartnersSection`, `PartnerCard`, `TestimonialsSection`.
- **Photos (authentic, Cloudinary):**
  - `andrew tugume.jpg` (headshot; **9.7 MB original**)
  - `andrew-hero-image_evrxyc.png` (hero portrait)
  - `WorkMasters_2_pthuuz.jpg`
  - `IMG_5942_c83b2h.jpg`
- **Hot-linked third-party images (to remove):** `foundr.com`, `personalefinance.com`.
- **Logos:** none for WorkMasters, InfluenceMasters, Bible Study, Qraft Group or Future of Work Forum → use typographic treatments (§48).

### 1.5 Claims audit (§4): **none can be verified from the repository**

| Claim | Where | Treatment |
|---|---|---|
| "5,000+ professionals trained" | `brand.ts` stats and bios, old home | Remove from public pages pending verification |
| "10+ years building in Africa" | stats | Remove pending verification |
| "3 schools founded" (5 institutions listed) | stats | Remove pending verification |
| "100M+ capital deployed" (no currency) | stats | Remove pending verification |
| "Deployed capital across commodities, logistics, real estate…", "fund investments generating returns" | `brand.ts` roles, About | Neutralise wording; owner to verify |
| Income outcomes ("$80K → $165K", "3x ROI", etc.) | `TestimonialsSection.tsx` | Remove from public pages |
| Anonymous testimonials (3 coaching, 3 Bible study) | Home, `/bible-study` | Remove from public pages pending verification |
| "Founded Qraft Academy, Chariot Leadership Institute, Nations Knowledge Community" | bios, About | Keep Qraft Academy (consistent with your brief); others pending owner confirmation |

---

## 2. Before-and-after sitemap

### Primary navigation
**Before:** About · Speaking · Offers · Library · Partners · [Book Andrew]
**After:** About · WorkMasters · InfluenceMasters · Bible Study · Resources · My Ecosystem · [**Explore Programmes**]

Home is reached through the logo. Mobile shows all seven items, including Home.

### Routes

| Route | Status | Source |
|---|---|---|
| `/` | **Rebuilt** | §29–38 |
| `/about` | **Updated** | §39 |
| `/workmasters` | **Rebuilt**; LIVE, CIRCLE, WorkSmart, Offer Accelerator and Advisory as anchored sections (`#live`, `#circle`, `#worksmart`, `#offers`, `#advisory`) | §6–8 |
| `/influencemasters` | **New**; Academy, Worklab, Studio, Advisory and Media as anchored sections | §9–12 |
| `/bible-study` | **Rebuilt**; four tracks as sections (`#work-leadership`, `#business-finance`, `#stewardship`, `#relationships`) | §13–18 |
| `/bible-study/invite` | **New** (guest teaching and preaching invitation form) | §23 |
| `/ecosystem` | **New** (replaces `/partners`, `/institutions`, `/schools`) | §40–41 |
| `/programs` | **Rebuilt** ("Explore Programmes" hub; URL kept for SEO) | §27, §46 |
| `/resources` | **Rebuilt** (unified library from real content) | §42 |
| `/speaking` | **Kept/updated** (speaking and partnership enquiries) | §44 |
| `/contact` | **Kept** (interest routing added) | §45 |
| `/mastermind` | **Kept** (CTA fixed) | |
| `/blog`, `/blog/[slug]`, `/apply`, `/techmasters`, `/masters/techmasters`, `/schools/{chariot-leadership,nations-bible,tabernacle-tech}` | **Kept unchanged** (pending owner decisions) | |

**Deferred subpages.** These wait until real content exists, so no empty pages are created:
- `/workmasters/{live,circle,worksmart,offers,advisory}`
- `/influencemasters/{academy,worklab,studio,advisory,media}`
- `/bible-study/{teachings,courses,study-guides,events}`
- `/resources/[slug]`, `/events/[slug]`

### Redirects (301, in `next.config.js`)

| From | To | Reason |
|---|---|---|
| `/store`, `/store/products`, `/store/services` | `/programs` | Offers hub replaced |
| `/store/events` | `/programs` | |
| `/partners`, `/partner`, `/partner/give` | `/ecosystem` | Partner enquiry moves to Ecosystem |
| `/institutions`, `/schools` | `/ecosystem` | Reframed as ecosystem (§4) |
| `/schools/qraft-academy`, `/masters/coursemasters` | `/ecosystem#qraft-academy` | CourseMasters → Qraft Academy (§4) |
| `/masters/capitalmasters`, `/financial-intelligence` | `/ecosystem#qraft-capital` | CapitalMasters → Qraft Capital (§4) |
| `/library`, `/tech-resources` | `/resources` | Unified library |
| `/contentmasters`, `/content-masters` | `/influencemasters` | ContentMasters → InfluenceMasters (§12; defensive, since no legacy pages exist) |
| `/one-on-one` | `/workmasters#advisory` | Advisory lives in WorkMasters |
| `/faith-knowledge` | `/bible-study` | |
| `/leadership` | `/workmasters` | |
| `/impact` | `/about` | |
| `/community`, `/community/workmasters` | `/workmasters` | |
| `/community/nations-bible` | `/schools/nations-bible` (unchanged) | |
| `/book` | `/speaking#book` (unchanged) | |
| `/media` | `/speaking#media-kit` (unchanged) | |
| `/subscribe` | `/resources` (was `/apply`) | Newsletter sign-up lives in Resources |

---

## 3. Brand and content migration matrix

| Item | Old treatment | New treatment | Where it lives |
|---|---|---|---|
| **WorkMasters** | 6-month career coaching cohort | **Productive Capital Development** flagship with five offers: LIVE (monthly Tue 6–7 PM EAT, 2027), CIRCLE (monthly Sat 2–7 PM EAT, same week, by invitation), WorkSmart Bootcamp (DIY/DWY/DFY), Offer Accelerator (builds on Make More & Better Offers), Advisory | `/workmasters` |
| **Make More & Better Offers** | Standalone mastermind (Oct 2026) | Source material for the WorkMasters Offer Accelerator; the page stays live with its CTA fixed | `/mastermind`, `/workmasters#offers` |
| **Private Advisory** (`/one-on-one`) | Standalone | WorkMasters Advisory | `/workmasters#advisory` |
| **InfluenceMasters** | Didn't exist | **Influence Capital Development** with five proposed offer families (all "Join Interest List"/"Enquire") | `/influencemasters` |
| **ContentMasters** | Not on the site | Superseded by InfluenceMasters; defensive redirects added | — |
| **Bible Study with Andrew Tugume** | "Workers & Leaders Bible Study" (weekly Friday study) | A distinct, Scripture-centred initiative with four tracks; the weekly Friday study is kept as the live gathering; YouTube channel configurable; guest-teaching invitations | `/bible-study`, `/bible-study/invite` |
| **Qraft Group — Rata Qraft Solutions Limited** | Mentioned only in the positioning line | Corporate business; shown as a connected ecosystem entity, not a programme | `/ecosystem`, home, About |
| **Qraft Academy** (CourseMasters, TalentMasters) | One of the "institutions" | Human Capital Development under Qraft Group | `/ecosystem#qraft-academy` |
| **Qraft Capital** (SystemMasters, CapitalMasters) | Link to a 404 | Enterprise Capital Development under Qraft Group | `/ecosystem#qraft-capital` |
| **Future of Work Forum** (Tour, Awards) | Didn't exist | Ecosystem Capital Development; a connected initiative (no ownership claim) | `/ecosystem#future-of-work-forum` |
| **TechMasters** | Two live pages | **Unchanged; owner decision** (legacy, fold into Qraft Academy, or retire) | `/techmasters` |
| **Chariot Leadership Institute, Nations Knowledge Community, Tabernacle Tech Institute** | "Institutions" | **Unchanged pages, removed from navigation; owner decision** | `/schools/*` |
| **Five Pillars of Mastery** | Former homepage architecture (`MasteryFramework.tsx`, removed last session) | Preserved in git history (`git show e332114:src/components/MasteryFramework.tsx`); recommend re-publishing as an essay in Resources | — |
| **Speaking** | Main nav item | Footer and About pathway (`/speaking`); ministry invitations route to `/bible-study/invite` | `/speaking` |
| **Testimonials and impact stats** | Prominent | **Removed from public pages pending verification** (§37, §52) | Verification register |

---

## 4. Design and content plan

### 4.1 Design system
- **Shared base:** ink (`#0B0B0B`), paper (`#F7F6F2`), gold (`#C7A14B`), Playfair Display for headings, Sora for body text, generous whitespace, authentic photography.
- **Per-initiative accents** (Tailwind tokens; typographic treatments only, not logos):

| Initiative | Character | Accent tokens | Usage |
|---|---|---|---|
| WorkMasters | Modern, energetic, action-oriented | `work` navy `#16233E` + `work-accent` orange `#E87722` (text-safe `#B0561A`) | Reuses the existing mastermind palette |
| InfluenceMasters | Editorial, intellectual | `influence` oxblood `#7A2E3A` + `influence-light` `#F3E8EA` | Large serif, pull quotes |
| Bible Study | Warm, reflective, welcoming | `scripture` olive `#4F5D3A` + `scripture-light` parchment `#F4EDE1` + `scripture-warm` `#8A6A3B` | Calm layout, no sales language |

### 4.2 Homepage (§29–38)
1. Hero:
   - eyebrow "ANDREW TUGUME · EDUCATOR · TECHNOLOGIST · INVESTOR"
   - H1 "Develop Your Potential. Create Value. Live with Purpose."
   - the supporting copy
   - CTAs **Explore My Work** (`#initiatives`) and **Get to Know Me** (`/about`)
   - the existing authentic portrait, rendered with `next/image` (priority)
2. **Three Ways to Engage:** three equal cards, each in its initiative's accent.
3. **Potential Is a Beginning. Development Makes It Useful.**
4. **Personal Capital Development:** Productive Capital → WorkMasters; Influence Capital → InfluenceMasters.
5. **Faith Is Not Separate From Everyday Decisions:** the four tracks plus the weekly study (a featured teaching appears only once videos are configured).
6. **Meet Andrew:** photo, Educator · Technologist · Investor, philosophy, "Read My Story".
7. **Featured:** only real items (WorkMasters LIVE cadence, the weekly Bible study, the latest essay). Empty cards are never rendered.
8. **Wider Ecosystem:** Qraft Group (Qraft Academy, Qraft Capital) and Future of Work Forum, as connected initiatives.
9. **Evidence:** renders **only** when verified entries exist in `brand.ts` (currently none, so it's hidden).
10. **What Will You Develop Next?** Three paths.

### 4.3 Programme pages
Every offer card shows: target audience · problem solved · intended outcome · delivery format · duration (only if approved) · status (Available Now / Upcoming / Join Interest List / By Invitation / Enquire) · CTA.

- **`/workmasters`:**
  - hero
  - who it serves
  - the productive-capital problem
  - the Work Value Engine (7 steps, marked as a working framework)
  - offer catalogue
  - LIVE as the free entry point
  - WorkSmart and advanced options
  - outcomes (hidden until verified)
  - FAQs
  - enquiry form
- **`/influencemasters`:**
  - hero
  - what influence capital is
  - audience and problems
  - the Influence Asset Cycle (6 steps, original)
  - offers
  - featured intellectual assets (hidden until they exist)
  - articles
  - FAQs
  - interest-list form
- **`/bible-study`:**
  - hero ("Study the Bible. Grow in Wisdom. Apply Truth to Life.")
  - welcome
  - featured teaching (only once configured)
  - the weekly study
  - four tracks (purpose, themes, passages, outcomes, safeguards)
  - teaching approach
  - delivery formats (YouTube, courses, seminars, study guides — **shown as formats, not as launched products**)
  - invite Andrew
  - FAQs
  - no testimonials
  - no prices

### 4.4 Calls to action and forms
| Pathway | Form | API |
|---|---|---|
| WorkMasters LIVE (no dates yet) | Interest list with tag "WorkMasters LIVE" | `/api/subscribe` (adds `interest`, a honeypot, and real error states) |
| WorkMasters CIRCLE, WorkSmart, Offer Accelerator, Advisory | Enquiry form with interest preselected | `/api/contact` (adds organisation, interest, preferred contact, a honeypot, and real error states) |
| InfluenceMasters | Enquiry form / interest list | Same |
| Bible Study updates | Interest list "Bible Study" | `/api/subscribe` |
| Invite Andrew to teach or preach | Ministry invitation form | `/api/booking` with `kind: 'ministry'` |
| Corporate speaking | Existing booking form | `/api/booking` |

### 4.5 Technical fixes bundled with Priority 1 (from the October audit)
- Remove the hard-coded root canonical from `layout.tsx`, so pages stop declaring the homepage as canonical.
- `robots.ts`: stop blocking `/_next/` and `/sitemap.xml`.
- Sitemap: list the new routes and drop the redirected ones.
- Schema: fix `addressCountry: 'US'`, use the verified social links, and drop the unverified YouTube link.
- `/blog/[slug]` and the lesson route: return real 404s.
