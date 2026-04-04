import { useEffect, useState } from 'react'

const menuItems = [
  { num: 1, label: 'Apply for Loan' },
  { num: 2, label: 'Check Eligibility' },
  { num: 3, label: 'View Loan Status' },
  { num: 4, label: 'Make Repayment' },
  { num: 5, label: 'My Account' },
]

function FloatingParticle({ delay, size, left, duration }) {
  return (
    <div
      className="floating-particle"
      style={{
        width: size,
        height: size,
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  )
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <section className="hero">
      {/* Floating particles */}
      <div className="hero-particles">
        <FloatingParticle delay={0} size={6} left={10} duration={18} />
        <FloatingParticle delay={2} size={4} left={25} duration={22} />
        <FloatingParticle delay={4} size={8} left={45} duration={16} />
        <FloatingParticle delay={1} size={5} left={65} duration={20} />
        <FloatingParticle delay={3} size={7} left={80} duration={19} />
        <FloatingParticle delay={5} size={3} left={90} duration={24} />
      </div>

      <div className="container hero-inner">
        <div className={`hero-text ${mounted ? 'hero-text--visible' : ''}`}>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            🇳🇬 Built for Nigeria, Built for Africa
          </div>
          <p className="hero-company">TooTriv Finance Limited (RC 9392905)</p>
          <h1>
            Instant Salary Advances for{' '}
            <span className="gradient-text">Every Worker</span>
          </h1>
          <p className="hero-description">
            TooTriv is a digital lending platform providing fast, affordable, collateral-free
            salary-backed loans. Employees can access up to ₦100,000 in under 5 minutes —
            via USSD, Web, or Mobile.
          </p>
          <div className="hero-buttons">
            <a href="#how-it-works" className="btn btn-primary">
              <span>See How It Works</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#contact" className="btn btn-outline">Partner With Us</a>
            <a
              href="https://web.non-prod.tootriv.com/"
              className="btn btn-green"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </div>
        </div>

        <div className={`hero-visual ${mounted ? 'hero-visual--visible' : ''}`}>
          {/* Growth illustration */}
          <svg className="thrive-illustration" viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="120" cy="170" rx="50" ry="18" fill="#F7B32B" opacity=".25"/>
            <ellipse cx="120" cy="162" rx="44" ry="16" fill="#F7B32B" opacity=".4"/>
            <ellipse cx="120" cy="155" rx="38" ry="14" fill="#F7B32B"/>
            <text x="120" y="161" textAnchor="middle" fill="#865A10" fontSize="16" fontWeight="800" fontFamily="Inter,sans-serif">₦</text>
            <path d="M120 148 Q120 100 115 75" stroke="#0A8754" strokeWidth="4" fill="none" strokeLinecap="round"/>
            <path d="M115 105 Q90 85 80 60 Q105 70 115 95" fill="#0A8754" opacity=".85"/>
            <path d="M117 85 Q142 62 155 40 Q135 55 117 78" fill="#0A8754" opacity=".9"/>
            <path d="M115 75 Q108 52 95 35 Q112 45 115 68" fill="#2ECC71" opacity=".85"/>
            <path d="M115 72 Q118 48 130 30 Q120 45 116 65" fill="#2ECC71" opacity=".7"/>
            <circle cx="75" cy="50" r="3" fill="#F7B32B" opacity=".7"/>
            <circle cx="160" cy="35" r="2.5" fill="#F7B32B" opacity=".6"/>
            <circle cx="145" cy="65" r="2" fill="#F7B32B" opacity=".5"/>
          </svg>

          {/* Phone mockup */}
          <div className="phone-mockup">
            <div className="phone-notch" />
            <div className="phone-screen">
              <div className="phone-header">
                <div className="ussd-code">TooTriv</div>
                <p>PayDay Advance</p>
              </div>
              {menuItems.map(({ num, label }, i) => (
                <div
                  className="phone-menu-item"
                  key={num}
                  style={{ animationDelay: `${0.8 + i * 0.1}s` }}
                >
                  <span className="phone-menu-num">{num}</span>
                  {label}
                </div>
              ))}
              <div className="phone-cta">
                <span>Get quick loans</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-indicator-dot" />
      </div>
    </section>
  )
}
