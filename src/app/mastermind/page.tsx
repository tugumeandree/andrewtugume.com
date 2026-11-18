import React from 'react'
import type { Metadata } from 'next'
import { IBM_Plex_Sans, IBM_Plex_Serif } from 'next/font/google'
import { generateBreadcrumbSchema, generateCourseSchema } from '@/lib/seo/schema'

// Edit these three to update the page without touching markup below.
// Routes to the working WorkMasters enquiry form until a dedicated application form exists
const APPLICATION_FORM_URL = '/workmasters#enquire'
const WHATSAPP_NUMBER = '256755017384'
const SEATS_REMAINING = 12

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex-sans',
  display: 'swap',
})

const plexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-plex-serif',
  display: 'swap',
})

const PAGE_TITLE = 'Make More & Better Offers Mastermind — Andrew Tugume'
const PAGE_DESCRIPTION =
  'An eight-week mastermind for consultants. Build the nine-offer architecture that makes demand something you manufacture instead of something you hope for. Starts 10 October. 12 seats.'
const OG_IMAGE = 'https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg'

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: 'https://andrewtugume.com/mastermind',
  },
  openGraph: {
    type: 'website',
    url: 'https://andrewtugume.com/mastermind',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Make More & Better Offers Mastermind — Andrew Tugume',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: { url: OG_IMAGE, alt: 'Make More & Better Offers Mastermind — Andrew Tugume' },
  },
}

const weeks = [
  {
    num: '01',
    title: 'The Offer Audit',
    body: 'Count your nine gears. Most consultants find they have two. Name who you serve and the problem you actually solve.',
    deliverable: 'You leave with: a scored audit and a one-line positioning statement',
  },
  {
    num: '02',
    title: 'The Core Offer',
    body: 'Take the main thing you sell and turn it from a service into a product — a name, a promise, a defined deliverable, a defined scope.',
    deliverable: 'You leave with: your core offer, written',
  },
  {
    num: '03',
    title: 'Price & Money Model',
    body: 'What makes value perceived, how to raise a price without flinching, payment structures, and the guarantee that removes your client’s risk.',
    deliverable: 'You leave with: a priced offer with risk reversal attached',
  },
  {
    num: '04',
    title: 'The Intake Valve',
    body: 'Free, consideration and commitment offers — the ladder that lets someone who has never met you become a paying client.',
    deliverable: 'You leave with: a lead magnet and an entry offer, designed',
  },
  {
    num: '05',
    title: 'Launch Week',
    body: 'It goes to market this week. Not polished — live. Perfectionism is the most expensive habit in consulting.',
    deliverable: 'You leave with: one offer public and your first enquiries',
  },
  {
    num: '06',
    title: 'Lead Generation',
    body: 'Where demand comes from when referrals go quiet. Building a named list of 100 instead of hoping, and the outreach that doesn’t feel like begging.',
    deliverable: 'You leave with: a built list and a running outreach sequence',
  },
  {
    num: '07',
    title: 'Selling & Closing',
    body: 'The conversation, the four objections underneath every "let me think about it", and the follow-up that most consultants never do.',
    deliverable: 'You leave with: real sales conversations and first closes',
  },
  {
    num: '08',
    title: 'Continuity, Retention & Assets',
    body: 'Recurring revenue, keeping the clients you win, and the utilisation and return offers that make what you already own start paying.',
    deliverable: 'You leave with: your full nine-offer architecture, twelve months out',
  },
]

const dates = [
  {
    when: '29 Sept & 1 Oct',
    what: 'Free live masterclass',
    detail: 'Count your own nine gears with me. Two sittings.',
    last: false,
  },
  {
    when: '5 October',
    what: 'Applications close',
    detail: 'I read every one myself and reply the same day.',
    last: false,
  },
  {
    when: '7 October',
    what: 'Payment holds your seat',
    detail: 'Mobile money, bank transfer or card. Deposits accepted.',
    last: false,
  },
  {
    when: '10 October',
    what: 'We start',
    detail: 'Saturdays, 7:00am or 6:00pm EAT. You choose.',
    last: true,
  },
]

export default function Mastermind() {
  return (
    <div
      className={`${plexSans.variable} ${plexSerif.variable} mastermind-fullbleed bg-[#FAF8F4] text-[#16233E] antialiased font-[family-name:var(--font-plex-sans)]`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateCourseSchema(
              'Make More & Better Offers Mastermind',
              PAGE_DESCRIPTION,
              'mastermind',
              'Andrew Tugume'
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://andrewtugume.com' },
              { name: 'Make More & Better Offers Mastermind', url: 'https://andrewtugume.com/mastermind' },
            ])
          ),
        }}
      />

      {/* HERO */}
      <section className="bg-[#16233E] px-8 py-[92px] mm:px-6 mm:py-16">
        <div className="max-w-[1000px] mx-auto flex flex-col gap-[26px]">
          <div className="flex items-center gap-[14px]">
            <span className="inline-block w-11 h-[3px] bg-[#E87722]"></span>
            <span className="text-[14px] tracking-[0.14em] uppercase font-semibold text-[#E8C79A]">
              Founding cohort · 12 seats · Starts 10 October
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-plex-serif)] font-semibold text-[clamp(38px,6vw,66px)] leading-[1.06] tracking-[-0.015em] text-white">
            Make More &amp;
            <br />
            Better Offers
          </h1>
          <p className="max-w-[720px] text-[23px] leading-[1.5] text-[#D6DCE8]">
            An eight-week mastermind for consultants who are tired of waiting for the phone to ring. Build the
            nine-offer architecture that makes demand something you manufacture instead of something you hope for.
          </p>
          <div className="flex flex-wrap gap-10 py-[26px] border-t border-b border-[#2E3D5C]">
            <div className="flex flex-col gap-[5px]">
              <span className="text-[12px] tracking-[0.12em] uppercase font-semibold text-[#93A1BB]">Who</span>
              <span className="text-[17px] text-white">Consultants &amp; independent professionals</span>
            </div>
            <div className="flex flex-col gap-[5px]">
              <span className="text-[12px] tracking-[0.12em] uppercase font-semibold text-[#93A1BB]">When</span>
              <span className="text-[17px] text-white">Saturdays, 8 weeks · 7am or 6pm EAT</span>
            </div>
            <div className="flex flex-col gap-[5px]">
              <span className="text-[12px] tracking-[0.12em] uppercase font-semibold text-[#93A1BB]">Investment</span>
              <span className="text-[17px] text-white">UGX 800,000 · USD 217</span>
            </div>
            <div className="flex flex-col gap-[5px]">
              <span className="text-[12px] tracking-[0.12em] uppercase font-semibold text-[#93A1BB]">Led by</span>
              <span className="text-[17px] text-white">Andrew Tugume (Coach Drew)</span>
            </div>
          </div>
          <div className="flex items-center gap-6 flex-wrap">
            <a
              href="#apply"
              className="inline-block self-start bg-[#E87722] hover:bg-[#D06A18] text-white no-underline text-[19px] font-semibold px-[42px] py-[19px] min-h-[44px]"
            >
              Apply for a seat
            </a>
            <span className="text-[16px] text-[#A9B5CA]">Applications close 5 October. It takes about six minutes.</span>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="px-8 py-[92px] mm:px-6 mm:py-16">
        <div className="max-w-[880px] mx-auto flex flex-col gap-[26px]">
          <h2 className="font-[family-name:var(--font-plex-serif)] font-semibold text-[clamp(30px,4.2vw,42px)] leading-[1.18]">
            You don&apos;t have a customer problem. You have an offer problem.
          </h2>
          <p className="text-[clamp(18px,2.2vw,20px)] text-[#2C3852]">
            Most consultants sell one thing: their time, described slightly differently to each client. It is a
            service the market can take or leave, priced against whoever quoted last, and won by whoever the client
            happened to remember that week.
          </p>
          <p className="text-[clamp(18px,2.2vw,20px)] text-[#2C3852]">
            So you work twice as hard to push it. You chase referrals. You bid. You lower the price to close. And
            when the work lands you disappear into delivery, which means the next gap is already being built while
            you are busy.
          </p>
          <p className="text-[clamp(18px,2.2vw,20px)] text-[#2C3852] font-semibold">
            The business is not short of effort. It is short of structure.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="pt-0 px-8 pb-[92px] mm:px-6 mm:pb-16">
        <div className="max-w-[880px] mx-auto">
          <div className="bg-white border border-[#E3DED3] p-[60px] mm:px-7 mm:py-10 flex flex-col gap-[20px]">
            <span className="text-[13px] tracking-[0.14em] uppercase font-semibold text-[#B0561A]">Why I teach this</span>
            <p className="font-[family-name:var(--font-plex-serif)] font-normal text-[25px] leading-[1.5] text-[#2C3852]">
              For years my business ran on two things: gigs from people who already knew me, and bids to companies
              that already knew me.
            </p>
            <p className="text-[19px] leading-[1.66] text-[#2C3852]">
              It worked. My biggest tender paid USD 10,000 a month. The gigs brought a thousand here, a thousand
              there. On paper, a good year.
            </p>
            <p className="text-[19px] leading-[1.66] text-[#2C3852]">
              But every feast was followed by fasting. A tender ends and there is nothing behind it. A referral goes
              quiet and the month goes quiet with it. I wasn&apos;t running a business — I was living on other
              people&apos;s memory of me, and memory is not a business model. I could not make demand appear. I
              could only wait for it, then work twice as hard to win it.
            </p>
            <p className="text-[19px] leading-[1.66] text-[#2C3852]">
              What changed wasn&apos;t effort or talent. I stopped selling one thing at a time and built a
              structure: nine offers, each doing a different job, feeding each other. Today those offers produce
              income every month rather than in bursts — and the fasting days are gone.
            </p>
            <p className="text-[19px] leading-[1.66] text-[#16233E] font-semibold">
              I have since taught this architecture to more than 100 consultants inside my private WorkMasters
              programme. This mastermind is that structure, built on your business, in eight weeks.
            </p>
            <div className="flex items-center gap-[14px] pt-[10px]">
              <span className="inline-block w-[34px] h-[2px] bg-[#E87722]"></span>
              <span className="text-[16px] text-[#3D4759]">Andrew Tugume · Kampala</span>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="bg-[#16233E] px-8 py-[92px] mm:px-6 mm:py-16">
        <div className="max-w-[900px] mx-auto flex flex-col gap-[26px]">
          <span className="text-[13px] tracking-[0.14em] uppercase font-semibold text-[#E8C79A]">What you leave with</span>
          <p className="font-[family-name:var(--font-plex-serif)] font-semibold text-[clamp(26px,4vw,38px)] leading-[1.32] text-white">
            In eight weeks you&apos;ll stop waiting for gigs and start manufacturing them.
          </p>
          <div className="grid grid-cols-3 gap-7 ms:grid-cols-1">
            <div className="border-t-[3px] border-[#E87722] pt-5 flex flex-col gap-[10px]">
              <span className="font-[family-name:var(--font-plex-serif)] text-[44px] leading-none text-white">9</span>
              <span className="text-[17px] leading-[1.5] text-[#D6DCE8]">offers mapped into a complete architecture for your business</span>
            </div>
            <div className="border-t-[3px] border-[#E87722] pt-5 flex flex-col gap-[10px]">
              <span className="font-[family-name:var(--font-plex-serif)] text-[44px] leading-none text-white">3</span>
              <span className="text-[17px] leading-[1.5] text-[#D6DCE8]">of them fully built — named, priced, scoped, written</span>
            </div>
            <div className="border-t-[3px] border-[#E87722] pt-5 flex flex-col gap-[10px]">
              <span className="font-[family-name:var(--font-plex-serif)] text-[44px] leading-none text-white">1</span>
              <span className="text-[17px] leading-[1.5] text-[#D6DCE8]">live in the market and taking money before we finish</span>
            </div>
          </div>
          <p className="text-[19px] text-[#A9B5CA]">So your income stops depending on who happens to remember you.</p>
        </div>
      </section>

      {/* NINE OFFERS */}
      <section className="px-8 py-[92px] mm:px-6 mm:py-16">
        <div className="max-w-[1040px] mx-auto flex flex-col gap-[34px]">
          <div className="flex flex-col gap-[14px] max-w-[760px]">
            <h2 className="font-[family-name:var(--font-plex-serif)] font-semibold text-[clamp(30px,4.2vw,42px)] leading-[1.18]">
              Every business runs on nine offers, not one
            </h2>
            <p className="text-[clamp(18px,2.2vw,20px)] text-[#2C3852]">
              Most consultants have two or three of them and wonder why the revenue stalls. We build the missing
              ones, in order, on your business.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 mm:grid-cols-1">
            <article className="bg-white border border-[#E3DED3] p-[34px] flex flex-col gap-[14px]">
              <span className="text-[13px] tracking-[0.14em] uppercase font-semibold text-[#B0561A]">The Intake Valve</span>
              <h3 className="font-[family-name:var(--font-plex-serif)] font-semibold text-[25px]">How a stranger becomes a client</h3>
              <p className="text-[17px] leading-[1.6] text-[#3D4759]">
                The free offer that earns attention. The consideration offer that proves you&apos;re worth paying.
                The commitment offer that gets the first yes — without anyone having to introduce you.
              </p>
            </article>
            <article className="bg-white border border-[#E3DED3] p-[34px] flex flex-col gap-[14px]">
              <span className="text-[13px] tracking-[0.14em] uppercase font-semibold text-[#B0561A]">The Transformation Engine</span>
              <h3 className="font-[family-name:var(--font-plex-serif)] font-semibold text-[25px]">What you actually sell</h3>
              <p className="text-[17px] leading-[1.6] text-[#3D4759]">
                Your core product, rebuilt from a service into something with a name and a promise — plus the
                continuity offer that turns a single sale into monthly income.
              </p>
            </article>
            <article className="bg-white border border-[#E3DED3] p-[34px] flex flex-col gap-[14px]">
              <span className="text-[13px] tracking-[0.14em] uppercase font-semibold text-[#B0561A]">The Wealth Machine</span>
              <h3 className="font-[family-name:var(--font-plex-serif)] font-semibold text-[25px]">Making what you have pay</h3>
              <p className="text-[17px] leading-[1.6] text-[#3D4759]">
                Retention, networking and utilisation offers — revenue from the clients, relationships and assets
                already sitting in your business unused.
              </p>
            </article>
            <article className="bg-white border border-[#E3DED3] p-[34px] flex flex-col gap-[14px]">
              <span className="text-[13px] tracking-[0.14em] uppercase font-semibold text-[#B0561A]">The Legacy Vault</span>
              <h3 className="font-[family-name:var(--font-plex-serif)] font-semibold text-[25px]">When you stop selling time entirely</h3>
              <p className="text-[17px] leading-[1.6] text-[#3D4759]">
                Return and equity offers — for when you&apos;re ready to let other people&apos;s capital fund what
                you&apos;ve built. Approached in sequence, and last, for good reason.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* EIGHT WEEKS */}
      <section className="bg-[#F2EEE6] px-8 py-[92px] mm:px-6 mm:py-16">
        <div className="max-w-[980px] mx-auto flex flex-col gap-[34px]">
          <div className="flex flex-col gap-[14px] max-w-[720px]">
            <h2 className="font-[family-name:var(--font-plex-serif)] font-semibold text-[clamp(30px,4.2vw,42px)] leading-[1.18]">
              Eight weeks, eight finished things
            </h2>
            <p className="text-[clamp(18px,2.2vw,20px)] text-[#2C3852]">
              Every session produces something you can hold up at the end of it. This is a workshop with homework,
              not a webinar with slides.
            </p>
          </div>
          <div>
            {weeks.map((week, i) => (
              <div
                key={week.num}
                className={`flex gap-[30px] ms:gap-4 py-[26px] border-t border-[#DCD5C7] ${
                  i === weeks.length - 1 ? 'border-b' : ''
                }`}
              >
                <span className="font-[family-name:var(--font-plex-serif)] font-semibold text-[26px] text-[#E87722] min-w-[46px]">
                  {week.num}
                </span>
                <div className="flex flex-col gap-[7px]">
                  <h3 className="font-[family-name:var(--font-plex-sans)] font-semibold text-[21px]">{week.title}</h3>
                  <p className="text-[17px] leading-[1.55] text-[#3D4759]">{week.body}</p>
                  <span className="text-[15px] text-[#B0561A] font-semibold">{week.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT A SEAT INCLUDES */}
      <section className="px-8 py-[92px] mm:px-6 mm:py-16">
        <div className="max-w-[900px] mx-auto flex flex-col gap-[34px]">
          <h2 className="font-[family-name:var(--font-plex-serif)] font-semibold text-[clamp(30px,4.2vw,42px)] leading-[1.18]">
            What a seat includes
          </h2>
          <table className="w-full border-collapse text-[17px]">
            <tbody>
              <tr>
                <td className="py-[22px] pr-4 border-b border-[#E3DED3] align-top ms:block ms:pr-0 ms:text-left ms:whitespace-normal">
                  <div className="font-semibold text-[19px] pb-[5px]">The eight-week live mastermind</div>
                  <div className="text-[#3D4759] leading-[1.55]">Twelve seats. Ninety minutes weekly, on your business, with me in the room.</div>
                </td>
                <td className="py-[22px] border-b border-[#E3DED3] align-top text-right whitespace-nowrap text-[#3D4759] ms:block ms:text-left ms:whitespace-normal ms:pt-0 ms:pb-[22px]">
                  UGX 2,400,000
                </td>
              </tr>
              <tr>
                <td className="py-[22px] pr-4 border-b border-[#E3DED3] align-top ms:block ms:pr-0 ms:text-left ms:whitespace-normal">
                  <div className="font-semibold text-[19px] pb-[5px]">The 9 Offers Handbook</div>
                  <div className="text-[#3D4759] leading-[1.55]">The written reference for all nine gears — yours to keep and work from long after the cohort ends.</div>
                </td>
                <td className="py-[22px] border-b border-[#E3DED3] align-top text-right whitespace-nowrap text-[#3D4759] ms:block ms:text-left ms:whitespace-normal ms:pt-0 ms:pb-[22px]">
                  UGX 150,000
                </td>
              </tr>
              <tr>
                <td className="py-[22px] pr-4 border-b border-[#E3DED3] align-top ms:block ms:pr-0 ms:text-left ms:whitespace-normal">
                  <div className="font-semibold text-[19px] pb-[5px]">Full recording library</div>
                  <div className="text-[#3D4759] leading-[1.55]">Miss a Saturday, or come back to week three in March when you&apos;re ready to build the next gear.</div>
                </td>
                <td className="py-[22px] border-b border-[#E3DED3] align-top text-right whitespace-nowrap text-[#3D4759] ms:block ms:text-left ms:whitespace-normal ms:pt-0 ms:pb-[22px]">
                  UGX 400,000
                </td>
              </tr>
              <tr>
                <td className="py-[22px] pr-4 border-b border-[#E3DED3] align-top ms:block ms:pr-0 ms:text-left ms:whitespace-normal">
                  <div className="font-semibold text-[19px] pb-[5px]">A private 1:1 offer teardown</div>
                  <div className="text-[#3D4759] leading-[1.55]">Sixty minutes, just us. Your offer pulled apart and put back together before you take it to market.</div>
                </td>
                <td className="py-[22px] border-b border-[#E3DED3] align-top text-right whitespace-nowrap text-[#3D4759] ms:block ms:text-left ms:whitespace-normal ms:pt-0 ms:pb-[22px]">
                  UGX 600,000
                </td>
              </tr>
              <tr>
                <td className="py-[22px] pr-4 border-b border-[#E3DED3] align-top ms:block ms:pr-0 ms:text-left ms:whitespace-normal">
                  <div className="font-semibold text-[19px] pb-[5px]">Alumni access</div>
                  <div className="text-[#3D4759] leading-[1.55]">The room doesn&apos;t close when the eight weeks do.</div>
                </td>
                <td className="py-[22px] border-b border-[#E3DED3] align-top text-right whitespace-nowrap text-[#3D4759] ms:block ms:text-left ms:whitespace-normal ms:pt-0 ms:pb-[22px]">
                  UGX 300,000
                </td>
              </tr>
              <tr>
                <td className="py-[22px] pr-4 border-b-2 border-[#16233E] align-top ms:block ms:pr-0 ms:text-left ms:whitespace-normal">
                  <div className="font-semibold text-[19px] pb-[5px]">The guarantee</div>
                  <div className="text-[#3D4759] leading-[1.55]">You don&apos;t carry the risk of this working.</div>
                </td>
                <td className="py-[22px] border-b-2 border-[#16233E] align-top text-right whitespace-nowrap text-[#3D4759] ms:block ms:text-left ms:whitespace-normal ms:pt-0 ms:pb-[22px]">
                  Below
                </td>
              </tr>
              <tr>
                <td className="pt-[22px] pb-[10px] pr-4 text-[19px] text-[#3D4759] align-top ms:block ms:pr-0 ms:text-left ms:whitespace-normal">
                  Total value
                </td>
                <td className="pt-[22px] pb-[10px] text-[19px] text-[#3D4759] align-top text-right whitespace-nowrap ms:block ms:text-left ms:whitespace-normal ms:pt-0 ms:pb-[22px]">
                  UGX 3,850,000
                </td>
              </tr>
              <tr>
                <td className="pt-[6px] pb-[22px] pr-4 align-top ms:block ms:pr-0 ms:text-left ms:whitespace-normal">
                  <div className="font-[family-name:var(--font-plex-serif)] font-semibold text-[27px]">Founding cohort price</div>
                  <div className="text-[#3D4759] leading-[1.55] pt-[6px]">
                    Twelve people, no track record to point at yet, and a price that reflects it. It does not return
                    for cohort two.
                  </div>
                </td>
                <td className="pt-[6px] pb-[22px] align-top text-right whitespace-nowrap ms:block ms:text-left ms:whitespace-normal ms:pt-0 ms:pb-[22px]">
                  <div className="font-[family-name:var(--font-plex-serif)] font-bold text-[34px] text-[#E87722]">UGX 800,000</div>
                  <div className="text-[17px] text-[#3D4759] pt-[4px]">or USD 217</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="pt-0 px-8 pb-[92px] mm:px-6 mm:pb-16">
        <div className="max-w-[900px] mx-auto">
          <div className="bg-[#16233E] px-[60px] py-[58px] mm:px-7 mm:py-10 flex flex-col gap-5">
            <span className="text-[13px] tracking-[0.14em] uppercase font-semibold text-[#E8C79A]">The guarantee</span>
            <p className="font-[family-name:var(--font-plex-serif)] font-semibold text-[clamp(22px,3vw,29px)] leading-[1.42] text-white">
              Attend at least seven of the eight sessions and submit every assignment. If you finish without a
              complete offer architecture and one live offer, I work with you one-to-one until you have both — at no
              extra cost.
            </p>
            <p className="text-[18px] text-[#A9B5CA]">
              Note what that asks of you. I am not guaranteeing a result you can collect by watching. I&apos;m
              guaranteeing that if you do the work and it doesn&apos;t land, the problem becomes mine.
            </p>
          </div>
        </div>
      </section>

      {/* FIT */}
      <section className="bg-[#F2EEE6] px-8 py-[92px] mm:px-6 mm:py-16">
        <div className="max-w-[980px] mx-auto grid grid-cols-2 gap-14 mm:grid-cols-1 mm:gap-6">
          <div className="flex flex-col gap-[14px]">
            <h3 className="font-[family-name:var(--font-plex-serif)] font-semibold text-[27px]">This is for you if</h3>
            <p className="text-[17px] text-[#2C3852]">
              You already sell something and clients already pay you — but the months are uneven and you can&apos;t
              say why.
            </p>
            <p className="text-[17px] text-[#2C3852]">
              Your work comes from referrals, tenders and people who remember you, and you&apos;d like a second
              source that you control.
            </p>
            <p className="text-[17px] text-[#2C3852]">
              You are willing to be coached in front of eleven peers and to put something live while it still feels
              unfinished.
            </p>
          </div>
          <div className="flex flex-col gap-[14px]">
            <h3 className="font-[family-name:var(--font-plex-serif)] font-semibold text-[27px]">This is not for you if</h3>
            <p className="text-[17px] text-[#2C3852]">
              You want a course to watch. There is homework every week and I will ask you about it by name.
            </p>
            <p className="text-[17px] text-[#2C3852]">
              You&apos;re looking for leads handed to you rather than a business that produces its own.
            </p>
            <p className="text-[17px] text-[#2C3852]">
              The next eight Saturdays are already spoken for. Half-attending wastes a seat someone else wanted.
            </p>
          </div>
        </div>
      </section>

      {/* DATES */}
      <section className="px-8 py-[92px] mm:px-6 mm:py-16">
        <div className="max-w-[980px] mx-auto flex flex-col gap-[34px]">
          <h2 className="font-[family-name:var(--font-plex-serif)] font-semibold text-[clamp(30px,4.2vw,42px)] leading-[1.18]">
            The dates that matter
          </h2>
          <div className="grid grid-cols-4 gap-6 mm:grid-cols-2 ms:grid-cols-1">
            {dates.map((d) => (
              <div
                key={d.when}
                className={`border-t-[3px] pt-[18px] flex flex-col gap-2 ${d.last ? 'border-[#E87722]' : 'border-[#16233E]'}`}
              >
                <span className="text-[13px] tracking-[0.12em] uppercase font-semibold text-[#B0561A]">{d.when}</span>
                <span className="text-[18px] font-semibold leading-[1.5]">{d.what}</span>
                <span className="text-[16px] leading-[1.5] text-[#3D4759]">{d.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY */}
      <section id="apply" className="bg-[#16233E] px-8 py-[92px] mm:px-6 mm:py-16">
        <div className="max-w-[800px] mx-auto flex flex-col gap-[20px]">
          <span className="text-[13px] tracking-[0.14em] uppercase font-semibold text-[#E8C79A]">
            Twelve seats · {SEATS_REMAINING} remaining
          </span>
          <h2 className="font-[family-name:var(--font-plex-serif)] font-semibold text-white text-[clamp(32px,5vw,46px)]">
            Apply for a seat
          </h2>
          <p className="text-[clamp(18px,2.2vw,20px)] text-[#D6DCE8]">
            This is an application, not a checkout. Six minutes, and I read every answer myself before confirming a
            place. If we&apos;re not a fit I&apos;ll tell you, and I&apos;ll tell you why.
          </p>
          <a
            href={APPLICATION_FORM_URL}
            className="inline-block self-start bg-[#E87722] hover:bg-[#D06A18] text-white no-underline text-[19px] font-semibold px-[42px] py-[19px] min-h-[44px] mt-[6px]"
          >
            Start my application
          </a>
          <p className="text-[17px] text-[#A9B5CA] mt-[10px]">
            Questions first? Message me on WhatsApp:{' '}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A9B5CA] underline"
            >
              +{WHATSAPP_NUMBER}
            </a>
          </p>
        </div>
      </section>

      <footer className="bg-[#0F1930] px-8 py-[34px]">
        <div className="max-w-[1040px] mx-auto flex justify-between gap-6 flex-wrap">
          <span className="text-[15px] text-[#7F8CA6]">Make More &amp; Better Offers Mastermind · Andrew Tugume · Kampala</span>
          <span className="text-[15px] text-[#7F8CA6]">andrewtugume.com</span>
        </div>
      </footer>
    </div>
  )
}
