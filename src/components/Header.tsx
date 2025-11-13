'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

export default function Header() {
  const [myWorkOpen, setMyWorkOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [connectOpen, setConnectOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileMyWorkOpen, setMobileMyWorkOpen] = useState(false)
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false)
  const [mobileConnectOpen, setMobileConnectOpen] = useState(false)

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setMobileMyWorkOpen(false)
    setMobileResourcesOpen(false)
    setMobileConnectOpen(false)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-2xl font-semibold text-primary" onClick={closeMobileMenu}>
          <img src="https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg" alt="Andrew Tugume Logo" className="h-8 w-8 rounded-full" />
          <div className="flex flex-col">
            <span className="text-base md:text-lg leading-tight">Andrew Tugume</span>
            <span className="text-xs font-normal text-gray-600 hidden sm:block">Teacher • Technologist • Investor</span>
          </div>
        </Link>

        {/* Hamburger Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="space-x-4 hidden md:flex items-center">
          <Link href="/" className="text-sm hover:text-primary transition-colors">Home</Link>
          <Link href="/about" className="text-sm font-semibold hover:text-primary transition-colors">About Andrew</Link>
          
          {/* My Work Dropdown - The Three Vehicles */}
          <div className="relative">
            <button 
              onClick={() => setMyWorkOpen(!myWorkOpen)}
              className="text-sm font-bold text-primary flex items-center gap-1"
            >
              My Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {myWorkOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg border-2 border-primary/20 z-50">
                <div className="p-3 bg-gradient-to-r from-primary to-blue-800 text-white rounded-t-lg">
                  <p className="text-xs font-semibold">Choose Your Vehicle</p>
                </div>
                <Link 
                  href="/workmasters" 
                  className="block px-5 py-4 hover:bg-blue-50 border-b group"
                  onClick={() => setMyWorkOpen(false)}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                      <svg className="w-5 h-5 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-sm text-gray-900">For Workers</div>
                      <div className="text-xs text-gray-600 mt-1">WorkMasters & Qraft Academy</div>
                    </div>
                  </div>
                </Link>
                <Link 
                  href="/bible-study" 
                  className="block px-5 py-4 hover:bg-purple-50 border-b group"
                  onClick={() => setMyWorkOpen(false)}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600 transition-colors">
                      <svg className="w-5 h-5 text-purple-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-sm text-gray-900">For Believers</div>
                      <div className="text-xs text-gray-600 mt-1">Bible Study & Nations Bible School</div>
                    </div>
                  </div>
                </Link>
                <Link 
                  href="/leadership" 
                  className="block px-5 py-4 hover:bg-green-50 group"
                  onClick={() => setMyWorkOpen(false)}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors">
                      <svg className="w-5 h-5 text-green-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-sm text-gray-900">For Leaders</div>
                      <div className="text-xs text-gray-600 mt-1">Leadership Exchange & Chariot Institute</div>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className="text-sm font-semibold flex items-center gap-1"
            >
              Resources
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {resourcesOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border z-50">
                <Link 
                  href="/store/products" 
                  className="block px-4 py-3 hover:bg-gray-50 border-b text-sm"
                  onClick={() => setResourcesOpen(false)}
                >
                  <div className="font-semibold">Products</div>
                  <div className="text-xs text-gray-600">eBooks, courses, templates</div>
                </Link>
                <Link 
                  href="/store/services" 
                  className="block px-4 py-3 hover:bg-gray-50 border-b text-sm"
                  onClick={() => setResourcesOpen(false)}
                >
                  <div className="font-semibold">Services</div>
                  <div className="text-xs text-gray-600">Coaching, consulting, audits</div>
                </Link>
                <Link 
                  href="/store/events" 
                  className="block px-4 py-3 hover:bg-gray-50 border-b text-sm"
                  onClick={() => setResourcesOpen(false)}
                >
                  <div className="font-semibold">Events</div>
                  <div className="text-xs text-gray-600">Workshops, conferences, summits</div>
                </Link>
                <Link 
                  href="/tech-resources" 
                  className="block px-4 py-3 hover:bg-gray-50 text-sm"
                  onClick={() => setResourcesOpen(false)}
                >
                  <div className="font-semibold text-indigo-600">Tech Resources</div>
                  <div className="text-xs text-gray-600">Free tools & guides</div>
                </Link>
              </div>
            )}
          </div>

          <Link href="/impact" className="text-sm hover:text-primary transition-colors">Impact</Link>
          
          {/* Connect Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setConnectOpen(!connectOpen)}
              className="text-sm font-semibold flex items-center gap-1"
            >
              Connect
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {connectOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 bg-white shadow-lg rounded-lg border z-50">
                <Link 
                  href="/community" 
                  className="block px-4 py-3 hover:bg-gray-50 border-b text-sm"
                  onClick={() => setConnectOpen(false)}
                >
                  <div className="font-semibold">Communities</div>
                  <div className="text-xs text-gray-600">Join 4,224 members</div>
                </Link>
                <Link 
                  href="/contact" 
                  className="block px-4 py-3 hover:bg-gray-50 border-b text-sm"
                  onClick={() => setConnectOpen(false)}
                >
                  <div className="font-semibold">Contact</div>
                  <div className="text-xs text-gray-600">Get in touch with Andrew</div>
                </Link>
                <Link 
                  href="/partner" 
                  className="block px-4 py-3 hover:bg-gray-50 text-sm"
                  onClick={() => setConnectOpen(false)}
                >
                  <div className="font-semibold text-primary">Partner with Us</div>
                  <div className="text-xs text-gray-600">Support this mission</div>
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Side Navigation */}
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={closeMobileMenu}
            />
            
            {/* Side Menu */}
            <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 md:hidden overflow-y-auto">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-blue-800 text-white p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg" 
                      alt="Andrew Tugume" 
                      className="h-12 w-12 rounded-full border-2 border-white"
                    />
                    <div>
                      <div className="font-bold">Andrew Tugume</div>
                      <div className="text-xs text-blue-100">Teacher • Technologist • Investor</div>
                    </div>
                  </div>
                  <button 
                    onClick={closeMobileMenu}
                    className="p-1 hover:bg-white/20 rounded"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="p-4">
                <Link 
                  href="/" 
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg mb-1"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
                
                <Link 
                  href="/about" 
                  className="block px-4 py-3 text-gray-700 font-semibold hover:bg-gray-100 rounded-lg mb-1"
                  onClick={closeMobileMenu}
                >
                  About Andrew
                </Link>

                {/* My Work Accordion */}
                <div className="mb-1">
                  <button 
                    onClick={() => setMobileMyWorkOpen(!mobileMyWorkOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-primary font-bold hover:bg-blue-50 rounded-lg"
                  >
                    My Work
                    <svg 
                      className={`w-5 h-5 transition-transform ${mobileMyWorkOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileMyWorkOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      <Link 
                        href="/workmasters" 
                        className="block px-4 py-3 text-sm hover:bg-blue-50 rounded-lg"
                        onClick={closeMobileMenu}
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">For Workers</div>
                            <div className="text-xs text-gray-600">WorkMasters & Qraft</div>
                          </div>
                        </div>
                      </Link>
                      <Link 
                        href="/bible-study" 
                        className="block px-4 py-3 text-sm hover:bg-purple-50 rounded-lg"
                        onClick={closeMobileMenu}
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">For Believers</div>
                            <div className="text-xs text-gray-600">Bible Study & Nations</div>
                          </div>
                        </div>
                      </Link>
                      <Link 
                        href="/leadership" 
                        className="block px-4 py-3 text-sm hover:bg-green-50 rounded-lg"
                        onClick={closeMobileMenu}
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">For Leaders</div>
                            <div className="text-xs text-gray-600">Leadership & Chariot</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>

                {/* Resources Accordion */}
                <div className="mb-1">
                  <button 
                    onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-700 font-semibold hover:bg-gray-100 rounded-lg"
                  >
                    Resources
                    <svg 
                      className={`w-5 h-5 transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileResourcesOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      <Link 
                        href="/store/products" 
                        className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg"
                        onClick={closeMobileMenu}
                      >
                        <div className="font-semibold">Products</div>
                        <div className="text-xs text-gray-600">eBooks, courses, templates</div>
                      </Link>
                      <Link 
                        href="/store/services" 
                        className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg"
                        onClick={closeMobileMenu}
                      >
                        <div className="font-semibold">Services</div>
                        <div className="text-xs text-gray-600">Coaching, consulting, audits</div>
                      </Link>
                      <Link 
                        href="/store/events" 
                        className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg"
                        onClick={closeMobileMenu}
                      >
                        <div className="font-semibold">Events</div>
                        <div className="text-xs text-gray-600">Workshops, conferences, summits</div>
                      </Link>
                      <Link 
                        href="/tech-resources" 
                        className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg"
                        onClick={closeMobileMenu}
                      >
                        <div className="font-semibold text-indigo-600">Tech Resources</div>
                        <div className="text-xs text-gray-600">Free tools & guides</div>
                      </Link>
                    </div>
                  )}
                </div>

                <Link 
                  href="/impact" 
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg mb-1"
                  onClick={closeMobileMenu}
                >
                  Impact
                </Link>

                {/* Connect Accordion */}
                <div className="mb-1">
                  <button 
                    onClick={() => setMobileConnectOpen(!mobileConnectOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-700 font-semibold hover:bg-gray-100 rounded-lg"
                  >
                    Connect
                    <svg 
                      className={`w-5 h-5 transition-transform ${mobileConnectOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileConnectOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      <Link 
                        href="/community" 
                        className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg"
                        onClick={closeMobileMenu}
                      >
                        <div className="font-semibold">Communities</div>
                        <div className="text-xs text-gray-600">Join 4,224 members</div>
                      </Link>
                      <Link 
                        href="/contact" 
                        className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg"
                        onClick={closeMobileMenu}
                      >
                        <div className="font-semibold">Contact</div>
                        <div className="text-xs text-gray-600">Get in touch with Andrew</div>
                      </Link>
                      <Link 
                        href="/partner" 
                        className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg"
                        onClick={closeMobileMenu}
                      >
                        <div className="font-semibold text-primary">Partner with Us</div>
                        <div className="text-xs text-gray-600">Support this mission</div>
                      </Link>
                    </div>
                  )}
                </div>
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  )
}
