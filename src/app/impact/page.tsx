import React from 'react'
import Link from 'next/link'

export default function Impact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-900 text-white rounded-lg p-12 mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Impact</h1>
        <p className="text-xl">Transforming lives through faith, work, and leadership</p>
      </section>

      {/* Key Metrics Dashboard */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6">By the Numbers (2025)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">10,247</div>
            <div className="text-sm text-gray-600">Content Downloads</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">523</div>
            <div className="text-sm text-gray-600">Students Equipped</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">52</div>
            <div className="text-sm text-gray-600">Countries Reached</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-sm text-gray-600">Satisfaction Rate</div>
          </div>
        </div>

        {/* Tech-Enabled Impact Metrics */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-200 mb-6">
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
      </section>

      {/* Lives Transformed */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Lives Transformed</h2>
        
        <div className="space-y-6">
          {/* WorkMasters Stories */}
          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-primary">
            <h3 className="font-bold text-lg mb-4">Workers Through WorkMasters & Qraft Academy</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-gray-700 italic mb-3">"I went from struggling freelancer to landing my first $10K client within 3 months of TechMasters. Andrew's teaching on biblical vocation gave me confidence I never had."</p>
                <footer className="text-sm font-semibold">— Sarah M., Digital Designer, Kenya</footer>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-gray-700 italic mb-3">"CapitalMasters helped me secure $250K in funding while maintaining biblical stewardship. My startup now employs 12 people."</p>
                <footer className="text-sm font-semibold">— David K., Entrepreneur, USA</footer>
              </div>
            </div>
          </div>

          {/* Bible Study Stories */}
          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-yellow-400">
            <h3 className="font-bold text-lg mb-4">Scholars Through Bible Study & Nations Bible School</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-gray-700 italic mb-3">"Nations Bible School gave me theological depth I couldn't get anywhere else. I'm now teaching Scripture confidently in my church."</p>
                <footer className="text-sm font-semibold">— Peter O., Small Group Leader, Nigeria</footer>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-gray-700 italic mb-3">"The Romans series transformed how I understand grace. My faith has never been stronger."</p>
                <footer className="text-sm font-semibold">— Jennifer L., Scholar, Philippines</footer>
              </div>
            </div>
          </div>

          {/* Leadership Stories */}
          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-yellow-300">
            <h3 className="font-bold text-lg mb-4">Leaders Through Leadership Exchange & Chariot Institute</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-gray-700 italic mb-3">"Chariot Leadership Institute equipped me to lead my team with biblical conviction. Our culture has completely transformed."</p>
                <footer className="text-sm font-semibold">— Marcus T., Executive Pastor, South Africa</footer>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-gray-700 italic mb-3">"I went from insecure leader to confident shepherd. The biblical frameworks are game-changing."</p>
                <footer className="text-sm font-semibold">— Rachel W., Team Lead, Canada</footer>
              </div>
            </div>
          </div>

          {/* Tech-Enabled Impact Stories */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border-l-4 border-indigo-600">
            <h3 className="font-bold text-lg mb-4">Tech-Enabled Impact Stories</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded shadow-sm">
                <p className="text-gray-700 italic mb-3">"After taking the AI for Entrepreneurs course, I automated 40% of my business tasks. I now serve 3x more clients with the same hours."</p>
                <footer className="text-sm font-semibold">— Emmanuel K., Business Owner, Ghana</footer>
                <div className="text-xs text-indigo-600 mt-2">🛠️ Tools Learned: ChatGPT, Zapier, Notion</div>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <p className="text-gray-700 italic mb-3">"I built my church's website in one weekend using the skills from Tabernacle Tech. We have reached 500 new families online this year."</p>
                <footer className="text-sm font-semibold">— Pastor James M., Kenya</footer>
                <div className="text-xs text-indigo-600 mt-2">🚀 Project: Church Website launched</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Reach Map */}
      <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6">Global Reach</h2>
        <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center mb-4">
          <div className="text-gray-500">[Interactive World Map Placeholder - Shows 52 countries]</div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 text-center text-sm">
          <div><strong>Africa:</strong> 18 countries</div>
          <div><strong>Asia:</strong> 15 countries</div>
          <div><strong>Americas:</strong> 12 countries</div>
        </div>
      </section>

      {/* Growth Timeline */}
      <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6">Our Journey</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-24 font-bold text-primary">2020</div>
            <div>
              <h4 className="font-semibold mb-1">Ministry Launch</h4>
              <p className="text-sm text-gray-700">Began with free WorkMasters content, reaching 500 people in first year</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-24 font-bold text-primary">2022</div>
            <div>
              <h4 className="font-semibold mb-1">First School Opens</h4>
              <p className="text-sm text-gray-700">Qraft Academy launched with 47 students; 89% completion rate</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-24 font-bold text-primary">2023</div>
            <div>
              <h4 className="font-semibold mb-1">Expansion Year</h4>
              <p className="text-sm text-gray-700">Nations Bible School and Chariot Leadership Institute launched; reached 5,000+ people</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-24 font-bold text-primary">2025</div>
            <div>
              <h4 className="font-semibold mb-1">Global Impact</h4>
              <p className="text-sm text-gray-700">Serving 52 countries with 10,000+ downloads and 500+ students equipped</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Growth Chart */}
      <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6">Community Growth Over Time</h2>
        <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
          <div className="text-gray-500">[Growth Chart Placeholder - Newsletter subscribers, students, partners]</div>
        </div>
      </section>

      {/* Student Outcomes */}
      <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6">Student Outcomes</h2>
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
      </section>

      {/* Annual Report */}
      <section className="bg-gradient-to-r from-gray-100 to-white rounded-lg p-8 mb-8 text-center">
        <h2 className="text-2xl font-bold mb-4">2024 Annual Impact Report</h2>
        <p className="text-gray-700 mb-6">Download our comprehensive report detailing ministry finances, student outcomes, and strategic goals.</p>
        <Link href="/assets/reports/2024-impact-report.pdf" className="inline-block bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-blue-900">Download Report (PDF)</Link>
      </section>

      {/* Future Goals */}
      <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6">2026 Goals: Growing Our Impact</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-l-4 border-primary pl-4">
            <h4 className="font-semibold mb-2">🎯 Reach 25,000 People</h4>
            <p className="text-sm text-gray-700">Expand free content distribution across digital platforms</p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <h4 className="font-semibold mb-2">🎓 Train 1,000 Students</h4>
            <p className="text-sm text-gray-700">Double our school enrollment with new scholarship programs</p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <h4 className="font-semibold mb-2">🌍 Enter 20 New Countries</h4>
            <p className="text-sm text-gray-700">Launch translated content and regional partnerships</p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <h4 className="font-semibold mb-2">💡 Launch Innovation Lab</h4>
            <p className="text-sm text-gray-700">Develop new resources for emerging work models</p>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="bg-primary text-white rounded-lg p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Help Us Multiply This Impact</h2>
        <p className="text-xl mb-6">Your partnership creates ripples of transformation across nations.</p>
        <Link href="/partner" className="inline-block bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition">Become a Partner →</Link>
      </section>
    </div>
  )
}
