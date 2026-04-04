import { Link } from 'react-router-dom'
import Logo from './Logo'

const productLinks = [
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/features', label: 'Features' },
  { to: '/about', label: 'About' },
  { to: '/problem', label: 'Problem' },
]

const companyLinks = [
  { to: '/market', label: 'Market' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
]

const legalLinks = [
  { href: '/terms-of-service.html', label: 'Terms of Service' },
  { href: '/privacy-policy.html', label: 'Privacy Policy' },
]

const socialLinks = [
  { href: 'mailto:hello@tootriv.com', label: 'hello@tootriv.com' },
  { href: 'https://www.linkedin.com/company/tootriv-finance-limited', label: 'LinkedIn', external: true },
  { href: 'https://x.com/TooTrivHQ', label: 'Twitter / X', external: true },
  { href: 'https://www.instagram.com/tootrivfinance/', label: 'Instagram', external: true },
  { href: 'https://www.facebook.com/profile.php?id=61578451269544', label: 'Facebook', external: true },
]

function FooterColRouter({ title, links }) {
  return (
    <div className="footer-col">
      <h4>{title}</h4>
      {links.map(({ to, label }) => (
        <Link key={label} to={to}>{label}</Link>
      ))}
    </div>
  )
}

function FooterColExternal({ title, links }) {
  return (
    <div className="footer-col">
      <h4>{title}</h4>
      {links.map(({ href, label, external }) => (
        <a
          key={label}
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {label}
        </a>
      ))}
    </div>
  )
}

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo variant="footer" />
            <p>
              TooTriv Finance Limited (RC 9392905) is a registered Nigerian fintech company
              building the future of salary-backed lending in Africa —
              fast, affordable, and accessible to every worker.
            </p>
            <p className="footer-address">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              2 Ibidapo Shobowale Street,<br />Shofunwa Estate, Ikorodu, Lagos, Nigeria
            </p>
          </div>
          <FooterColRouter title="Product" links={productLinks} />
          <FooterColRouter title="Company" links={companyLinks} />
          <FooterColExternal title="Legal" links={legalLinks} />
          <div className="footer-col">
            <h4>Connect</h4>
            {socialLinks.map(({ href, label, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {label}
              </a>
            ))}
            <p className="footer-col-address">
              2 Ibidapo Shobowale Street,<br />Shofunwa Estate, Ikorodu,<br />Lagos, Nigeria
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2025–2026 TooTriv Finance Limited (RC 9392905). All rights reserved.
          {' | '}
          <a href="/terms-of-service.html">Terms</a>
          {' · '}
          <a href="/privacy-policy.html">Privacy</a>
          {' | '}
          2 Ibidapo Shobowale Street, Shofunwa Estate, Ikorodu, Lagos, Nigeria
        </div>
      </div>
    </footer>
  )
}
