'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import { useFadeIn } from '@/hooks/use-fade-in'

export function Location() {
  const { ref, visible } = useFadeIn()

  return (
    <section id="over-ons" className="relative py-16 sm:py-24 lg:py-32" style={{ backgroundColor: '#C4A882' }} ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Text Content */}
          <div
            className={`transition-all duration-400 ease-out ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <span className="mb-4 inline-block font-sans text-[0.65rem] uppercase tracking-[0.2em] text-[#2C1F14]">
              BEZOEK ONS
            </span>
            <h2 className="mb-8 font-serif text-[clamp(2rem,3.5vw,3rem)] italic text-[#2C1F14]">
              Van Oldenbarneveltplein 68
            </h2>

            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-3 text-[#2C1F14]">
                <MapPin size={18} className="text-[#2C1F14]" />
                <span className="font-sans text-[0.95rem]">3317ES Dordrecht</span>
              </div>
              <div className="flex items-center gap-3 text-[#2C1F14]">
                <Phone size={18} className="text-[#2C1F14]" />
                <Link href="tel:+31685091092" className="font-sans hover:opacity-70">
                  06 85 09 10 92
                </Link>
              </div>
              <div className="flex items-center gap-3 text-[#2C1F14]">
                <Mail size={18} className="text-[#2C1F14]" />
                <Link
                  href="mailto:info@bennysbakery.nl"
                  className="font-sans hover:opacity-70"
                >
                  info@bennysbakery.nl
                </Link>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="mb-2 font-sans text-sm font-medium text-[#2C1F14]">
                Openingstijden
              </h3>
              <div className="space-y-1 font-sans text-sm text-[#2C1F14]/75">
                <p>Di t/m Za: 08:00 – 18:00</p>
                <p>Zondag: 10:00 – 18:00</p>
                <p>Maandag: Gesloten</p>
              </div>
            </div>

            <Link
              href="https://maps.google.com/maps?q=Van+Oldenbarneveltplein+68,+Dordrecht"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[#C4622D] transition-all hover:underline"
            >
              Open in Google Maps →
            </Link>
          </div>

          {/* Right - Map */}
          <div
            className={`overflow-hidden rounded-lg transition-all duration-400 ease-out ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            <iframe
              src="https://maps.google.com/maps?q=Van+Oldenbarneveltplein+68,+Dordrecht&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '280px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locatie Benny's Bakery"
              className="h-[280px] sm:h-[380px] lg:h-[480px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
