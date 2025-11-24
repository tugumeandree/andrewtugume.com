'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

export default function Header() {
  const [myWorkOpen, setMyWorkOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [mastersOpen, setMastersOpen] = useState(false)
  const [connectOpen, setConnectOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileMyWorkOpen, setMobileMyWorkOpen] = useState(false)
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false)
  const [mobileMastersOpen, setMobileMastersOpen] = useState(false)
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
    setMobileMastersOpen(false)
    setMobileConnectOpen(false)
  }

  const closeAllDropdowns = () => {
    setMyWorkOpen(false)
    setResourcesOpen(false)
    setMastersOpen(false)
    setConnectOpen(false)
  }

  const toggleMyWork = () => {
    setMyWorkOpen(!myWorkOpen)
    setResourcesOpen(false)
    setMastersOpen(false)
    setConnectOpen(false)
  }

  const toggleResources = () => {
    setMyWorkOpen(false)
    setResourcesOpen(!resourcesOpen)
    setMastersOpen(false)
    setConnectOpen(false)
  }

  const toggleMasters = () => {
    setMyWorkOpen(false)
    setResourcesOpen(false)
    setMastersOpen(!mastersOpen)
    setConnectOpen(false)
  }

  const toggleConnect = () => {
    setMyWorkOpen(false)
    setResourcesOpen(false)
    setMastersOpen(false)
    setConnectOpen(!connectOpen)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 border-b border-gray-200">
        <div className="container py-2">
          <div className="flex items-center justify-between text-xs md:text-sm">
            <div className="flex items-center gap-4 md:gap-6">
              <Link href="mailto:andrewtugume2@gmail.com" className="flex items-center gap-1.5 text-gray-600 hover:text-primary transition-colors group">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="hidden sm:inline">andrewtugume2@gmail.com</span>
              </Link>
              <Link href="tel:+256755017384" className="flex items-center gap-1.5 text-gray-600 hover:text-primary transition-colors group">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="hidden md:inline">+256 755 017 384</span>
                <span className="md:hidden">Call</span>
              </Link>
            </div>
            <Link 
              href="https://wa.me/256755017384" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-green-600 text-white px-3 py-1 rounded-full hover:bg-green-700 transition-colors text-xs md:text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>WhatsApp</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
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
        <nav className="hidden md:flex items-center gap-2 lg:gap-4 flex-wrap">
          <Link href="/about" className="text-sm font-semibold hover:text-primary transition-colors whitespace-nowrap">About</Link>
          
          {/* My Work Dropdown - The Three Vehicles */}
          <div className="relative">
            <button 
              onClick={toggleMyWork}
              className="text-sm font-bold text-primary flex items-center gap-1"
            >
              Weekly Meetups
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {myWorkOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg border-2 border-primary/20 z-50">
                <div className="p-3 bg-gradient-to-r from-primary to-blue-800 text-white rounded-t-lg">
                  <p className="text-xs font-semibold">Come Join Me Every Week</p>
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
                      <div className="text-xs text-gray-600 mt-1">WorkMasters Meetup Every Tuesday</div>
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
                      <div className="text-xs text-gray-600 mt-1">Bible Study Every Friday</div>
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
                      <div className="text-xs text-gray-600 mt-1">Leadership Exchange Every Sunday</div>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Masters Programs Dropdown */}
          <div className="relative">
            <button 
              onClick={toggleMasters}
              className="text-sm font-bold text-accent flex items-center gap-1"
            >
              Masters Programs
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mastersOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg border-2 border-accent/20 z-50">
                <div className="p-3 bg-gradient-to-r from-accent to-amber-600 text-white rounded-t-lg">
                  <p className="text-xs font-semibold">For Everyone</p>
                </div>
                <Link 
                  href="/masters/coursemasters" 
                  className="block px-4 py-3 hover:bg-amber-50 border-b text-sm"
                  onClick={() => setMastersOpen(false)}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">🎓</span>
                    <div className="font-semibold text-amber-600">CourseMasters</div>
                  </div>
                  <div className="text-xs text-gray-600">Course creation & instructional design</div>
                </Link>
                <Link 
                  href="/masters/techmasters" 
                  className="block px-4 py-3 hover:bg-indigo-50 border-b text-sm"
                  onClick={() => setMastersOpen(false)}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">💻</span>
                    <div className="font-semibold text-indigo-600">TechMasters</div>
                  </div>
                  <div className="text-xs text-gray-600">Technology & software development</div>
                </Link>
                <Link 
                  href="/masters/capitalmasters" 
                  className="block px-4 py-3 hover:bg-green-50 text-sm"
                  onClick={() => setMastersOpen(false)}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">💰</span>
                    <div className="font-semibold text-green-600">CapitalMasters</div>
                  </div>
                  <div className="text-xs text-gray-600">Investment & wealth building</div>
                </Link>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div className="relative">
            <button 
              onClick={toggleResources}
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
          
          {/* Connect Dropdown */}
          <div className="relative">
            <button 
              onClick={toggleConnect}
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

          {/* Book Andrew Button */}
          <Link 
            href="/book" 
            className="text-xs lg:text-sm font-bold px-3 lg:px-4 py-2 rounded-lg transition-all hover:shadow-md whitespace-nowrap uppercase"
            style={{ backgroundColor: '#D9A441', color: 'white' }}
            onClick={closeAllDropdowns}
          >
            BOOK ANDREW
          </Link>

          {/* One-on-One Button */}
          <Link 
            href="/one-on-one" 
            className="text-xs lg:text-sm font-bold bg-blue-600 text-white px-3 lg:px-4 py-2 rounded-lg hover:bg-blue-700 transition-all hover:shadow-md whitespace-nowrap uppercase"
            onClick={closeAllDropdowns}
          >
            ONE ON ONE
          </Link>
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
                  href="/about" 
                  className="block px-4 py-3 text-gray-700 font-semibold hover:bg-gray-100 rounded-lg mb-1"
                  onClick={closeMobileMenu}
                >
                  About
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

                {/* Masters Programs Accordion */}
                <div className="mb-1">
                  <button 
                    onClick={() => setMobileMastersOpen(!mobileMastersOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 font-semibold hover:bg-gray-100 rounded-lg"
                    style={{ color: '#D9A441' }}
                  >
                    Masters Programs
                    <svg 
                      className={`w-5 h-5 transition-transform ${mobileMastersOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileMastersOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      <Link 
                        href="/masters/coursemasters" 
                        className="block px-4 py-2 text-sm hover:bg-amber-50 rounded-lg"
                        onClick={closeMobileMenu}
                      >
                        <div className="font-semibold text-amber-600">🎓 CourseMasters</div>
                        <div className="text-xs text-gray-600">Course creation & instructional design</div>
                      </Link>
                      <Link 
                        href="/masters/techmasters" 
                        className="block px-4 py-2 text-sm hover:bg-indigo-50 rounded-lg"
                        onClick={closeMobileMenu}
                      >
                        <div className="font-semibold text-indigo-600">💻 TechMasters</div>
                        <div className="text-xs text-gray-600">Technology & software development</div>
                      </Link>
                      <Link 
                        href="/masters/capitalmasters" 
                        className="block px-4 py-2 text-sm hover:bg-green-50 rounded-lg"
                        onClick={closeMobileMenu}
                      >
                        <div className="font-semibold text-green-600">💰 CapitalMasters</div>
                        <div className="text-xs text-gray-600">Investment & wealth building</div>
                      </Link>
                    </div>
                  )}
                </div>

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
