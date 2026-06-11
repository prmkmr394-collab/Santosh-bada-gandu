import React, { useState } from 'react'
import { Menu, X, Cpu } from 'lucide-react'

export default function Navbar({ currentPage, setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Home', value: 'home' },
    { label: 'Services', value: 'services' },
    { label: 'About', value: 'about' },
    { label: 'Careers', value: 'careers' }
  ]

  const handleNavClick = (page) => {
    setCurrentPage(page)
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-navy/85 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-navy border border-electric/30 overflow-hidden shadow-inner group-hover:border-electric transition-colors">
              <svg viewBox="0 0 100 100" className="w-8 h-8 text-white fill-none">
                <circle cx="50" cy="50" r="46" fill="#0A1F44" />
                <path d="M 25 35 H 45 L 60 50 H 80" stroke="#2D7FF9" strokeWidth="4" strokeLinecap="round" />
                <path d="M 20 50 H 40 L 55 65 H 75" stroke="#60A5FA" strokeWidth="4" strokeLinecap="round" />
                <path d="M 30 65 H 50 L 65 50" stroke="#2D7FF9" strokeWidth="4" strokeLinecap="round" />
                <circle cx="45" cy="35" r="5" fill="#2D7FF9" />
                <circle cx="60" cy="50" r="5" fill="#60A5FA" />
                <circle cx="80" cy="50" r="5" fill="#2D7FF9" />
                <circle cx="40" cy="50" r="5" fill="#60A5FA" />
                <circle cx="55" cy="65" r="5" fill="#2D7FF9" />
              </svg>
              <div className="absolute inset-0 rounded-full bg-electric/10 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-xl font-bold tracking-tight text-white font-sans">
              CircuitSphere <span className="text-electric">Solutions</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.value}
                id={`nav-link-${link.value}`}
                onClick={() => handleNavClick(link.value)}
                className={`text-sm font-medium transition-colors hover:text-electric relative py-2 ${
                  currentPage === link.value ? 'text-white' : 'text-slate-300'
                }`}
              >
                {link.label}
                {currentPage === link.value && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-electric rounded-full transition-transform"></span>
                )}
              </button>
            ))}
            
            <button
              id="nav-cta-contact"
              onClick={() => handleNavClick('contact')}
              className="px-5 py-2.5 bg-electric hover:bg-electric-dark text-white text-sm font-semibold rounded-lg shadow-lg shadow-electric/25 hover:shadow-electric/35 transition-all hover:-translate-y-0.5"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2 rounded-lg hover:bg-white/5 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-navy/95 border-b border-white/5 backdrop-blur-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.value}
              id={`mobile-nav-link-${link.value}`}
              onClick={() => handleNavClick(link.value)}
              className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                currentPage === link.value 
                  ? 'bg-electric/15 text-white border-l-4 border-electric' 
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            id="mobile-nav-cta-contact"
            onClick={() => handleNavClick('contact')}
            className="block w-full text-center mt-4 px-4 py-3 bg-electric hover:bg-electric-dark text-white font-semibold rounded-lg shadow-md transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  )
}
