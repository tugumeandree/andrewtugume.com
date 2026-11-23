import { renderOgImage, ogSize } from '@/lib/seo/og'
import { faithmasters } from '@/lib/brand'

export const alt = `${faithmasters.name} — ${faithmasters.byline}`
export const size = ogSize
export const contentType = 'image/png'

export default function Image() {
  return renderOgImage({ eyebrow: faithmasters.name, title: faithmasters.tagline, subtitle: faithmasters.byline, theme: 'faith' })
}
