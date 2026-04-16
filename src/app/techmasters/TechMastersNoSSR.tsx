'use client'

import dynamic from 'next/dynamic'

const TechMastersClient = dynamic(() => import('./TechMastersClient'), {
  ssr: false,
})

export default function TechMastersNoSSR() {
  return <TechMastersClient />
}
