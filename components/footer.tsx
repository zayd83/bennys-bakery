'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Instagram } from 'lucide-react'
import { useFadeIn } from '@/hooks/use-fade-in'

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

function SnapchatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12.166 3c.796 0 3.495.223 4.769 3.073.426.953.323 2.54.239 3.842l-.017.283c-.005.09-.01.177-.014.262a.467.467 0 0 0 .259.45c.202.106.42.16.642.16.156 0 .396-.032.616-.108.178-.062.342-.093.49-.093.226 0 .428.066.601.197.267.2.407.516.385.868-.017.261-.108.508-.272.735a2.08 2.08 0 0 1-.614.576 3.614 3.614 0 0 1-.748.362c-.135.052-.263.102-.38.154-.212.095-.326.167-.36.227-.037.066-.041.168-.012.306.078.377.207.741.355 1.093.448 1.068 1.044 1.978 1.772 2.705.332.332.704.618 1.108.85.49.283.87.42 1.136.458.058.008.18.029.18.029.228.039.359.185.388.434v.003a.652.652 0 0 1-.163.513c-.386.43-.965.716-1.774.877-.078.015-.2.033-.2.033-.152.024-.246.053-.296.091-.059.044-.115.13-.173.263l-.007.016a.963.963 0 0 1-.107.204.68.68 0 0 1-.519.267c-.102 0-.212-.015-.328-.046a4.246 4.246 0 0 0-.759-.107c-.231 0-.464.02-.692.058-.333.056-.62.171-.852.284a3.194 3.194 0 0 0-.64.426c-.489.412-1.073.613-1.782.613-1.031 0-1.833-.543-2.515-1.005l-.007-.005c-.331-.224-.71-.426-1.015-.426a1.14 1.14 0 0 0-.12.006 4.245 4.245 0 0 0-.759.107c-.116.031-.226.046-.328.046a.68.68 0 0 1-.519-.267.963.963 0 0 1-.107-.204l-.007-.016c-.058-.133-.114-.219-.173-.263-.05-.038-.144-.067-.296-.091 0 0-.122-.018-.2-.033-.809-.161-1.388-.447-1.774-.877a.652.652 0 0 1-.163-.513v-.003c.029-.249.16-.395.388-.434 0 0 .122-.021.18-.029.266-.038.646-.175 1.136-.458.404-.232.776-.518 1.108-.85.728-.727 1.324-1.637 1.772-2.705.148-.352.277-.716.355-1.093.029-.138.025-.24-.012-.306-.034-.06-.148-.132-.36-.227-.117-.052-.245-.102-.38-.154a3.614 3.614 0 0 1-.748-.362 2.08 2.08 0 0 1-.614-.576 1.417 1.417 0 0 1-.272-.735c-.022-.352.118-.668.385-.868.173-.131.375-.197.601-.197.148 0 .312.031.49.093.22.076.46.108.616.108.222 0 .44-.054.642-.16a.467.467 0 0 0 .259-.45c-.004-.085-.009-.172-.014-.262l-.017-.283c-.084-1.302-.187-2.889.239-3.842C8.671 3.223 11.37 3 12.166 3z" />
    </svg>
  )
}

export function Footer() {
  const [email, setEmail] = useState('')
  const { ref, visible } = useFadeIn()

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer className="border-t border-text-light/[0.08] bg-dark py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo & Social */}
          <div
            className={`transition-all duration-700 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            <Link href="/" className="font-serif text-[1.4rem] italic text-cream">
              Benny&apos;s Bakery
            </Link>
            <p className="mt-2 font-sans text-[0.8rem] text-cream/40">
              Vers • Lokaal • Ambachtelijk
            </p>
            <div className="mt-6 flex gap-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/50 transition-opacity hover:opacity-100"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/50 transition-opacity hover:opacity-100"
                aria-label="TikTok"
              >
                <TikTokIcon className="h-6 w-6" />
              </Link>
              <Link
                href="https://snapchat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/50 transition-opacity hover:opacity-100"
                aria-label="Snapchat"
              >
                <SnapchatIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div
            className={`transition-all duration-700 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <h3 className="mb-4 font-sans text-sm font-medium text-cream">
              Navigatie
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'Menu', href: '/menu' },
                { label: 'Sfeerimpressie', href: '/sfeerimpressie' },
                { label: 'Over ons', href: '/over-ons' },
                { label: 'Reserveren', href: '/reserveren' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-sans text-[0.85rem] text-cream/60 transition-opacity hover:opacity-100"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Opening Hours */}
          <div
            className={`transition-all duration-700 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h3 className="mb-4 font-sans text-sm font-medium text-cream">
              Openingstijden
            </h3>
            <div className="space-y-1 font-sans text-[0.85rem] text-cream/60">
              <p>Di t/m Za: 08:00 – 18:00</p>
              <p>Zondag: 10:00 – 18:00</p>
              <p>Maandag: Gesloten</p>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div
            className={`transition-all duration-700 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <span className="mb-4 inline-block font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gold">
              BLIJF OP DE HOOGTE
            </span>
            <form onSubmit={handleNewsletterSubmit} className="mt-2 flex gap-2">
              <input
                type="email"
                placeholder="Jouw e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-sm border border-white/20 bg-white/10 px-4 py-3 font-sans text-sm text-cream placeholder:text-cream/50 focus:border-terracotta focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-sm bg-terracotta px-4 py-3 font-sans text-sm text-white transition-all hover:brightness-110"
              >
                →
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          <p className="font-sans text-[0.72rem] text-cream/25">
            © 2025 Benny&apos;s Bakery. Alle rechten voorbehouden.
          </p>
          <p className="font-sans text-[0.72rem] text-cream/25">
            Website door Nexa Marketing
          </p>
        </div>
      </div>
    </footer>
  )
}
