import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Andrew Tugume — Educator, Technologist, Investor',
  description: 'Discover Andrew Tugume\'s journey from compartmentalized life to integrated calling. Learn how an educator, technologist, and investor helps scholars integrate faith with work through WorkMasters, Bible Study, and Leadership Exchange.',
  openGraph: {
    title: 'About Andrew Tugume — Educator, Technologist, Investor',
    description: 'Discover Andrew\'s journey from compartmentalized life to integrated calling.',
    url: 'https://andrewtugume.com/about',
    type: 'profile',
  },
}

export default function About() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section - Triple Identity */}
      <div className="bg-gradient-to-br from-primary via-blue-800 to-slate-900 text-white rounded-2xl p-12 mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img 
            src="https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg" 
            alt="Andrew Tugume" 
            className="w-48 h-48 rounded-full object-cover border-4 border-white/20 shadow-2xl"
          />
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4">Hi, I'm Andrew Tugume</h1>
            <p className="text-3xl font-semibold text-blue-200 mb-6">
              Educator • Technologist • Investor
            </p>
            <p className="text-xl text-blue-100">
              I help workers, leaders, and learners succeed through well-researched teaching and training, modern technology, and practical financial wisdom.
            </p>
          </div>
        </div>
      </div>

      {/* Andrew as Educator, Technologist, and Investor */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8">Andrew as an Educator, Technologist, and Investor</h2>
        
        <div className="space-y-8">
          {/* Educator */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border-2 border-purple-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-purple-900 mb-4">As an Educator</h3>
                    <p className="text-gray-700 mb-4">
                      Andrew's deepest passion is making learning accessible and applicable. Through his three registered schools—<strong>Qraft Academy</strong>, <strong>Chariot Leadership Institute</strong>, and <strong>Nations Bible Community</strong>—he helps workers, leaders and bible scholars learn and succeed in their callings
                    </p>
                <p className="text-gray-700 mb-4">
                  With extensive experience in <strong>learning and development</strong>, <strong>instructional design</strong>, and <strong>curriculum development</strong>, Andrew brings professional rigor to learning. His deep knowledge of EdTech and course creation enables him to build transformative learning experiences that leverage modern pedagogy.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Teaching Philosophy:</strong> Andrew believes in the principle of having knowledge available in all places. His three schools operate across academia, industry, and governance to ensure that learners are equipped to thrive in every sphere of life.
                </p>
                <div className="bg-white/70 rounded-lg p-4">
                  <p className="text-sm font-semibold text-purple-900 mb-2">Andrew's Three Registered Schools:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Qraft Academy : Comprehensive Modern Work Development Training</strong> - Qraft Academy offers cutting-edge training and skill development for workers—including entrepreneurs, freelancers, employees, industry leaders and learners—to effectively navigate the future of work. Our programs focus on career development, work readiness, and employability.</li>
                    <li>• <strong>Chariot Leadership Institute</strong> - Chariot Leadership Institute offers comprehensive modern leadership development training for student leaders, professional leaders, managers, social leaders, family leaders, influencers, and public figures, equipping them with the skills needed to excel in their roles.</li>
                    <li>• <strong>Nations Bible Community</strong> - Nations Bible Community offers Bible-based courses and training for workers, leaders, and learners, including a Scripture Challenge and Bible Quiz with cash prizes, as well as training in the theology and doctrine of work and biblical leadership development for leaders.</li>
                  </ul>
                  <p className="text-xs text-purple-800 mt-3 font-semibold">Expertise: Instructional Design • Curriculum Development • Course Creation • EdTech • Learning & Development • Biblical Wisdom</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technologist */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8 border-2 border-indigo-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-indigo-900 mb-4">As a Technologist</h3>
                <p className="text-gray-700 mb-4">
                  Andrew is a software engineer and technology strategist who builds digital solutions and helps organizations leverage modern technology. From full-stack web development to AI integration, he combines technical expertise with strategic thinking to solve complex problems.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Tech Philosophy:</strong> Technology should serve people, not complicate their lives. Andrew believes in building elegant, user-friendly solutions that empower individuals and organizations to achieve their missions more effectively.
                </p>
                <div className="bg-white/70 rounded-lg p-4">
                  <p className="text-sm font-semibold text-indigo-900 mb-2">Andrew's Tech Stack:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Frontend:</strong> React, Next.js, TypeScript, Tailwind CSS</li>
                    <li>• <strong>Backend:</strong> Node.js, Python, PostgreSQL, REST APIs</li>
                    <li>• <strong>Cloud:</strong> AWS, Azure, Docker, DevOps practices</li>
                    <li>• <strong>Teaching:</strong> TechMasters program and Tabernacle Tech Institute</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Investor */}
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8 border-2 border-green-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-green-900 mb-4">As an Investor</h3>
                <p className="text-gray-700 mb-4">
                  Andrew helps entrepreneurs build businesses, guides leaders in scaling organizations, and teaches biblical principles of wealth building and stewardship. He combines financial acumen with kingdom values to create sustainable, impactful investment strategies.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Investment Philosophy:</strong> Capital is a tool for creating opportunity and advancing God's kingdom. Andrew invests in people, ideas, and businesses that align with biblical values while generating sustainable returns and positive social impact.
                </p>
                <div className="bg-white/70 rounded-lg p-4">
                  <p className="text-sm font-semibold text-green-900 mb-2">Investment Focus Areas:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Startups:</strong> Early-stage tech companies and social enterprises</li>
                    <li>• <strong>Real Estate:</strong> Strategic property investments and development</li>
                    <li>• <strong>Financial Markets:</strong> Stocks, bonds, and diversified portfolios</li>
                    <li>• <strong>Teaching:</strong> CapitalMasters program on wealth building</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-lg mt-8">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            The Integration: <em>One Calling, Three Expressions</em>
          </p>
          <p className="text-gray-700">
            Andrew doesn't see these as separate careers—they're integrated expressions of his calling to help people thrive. As an <strong>educator</strong>, he makes wisdom accessible. As a <strong>technologist</strong>, he builds tools that empower. As an <strong>investor</strong>, he creates opportunity. Together, these form the foundation for helping scholars integrate faith with their work.
          </p>
        </div>
      </section>

      {/* The Three Ministry Vehicles */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8">How Each Ministry Was Born</h2>
        
        <div className="space-y-8">
          {/* WorkMasters Origin */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">WorkMasters: The Investor-Technologist in Me</h3>
                <p className="text-gray-700 mb-4">
                  <strong>I was sitting across from a talented Christian entrepreneur</strong> who had a brilliant idea but no clue how to build a website, manage finances, or use digital marketing. He was working 80-hour weeks and barely making ends meet. I thought: <em>"If I could just teach him what I know about technology and business, he could 10x his impact."</em>
                </p>
                <p className="text-gray-700">
                  That conversation birthed <strong>WorkMasters</strong>—a program where <strong>I bring my investor mindset and technologist skills</strong> to equip workers with practical tools for success. TechMasters teaches digital skills. CapitalMasters teaches financial wisdom. CourseMasters teaches how to package and sell knowledge.
                </p>
              </div>
            </div>
            <Link href="/workmasters" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center">
              Explore WorkMasters →
            </Link>
          </div>

          {/* Bible Study Origin */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-purple-600">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Bible Study: The Educator in Me</h3>
                <p className="text-gray-700 mb-4">
                  <strong>I'll never forget the small group member who said,</strong> <em>"I love God, but I feel like the Bible was written for people smarter than me."</em> It broke my heart. <strong>Teaching Scripture is my deepest passion</strong>, and I realized I had a gift for making complex theology accessible without watering it down.
                </p>
                <p className="text-gray-700">
                  That's why <strong>I created my Bible Study series and Nations Bible Community</strong>—to help everyday scholars understand God's Word deeply and apply it practically. <strong>I've dedicated my life to this work</strong> because nothing transforms lives like Scripture rightly understood.
                </p>
              </div>
            </div>
            <Link href="/bible-study" className="text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center">
              Explore Bible Study →
            </Link>
          </div>

          {/* Leadership Origin */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-600">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Leadership Exchange: The Leader in Me</h3>
                <p className="text-gray-700 mb-4">
                  <strong>I've made every leadership mistake in the book.</strong> I've hired the wrong people, made decisions that hurt my team, and burned out trying to do everything myself. But through those failures, <strong>I learned what actually works</strong>—and more importantly, what the Bible says about leadership.
                </p>
                <p className="text-gray-700">
                  Through <strong>Chariot Leadership Institute and my Leadership Exchange content, I teach from experience, not theory.</strong> <strong>I know these challenges firsthand</strong> because I've led teams, built organizations, and faced the hard decisions. My teaching blends biblical principles with practical frameworks that work in the real world.
                </p>
              </div>
            </div>
            <Link href="/leadership" className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center">
              Explore Leadership →
            </Link>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8">What Guides My Work</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Excellence as Worship',
              description: 'Everything I do—whether teaching, building technology, or serving—I do to the glory of God with the highest standard of quality. Sloppy work dishonors the One who called us.'
            },
            {
              title: 'Biblical Authority',
              description: ' is my foundation. Every principle I teach, every framework I build, every decision I make flows from God\'s Word rightly understood and faithfully applied.'
            },
            {
              title: 'Accessible Transformation',
              description: 'Life-changing education should be available to everyone. That\'s why I create free content alongside premium schools—removing barriers so anyone can grow.'
            },
            {
              title: 'Practical Implementation',
              description: 'Theory without application is incomplete. I equip people with actual tools, frameworks, and step-by-step guidance to live out what they learn, not just know it.'
            }
          ].map((value, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 border border-gray-200">
              <h3 className="font-bold text-xl mb-3 text-gray-900">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Ecosystem Model */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8">The Host & Vehicles Model</h2>
        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-primary/20">
          <p className="text-xl text-gray-700 mb-6">
            Think of this ecosystem like a car dealership. <strong>I'm the host</strong>—the one behind everything you see. But the <strong>three ministries are the vehicles</strong> I've built to serve different audiences at different stages of their journey.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Free Content</h3>
              <p className="text-sm text-gray-600">The front door—accessible to anyone</p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-lg border border-purple-200">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Communities</h3>
              <p className="text-sm text-gray-600">The garage—where we gather and grow together</p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Schools</h3>
              <p className="text-sm text-gray-600">The workshop—where serious transformation happens</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-blue-100 rounded-lg p-6">
            <p className="text-gray-800 font-semibold mb-2">Here's the beauty of this model:</p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ You can start with <strong>free content</strong> and get immediate value</li>
              <li>✓ You can join <strong>our communities</strong> and connect with others on the same journey</li>
              <li>✓ When you're ready for deeper training, <strong>my schools</strong> are waiting</li>
              <li>✓ Everything is designed to help <strong>you</strong> thrive in <strong>your</strong> calling</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Holding Company Structure */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8">Rata Qraft Solutions Limited</h2>
        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-slate-200">
          <p className="text-lg text-gray-700 mb-6">
            I am an educator, technologist, and investor who founded a for-profit holding company called <strong>Rata Qraft Solutions Limited</strong>. It includes three companies that each carry a Masters program.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
              <h3 className="font-bold text-lg mb-2">Qraft Academy</h3>
              <p className="text-sm text-gray-700">Product: <strong>CourseMasters</strong></p>
            </div>
            <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
              <h3 className="font-bold text-lg mb-2">Qraft Labs</h3>
              <p className="text-sm text-gray-700">Product: <strong>TechMasters</strong></p>
            </div>
            <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
              <h3 className="font-bold text-lg mb-2">Qraft Capital</h3>
              <p className="text-sm text-gray-700">Product: <strong>CapitalMasters</strong></p>
            </div>
          </div>
          <div className="bg-slate-100 rounded-lg p-5">
            <p className="text-gray-700">
              I fund my family, my ministry (<strong>Nations Bible Community</strong>), and my social enterprise (<strong>Chariot Leadership Institute</strong>) from the holding company.
            </p>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8">My Story</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Who Am I? Where Do I Come From?</h3>
            <p className="text-gray-700 mb-4">
              I am Andrew Tugume - educator, technologist, investor, and entrepreneur. Born on September 9th at Nyakibale Hospital in Rukingiri District, Kigezi region, southwestern Uganda, I grew up in Nyakibale Parish, Rujumbura. My mother, Mpirirwe Grace Jovita, was an English primary school educator who pivoted to business after a hearing impairment led to deafness. My father, Kirimuhuzya Claude, is a retired university lecturer. These resilient parents instilled values of perseverance, education, and service.
            </p>
            <p className="text-gray-700">
              I attended Nyakibale Lower Primary School for two years, Rukungiri Modern Primary School for six, Ntare School in Mbarara for high school, and Makerere University for a degree in software engineering.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">The Turning Point: Why Am I Here? What Changed Inside?</h3>
            <p className="text-gray-700">
              Life tested me early. For over six years after high school, caring for my mentally ill mother through endless psychiatry hospital visits drained me - grades slipping, spirit fading. Yet, my inner search intensified. Watching Joseph Prince on TBN during a vacation, I had a profound personal moment: I prayed, felt an unexplainable shift, and experienced deep peace - like sleeping like a baby after years of turmoil. I dove into my Good News Bible (bought in Senior One) and inspirational content. This spiritual awakening answered <strong>why I am here</strong>: to harness inner strength, unlock my voice, and pursue purpose.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">University Momentum: What Can I Do?</h3>
            <p className="text-gray-700">
              At Makerere, I arrived energized and focused. Once painfully shy - never addressing a crowd or debating in high school - this breakthrough awakened natural gifts: clear communication, teaching, and bold leadership. What started as a skill became my core strength.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Mentorship Launchpad: Exposure to the World</h3>
            <p className="text-gray-700">
              In my second-last year, an internship under Kafeero Aziiz - the sharpest mind I've known - at a new organization immersed me in real-world leadership. I sharpened software development, digital training, innovation, investment, management, and business acumen. Leading initiatives like Africa Code Week, Techstars Startup Weekend, and Andela Level Up, I built software products and training programs early on. This opened doors; I've since collaborated professionally with countless organizations.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">My Path Ahead: Where Am I Going? What Impact? Who Are My People? Who Am I Called To? How Will I Get There?</h3>
            <div className="space-y-3 text-gray-700">
              <p><strong>Where am I going?</strong> To scale tech-enabled entrepreneurship, financial literacy, and agricultural value addition across Uganda and Africa.</p>
              <p><strong>What impact do I need to achieve?</strong> Equip thousands with software skills, investment know-how, and leadership tools - sparking jobs, businesses, and wealth in sectors like livestock and agribusiness.</p>
              <p><strong>Who are my people?</strong> Ambitious entrepreneurs, youth, farmers, and investors - from my Rukingiri community to global networks.</p>
              <p><strong>Who am I called to?</strong> Builders and dreamers ready to rise, especially in Uganda's tech, education, and economic ecosystems.</p>
              <p><strong>How do I want to reach there?</strong> Via Rata Qraft Solutions Limited, Qraft Hub, Qraft Academy, and ventures like Kibazzi Photography. Using Next.js, MongoDB, AI, and integrations like Flutterwave, I'll develop digital platforms, incubate startups, create content, and mentor strategically. Relentless execution and key partnerships will drive it.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-gray-700 mb-4">
              This is my story - rooted in trials, powered by purpose, built for impact. Let's build together.
            </p>
            <p className="text-gray-900 font-semibold">Andrew Tugume</p>
            <p className="text-gray-700">Educator. Technologist. Investor.</p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8">Background & Credentials</h2>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-xl mb-4 text-primary">Education</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• B.S. Computer Science</li>
                <li>• Certificate in Biblical Studies</li>
                <li>• Ongoing theological education</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-primary">Experience</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 10+ years in software development & leadership</li>
                <li>• 500+ learners trained across 3 continents</li>
                <li>• Multiple successful business ventures</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-primary">Teaching</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 50,000+ article readers</li>
                <li>• 10,247 resource downloads</li>
                <li>• 523 learners across 4 schools</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-primary">Speaking</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Keynote at conferences & churches</li>
                <li>• Guest lecturer at universities</li>
                <li>• Podcast guest on leadership & faith</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Metrics Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8">Our Impact</h2>
        
        {/* Key Metrics Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center border border-gray-200">
            <div className="text-4xl font-bold text-primary mb-2">10,247</div>
            <div className="text-sm text-gray-600">Content Downloads</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center border border-gray-200">
            <div className="text-4xl font-bold text-primary mb-2">523</div>
            <div className="text-sm text-gray-600">Learners Equipped</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center border border-gray-200">
            <div className="text-4xl font-bold text-primary mb-2">52</div>
            <div className="text-sm text-gray-600">Countries Reached</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center border border-gray-200">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-sm text-gray-600">Satisfaction Rate</div>
          </div>
        </div>

        {/* Technology-Enabled Impact */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-200 mb-8">
          <h3 className="text-xl font-bold mb-4 text-indigo-900">Technology-Enabled Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-1">287</div>
              <div className="text-xs text-gray-700">Tools Taught</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-1">142</div>
              <div className="text-xs text-gray-700">Projects Launched</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-1">3.2M</div>
              <div className="text-xs text-gray-700">Digital Reach</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-1">89%</div>
              <div className="text-xs text-gray-700">Report Increased Productivity</div>
            </div>
          </div>
        </div>

        {/* Lives Transformed */}
        <h3 className="text-2xl font-bold mb-6">Lives Transformed</h3>
        <div className="space-y-6">
          {/* WorkMasters Stories */}
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-600">
            <h4 className="font-bold text-lg mb-4">Workers Through WorkMasters & Qraft Academy</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 italic mb-3">"I went from struggling freelancer to landing my first $10K client within 3 months of TechMasters. Andrew's teaching on biblical vocation gave me confidence I never had."</p>
                <footer className="text-sm font-semibold text-gray-900">— Sarah M., Digital Designer, Kenya</footer>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 italic mb-3">"CapitalMasters helped me secure $250K in funding while maintaining biblical stewardship. My startup now employs 12 people."</p>
                <footer className="text-sm font-semibold text-gray-900">— David K., Entrepreneur, USA</footer>
              </div>
            </div>
          </div>

          {/* Bible Study Stories */}
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-600">
            <h4 className="font-bold text-lg mb-4">Scholars Through Bible Study & Nations Bible Community</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 italic mb-3">"Nations Bible Community gave me theological depth I couldn't get anywhere else. I'm now teaching Scripture confidently in my church."</p>
                <footer className="text-sm font-semibold text-gray-900">— Peter O., Small Group Leader, Nigeria</footer>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 italic mb-3">"The Romans series transformed how I understand grace. My faith has never been stronger."</p>
                <footer className="text-sm font-semibold text-gray-900">— Jennifer L., Scholar, Philippines</footer>
              </div>
            </div>
          </div>

          {/* Leadership Stories */}
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-600">
            <h4 className="font-bold text-lg mb-4">Leaders Through Leadership Exchange & Chariot Institute</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 italic mb-3">"Chariot Leadership Institute equipped me to lead my team with biblical conviction. Our culture has completely transformed."</p>
                <footer className="text-sm font-semibold text-gray-900">— Marcus T., Executive Pastor, South Africa</footer>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 italic mb-3">"I went from insecure leader to confident shepherd. The biblical frameworks are game-changing."</p>
                <footer className="text-sm font-semibold text-gray-900">— Rachel W., Team Lead, Canada</footer>
              </div>
            </div>
          </div>

          {/* Tech-Enabled Impact Stories */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border-l-4 border-indigo-600">
            <h4 className="font-bold text-lg mb-4">Tech-Enabled Impact Stories</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-700 italic mb-3">"After taking the AI for Entrepreneurs course, I automated 40% of my business tasks. I now serve 3x more clients with the same hours."</p>
                <footer className="text-sm font-semibold text-gray-900">— Emmanuel K., Business Owner, Ghana</footer>
                <div className="text-xs text-indigo-600 mt-2">🛠️ Tools Learned: ChatGPT, Zapier, Notion</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-700 italic mb-3">"I built my church's website in one weekend using the skills from Tabernacle Tech. We have reached 500 new families online this year."</p>
                <footer className="text-sm font-semibold text-gray-900">— Pastor James M., Kenya</footer>
                <div className="text-xs text-indigo-600 mt-2">🚀 Project: Church Website launched</div>
              </div>
            </div>
          </div>
        </div>

        {/* Student Outcomes */}
        <div className="bg-white rounded-xl shadow-sm p-8 mt-8">
          <h3 className="text-2xl font-bold mb-6">Student Outcomes</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">92%</div>
              <div className="text-sm text-gray-600">Complete Their Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">87%</div>
              <div className="text-sm text-gray-600">Report Career Advancement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-gray-600">Would Recommend to Others</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-blue-900 rounded-2xl p-12 text-center text-white">
        <h3 className="text-4xl font-bold mb-4">Let's Partner in Your Growth</h3>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Whether you're here to learn, grow in your faith, or build your calling—I'm here to help. Choose your next step:
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/workmasters" className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors">
            Start with Free Content
          </Link>
          <Link href="/community" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
            Join a Community
          </Link>
          <Link href="/schools/qraft-academy" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
            Explore Schools
          </Link>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-blue-100 mb-4">Want to support this mission?</p>
          <Link href="/partner" className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg font-bold hover:bg-yellow-500 transition-colors">
            Become a Partner
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
