import PageHeader from '../components/PageHeader'
import ScrollReveal from '../components/ScrollReveal'
import CTA from '../components/CTA'

const opportunities = [
  {
    title: '60M+ Salaried Workers',
    desc: 'Nigeria has a massive formally and informally employed workforce. Most lack access to affordable short-term credit, relying on predatory lenders with 30–40% monthly rates.',
  },
  {
    title: 'Employer-Backed Credit Gap',
    desc: 'While payroll data can dramatically reduce lending risk, very few platforms leverage employer partnerships to underwrite salary-based loans at fair rates.',
  },
  {
    title: 'Digital Lending Boom',
    desc: "Sub-Saharan Africa's digital lending market is growing rapidly. TooTriv combines this trend with employer trust to offer a differentiated, lower-risk product.",
  },
  {
    title: 'Financial Inclusion Need',
    desc: 'Roughly half of Nigerian adults are underbanked. TooTriv bridges the gap by extending structured credit products to workers who are typically excluded by traditional banks.',
  },
]

const advantages = [
  { feature: 'Employer-Verified Salary Data', us: true, others: false },
  { feature: 'Low Interest Rates (≤5% monthly)', us: true, others: false },
  { feature: 'Automated Payroll Deductions', us: true, others: false },
  { feature: 'Multi-Channel Access (Web, Mobile, USSD)', us: true, others: false },
  { feature: 'Credit Score Building', us: true, others: false },
  { feature: 'No Collateral Required', us: true, others: true },
  { feature: 'Instant Disbursement', us: true, others: true },
]

export default function MarketPage() {
  return (
    <>
      <PageHeader
        title="Market Opportunity"
        subtitle="Nigeria's massive salaried workforce represents an under-served market for fair, employer-backed lending."
      />

      {/* Opportunity Cards */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Why Now</h2>
            <p className="section-subtitle">
              Multiple structural factors are converging to make employer-backed salary advances viable, scalable, and necessary.
            </p>
          </ScrollReveal>

          <div className="market-opp-grid">
            {opportunities.map((o, i) => (
              <ScrollReveal key={o.title} delay={i * 120}>
                <div className="market-opp-card">
                  <h3>{o.title}</h3>
                  <p>{o.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="section section-alt">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Competitive Advantage</h2>
            <p className="section-subtitle">
              TooTriv differentiates through employer partnerships, lower risk profiles, and multi-channel accessibility.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="competitive-table-wrap">
              <table className="competitive-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>TooTriv</th>
                    <th>Others</th>
                  </tr>
                </thead>
                <tbody>
                  {advantages.map((a) => (
                    <tr key={a.feature}>
                      <td>{a.feature}</td>
                      <td className={a.us ? 'check' : 'cross'}>{a.us ? '✓' : '✗'}</td>
                      <td className={a.others ? 'check' : 'cross'}>{a.others ? '✓' : '✗'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Target Segments */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Target Segments</h2>
          </ScrollReveal>

          <div className="market-opp-grid">
            {[
              { title: 'SMEs & Mid-Market Employers', desc: 'Companies with 20–500 staff seeking low-cost employee benefit programs. TooTriv handles everything - no HR overhead.' },
              { title: 'Large Corporates', desc: 'Enterprises with thousands of employees looking for structured salary advance solutions to reduce attrition and financial stress.' },
              { title: 'Public Sector & Parastatals', desc: 'Government agencies with predictable payroll cycles - ideal for automated repayment via salary deduction.' },
              { title: 'Gig & Informal Workers', desc: 'Extending reach through USSD and mobile to workers without traditional banking - building credit history from scratch.' },
            ].map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 120}>
                <div className="market-opp-card">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
