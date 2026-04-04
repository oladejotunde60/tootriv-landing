import ScrollReveal from './ScrollReveal'

const steps = [
  { num: 1, title: 'Register', desc: 'Sign up with your BVN via USSD, Web, or Mobile. We auto-verify your identity in seconds.' },
  { num: 2, title: 'Get Scored', desc: 'Our AI-powered credit engine assesses your salary history, employer rating, and credit profile instantly.' },
  { num: 3, title: 'Receive Funds', desc: 'Approved loans are disbursed directly to your bank account in under 5 minutes — 24/7.' },
  { num: 4, title: 'Auto-Repay', desc: 'Repayment is deducted automatically from your salary via direct debit mandate on payday.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">How TooTriv Works</h2>
          <p className="section-subtitle">Get a salary advance in 4 simple steps — no collateral, no paperwork, no hidden fees.</p>
        </ScrollReveal>

        <div className="steps-grid">
          {steps.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 120}>
              <div className="step-card">
                <div className="step-num-wrapper">
                  <div className="step-num">{s.num}</div>
                  {i < steps.length - 1 && <div className="step-connector" />}
                </div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
