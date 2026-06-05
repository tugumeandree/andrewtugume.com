import React from 'react'
import Button from '@/components/Button'
import Link from 'next/link'

export default function FinalCTASection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="bg-primary text-white rounded-2xl p-10 md:p-16">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
            Ready to Build the Next Version of Yourself?
          </h2>

          {/* Subheading */}
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            This isn't theory. It's not motivation. It's structured, accountability-driven coaching that produces measurable results in your career, leadership, and capital.
          </p>

          {/* What you get */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white/10 border border-white/20 rounded-lg p-6">
              <div className="text-2xl mb-3">✓</div>
              <h3 className="font-semibold text-white mb-2">Measurable Outcomes</h3>
              <p className="text-sm text-white/80">
                Clear metrics for success. You'll track progress from day one.
              </p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-lg p-6">
              <div className="text-2xl mb-3">✓</div>
              <h3 className="font-semibold text-white mb-2">Systems That Scale</h3>
              <p className="text-sm text-white/80">
                Frameworks you apply immediately. Not theory. Repeatable processes.
              </p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-lg p-6">
              <div className="text-2xl mb-3">✓</div>
              <h3 className="font-semibold text-white mb-2">Peer Accountability</h3>
              <p className="text-sm text-white/80">
                Community with leaders, technologists, and investors at your level.
              </p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-lg p-6">
              <div className="text-2xl mb-3">✓</div>
              <h3 className="font-semibold text-white mb-2">Curated & Selective</h3>
              <p className="text-sm text-white/80">
                Limited intake. I'm selective about who I coach to maintain depth.
              </p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button asLink href="/apply" variant="primary" size="lg" className="w-full sm:w-auto">
              Claim Your Spot
            </Button>
            <Button asLink href="/programs" variant="ghost" size="lg" className="w-full sm:w-auto">
              Explore the Programs
            </Button>
          </div>

          {/* Scarcity + Reassurance */}
          <p className="text-sm text-white/70 border-t border-white/20 pt-6">
            <span className="font-semibold">Limited intake per cohort.</span> I'm selective about who I coach to maintain depth and quality. The next cohort opens soon.
            <Link href="/contact" className="text-white font-semibold hover:underline ml-1">Questions? Reach out.</Link>
          </p>
        </div>
      </div>
    </section>
  )
}
