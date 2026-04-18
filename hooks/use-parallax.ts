'use client'
import { useEffect, useRef } from 'react'

export function useParallax(speed: number = 0.3) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.innerWidth < 768) return // no parallax on mobile

    const el = ref.current
    if (!el) return

    let ticking = false

    const update = () => {
      const rect = el.parentElement?.getBoundingClientRect()
      if (!rect) return
      const viewH = window.innerHeight
      const progress = (viewH - rect.top) / (viewH + rect.height)
      const offset = (progress - 0.5) * rect.height * speed * 2
      el.style.transform = `translateY(${offset}px)`
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
  }, [speed])

  return ref
}
