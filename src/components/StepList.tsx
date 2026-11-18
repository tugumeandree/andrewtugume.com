import React from 'react'
import type { Step } from '@/lib/brand'

export default function StepList({ steps, numberClassName = 'text-accent' }: { steps: Step[]; numberClassName?: string }) {
  return (
    <ol className="grid gap-px overflow-hidden rounded-2xl border border-black/5 bg-black/5 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, index) => (
        <li key={step.title} className="bg-white p-6">
          <p className={`font-display text-3xl ${numberClassName}`}>{String(index + 1).padStart(2, '0')}</p>
          <h3 className="mt-3 text-lg font-semibold text-primary">{step.title}</h3>
          <p className="mt-2 text-sm text-gray-700 leading-relaxed">{step.body}</p>
        </li>
      ))}
    </ol>
  )
}
