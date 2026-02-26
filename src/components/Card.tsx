import React from 'react'

type CardProps = {
  children: React.ReactNode
  variant?: 'default' | 'elevated' | 'outlined'
  className?: string
}

const variants = {
  default: 'bg-white border border-black/5 rounded-2xl',
  elevated: 'bg-white border border-black/5 rounded-2xl shadow-lg',
  outlined: 'border-2 border-black/10 rounded-2xl'
}

export default function Card({
  children,
  variant = 'default',
  className = ''
}: CardProps) {
  return (
    <div className={`${variants[variant]} p-6 md:p-8 ${className}`}>
      {children}
    </div>
  )
}
