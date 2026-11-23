// Single source of truth for Andrew's public brand: identity, the three flagship
// initiatives, the wider ecosystem, speaking, and resources. Pages render from it.
// Lists marked "add verified entries" render nothing until they have items —
// never add claims, dates, prices, or links that have not been confirmed.

const CLOUDINARY = 'https://res.cloudinary.com/dwa3soopc/image/upload'

// Inserts Cloudinary delivery transforms (format, quality, width) into an upload URL
export const cld = (url: string, width: number) =>
  url.replace('/upload/', `/upload/f_auto,q_auto,w_${width}/`)

export const brand = {
  name: 'Andrew Tugume',
  alias: 'Coach Drew',
  titles: ['Educator', 'Technologist', 'Investor'],
  headline: 'Develop Your Potential. Create Value. Live with Purpose.',
  statement:
    'Through practical education, productive work, intellectual development and biblical teaching, I help people discover what they carry, develop what they know and put it to meaningful use.',
  heroCopy:
    'I help professionals, entrepreneurs and leaders develop productive capabilities and meaningful influence, while sharing ancient wisdom for work, leadership, stewardship and everyday life.',
  description:
    'Andrew Tugume is an educator, technologist and investor helping workers, leaders and learners succeed through deep teaching, modern technology and practical business wisdom.',
  email: 'andrewtugume2@gmail.com',
  phone: '+256 755 017 384',
  whatsapp: 'https://wa.me/256755017384',
  location: 'Kampala, Uganda',
  images: {
    headshot: `${CLOUDINARY}/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg`,
    portrait: `${CLOUDINARY}/v1780616114/andrew-hero-image_evrxyc.png`,
  },
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andrew-tugume-402ba3142/' },
    { label: 'X', href: 'https://x.com/_drewtugume' },
    { label: 'Instagram', href: 'https://www.instagram.com/coachdrew_tugume/' },
    { label: 'YouTube', href: 'https://www.youtube.com/@drewbiblemedia' },
  ],
}

export const roles = [
  { role: 'Educator', body: 'Designing learning that turns knowledge into capability — through programmes, teaching and Bible study.' },
  { role: 'Technologist', body: 'Applying technology, systems and digital tools so that work becomes more productive and less dependent on effort alone.' },
  { role: 'Investor', body: 'Thinking in assets, stewardship and long-term value — for people, businesses and communities.' },
]

export const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/workmasters', label: 'WorkMasters' },
  { href: '/influencemasters', label: 'InfluenceMasters' },
  { href: '/faithmasters', label: 'FaithMasters' },
  { href: '/resources', label: 'Resources' },
  { href: '/ecosystem', label: 'My Ecosystem' },
]

export const primaryCta = { label: 'Explore Programmes', href: '/programs' }

// ── Shared offer model ──────────────────────────────────────

export type Status = 'Available Now' | 'Upcoming' | 'Join Interest List' | 'By Invitation' | 'Enquire'

export type Accent = 'work' | 'influence' | 'scripture'

export type Offer = {
  id: string
  name: string
  kicker: string
  audience: string
  problem: string
  outcome: string
  format: string
  duration?: string
  status: Status
  cta: { label: string; href: string }
}

export type Step = { title: string; body: string }

export type Faq = { question: string; answer: string }

// ── The three flagship initiatives ──────────────────────────

export type Initiative = {
  id: Accent
  name: string
  category: string
  summary: string
  href: string
  cta: string
}

export const initiatives: Initiative[] = [
  {
    id: 'work',
    name: 'WorkMasters',
    category: 'Productive Capital Development',
    summary: 'Turn your skills and expertise into valuable offers, productive systems and income-generating assets.',
    href: '/workmasters',
    cta: 'Explore WorkMasters',
  },
  {
    id: 'influence',
    name: 'InfluenceMasters',
    category: 'Influence Capital Development',
    summary: 'Develop your voice, intellectual assets, authority and capacity to make a meaningful impact.',
    href: '/influencemasters',
    cta: 'Explore InfluenceMasters',
  },
  {
    id: 'scripture',
    name: 'FaithMasters',
    category: 'Bible Study with Andrew Tugume',
    summary: 'Study Scripture in context and apply it to faith, relationships, wellbeing, work, leadership and stewardship.',
    href: '/faithmasters',
    cta: 'Explore FaithMasters',
  },
]

// ── WorkMasters ─────────────────────────────────────────────

export const workmasters = {
  category: 'Productive Capital Development',
  promise: 'Turn what you know and what you can do into valuable work, productive assets and greater freedom.',
  philosophy:
    'Productive freedom is not simply leaving employment or avoiding work. It is the ability to express your gifts, calling, knowledge and expertise through valuable work — supported by systems, leverage, relationships and responsible stewardship.',
  audience: [
    'Employed professionals',
    'Independent consultants',
    'Trainers and subject-matter experts',
    'Freelancers',
    'Entrepreneurs and business founders',
    'Leaders developing productive teams',
  ],
  problems: [
    'Identifying your most valuable capabilities',
    'Converting expertise into clear offers',
    'Attracting and retaining customers',
    'Pricing your services appropriately',
    'Creating predictable income',
    'Building repeatable workflows',
    'Reducing dependence on your personal labour',
    'Developing income-producing assets',
    'Creating value without sacrificing family, wellbeing and personal priorities',
  ],
  engine: [
    { title: 'Discover your capabilities', body: 'Identify the knowledge, skills and experience you already carry.' },
    { title: 'Identify problems worth solving', body: 'Find the problems people and organisations will value solving.' },
    { title: 'Design valuable offers', body: 'Package what you know into clear, priced offers.' },
    { title: 'Validate customer demand', body: 'Test offers with real customers before scaling them.' },
    { title: 'Deliver measurable value', body: 'Deliver consistently and measure the results you create.' },
    { title: 'Build productive systems', body: 'Turn delivery into repeatable workflows, tools and routines.' },
    { title: 'Multiply through assets and leverage', body: 'Grow through assets, teams, technology and relationships.' },
  ] as Step[],
  offers: [
    {
      id: 'live',
      name: 'WorkMasters LIVE',
      kicker: 'Free monthly webinar',
      audience: 'Anyone building productive work — professionals, consultants and founders.',
      problem: 'Knowing where to start and what to work on next.',
      outcome: 'One practical idea, worksheet or system to apply each month.',
      format: 'Online · Tuesdays, 6:00–7:00 PM EAT, once a month (2027)',
      status: 'Upcoming',
      cta: { label: 'Get the 2027 dates', href: '#enquire' },
    },
    {
      id: 'circle',
      name: 'WorkMasters CIRCLE',
      kicker: 'Private in-person gathering',
      audience: 'Committed professionals, consultants and founders.',
      problem: 'Building alone, without peers, accountability or strategic relationships.',
      outcome: 'Meaningful relationships, collaboration, peer learning and accountability.',
      format: 'In person · Saturdays, 2:00–7:00 PM EAT, in the same week as LIVE (2027)',
      status: 'By Invitation',
      cta: { label: 'Request an invitation', href: '#enquire' },
    },
    {
      id: 'worksmart',
      name: 'WorkSmart Bootcamp',
      kicker: 'Productivity & systems training',
      audience: 'Professionals and teams who want to do more valuable work with less friction.',
      problem: 'Busy work, manual processes and tools that are not working together.',
      outcome: 'Personal productivity, work systems, AI-assisted workflows, automation and delegation.',
      format: 'Do It Yourself · Done With You · Done For You',
      status: 'Join Interest List',
      cta: { label: 'Join the interest list', href: '#enquire' },
    },
    {
      id: 'offers',
      name: 'WorkMasters Offer Accelerator',
      kicker: 'Offer-building programme',
      audience: 'Experts and consultants ready to package their expertise.',
      problem: 'Valuable expertise without clear offers, demand or a sales system.',
      outcome: 'Validated offers, lead generation, better sales conversations and a delivery system.',
      format: 'Cohort-based, building on the Make More & Better Offers mastermind',
      status: 'Join Interest List',
      cta: { label: 'Join the interest list', href: '#enquire' },
    },
    {
      id: 'advisory',
      name: 'WorkMasters Advisory',
      kicker: 'Premium support',
      audience: 'Selected professionals, consultants and founders.',
      problem: 'High-stakes decisions about work, offers, systems and growth.',
      outcome: 'Focused strategic support and implementation.',
      format: 'One-to-one advisory · small-group mastermind · implementation intensives · private strategy sessions',
      status: 'Enquire',
      cta: { label: 'Enquire', href: '#enquire' },
    },
  ] as Offer[],
  faqs: [
    {
      question: 'What is WorkMasters?',
      answer: 'WorkMasters is Andrew Tugume’s productive capital development initiative. It helps professionals, consultants and founders turn their skills and expertise into valuable offers, productive systems and income-generating assets.',
    },
    {
      question: 'Where should I start?',
      answer: 'Start with WorkMasters LIVE, the free monthly webinar. From there you can join a bootcamp, the Offer Accelerator or apply for CIRCLE.',
    },
    {
      question: 'When does WorkMasters LIVE run?',
      answer: 'From 2027, LIVE runs online once a month on a Tuesday from 6:00 to 7:00 PM EAT. Join the interest list to receive the confirmed dates.',
    },
    {
      question: 'Who can attend CIRCLE?',
      answer: 'CIRCLE is a private in-person gathering held by invitation. Request an invitation and Andrew’s team will be in touch.',
    },
    {
      question: 'Is WorkMasters for employees or business owners?',
      answer: 'Both. WorkMasters serves employed professionals as well as consultants, freelancers and founders who want to create more value from what they know.',
    },
  ] as Faq[],
}

// ── InfluenceMasters ────────────────────────────────────────

export const influencemasters = {
  category: 'Influence Capital Development',
  promise: 'Discover your voice. Develop your ideas. Build credible authority. Multiply your impact.',
  definition:
    'Influence is not merely social media visibility. It is the ability to create meaningful value, communicate ideas, build trust, develop relationships and mobilise people toward constructive outcomes.',
  audience: [
    'Professionals with specialist expertise',
    'Consultants and trainers',
    'Founders and executives',
    'Authors and aspiring authors',
    'Speakers and thought leaders',
    'Educators',
    'Community and organisational leaders',
  ],
  problems: [
    'Valuable expertise remains invisible',
    'No clear personal positioning',
    'No signature message or framework',
    'Inconsistent publishing',
    'Ideas are never documented',
    'Little intellectual property developed',
    'Few speaking or partnership opportunities',
    'Influence that does not translate into meaningful opportunity or impact',
  ],
  cycle: [
    { title: 'Discover', body: 'Identify your purpose, gifts, experience and the problems worth solving.' },
    { title: 'Develop', body: 'Build expertise, clarity, credibility and original ideas.' },
    { title: 'Document', body: 'Convert knowledge into frameworks, articles, books, courses and talks.' },
    { title: 'Distribute', body: 'Communicate through the channels your audience trusts.' },
    { title: 'Deploy', body: 'Apply influence through leadership, products, speaking and partnerships.' },
    { title: 'Multiply', body: 'Build systems and relationships that extend your impact.' },
  ] as Step[],
  offers: [
    {
      id: 'academy',
      name: 'InfluenceMasters Academy',
      kicker: 'Structured training',
      audience: 'Experts and leaders building a public voice.',
      problem: 'Expertise without positioning, a signature message or a content strategy.',
      outcome: 'Personal positioning, thought leadership, signature ideas and authority building.',
      format: 'Structured training',
      status: 'Join Interest List',
      cta: { label: 'Join the interest list', href: '#enquire' },
    },
    {
      id: 'worklab',
      name: 'InfluenceMasters Worklab',
      kicker: 'Guided asset development',
      audience: 'Experts ready to turn knowledge into intellectual assets.',
      problem: 'Ideas that stay in your head instead of becoming assets.',
      outcome: 'A signature framework, talk, article, book outline, publication plan or knowledge product.',
      format: 'Guided, deliverable-based worklab',
      status: 'Join Interest List',
      cta: { label: 'Apply for interest', href: '#enquire' },
    },
    {
      id: 'studio',
      name: 'InfluenceMasters Studio',
      kicker: 'Production support',
      audience: 'Leaders who need help producing quality content.',
      problem: 'Knowing what to say but lacking production capacity.',
      outcome: 'Podcasts, video teaching, interviews, digital publications and educational content.',
      format: 'Production support',
      status: 'Join Interest List',
      cta: { label: 'Join the interest list', href: '#enquire' },
    },
    {
      id: 'advisory',
      name: 'InfluenceMasters Advisory',
      kicker: 'Premium strategic support',
      audience: 'Experts and leaders developing a distinctive public voice.',
      problem: 'Building an influence platform without a clear strategy.',
      outcome: 'A focused strategy for voice, platform and opportunities.',
      format: 'Advisory',
      status: 'Enquire',
      cta: { label: 'Enquire', href: '#enquire' },
    },
    {
      id: 'media',
      name: 'InfluenceMasters Media',
      kicker: 'Publishing & editorial',
      audience: 'Readers, listeners and contributors.',
      problem: 'Finding serious, practical thinking on ideas and influence.',
      outcome: 'Essays, interviews, podcast episodes, video insights, research notes and frameworks.',
      format: 'Publishing layer',
      status: 'Upcoming',
      cta: { label: 'Get updates', href: '#enquire' },
    },
  ] as Offer[],
  faqs: [
    {
      question: 'What is InfluenceMasters?',
      answer: 'InfluenceMasters is Andrew Tugume’s influence capital development initiative. It helps experts and leaders discover their voice, develop original ideas, document them as intellectual assets and build credible authority.',
    },
    {
      question: 'Is InfluenceMasters about growing on social media?',
      answer: 'No. Visibility is one part of influence, but InfluenceMasters focuses on creating value, communicating ideas, building trust and developing relationships that lead to meaningful impact.',
    },
    {
      question: 'What happened to ContentMasters?',
      answer: 'ContentMasters has been replaced by InfluenceMasters, which covers content as one part of a wider approach to developing influence.',
    },
    {
      question: 'How do I take part?',
      answer: 'InfluenceMasters programmes are being prepared. Join the interest list and you will hear first when places open.',
    },
  ] as Faq[],
}

// ── FaithMasters — Bible Study with Andrew Tugume ───────────

export type Track = {
  id: string
  title: string
  summary: string
  themes: string[]
  passages: string[]
  outcomes: string[]
  safeguards?: string[]
}

// A teaching published only on YouTube. Teachings with their own page on this site
// are MDX files instead — see content/faithmasters/README.md.
export type Teaching = {
  title: string
  youtubeId: string
  track?: string
  scripture?: string
  summary?: string
  date?: string
}

export const faithmasters = {
  name: 'FaithMasters',
  byline: 'Bible Study with Andrew Tugume',
  tagline: 'Study Scripture. Live it faithfully.',
  coreMessage: 'Steward what God has entrusted to you.',
  intro:
    'Explore free Bible teachings on faith, relationships, wellbeing, work, leadership and stewardship. Study at your own pace or join the Friday online Bible study.',
  mission:
    'FaithMasters is the Scripture-centred teaching initiative within AndrewTugume.com. It helps people study the Bible in context and apply it to faith, relationships, wellbeing, work, leadership and stewardship.',
  approach: [
    { title: 'Start with Scripture', body: 'Read the passage itself first, and avoid building on isolated verses.' },
    { title: 'Explain the context', body: 'Look at its history, literary form and theology, and note where Christians read it differently.' },
    { title: 'Connect it to everyday decisions', body: 'Separate what the passage meant then from how it applies now, in plain language.' },
  ] as Step[],
  weekly: {
    title: 'Friday online Bible study',
    when: 'Fridays, 8:00–9:00 p.m. EAT',
    where: 'Online via Google Meet',
    href: 'https://meet.google.com/jbq-qumi-ntf',
  },
  // "Bible Study With Andrew Tugume" channel (confirmed by Andrew, November 2026)
  youtubeChannelUrl: 'https://www.youtube.com/@drewbiblemedia',
  // Add verified YouTube-only teachings: { title, youtubeId, track, scripture, summary, date }
  teachings: [] as Teaching[],
  tracks: [
    {
      id: 'work-leadership',
      title: 'Work, Leadership & Success',
      summary: 'What Scripture teaches about calling, diligence, integrity, leadership and success.',
      themes: [
        'God’s purpose for work',
        'Work before and after the Fall',
        'Calling, gifts and responsibility',
        'Diligence, excellence and discipline',
        'Leadership as service',
        'Authority and accountability',
        'Ambition, humility and contentment',
        'Biblical wisdom and decision-making',
        'Integrity under pressure',
        'Rest, Sabbath and sustainable work',
        'Success, fruitfulness and faithfulness',
        'Leading people with justice and compassion',
      ],
      passages: ['Genesis 1–2', 'Genesis 3', 'Proverbs 6:6–11', 'Proverbs 22:29', 'Joshua 1:8', 'Ecclesiastes 3', 'Mark 10:42–45', 'Colossians 3:23–24', 'James 4:13–17'],
      outcomes: [
        'Explain major biblical teachings about work',
        'Distinguish success from mere wealth or status',
        'Apply biblical principles to leadership decisions',
        'Reflect on ambition, calling and service',
        'Develop a personal work-and-leadership stewardship plan',
      ],
    },
    {
      id: 'business-finance',
      title: 'Business, Money & Finance',
      summary: 'What Scripture teaches about enterprise, money, debt, honesty and generosity.',
      themes: [
        'The purpose and limits of money',
        'Wealth, contentment and the love of money',
        'Business and value creation',
        'Honest trade and fair measurement',
        'Financial planning and budgeting',
        'Debt, borrowing and lending',
        'Saving and preparing for uncertainty',
        'Investment, risk and responsibility',
        'Generosity and care for people in need',
        'Ethical employment and compensation',
        'Financial accountability',
        'Stewardship across generations',
      ],
      passages: ['Proverbs 11:1', 'Proverbs 13:11', 'Proverbs 21:5', 'Proverbs 22:7', 'Luke 12:13–21', 'Luke 14:28–30', 'Luke 16:1–13', '1 Timothy 6:6–19', 'James 5:1–6'],
      outcomes: [
        'Identify biblical principles relevant to financial decisions',
        'Evaluate ethical business conduct',
        'Reflect on money, generosity and contentment',
        'Develop a practical stewardship budget',
        'Recognise the importance of risk, accountability and responsible financial management',
      ],
      safeguards: [
        'Material wealth is not a sign of divine approval.',
        'Biblical passages are not investment strategies.',
        'This teaching is not regulated financial advice.',
        'FaithMasters is never used to solicit investments.',
      ],
    },
    {
      id: 'stewardship',
      title: 'Service, Stewardship & Management',
      summary: 'Faithfulness, service and accountability with the people and resources entrusted to you.',
      themes: [
        'What stewardship means',
        'Ownership and entrusted responsibility',
        'Faithfulness in small things',
        'Time and attention stewardship',
        'Gifts and talents',
        'Managing people with dignity',
        'Servant leadership',
        'Accountability and transparency',
        'Stewardship of institutions and communities',
        'Resource allocation and priorities',
        'Delegation and responsibility',
        'Faithfulness and long-term legacy',
      ],
      passages: ['Genesis 1:26–28', 'Genesis 2:15', 'Matthew 20:25–28', 'Matthew 25:14–30', 'Luke 12:42–48', 'Luke 16:10–12', '1 Corinthians 4:1–2', '1 Peter 4:10–11'],
      outcomes: [
        'Explain stewardship as responsibility before God',
        'Identify the resources and responsibilities entrusted to you',
        'Apply principles of accountability',
        'Develop a personal stewardship plan',
        'Reflect on service, leadership and responsible management',
      ],
    },
    {
      id: 'relationships',
      title: 'Relationships, Wellbeing & Peace',
      summary: 'Biblical wisdom for family, friendship, conflict, forgiveness, rest and peace.',
      themes: [
        'Human dignity and relationships',
        'Love, kindness and compassion',
        'Marriage and family relationships',
        'Friendship and community',
        'Communication and listening',
        'Conflict resolution',
        'Forgiveness and reconciliation',
        'Boundaries and responsibility',
        'Anxiety, worry and trust',
        'Rest and renewal',
        'Peace with others',
        'Hope, resilience and care during hardship',
      ],
      passages: ['Proverbs 15:1', 'Matthew 5:9', 'Matthew 11:28–30', 'Romans 12:9–21', 'Ephesians 4:25–32', 'Philippians 4:4–9', 'Colossians 3:12–15', 'James 1:19–20'],
      outcomes: [
        'Identify biblical principles for healthy relationships',
        'Reflect on communication and conflict',
        'Practise constructive reconciliation where it is safe',
        'Develop personal rest and wellbeing practices',
        'Recognise when specialised professional support is appropriate',
      ],
      safeguards: [
        'Biblical teaching does not replace professional medical or mental-health care.',
        'Teaching on forgiveness or submission never means remaining in an abusive or dangerous situation.',
        'Marriage, trauma, mental health and sensitive relationships are handled with care and appropriate boundaries.',
      ],
    },
  ] as Track[],
  seminarThemes: [
    'Biblical Leadership',
    'Work and Calling',
    'Biblical Money and Stewardship',
    'Service and Management',
    'Relationships and Peace',
  ],
  faqs: [
    {
      question: 'What is FaithMasters?',
      answer: 'FaithMasters is Andrew Tugume’s Scripture-centred teaching initiative, taught as Bible Study with Andrew Tugume. It helps people study the Bible in context and apply it to faith, relationships, wellbeing, work, leadership and stewardship.',
    },
    {
      question: 'Is FaithMasters free?',
      answer: 'Yes. The public library, teaching series, study guides, workbooks and self-paced courses are free, with no sign-in and no need to join a mailing list. Facilitated workplace training for teams and organisations is a separate paid service.',
    },
    {
      question: 'How can I take part?',
      answer: 'Watch teaching on the Bible Study with Andrew Tugume YouTube channel, or join the online Bible study on Fridays from 8:00 to 9:00 p.m. EAT. Email updates are optional.',
    },
    {
      question: 'What is FaithMasters workplace training?',
      answer: 'It is paid, facilitated training for workers, supervisors, managers and organisations that want live help applying biblical principles to workplace responsibilities. Churches, ministries and fellowships can invite Andrew to teach instead.',
    },
    {
      question: 'Is FaithMasters connected to WorkMasters or InfluenceMasters?',
      answer: 'They share the same founder, but FaithMasters is a distinct initiative. You never need to buy a programme to receive biblical teaching.',
    },
    {
      question: 'Does the teaching promise financial success?',
      answer: 'No. The teaching does not equate faith with wealth, promotion or freedom from hardship, and it is not financial advice.',
    },
    {
      question: 'Can this replace counselling or medical care?',
      answer: 'No. Biblical teaching is not a substitute for professional medical or mental-health care, and we encourage seeking specialised support where it is needed.',
    },
    {
      question: 'Can I invite Andrew to teach at my church or organisation?',
      answer: 'Yes. Send an invitation with your event details. Availability is confirmed for each request.',
    },
  ] as Faq[],
}

// Paid, facilitated training for organisations. Separate from guest teaching, which
// churches and ministries request at /faithmasters/invite. The subject preselects the
// matching option on the contact form.
const WORKPLACE_TRAINING_SUBJECT = 'FaithMasters workplace training'

export const workplaceTraining = {
  subject: WORKPLACE_TRAINING_SUBJECT,
  href: `/contact?subject=${encodeURIComponent(WORKPLACE_TRAINING_SUBJECT)}`,
  description:
    'Paid workplace training for workers, supervisors and managers. It adds live facilitation, feedback and help applying the material to your team’s priorities.',
}

// ── Wider ecosystem ─────────────────────────────────────────

export type Venture = {
  id: string
  name: string
  category: string
  description: string
  programmes: string[]
  href?: string
}

export const ecosystem = {
  qraftGroup: {
    id: 'qraft-group',
    name: 'Qraft Group',
    legalName: 'Rata Qraft Solutions Limited',
    relationship: 'Corporate business founded by Andrew Tugume',
    businesses: [
      {
        id: 'qraft-academy',
        name: 'Qraft Academy',
        category: 'Human Capital Development',
        description: 'Developing people and organisations through structured learning.',
        programmes: ['CourseMasters', 'TalentMasters'],
        href: 'https://qraftacademy.com/',
      },
      {
        id: 'qraft-capital',
        name: 'Qraft Capital',
        category: 'Enterprise Capital Development',
        description: 'Developing enterprises through systems and capital.',
        programmes: ['SystemMasters', 'CapitalMasters'],
      },
    ] as Venture[],
  },
  futureOfWorkForum: {
    id: 'future-of-work-forum',
    name: 'Future of Work Forum',
    category: 'Ecosystem Capital Development',
    relationship: 'Connected ecosystem initiative',
    description: 'Bringing people and institutions together around the future of work in Africa.',
    programmes: ['Future of Work Tour', 'Future of Work Awards'],
  },
}

export const capitalDimensions = [
  { title: 'Personal Capital Development', body: 'Productive and influence capital for individuals.', home: 'WorkMasters · InfluenceMasters' },
  { title: 'Human Capital Development', body: 'Skills and talent for people and organisations.', home: 'Qraft Academy' },
  { title: 'Enterprise Capital Development', body: 'Systems and capital for enterprises.', home: 'Qraft Capital' },
  { title: 'Ecosystem Capital Development', body: 'Connections and recognition across the wider ecosystem.', home: 'Future of Work Forum' },
]

export const partnershipTypes = [
  { title: 'Speaking & Training', body: 'Keynotes, workshops and training for organisations, conferences and institutions.' },
  { title: 'Guest Teaching', body: 'Bible teaching and seminars for churches, ministries and Christian organisations.' },
  { title: 'Programme Partnerships', body: 'Co-host WorkMasters or InfluenceMasters programmes and events.' },
  { title: 'Sponsorship', body: 'Support programmes, events and learning opportunities for others.' },
  { title: 'Media & Publishing', body: 'Collaborate on interviews, podcasts, publications and educational content.' },
  { title: 'Institutional Collaboration', body: 'Work together on learning, research and future-of-work initiatives.' },
]

// ── Evidence ────────────────────────────────────────────────

export type Evidence = {
  title: string
  type: 'Project' | 'Collaboration' | 'Publication' | 'Speaking' | 'Outcome' | 'Testimonial'
  detail: string
  source?: string
  href?: string
}

// Add verified entries only. The Evidence section stays hidden while empty.
export const evidence: Evidence[] = []

// ── Speaking ────────────────────────────────────────────────

export const bookingHref = '/speaking#book'

export type Talk = {
  title: string
  summary: string
  audience: string
  takeaways: string[]
}

export const signatureTalks: Talk[] = [
  {
    title: 'Develop Your Potential, Create Value',
    summary: 'How people turn what they carry — knowledge, skill and experience — into valuable work and meaningful contribution.',
    audience: 'Conferences, corporates, universities, youth and professional forums',
    takeaways: [
      'Why potential needs development to become useful',
      'Turning capabilities into valuable work',
      'Building systems that sustain productive work',
    ],
  },
  {
    title: 'Productive Capital: Make More & Better Offers',
    summary: 'How consultants and independent professionals turn expertise into offers and manufacture demand instead of waiting for it.',
    audience: 'Consultants, freelancers, SMEs, business communities',
    takeaways: [
      'Packaging and pricing your expertise',
      'Validating demand before you scale',
      'A repeatable lead-generation and closing system',
    ],
  },
  {
    title: 'Influence Capital: From Expertise to Authority',
    summary: 'How experts and leaders develop original ideas, document them and build credible influence.',
    audience: 'Leadership teams, professional bodies, founders and executives',
    takeaways: [
      'Influence beyond visibility',
      'Turning knowledge into intellectual assets',
      'Building trust that creates opportunity',
    ],
  },
  {
    title: 'The Future of Work',
    summary: 'The skills, systems and leadership the coming decade demands — and how organisations prepare people for it.',
    audience: 'Conferences, corporates, universities, policy forums',
    takeaways: [
      'The shifts reshaping work and careers',
      'Where AI and automation create opportunity',
      'Building people who keep learning',
    ],
  },
  {
    title: 'Technology That Works on Real Problems',
    summary: 'Adopting digital tools and AI with discipline — from manual work to productive systems.',
    audience: 'Tech hubs, developer communities, innovation and operations teams',
    takeaways: [
      'Practical AI-assisted workflows',
      'Automation and delegation',
      'Building durable systems',
    ],
  },
]

export const engagementFormats = [
  { title: 'Keynote', body: 'A 30–60 minute talk that sets the tone for your conference, summit or company event.' },
  { title: 'Panel & Fireside', body: 'Moderated conversations with candid, experience-led perspective.' },
  { title: 'Podcast & Media', body: 'Interviews for podcasts, radio, TV and digital media.' },
  { title: 'Workshop & Masterclass', body: 'Hands-on sessions with frameworks your team can apply immediately.' },
  { title: 'Corporate Training', body: 'Multi-session programmes for leadership teams, managers and staff.' },
  { title: 'Virtual Session', body: 'Webinars and online events delivered live to audiences anywhere.' },
]

export const audiences = [
  'Conferences & summits',
  'Corporates & leadership teams',
  'Universities & schools',
  'Professional associations',
  'Tech hubs & accelerators',
  'Government, NGOs & development partners',
  'Podcasts & media',
  'Business networks',
]

export type Appearance = {
  name: string
  type: 'Event' | 'Podcast' | 'Media' | 'Panel'
  date?: string
  href?: string
}

// Add verified entries: stages, podcasts and media Andrew has appeared on.
export const appearances: Appearance[] = []

export const bios = {
  short:
    'Andrew Tugume is an educator, technologist and investor based in Kampala, Uganda. Through WorkMasters, InfluenceMasters and FaithMasters, he helps people develop their potential, create value and live with purpose. He is the founder of Rata Qraft Solutions Limited (Qraft Group).',
  long:
    'Andrew Tugume is an educator, technologist and investor based in Kampala, Uganda. His work helps people discover what they carry, develop what they know and put it to meaningful use.\n\nThrough WorkMasters, he helps professionals, consultants and founders develop productive capital — turning skills and expertise into valuable offers, productive systems and income-generating assets. Through InfluenceMasters, he helps experts and leaders develop influence capital — their voice, original ideas and credible authority. Through FaithMasters (Bible Study with Andrew Tugume), he teaches Scripture in context and its application to work, leadership, business, stewardship, relationships and everyday life.\n\nAndrew is the founder of Rata Qraft Solutions Limited (Qraft Group), whose businesses include Qraft Academy and Qraft Capital. Known to many of his students as Coach Drew, he speaks to conferences, organisations, universities and churches.',
}

// ── Resources ───────────────────────────────────────────────

export type MediaItem = {
  title: string
  type: 'Video' | 'Podcast' | 'Interview'
  platform: string
  href: string
  category: string
  date?: string
}

export const resourceCategories = [
  'Productive Capital',
  'Influence Capital',
  'Work and Productivity',
  'Business and Value Creation',
  'Leadership',
  'Biblical Work and Success',
  'Biblical Business and Finance',
  'Biblical Service and Stewardship',
  'Biblical Relationships and Wellbeing',
  'Future of Work',
]

// Add verified entries: talks, podcast episodes and interviews.
export const mediaItems: MediaItem[] = []

// ── Answer-engine content ───────────────────────────────────
// Direct, factual answers about Andrew. Only confirmed facts belong here —
// answer engines quote these verbatim.

export const SITE_URL = 'https://andrewtugume.com'

export const facts = [
  { label: 'Name', value: 'Andrew Tugume (known to students as Coach Drew)' },
  { label: 'Roles', value: 'Educator, technologist and investor' },
  { label: 'Based in', value: 'Kampala, Uganda' },
  { label: 'Initiatives', value: 'WorkMasters, InfluenceMasters and FaithMasters (Bible Study with Andrew Tugume)' },
  { label: 'Founder of', value: 'Rata Qraft Solutions Limited (Qraft Group), including Qraft Academy and Qraft Capital' },
  { label: 'Speaks on', value: 'Productive capital, influence, the future of work, technology and biblical wisdom for everyday life' },
  { label: 'Contact', value: 'andrewtugume2@gmail.com · WhatsApp +256 755 017 384' },
]

export const knowsAbout = [
  'Productivity',
  'Career development',
  'Consulting and offer design',
  'Thought leadership',
  'Personal branding',
  'Future of work',
  'Digital tools and AI-assisted workflows',
  'Investment and stewardship',
  'Bible study',
  'Biblical leadership',
]

export const generalFaqs: Faq[] = [
  {
    question: 'Who is Andrew Tugume?',
    answer: 'Andrew Tugume is an educator, technologist and investor based in Kampala, Uganda. He helps people develop their potential, create value and live with purpose through WorkMasters, InfluenceMasters and FaithMasters, and he is the founder of Rata Qraft Solutions Limited (Qraft Group).',
  },
  {
    question: 'What does Andrew Tugume do?',
    answer: 'Andrew teaches, builds and invests. Through WorkMasters he helps people develop productive capital; through InfluenceMasters he helps experts develop influence capital; and through FaithMasters he teaches Scripture and its application to everyday life. He also speaks at conferences, organisations, universities and churches.',
  },
  {
    question: 'Who does Andrew Tugume work with?',
    answer: 'Professionals, consultants, freelancers, entrepreneurs, founders, experts and leaders who want to create more value from what they know — and anyone who wants to study the Bible and apply it to work, money, leadership and relationships.',
  },
  {
    question: 'How do I book Andrew Tugume to speak?',
    answer: 'Send a request through the speaking booking form at andrewtugume.com/speaking, or email andrewtugume2@gmail.com. Churches and ministries can use the teaching invitation form at andrewtugume.com/faithmasters/invite.',
  },
  {
    question: 'Where is Andrew Tugume based?',
    answer: 'Andrew is based in Kampala, Uganda, and works with people and organisations online and in person.',
  },
  {
    question: 'What is Qraft Group?',
    answer: 'Qraft Group (Rata Qraft Solutions Limited) is the corporate business founded by Andrew Tugume. Its businesses include Qraft Academy (human capital development) and Qraft Capital (enterprise capital development).',
  },
  {
    question: 'How can I contact Andrew Tugume?',
    answer: 'Use the contact form at andrewtugume.com/contact, email andrewtugume2@gmail.com, or send a WhatsApp message to +256 755 017 384.',
  },
]
