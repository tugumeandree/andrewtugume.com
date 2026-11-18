import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import { brand } from '@/lib/brand'

export default function HeroImproved() {
  return (
    <section className="relative isolate overflow-hidden bg-primary flex min-h-[calc(100svh-73px)] md:min-h-[640px]">
      <Image
        src={brand.images.portrait}
        alt={`${brand.name}, educator, technologist and investor`}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/65 to-black/10" />

      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 py-20 flex flex-col justify-center">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-accent uppercase">{brand.name}</p>
          <p className="mt-2 text-xs sm:text-sm font-semibold tracking-[0.25em] text-white/80 uppercase">
            {brand.titles.join(' · ')}
          </p>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05]">
            {brand.headline}
          </h1>

          <p className="mt-6 text-base md:text-lg text-white/85 leading-relaxed max-w-xl">{brand.heroCopy}</p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Button asLink href="#initiatives" variant="accent" size="lg" className="w-full sm:w-auto hover:no-underline">
              Explore My Work
            </Button>
            <Button asLink href="/about" variant="ghost" size="lg" className="w-full sm:w-auto hover:no-underline">
              Get to Know Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
