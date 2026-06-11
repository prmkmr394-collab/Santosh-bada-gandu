import React, { useState, useEffect } from 'react'
import { 
  Users, Briefcase, FileCheck, Landmark, Zap, Shield, 
  ArrowRight, Landmark as Banknote, Activity, Laptop, 
  ShoppingBag, Factory, Radio, Star, ChevronLeft, ChevronRight, Quote
} from 'lucide-react'

export default function Home({ setCurrentPage }) {
  // Testimonials Slider State
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      quote: "Circuit Sphere transformed our contingent staffing program. Their MSP solution brought transparency, slashed time-to-fill by 40%, and significantly raised candidate quality.",
      author: "Sarah Jenkins",
      role: "VP of Talent Acquisition",
      company: "Apex Tech Group",
      rating: 5
    },
    {
      quote: "Managing compliance and payroll for over 200 contract developers was a logistical nightmare until we outsourced to Circuit Sphere. Their payroll & compliance team is exceptional.",
      author: "Marcus Vance",
      role: "Director of HR & Operations",
      company: "Nova Financial",
      rating: 5
    },
    {
      quote: "The POD model proposed by Circuit Sphere allowed us to deploy a fully functional agile development squad in less than two weeks. Exceptional technical expertise and support.",
      author: "Elena Rostova",
      role: "Chief Technology Officer",
      company: "Vanguard Health Systems",
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-play Testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative circuit-pattern text-white pt-20 pb-32 overflow-hidden">
        {/* Animated Circuit Line Background Motifs (SVGs) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 100 H 200 L 250 150 V 300 L 300 350 H 600" fill="none" stroke="#2D7FF9" strokeWidth="2" />
            <path d="M 1000 100 H 800 L 750 150 V 250 L 700 300 H 400" fill="none" stroke="#60A5FA" strokeWidth="2" />
            <path d="M 100 500 H 300 L 350 450 V 200 L 400 150 H 500" fill="none" stroke="#2D7FF9" strokeWidth="2" />
            <circle cx="250" cy="150" r="4" fill="#2D7FF9" />
            <circle cx="750" cy="150" r="4" fill="#60A5FA" />
            <circle cx="350" cy="450" r="4" fill="#2D7FF9" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Info */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-electric/10 border border-electric/30 text-electric text-xs font-semibold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5" />
                <span>Next-Gen Workforce Solutions</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Powering Businesses with the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-electric-light">Right Workforce</span>
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0">
                Circuit Sphere is an industry-leading Managed Service Provider (MSP) and strategic consulting firm. We deploy highly skilled professionals, manage contingent talent pools, and streamline recruiting operations to propel your enterprise forward.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  id="hero-cta-hire"
                  onClick={() => setCurrentPage('contact')}
                  className="w-full sm:w-auto px-8 py-4 bg-electric hover:bg-electric-dark text-white font-bold rounded-lg shadow-lg shadow-electric/25 hover:shadow-electric/35 transition-all hover:-translate-y-0.5 text-center flex items-center justify-center space-x-2"
                >
                  <span>Hire Talent</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  id="hero-cta-services"
                  onClick={() => setCurrentPage('services')}
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg border border-white/20 transition-all text-center"
                >
                  Explore Services
                </button>
              </div>
            </div>

            {/* Hero Right Visual */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="relative mx-auto w-80 h-80 rounded-full border border-electric/20 flex items-center justify-center p-8 bg-gradient-to-tr from-navy to-navy-light shadow-2xl animate-pulse-slow">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-electric/30 animate-[spin_60s_linear_infinite]"></div>
                <div className="absolute w-72 h-72 rounded-full border border-electric/40 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-electric/10 to-transparent blur-md"></div>
                  <div className="relative text-center space-y-3 z-10">
                    <div className="text-4xl font-extrabold text-white">98%</div>
                    <div className="text-xs uppercase tracking-widest text-slate-300 font-semibold">SLA Fulfillment</div>
                    <div className="text-[10px] text-electric bg-electric/10 px-2.5 py-1 rounded-full border border-electric/20 inline-block font-bold">TOP RATED MSP</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-slate-100 py-10 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">
            Trusted by enterprises across IT, Healthcare, Finance & Manufacturing
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center opacity-65 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="text-xl font-bold tracking-tight text-slate-600 font-sans flex items-center space-x-1">
              <Laptop className="w-5 h-5 text-electric" /><span>NEXUS TECH</span>
            </div>
            <div className="text-xl font-bold tracking-tight text-slate-600 font-sans flex items-center space-x-1">
              <Banknote className="w-5 h-5 text-electric" /><span>VANGUARD SEC</span>
            </div>
            <div className="text-xl font-bold tracking-tight text-slate-600 font-sans flex items-center space-x-1">
              <Activity className="w-5 h-5 text-electric" /><span>APEX HEALTH</span>
            </div>
            <div className="text-xl font-bold tracking-tight text-slate-600 font-sans flex items-center space-x-1">
              <Factory className="w-5 h-5 text-electric" /><span>ORION IND</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Our Managed Service & Staffing Solutions
            </h2>
            <div className="h-1.5 w-20 bg-electric mx-auto my-4 rounded-full"></div>
            <p className="text-base text-slate-600">
              Circuit Sphere supplies the resources and governance required to build high-performing teams, lower operational risk, and reduce administrative burdens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/60 hover:border-electric/30 hover:bg-white hover:shadow-xl hover:shadow-navy/5 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-electric/10 text-electric flex items-center justify-center mb-6 group-hover:bg-electric group-hover:text-white transition-colors duration-300">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Managed Workforce Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                End-to-end program management for your contingent worker ecosystem, integrating compliance, payroll, and agency management.
              </p>
              <button onClick={() => setCurrentPage('services')} className="text-electric hover:text-electric-dark text-sm font-semibold flex items-center space-x-1.5 group-hover:translate-x-1 transition-transform">
                <span>Learn more</span> <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Service 2 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/60 hover:border-electric/30 hover:bg-white hover:shadow-xl hover:shadow-navy/5 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-electric/10 text-electric flex items-center justify-center mb-6 group-hover:bg-electric group-hover:text-white transition-colors duration-300">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Contract & Contingent Staffing</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                On-demand access to specialized professionals for short-term projects, seasonal spikes, or specific technical deliverables.
              </p>
              <button onClick={() => setCurrentPage('services')} className="text-electric hover:text-electric-dark text-sm font-semibold flex items-center space-x-1.5 group-hover:translate-x-1 transition-transform">
                <span>Learn more</span> <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Service 3 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/60 hover:border-electric/30 hover:bg-white hover:shadow-xl hover:shadow-navy/5 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-electric/10 text-electric flex items-center justify-center mb-6 group-hover:bg-electric group-hover:text-white transition-colors duration-300">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Employer of Record & Payroll</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Complete compliance governance, onboarding, payroll processing, tax filing, and benefits administration for your workforce.
              </p>
              <button onClick={() => setCurrentPage('services')} className="text-electric hover:text-electric-dark text-sm font-semibold flex items-center space-x-1.5 group-hover:translate-x-1 transition-transform">
                <span>Learn more</span> <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Service 4 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/60 hover:border-electric/30 hover:bg-white hover:shadow-xl hover:shadow-navy/5 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-electric/10 text-electric flex items-center justify-center mb-6 group-hover:bg-electric group-hover:text-white transition-colors duration-300">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Recruitment Process Outsourcing</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Outsource your recruiting function partly or fully. We manage candidate sourcing, screening, vetting, and interviewing.
              </p>
              <button onClick={() => setCurrentPage('services')} className="text-electric hover:text-electric-dark text-sm font-semibold flex items-center space-x-1.5 group-hover:translate-x-1 transition-transform">
                <span>Learn more</span> <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Service 5 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/60 hover:border-electric/30 hover:bg-white hover:shadow-xl hover:shadow-navy/5 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-electric/10 text-electric flex items-center justify-center mb-6 group-hover:bg-electric group-hover:text-white transition-colors duration-300">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Permanent & Executive Search</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Locate and secure high-impact leaders and full-time contributors to form the core of your operational roadmap.
              </p>
              <button onClick={() => setCurrentPage('services')} className="text-electric hover:text-electric-dark text-sm font-semibold flex items-center space-x-1.5 group-hover:translate-x-1 transition-transform">
                <span>Learn more</span> <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Service 6 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/60 hover:border-electric/30 hover:bg-white hover:shadow-xl hover:shadow-navy/5 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-electric/10 text-electric flex items-center justify-center mb-6 group-hover:bg-electric group-hover:text-white transition-colors duration-300">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">IT Consulting & Tech Pods</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Leverage strategic consulting or deploy pre-vetted agile teams (PODs) to deliver critical hardware or software milestones.
              </p>
              <button onClick={() => setCurrentPage('services')} className="text-electric hover:text-electric-dark text-sm font-semibold flex items-center space-x-1.5 group-hover:translate-x-1 transition-transform">
                <span>Learn more</span> <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Circuit Sphere - Metrics Counters */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy-dark"></div>
        <div className="absolute w-96 h-96 -top-48 -right-48 rounded-full bg-electric/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Empowering Enterprises, Scaling Success
              </h2>
              <div className="h-1.5 w-16 bg-electric rounded-full"></div>
              <p className="text-slate-300">
                Circuit Sphere stands at the intersection of business strategy and talent density. We help organisations manage dynamic demand patterns and mitigate compliance pitfalls with speed and flexibility.
              </p>
              <button onClick={() => setCurrentPage('about')} className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/40 font-semibold rounded-lg transition-all flex items-center space-x-2">
                <span>Our Core Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                <div className="text-4xl sm:text-5xl font-extrabold text-electric mb-2">500+</div>
                <div className="text-sm uppercase tracking-wider text-slate-300 font-semibold">Professionals Deployed</div>
              </div>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                <div className="text-4xl sm:text-5xl font-extrabold text-electric mb-2">50+</div>
                <div className="text-sm uppercase tracking-wider text-slate-300 font-semibold">Enterprise Clients</div>
              </div>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                <div className="text-4xl sm:text-5xl font-extrabold text-electric mb-2">95%</div>
                <div className="text-sm uppercase tracking-wider text-slate-300 font-semibold">Client Retention Rate</div>
              </div>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                <div className="text-4xl sm:text-5xl font-extrabold text-electric mb-2">24/7</div>
                <div className="text-sm uppercase tracking-wider text-slate-300 font-semibold">Operational Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - 3-Step Process */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Our Process Pipeline
            </h2>
            <div className="h-1.5 w-20 bg-electric mx-auto my-4 rounded-full"></div>
            <p className="text-base text-slate-600">
              Deploying expert professionals shouldn't be complex. Circuit Sphere has fine-tuned a repeatable methodology designed to go from initial gap definition to fully compliant worker onboarding rapidly.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-slate-200 -translate-y-12 z-0"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
              {/* Step 1 */}
              <div className="text-center space-y-6">
                <div className="relative mx-auto w-24 h-24 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-lg group hover:border-electric transition-colors duration-300">
                  <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-electric text-white font-bold text-sm flex items-center justify-center shadow">1</span>
                  <Laptop className="w-10 h-10 text-navy" />
                </div>
                <h3 className="text-xl font-bold text-navy">1. Share Requirements</h3>
                <p className="text-slate-600 text-sm max-w-xs mx-auto leading-relaxed">
                  Detail your workforce needs, tech skill stacks, volume thresholds, compliance guidelines, and project timelines.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center space-y-6">
                <div className="relative mx-auto w-24 h-24 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-lg group hover:border-electric transition-colors duration-300">
                  <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-electric text-white font-bold text-sm flex items-center justify-center shadow">2</span>
                  <Users className="w-10 h-10 text-navy" />
                </div>
                <h3 className="text-xl font-bold text-navy">2. We Source & Vet</h3>
                <p className="text-slate-600 text-sm max-w-xs mx-auto leading-relaxed">
                  Our recruiting engine screens, interviews, technical-vets, and checks compliance for candidates from our pre-validated networks.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center space-y-6">
                <div className="relative mx-auto w-24 h-24 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-lg group hover:border-electric transition-colors duration-300">
                  <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-electric text-white font-bold text-sm flex items-center justify-center shadow">3</span>
                  <Briefcase className="w-10 h-10 text-navy" />
                </div>
                <h3 className="text-xl font-bold text-navy">3. Deploy & Manage</h3>
                <p className="text-slate-600 text-sm max-w-xs mx-auto leading-relaxed">
                  We coordinate onboarding, handle EOR/payroll tasks, manage performance SLAs, and govern operational reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Sectors We Empower
            </h2>
            <div className="h-1.5 w-20 bg-electric mx-auto my-4 rounded-full"></div>
            <p className="text-base text-slate-600">
              We leverage vertical-specific recruitment specialists who understand the unique compliance constraints and technological demands of key industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: <Laptop className="w-6 h-6" />, label: 'IT & Software' },
              { icon: <Banknote className="w-6 h-6" />, label: 'BFSI' },
              { icon: <Activity className="w-6 h-6" />, label: 'Healthcare' },
              { icon: <ShoppingBag className="w-6 h-6" />, label: 'Retail & E-Com' },
              { icon: <Factory className="w-6 h-6" />, label: 'Manufacturing' },
              { icon: <Radio className="w-6 h-6" />, label: 'Telecom' }
            ].map((ind, index) => (
              <div 
                key={index}
                onClick={() => setCurrentPage('industries')}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 text-center hover:border-electric hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-xl bg-navy/5 text-navy mx-auto flex items-center justify-center mb-4 group-hover:bg-electric group-hover:text-white transition-colors">
                  {ind.icon}
                </div>
                <div className="font-bold text-sm text-navy">{ind.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none circuit-bg"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white font-sans">Client Voices</h2>
            <div className="h-1 w-12 bg-electric mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-sm min-h-[300px] flex flex-col justify-between">
            <div className="absolute top-8 left-8 text-electric/25 pointer-events-none">
              <Quote className="w-16 h-16 transform -rotate-180" />
            </div>

            <div className="relative space-y-6 z-10">
              <div className="flex space-x-1 justify-center sm:justify-start">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-electric text-electric" />
                ))}
              </div>

              <blockquote className="text-lg sm:text-xl font-medium leading-relaxed text-slate-100">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-6 border-t border-white/10 gap-4">
                <div>
                  <cite className="not-italic font-bold text-white text-base block">
                    {testimonials[activeTestimonial].author}
                  </cite>
                  <span className="text-sm text-slate-400">
                    {testimonials[activeTestimonial].role}, <span className="text-electric">{testimonials[activeTestimonial].company}</span>
                  </span>
                </div>

                <div className="flex space-x-2">
                  <button 
                    onClick={prevTestimonial}
                    className="p-2.5 rounded-lg border border-white/10 hover:border-electric bg-white/5 hover:bg-electric text-white transition-colors focus:outline-none"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="p-2.5 rounded-lg border border-white/10 hover:border-electric bg-white/5 hover:bg-electric text-white transition-colors focus:outline-none"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-electric text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-electric to-electric-dark"></div>
        <div className="absolute inset-0 opacity-15 pointer-events-none circuit-bg"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Need Skilled Workforce Fast? Let's Talk.
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Scale your teams, mitigate recruitment bottlenecks, and implement structural talent consulting. Tell us your staffing requirements.
          </p>
          <div className="flex justify-center">
            <button
              id="cta-banner-contact"
              onClick={() => setCurrentPage('contact')}
              className="px-8 py-4 bg-white text-electric font-bold rounded-lg shadow-lg hover:bg-slate-100 transition-colors"
            >
              Get in Touch Now
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
