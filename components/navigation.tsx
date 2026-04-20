'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#aanraders', label: 'Aanraders' },
  { href: '/over-ons', label: 'Over ons' },
]

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <nav
        className="fixed left-0 right-0 top-0 z-50"
        style={{
          background: 'rgba(250, 247, 242, 0.88)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(212,168,83,0.12)',
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">

            {/* LEFT — Logo */}
            <Link href="#home" className="relative z-10 flex items-center">
              <Image
                src="/logo-bennys.png"
                alt="Benny's Bakery"
                width={120}
                height={52}
                className="object-contain"
                priority
              />
            </Link>

            {/* CENTER — Nav links, truly centered */}
            <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-[0.9rem] tracking-[0.04em] text-[#2C1F14]/75 transition-colors hover:text-terracotta"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* RIGHT — CTA Button */}
            <div className="relative z-10 hidden md:block">
              <Link
                href="#reserveren"
                className="rounded-sm bg-terracotta px-7 py-3 font-sans text-[0.9rem] font-medium text-white transition-all hover:brightness-110"
              >
                Reserveren
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="relative z-10 text-[#2C1F14] md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-dark">
          <div className="flex h-full flex-col p-6">
            <div className="flex items-center justify-between">
              <span className="font-serif text-[1.4rem] italic text-text-light">
                Benny&apos;s Bakery
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-text-light"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="mt-16 flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-serif text-2xl italic text-text-light"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#reserveren"
                className="mt-8 rounded-sm bg-terracotta px-8 py-3 font-sans text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reserveren
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
