import Link from 'next/link'
import React from 'react'

export default function PillarCard({ title, tagline, description, href, accent = 'primary' }: { title: string, tagline: string, description: string, href: string, accent?: string }) {
  return (
    <article className={`p-6 rounded-lg bg-white shadow-sm border-l-4 ${accent === 'primary' ? 'border-primary' : (accent === 'accent' ? 'border-yellow-400' : 'border-yellow-300')}`}>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{tagline}</p>
      <p className="mt-4 text-gray-700">{description}</p>
      <div className="mt-4">
        <Link href={href} className="text-primary font-medium">Explore</Link>
      </div>
    </article>
  )
}
