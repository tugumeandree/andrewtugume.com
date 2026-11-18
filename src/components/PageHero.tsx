import React from 'react'
import Image from 'next/image'

type Theme = 'ink' | 'work' | 'influence' | 'scripture'

const themes: Record<Theme, { section: string; eyebrow: string; title: string; intro: string }> = {
  ink: { section: 'bg-primary', eyebrow: 'text-accent', title: 'text-white', intro: 'text-white/80' },
  work: { section: 'bg-work', eyebrow: 'text-work-accent', title: 'text-white', intro: 'text-white/80' },
  influence: { section: 'bg-influence', eyebrow: 'text-[#F2C9D0]', title: 'text-white', intro: 'text-white/85' },
  scripture: { section: 'bg-scripture-light', eyebrow: 'text-scripture-warm', title: 'text-scripture', intro: 'text-gray-800' },
}

type PageHeroProps = {
  eyebrow: string
  title: string
  intro: string
  image?: string
  imageAlt?: string
  theme?: Theme
  children?: React.ReactNode
}

export default function PageHero({ eyebrow, title, intro, image, imageAlt = '', theme = 'ink', children }: PageHeroProps) {
  const style = themes[theme]

  return (
    <section className={`relative overflow-hidden px-4 sm:px-6 lg:px-8 ${style.section}`}>
      <div className={`max-w-6xl mx-auto py-16 md:py-24 grid gap-10 items-center ${image ? 'md:grid-cols-[1.3fr_0.7fr]' : ''}`}>
        <div className="max-w-3xl">
          <p className={`text-xs font-semibold tracking-[0.25em] uppercase ${style.eyebrow}`}>{eyebrow}</p>
          <h1 className={`mt-4 text-4xl md:text-6xl font-semibold leading-[1.05] ${style.title}`}>{title}</h1>
          <p className={`mt-6 text-base md:text-lg leading-relaxed ${style.intro}`}>{intro}</p>
          {children && <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">{children}</div>}
        </div>
        {image && (
          <div className="hidden md:block relative aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-white/20">
            <Image src={image} alt={imageAlt} fill sizes="30vw" className="object-cover" />
          </div>
        )}
      </div>
    </section>
  )
}
