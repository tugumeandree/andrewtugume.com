import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md">
        <p className="text-sm font-semibold tracking-wide text-accent uppercase">404</p>
        <h1 className="mt-3 text-3xl font-semibold text-primary">Page not found</h1>
        <p className="mt-4 text-gray-600 text-sm">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-black"
          >
            Go home
          </Link>
          <Link
            href="/programs"
            className="inline-flex items-center justify-center rounded-full border border-black/10 px-6 py-2.5 text-sm font-semibold text-gray-700 hover:border-primary hover:text-primary"
          >
            View programs
          </Link>
        </div>
      </div>
    </div>
  )
}
