import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TechMasters — Build State-of-the-Art Technology with Andrew Tugume',
  description: 'Master technology development with expert guidance from Andrew Tugume - software engineer and technologist. From R&D to product development, skills training to business strategy for your tech venture.',
}

export default function TechMasters() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl p-8 md:p-12 mb-12">
        <div className="max-w-4xl">
          <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            💻 Masters Program — For Everyone
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">TechMasters</h1>
          <p className="text-xl md:text-2xl text-indigo-100 mb-6">
            Build state-of-the-art technology with a proven software engineer
          </p>
          <p className="text-lg text-white/90 mb-8">
            From vast experience as a technologist and software engineer, I help individuals and teams transform ideas into powerful tech products through research & development, product development, skills development, and business strategy.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#services" className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-indigo-50 transition-colors">
              Explore Services
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* What is TechMasters */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">What is TechMasters?</h2>
        <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-lg mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-3">
            TechMasters is a <strong>Qraft Labs</strong> product under <strong>Rata Qraft Solutions Limited</strong>.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            It is my comprehensive technology development program built on <strong>vast experience as a software engineer and technologist</strong>. I help you navigate the entire journey from idea to market-ready product.
          </p>
          <p className="text-gray-700">
            Whether you're a complete beginner wanting to learn tech skills, an entrepreneur with a tech idea, or a business ready to build a tech product—I provide the expertise you need to succeed.
          </p>
        </div>
      </section>

      {/* The Four Pillars */}
      <section id="services" className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">The Four Pillars of TechMasters</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Research & Development */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-indigo-600">
            <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Research & Development</h3>
            <p className="text-gray-700 mb-6">
              Turn your tech idea into a validated, feasible solution through proper research and strategic planning.
            </p>
            <ul className="space-y-3 mb-6 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Market research & validation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Technical feasibility analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Technology stack selection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Architecture design & planning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Prototype development strategy</span>
              </li>
            </ul>
          </div>

          {/* Product Development */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-purple-600">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Product Development</h3>
            <p className="text-gray-700 mb-6">
              Build your tech product from the ground up with professional guidance and hands-on support.
            </p>
            <ul className="space-y-3 mb-6 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>MVP (Minimum Viable Product) development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Full-stack application development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>API design & integration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Database architecture & optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Testing, deployment & maintenance</span>
              </li>
            </ul>
          </div>

          {/* Skills Development */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-pink-600">
            <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Skills Development</h3>
            <p className="text-gray-700 mb-6">
              Learn to build technology yourself through structured training and mentorship programs.
            </p>
            <ul className="space-y-3 mb-6 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Programming fundamentals (Python, JavaScript, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Web development (Frontend & Backend)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Mobile app development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Cloud computing & DevOps</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>AI/ML basics & implementation</span>
              </li>
            </ul>
          </div>

          {/* Business Development */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-indigo-600">
            <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Business Development</h3>
            <p className="text-gray-700 mb-6">
              Transform your tech product into a sustainable, profitable business with strategic guidance.
            </p>
            <ul className="space-y-3 mb-6 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Go-to-market strategy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Pricing & monetization models</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>User acquisition & growth strategies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Fundraising & pitch preparation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Scaling & team building</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Path</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Learning Path */}
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-8 border-2 border-pink-200">
            <h3 className="text-2xl font-bold mb-4">Learning Path</h3>
            <p className="text-gray-700 mb-4">
              Perfect for individuals who want to learn tech skills and build their own products.
            </p>
            <div className="text-3xl font-bold text-indigo-600 mb-4">Flexible</div>
            <ul className="space-y-2 text-sm text-gray-700 mb-6">
              <li>• 1-on-1 mentorship sessions</li>
              <li>• Self-paced learning materials</li>
              <li>• Code reviews & feedback</li>
              <li>• Project-based learning</li>
            </ul>
            <Link href="/contact" className="block text-center bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors">
              Start Learning
            </Link>
          </div>

          {/* Building Path */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8 border-2 border-indigo-400 relative">
            <div className="absolute -top-3 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold">
              POPULAR
            </div>
            <h3 className="text-2xl font-bold mb-4">Building Path</h3>
            <p className="text-gray-700 mb-4">
              For those with a tech idea who need guidance through the entire development process.
            </p>
            <div className="text-3xl font-bold text-indigo-600 mb-4">Custom Quote</div>
            <ul className="space-y-2 text-sm text-gray-700 mb-6">
              <li>• Full R&D consultation</li>
              <li>• Technical architecture planning</li>
              <li>• Development oversight</li>
              <li>• Business strategy sessions</li>
            </ul>
            <Link href="/contact" className="block text-center bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors">
              Get Quote
            </Link>
          </div>

          {/* Done-For-You Path */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 border-2 border-purple-200">
            <h3 className="text-2xl font-bold mb-4">Done-For-You</h3>
            <p className="text-gray-700 mb-4">
              Let me and my team build your tech product while you focus on your business.
            </p>
            <div className="text-3xl font-bold text-indigo-600 mb-4">Custom Quote</div>
            <ul className="space-y-2 text-sm text-gray-700 mb-6">
              <li>• Full product development</li>
              <li>• Professional team assignment</li>
              <li>• Project management included</li>
              <li>• Post-launch support</li>
            </ul>
            <Link href="/contact" className="block text-center bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors">
              Request Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies I Work With */}
      <section className="mb-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Technologies I Master</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold mb-3">Frontend</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• React / Next.js</li>
              <li>• Vue / Nuxt</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold mb-3">Backend</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Node.js / Express</li>
              <li>• Python / Django</li>
              <li>• PostgreSQL / MongoDB</li>
              <li>• REST & GraphQL APIs</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold mb-3">Mobile</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• React Native</li>
              <li>• Flutter</li>
              <li>• Progressive Web Apps</li>
              <li>• iOS & Android</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold mb-3">Cloud & DevOps</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• AWS / Azure / GCP</li>
              <li>• Docker / Kubernetes</li>
              <li>• CI/CD Pipelines</li>
              <li>• Serverless Architecture</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose TechMasters */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Build Technology With Me?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-5xl mb-4">🔧</div>
            <h3 className="text-xl font-bold mb-3">Hands-On Experience</h3>
            <p className="text-gray-700 text-sm">
              I've built real products, worked with startups, and scaled tech solutions. I teach from experience, not theory.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-3">Full-Stack Expertise</h3>
            <p className="text-gray-700 text-sm">
              From frontend to backend, mobile to cloud—I understand the entire technology stack and can guide you through it all.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-5xl mb-4">💡</div>
            <h3 className="text-xl font-bold mb-3">Business Mindset</h3>
            <p className="text-gray-700 text-sm">
              As an investor and entrepreneur, I don't just build tech—I build tech that makes business sense and generates value.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Tech Product?</h2>
        <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
          Whether you want to learn, need guidance, or want it built for you—let's turn your tech vision into reality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-indigo-50 transition-colors">
            Book a Free Tech Consultation
          </Link>
          <Link href="/schools/tabernacle-tech" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
            Explore Tabernacle Tech Institute
          </Link>
        </div>
      </section>
    </div>
  )
}
