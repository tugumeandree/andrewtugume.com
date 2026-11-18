'use client'

import React, { useState } from 'react'

export default function CopyButton({ text, label = 'Copy' }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-1.5 text-xs font-semibold text-primary hover:border-accent"
    >
      {copied ? 'Copied ✓' : label}
    </button>
  )
}
