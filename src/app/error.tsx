'use client'

import React from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md">
        <p className="text-sm font-semibold tracking-wide text-accent uppercase">Something went wrong</p>
        <h1 className="mt-3 text-3xl font-semibold text-primary">An unexpected error occurred</h1>
        <p className="mt-4 text-gray-600 text-sm">
          {error.digest ? `Error ID: ${error.digest}` : 'Please try again or go back to the home page.'}
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-black"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-black/10 px-6 py-2.5 text-sm font-semibold text-gray-700 hover:border-primary hover:text-primary"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  )
}
