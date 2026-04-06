import PageHeader from '../components/PageHeader'
import ScrollReveal from '../components/ScrollReveal'
import CTA from '../components/CTA'

const features = [
  { icon: '⚡', title: 'Instant Disbursement', desc: 'Loans approved and disbursed in under 5 minutes, anytime, anywhere.', detail: 'Our automated underwriting engine processes applications in real-time. Once approved, funds are transferred via instant bank transfer - no queues, no waiting.' },
  { icon: '📱', title: 'Multi-Channel Access', desc: 'Apply via USSD (feature phones), web app, or mobile app - we meet customers where they are.', detail: 'Whether you own a basic Nokia or the latest iPhone, TooTriv is accessible. Our USSD channel works without internet, while our web and mobile apps offer full-featured experiences.' },
  { icon: '🤖', title: 'AI Credit Scoring', desc: 'Proprietary scoring engine using salary history, BVN, credit bureaus, and employer data.', detail: 'Our machine learning models assess creditworthiness beyond traditional metrics. We analyze salary consistency, employer stability, and behavioral patterns for accurate risk assessment.' },
  { icon: '💰', title: 'Lower Interest Rates', desc: '7-10% monthly - significantly lower than market competitors charging 15-30%.', detail: 'By partnering directly with employers and using salary-backed lending, we reduce risk and pass the savings to customers. No hidden fees, no processing charges.' },
  { icon: '🤝', title: 'Employer Partnerships', desc: 'We partner with companies to offer TooTriv as an employee benefit, reducing risk and improving access.', detail: 'Employers onboard their workforce onto TooTriv. Employees get better rates, employers improve retention, and we reduce default risk through payroll integration.' },
  { icon: '🔒', title: 'Bank-Grade Security', desc: 'BVN validation, encrypted KYC, multi-factor authentication, and end-to-end encryption.', detail: 'All data is encrypted at rest and in transit. We use industry-standard security protocols, regular penetration testing, and strict access controls.' },
]

const techStack = [
  { emoji: '☕', name: 'Spring Boot', desc: 'Java 17 Microservices' },
  { emoji: '⚛️', name: 'React + TypeScript', desc: 'Modern Frontend (Vite)' },
  { emoji: '🏦', name: 'Apache Fineract', desc: 'Core Banking Engine' },
  { emoji: '☁️', name: 'Cloud Infrastructure', desc: 'Containers, databases, caching, messaging' },
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

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        title="Features & Technology"
        subtitle="Enterprise-grade technology powering simple, fast financial services."
      />

      {/* Core Features */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Why TooTriv?</h2>
            <p className="section-subtitle">We combine the reliability of banks with the speed, flexibility, and convenience of digital-first fintech.</p>
          </ScrollReveal>

          <div className="feature-detail-grid">
            {features.map((f, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="feature-detail-card">
                  <div className="feature-detail-icon">{f.icon}</div>
                  <div>
                    <h4>{f.title}</h4>
                    <p className="feature-detail-summary">{f.desc}</p>
                    <p className="feature-detail-text">{f.detail}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Technology Stack</h2>
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

      {/* Architecture */}
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

      <CTA />
    </>
  )
}
