import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Industries from './pages/Industries'
import Careers from './pages/Careers'
import Contact from './pages/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  // Scroll to top on page change and update SEO Meta Title/Description
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
    
    // Simple dynamic SEO configuration
    const seoData = {
      home: {
        title: "Circuit Sphere | Enterprise MSP & Workforce Consulting Solutions",
        description: "Powering enterprise businesses with managed service provider (MSP) programs, contingent workforce staffing, permanent recruitment, and strategic IT consulting."
      },
      services: {
        title: "Managed Workforce Services & Consulting | Circuit Sphere",
        description: "Explore Circuit Sphere's tailored solutions: Contract staffing, permanent hiring, recruitment process outsourcing (RPO), payroll, and agile POD squads."
      },
      about: {
        title: "About Us | Our Story, Vision & Values | Circuit Sphere",
        description: "Learn how Circuit Sphere connects elite talent with world-class enterprises. Discover our core values, mission, and workforce consultation journey."
      },
      industries: {
        title: "Industries We Serve | Telecom, Finance, Tech & More | Circuit Sphere",
        description: "Circuit Sphere delivers specialized industry expertise across IT/Software, BFSI, Healthcare, Retail, Manufacturing, and Telecom sectors."
      },
      careers: {
        title: "Join Our Talent Pool | Careers & Job Openings | Circuit Sphere",
        description: "Take the next step in your career. Apply to join Circuit Sphere's elite talent pool and match with leading enterprise organizations."
      },
      contact: {
        title: "Get In Touch | Partner with Circuit Sphere",
        description: "Contact Circuit Sphere today to scale your workforce. Fill out our business inquiry form or reach out to our regional global offices."
      }
    }

    const currentSeo = seoData[currentPage] || seoData.home
    document.title = currentSeo.title
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', currentSeo.description)
    }
  }, [currentPage])

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />
      case 'services':
        return <Services setCurrentPage={setCurrentPage} />
      case 'about':
        return <About setCurrentPage={setCurrentPage} />
      case 'industries':
        return <Industries setCurrentPage={setCurrentPage} />
      case 'careers':
        return <Careers />
      case 'contact':
        return <Contact />
      default:
        return <Home setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-navy">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow pt-16">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App
