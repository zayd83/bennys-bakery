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
    'w-full bg-transparent border-0 border-b border-[#D4C4B0] rounded-none px-0 py-3 font-sans text-[0.9rem] text-[#2C1F14] placeholder:text-[#6B4C35]/40 focus:border-[#C4622D] focus:outline-none transition-colors'

  const labelClass =
    'block font-sans text-[0.65rem] uppercase tracking-[0.12em] text-[#6B4C35]/60 mb-1'

  return (
    <main className="overflow-hidden">
      <Navigation />

      {/* ── Hero ── */}
      <div className="relative w-full h-[45vh] overflow-hidden">
        <Image src="/herosection.jpg" fill
          className="object-cover object-center" alt="" />
        <div className="absolute inset-0"
          style={{ background: 'rgba(44,31,20,0.45)' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="font-sans text-[0.65rem] uppercase tracking-[0.25em] text-[#D4A853] mb-4">
            RESERVERING
          </span>
          <h1 className="font-serif italic text-[#FAF7F2]"
            style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', lineHeight: 1.1 }}>
            Plan jouw bezoek
          </h1>
          <p className="font-sans font-light text-[#FAF7F2] opacity-70 mt-4 max-w-md text-sm">
            Reserveer een tafel of vraag een bestelling aan. We nemen snel contact op.
          </p>
        </div>
      </div>

      {/* ── Form Section ── */}
      <section className="bg-[#FAF7F2] py-16">
        <div className="mx-auto max-w-[680px] px-6">

          {/* Info cards */}
          <div className="flex gap-6 mb-12">
            <div className="flex-1 border-l-2 border-[#D4A853] pl-4">
              <p className="font-sans text-[0.6rem] uppercase tracking-[0.18em] text-[#D4A853] mb-1">ADRES</p>
              <p className="font-serif italic text-[#2C1F14] text-lg">Van Oldenbarneveltplein 68</p>
              <p className="font-sans text-[#6B4C35] text-sm">3317ES Dordrecht</p>
            </div>
            <div className="w-px bg-[#D4C4B0]" />
            <div className="flex-1 border-l-2 border-[#D4A853] pl-4">
              <p className="font-sans text-[0.6rem] uppercase tracking-[0.18em] text-[#D4A853] mb-1">OPENINGSTIJDEN</p>
              <p className="font-sans text-[#2C1F14] text-sm leading-relaxed">
                Di t/m Za: 08:00 – 18:00<br />
                Zo: 10:00 – 18:00<br />
                Ma: Gesloten
              </p>
            </div>
          </div>

          {/* Type Toggle */}
          <div className="flex gap-8 border-b border-[#D4C4B0] mb-10">
            <button
              type="button"
              onClick={() => setFormType('particulier')}
              className={`pb-3 font-sans text-sm tracking-wide transition-all duration-200 ${
                formType === 'particulier'
                  ? 'text-[#2C1F14] border-b-2 border-[#C4622D] -mb-px font-medium'
                  : 'text-[#6B4C35] opacity-60 hover:opacity-100'
              }`}>
              Particulier
            </button>
            <button
              type="button"
              onClick={() => setFormType('zakelijk')}
              className={`pb-3 font-sans text-sm tracking-wide transition-all duration-200 ${
                formType === 'zakelijk'
                  ? 'text-[#2C1F14] border-b-2 border-[#C4622D] -mb-px font-medium'
                  : 'text-[#6B4C35] opacity-60 hover:opacity-100'
              }`}>
              Zakelijk
            </button>
          </div>

          {/* Form */}
          <form
            action="https://formspree.io/f/PLACEHOLDER"
            method="POST"
          >
            {/* Naam + Email */}
            <div className="grid gap-x-8 gap-y-8 md:grid-cols-2 mb-8">
              <div>
                <label className={labelClass}>Naam *</label>
                <input type="text" name="naam" placeholder="Jouw naam"
                  required value={formData.naam} onChange={handleChange}
                  className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>E-mail *</label>
                <input type="email" name="email" placeholder="jouw@email.nl"
                  required value={formData.email} onChange={handleChange}
                  className={inputClass} />
              </div>
            </div>

            {/* Telefoon + Personen */}
            <div className="grid gap-x-8 gap-y-8 md:grid-cols-2 mb-8">
              <div>
                <label className={labelClass}>Telefoon *</label>
                <input type="tel" name="telefoon" placeholder="+31 6 00 00 00 00"
                  required value={formData.telefoon} onChange={handleChange}
                  className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Aantal personen</label>
                <input type="number" name="personen" placeholder="2" min="1"
                  value={formData.personen} onChange={handleChange}
                  className={inputClass} />
              </div>
            </div>

            {/* Zakelijk only */}
            {formType === 'zakelijk' && (
              <div className="grid gap-x-8 gap-y-8 md:grid-cols-2 mb-8">
                <div>
                  <label className={labelClass}>Bedrijfsnaam *</label>
                  <input type="text" name="bedrijfsnaam" placeholder="Bedrijfsnaam"
                    required value={formData.bedrijfsnaam} onChange={handleChange}
                    className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>BTW-nummer</label>
                  <input type="text" name="btwnummer" placeholder="NL000000000B01"
                    value={formData.btwnummer} onChange={handleChange}
                    className={inputClass} />
                </div>
              </div>
            )}

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-[#D4C4B0]" />
              <span className="text-[#D4A853] text-xs">◆</span>
              <div className="flex-1 h-px bg-[#D4C4B0]" />
            </div>

            {/* Datum + Tijd */}
            <div className="grid gap-x-8 gap-y-8 md:grid-cols-2 mb-8">
              <div>
                <label className={labelClass}>Datum *</label>
                <input type="date" name="datum" required
                  value={formData.datum} onChange={handleChange}
                  className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Tijd *</label>
                <input type="time" name="tijd" required
                  value={formData.tijd} onChange={handleChange}
                  className={inputClass} />
              </div>
            </div>

            {/* Soort aanvraag */}
            <div className="mb-8">
              <label className={labelClass}>Soort aanvraag *</label>
              <select name="soort" required value={formData.soort} onChange={handleChange}
                className={`${inputClass} appearance-none`}
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23C4622D' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0 center' }}>
                <option value="">Kies een optie</option>
                <option value="tafel">Tafel reserveren</option>
                <option value="bedrijfslunch">Bedrijfslunch</option>
                <option value="taarten">Taarten & Patisserie</option>
                <option value="ghorzza">Ghorzza</option>
                <option value="catering">Catering</option>
                <option value="overig">Overig</option>
              </select>
            </div>

            {/* Bestelling */}
            <div className="mb-8">
              <label className={labelClass}>Bestelling / opmerking *</label>
              <textarea name="bestelling" placeholder="Wat wil je bestellen of meegeven?"
                required rows={4} value={formData.bestelling} onChange={handleChange}
                className={inputClass} style={{ resize: 'vertical' }} />
            </div>

            {/* Extra wensen */}
            <div className="mb-8">
              <label className={labelClass}>Extra wensen</label>
              <textarea name="wensen" placeholder="Optioneel"
                rows={3} value={formData.wensen} onChange={handleChange}
                className={inputClass} style={{ resize: 'vertical' }} />
            </div>

            {/* Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer mb-4">
              <div className={`w-4 h-4 mt-0.5 border flex-shrink-0 flex items-center justify-center transition-colors ${
                formData.akkoord
                  ? 'bg-[#C4622D] border-[#C4622D]'
                  : 'border-[#D4C4B0] bg-transparent'
              }`}>
                {formData.akkoord && <span className="text-white text-[10px]">✓</span>}
              </div>
              <input type="checkbox" name="akkoord" required
                checked={formData.akkoord} onChange={handleChange}
                className="sr-only" />
              <span className="font-sans text-[0.8rem] text-[#6B4C35] leading-relaxed">
                Ik ga akkoord dat Benny&apos;s Bakery contact met mij opneemt over deze aanvraag.
              </span>
            </label>

            <input type="hidden" name="type" value={formType} />

            {/* Submit */}
            <button type="submit"
              className="w-full mt-10 py-4 font-sans text-sm tracking-[0.1em] uppercase font-medium text-white transition-all duration-300 hover:brightness-110 active:scale-[0.99]"
              style={{ background: '#C4622D' }}>
              Verstuur aanvraag →
            </button>

            <p className="text-center font-sans text-[0.72rem] text-[#6B4C35] opacity-50 mt-4">
              We gebruiken je gegevens alleen voor deze aanvraag.
            </p>
          </form>

          {/* Divider + WhatsApp */}
          <div className="flex items-center gap-4 my-10">
            <div className="flex-1 h-px bg-[#D4C4B0]" />
            <span className="font-sans text-[0.65rem] uppercase tracking-[0.15em] text-[#6B4C35] opacity-50">of</span>
            <div className="flex-1 h-px bg-[#D4C4B0]" />
          </div>

          <div className="text-center">
            <p className="font-serif italic text-[#2C1F14] text-xl mb-4">Liever direct contact?</p>
            <a href="https://wa.me/31685091092" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full font-sans text-sm text-white transition-all hover:brightness-110"
              style={{ background: '#25D366' }}>
              App ons op WhatsApp
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
