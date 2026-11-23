import { renderOgImage, ogSize } from '@/lib/seo/og'
import { brand } from '@/lib/brand'

export const alt = `${brand.name} — ${brand.titles.join(', ')}`
export const size = ogSize
export const contentType = 'image/png'

export default function Image() {
  return renderOgImage({ eyebrow: brand.titles.join(' · '), title: brand.headline, subtitle: 'WorkMasters · InfluenceMasters · FaithMasters' })
}
