import React from 'react'
import Link from 'next/link'

type SchoolCTAProps = {
  school: 'qraft' | 'nations' | 'chariot'
}

export default function SchoolCTA({ school }: SchoolCTAProps) {
  const schools = {
    qraft: {
      name: 'Qraft Academy',
      tagline: 'Ready to master this? Dive deeper with comprehensive training.',
      description: 'Join Qraft Academy and transform your work with biblical principles and modern skills.',
      link: '/schools/qraft-academy',
      color: 'primary'
    },
    nations: {
      name: 'Nations Bible School',
      tagline: 'Want to go deeper? Study Scripture systematically.',
      description: 'Enroll in Nations Bible School for comprehensive, structured Bible training.',
      link: '/schools/nations-bible',
      color: 'yellow-400'
    },
    chariot: {
      name: 'Chariot Leadership Institute',
      tagline: 'Ready to lead with conviction? Develop your leadership.',
      description: 'Join Chariot Leadership Institute and lead with biblical principles.',
      link: '/schools/chariot-leadership',
      color: 'yellow-300'
    }
  }

  const { name, tagline, description, link, color } = schools[school]

  return (
    <div className={`my-8 p-6 rounded-lg border-l-4 border-${color} bg-gradient-to-r from-gray-50 to-white shadow-sm`}>
      <h3 className="font-bold text-lg mb-2">{tagline}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link href={link} className="inline-block bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-blue-900 transition">
        Enroll in {name} →
      </Link>
    </div>
  )
}
