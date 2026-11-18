# AndrewTugume.com — 2027 Brand Architecture
## Part 2: Implementation summary and validation report

**Date:** 19 November 2026 · **Branch:** `feature/brand-architecture-2027` · **Status:** working tree only — **nothing committed or deployed**

---

## 5. Implementation summary

**Scope:** Priority One (foundation) and Priority Two (flagship pages) are done in full, plus part of Priority Three (resources and the Bible Study teaching structure). See `01-audit-and-plan.md` for the plan this implements.

### Pages created
| Route | Purpose |
|---|---|
| `/influencemasters` | Influence Capital Development: what influence capital is, audience and problems, Influence Asset Cycle, 5 offer families (all *Join Interest List* or *Enquire*), articles, FAQs, interest-list form |
| `/bible-study/invite` | Guest teaching and preaching invitation form (ministry variant; no budget field; "nothing confirmed until you hear back") |
| `/ecosystem` | Three-layer ownership diagram (personal brand → Qraft Group → Future of Work Forum), four capital dimensions, detailed ventures, partnership types, partnership enquiry form |

### Pages rebuilt or updated
| Route | Change |
|---|---|
| `/` | Rebuilt per brief §29–38: hero, Three Ways to Engage, Potential/Personal Capital, Biblical Wisdom, Meet Andrew, Featured (real items only), Wider Ecosystem, Evidence (hidden until verified), What Will You Develop Next? |
| `/about` | New hero and metadata; "My Work" section (three initiatives plus ecosystem) replaces the old institutions list; invitation cards and final CTA re-pointed; story, challenge, mission, beliefs and "Beyond the Work" kept. Two founding claims softened (see register). |
| `/workmasters` | Rebuilt: Productive Capital positioning, audience, problems, Work Value Engine, LIVE and CIRCLE (2027 cadence, no dates), WorkSmart, Offer Accelerator, Advisory, FAQs, enquiry form plus a "send me the dates" list |
| `/bible-study` | Rebuilt: hero, welcome and approach, featured teaching (renders only once videos are configured), **existing weekly Friday study kept**, four tracks (purpose, themes, passages, outcomes, safeguards), formats, invite, FAQs, mailing list. **Testimonials removed.** No prices. |
| `/bible-study/[series]/[lesson]` | Fixed: awaits `params`, real 404, metadata; **closed a path-traversal hole** (lessons now load only from `content/bible-study/`, with strict slug validation) |
| `/programs` | Rebuilt as the "Explore Programmes" hub, listing every programme with its status |
| `/resources` | Rebuilt from real content only; the fake toolkit listings were removed |
| `/speaking` | Unverified stats strip removed; intro and media-kit lines updated; ministry invitations routed to `/bible-study/invite` |
| `/contact` | Interest-aware form; old "Claim Your Spot" cohort card replaced |
| `/mastermind` | Broken placeholder apply URL (`forms.gle/REPLACE_…`) now goes to `/workmasters#enquire` |
| `/blog/[slug]` | Real 404 for missing posts; slug validation |

### Components
- **New:**
  - `InitiativesSection`, `PurposeSection`, `BibleWisdomSection`, `MeetAndrewSection`, `FeaturedSection`, `EcosystemOverview`, `EvidenceSection`
  - `OfferTile` (shows audience, problem, outcome, format, duration, status, CTA)
  - `StatusBadge` (Available Now / Upcoming / Join Interest List / By Invitation / Enquire)
  - `StepList`
  - `FaqList` (also outputs `FAQPage` schema)
  - `YouTubeEmbed` (privacy-friendly: thumbnail first, then `youtube-nocookie.com` on click)
- **Reused and extended:**
  - `PageHero` (per-initiative themes)
  - `ContactForm` (configurable subjects, organisation, preferred contact method, honeypot, success state)
  - `BookingForm` (`speaking` / `ministry` variants)
  - `SubscribeForm` (interest tag, honeypot)
  - `Header`, `MobileMenu` (Escape to close, closes on route change, `aria-controls`), `Footer`
  - `HeroImproved` (now `next/image` with priority; the oversized-image and negative-margin problems are gone)
  - `FinalCTASection`, `SectionHeading`, `TalkCard`, `CopyButton`, `Button`
- **Removed:**
  - **Uncommitted** work from the previous session (`OfferCard`, `OffersSection`, `PartnerCard`, `PartnersSection`, `LibrarySection`, `IdentitySection`, `SpeakingSection`, and the `/partners` and `/library` pages) is backed up in `superseded-uncommitted-pages.patch`. Restore with `git apply docs/brand-architecture-2027/superseded-uncommitted-pages.patch`.
  - **Committed** files (`ProofStrip`, `TestimonialsSection` and the redirected pages) can be restored from git history.

### Content model
`src/lib/brand.ts` is the single source for:
- identity
- the three initiatives
- WorkMasters and InfluenceMasters offers, frameworks and FAQs
- Bible Study tracks, formats, the weekly study, a **configurable `youtubeChannelUrl`** and a `teachings[]` list
- ecosystem relationships
- partnership types
- the `evidence[]`, `appearances[]` and `mediaItems[]` lists (each empty until verified)
- speaking content and bios

Design tokens were added to `tailwind.config.cjs`: `work` (navy / orange), `influence` (oxblood), `scripture` (olive / parchment), and a `font-display` utility.

### Forms and APIs
| Form | Endpoint | Routing |
|---|---|---|
| WorkMasters / InfluenceMasters / partnership / general enquiries | `/api/contact` | Email subject "Enquiry: {interest} — {name}"; reply-to is the sender |
| Interest lists (WorkMasters LIVE, Bible Study, Resources) | `/api/subscribe` | Email subject "New sign-up: {list}" |
| Speaking requests | `/api/booking` (`kind: speaking`) | "Booking request: …" |
| Teaching invitations | `/api/booking` (`kind: ministry`) | "Teaching invitation: …" |

All three routes now:
- validate input
- use a honeypot
- return an **error when email isn't configured or Resend rejects the message** (the old contact and subscribe routes falsely reported success)

### Redirects added or changed
There are 29 permanent redirects in `next.config.js`; the full table is in `01-audit-and-plan.md` §2. Highlights:
- `/store` → `/programs`
- `/partners`, `/institutions`, `/schools` → `/ecosystem`
- CourseMasters → `#qraft-academy`
- CapitalMasters → `#qraft-capital`
- `/contentmasters` → `/influencemasters`
- `/library`, `/tech-resources`, `/subscribe` → `/resources`
- `/one-on-one` → `/workmasters#advisory`
- `/faith-knowledge` → `/bible-study`

### SEO and technical fixes
- **Root canonical removed.** Every page used to declare the homepage as its canonical. Each page now outputs exactly one canonical, its own (verified on 16 pages).
- **`robots.ts`** no longer blocks `/_next/` or the sitemap.
- **Sitemap:** 13 current routes plus blog posts; redirected URLs removed.
- **Schema:**
  - Person schema: positioning, `alternateName`, Kampala/UG address, verified `sameAs` only.
  - Organization country corrected from `US` to `UG`.
  - Unverified YouTube URL removed.
  - Non-existent `/search` SearchAction removed.
  - Navigation schema updated.
- **Metadata:** empty verification tags removed, and the Swahili locale claims (no content behind them) removed.
- **Assets:** dead favicon links removed (the files were never in `/public`).
- **Images:** header, footer and About headshots are now served through Cloudinary `f_auto,q_auto,w_*`, instead of the 9.7 MB original.
- **Accessibility:** skip-to-content link and `<main id="main">`; smooth scrolling respects `prefers-reduced-motion`.

---

## 6. Validation report

| Check | Result |
|---|---|
| `tsc --noEmit` | ✅ Pass |
| `next build` (production) | ✅ Pass. Routes went from 45 to 28 (redirected stubs removed). |
| Page status (20 routes) | ✅ All 200 |
| Canonical tags | ✅ Exactly 1 per page. `/schools/*` legacy stubs have none, pending a decision. |
| H1 per page | ✅ 1 each, except `/blog/2025-12-23-welcome` (2: the post body contains `# Welcome`, a content fix) |
| Real 404s | ✅ `/blog/nope`, `/bible-study/a/b`, encoded `../` traversal attempt |
| Redirects (20 sampled) | ✅ All 308 to the intended destination |
| Internal link crawl (13 pages, 26 unique links) | ✅ No broken links once the dead favicon tags were removed |
| In-page anchors used by links (14) | ✅ All exist |
| `/api/contact` | ✅ 400 when fields are missing · ✅ honeypot → silent 200 · ✅ **500, not fake success, when email is not configured** |
| `/api/subscribe` | ✅ 400 on an invalid email · ✅ 500 when email is not configured |
| `/api/booking` (ministry) | ✅ Accepted shape · ✅ 500 when email is not configured |
| Desktop screenshots (1440 px) | ✅ Home, WorkMasters, InfluenceMasters, Bible Study, Ecosystem reviewed |
| Mobile screenshots (390 px) | ✅ Home and invite form stack to a single column with no horizontal overflow |
| `npm run lint` | ⚠️ **Not run:** `next lint` was removed in Next 16 (pre-existing; see the October audit B10) |
| Automated tests | ⚠️ None exist in the repo |
| Live email delivery | ⚠️ **Not tested:** no `RESEND_API_KEY` locally. Submit each form once on a Netlify deploy preview. |

### Accessibility observations
- **Improved:**
  - skip link
  - mobile menu keyboard support (Escape)
  - labels on every form field
  - `aria-live` status messages
  - `<details>` FAQs (native keyboard support)
  - reduced-motion support for scrolling
  - no colour-only status: the badges carry text
- **Still to do:**
  - The mobile menu has no focus trap.
  - Gold eyebrow text (`text-accent`) on light backgrounds is below 4.5:1 contrast. It's decorative label text, but it should use a darker gold.
  - Forms have no `aria-invalid` or field-level error messages.

### Outstanding issues (not in this pass)
1. **Rotate the Resend API key** committed in `.env.example` (from the October audit).
2. Upgrade to React 19 to match Next 16; replace `next lint`.
3. The blog OG images are SVG (social platforms don't render them); add favicons and app icons.
4. `/apply` still lists TechMasters, CourseMasters and CapitalMasters, so it needs re-pointing once programme statuses are confirmed.
5. ~~TechMasters duplicates~~: deleted 19 Nov 2026 (redirected to `/programs`).
6. ~~`/schools/*` institution pages~~: deleted 19 Nov 2026 (Chariot and Tabernacle → `/ecosystem`, Nations → `/bible-study`).
7. `/mastermind` still shows the October 2026 cohort dates and a hard-coded "12 seats" figure.
8. The newsletter has no list storage; each sign-up only emails Andrew.
9. The Work Value Engine grid leaves two empty cells on desktop (cosmetic).
10. Legacy unused components remain: `Card`, `Container`, `Section`, `Typography`.
11. Deferred subpages (`/workmasters/live`, `/bible-study/courses`, and so on) should be created only when real content exists.
12. Add `tsconfig.tsbuildinfo` to `.gitignore`.
