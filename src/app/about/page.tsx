import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Andrew Tugume — Teacher, Technologist, Investor',
  description: 'Discover Andrew Tugume\'s journey from compartmentalized life to integrated calling. Learn how a teacher, technologist, and investor helps believers integrate faith with work through WorkMasters, Bible Study, and Leadership Exchange.',
  openGraph: {
    title: 'About Andrew Tugume — Teacher, Technologist, Investor',
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
              Teacher • Technologist • Investor
            </p>
            <p className="text-xl text-blue-100">
              I help believers, workers, and leaders integrate their faith with their calling through biblical teaching, modern technology, and practical business wisdom.
            </p>
          </div>
        </div>
      </div>

      {/* My Story */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8">My Story: Where Three Worlds Collide</h2>
        
        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <p className="text-xl font-semibold text-gray-900">
            For years, I lived in three separate worlds.
          </p>
          
          <p>
            <strong>On Sundays,</strong> I was a Bible teacher, deeply passionate about God's Word and helping people understand Scripture. I studied theology, prepared sermons, and led small groups. But when Monday came, that part of my life felt disconnected from everything else.
          </p>
          
          <p>
            <strong>Monday through Friday,</strong> I was a technologist—building software, solving complex problems, and helping organizations leverage digital tools. I loved the creativity and impact of technology, but I struggled to see how it connected to my faith beyond being "just a job."
          </p>
          
          <p>
            <strong>On the side,</strong> I was an investor, helping entrepreneurs build businesses and working with leaders to scale their organizations. I saw the power of capital and strategy to create opportunity, but again—it felt like a separate compartment of my life.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-lg my-8">
            <p className="text-lg font-semibold text-gray-900 mb-3">
              The turning point came when I realized: <em>God doesn't compartmentalize</em>.
            </p>
            <p className="text-gray-700">
              He called Bezalel to be "filled with the Spirit of God, with wisdom, with understanding, with knowledge and with all kinds of skills—to make artistic designs for work" (Exodus 31:3-4). Technology, business, and teaching weren't separate from my calling—<strong>they were the tools God gave me to serve His purposes.</strong>
            </p>
          </div>

          <p>
            That's when everything changed. I stopped trying to separate "sacred" from "secular" and started asking: <strong>How can I use ALL of who God made me to be—teacher, technologist, investor—to help others thrive in THEIR callings?</strong>
          </p>
          
          <p>
            The answer became the ecosystem you see today.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Bible Study: The Teacher in Me</h3>
                <p className="text-gray-700 mb-4">
                  <strong>I'll never forget the small group member who said,</strong> <em>"I love God, but I feel like the Bible was written for people smarter than me."</em> It broke my heart. <strong>Teaching Scripture is my deepest passion</strong>, and I realized I had a gift for making complex theology accessible without watering it down.
                </p>
                <p className="text-gray-700">
                  That's why <strong>I created my Bible Study series and Nations Bible School</strong>—to help everyday believers understand God's Word deeply and apply it practically. <strong>I've dedicated my life to this work</strong> because nothing transforms lives like Scripture rightly understood.
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
              description: 'Scripture is my foundation. Every principle I teach, every framework I build, every decision I make flows from God\'s Word rightly understood and faithfully applied.'
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

      {/* Journey Timeline */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8">My Journey</h2>
        <div className="space-y-4">
          {[
            { year: '2015-2018', event: 'Struggled to integrate faith, technology, and business', impact: 'Felt like I was living in three separate worlds' },
            { year: '2019', event: 'The "aha moment"—God doesn\'t compartmentalize', impact: 'Began teaching integrated biblical content online' },
            { year: '2020', event: 'Launched first Bible study series', impact: '1,200 downloads in first year' },
            { year: '2021', event: 'Created WorkMasters (TechMasters, CapitalMasters)', impact: '3,500 workers equipped with practical skills' },
            { year: '2022', event: 'Founded Qraft Academy for comprehensive training', impact: '150 students enrolled in first cohort' },
            { year: '2023', event: 'Expanded to Nations Bible & Chariot Leadership schools', impact: '400+ students across 3 specialized schools' },
            { year: '2024', event: 'Integrated platform with Partner & Impact systems', impact: '10,247 downloads, 4,224 community members, 52 countries' },
            { year: '2025', event: 'Adding Tabernacle Tech Institute (4th school)', impact: 'Goal: 25,000 people equipped, 1,000 school students' }
          ].map((milestone, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="w-24 flex-shrink-0">
                <div className="bg-primary text-white px-3 py-2 rounded-lg font-bold text-center text-sm">{milestone.year}</div>
              </div>
              <div className="flex-1 bg-white rounded-lg p-5 shadow-sm border border-gray-200">
                <div className="font-bold text-gray-900 mb-2">{milestone.event}</div>
                <div className="text-sm text-gray-600">{milestone.impact}</div>
              </div>
            </div>
          ))}
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
                <li>• 500+ students trained across 3 continents</li>
                <li>• Multiple successful business ventures</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-primary">Teaching</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 50,000+ article readers</li>
                <li>• 10,247 resource downloads</li>
                <li>• 523 students across 4 schools</li>
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
