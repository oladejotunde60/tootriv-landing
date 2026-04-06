import PageHeader from '../components/PageHeader'
import ScrollReveal from '../components/ScrollReveal'
import CTA from '../components/CTA'

const problems = [
  { icon: '💸', title: 'Paycheck-to-Paycheck Living', desc: 'Unforeseen expenses - medical bills, school fees, family emergencies - create urgent liquidity needs for salaried workers.', detail: 'In Nigeria, a significant portion of salaried workers exhaust their monthly income before the next payday. When unexpected expenses arise, they have limited options for quick, affordable credit.' },
  { icon: '🏦', title: 'Slow Bank Processes', desc: 'Traditional banks offer slow, paperwork-heavy loan processes that can take weeks to approve even small amounts.', detail: 'For small emergency loans under ₦100,000, the overhead of traditional bank applications - documentation, branch visits, credit committee reviews - makes the process impractical for urgent needs.' },
  { icon: '🦈', title: 'Predatory Lending', desc: 'Informal money lenders exploit workers with predatory interest rates of 15-30% per month, trapping them in cycles of debt.', detail: 'Many digital lending apps charge exorbitant rates, employ aggressive collection tactics, and share borrower data without consent. Workers often end up borrowing from one lender to repay another.' },
  { icon: '📵', title: 'Digital Divide', desc: 'Many workers rely on basic feature phones. Existing digital lenders require smartphones and data, excluding the underbanked.', detail: 'Roughly 70% of phone users in Nigeria still use feature phones. App-only lenders automatically exclude this massive segment of the working population from accessing financial services.' },
]

export default function ProblemPage() {
  return (
    <>
      <PageHeader
        title="The Problem"
        subtitle="Millions of Nigerian workers live paycheck to paycheck. When emergencies strike, they have nowhere to turn."
      />

      {/* Problem Overview */}
      <section className="section">
        <div className="container">
          <div className="page-content-block" style={{ marginBottom: '56px' }}>
            <ScrollReveal>
              <p>
                Nigeria has a large base of salaried workers, yet accessing small, short-term
                credit remains difficult for many. Traditional banks are slow. Digital lenders are
                expensive. Informal lenders are predatory. And the majority of workers - those
                without smartphones - are excluded entirely.
              </p>
            </ScrollReveal>
          </div>

          <div className="problem-detail-grid">
            {problems.map((p, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="problem-detail-card">
                  <div className="problem-detail-icon">{p.icon}</div>
                  <h3>{p.title}</h3>
                  <p className="problem-detail-summary">{p.desc}</p>
                  <p className="problem-detail-text">{p.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Gap */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">The Gap in the Market</h2>
          </ScrollReveal>
          <div className="gap-grid">
            <ScrollReveal delay={100}>
              <div className="gap-card">
                <h4>What Workers Need</h4>
                <ul className="gap-list">
                  <li>Instant access to small loans (₦10k–₦100k)</li>
                  <li>Transparent, fair interest rates</li>
                  <li>Works on any phone - including feature phones</li>
                  <li>No collateral or guarantor required</li>
                  <li>Automatic repayment from salary</li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="gap-card gap-card--highlight">
                <h4>What TooTriv Delivers</h4>
                <ul className="gap-list">
                  <li>Under 5-minute disbursement, 24/7</li>
                  <li>7-10% monthly - lowest in market</li>
                  <li>USSD, Web, and Mobile access channels</li>
                  <li>Salary-backed - no collateral needed</li>
                  <li>Auto-debit on payday via direct mandate</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
