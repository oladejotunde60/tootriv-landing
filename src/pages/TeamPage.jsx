import PageHeader from '../components/PageHeader'
import ScrollReveal from '../components/ScrollReveal'
import CompanyDetails from '../components/CompanyDetails'
import CTA from '../components/CTA'

const founders = [
  {
    name: 'Tunde Oladejo',
    title: 'Founder & CEO',
    photo: '/tunde-oladejo.png',
    bio: "Leading TooTriv's vision with deep fintech infrastructure, platform reliability, and cloud engineering experience across high-growth financial services.",
    highlights: [
      'Senior SRE Infrastructure Manager at FairMoney, previously Site Reliability Engineer at Moniepoint and Access Bank.',
      'Led large-scale migrations to Linux and Kubernetes, GitOps delivery with Terraform, ArgoCD, and Helm, and major database cost and resilience improvements.',
      'Brings hands-on experience in incident response, zero-downtime upgrades, observability, networking, and secure infrastructure for high-growth financial systems.',
    ],
    linkedin: 'https://www.linkedin.com/in/tunde-oladejo-90a3607a/',
  },
  {
    name: 'Rasheed Isiaq',
    title: 'Co-Founder & CTO',
    photo: '/dummy-profile.svg',
    bio: "Architecting TooTriv's platform with banking operations and customer-channel experience across transaction systems and digital financial services.",
    highlights: [
      'Graduate researcher at the University of Southern California, combining academic depth with practical operating experience.',
      'Prior engineering and support roles across the banking sector, spanning transaction systems, ATM platforms, and service operations.',
      'Focuses on product strategy, customer trust, employer partnerships, and building financial tools that work for everyday Nigerian workers.',
    ],
    linkedin: 'https://www.linkedin.com/in/raji-ibrahim-page/',
  },
]

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Our Team"
        subtitle="TooTriv is led by founders with hands-on fintech, banking, payments, and cloud infrastructure experience."
      />

      {/* Founders */}
      <section className="section">
        <div className="container">
          <div className="team-page-grid">
            {founders.map((f, i) => (
              <ScrollReveal key={f.name} delay={i * 150}>
                <div className="team-page-card">
                  <div className="team-page-avatar">
                    <img src={f.photo} alt={`${f.name} - ${f.title} of TooTriv`} loading="lazy" />
                  </div>
                  <div className="team-page-info">
                    <h3>{f.name}</h3>
                    <div className="team-page-title">{f.title}</div>
                    <p className="team-page-bio">{f.bio}</p>
                    <h4>Key Experience</h4>
                    <ul className="team-highlights">
                      {f.highlights.map((h, j) => (
                        <li key={j}>{h}</li>
                      ))}
                    </ul>
                    <div className="team-social">
                      <a href={f.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Company Details */}
      <CompanyDetails />

      <CTA />
    </>
  )
}
