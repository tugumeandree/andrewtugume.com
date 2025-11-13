'use client';

import Link from 'next/link';

interface AndrewsDeskProps {
  date?: string;
  title: string;
  message: string;
  cta?: {
    text: string;
    href: string;
  };
  className?: string;
}

export default function AndrewsDesk({ 
  date = 'November 2025', 
  title, 
  message, 
  cta,
  className = '' 
}: AndrewsDeskProps) {
  return (
    <div className={`bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-primary/20 rounded-xl p-6 md:p-8 ${className}`}>
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
        {/* Andrew's Photo */}
        <div className="flex-shrink-0 mx-auto sm:mx-0">
          <img 
            src="https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg" 
            alt="Andrew Tugume" 
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
        
        {/* Content */}
        <div className="flex-1 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">From Andrew's Desk</h3>
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full w-fit">
              {date}
            </span>
          </div>
          
          <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
            {title}
          </h4>
          
          <div className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            {message}
          </div>
          
          {cta && (
            <Link 
              href={cta.href}
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors w-full sm:w-auto"
            >
              {cta.text}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          )}
          
          {/* Signature */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm font-semibold text-gray-900">Andrew Tugume</p>
            <p className="text-xs sm:text-sm text-gray-600">Teacher • Technologist • Investor</p>
          </div>
        </div>
      </div>
    </div>
  );
}
