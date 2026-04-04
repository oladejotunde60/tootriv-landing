import ScrollReveal from './ScrollReveal'

export default function CTA() {
  return (
    <section id="contact" className="cta-section">
      <div className="cta-glow" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <ScrollReveal>
          <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" className="cta-icon">
            <circle cx="40" cy="40" r="38" fill="rgba(255,255,255,.12)"/>
            <path d="M40 58 Q40 35 37 25" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M37 40 Q25 30 20 18 Q32 25 37 36" fill="#2ECC71" opacity=".9"/>
            <path d="M38 30 Q50 18 58 10 Q50 22 39 28" fill="#2ECC71" opacity=".8"/>
            <path d="M37 25 Q32 14 28 8 Q35 14 37 22" fill="#F7B32B" opacity=".8"/>
          </svg>
          <h2>Ready to Transform Salary Lending in Africa?</h2>
          <p>
            We're building partnerships with employers, financial institutions, and technology
            partners to scale TooTriv across Nigeria and beyond.
          </p>
          <div className="cta-buttons">
            <a href="mailto:hello@tootriv.com" className="btn btn-primary btn-lg">
              Get In Touch
            </a>
            <a href="#features" className="btn btn-outline">Learn More</a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
