import React from 'react'
import { generateFAQSchema } from '@/lib/seo/schema'
import type { Faq } from '@/lib/brand'

export default function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs.map((faq) => ({ question: faq.question, answer: faq.answer }))))
        }}
      />
      <div className="divide-y divide-black/10 border-y border-black/10">
        {faqs.map((faq) => (
          <details key={faq.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-semibold text-primary">
              {faq.question}
              <span aria-hidden="true" className="mt-1 text-accent transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 max-w-3xl text-gray-700 leading-relaxed">{faq.answer}</p>
          </details>
        ))}
      </div>
    </>
  )
}
