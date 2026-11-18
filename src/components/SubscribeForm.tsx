'use client'

import React, { useId, useState } from 'react'

type Status = 'idle' | 'sending' | 'success' | 'error'

type SubscribeFormProps = {
  tone?: 'light' | 'dark'
  cta?: string
  interest?: string
}

export default function SubscribeForm({ tone = 'light', cta = 'Subscribe', interest = 'General updates' }: SubscribeFormProps) {
  const id = useId()
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, interest, website }),
      })
      setStatus(response.ok ? 'success' : 'error')
      if (response.ok) setEmail('')
    } catch {
      setStatus('error')
    }
  }

  const inputStyles = tone === 'dark'
    ? 'border-white/20 bg-white/10 text-white placeholder-white/60'
    : 'border-black/10 bg-white text-gray-900 placeholder-gray-500'
  const noteColor = tone === 'dark' ? 'text-white/75' : 'text-gray-600'

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      {/* Honeypot: hidden from people, filled by bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${id}-website`}>Website</label>
        <input id={`${id}-website`} type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} />
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <label htmlFor={`${id}-email`} className="sr-only">Email address</label>
        <input
          id={`${id}-email`}
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="your@email.com"
          className={`flex-1 rounded-full border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent ${inputStyles}`}
          required
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-primary hover:bg-[#D6B566] disabled:opacity-60"
        >
          {status === 'sending' ? 'Joining...' : cta}
        </button>
      </div>
      <p className={`mt-3 text-xs ${noteColor}`} aria-live="polite">
        {status === 'success' && 'Thank you — you’re on the list.'}
        {status === 'error' && 'Something went wrong. Please try again.'}
        {(status === 'idle' || status === 'sending') && 'We only email when there’s something worth sharing.'}
      </p>
    </form>
  )
}
