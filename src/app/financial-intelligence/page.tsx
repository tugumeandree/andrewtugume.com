import React from 'react'
import Link from 'next/link'

export default function FinancialIntelligence() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Investment & Financial Intelligence</h1>
          <p className="text-xl mb-8">Building your understanding of financial strategies to secure your future</p>
        </div>
      </section>

      {/* Latest Financial Content */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Latest Financial Intelligence Content</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Biblical wisdom and practical strategies for building wealth and financial security.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Biblical Investment Principles for Modern Times', category: 'Investment', date: 'Nov 12, 2025' },
              { title: 'Financial Stewardship: Managing Money as a Faithful Steward', category: 'Stewardship', date: 'Nov 6, 2025' },
              { title: 'Building Passive Income Streams: A Kingdom Approach', category: 'Passive Income', date: 'Oct 25, 2025' },
              { title: 'Capital Raising for Kingdom-Centered Businesses', category: 'Capital', date: 'Oct 18, 2025' }
            ].map((post, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition">
                <div className="text-xs text-green-600 font-semibold mb-2">{post.category}</div>
                <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                <div className="text-sm text-gray-600 mb-3">{post.date}</div>
                <Link href="#" className="text-green-600 font-semibold text-sm hover:underline">
                  Read Article →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Five Core Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Five Core Areas of Financial Intelligence</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Biblical Investment Principles */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-md p-6 border-t-4 border-green-600">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-xl font-bold mb-3">Biblical Investment Principles</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Learn to invest wisely using timeless biblical principles for wealth building.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Wisdom from Proverbs for investors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Diversification and risk management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Long-term wealth building strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Ethical investing guidelines</span>
                </li>
              </ul>
            </div>

            {/* Financial Stewardship */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-md p-6 border-t-4 border-blue-600">
              <div className="text-3xl mb-3">💎</div>
              <h3 className="text-xl font-bold mb-3">Financial Stewardship & Planning</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Manage your finances with the heart of a faithful steward, not an owner.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Biblical budgeting principles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Debt management and freedom</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Emergency fund planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Retirement and legacy planning</span>
                </li>
              </ul>
            </div>

            {/* Passive Income */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-md p-6 border-t-4 border-purple-600">
              <div className="text-3xl mb-3">🌊</div>
              <h3 className="text-xl font-bold mb-3">Passive Income Strategies</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Create sustainable income streams that work while you sleep.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Real estate investing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Dividend investing strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Digital products and courses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Automated business systems</span>
                </li>
              </ul>
            </div>

            {/* Capital Raising */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl shadow-md p-6 border-t-4 border-orange-600">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-xl font-bold mb-3">Capital Raising & Management</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Learn how to raise and manage capital for business growth.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Fundraising strategies for startups</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Understanding investors and equity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Cash flow management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Biblical perspectives on debt and leverage</span>
                </li>
              </ul>
            </div>

            {/* Fintech Tools */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl shadow-md p-6 border-t-4 border-indigo-600">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="text-xl font-bold mb-3">Fintech Tools & Platforms</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Leverage modern financial technology for better money management.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Investment platforms and apps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Budgeting and expense tracking tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Cryptocurrency and blockchain basics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Digital payment systems</span>
                </li>
              </ul>
            </div>

            {/* Impact Investing */}
            <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-xl shadow-md p-6 border-t-4 border-teal-600">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="text-xl font-bold mb-3">Impact & Kingdom Investing</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Invest in ways that generate returns while advancing Kingdom purposes.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>ESG and faith-based investing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Supporting Kingdom businesses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Microfinance and social impact</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Generosity and strategic giving</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Freedom Path */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Your Path to Financial Freedom</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center font-bold text-green-600 flex-shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Foundation: Biblical Money Mindset</h4>
                  <p className="text-gray-700 text-sm">Learn to see money as a steward, not an owner. Understand Kingdom principles for wealth.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center font-bold text-green-600 flex-shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Stability: Financial Planning & Management</h4>
                  <p className="text-gray-700 text-sm">Get out of debt, build emergency funds, and create sustainable budgets.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center font-bold text-green-600 flex-shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Growth: Investment & Wealth Building</h4>
                  <p className="text-gray-700 text-sm">Start investing wisely, diversify your portfolio, and build long-term wealth.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center font-bold text-green-600 flex-shrink-0">4</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Freedom: Passive Income & Legacy</h4>
                  <p className="text-gray-700 text-sm">Create multiple income streams and build generational wealth with Kingdom impact.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA to School */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for In-Depth Financial Training?</h2>
          <p className="text-xl mb-8">Join Qraft Academy for comprehensive courses on business, finance, and investment.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/schools/qraft-academy" className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100">
              Explore Qraft Academy
            </Link>
            <Link href="/community" className="bg-white/20 backdrop-blur border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/30">
              Join Community
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
