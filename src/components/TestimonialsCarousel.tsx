'use client'

import React, { useMemo, useState } from 'react'

export type Testimonial = {
  quote: string
  name: string
  role: string
}

type TestimonialsCarouselProps = {
  testimonials: Testimonial[]
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [index, setIndex] = useState(0)
  const total = testimonials.length

  const current = useMemo(() => testimonials[index] ?? testimonials[0], [index, testimonials])

  const goPrev = () => setIndex((prev) => (prev - 1 + total) % total)
  const goNext = () => setIndex((prev) => (prev + 1) % total)

  if (!current) {
    return null
  }

  return (
    <div className="bg-white/90 rounded-xl p-6 md:p-8 shadow-lg border border-white/40">
      <div className="flex items-center justify-between gap-4 mb-4">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900">What professionals are saying</h3>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            className="h-9 w-9 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100"
            aria-label="Previous testimonial"
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            type="button"
            onClick={goNext}
            className="h-9 w-9 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100"
            aria-label="Next testimonial"
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>
      <div className="text-gray-800 text-base md:text-lg leading-relaxed" aria-live="polite">
        “{current.quote}”
      </div>
      <div className="mt-4 text-sm text-gray-600 font-semibold">
        {current.name} · {current.role}
      </div>
      <div className="mt-4 flex items-center gap-2" aria-hidden="true">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            className={`h-2 w-2 rounded-full ${idx === index ? 'bg-primary' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  )
}
