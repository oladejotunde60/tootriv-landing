import ScrollReveal from './ScrollReveal'

const techStack = [
  { emoji: '☕', name: 'Spring Boot', desc: 'Java 17 Microservices' },
  { emoji: '⚛️', name: 'React + TypeScript', desc: 'Modern Frontend (Vite)' },
  { emoji: '🏦', name: 'Apache Fineract', desc: 'Core Banking Engine' },
  { emoji: '☁️', name: 'Cloud Infrastructure', desc: 'Containers, databases, caching, and messaging' },
  { emoji: '🐳', name: 'Docker & Kubernetes', desc: 'Container Orchestration' },
  { emoji: '🔄', name: 'GitOps / ArgoCD', desc: 'Continuous Deployment' },
  { emoji: '💳', name: 'Paystack & Remita', desc: 'Payment Infrastructure' },
  { emoji: '📡', name: "Africa's Talking", desc: 'USSD & SMS Gateway' },
]

const services = [
  { emoji: '📱', name: 'USSD Service', desc: 'Session & Menu Flow' },
  { emoji: '👤', name: 'User Service', desc: 'Registration & KYC' },
  { emoji: '📄', name: 'Loan Service', desc: 'Lifecycle & Fineract' },
  { emoji: '📊', name: 'Credit Service', desc: 'Scoring & Eligibility' },
  { emoji: '💳', name: 'Payment Service', desc: 'Paystack & Remita' },
  { emoji: '🔔', name: 'Notification Service', desc: 'SMS & Email' },
]

export default function Technology() {
  return (
    <>
      <section id="technology" className="section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Enterprise-Grade Technology</h2>
            <p className="section-subtitle">Built on cloud-native microservices architecture designed for scale, security, and reliability.</p>
          </ScrollReveal>

          <div className="tech-grid">
            {techStack.map((t, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="tech-card">
                  <div className="tech-emoji">{t.emoji}</div>
                  <h4>{t.name}</h4>
                  <p>{t.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section architecture-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title" style={{ color: '#fff' }}>System Architecture</h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,.6)' }}>6 independent microservices with event-driven async communication</p>
          </ScrollReveal>

          <div className="arch-grid">
            {services.map((s, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="arch-card">
                  <div className="arch-emoji">{s.emoji}</div>
                  <strong>{s.name}</strong>
                  <p>{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
