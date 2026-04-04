import ScrollReveal from './ScrollReveal'

const values = [
  { letter: 'S', name: 'Simplicity', desc: 'If it feels complicated, we are not done yet. We design every product and experience to be clear, easy to use, and stress free.' },
  { letter: 'T', name: 'Trust', desc: 'We earn trust by being transparent and consistent. Clear pricing, no hidden fees, honest communication, and keeping our word every time.' },
  { letter: 'A', name: 'Accessibility', desc: 'Financial tools should be for everyone. We build for real people in real situations, across devices and channels, so access is inclusive and practical.' },
  { letter: 'R', name: 'Responsibility', desc: 'We lend responsibly. We do not push credit people cannot repay, and we measure success by improved outcomes, not just how much we disburse.' },
]

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Who We Are</h2>
          <p className="section-subtitle">Starting from Nigeria, built for Africa and beyond.</p>
        </ScrollReveal>

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

        <ScrollReveal>
          <div className="values-heading">
            <h3>Our Core Values</h3>
          </div>
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
  )
}
