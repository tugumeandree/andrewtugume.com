import React from 'react'
import { faithmasters } from '@/lib/brand'

// Temporary text wordmark. Replace the text below with the approved bookmark-and-wordmark
// SVG (and the reversed version when tone is "dark") from FaithMasters_Logo_Suite.zip.
export default function Wordmark({ tone = 'light', className = '' }: { tone?: 'light' | 'dark'; className?: string }) {
  return (
    <span className={`fm-heading font-semibold tracking-tight ${tone === 'dark' ? 'text-white' : 'text-faith-teal'} ${className}`}>
      {faithmasters.name}
    </span>
  )
}
