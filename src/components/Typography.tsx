import React from 'react'

/* Heading 1 - Page Title/Hero */
export function H1({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h1 className={`text-4xl md:text-6xl font-semibold text-primary ${className}`}>
      {children}
    </h1>
  )
}

/* Heading 2 - Section Title */
export function H2({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`text-3xl md:text-4xl font-semibold text-primary ${className}`}>
      {children}
    </h2>
  )
}

/* Heading 3 - Subsection/Card Title */
export function H3({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={`text-xl font-semibold text-primary ${className}`}>
      {children}
    </h3>
  )
}

/* Heading 4 - Small Section */
export function H4({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h4 className={`text-lg font-semibold text-primary ${className}`}>
      {children}
    </h4>
  )
}

/* Body text - Standard paragraph */
export function Body({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-base text-gray-700 ${className}`}>
      {children}
    </p>
  )
}

/* Small text - Secondary info */
export function Text({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-sm text-gray-700 ${className}`}>
      {children}
    </p>
  )
}

/* Caption - Meta info, labels */
export function Caption({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-xs font-semibold tracking-wide text-accent uppercase ${className}`}>
      {children}
    </p>
  )
}

/* Leading text - Intro/tagline */
export function Lead({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-lg text-gray-700 ${className}`}>
      {children}
    </p>
  )
}
