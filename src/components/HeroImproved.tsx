import React from 'react'
import Button from '@/components/Button'

export default function HeroImproved() {
  return (
    <section
      className="relative overflow-hidden h-[85vh] md:h-[100vh] -mt-10 md:-mt-16 bg-gray-900 flex flex-col"
      style={{
        minHeight: '640px',
        backgroundImage: 'url("https://res.cloudinary.com/dwa3soopc/image/upload/v1780616114/andrew-hero-image_evrxyc.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      
      {/* Content container */}
      <div className="relative z-10 flex-1 flex flex-col items-start justify-center px-6 md:px-12 lg:px-16 text-left">
        <div className="max-w-2xl mx-0">
          {/* Main headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
            Shape Your Career, Company, and Capital
          </h1>
          
          {/* Subheadline */}
          <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
            Mastery coaching for ambitious African professionals, founders, and operators who want clear systems, documented progress, and real results.
          </p>
          
          {/* Value proposition */}
          <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg text-accent font-semibold">
            Join leaders, technologists, and investors building the future of work in Africa.
          </p>
        </div>
      </div>

      {/* CTA Section - sticky at bottom */}
      <div className="relative z-20 border-t border-white/30 bg-black/35 backdrop-blur-sm px-6 py-3 md:px-12 md:py-4">
        <div className="flex w-full flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center">
          <Button asLink href="/apply" variant="primary" size="sm" className="w-full sm:w-auto text-xs sm:text-sm">
            Claim Your Spot
          </Button>
          <Button asLink href="/programs" variant="ghost" size="sm" className="w-full sm:w-auto text-xs sm:text-sm hidden sm:inline-flex">
            See How Programs Work
          </Button>
        </div>
      </div>
    </section>
  )
}
