import ScrollReveal from './ScrollReveal'

const problems = [
  { icon: '💸', title: 'Paycheck-to-Paycheck Living', desc: 'Unforeseen expenses — medical bills, school fees, family emergencies — create urgent liquidity needs for salaried workers.' },
  { icon: '🏦', title: 'Slow Bank Processes', desc: 'Traditional banks offer slow, paperwork-heavy loan processes that can take weeks to approve even small amounts.' },
  { icon: '🦈', title: 'Predatory Lending', desc: 'Informal money lenders exploit workers with predatory interest rates of 15-30% per month, trapping them in cycles of debt.' },
  { icon: '📵', title: 'Digital Divide', desc: 'Many workers rely on basic feature phones. Existing digital lenders require smartphones and data, excluding the underbanked.' },
]

export default function Problem() {
  return (
    <section id="problem" className="section problem-section">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">The Problem We're Solving</h2>
          <p className="section-subtitle">Millions of Nigerian workers live paycheck to paycheck. When emergencies strike, they have nowhere to turn.</p>
        </ScrollReveal>

        <div className="problem-grid">
          {problems.map((p, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="problem-card">
                <div className="problem-icon">{p.icon}</div>
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
