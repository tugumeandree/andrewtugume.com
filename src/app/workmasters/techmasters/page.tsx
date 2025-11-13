import React from 'react'
import SchoolCTA from '../../../components/SchoolCTA'

export default function TechMasters() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">TechMasters</h2>
      <p className="mt-3 text-gray-700">Practical Digital Skills for Modern Freelancers — from portfolio to paid clients. Includes product, design, data, and a capstone.</p>

      <h3 className="mt-6 font-semibold">Modules</h3>
      <ol className="mt-2 list-decimal list-inside text-gray-700">
        <li>Foundations — Mindset & Market</li>
        <li>Product & Design</li>
        <li>Data & Automation</li>
      </ol>

      <SchoolCTA school="qraft" />
    </section>
  )
}
