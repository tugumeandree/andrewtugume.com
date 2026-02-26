'use client'

import React, { useState } from 'react'

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    program: 'WorkMasters',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Client-side only: show confirmation
    setSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', program: 'WorkMasters', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="bg-white border border-black/5 rounded-2xl p-8 md:p-12">
      <h2 className="text-3xl font-semibold text-primary mb-8">Application form</h2>
      
      {submitted ? (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-primary mt-4">Application received</h3>
          <p className="mt-2 text-gray-700">Thank you for applying. We'll be in touch within 2 business days to schedule your intake interview.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="program" className="block text-sm font-semibold text-primary mb-2">
              Which program interests you?
            </label>
            <select
              name="program"
              id="program"
              value={formData.program}
              onChange={handleChange}
              className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <option value="WorkMasters">WorkMasters – Career, Leadership and Execution Mastery</option>
              <option value="TechMasters">TechMasters – Technology, Product and Innovation Mastery</option>
              <option value="CapitalMasters">CapitalMasters – Investment and Wealth Mastery</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
              Tell us about your goals
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              placeholder="What are you building or working on? What do you hope to achieve in the next 6 months?"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-black"
          >
            Submit Application
          </button>
          <p className="text-xs text-gray-600">We review applications on a rolling basis. Limited intake per cohort.</p>
        </form>
      )}
    </section>
  )
}
