import React from 'react'

type ExternalLinkProps = {
  href: string
  className?: string
  children: React.ReactNode
}

// Opens in a new tab, with a drawn icon (no font glyph) and a screen-reader note.
export default function ExternalLink({ href, className = '', children }: ExternalLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`gap-2 ${className}`}>
      {children}
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="shrink-0"
      >
        <path d="M14 4h6v6" />
        <path d="M20 4 11 13" />
        <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
      </svg>
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  )
}
