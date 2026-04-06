import PageHeader from '../components/PageHeader'
import ScrollReveal from '../components/ScrollReveal'
import CTA from '../components/CTA'

const steps = [
  {
    num: 1,
    title: 'Register',
    desc: 'Sign up with your BVN via USSD, Web, or Mobile. We auto-verify your identity in seconds.',
    detail: 'Your employer must be a TooTriv partner. Once verified, your BVN is cross-referenced with NIBSS for identity validation. The entire process takes under 2 minutes.',
    icon: '📝',
  },
  {
    num: 2,
    title: 'Get Scored',
    desc: 'Our AI-powered credit engine assesses your salary history, employer rating, and credit profile instantly.',
    detail: 'We pull data from credit bureaus, verify your salary history with your employer, and run our proprietary scoring algorithm. No paperwork, no branch visits.',
    icon: '📊',
  },
  {
    num: 3,
    title: 'Receive Funds',
    desc: 'Approved loans are disbursed directly to your bank account in under 5 minutes - 24/7.',
    detail: 'Once approved, funds are sent via instant bank transfer to your registered account. Available around the clock, including weekends and public holidays.',
    icon: '💰',
  },
  {
    num: 4,
    title: 'Auto-Repay',
    desc: 'Repayment is deducted automatically from your salary via direct debit mandate on payday.',
    detail: 'You set up a one-time direct debit mandate. On payday, your repayment is automatically deducted - no manual transfers, no missed payments, no late fees.',
    icon: '🔄',
  },
]

const channels = [
  { icon: '📞', name: 'USSD', desc: 'Dial a short code from any phone. No internet needed. Works on feature phones.' },
  { icon: '🌐', name: 'Web App', desc: 'Full-featured responsive web portal. Apply, manage loans, and view schedules.' },
  { icon: '📲', name: 'Mobile App', desc: 'Native iOS and Android apps with push notifications and biometric login.' },
]

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        title="How TooTriv Works"
        subtitle="Get a salary advance in 4 simple steps - no collateral, no paperwork, no hidden fees."
      />

      {/* Steps */}
      <section className="section">
        <div className="container">
          <div className="process-timeline">
            {steps.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 120}>
                <div className="process-step">
                  <div className="process-step-left">
                    <div className="process-num">{s.num}</div>
                  </div>
                  <div className="process-step-content">
                    <div className="process-icon">{s.icon}</div>
                    <h3>{s.title}</h3>
                    <p className="process-desc">{s.desc}</p>
                    <p className="process-detail">{s.detail}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Access Channels</h2>
            <p className="section-subtitle">Choose the channel that works for you</p>
          </ScrollReveal>

          <div className="channels-grid">
            {channels.map((c, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="channel-card">
                  <div className="channel-icon">{c.icon}</div>
                  <h4>{c.name}</h4>
                  <p>{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">What You Need</h2>
            <p className="section-subtitle">Simple eligibility requirements</p>
          </ScrollReveal>

          <div className="requirements-grid">
            {[
              { icon: '💼', text: 'Salaried employee at a TooTriv partner company' },
              { icon: '🆔', text: 'Valid Bank Verification Number (BVN)' },
              { icon: '🏦', text: 'Active Nigerian bank account' },
              { icon: '📱', text: 'Any phone - feature phone or smartphone' },
            ].map((r, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="requirement-card">
                  <span className="requirement-icon">{r.icon}</span>
                  <span>{r.text}</span>
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
