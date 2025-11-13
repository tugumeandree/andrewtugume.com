import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-primary text-white mt-16">
      <div className="container py-8 md:py-12">
        {/* Andrew's Brand Section */}
        <div className="mb-8 md:mb-12 pb-6 md:pb-8 border-b border-white/20">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 text-center md:text-left">
            <img 
              src="https://res.cloudinary.com/dwa3soopc/image/upload/v1763044829/Andrew%20Bio%20Photos/andrew%20tugume.jpg" 
              alt="Andrew Tugume" 
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-white/30"
            />
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Andrew Tugume</h3>
              <p className="text-base md:text-lg text-blue-200 mb-2 md:mb-3">Teacher • Technologist • Investor</p>
              <p className="text-sm md:text-base text-blue-100 max-w-2xl mx-auto md:mx-0">
                Helping believers, workers, and leaders thrive in their God-given callings through biblical teaching, modern technology, and practical business wisdom.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-8">
          {/* Newsletter */}
          <div className="sm:col-span-2">
            <h4 className="font-bold mb-3 md:mb-4 text-base md:text-lg">Stay Connected with Andrew</h4>
            <p className="text-blue-100 text-sm mb-4">
              Get weekly insights from my desk—biblical wisdom, tech tips, and business strategies delivered to 10,000+ subscribers.
            </p>
            <form className="flex flex-col gap-2 mb-4" action="/api/subscribe" method="post">
              <input 
                type="email" 
                name="email" 
                placeholder="Your email address" 
                className="rounded-lg border-2 border-white/20 bg-white/10 text-white placeholder-blue-200 px-4 py-3 text-sm focus:outline-none focus:border-white/40" 
                required 
              />
              <button 
                type="submit" 
                className="bg-white text-primary px-6 py-3 rounded-lg text-sm font-bold hover:bg-blue-100 transition-colors"
              >
                Join the Newsletter
              </button>
            </form>
            <div className="flex gap-4 justify-center sm:justify-start">
              <a href="https://x.com/_drewtugume" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* My Work - Three Vehicles */}
          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">My Work</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><Link href="/workmasters" className="hover:text-white transition-colors">For Workers (WorkMasters)</Link></li>
              <li><Link href="/bible-study" className="hover:text-white transition-colors">For Believers (Bible Study)</Link></li>
              <li><Link href="/leadership" className="hover:text-white transition-colors">For Leaders (Leadership)</Link></li>
              <li className="pt-2 border-t border-white/20">
                <Link href="/tech-resources" className="hover:text-white transition-colors font-semibold text-indigo-300">Tech Resources</Link>
              </li>
            </ul>
          </div>

          {/* Schools */}
          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">My Schools</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><Link href="/schools/qraft-academy" className="hover:text-white transition-colors">Qraft Academy</Link></li>
              <li><Link href="/schools/nations-bible" className="hover:text-white transition-colors">Nations Bible School</Link></li>
              <li><Link href="/schools/chariot-leadership" className="hover:text-white transition-colors">Chariot Leadership</Link></li>
              <li><Link href="/schools/tabernacle-tech" className="hover:text-white transition-colors">Tabernacle Tech</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Connect</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><Link href="/community" className="hover:text-white transition-colors">Communities (4,224)</Link></li>
              <li><Link href="/impact" className="hover:text-white transition-colors">Our Impact</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Andrew</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li className="pt-2 border-t border-white/20">
                <Link href="/partner" className="hover:text-white transition-colors font-semibold text-accent">Become a Partner</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} Andrew Tugume. All rights reserved.
          </div>
          <div className="flex gap-4 md:gap-6 text-xs md:text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-6 pt-6 border-t border-white/20 text-center">
          <p className="text-xs md:text-sm text-blue-100 max-w-3xl mx-auto italic px-4">
            "Equipping believers, workers, and leaders to integrate their faith with their calling—because God doesn't compartmentalize, and neither should we."
          </p>
        </div>
      </div>
    </footer>
  )
}
