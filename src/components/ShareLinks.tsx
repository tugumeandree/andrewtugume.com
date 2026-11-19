import React from 'react'

// Plain share links — no third-party scripts or trackers.
export default function ShareLinks({ url, title }: { url: string; title: string }) {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const targets = [
    { label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}` },
    { label: 'X', href: `https://x.com/intent/post?text=${encodedTitle}&url=${encodedUrl}&via=_drewtugume` },
    { label: 'WhatsApp', href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}` },
    { label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` },
    { label: 'Email', href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}` },
  ]

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-sm font-semibold text-gray-700">Share:</span>
      {targets.map((target) => (
        <a
          key={target.label}
          href={target.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-black/10 bg-white px-3 py-1 text-sm text-primary hover:border-accent hover:no-underline"
        >
          {target.label}
        </a>
      ))}
    </div>
  )
}
