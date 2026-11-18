# AndrewTugume.com — Content Verification Register

**Date:** 19 November 2026 · **Owner:** Andrew Tugume
**How to use:** each item needs a decision or a fact from you. Where a fact is confirmed, add it to `src/lib/brand.ts` (the field is named in each row) and the site will render it. Nothing below is shown publicly as fact until it's confirmed.

---

## A. Claims removed from public pages, pending verification

| # | Claim | Previously shown on | To restore |
|---|---|---|---|
| A1 | "5,000+ professionals trained" | Home, Speaking, bios | Provide the source; add as an `evidence[]` entry |
| A2 | "10+ years building in Africa" | Home, Speaking | Confirm |
| A3 | "3 schools founded" (5 institutions were listed) | Home, Speaking | Confirm which, and how many |
| A4 | "100M+ capital deployed" (no currency) | Home, Speaking | Confirm the amount, currency and what "deployed" means |
| A5 | Investment claims ("commodities, logistics, real estate", "fund investments generating returns", "family office infrastructure") | Old homepage, About roles | Confirm before any investment-performance wording returns |
| A6 | Three anonymous coaching testimonials with income outcomes ("$80K → $165K", etc.) | Home | Provide named, permissioned testimonials |
| A7 | Three anonymous Bible Study testimonials | `/bible-study` | Provide permissioned testimonials. Recommended: keep Bible Study free of testimonials, to avoid a sales-funnel feel. |
| A8 | "Founded Qraft Solutions" (now reworded in About › Experience) | `/about` | Confirm the relationship to Rata Qraft Solutions Limited |
| A9 | "Founded Chariot Leadership Institute" (now reworded) and "founded Nations Knowledge Community" (removed from bios) | `/about`, bios | Confirm and decide each one's place in the new architecture (see C3) |

## B. Facts used on the site, which you should confirm

| # | Fact | Where | Field |
|---|---|---|---|
| B1 | Andrew founded **Rata Qraft Solutions Limited (Qraft Group)** (from your own `brand.ts` edit) | About, Ecosystem, bios | `ecosystem.qraftGroup.relationship` |
| B2 | Qraft Academy → CourseMasters, TalentMasters; Qraft Capital → SystemMasters, CapitalMasters | Home, Ecosystem | `ecosystem.qraftGroup.businesses` |
| B3 | Future of Work Forum is shown as a "Connected ecosystem initiative" (no ownership claimed) | Home, Ecosystem | `ecosystem.futureOfWorkForum.relationship`. What is Andrew's role? |
| B4 | Weekly Bible study: **Fridays 8–9 PM EAT, Google Meet `meet.google.com/jbq-qumi-ntf`**, and it is free | Bible Study, Home, Programmes | `bibleStudy.weekly`. Still running in 2027? |
| B5 | WorkMasters LIVE: Tuesdays 6–7 PM EAT, monthly; CIRCLE: Saturdays 2–7 PM EAT, the same week (2027) | WorkMasters | `workmasters.offers`. Add the dates when set. |
| B6 | Location: Kampala, Uganda | Footer, schema, bios | `brand.location` |
| B7 | Alias "Coach Drew" | Schema, bios | `brand.alias` |

## C. Owner decisions required

| # | Decision | Current state |
|---|---|---|
| C1 | ~~TechMasters~~ | ✅ **Resolved 19 Nov 2026: deleted.** `/techmasters`, `/masters/techmasters` and `/workmasters/techmasters` redirect to `/programs`; removed from `/apply` |
| C2 | **`/mastermind` (Make More & Better Offers)**: the October 2026 cohort has passed and "12 seats remaining" is hard-coded. Close the page, update it for the Offer Accelerator, or redirect it to `/workmasters#offers`? | Live; apply button fixed to go to the WorkMasters enquiry |
| C3 | ~~Chariot Leadership Institute, Nations Knowledge Community, Tabernacle Tech Institute~~ | ✅ **Resolved 19 Nov 2026: pages deleted.** Chariot and Tabernacle redirect to `/ecosystem`; Nations redirects to `/bible-study` |
| C4 | Approve the **Work Value Engine** (7 steps) and the **Influence Asset Cycle** (6 steps) wording as published frameworks | Published as written in your brief |
| C5 | Approve the **four Bible Study tracks** (themes, passages, outcomes, safeguards) as public curriculum outlines | Published as written in your brief |
| C6 | Approve the **InfluenceMasters offer statuses** (Academy, Worklab, Studio: Join Interest List; Advisory: Enquire; Media: Upcoming) | As listed |
| C7 | Confirm the facilitators for WorkSmart (Rachael Aine, Collins Atuhaire) before they're named publicly | **Not named** on the site |
| C8 | Choose a mailing-list platform (e.g. Resend Audiences, Mailchimp, ConvertKit). Sign-ups currently only email you. | Email notification only |
| C9 | Should the Five Pillars of Mastery be re-published as an article? Recoverable with `git show e332114:src/components/MasteryFramework.tsx` | Not on the site |
| C10 | Commit this branch, open a PR, or deploy a preview? | Uncommitted on `feature/brand-architecture-2027` |

## D. Missing official links

| # | Link | Field |
|---|---|---|
| D1 | ~~YouTube channel~~ | ✅ **Resolved 19 Nov 2026:** `https://www.youtube.com/@drewbiblemedia` ("Bible Study With Andrew Tugume") is set in `bibleStudy.youtubeChannelUrl` and `brand.socials`. It's linked from the Bible Study hero and a new Watch & Subscribe section, the home page, Resources, the footer and Person schema. |
| D2 | Individual YouTube teachings to feature (video ID, title, track, Scripture, summary). Send the video links you want highlighted. | `bibleStudy.teachings[]` (Featured Teaching appears once one is added) |
| D3 | Qraft Capital website | `ecosystem.qraftGroup.businesses[1].href` |
| D4 | Qraft Group / Rata Qraft Solutions Limited website | Not yet modelled; add an `href` |
| D5 | Future of Work Forum, Tour and Awards websites | `ecosystem.futureOfWorkForum` |
| D6 | Qraft Academy: `https://qraftacademy.com/` (from the old site). Confirm it's current. | `businesses[0].href` |

## E. Missing media and assets

| # | Item |
|---|---|
| E1 | Favicons and app icons (none in `/public`). Add `src/app/icon.png` and `src/app/apple-icon.png`. |
| E2 | Official logos for WorkMasters, InfluenceMasters, Bible Study, Qraft Group and Future of Work Forum (typographic treatments are used until then) |
| E3 | Blog post images `/images/blog/welcome-hero.jpg` and `welcome-og.png` are referenced in `content/posts/2025-12-23-welcome.mdx` but don't exist. The post also repeats its title as an H1. |
| E4 | Study guides and workbooks: none published, so no download links are shown |
| E5 | Bible Study lesson files (`content/bible-study/<series>/<lesson>.mdx`) |
| E6 | A recent portrait set, if wanted. The existing headshot and hero portrait are reused. |

## F. Proposed but unlaunched programmes (shown with honest statuses)

| Programme | Status shown |
|---|---|
| WorkMasters LIVE | Upcoming (cadence only, no dates) |
| WorkMasters CIRCLE | By Invitation |
| WorkSmart Bootcamp | Join Interest List |
| WorkMasters Offer Accelerator | Join Interest List |
| WorkMasters Advisory | Enquire |
| InfluenceMasters Academy, Worklab, Studio | Join Interest List |
| InfluenceMasters Advisory | Enquire |
| InfluenceMasters Media | Upcoming |
| Bible Study courses, seminars, study guides | Described as formats only; never shown as available products |

No prices are shown anywhere except on the legacy `/mastermind` and `/techmasters` pages (see C1, C2).
