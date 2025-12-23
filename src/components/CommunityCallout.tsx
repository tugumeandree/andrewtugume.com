import React from 'react'
import Link from 'next/link'

type CommunityCalloutProps = {
  community: 'workmasters' | 'nations-bible' | 'chariot-leadership'
  context?: string
}

export default function CommunityCallout({ community, context }: CommunityCalloutProps) {
  const communities = {
    'workmasters': {
      name: 'WorkMasters Community',
      icon: '💼',
      tagline: 'Continue the conversation with fellow workers',
      description: 'Join 1,247 entrepreneurs, freelancers, and employees integrating faith with work.',
      link: '/community/workmasters',
      color: 'blue'
    },
    'nations-bible': {
      name: 'Nations Bible Community',
      icon: '📖',
      tagline: 'Deepen your study with the global community',
      description: 'Join 2,154 scholars from 52 countries studying Scripture together.',
      link: '/community/nations-bible',
      color: 'purple'
    },
    'chariot-leadership': {
      name: 'Chariot Leadership Community',
      icon: '👑',
      tagline: 'Sharpen your leadership with other leaders',
      description: 'Join 823 Christian leaders growing in influence, character, and Kingdom impact.',
      link: '/community/chariot-leadership',
      color: 'green'
    }
  }

  const selected = communities[community]

  return (
    <div className={`my-8 p-6 rounded-lg border-2 ${
      selected.color === 'blue' ? 'bg-blue-50 border-blue-300' :
      selected.color === 'purple' ? 'bg-purple-50 border-purple-300' :
      'bg-green-50 border-green-300'
    }`}>
      <div className="flex items-start gap-4">
        <div className="text-4xl">{selected.icon}</div>
        <div className="flex-1">
          <h3 className="font-bold text-xl mb-2">{selected.tagline}</h3>
          {context && (
            <p className="text-gray-700 mb-3 text-sm">
              {context}
            </p>
          )}
          <p className="text-gray-700 mb-4">{selected.description}</p>
          <Link 
            href={selected.link}
            className={`inline-block px-6 py-3 rounded-lg font-semibold text-white ${
              selected.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
              selected.color === 'purple' ? 'bg-purple-600 hover:bg-purple-700' :
              'bg-green-700 hover:bg-green-800'
            } transition`}
          >
            Join {selected.name} - Free
          </Link>
        </div>
      </div>
    </div>
  )
}
