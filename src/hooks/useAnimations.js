import { useState, useEffect, useRef } from 'react'

export function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const revealIfNearViewport = () => {
      const rect = el.getBoundingClientRect()
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight

      if (rect.top < viewportHeight - 40 && rect.bottom > 0) {
        setIsInView(true)
        return true
      }

      return false
    }

    if (revealIfNearViewport()) return

    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px', ...options }
    )

    const fallbackTimer = window.setTimeout(() => {
      setIsInView(true)
      observer.disconnect()
    }, 1200)

    observer.observe(el)
    return () => {
      window.clearTimeout(fallbackTimer)
      observer.disconnect()
    }
  }, [])

  return [ref, isInView]
}

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollY
}

export function useCounter(target, duration = 2000, isActive = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isActive) return
    let start = 0
    const startTime = performance.now()

    const animate = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [isActive, target, duration])

  return count
}
