import { renderOgImage, ogSize } from '@/lib/seo/og'
import { workmasters } from '@/lib/brand'

export const alt = `WorkMasters — ${workmasters.category}`
export const size = ogSize
export const contentType = 'image/png'

export default function Image() {
  return renderOgImage({ eyebrow: `WorkMasters · ${workmasters.category}`, title: workmasters.promise, theme: 'work' })
}
