import React, { useState } from 'react'
import { 
  Users, Briefcase, FileCheck, Landmark, Zap, Shield, Laptop, CheckCircle2, ChevronRight 
} from 'lucide-react'

export default function Services({ setCurrentPage }) {
  const [selectedModel, setSelectedModel] = useState('contract')

  const engagementModels = {
    contract: {
      title: 'Contract / Contingent Staffing',
      subtitle: 'Highly flexible support for dynamic workload demands',
      description: 'Acquire pre-vetted specialists for specific projects or seasonal requirements. We coordinate full sourcing, compliance, and payroll.',
      benefits: [
        'Rapid time-to-hire (average 48-72 hours)',
        'Scale down or ramp up workforce with zero headcount liabilities',
        'Easily access highly specialized skills for one-off projects',
        'Complete administrative burden shifted to CircuitSphere Solutions'
      ],
      scenario: 'Best for software deployment, product launches, seasonal audits, or leave coverage.'
    },
    'contract-to-hire': {
      title: 'Contract-to-Hire',
      subtitle: 'Mitigate hiring risk via try-before-buy assessment',
      description: 'Evaluate a candidate\'s performance, technical capabilities, and cultural alignment on-site before executing a permanent hire offer.',
      benefits: [
        'Zero upfront permanent placement fees',
        'Direct evaluation of cultural and team alignment in action',
        'Smoother transition from temporary contractor to permanent staff',
        'Reduced post-hire turnover and misaligned selection risk'
      ],
      scenario: 'Best for expanding permanent teams while maintaining conservative headcount structures.'
    },
    permanent: {
      title: 'Permanent Direct Placement',
      subtitle: 'Secure strategic, long-term talent assets',
      description: 'Leverage our deep technical networks to find high-impact leaders, directors, and expert individual contributors for permanent positions.',
      benefits: [
        'Dedicated talent mapping and competitive market intelligence',
        'Comprehensive screening, referencing, and behavioral vetting',
        'Access to passive candidate pools not active on job boards',
        'Standard replacement guarantee SLA of 90 days'
      ],
      scenario: 'Best for core engineering squads, executive leadership, or high-value key staff.'
    },
    'pod-model': {
      title: 'Managed Teams / POD Model',
      subtitle: 'Turnkey agile squads governed by SLA deliverables',
      description: 'Deploy fully formed, self-governing technical squads (PODs) consisting of developers, scrum masters, and QA engineers managed directly under our deliverables program.',
      benefits: [
        'Rapid execution with pre-integrated teams accustomed to working together',
        'Built-in governance, reporting dashboards, and scrum processes',
        'SLA and milestone-focused delivery models instead of simple hour billing',
        'Highly flexible scaling of squads based on product backlog volume'
      ],
      scenario: 'Best for modernizing legacy code, greenfield application builds, or rapid product prototyping.'
    }
  }

  const services = [
    {
      id: 'msp',
      icon: <Users className="w-8 h-8 text-electric" />,
      title: 'Managed Workforce Services (MSP)',
      tagline: 'Optimize vendor networks, control costs, ensure compliance.',
      description: 'We act as the primary operational governor for your contingent workforce. CircuitSphere Solutions integrates all staffing agencies, automates vendor billing, and standardizes rate cards to optimize performance and reduce compliance exposure.',
      bullets: [
        'Vendor Management System (VMS) integration support',
        'Coordinated supplier governance and consolidated invoicing',
        'Uniform contractor rate structures and classification audits',
        'Integrated metrics reporting (time-to-submit, turnover, and cost-savings)'
      ]
    },
    {
      id: 'contingent',
      icon: <Briefcase className="w-8 h-8 text-electric" />,
      title: 'Contract Staffing',
      tagline: 'Vetted, on-demand specialists for targeted objectives.',
      description: 'Scale project teams quickly with elite contractors. We leverage deep, pre-vetted candidate pools in IT, Engineering, Healthcare, and Finance to supply matching profiles within hours.',
      bullets: [
        'Pre-interviewed and technical-vetting pipelines',
        'Onsite, remote, or hybrid deployment capability',
        'Automated time tracking and invoicing systems',
        'Full replacement guarantees for rapid talent substitution'
      ]
    },
    {
      id: 'payroll',
      icon: <Shield className="w-8 h-8 text-electric" />,
      title: 'Employer of Record & Payroll Services',
      tagline: 'Offload administrative liability and compliance risks.',
      description: 'Let us handle the complexity of compliance, local taxes, benefits, and insurance. CircuitSphere Solutions operates as the Employer of Record (EOR) for your designated contractors or payroll candidates.',
      bullets: [
        'W-2 and 1099 contractor compliance management',
        'Comprehensive multi-state payroll administration',
        'Accurate tax filings, workers compensation, and health benefits routing',
        'Frictionless digital onboarding and offboarding portals'
      ]
    },
    {
      id: 'rpo',
      icon: <FileCheck className="w-8 h-8 text-electric" />,
      title: 'Recruitment Process Outsourcing (RPO)',
      tagline: 'Scale your internal recruiting capability seamlessly.',
      description: 'Transfer part or all of your recruitment lifecycle to our recruitment teams. We handle candidate sourcing, candidate experience, interview coordination, and background checks, acting as an extension of your employer brand.',
      bullets: [
        'Customized service level agreements (SLAs) for cost-per-hire and speed',
        'Direct integration with your internal ATS software',
        'Strategic talent mapping and employer branding support',
        'Highly scalable recruiting capacity to match changing hiring demand'
      ]
    },
    {
      id: 'perm',
      icon: <Zap className="w-8 h-8 text-electric" />,
      title: 'Permanent & Executive Placement',
      tagline: 'Acquire high-impact strategic leadership assets.',
      description: 'We source passive candidates who are not actively searching but are open to the right strategic move. We map candidate motivations against your culture to secure long-term alignment.',
      bullets: [
        'Executive searches handled with complete confidentiality',
        'Tailored sourcing maps matching your industry and competitor lists',
        'Negotiation facilitation and onboarding structure guidance',
        'Robust 90-day placement guarantee for peace of mind'
      ]
    },
    {
      id: 'consulting',
      icon: <Laptop className="w-8 h-8 text-electric" />,
      title: 'IT Consulting & Tech PODs',
      tagline: 'Deliver digital projects with turnkey agile teams.',
      description: 'Address system architecture designs, cloud migrations, or complex application builds. We provide senior consultant advisory or full Scrum-based POD squads to ship code and hit milestones.',
      bullets: [
        'Cloud migration and devops automation consulting',
        'Agile scrum squads (Developers, QA, Scrum Master, PM)',
        'Milestone-driven Statements of Work (SOW)',
        'Tech stack transitions (legacy code modernisation)'
      ]
    }
  ]

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none circuit-bg"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Our Services & Solutions</h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            CircuitSphere Solutions provides the talent infrastructure, operational systems, and strategic alignment to build resilient teams and optimize enterprise productivity.
          </p>
        </div>
      </section>

      {/* Interactive Engagement Models switcher */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy tracking-tight">Flexible Engagement Models</h2>
            <div className="h-1.5 w-16 bg-electric mx-auto my-3 rounded-full"></div>
            <p className="text-slate-600 text-sm">
              We design our engagement frameworks to match your operating workflows. Choose or blend models based on your current budget and project requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Model selectors */}
            <div className="lg:col-span-4 space-y-3">
              {[
                { key: 'contract', label: 'Contract Staffing' },
                { key: 'contract-to-hire', label: 'Contract-To-Hire' },
                { key: 'permanent', label: 'Permanent Direct' },
                { key: 'disabled', label: 'POD Model (Managed Teams)', value: 'pod-model' } // Map target key
              ].map((model) => {
                const targetKey = model.value || model.key
                return (
                  <button
                    key={targetKey}
                    id={`model-btn-${targetKey}`}
                    onClick={() => setSelectedModel(targetKey)}
                    className={`w-full text-left p-4 rounded-xl font-semibold transition-all flex items-center justify-between border ${
                      selectedModel === targetKey 
                        ? 'bg-navy text-white border-navy shadow-md shadow-navy/15' 
                        : 'bg-white text-navy border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    <span>{model.label}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${selectedModel === targetKey ? 'rotate-90' : ''}`} />
                  </button>
                )
              })}
            </div>

            {/* Model Card Detail */}
            <div className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-xl shadow-navy/5 transition-all duration-300 min-h-[360px]">
              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-electric font-bold">{engagementModels[selectedModel].subtitle}</span>
                  <h3 className="text-2xl font-bold text-navy mt-1">{engagementModels[selectedModel].title}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{engagementModels[selectedModel].description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-bold text-sm text-navy">Key Highlights & Benefits:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {engagementModels[selectedModel].benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-slate-600 text-xs">
                        <CheckCircle2 className="w-4 h-4 text-electric shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/50">
                  <span className="font-bold text-xs text-navy block mb-1">Ideal Scenario:</span>
                  <p className="text-slate-600 text-xs">{engagementModels[selectedModel].scenario}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Deep Dive */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-navy tracking-tight">Our Complete Solutions Catalog</h2>
            <div className="h-1.5 w-16 bg-electric mx-auto my-3 rounded-full"></div>
            <p className="text-slate-600 text-sm">
              Discover how our specialized operational capabilities solve contingent staffing complexity, from sourcing to compliance.
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual side */}
                <div className={`lg:col-span-5 space-y-6 ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <div className="w-16 h-16 rounded-2xl bg-electric/10 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight">{service.title}</h3>
                  <div className="text-sm font-semibold text-electric uppercase tracking-wide">{service.tagline}</div>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                  <button 
                    onClick={() => setCurrentPage('contact')}
                    className="px-6 py-3 bg-navy hover:bg-navy-light text-white text-sm font-semibold rounded-lg shadow-md transition-colors"
                  >
                    Discuss Solution
                  </button>
                </div>

                {/* Bullets side */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200/60 rounded-3xl p-8 sm:p-10 space-y-6">
                  <h4 className="font-bold text-sm text-navy uppercase tracking-wider">Features & Capabilities</h4>
                  <ul className="space-y-4">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-slate-700 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-electric shrink-0 mt-0.5" />
                        <span className="leading-normal">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                    <span>99.8% Compliance Accuracy</span>
                    <span>Dedicated SLA Accountability</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-navy text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none circuit-bg"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Ready to Optimize Your Contingent Workforce?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm leading-relaxed">
            Connect with our workforce consultants to analyze your current talent vendor spend, rate cards, and SLA tracking profiles.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => setCurrentPage('contact')}
              className="px-8 py-3.5 bg-electric hover:bg-electric-dark text-white font-bold rounded-lg shadow-lg shadow-electric/20 transition-all hover:-translate-y-0.5"
            >
              Request a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
