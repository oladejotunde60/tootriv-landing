import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useScrollPosition } from '../hooks/useAnimations'
import Logo from './Logo'

const navLinks = [
  { to: '/', label: 'Home' },
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
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="nav-inner">
          <Logo variant="nav" />
          {/* Desktop nav links - hidden on mobile via CSS */}
          <div className="nav-links nav-links--desktop">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={location.pathname === to ? 'active' : ''}
              >
                {label}
              </Link>
            ))}
            <Link to="/contact" className="nav-cta">
              Get Started
            </Link>
          </div>
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

      {/* Mobile drawer + overlay - OUTSIDE nav to avoid backdrop-filter stacking context */}
      <div
        className={`nav-overlay ${mobileOpen ? 'overlay-visible' : ''}`}
        onClick={() => setMobileOpen(false)}
      />
      <div className={`nav-drawer ${mobileOpen ? 'drawer-open' : ''}`}>
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
        <Link
          to="/contact"
          className="nav-cta"
          onClick={() => setMobileOpen(false)}
        >
          Get Started
        </Link>
      </div>
    </>
  )
}
