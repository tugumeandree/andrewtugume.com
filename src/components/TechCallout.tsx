'use client';

import Link from 'next/link';

interface TechCalloutProps {
  context?: string;
  track?: 'scholar' | 'worker' | 'leader';
  className?: string;
}

const trackInfo = {
  scholar: {
    title: 'Ready to Use Technology for Kingdom Impact?',
    description: 'Join the Digital Scholar Track and learn to use modern tools for study, discipleship, and gospel impact.',
    link: '/schools/tabernacle-tech#scholar-track',
    cta: 'Explore Digital Scholar Track'
  },
  worker: {
    title: 'Want to Level Up Your Digital Skills?',
    description: 'Join the Digital Worker Track and master the tech stack that transforms your work and business.',
    link: '/schools/tabernacle-tech#worker-track',
    cta: 'Explore Digital Worker Track'
  },
  leader: {
    title: 'Lead Effectively in the Digital Age?',
    description: 'Join the Digital Leader Track and learn to lead teams, make data-driven decisions, and scale your impact.',
    link: '/schools/tabernacle-tech#leader-track',
    cta: 'Explore Digital Leader Track'
  }
};

export default function TechCallout({ context, track = 'worker', className = '' }: TechCalloutProps) {
  const info = trackInfo[track];

  return (
    <div className={`my-12 bg-gradient-to-br from-indigo-50 to-blue-50 border-l-4 border-indigo-600 p-8 rounded-lg ${className}`}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {info.title}
          </h3>
          <p className="text-gray-700 mb-4">
            {context || info.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href={info.link}
              className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
            >
              {info.cta}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              href="/tech-resources"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              Browse Free Tech Resources
            </Link>
          </div>
        </div>
      </div>
      
      {/* Quick Tech Links */}
      <div className="mt-6 pt-6 border-t border-indigo-200">
        <p className="text-sm text-gray-600 mb-3">Quick Resources:</p>
        <div className="flex flex-wrap gap-2">
          <Link href="/tech-resources#tools" className="text-sm px-3 py-1 bg-white text-indigo-700 rounded-full border border-indigo-200 hover:bg-indigo-50 transition-colors">
            Tool Reviews
          </Link>
          <Link href="/tech-resources#templates" className="text-sm px-3 py-1 bg-white text-indigo-700 rounded-full border border-indigo-200 hover:bg-indigo-50 transition-colors">
            Free Templates
          </Link>
          <Link href="/tech-resources#guides" className="text-sm px-3 py-1 bg-white text-indigo-700 rounded-full border border-indigo-200 hover:bg-indigo-50 transition-colors">
            How-To Guides
          </Link>
          <Link href="/tech-resources#glossary" className="text-sm px-3 py-1 bg-white text-indigo-700 rounded-full border border-indigo-200 hover:bg-indigo-50 transition-colors">
            Tech Glossary
          </Link>
        </div>
      </div>
    </div>
  );
}
