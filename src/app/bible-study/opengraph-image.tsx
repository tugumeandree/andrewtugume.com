import { renderOgImage, ogSize } from '@/lib/seo/og'
import { bibleStudy } from '@/lib/brand'

export const alt = bibleStudy.name
export const size = ogSize
export const contentType = 'image/png'

export default function Image() {
  return renderOgImage({ eyebrow: bibleStudy.name, title: bibleStudy.headline, subtitle: bibleStudy.descriptor, theme: 'scripture' })
}
