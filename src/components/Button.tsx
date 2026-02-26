import React from 'react'
import Link from 'next/link'

type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  className?: string
  asLink?: boolean
  href?: string
}

type ButtonElement = React.ButtonHTMLAttributes<HTMLButtonElement>

const baseStyles = 'inline-flex items-center justify-center rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'

const variants = {
  primary: 'bg-primary text-white hover:bg-black disabled:opacity-60 disabled:cursor-not-allowed',
  secondary: 'border border-primary text-primary hover:bg-black hover:text-white',
  outline: 'border border-black/5 bg-white text-primary hover:bg-gray-50'
}

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base'
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  asLink = false,
  href = '#',
  ...props
}: ButtonProps & ButtonElement) {
  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (asLink) {
    return (
      <Link
        href={href}
        className={combinedClassName}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      className={combinedClassName}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
