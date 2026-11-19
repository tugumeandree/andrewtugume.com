import type { MetadataRoute } from 'next'
import { brand } from '@/lib/brand'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${brand.name} — ${brand.titles.join(', ')}`,
    short_name: brand.name,
    description: brand.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#F7F6F2',
    theme_color: '#0B0B0B',
    icons: [
      { src: '/icon', sizes: '64x64', type: 'image/png' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  }
}
