// Client-side measurement helpers for GA4 and Google Ads. Every call is a no-op
// when the tags are not configured, so forms work the same with or without them.

type Gtag = (...args: unknown[]) => void

declare global {
  interface Window {
    gtag?: Gtag
  }
}

const ATTRIBUTION_KEY = 'at_attribution'
const ATTRIBUTION_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid']

export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', event, params)
}

// Records a lead in GA4 and, when a conversion label is configured, in Google Ads.
export function trackLead(form: string) {
  track('generate_lead', { form })
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
  const label = process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL
  if (adsId && label) track('conversion', { send_to: `${adsId}/${label}` })
}

export function trackSignUp(list: string) {
  track('sign_up', { method: 'email', list })
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
  const label = process.env.NEXT_PUBLIC_GOOGLE_ADS_SIGNUP_LABEL
  if (adsId && label) track('conversion', { send_to: `${adsId}/${label}` })
}

// First-touch attribution: keeps the campaign that brought the visitor in for the session.
export function captureAttribution() {
  try {
    if (sessionStorage.getItem(ATTRIBUTION_KEY)) return
    const params = new URLSearchParams(window.location.search)
    const found = ATTRIBUTION_PARAMS.filter((key) => params.get(key)).map((key) => `${key}=${params.get(key)}`)
    const referrer = document.referrer && !document.referrer.includes(window.location.host) ? `referrer=${document.referrer}` : ''
    const value = [...found, referrer, `landing=${window.location.pathname}`].filter(Boolean).join('; ')
    sessionStorage.setItem(ATTRIBUTION_KEY, value)
  } catch {
    // Storage unavailable (private mode, blocked) — attribution is best-effort
  }
}

export function getAttribution(): string {
  try {
    return sessionStorage.getItem(ATTRIBUTION_KEY) || ''
  } catch {
    return ''
  }
}
