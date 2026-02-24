'use client'

import React, { useMemo, useState } from 'react'

type ContactStatus = 'idle' | 'sending' | 'success' | 'error'

const initialFormData = {
  name: '',
  email: '',
  subject: 'General Inquiry',
  message: '',
}

export default function ContactForm() {
  const [status, setStatus] = useState<ContactStatus>('idle')
  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        setStatus('error')
        return
      }

      setStatus('success')
      setFormData(initialFormData)
    } catch {
      setStatus('error')
    }
  }

  const statusMessage = useMemo(() => {
    if (status === 'success') {
      return 'Your message has been sent. We will respond shortly.'
    }

    if (status === 'error') {
      return 'Unable to send your message right now. Please try again or use WhatsApp.'
    }

    return ''
  }, [status])

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-xl font-bold mb-6">Send a Message</h2>
      <form className="space-y-4" onSubmit={handleSubmit} aria-describedby="contact-form-status">
        <div>
          <label htmlFor="name" className="block font-semibold mb-2 text-sm">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:outline-none"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold mb-2 text-sm">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:outline-none"
            placeholder="your@email.com"
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block font-semibold mb-2 text-sm">Subject</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:outline-none"
            required
          >
            <option>General Inquiry</option>
            <option>School Enrollment Question</option>
            <option>Speaking Invitation</option>
            <option>Partnership Opportunity</option>
            <option>Technical Support</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block font-semibold mb-2 text-sm">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:outline-none"
            placeholder="How can we help you?"
            required
          />
        </div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-blue-900 transition disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
        <div id="contact-form-status" className="text-sm text-gray-700" aria-live="polite">
          {statusMessage}
        </div>
      </form>
    </div>
  )
}