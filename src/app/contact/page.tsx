import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/seo/schema'

export const metadata: Metadata = {
  title: 'Contact Andrew Tugume',
  description: 'Get in touch with Andrew Tugume. Have questions about WorkMasters, Bible Study, Leadership coaching, or partnership opportunities? Send us a message and we\'ll be in touch soon.',
  keywords: ['contact', 'get in touch', 'inquiry', 'partnership', 'speaking invitation'],
  alternates: {
    canonical: 'https://andrewtugume.com/contact',
  },
  openGraph: {
    title: 'Contact Andrew Tugume',
    description: 'Get in touch. Have questions? We\'d love to hear from you.',
    url: 'https://andrewtugume.com/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Andrew Tugume',
    description: 'Get in touch with Andrew Tugume',
  },
}

export default function Contact() {
  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: 'Home', url: 'https://andrewtugume.com' },
            { name: 'Contact', url: 'https://andrewtugume.com/contact' }
          ]))
        }}
      />
      
      {/* Contact Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            url: 'https://andrewtugume.com/contact',
            name: 'Contact Andrew Tugume',
            description: 'Contact page for inquiries and partnerships',
          })
        }}
      />

      <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Get in Touch</h1>
      <p className="text-gray-700 mb-8">Have a question, opportunity, or just want to say hello? We'd love to hear from you.</p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-xl font-bold mb-6">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block font-semibold mb-2 text-sm">Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2 text-sm">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2 text-sm">Subject</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:outline-none">
                <option>General Inquiry</option>
                <option>School Enrollment Question</option>
                <option>Speaking Invitation</option>
                <option>Partnership Opportunity</option>
                <option>Technical Support</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-2 text-sm">Message</label>
              <textarea 
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:outline-none"
                placeholder="How can we help you?"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-blue-900 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info & FAQs */}
        <div>
          {/* Quick Links */}
          <div className="bg-gray-100 rounded-lg p-6 mb-6">
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/schools" className="block text-primary hover:underline">→ Browse Our Schools</Link>
              <Link href="/partner/opportunities" className="block text-primary hover:underline">→ Submit Speaking Invitation</Link>
              <Link href="/partner/give" className="block text-primary hover:underline">→ Make a Donation</Link>
              <Link href="/impact" className="block text-primary hover:underline">→ View Our Impact</Link>
            </div>
          </div>

          {/* Direct Contact */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="font-bold mb-3">Direct Contact</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-center gap-3">
                <span className="text-xl">📧</span>
                <a href="mailto:andrewtugume2@gmail.com" className="text-primary hover:underline font-medium">andrewtugume2@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">📞</span>
                <a href="tel:+256755017384" className="text-primary hover:underline font-medium">+256 755 017 384</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">💬</span>
                <a href="https://wa.me/256755017384" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline font-medium">WhatsApp Me</a>
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="font-bold mb-2">Response Time</h3>
            <p className="text-sm text-gray-700">We typically respond within 24-48 hours during business days. For urgent school enrollment questions, email <strong>schools@andrewtugume.com</strong></p>
          </div>

          {/* Social Media */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold mb-4">Connect on Social Media</h3>
            <div className="space-y-3">
              <a href="https://www.facebook.com/drewtugume/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-primary">
                <span className="text-xl">📘</span>
                <span>Facebook - Andrew Tugume</span>
              </a>
              <a href="https://twitter.com/andrewtugume" className="flex items-center gap-3 text-gray-700 hover:text-primary">
                <span className="text-xl">🐦</span>
                <span>Twitter - @andrewtugume</span>
              </a>
              <a href="https://www.linkedin.com/in/andrew-tugume-402ba3142/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-primary">
                <span className="text-xl">💼</span>
                <span>LinkedIn - Andrew Tugume</span>
              </a>
              <a href="https://www.instagram.com/coachdrew_tugume/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-primary">
                <span className="text-xl">📸</span>
                <span>Instagram - @coachdrew_tugume</span>
              </a>
              <a href="https://youtube.com/@andrewtugume" className="flex items-center gap-3 text-gray-700 hover:text-primary">
                <span className="text-xl">📺</span>
                <span>YouTube - Andrew Tugume</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 border border-green-200 text-center">
        <h3 className="text-xl font-bold mb-2">Global Ministry, Local Impact</h3>
        <p className="text-gray-700">Based in Nairobi, Kenya • Serving 52+ countries worldwide</p>
      </div>
    </div>
    </>
  )
}
