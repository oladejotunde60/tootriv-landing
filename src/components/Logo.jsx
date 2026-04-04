import { Link } from 'react-router-dom'

export default function Logo({ variant = 'nav' }) {
  const id = variant === 'nav' ? 'navGrad' : 'footGrad'
  return (
    <Link to="/" className="logo" aria-label="TooTriv Home">
      <svg className="logo-mark" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0A8754" />
            <stop offset="100%" stopColor="#065F3B" />
          </linearGradient>
        </defs>
        <rect x="16" y="40" width="168" height="28" rx="8" ry="8" fill={`url(#${id})`} />
        <rect x="48" y="40" width="28" height="124" rx="8" ry="8" fill={`url(#${id})`} />
        <rect x="124" y="40" width="28" height="124" rx="8" ry="8" fill={`url(#${id})`} />
        <circle cx="100" cy="130" r="10" fill="#F7B32B" />
      </svg>Too<span>Triv</span>
    </Link>
  )
}
