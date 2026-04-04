import ScrollReveal from './ScrollReveal'

const info = [
  {
    icon: '🏛️',
    title: 'Registered Entity',
    content: <><strong>TooTriv Finance Limited</strong><br />CAC Registration: <strong>RC 9392905</strong><br />Federal Republic of Nigeria</>,
  },
  {
    icon: '📍',
    title: 'Headquarters',
    content: <>2 Ibidapo Shobowale Street,<br />Shofunwa Estate, Ikorodu,<br /><strong>Lagos, Nigeria</strong></>,
  },
  {
    icon: '📅',
    title: 'Founded',
    content: <><strong>2025</strong><br />Building MVP &amp; onboarding pilot employers<br />Founder-funded</>,
  },
]

const badges = [
  '🇳🇬 Nigerian-founded & operated',
  '☁️ Cloud-native platform built for scale',
  '🔒 Bank-grade security & encryption',
]

export default function CompanyDetails() {
  return (
    <section id="company" className="section">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Company Details</h2>
          <p className="section-subtitle">TooTriv Finance Limited is a registered Nigerian company building transparent, accessible financial services.</p>
        </ScrollReveal>

        <div className="company-info-grid">
          {info.map((item, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="company-info-card">
                <div className="info-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.content}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <div className="company-badges">
            {badges.map((b, i) => (
              <div key={i} className="company-badge">{b}</div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
