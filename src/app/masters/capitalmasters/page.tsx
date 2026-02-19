import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CapitalMasters — Learn to Invest & Build Wealth with Andrew Tugume',
  description: 'Master investing and financial literacy with expert guidance from Andrew Tugume - experienced investor and wealth strategist. Learn investment strategies, financial planning, and wealth building principles.',
}

export default function CapitalMasters() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white rounded-2xl p-8 md:p-12 mb-12">
        <div className="max-w-4xl">
          <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            💰 Masters Program — For Everyone
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">CapitalMasters</h1>
          <p className="text-xl md:text-2xl text-green-100 mb-6">
            Learn to invest and build wealth with a proven investor
          </p>
          <p className="text-lg text-white/90 mb-8">
            From vast experience as an investor, I teach individuals how to make smart investment decisions, achieve financial literacy, and build sustainable wealth through biblical principles and proven strategies.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#programs" className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors">
              Explore Programs
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* What is CapitalMasters */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">What is CapitalMasters?</h2>
        <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-3">
            CapitalMasters is a <strong>Qraft Capital</strong> product under <strong>Rata Qraft Solutions Limited</strong>.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            It is my comprehensive wealth-building program built on <strong>vast experience as an investor</strong> in startups, real estate, and financial markets. I help you understand money, make wise investments, and build generational wealth.
          </p>
          <p className="text-gray-700">
            Unlike typical financial advice, CapitalMasters integrates <strong>biblical stewardship principles</strong> with proven investment strategies. I teach you to build wealth that honors God, serves others, and creates lasting impact.
          </p>
        </div>
      </section>

      {/* The Three Pillars */}
      <section id="programs" className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">The Three Pillars of CapitalMasters</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Investment Education */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-600">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Investment Education</h3>
            <p className="text-gray-700 mb-6">
              Learn how to invest wisely in stocks, real estate, startups, and other asset classes.
            </p>
            <ul className="space-y-3 mb-6 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Stock market investing basics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Real estate investment strategies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Startup & angel investing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Cryptocurrency & alternative assets</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Portfolio diversification</span>
              </li>
            </ul>
          </div>

          {/* Financial Literacy */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-emerald-600">
            <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Financial Literacy</h3>
            <p className="text-gray-700 mb-6">
              Master the fundamentals of money management, budgeting, and financial planning.
            </p>
            <ul className="space-y-3 mb-6 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Budgeting & expense management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Debt elimination strategies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Emergency fund building</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Tax optimization & planning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Insurance & risk management</span>
              </li>
            </ul>
          </div>

          {/* Wealth Building */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-teal-600">
            <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Wealth Building</h3>
            <p className="text-gray-700 mb-6">
              Create multiple income streams and build generational wealth with kingdom impact.
            </p>
            <ul className="space-y-3 mb-6 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Passive income strategies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Business ownership & scaling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Estate planning & legacy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Retirement planning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Generational wealth transfer</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Program Options */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Learning Path</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Self-Paced Courses */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border-2 border-green-200">
            <h3 className="text-2xl font-bold mb-4">Self-Paced Courses</h3>
            <p className="text-gray-700 mb-6">
              Learn at your own pace with comprehensive video courses, workbooks, and templates.
            </p>
            <div className="space-y-4 mb-6">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">📚 Investment Fundamentals</h4>
                <p className="text-sm text-gray-600 mb-2">Master the basics of investing in stocks, bonds, and funds</p>
                <div className="text-green-600 font-bold">$197</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">🏠 Real Estate Investing 101</h4>
                <p className="text-sm text-gray-600 mb-2">Learn how to invest in rental properties and REITs</p>
                <div className="text-green-600 font-bold">$297</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">💼 Building Wealth God's Way</h4>
                <p className="text-sm text-gray-600 mb-2">Biblical principles for financial success and stewardship</p>
                <div className="text-green-600 font-bold">$147</div>
              </div>
            </div>
            <Link href="/store/products" className="block text-center bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors">
              Browse All Courses
            </Link>
          </div>

          {/* 1-on-1 Coaching */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8 border-2 border-emerald-400 relative">
            <div className="absolute -top-3 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
              PREMIUM
            </div>
            <h3 className="text-2xl font-bold mb-4">1-on-1 Investment Coaching</h3>
            <p className="text-gray-700 mb-6">
              Get personalized guidance tailored to your financial situation and investment goals.
            </p>
            <div className="bg-white p-6 rounded-lg mb-6">
              <h4 className="font-bold text-lg mb-4">What's Included:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Personal financial assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Custom investment strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Portfolio review & optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Monthly check-ins & adjustments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Direct access via WhatsApp/Email</span>
                </li>
              </ul>
            </div>
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-green-600 mb-2">Custom Pricing</div>
              <p className="text-sm text-gray-600">Based on your needs and commitment level</p>
            </div>
            <Link href="/contact" className="block text-center bg-emerald-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-emerald-700 transition-colors">
              Apply for Coaching
            </Link>
          </div>
        </div>
      </section>

      {/* Biblical Principles */}
      <section className="mb-12 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Biblical Wealth Principles</h2>
        <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
          CapitalMasters isn't just about getting rich—it's about stewarding God's resources wisely to create impact and honor Him with your finances.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-2xl">📖</span>
              Stewardship Over Ownership
            </h3>
            <p className="text-gray-700 text-sm">
              We teach that all wealth belongs to God—we're merely managers. This mindset transforms how you earn, invest, and give.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-2xl">❤️</span>
              Generosity as Strategy
            </h3>
            <p className="text-gray-700 text-sm">
              Biblical wealth building includes intentional giving. We help you create a giving strategy that aligns with your values and creates kingdom impact.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-2xl">⚖️</span>
              Integrity in Business
            </h3>
            <p className="text-gray-700 text-sm">
              We teach you to build wealth through honest means, fair dealings, and ethical investments that honor God and serve people.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-2xl">👨‍👩‍👧‍👦</span>
              Generational Impact
            </h3>
            <p className="text-gray-700 text-sm">
              True wealth passes from generation to generation. We help you build systems that bless your children and their children.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">My Investment Philosophy</h2>
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">1️⃣</div>
              <div>
                <h3 className="font-bold text-xl mb-2">Education Before Investment</h3>
                <p className="text-gray-700">Never invest in what you don't understand. I teach you the fundamentals before you put money at risk.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">2️⃣</div>
              <div>
                <h3 className="font-bold text-xl mb-2">Diversification & Risk Management</h3>
                <p className="text-gray-700">Don't put all eggs in one basket. Build a balanced portfolio across multiple asset classes and risk levels.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">3️⃣</div>
              <div>
                <h3 className="font-bold text-xl mb-2">Long-Term Thinking</h3>
                <p className="text-gray-700">Wealth is built over decades, not days. Focus on sustainable growth, not get-rich-quick schemes.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">4️⃣</div>
              <div>
                <h3 className="font-bold text-xl mb-2">Value & Impact Alignment</h3>
                <p className="text-gray-700">Invest in companies, projects, and assets that align with your values and create positive impact in the world.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="mb-12 bg-gradient-to-br from-teal-50 to-green-50 rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Student Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-4xl mb-3">📈</div>
            <p className="text-sm text-gray-700 italic mb-4">
              "Andrew taught me how to invest my first $1,000. Two years later, my portfolio is worth over $15,000 and growing!"
            </p>
            <div className="font-bold text-gray-900">— Sarah M., Kenya</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-4xl mb-3">🏠</div>
            <p className="text-sm text-gray-700 italic mb-4">
              "I bought my first rental property using strategies from CapitalMasters. Now I have passive income covering my expenses."
            </p>
            <div className="font-bold text-gray-900">— John K., Uganda</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-4xl mb-3">💰</div>
            <p className="text-sm text-gray-700 italic mb-4">
              "CapitalMasters helped me pay off $20K in debt and start building wealth. Financial freedom is finally within reach!"
            </p>
            <div className="font-bold text-gray-900">— Grace T., Tanzania</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Wealth God's Way?</h2>
        <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
          Start your journey to financial freedom with biblical principles and proven investment strategies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/store/products" className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors">
            Browse Investment Courses
          </Link>
          <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
            Apply for 1-on-1 Coaching
          </Link>
        </div>
      </section>
    </div>
  )
}
