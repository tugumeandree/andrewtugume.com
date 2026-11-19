# AndrewTugume.com — Growth Playbook

**For:** Andrew Tugume and whoever runs marketing for the site
**Covers:** SEO, AEO, GEO, paid search (SEM/PPC), content, social media and email
**Prepared:** November 2026

Search volumes, costs and results are not estimated here. Measure them in Google Search Console, Google Ads Keyword Planner and GA4 once tracking is live, then adjust this plan.

---

## 1. What the site now does (built in)

| Area | In the code |
|---|---|
| **SEO** | A unique title, description and canonical URL on every page · branded share image for each initiative and each blog post · favicon and app icon · sitemap · RSS feed (linked in every page's `<head>`) · `robots.txt` that lets search engines read the whole site |
| **Structured data** | One connected entity graph on every page: Andrew (Person) → WorkMasters, InfluenceMasters, Bible Study → Qraft Group → Qraft Academy and Qraft Capital, plus Future of Work Forum · ProfilePage on About · BlogPosting on articles · FAQPage wherever FAQs appear · breadcrumbs |
| **AEO** (answer engines) | `/faq` with 20+ direct answers · a short FAQ on the homepage · "Andrew Tugume at a glance" fact box on About · question-led FAQs on every initiative page |
| **GEO** (generative engines) | `/llms.txt`: a plain-text profile of Andrew, the initiatives, frameworks, ecosystem, FAQs and key pages, built from the same content as the site · consistent entity names everywhere (from `src/lib/brand.ts`) |
| **Paid search** | Google Ads tag, plus conversions for leads and sign-ups (switched on with environment variables) · GA4 events: `generate_lead`, `sign_up`, `contact_click` (WhatsApp/email/phone), `youtube_click`, `outbound_click` · **campaign attribution**: the visitor's UTM tags or Google Ads click ID and landing page are included in every enquiry email you receive |
| **Email** | Sign-ups are added to a Resend mailing list (audience) · each new subscriber gets a welcome email for the list they joined · you get notified of every sign-up, including where it came from |
| **Social** | Branded share images for every page · share buttons (LinkedIn, X, WhatsApp, Facebook, email) on articles · YouTube channel listed in your social profiles |

---

## 2. Setup checklist (one-time, about 1–2 hours)

Do these in order. All of the settings go in **Vercel → your project → Settings → Environment Variables**. The live site is hosted on Vercel. Then redeploy (Deployments → ⋯ → Redeploy).

1. ✅ **Resend API key:** set in Vercel (November 2026).
2. **Verify andrewtugume.com in Resend** (Domains). The DNS records were added at GoDaddy in November 2026; confirm Resend shows **Verified**, so emails can send from `noreply@andrewtugume.com`.
3. **Create a Resend audience** (Audiences → New) and set `RESEND_AUDIENCE_ID`.
4. **Google Search Console:**
   - add the property
   - verify it with the HTML tag (`NEXT_PUBLIC_GOOGLE_VERIFICATION_CODE`)
   - submit `https://andrewtugume.com/sitemap.xml`
5. **Bing Webmaster Tools:** import from Search Console. Bing powers several AI answer engines.
6. **GA4:**
   - create a property and set `NEXT_PUBLIC_GA_ID`
   - in GA4 → Admin → Events, mark `generate_lead` and `sign_up` as **key events**
7. **Google Business Profile:** create or claim one for Andrew Tugume (or Qraft Group), with the Kampala location and website link. It helps local searches like "speaker in Kampala".
8. **Google Ads** (when campaigns start):
   - set `NEXT_PUBLIC_GOOGLE_ADS_ID`
   - create two conversions (Lead, Sign-up) and set `NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL` and `NEXT_PUBLIC_GOOGLE_ADS_SIGNUP_LABEL`
   - link Ads to GA4
9. **Test:** submit each form once on the live site, and check the notification, the welcome email and the GA4 real-time events.

---

## 3. SEO keyword map

Each page targets one main search intent. These are **starting hypotheses**. Validate them in Keyword Planner and Search Console, then adjust page copy.

| Page | Primary intent | Secondary queries to test |
|---|---|---|
| `/` | Andrew Tugume (name / brand) | Coach Drew Uganda · Andrew Tugume Kampala |
| `/about` | Who is Andrew Tugume | Andrew Tugume educator technologist investor · Andrew Tugume Qraft |
| `/workmasters` | Career / productivity coaching Uganda | how to package consulting services · consulting offer design · productivity training Kampala · AI productivity training for teams |
| `/influencemasters` | Thought leadership training | personal brand coaching for experts · how to become a thought leader · how to write a signature talk |
| `/bible-study` | Bible study on work and money | what the Bible says about work · biblical stewardship · Bible study on money and debt · Christian leadership Bible study · online Bible study Uganda |
| `/bible-study/invite` | Guest preacher / Bible teacher Uganda | Christian speaker Kampala · church seminar on stewardship |
| `/speaking` | Motivational / keynote speaker Uganda | future of work speaker Africa · productivity speaker for corporates · podcast guest on productivity |
| `/ecosystem` | Qraft Group / Qraft Academy / Qraft Capital | Rata Qraft Solutions Limited · Future of Work Forum Uganda |

**On-page rules:**
- Put the main query in the H1 or first paragraph, the title and the description.
- Link each article to one initiative page and one related article.
- Keep titles under about 60 characters (the helper adds "| Andrew Tugume").

**Content gaps to close first:**
- The site has **one** article. Search engines and AI models need depth.
- The topic clusters in §5 are the fastest route.

---

## 4. AEO and GEO practices

Answer engines (Google AI Overviews, featured snippets) and generative engines (ChatGPT, Perplexity, Gemini, Copilot) cite pages that are **clear, factual, consistent and corroborated**.

1. **Same facts everywhere.** Use exactly the same name, titles and venture names on the site, LinkedIn, X, Instagram, YouTube, Google Business Profile and speaker bios. The canonical wording is in `src/lib/brand.ts` (`facts`, `bios`). Update your LinkedIn "About" section to match `bios.short`.
2. **Answer first.** Open every article and FAQ with a one- to two-sentence direct answer, then explain.
3. **Name your frameworks** (Work Value Engine, Influence Asset Cycle) and explain each in its own article. Named, original frameworks are what generative engines attribute to a person.
4. **Get corroborated off-site.** AI models trust what multiple independent sources say:
   - guest articles
   - podcast appearances with show notes linking to andrewtugume.com
   - event pages listing you as a speaker
   - a Wikidata entry (only once there are independent sources to cite)
   - Qraft Academy's site linking back with consistent wording
5. **Add verified evidence** to `evidence[]` and `appearances[]` in `src/lib/brand.ts`, such as talks, publications and named testimonials. Those sections appear on the site automatically once entries exist.
6. **Check monthly:** ask ChatGPT, Perplexity and Gemini "Who is Andrew Tugume?" and "What is WorkMasters?", and note what they say and cite.

---

## 5. Content marketing

### Pillars (one per initiative, plus one shared)
| Pillar | Feeds | Example topics (titles to adapt) |
|---|---|---|
| Productive capital | WorkMasters | The 7 steps of the Work Value Engine · How to turn your expertise into a priced offer · Validating demand before you build · AI-assisted workflows for small teams · Delegation for solo professionals |
| Influence capital | InfluenceMasters | Influence is not visibility · How to find your signature idea · Turning a talk into a book outline · The Influence Asset Cycle explained |
| Biblical wisdom | Bible Study | What the Bible says about work (Genesis 1–3) · Proverbs on diligence · Debt and borrowing in Scripture · The parable of the talents and stewardship · Sabbath and sustainable work · Biblical conflict resolution |
| Future of work | All, plus Future of Work Forum | Skills the next decade demands · AI and African professionals · Building teams that keep learning |

### Cadence (sustainable minimum)
- **Weekly:** one Bible teaching on YouTube. It's already your strongest content engine.
- **Every two weeks:** one article on the site (alternating the work/influence and Bible pillars).
- **Monthly:** the WorkMasters LIVE topic, written up afterwards as an article and worksheet.

### Repurposing workflow (one teaching → many assets)
1. Record the full teaching for YouTube.
2. Transcribe it, then edit into an **article** on the site with Scripture references and a direct-answer opening.
3. Cut 3–5 **short clips** (YouTube Shorts, Instagram Reels, TikTok, WhatsApp Status).
4. Pull 3 **quote cards** (LinkedIn, Instagram, X).
5. Use the "Key ideas" section for the **email newsletter**.
6. Add **reflection questions** as a downloadable study guide, once real files exist.

### Article checklist
- [ ] Main query in title and H1
- [ ] 1–2 sentence direct answer at the top
- [ ] A named framework or a clear step list
- [ ] Scripture references in context (for Bible pieces)
- [ ] One link to an initiative page and one to a related article
- [ ] Summary in the frontmatter (used for meta description, RSS and `llms.txt`)
- [ ] Shared on LinkedIn and WhatsApp with UTM links (§6)

---

## 6. Social media

| Channel | Role | Cadence | Formats |
|---|---|---|---|
| **YouTube** (Bible Study With Andrew Tugume) | Bible teaching hub | Weekly long-form plus 2–3 Shorts | Full studies, series playlists by the four tracks, Q&A |
| **LinkedIn** | WorkMasters, InfluenceMasters, speaking leads | 3× a week | Text posts from articles, frameworks, carousels, event announcements |
| **Instagram** (@coachdrew_tugume) | Reach and community | 3–4× a week | Reels from clips, quote cards, Stories for LIVE reminders |
| **X** (@_drewtugume) | Ideas and conversation | Daily if sustainable | Short insights, threads from articles |
| **WhatsApp** (channel and Status) | Highest-intent local audience | 2–3× a week | LIVE reminders, Friday Bible study reminders, new teaching links |

**YouTube optimisation:**
- Each video description starts with a one-sentence summary and the Scripture passage, then links to `andrewtugume.com/bible-study` and the matching track (e.g. `/bible-study#business-finance`).
- Use one playlist per track.

**UTM convention for every link you share**, so campaigns show up in GA4 and in enquiry emails:

```
?utm_source={platform}&utm_medium={social|email|paid|referral}&utm_campaign={initiative-topic-yyyymm}
e.g. andrewtugume.com/workmasters?utm_source=linkedin&utm_medium=social&utm_campaign=workmasters-live-202701
```

---

## 7. Email marketing

**Lists:** one Resend audience. The list each person joined appears in your sign-up notification email (`WorkMasters LIVE`, `Bible Study`, `Resources`). Add separate audiences later if the lists grow.

**Welcome sequence (send manually or via Resend Broadcasts until automation is set up):**

| List | Email 1 (automatic, live now) | Email 2 (day 3) | Email 3 (day 7) |
|---|---|---|---|
| WorkMasters LIVE | Welcome plus link to WorkMasters | The Work Value Engine explained | Next LIVE date, plus invitation to apply for CIRCLE |
| Bible Study | Welcome plus YouTube channel | The four tracks — where to start | Friday weekly study invitation |
| Resources | Welcome plus Resources | Most useful article | Invitation to WorkMasters LIVE |

**Newsletter:**
- Send it monthly, timed with WorkMasters LIVE.
- Structure: one idea, one teaching link, one upcoming event, one call to action.
- Keep Bible Study emails free of sales offers, consistent with the site's principles.

**Compliance:**
- Only email people who signed up.
- Include an unsubscribe option in broadcasts (Resend Broadcasts add one automatically).
- Honour removal requests promptly.

---

## 8. Paid search (SEM / PPC)

**Run paid campaigns only after the step 2 setup is done**, so every lead and sign-up is measured.

### Campaign structure (Google Ads, Search)
| Campaign | Ad groups (themes) | Landing page | Conversion |
|---|---|---|---|
| **Brand** | Andrew Tugume · Coach Drew · WorkMasters · InfluenceMasters | `/` or the matching initiative page | Lead, Sign-up |
| **WorkMasters** | consulting offer design · productivity training · AI workflow training · career growth coaching | `/workmasters` | Lead (enquiry), Sign-up (LIVE dates) |
| **Speaking** | keynote speaker Uganda · corporate training speaker · future of work speaker | `/speaking` | Lead (booking request) |
| **Bible Study** (optional, low budget) | online Bible study · Bible study on money / work | `/bible-study` | Sign-up |

**Settings to start with:**
- Search Network only; turn off Display expansion.
- Location: Uganda first; add other East African markets once conversion data supports it.
- Phrase and exact match; add broad match only once there's conversion history.
- Bid strategy: Maximise Conversions only after about 15–30 conversions; manual or Maximise Clicks with a cap until then.
- Starter negative keywords: `free download`, `pdf`, `jobs`, `vacancy`, `salary`, `course certificate` (except where relevant), `wikipedia`.

**Ad copy rules:**
- Use the site's real statuses ("Join the interest list", "By invitation").
- Never promise outcomes, prices or dates that aren't confirmed.
- Add sitelinks to `/programs`, `/speaking`, `/bible-study` and `/faq`.

**Also consider:**
- **LinkedIn Ads** for speaking and corporate training: target HR and L&D titles in Uganda and Kenya, with a lead to `/speaking#book`.
- **Meta Ads** for WorkMasters LIVE sign-ups.

Use UTM links on both (§6). Their pixels aren't installed; add them only if you run those platforms seriously.

---

## 9. What to measure (monthly)

| Metric | Where |
|---|---|
| Search clicks and impressions by page and query | Search Console |
| Leads (`generate_lead`) and sign-ups (`sign_up`) by source | GA4 → Reports → Engagement → Events / Acquisition |
| WhatsApp, email and YouTube clicks (`contact_click`, `youtube_click`) | GA4 events |
| Cost per lead by campaign | Google Ads |
| Mailing list size and growth | Resend → Audiences |
| YouTube subscribers and watch time | YouTube Studio |
| AI-answer accuracy ("Who is Andrew Tugume?") | Manual monthly check (§4) |

---

## 10. Next code improvements (when ready)

1. Use the brand serif (Playfair Display) in share images (currently the default font).
2. Article categories and topic pages (e.g. `/resources/biblical-business-and-finance`) once there are 3+ articles per category.
3. Automate the welcome sequences (Resend Broadcasts / automations, or a dedicated email platform).
4. An event schema plus event pages once WorkMasters LIVE dates are confirmed. They're eligible for Google event listings.
5. VideoObject schema for featured YouTube teachings, once `bibleStudy.teachings[]` has entries.
