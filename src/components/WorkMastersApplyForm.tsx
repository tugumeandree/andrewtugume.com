'use client'

import React, { useMemo, useState } from 'react'
import Link from 'next/link'

export default function WorkMastersApplyForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    reason: ''
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sending')
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'workmasters-apply', ...formData })
      })
      setStatus(response.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const statusMessage = useMemo(() => {
    if (status === 'success') {
      return 'Application received. We will reach out shortly.'
    }
    if (status === 'error') {
      return 'Something went wrong. Please try again or use WhatsApp.'
    }
    return ''
  }, [status])

  return (
    <section className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Apply Now</h2>
      <p className="text-sm text-gray-600 mb-6">Limited seats for coaching and challenges. Share your goals below.</p>
      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2" aria-describedby="workmasters-status">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-semibold text-gray-700">Name</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="rounded-lg border border-gray-300 px-4 py-3 text-sm"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="rounded-lg border border-gray-300 px-4 py-3 text-sm"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="role" className="text-sm font-semibold text-gray-700">Role</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="rounded-lg border border-gray-300 px-4 py-3 text-sm"
            required
          >
            <option value="">Select a role</option>
            <option value="employee">Employee</option>
            <option value="freelancer">Freelancer</option>
            <option value="founder">Founder</option>
            <option value="agri-preneur">Agri-preneur</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="reason" className="text-sm font-semibold text-gray-700">Why join?</label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            rows={4}
            className="rounded-lg border border-gray-300 px-4 py-3 text-sm"
            required
          />
        </div>
        <div className="md:col-span-2 flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors disabled:opacity-60"
          >
            {status === 'sending' ? 'Submitting...' : 'Apply now - limited!'}
          </button>
          <Link
            href="https://wa.me/256755017384"
            className="border border-green-600 text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 text-center"
          >
            WhatsApp
          </Link>
          <Link
            href="mailto:andrewtugume2@gmail.com"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 text-center"
          >
            Email
          </Link>
        </div>
        <div id="workmasters-status" className="md:col-span-2 text-sm text-gray-600" aria-live="polite">
          {statusMessage}
        </div>
      </form>
    </section>
  )
}
