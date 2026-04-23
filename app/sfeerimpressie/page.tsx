'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const allPhotos = [
  '/food-dish-1.jpg',
  '/food-dish-2.jpg',
  '/food-dish-3.jpg',
  '/food-dish-4.jpg',
  '/food-dish-5.jpg',
  '/food-dish-6.jpg',
  '/food-dish-7.jpg',
  '/food-dish-8.jpg',
  '/food-dish-9.jpg',
  '/bakery-sfeer-1.jpg',
  '/bakery-sfeer-2.jpg',
  '/herosection.jpg',
]

const photos = [...allPhotos, ...allPhotos]

export default function SfeerimpressiePage() {
  const trackRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const isPausedRef = useRef(false)
  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const dragScrollLeft = useRef(0)
  const touchStartX = useRef(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  // Auto scroll
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    intervalRef.current = setInterval(() => {
      if (isPausedRef.current || !track) return
      track.scrollLeft += 1
      const half = track.scrollWidth / 2
      if (track.scrollLeft >= half) {
        track.scrollLeft = 0
      }
    }, 30)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  function updateArrows() {
    const track = trackRef.current
    if (!track) return
    setCanScrollLeft(track.scrollLeft > 4)
    setCanScrollRight(track.scrollLeft < track.scrollWidth - track.clientWidth - 4)
  }

  function scrollBy(px: number) {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: px, behavior: 'smooth' })
  }

  // Mouse drag
  function onMouseDown(e: React.MouseEvent) {
    const track = trackRef.current
    if (!track) return
    isDragging.current = true
    isPausedRef.current = true
    dragStartX.current = e.pageX - track.offsetLeft
    dragScrollLeft.current = track.scrollLeft
    track.style.cursor = 'grabbing'
  }

  function onMouseMove(e: React.MouseEvent) {
    if (!isDragging.current) return
    const track = trackRef.current
    if (!track) return
    e.preventDefault()
    const x = e.pageX - track.offsetLeft
    const walk = (x - dragStartX.current) * 1.2
    track.scrollLeft = dragScrollLeft.current - walk
  }

  function onMouseUp() {
    isDragging.current = false
    isPausedRef.current = false
    const track = trackRef.current
    if (track) track.style.cursor = 'grab'
  }

  // Touch swipe
  function onTouchStart(e: React.TouchEvent) {
    isPausedRef.current = true
    touchStartX.current = e.touches[0].clientX
  }

  function onTouchEnd(e: React.TouchEvent) {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(deltaX) > 50) {
      scrollBy(deltaX < 0 ? 400 : -400)
    }
    isPausedRef.current = false
  }

  return (
    <main style={{ overflowX: 'hidden' }}>
      <Navigation />

      {/* Header */}
      <section className="bg-[#F0E9DE] text-center pt-32 pb-8 px-6">
        <span className="block font-sans text-[0.65rem] uppercase tracking-[0.2em] text-[#D4A853] mb-4">
          SFEERIMPRESSIE
        </span>
        <h1 className="font-serif italic text-[#2C1F14]" style={{ fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: '1.05' }}>
          Een kijkje in onze keuken
        </h1>
      </section>

      {/* Carousel */}
      <section className="bg-[#F0E9DE] pb-20 relative">
        {/* Left arrow */}
        <button
          onClick={() => scrollBy(-400)}
          aria-label="Scroll left"
          style={{
            position: 'absolute',
            left: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: 'rgba(240,233,222,0.9)',
            color: '#2C1F14',
            border: 'none',
            boxShadow: '0 4px 16px rgba(44,31,20,0.18)',
            cursor: 'pointer',
            fontSize: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: canScrollLeft ? 1 : 0.35,
            transition: 'opacity 0.2s',
          }}
        >
          ←
        </button>

        {/* Right arrow */}
        <button
          onClick={() => scrollBy(400)}
          aria-label="Scroll right"
          style={{
            position: 'absolute',
            right: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: 'rgba(240,233,222,0.9)',
            color: '#2C1F14',
            border: 'none',
            boxShadow: '0 4px 16px rgba(44,31,20,0.18)',
            cursor: 'pointer',
            fontSize: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: canScrollRight ? 1 : 0.35,
            transition: 'opacity 0.2s',
          }}
        >
          →
        </button>

        {/* Track */}
        <div
          ref={trackRef}
          className="carousel-track"
          onScroll={updateArrows}
          onMouseEnter={() => { isPausedRef.current = true }}
          onMouseLeave={() => {
            if (!isDragging.current) isPausedRef.current = false
            onMouseUp()
          }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={{
            display: 'flex',
            gap: '1rem',
            overflowX: 'scroll',
            overflowY: 'hidden',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            cursor: 'grab',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            WebkitOverflowScrolling: 'touch',
          } as React.CSSProperties}
        >
          {photos.map((src, i) => (
            <div
              key={i}
              style={{
                width: '380px',
                height: '480px',
                flexShrink: 0,
                borderRadius: '0.5rem',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <Image
                src={src}
                fill
                className="object-cover"
                alt={`Benny's Bakery sfeer ${(i % allPhotos.length) + 1}`}
                sizes="380px"
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
