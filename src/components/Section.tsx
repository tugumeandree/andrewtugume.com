import React from 'react'

type SectionProps = {
  children: React.ReactNode
  spacing?: 'sm' | 'md' | 'lg'
  className?: string
}

const spacingVariants = {
  sm: 'my-8',
  md: 'my-12',
  lg: 'my-16'
}

export default function Section({
  children,
  spacing = 'md',
  className = ''
}: SectionProps) {
  return (
    <section className={`${spacingVariants[spacing]} ${className}`}>
      {children}
    </section>
  )
}
