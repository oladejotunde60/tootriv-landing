import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useScrollPosition } from '../hooks/useAnimations'
import Logo from './Logo'

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/problem', label: 'Problem' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/features', label: 'Features' },
  { to: '/team', label: 'Team' },
  { to: '/market', label: 'Market' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const scrollY = useScrollPosition()
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrolled = scrollY > 40
  const location = useLocation()

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="nav-inner">
        <Logo variant="nav" />
        <div className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`}>
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={location.pathname === to ? 'active' : ''}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://web.non-prod.tootriv.com/"
            className="nav-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </a>
        </div>
        {mobileOpen && (
          <div className="nav-overlay" onClick={() => setMobileOpen(false)} />
        )}
        <button
          className="hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          <span className={mobileOpen ? 'line line--open' : 'line'} />
          <span className={mobileOpen ? 'line line--open' : 'line'} />
          <span className={mobileOpen ? 'line line--open' : 'line'} />
        </button>
      </div>
    </nav>
  )
}
