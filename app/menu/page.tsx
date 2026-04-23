'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const pages = [
  '/bennys-menu/foto1.png',
  '/bennys-menu/foto2.png',
  '/bennys-menu/foto3.png',
  '/bennys-menu/foto4.png',
  '/bennys-menu/foto5.png',
  '/bennys-menu/foto7.png',
  '/bennys-menu/foto8.png',
  '/bennys-menu/foto9.png',
  '/bennys-menu/foto10.png',
  '/bennys-menu/foto11.png',
  '/bennys-menu/foto12.png',
]
const TOTAL = pages.length // 11
const FLIP_DURATION = 500

export default function MenuPage() {
  const [currentIndex, setCurrentIndex]     = useState(0)
  const [flipping, setFlipping]             = useState(false)
  const [flipDir, setFlipDir]               = useState<'next' | 'prev'>('next')
  const [isDesktop, setIsDesktop]           = useState(false)
  const [isZoomed, setIsZoomed]             = useState(false)
  const [zoomedSrc, setZoomedSrc]           = useState('')
  const [showSwipeHint, setShowSwipeHint]   = useState(false)
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)

  // SSR-safe desktop detection + resize listener
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768)
    check()
    window.addEventListener('resize', check)
    if (window.innerWidth < 768) {
      setShowSwipeHint(true)
      const t = setTimeout(() => setShowSwipeHint(false), 2500)
      return () => { window.removeEventListener('resize', check); clearTimeout(t) }
    }
    return () => window.removeEventListener('resize', check)
  }, [])

  // Preload next images on index change
  useEffect(() => {
    [currentIndex + 1, currentIndex + 2, currentIndex + 3].forEach((i) => {
      if (i < TOTAL) {
        const img = new window.Image()
        img.src = pages[i]
      }
    })
  }, [currentIndex])

  const step = isDesktop ? 2 : 1

  const canGoNext = useCallback(
    () => currentIndex + step <= TOTAL - 1,
    [currentIndex, step]
  )
  const canGoPrev = useCallback(() => currentIndex > 0, [currentIndex])

  const goNext = useCallback(() => {
    if (!canGoNext() || flipping) return
    setFlipDir('next')
    setFlipping(true)
    setTimeout(() => {
      setCurrentIndex((p) => Math.min(p + step, TOTAL - 1))
      setFlipping(false)
    }, FLIP_DURATION)
  }, [canGoNext, flipping, step])

  const goPrev = useCallback(() => {
    if (!canGoPrev() || flipping) return
    setFlipDir('prev')
    setFlipping(true)
    setTimeout(() => {
      setCurrentIndex((p) => Math.max(0, p - step))
      setFlipping(false)
    }, FLIP_DURATION)
  }, [canGoPrev, flipping, step])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'Escape') closeZoom()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [goNext, goPrev])

  // Touch / swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    const deltaY = e.changedTouches[0].clientY - touchStartY.current
    if (Math.abs(deltaX) < Math.abs(deltaY)) return
    if (Math.abs(deltaX) < 50) return
    if (deltaX < 0) goNext()
    else goPrev()
  }

  // Zoom
  function openZoom(src: string) {
    setZoomedSrc(src)
    setIsZoomed(true)
    document.body.style.overflow = 'hidden'
  }
  function closeZoom() {
    setIsZoomed(false)
    setZoomedSrc('')
    document.body.style.overflow = ''
  }
  function zoomGoNext() {
    const next = Math.min(TOTAL - 1, currentIndex + 1)
    setCurrentIndex(next)
    setZoomedSrc(pages[next])
  }
  function zoomGoPrev() {
    const prev = Math.max(0, currentIndex - 1)
    setCurrentIndex(prev)
    setZoomedSrc(pages[prev])
  }

  const leftSrc  = pages[currentIndex]
  const rightSrc = isDesktop ? (pages[currentIndex + 1] ?? null) : null

  const leftFlipClass  = flipping ? (flipDir === 'next' ? 'flip-out-next' : 'flip-in-prev') : ''
  const rightFlipClass = flipping ? (flipDir === 'next' ? 'flip-in-next'  : 'flip-out-prev') : ''

  const pageCounterLabel = isDesktop
    ? `${currentIndex + 1}–${Math.min(currentIndex + 2, TOTAL)}`
    : String(currentIndex + 1)

  return (
    <main className="overflow-hidden">
      <Navigation />

      {/* ── Hero Header ── */}
      <section
        className="bg-[#F0E9DE] px-6 pb-6 text-center"
        style={{ paddingTop: '100px' }}
      >
        <span className="mb-4 inline-block font-sans text-[0.65rem] uppercase tracking-[0.2em] text-[#C4622D]">
          BENNY&apos;S BAKERY
        </span>
        <h1
          className="font-serif italic text-[#2C1F14]"
          style={{ fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: '1.05' }}
        >
          Onze Menukaart
        </h1>
        <div
          className="mx-auto mt-5 bg-[#C4622D]"
          style={{ width: '48px', height: '1.5px' }}
        />
        <p className="mt-3 font-sans text-[0.75rem] text-[#6B4C35]/60">
          Swipe of gebruik de pijlen &middot; tik om in te zoomen
        </p>
      </section>

      {/* ── Book Viewer ── */}
      <section className="bg-[#FAF7F2] px-4 pb-28 pt-8">
        <div
          className="mx-auto rounded-2xl bg-[#E8DDD0] p-5"
          style={{
            maxWidth: '1080px',
            boxShadow:
              '0 4px 6px rgba(44,31,20,0.04), 0 20px 60px rgba(44,31,20,0.12), 0 0 0 1px rgba(212,168,83,0.12)',
          }}
        >
          <div
            className={`grid gap-2 ${isDesktop ? 'grid-cols-2' : 'grid-cols-1'}`}
            style={{ position: 'relative' }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* LEFT PAGE */}
            <div className={`book-page page-shadow ${leftFlipClass}`}>
              <div
                className="relative cursor-zoom-in overflow-hidden rounded-sm bg-white"
                style={{ aspectRatio: '1 / 1.415' }}
                onClick={() => openZoom(leftSrc)}
              >
                <Image
                  src={leftSrc}
                  fill
                  className="object-cover"
                  alt="Menukaart pagina"
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span className="absolute bottom-3 right-4 font-sans text-[0.6rem] text-[#6B4C35]/40">
                  {currentIndex + 1}
                </span>
              </div>
            </div>

            {/* RIGHT PAGE (desktop only) */}
            {rightSrc && (
              <div className={`book-page page-shadow-left hidden md:block ${rightFlipClass}`}>
                <div
                  className="relative cursor-zoom-in overflow-hidden rounded-sm bg-white"
                  style={{ aspectRatio: '1 / 1.415' }}
                  onClick={() => openZoom(rightSrc)}
                >
                  <Image
                    src={rightSrc}
                    fill
                    className="object-cover"
                    alt="Menukaart pagina"
                    loading="lazy"
                    sizes="50vw"
                  />
                  <span className="absolute bottom-3 left-4 font-sans text-[0.6rem] text-[#6B4C35]/40">
                    {currentIndex + 2}
                  </span>
                </div>
              </div>
            )}

            {/* Swipe hint (mobile only) */}
            {showSwipeHint && (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center md:hidden">
                <div
                  className="animate-fade-out flex items-center gap-2 rounded-full px-4 py-2 font-sans text-sm text-white"
                  style={{ background: 'rgba(44,31,20,0.72)' }}
                >
                  ← Swipe →
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Sticky Bottom Nav ── */}
      <nav
        className="sticky bottom-0 z-40 w-full border-t bg-[#F0E9DE]"
        style={{
          borderColor: 'rgba(44,31,20,0.08)',
          boxShadow: '0 -8px 30px rgba(44,31,20,0.06)',
        }}
      >
        <div className="mx-auto flex max-w-[1080px] items-center justify-center gap-6 px-4 py-3">
          {/* Prev */}
          <button
            onClick={goPrev}
            disabled={!canGoPrev()}
            aria-label="Vorige pagina"
            className="flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-200"
            style={
              canGoPrev()
                ? {
                    borderColor: '#2C1F14',
                    color: '#2C1F14',
                    background: 'white',
                  }
                : {
                    borderColor: '#D4C4B0',
                    color: '#D4C4B0',
                    background: 'transparent',
                    cursor: 'not-allowed',
                  }
            }
            onMouseEnter={(e) => {
              if (!canGoPrev()) return
              ;(e.currentTarget as HTMLButtonElement).style.background = '#2C1F14'
              ;(e.currentTarget as HTMLButtonElement).style.color = 'white'
            }}
            onMouseLeave={(e) => {
              if (!canGoPrev()) return
              ;(e.currentTarget as HTMLButtonElement).style.background = 'white'
              ;(e.currentTarget as HTMLButtonElement).style.color = '#2C1F14'
            }}
          >
            ←
          </button>

          {/* Counter */}
          <div className="flex min-w-[80px] flex-col items-center">
            <span className="font-sans text-sm font-medium text-[#2C1F14]">
              {pageCounterLabel} / {TOTAL}
            </span>
            <span className="mt-0.5 font-sans text-[0.55rem] uppercase tracking-[0.15em] text-[#6B4C35]/60">
              pagina
            </span>
          </div>

          {/* Next */}
          <button
            onClick={goNext}
            disabled={!canGoNext()}
            aria-label="Volgende pagina"
            className="flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-200"
            style={
              canGoNext()
                ? {
                    borderColor: '#2C1F14',
                    color: '#2C1F14',
                    background: 'white',
                  }
                : {
                    borderColor: '#D4C4B0',
                    color: '#D4C4B0',
                    background: 'transparent',
                    cursor: 'not-allowed',
                  }
            }
            onMouseEnter={(e) => {
              if (!canGoNext()) return
              ;(e.currentTarget as HTMLButtonElement).style.background = '#2C1F14'
              ;(e.currentTarget as HTMLButtonElement).style.color = 'white'
            }}
            onMouseLeave={(e) => {
              if (!canGoNext()) return
              ;(e.currentTarget as HTMLButtonElement).style.background = 'white'
              ;(e.currentTarget as HTMLButtonElement).style.color = '#2C1F14'
            }}
          >
            →
          </button>
        </div>
      </nav>

      {/* ── Zoom Lightbox ── */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(44,31,20,0.92)', touchAction: 'none' }}
          onClick={closeZoom}
        >
          <div
            className="flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image + close button */}
            <div className="relative" style={{ maxWidth: '90vw', maxHeight: '80vh' }}>
              <Image
                src={zoomedSrc}
                width={800}
                height={1131}
                className="rounded-lg object-contain shadow-2xl"
                style={{ maxHeight: '80vh', width: 'auto' }}
                alt="Menukaart vergroot"
              />
              <button
                onClick={closeZoom}
                aria-label="Sluiten"
                className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#F0E9DE] text-[#2C1F14] shadow-lg transition-colors hover:bg-white"
                style={{ zIndex: 100 }}
              >
                ✕
              </button>
            </div>

            {/* Arrows below image */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
              <button
                onClick={() => zoomGoPrev()}
                disabled={currentIndex === 0}
                aria-label="Vorige"
                style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  background: '#F0E9DE', color: '#2C1F14',
                  border: '1px solid #D4C4B0', fontSize: '1.2rem',
                  cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
                  opacity: currentIndex === 0 ? 0.3 : 1,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                ←
              </button>
              <button
                onClick={() => zoomGoNext()}
                disabled={currentIndex === TOTAL - 1}
                aria-label="Volgende"
                style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  background: '#F0E9DE', color: '#2C1F14',
                  border: '1px solid #D4C4B0', fontSize: '1.2rem',
                  cursor: currentIndex === TOTAL - 1 ? 'not-allowed' : 'pointer',
                  opacity: currentIndex === TOTAL - 1 ? 0.3 : 1,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
