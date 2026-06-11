import React, { useState, useEffect } from 'react'
import { Briefcase, MapPin, Clock, Calendar, CheckCircle2, User, Mail, Phone, FileText, ArrowRight, Eye } from 'lucide-react'

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skillArea: 'IT',
    experience: '1-3 years',
    resumeName: '',
    notes: ''
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submissions, setSubmissions] = useState([])
  const [showConsole, setShowConsole] = useState(false)

  // Load submissions from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('cs_careers')
    if (saved) {
      try {
        setSubmissions(JSON.parse(saved))
      } catch (e) {
        console.error(e)
      }
    }
  }, [])

  const hotJobs = [
    {
      title: 'Recruiter',
      type: 'Full-Time',
      location: 'Bangalore (On-Site)',
      salary: '2 Years Exp',
      posted: 'Just now'
    },
    {
      title: 'Senior Recruiter',
      type: 'Full-Time',
      location: 'Bangalore (On-Site)',
      salary: '5+ Years Exp',
      posted: 'Just now'
    }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  // Simulate file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData(prev => ({ ...prev, resumeName: file.name }))
      if (errors.resume) {
        setErrors(prev => ({ ...prev, resume: '' }))
      }
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\+?[\d\s-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number format'
    }
    if (!formData.resumeName) {
      newErrors.resume = 'Please upload your resume'
    }
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

    // Simulate server submission API call
    setTimeout(() => {
      const newSubmission = {
        id: Date.now(),
        ...formData,
        submittedAt: new Date().toLocaleString()
      }
      
      const updatedList = [newSubmission, ...submissions]
      setSubmissions(updatedList)
      localStorage.setItem('cs_careers', JSON.stringify(updatedList))

      setSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      skillArea: 'IT',
      experience: '1-3 years',
      resumeName: '',
      notes: ''
    })
    setIsSubmitted(false)
  }

  const clearSubmissions = () => {
    if (confirm('Are you sure you want to clear the local submission tests?')) {
      localStorage.removeItem('cs_careers')
      setSubmissions([])
    }
  }

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none circuit-bg"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Join Our Talent Pool</h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Submit your resume to align with matching projects, executive placement tracks, and contract opportunities across our enterprise network.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Hot jobs list */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-navy">Featured Openings</h2>
                <div className="h-1.5 w-12 bg-electric my-3 rounded-full"></div>
                <p className="text-slate-600 text-sm">
                  We are actively searching for experts to deploy under our SOW and staffing programs. Apply below to get matches for these positions and more.
                </p>
              </div>

              <div className="space-y-4">
                {hotJobs.map((job, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors">
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-2">
                        <h3 className="font-bold text-navy text-base leading-snug">{job.title}</h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
                          <span className="flex items-center space-x-1">
                            <Briefcase className="w-3.5 h-3.5 text-electric" /> <span>{job.type}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <MapPin className="w-3.5 h-3.5 text-electric" /> <span>{job.location}</span>
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-electric bg-electric/10 px-2.5 py-1 rounded-full border border-electric/15 whitespace-nowrap">
                        {job.salary}
                      </span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-200/60 flex items-center justify-between text-[10px] text-slate-400">
                      <span>Posted {job.posted}</span>
                      <span className="flex items-center space-x-0.5 text-navy font-semibold">
                        <span>Requires talent pool enrollment</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Application form */}
            <div className="lg:col-span-6 bg-slate-50 border border-slate-200/60 rounded-3xl p-8 sm:p-10 shadow-xl shadow-navy/5">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-navy">Candidate Application</h2>
                    <p className="text-slate-500 text-xs mt-1">Fill out the form below to enter our vetting system.</p>
                  </div>

                  <div className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">Full Name</label>
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
                          placeholder="Jane Doe"
                          className={`w-full pl-10 pr-4 py-3 bg-white border rounded-xl text-sm focus:outline-none focus:ring-1 ${
                            errors.name ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-electric focus:ring-electric'
                          }`}
                        />
                      </div>
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">Email Address</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 pointer-events-none">
                            <Mail className="w-4 h-4" />
                          </span>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="jane@example.com"
                            className={`w-full pl-10 pr-4 py-3 bg-white border rounded-xl text-sm focus:outline-none focus:ring-1 ${
                              errors.email ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-electric focus:ring-electric'
                            }`}
                          />
                        </div>
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">Phone Number</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 pointer-events-none">
                            <Phone className="w-4 h-4" />
                          </span>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(555) 0199"
                            className={`w-full pl-10 pr-4 py-3 bg-white border rounded-xl text-sm focus:outline-none focus:ring-1 ${
                              errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-electric focus:ring-electric'
                            }`}
                          />
                        </div>
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Skill Area & Experience */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="skillArea" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">Skill Domain</label>
                        <select
                          id="skillArea"
                          name="skillArea"
                          value={formData.skillArea}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric"
                        >
                          <option value="IT">IT & Software Engineering</option>
                          <option value="BFSI">BFSI (Finance/Banking)</option>
                          <option value="Healthcare">Healthcare & Sciences</option>
                          <option value="Retail">Retail & Supply Chain</option>
                          <option value="Manufacturing">Advanced Manufacturing</option>
                          <option value="Telecom">Telecommunications</option>
                          <option value="Operations">Operations / PMO</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="experience" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">Years of Experience</label>
                        <select
                          id="experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric"
                        >
                          <option value="1-3 years">1-3 Years</option>
                          <option value="3-5 years">3-5 Years</option>
                          <option value="5-8 years">5-8 Years</option>
                          <option value="8+ years">8+ Years (Senior/Lead)</option>
                        </select>
                      </div>
                    </div>

                    {/* Resume Upload */}
                    <div>
                      <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">Resume / CV Upload</label>
                      <div className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-colors ${
                        errors.resume ? 'border-red-400 bg-red-50/20' : 'border-slate-300 hover:border-electric bg-white'
                      }`}>
                        <input
                          type="file"
                          id="resume"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                        />
                        <label htmlFor="resume" className="cursor-pointer space-y-1 block">
                          <FileText className="w-8 h-8 text-slate-400 mx-auto" />
                          <div className="text-xs font-semibold text-navy">
                            {formData.resumeName ? (
                              <span className="text-electric font-bold">{formData.resumeName}</span>
                            ) : (
                              <span>Click to upload PDF, DOC, or DOCX</span>
                            )}
                          </div>
                          <span className="text-[10px] text-slate-400 block">Max file size 5MB</span>
                        </label>
                      </div>
                      {errors.resume && <p className="text-red-500 text-xs mt-1">{errors.resume}</p>}
                    </div>

                    {/* Cover Notes */}
                    <div>
                      <label htmlFor="notes" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">Key Tech Stacks or Brief Intro (Optional)</label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows="3"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Detail certifications, primary coding languages, or target locations..."
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric placeholder-slate-400 resize-none"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 bg-electric hover:bg-electric-dark text-white font-bold rounded-xl shadow-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    {submitting ? (
                      <span>Processing Application...</span>
                    ) : (
                      <>
                        <span>Submit Application</span>
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
                    <h3 className="text-2xl font-bold text-navy">Application Received!</h3>
                    <p className="text-slate-600 text-sm max-w-sm mx-auto">
                      Thank you for joining our talent pool, <span className="font-semibold text-navy">{formData.name}</span>. Our sourcing specialists will review your profile and contact you within 48 hours.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-2 justify-center">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-navy text-xs font-bold rounded-lg transition-colors"
                    >
                      Submit Another Profile
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Developer Submissions Review Console */}
      <section className="bg-slate-100 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-300 pb-4 mb-6 gap-4">
            <div>
              <h2 className="text-lg font-bold text-navy flex items-center space-x-2">
                <Eye className="w-5 h-5 text-electric" />
                <span>Local Submissions Reviewer Console</span>
              </h2>
              <p className="text-slate-500 text-xs">For testing purposes, view submissions stored in the browser's local cache.</p>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={() => setShowConsole(!showConsole)}
                className="px-4 py-2 bg-navy text-white text-xs font-bold rounded-lg shadow-sm hover:bg-navy-light transition-colors"
              >
                {showConsole ? 'Hide Console' : 'Show Console'}
              </button>
              {submissions.length > 0 && showConsole && (
                <button
                  onClick={clearSubmissions}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg transition-colors"
                >
                  Clear Logs
                </button>
              )}
            </div>
          </div>

          {showConsole && (
            <div className="space-y-4">
              {submissions.length === 0 ? (
                <div className="p-8 rounded-2xl bg-white border border-slate-200 text-center text-slate-500 text-sm">
                  No submissions logged yet. Fill out the application form above to test local storage writing.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {submissions.map((sub) => (
                    <div key={sub.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h4 className="font-bold text-navy text-sm">{sub.name}</h4>
                          <span className="text-[10px] text-slate-400">{sub.submittedAt}</span>
                        </div>
                        <span className="text-[10px] font-bold text-electric bg-electric/10 px-2 py-0.5 rounded border border-electric/15">
                          {sub.skillArea} ({sub.experience})
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-xs border-y border-slate-100 py-3">
                        <div>
                          <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Email</span>
                          <span className="text-slate-700 select-all">{sub.email}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Phone</span>
                          <span className="text-slate-700 select-all">{sub.phone}</span>
                        </div>
                      </div>
                      
                      <div className="text-xs">
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Resume File Attached</span>
                        <span className="font-semibold text-navy">{sub.resumeName}</span>
                      </div>

                      {sub.notes && (
                        <div className="p-3 bg-slate-50 border border-slate-200/50 rounded-lg text-xs text-slate-600">
                          <span className="font-bold text-[9px] text-navy uppercase block mb-1">Introduction Notes</span>
                          {sub.notes}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
