'use client'

import { useEffect, useRef } from 'react'

export function TimelineProgress() {
  const fillRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = document.getElementById('timeline-section')
    const fill = fillRef.current
    if (!container || !fill) return

    const onScroll = () => {
      const rect = container.getBoundingClientRect()
      const containerHeight = container.offsetHeight
      const viewH = window.innerHeight
      const scrolled = Math.max(0, viewH - rect.top)
      const total = containerHeight + viewH
      const progress = Math.min(1, scrolled / total)
      fill.style.transform = `scaleY(${progress})`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 lg:block">
      <div className="absolute inset-0 bg-[rgba(212,196,176,0.25)]" />
      <div
        ref={fillRef}
        className="absolute left-0 right-0 top-0 bg-[#D4C4B0]"
        style={{
          bottom: 0,
          transformOrigin: 'top',
          transform: 'scaleY(0)',
          transition: 'transform 0.1s linear',
        }}
      />
    </div>
  )
}
