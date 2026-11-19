'use client'

import Script from 'next/script'
import { useEffect } from 'react'
import { captureAttribution, track } from '@/lib/analytics'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID

// Loads GA4 / Google Ads (only when configured), captures campaign attribution,
// and records clicks on contact and outbound links as events.
export default function Analytics() {
  useEffect(() => {
    captureAttribution()

    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest('a')
      if (!link) return
      const href = link.getAttribute('href') || ''

      if (href.startsWith('mailto:')) track('contact_click', { method: 'email' })
      else if (href.startsWith('tel:')) track('contact_click', { method: 'phone' })
      else if (href.includes('wa.me')) track('contact_click', { method: 'whatsapp' })
      else if (href.includes('youtube.com')) track('youtube_click', { link_url: href })
      else if (href.startsWith('http') && !href.includes(window.location.host)) track('outbound_click', { link_url: href })
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  const tagId = GA_ID || ADS_ID
  if (!tagId) return null

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${tagId}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
${GA_ID ? `gtag('config', '${GA_ID}', { anonymize_ip: true });` : ''}
${ADS_ID ? `gtag('config', '${ADS_ID}');` : ''}`}
      </Script>
    </>
  )
}
