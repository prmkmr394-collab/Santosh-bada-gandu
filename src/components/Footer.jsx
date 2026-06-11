import React from 'react'
import { Cpu, Mail, Phone, MapPin, Linkedin, Twitter, ArrowRight } from 'lucide-react'

export default function Footer({ setCurrentPage }) {
  const currentYear = new Date().getFullYear()

  const handleLinkClick = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for subscribing to the CircuitSphere Solutions newsletter!')
    e.target.reset()
  }

  return (
    <footer className="bg-navy-dark text-slate-400 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleLinkClick('home')}>
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-navy border border-electric/30 overflow-hidden">
                <svg viewBox="0 0 100 100" className="w-6 h-6 text-white fill-none">
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
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                CircuitSphere <span className="text-electric">Solutions</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              CircuitSphere Solutions is a premier Managed Service Provider (MSP) and contingent workforce consulting firm powering enterprises with elite tech, operational, and consulting talent.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-electric transition-colors p-2 bg-white/5 rounded-full" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-electric transition-colors p-2 bg-white/5 rounded-full" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-white transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="hover:text-white transition-colors">Our Services</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-white transition-colors">About Us</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('careers')} className="hover:text-white transition-colors">Join Talent Pool</button>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Our Solutions</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <button onClick={() => handleLinkClick('services')} className="hover:text-white transition-colors">Managed Workforce (MSP)</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="hover:text-white transition-colors">Contract & Contingent Staffing</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="hover:text-white transition-colors">Permanent Recruitment</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="hover:text-white transition-colors">Recruitment Process Outsourcing (RPO)</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="hover:text-white transition-colors">Employer of Record & Payroll</button>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Stay Connected</h3>
            <p className="text-sm">Subscribe to receive our quarterly workforce insights and updates.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Email Address"
                required
                className="px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric placeholder-slate-500 w-full"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-electric hover:bg-electric-dark text-white rounded-lg transition-colors flex items-center justify-center"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <div className="space-y-3 pt-2 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-electric shrink-0 mt-1" />
                <span>39/c, 3rd cross, 3rd Block, Vishwapriya Layout, Begur road, Bangalore 560068</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-electric shrink-0" />
                <span>+91 9880724290</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-electric shrink-0" />
                <span>contact@circuitsphere.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs space-y-4 sm:space-y-0">
          <p>&copy; {currentYear} CircuitSphere Solutions. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
