'use client'

import { useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

// Interleaved: food first, then alternate with interior for variety
const allPhotos = [
  '/images/burgers/burger-beef.jpg',
  '/images/sfeer/interieur-dining.jpg',
  '/images/food/ontbijt-spread.jpg',
  '/images/sfeer/patisserie-vitrine.jpg',
  '/images/food/chebakia-spread-sq.jpg',
  '/images/sfeer/cinematic-bloemen.jpg',
  '/images/food/patisserie-citroen.jpg',
  '/images/sfeer/counter-menu.jpg',
  '/images/drinks/koffie-branded.jpg',
  '/images/sfeer/menu-boards.jpg',
  '/images/food/ontbijt-overhead-sq.jpg',
  '/images/sfeer/mural-marokkaans.jpg',
  '/images/drinks/thee-munt.jpg',
  '/images/sfeer/baguettes-rek.jpg',
  '/images/sandwiches/sandwich-vlees.jpg',
  '/images/sfeer/mural-portrait.jpg',
  '/images/burgers/burger-chicken.jpg',
  '/images/food/chebakia-solo.jpg',
  '/images/sandwiches/sandwich-groente.jpg',
  '/images/food/patisserie-gekruid.jpg',
  '/images/food/ontbijt-tajine.jpg',
]

const CARD_WIDTH = 380
const CARD_GAP = 16
const SCROLL_AMOUNT = CARD_WIDTH + CARD_GAP

export default function SfeerimpressiePage() {
  const trackRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const dragScrollLeft = useRef(0)
  const [scrollPos, setScrollPos] = useState(0)

  const updatePos = useCallback(() => {
    if (trackRef.current) setScrollPos(trackRef.current.scrollLeft)
  }, [])

  function scrollTo(direction: 'left' | 'right') {
    const track = trackRef.current
    if (!track) return
    const delta = direction === 'right' ? SCROLL_AMOUNT : -SCROLL_AMOUNT
    track.scrollBy({ left: delta, behavior: 'smooth' })
  }

  // Mouse drag
  function onMouseDown(e: React.MouseEvent) {
    const track = trackRef.current
    if (!track) return
    isDragging.current = true
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
    track.scrollLeft = dragScrollLeft.current - (x - dragStartX.current) * 1.2
  }

  function onMouseUp() {
    isDragging.current = false
    const track = trackRef.current
    if (track) track.style.cursor = 'grab'
  }

  // Touch
  const touchStartX = useRef(0)
  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }
  function onTouchEnd(e: React.TouchEvent) {
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 40) scrollTo(delta < 0 ? 'right' : 'left')
  }

  const atStart = scrollPos < 10
  const atEnd = trackRef.current
    ? scrollPos >= trackRef.current.scrollWidth - trackRef.current.clientWidth - 10
    : false

  return (
    <main style={{ overflowX: 'hidden' }}>
      <Navigation />

      {/* Header */}
      <section className="bg-[#F0E9DE] text-center pt-32 pb-8 px-6">
        <span className="block font-sans text-[0.65rem] uppercase tracking-[0.2em] text-[#D4A853] mb-4">
          SFEERIMPRESSIE
        </span>
        <h1 className="font-serif italic text-[#2C1F14]" style={{ fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: '1.05' }}>
          Een kijkje bij Benny&apos;s Bakery
        </h1>
        <p className="mt-3 font-sans text-sm font-light text-[#6B4C35]">
          Eten, sfeer en het leven achter de toonbank
        </p>
      </section>

      {/* Carousel */}
      <section className="bg-[#F0E9DE] pb-24 relative">

        {/* Left arrow */}
        <button
          onClick={() => scrollTo('left')}
          aria-label="Vorige foto's"
          disabled={atStart}
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#F0E9DE]/95 shadow-md transition-all hover:bg-white hover:shadow-lg disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={22} className="text-[#2C1F14]" />
        </button>

        {/* Right arrow */}
        <button
          onClick={() => scrollTo('right')}
          aria-label="Volgende foto's"
          disabled={atEnd}
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#F0E9DE]/95 shadow-md transition-all hover:bg-white hover:shadow-lg disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight size={22} className="text-[#2C1F14]" />
        </button>

        {/* Track */}
        <div
          ref={trackRef}
          onScroll={updatePos}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="flex gap-4 overflow-x-scroll pl-4 pr-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            cursor: 'grab',
            WebkitOverflowScrolling: 'touch',
          } as React.CSSProperties}
        >
          {allPhotos.map((src, i) => (
            <div
              key={src}
              className="flex-shrink-0 overflow-hidden rounded-lg"
              style={{ width: `${CARD_WIDTH}px`, height: '480px', position: 'relative' }}
            >
              <Image
                src={src}
                fill
                className="object-cover"
                alt={`Benny's Bakery sfeerimpressie ${i + 1}`}
                sizes="380px"
                loading={i < 4 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        {/* Dot indicator */}
        <div className="mt-6 flex justify-center gap-1.5">
          {allPhotos.map((_, i) => {
            const photoWidth = CARD_WIDTH + CARD_GAP
            const currentIndex = Math.round(scrollPos / photoWidth)
            return (
              <div
                key={i}
                className="rounded-full transition-all duration-300"
                style={{
                  width: currentIndex === i ? '20px' : '6px',
                  height: '6px',
                  background: currentIndex === i ? '#C4622D' : '#D4C4B0',
                }}
              />
            )
          })}
        </div>
      </section>

      <Footer />
    </main>
  )
}
