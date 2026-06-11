import React, { useState, useEffect } from 'react'
import { MapPin, Phone, Mail, Clock, Eye, CheckCircle2, User, Building, ArrowRight, MessageSquare } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceNeeded: 'msp',
    details: ''
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [inquiries, setInquiries] = useState([])
  const [showConsole, setShowConsole] = useState(false)

  // Load inquiries from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('cs_inquiries')
    if (saved) {
      try {
        setInquiries(JSON.parse(saved))
      } catch (e) {
        console.error(e)
      }
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Contact name is required'
    if (!formData.company.trim()) newErrors.company = 'Company name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Work email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\+?[\d\s-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number format'
    }
    if (!formData.details.trim()) newErrors.details = 'Please tell us about your requirement'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setSubmitting(true)

    // Simulate API request delay
    setTimeout(() => {
      const newInquiry = {
        id: Date.now(),
        ...formData,
        submittedAt: new Date().toLocaleString()
      }
      
      const updatedList = [newInquiry, ...inquiries]
      setInquiries(updatedList)
      localStorage.setItem('cs_inquiries', JSON.stringify(updatedList))

      setSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      serviceNeeded: 'msp',
      details: ''
    })
    setIsSubmitted(false)
  }

  const clearInquiries = () => {
    if (confirm('Are you sure you want to clear the local inquiry logs?')) {
      localStorage.removeItem('cs_inquiries')
      setInquiries([])
    }
  }

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none circuit-bg"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Partner With Us</h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Discuss your contingent staffing volume, request rate cards, or structure a custom MSP program.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-navy">Corporate Headquarters</h2>
                <div className="h-1.5 w-12 bg-electric my-3 rounded-full"></div>
                <p className="text-slate-600 text-sm">
                  Reach out to our business team. We serve clients with top-tier staffing, consulting, and recruitment operations.
                </p>
              </div>

              {/* Channels Info */}
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/60">
                  <MapPin className="w-5 h-5 text-electric shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-navy text-sm">Office Address</h3>
                    <p className="text-slate-600 mt-1 text-xs">39/c, 3rd cross, 3rd Block, Vishwapriya Layout, Begur road, Bangalore 560068</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/60">
                  <Phone className="w-5 h-5 text-electric shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-navy text-sm">Phone Line</h3>
                    <p className="text-slate-600 mt-1 text-xs">+91 9880724290</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/60">
                  <Mail className="w-5 h-5 text-electric shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-navy text-sm">Direct Email</h3>
                    <p className="text-slate-600 mt-1 text-xs select-all">contact@circuitsphere.in</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/60">
                  <Clock className="w-5 h-5 text-electric shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-navy text-sm">Support Hours</h3>
                    <p className="text-slate-600 mt-1 text-xs">9:00 AM - 6:00 PM IST (Operations 24/7/365)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry form */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200/60 rounded-3xl p-8 sm:p-10 shadow-xl shadow-navy/5">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-navy">Business Inquiry Form</h2>
                    <p className="text-slate-500 text-xs mt-1">Please provide details regarding your workforce/MSP requirements.</p>
                  </div>

                  <div className="space-y-4">
                    {/* Contact Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">Your Name</label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 pointer-events-none">
                          <User className="w-4 h-4" />
                        </span>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Johnathan Doe"
                          className={`w-full pl-10 pr-4 py-3 bg-white border rounded-xl text-sm focus:outline-none focus:ring-1 ${
                            errors.name ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-electric focus:ring-electric'
                          }`}
                        />
                      </div>
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Company Name */}
                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">Company / Organization</label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 pointer-events-none">
                          <Building className="w-4 h-4" />
                        </span>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Enterprise Labs Inc."
                          className={`w-full pl-10 pr-4 py-3 bg-white border rounded-xl text-sm focus:outline-none focus:ring-1 ${
                            errors.company ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-electric focus:ring-electric'
                          }`}
                        />
                      </div>
                      {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">Work Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="j.doe@enterpriselabs.com"
                          className={`w-full px-4 py-3 bg-white border rounded-xl text-sm focus:outline-none focus:ring-1 ${
                            errors.email ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-electric focus:ring-electric'
                          }`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 0122"
                          className={`w-full px-4 py-3 bg-white border rounded-xl text-sm focus:outline-none focus:ring-1 ${
                            errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-electric focus:ring-electric'
                          }`}
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Service Needed */}
                    <div>
                      <label htmlFor="serviceNeeded" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">Workforce Need Segment</label>
                      <select
                        id="serviceNeeded"
                        name="serviceNeeded"
                        value={formData.serviceNeeded}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric"
                      >
                        <option value="msp">Managed Workforce (MSP) Program</option>
                        <option value="contracting">Contract & Contingent Staffing</option>
                        <option value="payroll">EOR Compliance & Payroll Services</option>
                        <option value="rpo">Full Recruiting Process Outsourcing (RPO)</option>
                        <option value="consulting">IT Advisory & Scrum POD Teams</option>
                        <option value="executive">Direct Permanent Placement</option>
                      </select>
                    </div>

                    {/* Requirement Details */}
                    <div>
                      <label htmlFor="details" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">Tell us about your requirements</label>
                      <div className="relative">
                        <span className="absolute top-3 left-3 text-slate-400 pointer-events-none">
                          <MessageSquare className="w-4 h-4" />
                        </span>
                        <textarea
                          id="details"
                          name="details"
                          rows="4"
                          value={formData.details}
                          onChange={handleChange}
                          placeholder="Please specify tech stack, volume, expected duration, and standard start timeline..."
                          className={`w-full pl-10 pr-4 py-3 bg-white border rounded-xl text-sm focus:outline-none focus:ring-1 resize-none ${
                            errors.details ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-electric focus:ring-electric'
                          }`}
                        ></textarea>
                      </div>
                      {errors.details && <p className="text-red-500 text-xs mt-1">{errors.details}</p>}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 bg-electric hover:bg-electric-dark text-white font-bold rounded-xl shadow-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    {submitting ? (
                      <span>Submitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-8 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-green-100 border border-green-200 text-green-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-navy">Inquiry Lodged!</h3>
                    <p className="text-slate-600 text-sm max-w-sm mx-auto">
                      Thank you, <span className="font-semibold text-navy">{formData.name}</span>. Your request has been logged. Our account managers will reach out to <span className="font-semibold text-navy">{formData.company}</span> at your provided email: <span className="underline select-all text-slate-700">{formData.email}</span>.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-200 flex justify-center">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-navy text-xs font-bold rounded-lg transition-colors"
                    >
                      Log Another Request
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
