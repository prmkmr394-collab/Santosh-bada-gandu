import React from 'react'
import { Laptop, Banknote, Activity, ShoppingBag, Factory, Radio, CheckCircle, ArrowRight } from 'lucide-react'

export default function Industries({ setCurrentPage }) {
  const industries = [
    {
      id: 'tech',
      icon: <Laptop className="w-8 h-8 text-electric" />,
      title: 'IT & Software Engineering',
      description: 'We source elite software builders, DevOps leaders, cloud systems architects, and cyber security experts. Our talent pool includes engineers skilled in React, Node, Python, AWS, Kubernetes, and machine learning.',
      roles: ['Full-Stack Developers', 'DevOps & SRE Engineers', 'Cloud Architects (AWS/Azure)', 'Cyber Security Analysts', 'AI / ML Engineers'],
      compliance: 'SOC 2, ISO 27001, GDPR Data Audits, IP Protection Agreements',
      highlight: 'Sourced and onboarded a 12-developer remote backend squad for a fintech scale-up in 10 days.'
    },
    {
      id: 'bfsi',
      icon: <Banknote className="w-8 h-8 text-electric" />,
      title: 'BFSI (Banking, Financial Services & Insurance)',
      description: 'Supplying highly quantitative analysts, regulatory compliance experts, risk managers, and core banking systems consultants. We understand the compliance rigor required for financial operations.',
      roles: ['Risk Management Consultants', 'Financial Analysts', 'Regulatory Compliance Officers', 'Quantitative Developers', 'Treasury & Audit Specialists'],
      compliance: 'SOX (Sarbanes-Oxley), SEC Regulations, FINRA, Anti-Money Laundering (AML)',
      highlight: 'Provided 15 senior risk auditors to a retail bank during an unexpected regional regulatory review.'
    },
    {
      id: 'healthcare',
      icon: <Activity className="w-8 h-8 text-electric" />,
      title: 'Healthcare & Life Sciences',
      description: 'Connecting medical groups, biotech organizations, and hospitals with qualified clinical researchers, medical coders, and health system administrators who hold active licensing.',
      roles: ['Clinical Research Associates', 'Certified Medical Coders (ICD-10)', 'Healthcare IT Systems Managers', 'Biostatistics Consultants', 'Lab Technicians'],
      compliance: 'HIPAA, Joint Commission Standards, FDA Clinical Trial Guidelines',
      highlight: 'Deployed 45 licensed medical coders for a healthcare network, reducing coding backlogs by 90% in 30 days.'
    },
    {
      id: 'retail',
      icon: <ShoppingBag className="w-8 h-8 text-electric" />,
      title: 'Retail & E-Commerce',
      description: 'Helping brands navigate seasonal spikes, e-commerce re-platforming, inventory logistics optimization, and customer success leadership roles.',
      roles: ['E-Commerce Product Managers', 'Supply Chain Logistics Leads', 'Customer Experience Managers', 'Inventory Operations Planners', 'ERP Integration Consultants'],
      compliance: 'PCI-DSS Compliance, Local Labor Standards, OSHA Safety Compliance',
      highlight: 'Scaled customer support teams by 60 agents in 3 weeks ahead of a major Black Friday holiday rush.'
    },
    {
      id: 'manufacturing',
      icon: <Factory className="w-8 h-8 text-electric" />,
      title: 'Advanced Manufacturing',
      description: 'Providing plant managers, process engineers, quality control specialists, and global supply chain coordinators to automate assembly lines and optimize resource deployment.',
      roles: ['Process & Industrial Engineers', 'Quality Assurance Technicians', 'Supply Chain Coordinators', 'HSE (Health, Safety & Env) Officers', 'Procurement Analysts'],
      compliance: 'OSHA Standards, ISO 9001 Quality Frameworks, EPA Regulations',
      highlight: 'Supplied senior automation engineers to integrate a new robotics assembly line for an automotive parts manufacturer.'
    },
    {
      id: 'telecom',
      icon: <Radio className="w-8 h-8 text-electric" />,
      title: 'Telecommunications',
      description: 'Providing network engineers, 5G deployment coordinators, RF analysts, and technical field managers to build next-generation communication grids.',
      roles: ['RF (Radio Frequency) Engineers', 'Network Infrastructure Engineers', '5G Deployment Coordinators', 'Fiber Optic Systems Engineers', 'NOC (Network Ops Center) Technicians'],
      compliance: 'FCC Regulations, Local Zoning & Environmental Permits, Tower Safety Guidelines',
      highlight: 'Deployed a contract team of 10 RF engineers to manage 5G antenna configuration profiles across 4 major metros.'
    }
  ]

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none circuit-bg"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Industries We Serve</h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Leveraging specialized talent pools and deep regulatory expertise across IT, Healthcare, Finance, and Telecom sectors.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind) => (
              <div 
                key={ind.id} 
                className="bg-slate-50 border border-slate-200/60 rounded-3xl p-8 hover:bg-white hover:border-electric/30 hover:shadow-xl hover:shadow-navy/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Icon & Title */}
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-2xl bg-electric/10 flex items-center justify-center text-electric">
                      {ind.icon}
                    </div>
                    <h2 className="text-lg font-bold text-navy leading-snug">{ind.title}</h2>
                  </div>

                  <p className="text-slate-600 text-xs leading-relaxed">
                    {ind.description}
                  </p>

                  {/* Typical Roles */}
                  <div className="space-y-2.5">
                    <h3 className="font-bold text-xs text-navy uppercase tracking-wider">Common Placements</h3>
                    <ul className="space-y-1.5">
                      {ind.roles.map((role, rIdx) => (
                        <li key={rIdx} className="flex items-center space-x-2 text-slate-600 text-xs">
                          <CheckCircle className="w-3.5 h-3.5 text-electric shrink-0" />
                          <span>{role}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Compliance */}
                  <div className="p-3 bg-white border border-slate-200 rounded-xl">
                    <span className="font-bold text-[10px] text-navy uppercase tracking-wider block mb-1">Sector Compliance Checked</span>
                    <p className="text-slate-600 text-[10px] leading-relaxed font-medium">{ind.compliance}</p>
                  </div>
                </div>

                {/* Case Study Highlight */}
                <div className="mt-6 pt-6 border-t border-slate-200/60 text-[11px] text-slate-500 italic">
                  <span className="font-bold text-navy not-italic block mb-0.5 uppercase tracking-widest text-[9px]">Case Study Highlight</span>
                  "{ind.highlight}"
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-slate-50 border-t border-slate-200 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl font-extrabold text-navy">Need Vertical-Specific Talent fast?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed">
            Our recruiting consultants average 8+ years of vertical-specific sourcing experience, guaranteeing we understand your tech stacks and operational requirements immediately.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => setCurrentPage('contact')}
              className="px-8 py-3.5 bg-navy hover:bg-navy-light text-white font-bold rounded-lg shadow-lg flex items-center space-x-2"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
