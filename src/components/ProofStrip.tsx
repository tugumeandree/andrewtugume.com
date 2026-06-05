import React from 'react'

export default function ProofStrip() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-6 md:py-8 bg-accent/5 border-b border-accent/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* Metric 1 */}
          <div className="text-center md:text-left">
            <p className="text-2xl md:text-3xl font-bold text-primary">5000+</p>
            <p className="text-xs md:text-sm text-gray-700 mt-1">Professionals Trained</p>
          </div>

          {/* Metric 2 */}
          <div className="text-center md:text-left">
            <p className="text-2xl md:text-3xl font-bold text-primary">10+</p>
            <p className="text-xs md:text-sm text-gray-700 mt-1">Years Building in Africa</p>
          </div>

          {/* Metric 3 */}
          <div className="text-center md:text-left">
            <p className="text-2xl md:text-3xl font-bold text-primary">3</p>
            <p className="text-xs md:text-sm text-gray-700 mt-1">Schools Founded</p>
          </div>

          {/* Metric 4 */}
          <div className="text-center md:text-left">
            <p className="text-2xl md:text-3xl font-bold text-primary">100M+</p>
            <p className="text-xs md:text-sm text-gray-700 mt-1">Capital Deployed</p>
          </div>
        </div>
      </div>
    </section>
  )
}
