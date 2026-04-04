import ScrollReveal from './ScrollReveal'

const marketStats = [
  { icon: '🌍', title: 'Large Workforce', desc: 'Nigeria has a large base of working adults and wage earners.' },
  { icon: '💼', title: 'Recurring Income', desc: 'Formal-sector employees have predictable monthly cash flow needs.' },
  { icon: '🎯', title: 'Focused Entry Point', desc: 'Initial focus on urban salaried workers through employer partnerships.' },
  { icon: '📈', title: 'Accessible Channels', desc: 'USSD, web, and mobile support broader reach across customer segments.' },
]

const competitors = [
  { name: 'Access PayDay Extra', rate: '11%/month', max: '₦2M', tenor: '90 days', diff: 'Bank-backed' },
  { name: 'FairMoney', rate: '10-30%/month', max: '₦500k', tenor: '15-60 days', diff: 'Mobile-only lender' },
  { name: 'Branch', rate: '15-25%/month', max: '₦200k', tenor: '30-60 days', diff: 'No collateral' },
  { name: 'Carbon', rate: '5-30%/month', max: '₦1M', tenor: '90 days', diff: 'Flexible digital' },
]

export default function Market() {
  return (
    <>
      <section id="market" className="section market-section">
        <div className="container">
          <div className="market-grid">
            <ScrollReveal>
              <div className="market-content">
                <h3>Massive Market<br />Opportunity</h3>
                <p>
                  Nigeria presents a strong opportunity for digital lending, driven by a large working population,
                  rising adoption of digital financial services, and persistent short-term liquidity needs among
                  salaried workers. Many employees still lack fast, transparent access to emergency credit when they
                  need it most.
                </p>
                <p>
                  TooTriv is focused first on salaried workers in urban Nigeria through employer partnerships and
                  accessible multi-channel delivery across USSD, web, and mobile, with a longer-term expansion path
                  across West Africa.
                </p>
              </div>
            </ScrollReveal>

            <div className="market-stats">
              {marketStats.map((s, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="market-stat">
                    <div className="market-stat-icon">{s.icon}</div>
                    <div>
                      <h4>{s.title}</h4>
                      <p>{s.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Competitive Advantage</h2>
            <p className="section-subtitle">TooTriv offers the best combination of low rates, fast disbursement, and multi-channel access.</p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="table-wrapper">
              <table className="competitive-table">
                <thead>
                  <tr>
                    <th>Provider</th>
                    <th>Interest Rate</th>
                    <th>Max Loan</th>
                    <th>Tenor</th>
                    <th>Differentiator</th>
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((c, i) => (
                    <tr key={i}>
                      <td>{c.name}</td>
                      <td>{c.rate}</td>
                      <td>{c.max}</td>
                      <td>{c.tenor}</td>
                      <td>{c.diff}</td>
                    </tr>
                  ))}
                  <tr className="highlight-row">
                    <td>🟢 TooTriv</td>
                    <td>7-10%/month</td>
                    <td>₦100k</td>
                    <td>15-90 days</td>
                    <td>Employer partnerships, USSD, fastest approval</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
