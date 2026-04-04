import PageHeader from '../components/PageHeader'
import ScrollReveal from '../components/ScrollReveal'
import CTA from '../components/CTA'

const values = [
  { letter: 'S', name: 'Simplicity', desc: 'If it feels complicated, we are not done yet. We design every product and experience to be clear, easy to use, and stress free.' },
  { letter: 'T', name: 'Trust', desc: 'We earn trust by being transparent and consistent. Clear pricing, no hidden fees, honest communication, and keeping our word every time.' },
  { letter: 'A', name: 'Accessibility', desc: 'Financial tools should be for everyone. We build for real people in real situations, across devices and channels, so access is inclusive and practical.' },
  { letter: 'R', name: 'Responsibility', desc: 'We lend responsibly. We do not push credit people cannot repay, and we measure success by improved outcomes, not just how much we disburse.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About TooTriv"
        subtitle="We're building the future of salary-backed lending — starting from Nigeria, built for Africa and beyond."
      />

      {/* Vision & Mission */}
      <section className="section">
        <div className="container">
          <div className="vmv-intro">
            <ScrollReveal delay={100}>
              <div className="vmv-box">
                <div className="vmv-icon">🔭</div>
                <h3>Vision</h3>
                <p>To build a world where every person has the financial power to thrive, not just survive.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="vmv-box">
                <div className="vmv-icon">🎯</div>
                <h3>Mission</h3>
                <p>To simplify access to fair, fast credit and smart financial tools that help people handle income gaps, seize opportunities, and build lasting financial stability.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Who We Are - Expanded */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Who We Are</h2>
          </ScrollReveal>
          <div className="page-content-block">
            <ScrollReveal delay={100}>
              <p>
                TooTriv Finance Limited (RC 9392905) is a registered Nigerian fintech company
                headquartered in Lagos. We are building a digital lending platform that provides
                fast, affordable, and collateral-free salary-backed loans to salaried employees.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p>
                Founded in 2025 by Tunde Oladejo and Raji Ibrahim, TooTriv was born from a simple
                observation: millions of Nigerian workers live paycheck to paycheck, and when
                emergencies strike, they have nowhere to turn except predatory lenders. We're
                changing that.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p>
                Our platform enables employees to access up to ₦100,000 in under 5 minutes via
                USSD, Web, or Mobile — with transparent pricing, no hidden fees, and rates
                significantly lower than market competitors.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Our Core Values — STAR</h2>
            <div className="values-acronym">
              <span>S</span>implicity &bull; <span>T</span>rust &bull; <span>A</span>ccessibility &bull; <span>R</span>esponsibility
            </div>
          </ScrollReveal>

          <div className="values-grid">
            {values.map((v, i) => (
              <ScrollReveal key={v.letter} delay={i * 100}>
                <div className="value-card">
                  <div className="value-letter">{v.letter}</div>
                  <h4>{v.name}</h4>
                  <p>{v.desc}</p>
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
