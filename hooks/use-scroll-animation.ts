'use client'
import { useEffect, useRef, useState } from 'react'

export function useScrollProgress() {
  const ref = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let ticking = false

    const update = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const raw = 1 - rect.bottom / (vh + rect.height)
      setProgress(Math.min(1, Math.max(0, raw)))
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { ref, progress }
}

export function useParallaxContainer(
  speed: number = 0.15,
  direction: 'up' | 'down' | 'left' | 'right' = 'up'
) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.innerWidth < 768) return

    let ticking = false

    const update = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const center = rect.top + rect.height / 2
      const offset = (vh / 2 - center) * speed

      if (direction === 'up' || direction === 'down') {
        const y = direction === 'up' ? offset : -offset
        el.style.transform = `translateY(${y}px)`
      } else {
        const x = direction === 'right' ? offset : -offset
        el.style.transform = `translateX(${x}px)`
      }
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed, direction])

  return ref
}
