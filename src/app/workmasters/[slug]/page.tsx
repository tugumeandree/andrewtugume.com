import React from 'react'

export default function ProgramPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  return (
    <section>
      <h2 className="text-2xl font-semibold">Program: {slug}</h2>
      <p className="mt-3 text-gray-700">Program details for {slug} — curriculum, outcomes, and enrollment CTA.</p>
    </section>
  )
}
