import { useInView, useCounter } from '../hooks/useAnimations'

const stats = [
  { target: 15, suffix: 'M+', label: 'Salaried Workers in Nigeria' },
  { target: 5, prefix: '< ', suffix: ' min', label: 'Loan Disbursement Time' },
  { target: 10, prefix: '7-', suffix: '%', label: 'Monthly Interest Rate' },
  { target: 20, suffix: '%+', label: 'Market CAGR Growth' },
]

function StatItem({ target, prefix = '', suffix = '', label }) {
  const [ref, isInView] = useInView()
  const count = useCounter(target, 1800, isInView)

  return (
    <div ref={ref} className="stat-item">
      <div className="stat-number">
        {prefix}{count}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="stats-bar">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <StatItem key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
