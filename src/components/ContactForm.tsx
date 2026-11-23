'use client'

import React, { useEffect, useState } from 'react'
import { getAttribution, trackLead } from '@/lib/analytics'
import { workplaceTraining } from '@/lib/brand'

type ContactStatus = 'idle' | 'sending' | 'success' | 'error'

const defaultSubjects = [
  'General Inquiry',
  'WorkMasters',
  'InfluenceMasters',
  'FaithMasters',
  workplaceTraining.subject,
  'Speaking Invitation',
  'Podcast / Media Interview',
  'Partnership Opportunity',
  'Other',
]

type ContactFormProps = {
  heading?: string
  subjects?: string[]
  defaultSubject?: string
  subjectLabel?: string
  showOrganisation?: boolean
  messageRequired?: boolean
  submitLabel?: string
}

const fieldStyles = 'w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40'
const labelStyles = 'block font-semibold mb-2 text-sm'

export default function ContactForm({
  heading = 'Send a Message',
  subjects = defaultSubjects,
  defaultSubject = subjects[0],
  subjectLabel = 'Subject',
  showOrganisation = false,
  messageRequired = true,
  submitLabel = 'Send Message',
}: ContactFormProps) {
  const initialFormData = {
    name: '',
    email: '',
    organisation: '',
    subject: defaultSubject,
    preferredContact: 'Email',
    phone: '',
    message: '',
    website: '',
  }
  const [status, setStatus] = useState<ContactStatus>('idle')
  const [formData, setFormData] = useState(initialFormData)

  // /contact?subject=… preselects that subject on arrival, when the form offers it
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get('subject')
    if (requested && subjects.includes(requested)) {
      setFormData((previous) => ({ ...previous, subject: requested }))
    }
  }, [])

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
        body: JSON.stringify({ ...formData, source: getAttribution() }),
      })

      if (!response.ok) {
        setStatus('error')
        return
      }

      setStatus('success')
      trackLead(formData.subject)
      setFormData(initialFormData)
    } catch {
      setStatus('error')
    }
  }

  const needsPhone = formData.preferredContact !== 'Email'

  return (
    <div className="bg-white rounded-2xl border border-black/5 p-6 md:p-8">
      <h2 className="text-xl font-semibold text-primary mb-6">{heading}</h2>

      {status === 'success' ? (
        <div aria-live="polite">
          <p className="text-lg font-semibold text-primary">Thank you — your message has been received.</p>
          <p className="mt-2 text-sm text-gray-700">Andrew’s team will reply using your preferred contact method.</p>
          <button type="button" onClick={() => setStatus('idle')} className="mt-4 text-sm font-semibold text-primary underline">
            Send another message
          </button>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit} aria-describedby="contact-form-status">
          {/* Honeypot: hidden from people, filled by bots */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="contact-website">Website</label>
            <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={formData.website} onChange={handleChange} />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className={labelStyles}>Name</label>
              <input id="contact-name" name="name" type="text" autoComplete="name" value={formData.name} onChange={handleChange} className={fieldStyles} required />
            </div>
            <div>
              <label htmlFor="contact-email" className={labelStyles}>Email</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" value={formData.email} onChange={handleChange} className={fieldStyles} required />
            </div>
          </div>

          {showOrganisation && (
            <div>
              <label htmlFor="contact-organisation" className={labelStyles}>Organisation <span className="font-normal text-gray-600">(optional)</span></label>
              <input id="contact-organisation" name="organisation" type="text" autoComplete="organization" value={formData.organisation} onChange={handleChange} className={fieldStyles} />
            </div>
          )}

          <div>
            <label htmlFor="contact-subject" className={labelStyles}>{subjectLabel}</label>
            <select id="contact-subject" name="subject" value={formData.subject} onChange={handleChange} className={fieldStyles} required>
              {subjects.map((subject) => (
                <option key={subject}>{subject}</option>
              ))}
            </select>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-preferred" className={labelStyles}>Preferred contact method</label>
              <select id="contact-preferred" name="preferredContact" value={formData.preferredContact} onChange={handleChange} className={fieldStyles}>
                <option>Email</option>
                <option>Phone</option>
                <option>WhatsApp</option>
              </select>
            </div>
            {needsPhone && (
              <div>
                <label htmlFor="contact-phone" className={labelStyles}>Phone / WhatsApp</label>
                <input id="contact-phone" name="phone" type="tel" autoComplete="tel" value={formData.phone} onChange={handleChange} className={fieldStyles} required />
              </div>
            )}
          </div>

          <div>
            <label htmlFor="contact-message" className={labelStyles}>
              Message {!messageRequired && <span className="font-normal text-gray-600">(optional)</span>}
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={fieldStyles}
              required={messageRequired}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:bg-black disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending...' : submitLabel}
          </button>
          <p id="contact-form-status" className="text-sm text-gray-700" aria-live="polite">
            {status === 'error' && 'Your message could not be sent. Please try again, or use email or WhatsApp.'}
          </p>
        </form>
      )}
    </div>
  )
}
