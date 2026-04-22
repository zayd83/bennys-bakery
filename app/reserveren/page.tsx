'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

type FormType = 'particulier' | 'zakelijk'

export default function ReserverenPage() {
  const [formType, setFormType] = useState<FormType>('particulier')
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    telefoon: '',
    personen: '',
    bedrijfsnaam: '',
    btwnummer: '',
    datum: '',
    tijd: '',
    soort: '',
    bestelling: '',
    wensen: '',
    akkoord: false,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const inputClass =
    'w-full bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-3 font-sans text-[0.9rem] text-white placeholder:text-white/25 focus:border-[#D4A853] focus:outline-none transition-colors'

  const labelClass =
    'block font-sans text-[0.65rem] uppercase tracking-[0.12em] text-[#D4A853]/60 mb-1'

  const selectArrow = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23D4A853' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")"

  return (
    <main className="overflow-hidden">
      <Navigation />

      {/* ── Hero ── */}
      <div className="relative w-full h-[45vh] overflow-hidden">
        <Image src="/herosection.jpg" fill className="object-cover object-center" alt="" priority />
        <div className="absolute inset-0" style={{ background: 'rgba(10,6,2,0.65)' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-16 bg-[#D4A853]/50" />
            <span className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-[#D4A853]">
              RESERVERING
            </span>
            <div className="h-px w-16 bg-[#D4A853]/50" />
          </div>
          <h1 className="font-serif italic text-[#FAF7F2]"
            style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', lineHeight: 1.1 }}>
            Plan jouw bezoek
          </h1>
          <p className="font-sans font-light text-[#FAF7F2]/60 mt-4 max-w-md text-sm">
            Reserveer een tafel of vraag een bestelling aan. We nemen snel contact op.
          </p>
        </div>
      </div>

      {/* ── Form Section ── */}
      <section style={{ background: '#0f0a06' }} className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-start">

            {/* ── Form Card ── */}
            <div className="rounded-xl p-7 sm:p-10"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>

              <h2 className="font-serif italic text-[#D4A853] text-2xl mb-8">
                Reserveer bij ons
              </h2>

              {/* Particulier / Zakelijk tabs */}
              <div className="flex gap-8 mb-8" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <button type="button" onClick={() => setFormType('particulier')}
                  className={`pb-3 font-sans text-sm tracking-wide transition-all duration-200 ${
                    formType === 'particulier'
                      ? 'text-white border-b-2 border-[#D4A853] -mb-px font-medium'
                      : 'text-white/40 hover:text-white/70'
                  }`}>
                  Particulier
                </button>
                <button type="button" onClick={() => setFormType('zakelijk')}
                  className={`pb-3 font-sans text-sm tracking-wide transition-all duration-200 ${
                    formType === 'zakelijk'
                      ? 'text-white border-b-2 border-[#D4A853] -mb-px font-medium'
                      : 'text-white/40 hover:text-white/70'
                  }`}>
                  Zakelijk
                </button>
              </div>

              {/* Form */}
              <form action="https://formspree.io/f/PLACEHOLDER" method="POST">

                {/* Naam + Email */}
                <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 mb-7">
                  <div>
                    <label className={labelClass}>Naam *</label>
                    <input type="text" name="naam" placeholder="Jouw naam"
                      required value={formData.naam} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>E-mail *</label>
                    <input type="email" name="email" placeholder="jouw@email.nl"
                      required value={formData.email} onChange={handleChange} className={inputClass} />
                  </div>
                </div>

                {/* Telefoon + Personen */}
                <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 mb-7">
                  <div>
                    <label className={labelClass}>Telefoon *</label>
                    <input type="tel" name="telefoon" placeholder="+31 6 00 00 00 00"
                      required value={formData.telefoon} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Aantal personen</label>
                    <input type="number" name="personen" placeholder="2" min="1"
                      value={formData.personen} onChange={handleChange} className={inputClass} />
                  </div>
                </div>

                {/* Zakelijk only */}
                {formType === 'zakelijk' && (
                  <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 mb-7">
                    <div>
                      <label className={labelClass}>Bedrijfsnaam *</label>
                      <input type="text" name="bedrijfsnaam" placeholder="Bedrijfsnaam"
                        required value={formData.bedrijfsnaam} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>BTW-nummer</label>
                      <input type="text" name="btwnummer" placeholder="NL000000000B01"
                        value={formData.btwnummer} onChange={handleChange} className={inputClass} />
                    </div>
                  </div>
                )}

                {/* Divider */}
                <div className="flex items-center gap-4 my-7">
                  <div className="flex-1 h-px bg-white/10" />
                  <span className="text-[#D4A853] text-xs">◆</span>
                  <div className="flex-1 h-px bg-white/10" />
                </div>

                {/* Datum + Tijd */}
                <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 mb-7">
                  <div>
                    <label className={labelClass}>Datum *</label>
                    <input type="date" name="datum" required
                      value={formData.datum} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Tijd *</label>
                    <input type="time" name="tijd" required
                      value={formData.tijd} onChange={handleChange} className={inputClass} />
                  </div>
                </div>

                {/* Soort aanvraag */}
                <div className="mb-7">
                  <label className={labelClass}>Soort aanvraag *</label>
                  <select name="soort" required value={formData.soort} onChange={handleChange}
                    className={`${inputClass} appearance-none`}
                    style={{ backgroundImage: selectArrow, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0 center' }}>
                    <option value="" style={{ background: '#1a0f08' }}>Kies een optie</option>
                    <option value="tafel" style={{ background: '#1a0f08' }}>Tafel reserveren</option>
                    <option value="bedrijfslunch" style={{ background: '#1a0f08' }}>Bedrijfslunch</option>
                    <option value="taarten" style={{ background: '#1a0f08' }}>Taarten & Patisserie</option>
                    <option value="ghorzza" style={{ background: '#1a0f08' }}>Ghorzza</option>
                    <option value="catering" style={{ background: '#1a0f08' }}>Catering</option>
                    <option value="overig" style={{ background: '#1a0f08' }}>Overig</option>
                  </select>
                </div>

                {/* Bestelling */}
                <div className="mb-7">
                  <label className={labelClass}>Bestelling / opmerking *</label>
                  <textarea name="bestelling" placeholder="Wat wil je bestellen of meegeven?"
                    required rows={3} value={formData.bestelling} onChange={handleChange}
                    className={inputClass} style={{ resize: 'vertical' }} />
                </div>

                {/* Extra wensen */}
                <div className="mb-7">
                  <label className={labelClass}>Extra wensen</label>
                  <textarea name="wensen" placeholder="Optioneel"
                    rows={2} value={formData.wensen} onChange={handleChange}
                    className={inputClass} style={{ resize: 'vertical' }} />
                </div>

                {/* Checkbox */}
                <label className="flex items-start gap-3 cursor-pointer mb-2">
                  <div className={`w-4 h-4 mt-0.5 border flex-shrink-0 flex items-center justify-center transition-colors ${
                    formData.akkoord ? 'bg-[#C4622D] border-[#C4622D]' : 'border-white/30 bg-transparent'
                  }`}>
                    {formData.akkoord && <span className="text-white text-[10px]">✓</span>}
                  </div>
                  <input type="checkbox" name="akkoord" required
                    checked={formData.akkoord} onChange={handleChange} className="sr-only" />
                  <span className="font-sans text-[0.8rem] text-white/50 leading-relaxed">
                    Ik ga akkoord dat Benny&apos;s Bakery contact met mij opneemt over deze aanvraag.
                  </span>
                </label>

                <input type="hidden" name="type" value={formType} />

                {/* Submit */}
                <button type="submit"
                  className="w-full mt-8 py-4 font-sans text-sm tracking-[0.12em] uppercase font-medium text-white transition-all duration-300 hover:brightness-110 active:scale-[0.99] rounded-sm"
                  style={{ background: '#C4622D' }}>
                  Verstuur aanvraag →
                </button>

                <p className="text-center font-sans text-[0.7rem] text-white/25 mt-4">
                  We gebruiken je gegevens alleen voor deze aanvraag.
                </p>
              </form>

              {/* WhatsApp */}
              <div className="flex items-center gap-4 mt-10 mb-8">
                <div className="flex-1 h-px bg-white/10" />
                <span className="font-sans text-[0.65rem] uppercase tracking-[0.15em] text-white/25">of</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>
              <div className="text-center">
                <a href="https://wa.me/31685091092" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-3 rounded-full font-sans text-sm text-white transition-all hover:brightness-110"
                  style={{ background: '#25D366' }}>
                  App ons op WhatsApp
                </a>
              </div>
            </div>

            {/* ── Photo (desktop only) ── */}
            <div className="hidden lg:block sticky top-24">
              <div className="relative overflow-hidden rounded-xl" style={{ height: '680px' }}>
                <Image src="/bakery-sfeer-1.jpg" fill className="object-cover" alt="Benny's Bakery" />
                <div className="absolute inset-0" style={{ background: 'rgba(10,6,2,0.15)' }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Info bar ── */}
      <div style={{ background: '#080502', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.07]">
            {[
              { label: 'Adres', value: 'Van Oldenbarneveltplein 68', sub: '3317ES Dordrecht' },
              { label: 'Doordeweeks', value: 'Di t/m Za', sub: '08:00 – 18:00' },
              { label: 'Weekend', value: 'Zondag', sub: '10:00 – 18:00' },
              { label: 'Contact', value: '06 85 09 10 92', sub: 'info@bennysbakery.nl' },
            ].map((item) => (
              <div key={item.label} className="px-6 py-7">
                <p className="font-sans text-[0.6rem] uppercase tracking-[0.18em] text-[#D4A853]/60 mb-2">
                  {item.label}
                </p>
                <p className="font-sans text-sm text-white/80">{item.value}</p>
                <p className="font-sans text-xs text-white/40 mt-0.5">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
