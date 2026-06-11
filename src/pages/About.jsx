import React from 'react'
import { Shield, Target, Eye, Users, Cpu, Award, Zap } from 'lucide-react'

export default function About({ setCurrentPage }) {
  const values = [
    {
      icon: <Shield className="w-6 h-6 text-electric" />,
      title: 'Uncompromising Integrity',
      description: 'We adhere to the highest standard of labor laws, local compliance, rate card transparency, and operational governance.'
    },
    {
      icon: <Award className="w-6 h-6 text-electric" />,
      title: 'Operational Excellence',
      description: 'We measure our output by stringent service level agreements (SLAs), low time-to-fill metrics, and high talent retention.'
    },
    {
      icon: <Zap className="w-6 h-6 text-electric" />,
      title: 'Adaptive Agility',
      description: 'Whether it is scaling down or ramping up contract developers in days, we adapt our workflows to fit your project milestones.'
    },
    {
      icon: <Users className="w-6 h-6 text-electric" />,
      title: 'Strategic Partnership',
      description: 'We operate as an extension of your talent acquisition and procurement departments, aligning with your long-term roadmap.'
    }
  ]

  const timeline = [
    {
      year: '2020',
      title: 'Circuit Sphere Founded',
      description: 'Launched in New York City with a core focus on technical contract staffing and developer placements.'
    },
    {
      year: '2022',
      title: 'MSP Program Launch',
      description: 'Expanded capabilities to deliver full Managed Service Provider (MSP) and vendor consolidation programs for mid-market clients.'
    },
    {
      year: '2024',
      title: 'Global Delivery Model & Pods',
      description: 'Introduced pre-vetted tech POD squads and multi-state compliance payroll operations across the US and Canada.'
    },
    {
      year: '2026',
      title: '500+ Active Professionals',
      description: 'Deploying workforce solutions across IT, BFSI, Healthcare, Retail, and Manufacturing, servicing Fortune 500 enterprises.'
    }
  ]

  const leaders = [
    {
      name: 'Jonathan Sterling',
      role: 'Chief Executive Officer & Founder',
      bio: 'Over 18 years of executive leadership in contingent workforce solutions, vendor management, and enterprise staffing programs.',
      initials: 'JS'
    },
    {
      name: 'Dr. Evelyn Martinez',
      role: 'Chief Operations Officer',
      bio: 'Former HR operations director at Apex Healthcare. Evelyn governs our employer of record (EOR) and labor compliance divisions.',
      initials: 'EM'
    },
    {
      name: 'Devon Vance',
      role: 'VP of Enterprise Client Success',
      bio: 'Supervises MSP SLA fulfillment, rate optimization plans, and custom supplier consolidation strategies for corporate clients.',
      initials: 'DV'
    },
    {
      name: 'Alina Rostova',
      role: 'Director of Technical Talent Sourcing',
      bio: 'Oversees our developer vetting pipeline, technical interview screening, and custom agile POD squads creation.',
      initials: 'AR'
    }
  ]

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none circuit-bg"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">About Circuit Sphere</h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Connecting world-class enterprises with specialized contingent and managed workforce talent infrastructure.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Mission Card */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center text-electric">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-navy">Our Mission</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To empower enterprises to navigate talent shortages and operational complexity by deploying pre-vetted, compliant workforce programs and agile consulting assets. We bridge the gap between organizational growth goals and talent availability, delivering speed without compromising quality.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-200 mt-6 text-xs text-slate-500 font-medium uppercase tracking-wider">
                Strategic Alignment • Velocity • Delivery
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-navy text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-electric/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="space-y-6 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-electric/25 flex items-center justify-center text-electric-light">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Our Vision</h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  To become the global gold standard for contingent talent operations and Managed Service Provider (MSP) programs, recognized for bringing absolute data transparency, compliance accountability, and technical-vetting rigor to the workforce consulting ecosystem.
                </p>
              </div>
              <div className="pt-6 border-t border-white/10 mt-6 text-xs text-slate-400 font-medium uppercase tracking-wider">
                Innovation • Global Reach • Total Compliance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy tracking-tight">Our Core Principles</h2>
            <div className="h-1.5 w-16 bg-electric mx-auto my-3 rounded-full"></div>
            <p className="text-slate-600 text-sm">
              Our operational blueprint is guided by a commitment to reliability, regulatory compliance, and client collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-electric/30 hover:shadow-xl hover:shadow-navy/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mb-6">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">{val.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-navy tracking-tight">Milestones of Growth</h2>
            <div className="h-1.5 w-16 bg-electric mx-auto my-3 rounded-full"></div>
            <p className="text-slate-600 text-sm">
              From a boutique technical staffing agency to a comprehensive enterprise managed service provider.
            </p>
          </div>

          <div className="relative border-l-2 border-slate-200 max-w-3xl mx-auto pl-8 sm:pl-12 space-y-12">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-12 sm:-left-[60px] top-1.5 w-8 h-8 rounded-full bg-white border-4 border-electric flex items-center justify-center z-10 shadow">
                  <div className="w-2.5 h-2.5 rounded-full bg-navy"></div>
                </div>
                <div className="space-y-2">
                  <span className="text-lg font-extrabold text-electric leading-none">{item.year}</span>
                  <h3 className="text-xl font-bold text-navy">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Placeholder */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-navy tracking-tight">Our Leadership Team</h2>
            <div className="h-1.5 w-16 bg-electric mx-auto my-3 rounded-full"></div>
            <p className="text-slate-600 text-sm">
              Led by industry experts with deep backgrounds in HR, procurement operations, compliance risk management, and systems consulting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between text-center">
                <div className="space-y-4">
                  {/* Avatar Placeholder */}
                  <div className="w-20 h-20 rounded-2xl bg-navy text-white text-2xl font-bold mx-auto flex items-center justify-center border border-white/10 shadow-inner">
                    {leader.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy">{leader.name}</h3>
                    <span className="text-xs text-electric font-semibold">{leader.role}</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">{leader.bio}</p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-slate-100 text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                  Corporate Advisory Panel
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Governance Callout */}
      <section className="bg-navy text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none circuit-bg"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Strict Compliance & Governance Standards</h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm leading-relaxed">
            We undergo regular labor auditing protocols, carry robust operational insurance policies, and run advanced training compliance cycles to ensure zero joint-employer liabilities for clients.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => setCurrentPage('contact')}
              className="px-8 py-3.5 bg-electric hover:bg-electric-dark text-white font-bold rounded-lg shadow-lg"
            >
              Discuss Compliance Safeguards
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
