import ScrollReveal from './ScrollReveal'

const features = [
  { icon: '⚡', title: 'Instant Disbursement', desc: 'Loans approved and disbursed in under 5 minutes, anytime, anywhere.' },
  { icon: '📱', title: 'Multi-Channel Access', desc: 'Apply via USSD (feature phones), web app, or mobile app — we meet customers where they are.' },
  { icon: '🤖', title: 'AI Credit Scoring', desc: 'Proprietary scoring engine using salary history, BVN, credit bureaus, and employer data.' },
  { icon: '💰', title: 'Lower Interest Rates', desc: '7-10% monthly — significantly lower than market competitors charging 15-30%.' },
  { icon: '🤝', title: 'Employer Partnerships', desc: 'We partner with companies to offer TooTriv as an employee benefit, reducing risk and improving access.' },
  { icon: '🔒', title: 'Bank-Grade Security', desc: 'BVN validation, encrypted KYC, multi-factor authentication, and end-to-end encryption.' },
]

export default function Features() {
  return (
    <section id="features" className="section features-section">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Why TooTriv?</h2>
          <p className="section-subtitle">We combine the reliability of banks with the speed, flexibility, and convenience of digital-first fintech.</p>
        </ScrollReveal>

        <div className="features-grid">
          {features.map((f, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
