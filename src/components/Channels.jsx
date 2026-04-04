import ScrollReveal from './ScrollReveal'

const channels = [
  { icon: '📞', title: 'USSD', desc: 'Dial a short USSD code from any phone — no internet required. Perfect for the 70% of Nigerians without smartphones.', badge: 'Coming Soon', badgeClass: 'badge-soon' },
  { icon: '🌐', title: 'Web Application', desc: 'Full-featured responsive web portal built with React. Apply, manage loans, and view repayment schedules online.', badge: 'Beta', badgeClass: 'badge-beta' },
  { icon: '📲', title: 'Mobile App', desc: 'Native iOS and Android apps with push notifications, biometric login, and seamless UX — coming soon.', badge: 'Coming Soon', badgeClass: 'badge-soon' },
]

export default function Channels() {
  return (
    <section id="channels" className="section channels-section">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Access Channels</h2>
          <p className="section-subtitle">Financial inclusion means meeting every customer where they are — from feature phones to smartphones.</p>
        </ScrollReveal>

        <div className="channels-grid">
          {channels.map((c, i) => (
            <ScrollReveal key={i} delay={i * 120}>
              <div className="channel-card">
                <div className="channel-icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
                <span className={`channel-badge ${c.badgeClass}`}>{c.badge}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
