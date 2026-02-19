import React from 'react'
import Link from 'next/link'

export default function QraftAcademy() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-900 text-white rounded-lg p-12 mb-8">
        <div className="max-w-3xl mx-auto text-center">
          <img src="/assets/qraft-logo-white.svg" alt="Qraft Academy" className="h-20 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Qraft Academy</h1>
          <p className="text-2xl mb-6">Master Modern Work Skills Rooted in Biblical Principles</p>
          <Link href="https://qraftacademy.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition">Enroll Now →</Link>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">Who This Is For</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">✓ Christian Entrepreneurs</h3>
            <p className="text-gray-700">Ready to build God-centered businesses with modern digital skills</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">✓ Freelancers & Consultants</h3>
            <p className="text-gray-700">Seeking to turn faith into thriving independent work</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">✓ Employees in Transition</h3>
            <p className="text-gray-700">Looking to develop marketable skills for career advancement</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">✓ Coaches & Course Creators</h3>
            <p className="text-gray-700">Want to package expertise into profitable programs</p>
          </div>
        </div>
      </section>

      {/* What You'll Achieve */}
      <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">What You'll Achieve</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold">→</span>
            <span>Build a professional portfolio showcasing your work and attracting clients</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold">→</span>
            <span>Master digital skills in product, design, data, and automation</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold">→</span>
            <span>Learn biblical vocation principles that integrate faith and work</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold">→</span>
            <span>Develop pricing strategies and client workflows that honor God</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold">→</span>
            <span>Access capital development strategies for entrepreneurial growth</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold">→</span>
            <span>Create and launch your own courses or coaching programs</span>
          </li>
        </ul>
      </section>

      {/* Curriculum Overview */}
      <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6">Curriculum Overview</h2>
        <div className="grid gap-4">
          <div className="border-l-4 border-primary p-4">
            <h3 className="font-bold text-lg mb-1">TechMasters Track</h3>
            <p className="text-gray-600 mb-2">12 weeks • 36 lessons</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Foundations: Mindset, Market & Biblical Vocation</li>
              <li>• Product & Design Skills for Modern Workers</li>
              <li>• Data & Automation Essentials</li>
              <li>• Client Acquisition & Portfolio Building</li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-400 p-4">
            <h3 className="font-bold text-lg mb-1">CapitalMasters Track</h3>
            <p className="text-gray-600 mb-2">8 weeks • 24 lessons</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Biblical Stewardship & Capital Principles</li>
              <li>• Funding Strategies for Entrepreneurs</li>
              <li>• Investment Fundamentals for Scholars</li>
              <li>• Financial Planning & Kingdom Economics</li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-300 p-4">
            <h3 className="font-bold text-lg mb-1">CourseMasters Track</h3>
            <p className="text-gray-600 mb-2">10 weeks • 30 lessons</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Course Design & Curriculum Development</li>
              <li>• Platform Selection & Technical Setup</li>
              <li>• Marketing & Launch Strategies</li>
              <li>• Coaching Models for Consultants</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Your Instructor */}
      <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6">Your Instructor</h2>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <img src="/assets/andrew-instructor.jpg" alt="Andrew Tugume" className="w-32 h-32 rounded-full object-cover" />
          <div>
            <h3 className="text-xl font-bold mb-2">Andrew Tugume</h3>
            <p className="text-gray-700 mb-4">
              Andrew is a technologist, educator, and entrepreneur with over a decade of experience helping workers integrate biblical principles with modern skills. He has trained thousands of freelancers, entrepreneurs, and employees to build God-centered careers and businesses.
            </p>
            <p className="text-gray-700">
              His unique approach combines practical digital skills training with deep theological reflection on work, calling, and stewardship—helping learners not just succeed professionally, but thrive spiritually in their vocations.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing & Enrollment */}
      <section className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Pricing & Enrollment</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="border-2 rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">Single Track</h3>
            <div className="text-3xl font-bold text-primary mb-4">$497</div>
            <ul className="text-sm space-y-2 mb-6">
              <li>✓ One track (Tech/Capital/Course)</li>
              <li>✓ Lifetime access</li>
              <li>✓ Community support</li>
            </ul>
            <Link href="/schools/qraft-academy/enroll?plan=single" className="block w-full bg-gray-200 text-center py-3 rounded font-semibold hover:bg-gray-300">Enroll</Link>
          </div>

          <div className="border-4 border-primary rounded-lg p-6 relative hover:shadow-xl transition">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold">MOST POPULAR</div>
            <h3 className="font-bold text-lg mb-2">All-Access</h3>
            <div className="text-3xl font-bold text-primary mb-4">$997</div>
            <ul className="text-sm space-y-2 mb-6">
              <li>✓ All three tracks</li>
              <li>✓ Lifetime access</li>
              <li>✓ 1-on-1 coaching sessions</li>
              <li>✓ Priority support</li>
            </ul>
            <Link href="https://qraftacademy.com/" target="_blank" rel="noopener noreferrer" className="block w-full bg-primary text-white text-center py-3 rounded font-bold hover:bg-blue-900">Enroll Now</Link>
          </div>

          <div className="border-2 rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">Payment Plan</h3>
            <div className="text-3xl font-bold text-primary mb-4">$347<span className="text-sm">/mo</span></div>
            <ul className="text-sm space-y-2 mb-6">
              <li>✓ All-Access (3 payments)</li>
              <li>✓ Start immediately</li>
              <li>✓ All benefits included</li>
            </ul>
            <Link href="/schools/qraft-academy/enroll?plan=payment" className="block w-full bg-gray-200 text-center py-3 rounded font-semibold hover:bg-gray-300">Enroll</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6">Student Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <blockquote className="border-l-4 border-primary p-4 bg-gray-50 rounded">
            <p className="text-gray-700 italic mb-3">"Qraft Academy transformed how I approach my freelance work. The biblical foundation gave me confidence, and the practical skills landed me 3 new clients in the first month."</p>
            <footer className="text-sm font-semibold">— Sarah M., Freelance Designer</footer>
          </blockquote>
          <blockquote className="border-l-4 border-primary p-4 bg-gray-50 rounded">
            <p className="text-gray-700 italic mb-3">"The CapitalMasters track helped me secure funding for my startup while staying true to biblical stewardship principles. Worth every penny."</p>
            <footer className="text-sm font-semibold">— David K., Entrepreneur</footer>
          </blockquote>
          <blockquote className="border-l-4 border-primary p-4 bg-gray-50 rounded">
            <p className="text-gray-700 italic mb-3">"I launched my first course using CourseMasters and made back my investment in 2 weeks. Andrew's teaching is practical and grounded in Scripture."</p>
            <footer className="text-sm font-semibold">— Jennifer L., Coach</footer>
          </blockquote>
          <blockquote className="border-l-4 border-primary p-4 bg-gray-50 rounded">
            <p className="text-gray-700 italic mb-3">"As a recent college grad, TechMasters gave me the skills employers actually want. I landed my dream job within 3 months of graduating."</p>
            <footer className="text-sm font-semibold">— Marcus T., Digital Marketer</footer>
          </blockquote>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">How much time do I need to commit?</h3>
            <p className="text-gray-700">Plan for 5-8 hours per week. The program is self-paced, so you can adjust based on your schedule.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Do I need any prerequisites?</h3>
            <p className="text-gray-700">No prior experience required. We start with foundations and build progressively.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">How long do I have access?</h3>
            <p className="text-gray-700">Lifetime access to all course materials, updates, and community.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Is there a money-back guarantee?</h3>
            <p className="text-gray-700">Yes! 30-day full refund if you're not satisfied.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Can I upgrade from a single track to All-Access?</h3>
            <p className="text-gray-700">Absolutely. Just pay the difference and get immediate access to all tracks.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-white rounded-lg p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Work?</h2>
        <p className="text-xl mb-6">Join hundreds of workers building God-centered careers and businesses.</p>
        <Link href="/schools/qraft-academy/enroll" className="inline-block bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition">Enroll in Qraft Academy →</Link>
        <p className="mt-4 text-sm opacity-75">Questions? <a href="/contact" className="underline">Contact us</a> • Not ready yet? <a href="/workmasters" className="underline">Explore free WorkMasters content</a></p>
      </section>
    </div>
  )
}
