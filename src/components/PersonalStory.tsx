import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function PersonalStory() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-accent uppercase">Built From Real Experience</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-primary leading-tight">
              I'm a Builder, Not a Speaker
            </h2>

            <div className="mt-6 space-y-4 text-gray-700">
              <p>
                I don't coach from theory. I build. I've founded schools, technology companies, and investment funds. I've managed teams, made hard decisions, and learned from failures.
              </p>

              <p>
                My work sits at the intersection of three things:
              </p>

              <div className="space-y-3 mt-4">
                <div className="flex gap-3">
                  <span className="text-2xl">📚</span>
                  <div>
                    <p className="font-semibold text-primary">Learning</p>
                    <p className="text-sm">I built schools and training systems that shape how people think.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">⚙️</span>
                  <div>
                    <p className="font-semibold text-primary">Systems</p>
                    <p className="text-sm">I architect operational, technical, and financial systems that scale.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">💰</span>
                  <div>
                    <p className="font-semibold text-primary">Capital</p>
                    <p className="text-sm">I structure and manage investments that generate real returns.</p>
                  </div>
                </div>
              </div>

              <p className="pt-4 border-t border-black/10">
                The coaching I offer comes from this exact combination. I teach what works because I've had to make it work.
              </p>
            </div>

            <Link href="/about" className="mt-6 inline-flex text-sm font-semibold text-primary hover:text-accent transition-colors">
              Read My Full Story →
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 md:h-full rounded-2xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg"
                alt="Andrew Tugume"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
