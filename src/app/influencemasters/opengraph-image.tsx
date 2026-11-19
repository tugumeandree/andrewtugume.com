import { renderOgImage, ogSize } from '@/lib/seo/og'
import { influencemasters } from '@/lib/brand'

export const alt = `InfluenceMasters — ${influencemasters.category}`
export const size = ogSize
export const contentType = 'image/png'

export default function Image() {
  return renderOgImage({ eyebrow: `InfluenceMasters · ${influencemasters.category}`, title: influencemasters.promise, theme: 'influence' })
}
