import React from 'react'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  intro?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'light',
  className = ''
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : ''
  const titleColor = tone === 'dark' ? 'text-white' : 'text-primary'
  const introColor = tone === 'dark' ? 'text-white/70' : 'text-gray-700'

  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">{eyebrow}</p>
      )}
      <h2 className={`mt-3 text-3xl md:text-5xl font-semibold leading-tight ${titleColor}`}>{title}</h2>
      {intro && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${introColor}`}>{intro}</p>
      )}
    </div>
  )
}
