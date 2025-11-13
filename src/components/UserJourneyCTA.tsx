import React from 'react'
import Link from 'next/link'

type UserJourneyCTAProps = {
  currentStep: 'content' | 'school' | 'product' | 'event'
  context: 'workmasters' | 'bible' | 'leadership'
}

export default function UserJourneyCTA({ currentStep, context }: UserJourneyCTAProps) {
  const journeys = {
    workmasters: {
      content: {
        next: 'Qraft Academy',
        link: '/schools/qraft-academy',
        message: 'Ready to go deeper? Enroll in Qraft Academy for comprehensive training.'
      },
      school: {
        next: 'WorkMasters Resources',
        link: '/store/products?category=workmasters',
        message: 'Enhance your learning with premium workbooks and templates.'
      },
      product: {
        next: 'Faith & Work Summit',
        link: '/store/events/faith-work-summit',
        message: 'Join hundreds at our annual Faith & Work Summit.'
      },
      event: {
        next: 'Partner With Us',
        link: '/partner',
        message: 'Help us equip more workers. Become a monthly partner.'
      }
    },
    bible: {
      content: {
        next: 'Nations Bible School',
        link: '/schools/nations-bible',
        message: 'Want structured Bible training? Enroll in Nations Bible School.'
      },
      school: {
        next: 'Bible Study Resources',
        link: '/store/products?category=bible',
        message: 'Deepen your study with premium guides and commentaries.'
      },
      product: {
        next: 'Bible Study Retreat',
        link: '/store/events',
        message: 'Join our immersive Bible study retreat.'
      },
      event: {
        next: 'Partner With Us',
        link: '/partner',
        message: 'Support Bible education globally. Become a partner.'
      }
    },
    leadership: {
      content: {
        next: 'Chariot Leadership Institute',
        link: '/schools/chariot-leadership',
        message: 'Ready to develop your leadership? Enroll in Chariot Institute.'
      },
      school: {
        next: 'Leadership Resources',
        link: '/store/products?category=leadership',
        message: 'Get practical tools with our leadership workbooks.'
      },
      product: {
        next: 'Leadership Coaching',
        link: '/store/services/coaching',
        message: 'Take your leadership to the next level with 1-on-1 coaching.'
      },
      event: {
        next: 'Partner With Us',
        link: '/partner',
        message: 'Invest in developing Christ-centered leaders. Partner today.'
      }
    }
  }

  const journey = journeys[context][currentStep]

  return (
    <div className="my-8 p-6 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200">
      <h3 className="font-bold text-lg mb-2">Next Step in Your Journey</h3>
      <p className="text-gray-700 mb-4">{journey.message}</p>
      <Link href={journey.link} className="inline-block bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-blue-900 transition">
        Explore {journey.next} →
      </Link>
    </div>
  )
}
