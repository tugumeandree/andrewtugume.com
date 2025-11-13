import React from 'react'

export default function SEO({ title, description }: { title?: string; description?: string }) {
  const metaTitle = title ? `${title} — Andrew Tugume` : 'Andrew Tugume — Work, Bible Study & Leadership'
  const metaDesc = description || 'Practical Bible teaching and modern work skills for entrepreneurs, freelancers, and leaders.'

  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content="/assets/og-home.png" />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}
