import React from 'react'

export default function LeadershipArticle({ params }: { params: { slug: string } }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Leadership Article</h2>
      <p className="mt-3 text-gray-700">Article content will render here.</p>
    </section>
  )
}
