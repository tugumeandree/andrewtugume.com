'use client'

import React, { useState } from 'react'
import { bibleStudy, engagementFormats, signatureTalks } from '@/lib/brand'

type Status = 'idle' | 'sending' | 'success' | 'error'
type Variant = 'speaking' | 'ministry'

const variants = {
  speaking: {
    organisationLabel: 'Organisation / show *',
    engagementTypes: [...engagementFormats.map((format) => format.title), 'Other'],
    topics: [...signatureTalks.map((talk) => talk.title), 'Custom topic'],
    showBudget: true,
    messageLabel: 'Tell us about the event *',
    messagePlaceholder: 'Audience, goals, theme and anything else Andrew should know.',
    submitLabel: 'Send booking request',
  },
  ministry: {
    organisationLabel: 'Church / ministry / organisation *',
    engagementTypes: [
      'Preaching / worship service',
      'Bible study session',
      'Seminar or workshop',
      'Conference or retreat',
      'Fellowship or student group',
      'Online teaching',
      'Other',
    ],
    topics: [...bibleStudy.tracks.map((track) => track.title), ...bibleStudy.seminarThemes.map((theme) => `${theme} Seminar`), 'Other topic'],
    showBudget: false,
    messageLabel: 'Purpose of the invitation *',
    messagePlaceholder: 'What you hope the teaching will achieve for your audience.',
    submitLabel: 'Send invitation',
  },
}

const audienceSizes = ['Under 50', '50–200', '200–500', '500–1,000', '1,000+', 'Online audience']
const budgets = ['Under USD 1,000', 'USD 1,000–3,000', 'USD 3,000–7,500', 'USD 7,500+', 'Podcast / media (no fee)', 'Let’s discuss']

const fieldStyles = 'w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40'
const labelStyles = 'block text-xs font-semibold tracking-wide text-gray-700 uppercase mb-2'

export default function BookingForm({ variant = 'speaking' }: { variant?: Variant }) {
  const config = variants[variant]
  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    engagementType: config.engagementTypes[0],
    eventName: '',
    eventDate: '',
    location: '',
    audienceSize: '',
    budget: '',
    topic: '',
    message: '',
    additional: '',
    website: '',
  }
  const [status, setStatus] = useState<Status>('idle')
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
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, kind: variant }),
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

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-white p-8 md:p-10 text-center" aria-live="polite">
        <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Request received</p>
        <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-primary">Thank you — your request is in.</h3>
        <p className="mt-4 text-gray-700">
          Andrew’s team will review the details and reply about availability. Nothing is confirmed until you hear back.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-semibold text-primary underline"
        >
          Send another request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 md:p-10 space-y-8" aria-describedby="booking-form-status">
      {/* Honeypot: hidden from people, filled by bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={formData.website} onChange={handleChange} />
      </div>

      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-primary mb-2">Contact person</legend>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelStyles}>Full name *</label>
            <input id="name" name="name" type="text" autoComplete="name" value={formData.name} onChange={handleChange} className={fieldStyles} required />
          </div>
          <div>
            <label htmlFor="email" className={labelStyles}>Email *</label>
            <input id="email" name="email" type="email" autoComplete="email" value={formData.email} onChange={handleChange} className={fieldStyles} required />
          </div>
          <div>
            <label htmlFor="organization" className={labelStyles}>{config.organisationLabel}</label>
            <input id="organization" name="organization" type="text" autoComplete="organization" value={formData.organization} onChange={handleChange} className={fieldStyles} required />
          </div>
          <div>
            <label htmlFor="role" className={labelStyles}>Your role</label>
            <input id="role" name="role" type="text" value={formData.role} onChange={handleChange} className={fieldStyles} />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="phone" className={labelStyles}>Phone / WhatsApp</label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" value={formData.phone} onChange={handleChange} className={fieldStyles} />
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-primary mb-2">About the event</legend>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="engagementType" className={labelStyles}>Event type *</label>
            <select id="engagementType" name="engagementType" value={formData.engagementType} onChange={handleChange} className={fieldStyles} required>
              {config.engagementTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="topic" className={labelStyles}>Preferred topic</label>
            <select id="topic" name="topic" value={formData.topic} onChange={handleChange} className={fieldStyles}>
              <option value="">Select a topic</option>
              {config.topics.map((topic) => (
                <option key={topic}>{topic}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="eventName" className={labelStyles}>Event name</label>
            <input id="eventName" name="eventName" type="text" value={formData.eventName} onChange={handleChange} className={fieldStyles} />
          </div>
          <div>
            <label htmlFor="eventDate" className={labelStyles}>Proposed date</label>
            <input id="eventDate" name="eventDate" type="text" placeholder="e.g. 14 March 2027 or Q1 2027" value={formData.eventDate} onChange={handleChange} className={fieldStyles} />
          </div>
          <div>
            <label htmlFor="location" className={labelStyles}>Location</label>
            <input id="location" name="location" type="text" placeholder="City, venue, or online" value={formData.location} onChange={handleChange} className={fieldStyles} />
          </div>
          <div>
            <label htmlFor="audienceSize" className={labelStyles}>Expected audience</label>
            <select id="audienceSize" name="audienceSize" value={formData.audienceSize} onChange={handleChange} className={fieldStyles}>
              <option value="">Select</option>
              {audienceSizes.map((size) => (
                <option key={size}>{size}</option>
              ))}
            </select>
          </div>
          {config.showBudget && (
            <div className="md:col-span-2">
              <label htmlFor="budget" className={labelStyles}>Budget / honorarium</label>
              <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className={fieldStyles}>
                <option value="">Select</option>
                {budgets.map((budget) => (
                  <option key={budget}>{budget}</option>
                ))}
              </select>
            </div>
          )}
          <div className="md:col-span-2">
            <label htmlFor="message" className={labelStyles}>{config.messageLabel}</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder={config.messagePlaceholder}
              className={fieldStyles}
              required
            />
          </div>
          {variant === 'ministry' && (
            <div className="md:col-span-2">
              <label htmlFor="additional" className={labelStyles}>Additional information</label>
              <textarea id="additional" name="additional" rows={3} value={formData.additional} onChange={handleChange} className={fieldStyles} />
            </div>
          )}
        </div>
      </fieldset>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white hover:bg-black disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending...' : config.submitLabel}
        </button>
        <p id="booking-form-status" className="text-sm text-gray-700" aria-live="polite">
          {status === 'error' && 'Your request could not be sent. Please email or WhatsApp instead.'}
        </p>
      </div>
    </form>
  )
}
