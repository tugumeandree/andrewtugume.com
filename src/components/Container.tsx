import React from 'react'

type ContainerProps = {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'section' | 'article'
}

export default function Container({
  children,
  className = '',
  as: Component = 'div'
}: ContainerProps) {
  return (
    <Component className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Component>
  )
}
