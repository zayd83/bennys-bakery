'use client'

import { useState } from 'react'
import Link from 'next/link'
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
    'w-full rounded-[6px] border border-[#D4C4B0] bg-white px-4 py-[0.875rem] font-sans text-[#2C1F14] placeholder:text-[#6B4C35]/50 focus:border-[#C4622D] focus:outline-none transition-colors'

  return (
    <main className="overflow-hidden">
      <Navigation />

      {/* ── Hero Header ── */}
      <section className="bg-[#F0E9DE] px-6 pb-20 pt-40 text-center">
        <span className="mb-4 inline-block font-sans text-[0.65rem] uppercase tracking-[0.2em] text-[#C4622D]">
          RESERVERING
        </span>
        <h1
          className="font-serif italic text-[#2C1F14]"
          style={{ fontSize: '3.5rem', lineHeight: '1.05' }}
        >
          Plan jouw bezoek
        </h1>
        <p className="mx-auto mt-4 max-w-md font-sans text-base font-light leading-relaxed text-[#6B4C35]">
          Reserveer een tafel of vraag een bestelling aan. We nemen snel contact op.
        </p>
        <div className="mx-auto mt-6 bg-[#C4622D]" style={{ width: '60px', height: '1.5px' }} />
      </section>

      {/* ── Form Section ── */}
      <section className="bg-[#FAF7F2] py-20">
        <div className="mx-auto max-w-[760px] px-6">

          {/* Info cards */}
          <div className="mb-12 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-[#E8DDD0] p-6">
              <p className="mb-1 font-sans text-sm font-medium text-[#2C1F14]">📍 Adres</p>
              <p className="font-sans text-[0.9rem] text-[#6B4C35]">
                Van Oldenbarneveltplein 68
                <br />
                3317ES Dordrecht
              </p>
            </div>
            <div className="rounded-lg bg-[#E8DDD0] p-6">
              <p className="mb-1 font-sans text-sm font-medium text-[#2C1F14]">🕐 Openingstijden</p>
              <p className="font-sans text-[0.9rem] text-[#6B4C35]">
                Di t/m Za: 08:00 – 18:00
                <br />
                Zo: 10:00 – 18:00
                <br />
                Ma: Gesloten
              </p>
            </div>
          </div>

          {/* Type Toggle */}
          <div
            className="mb-8 flex w-full overflow-hidden rounded-full border border-[#D4C4B0]"
            style={{ padding: '3px' }}
          >
            <button
              type="button"
              onClick={() => setFormType('particulier')}
              className="flex-1 rounded-full py-2.5 font-sans text-sm transition-all"
              style={
                formType === 'particulier'
                  ? { background: '#2C1F14', color: '#FAF7F2' }
                  : { background: 'transparent', color: '#6B4C35' }
              }
            >
              Particulier
            </button>
            <button
              type="button"
              onClick={() => setFormType('zakelijk')}
              className="flex-1 rounded-full py-2.5 font-sans text-sm transition-all"
              style={
                formType === 'zakelijk'
                  ? { background: '#2C1F14', color: '#FAF7F2' }
                  : { background: 'transparent', color: '#6B4C35' }
              }
            >
              Zakelijk
            </button>
          </div>

          {/* Form */}
          <form
            action="https://formspree.io/f/PLACEHOLDER"
            method="POST"
            className="space-y-4"
          >
            {/* Row 1: Naam + Email */}
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                name="naam"
                placeholder="Naam *"
                required
                value={formData.naam}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail *"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Row 2: Telefoon + Personen */}
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="tel"
                name="telefoon"
                placeholder="Telefoon *"
                required
                value={formData.telefoon}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                type="number"
                name="personen"
                placeholder="Aantal personen"
                min="1"
                value={formData.personen}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Zakelijk only */}
            {formType === 'zakelijk' && (
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  name="bedrijfsnaam"
                  placeholder="Bedrijfsnaam *"
                  required
                  value={formData.bedrijfsnaam}
                  onChange={handleChange}
                  className={inputClass}
                />
                <input
                  type="text"
                  name="btwnummer"
                  placeholder="BTW-nummer"
                  value={formData.btwnummer}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            )}

            {/* Row 3: Datum + Tijd */}
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="date"
                name="datum"
                required
                value={formData.datum}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                type="time"
                name="tijd"
                required
                value={formData.tijd}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Row 4: Soort aanvraag */}
            <div className="relative">
              <select
                name="soort"
                required
                value={formData.soort}
                onChange={handleChange}
                className={`${inputClass} appearance-none`}
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23C4622D' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}
              >
                <option value="">Soort aanvraag *</option>
                <option value="tafel">Tafel reserveren</option>
                <option value="bedrijfslunch">Bedrijfslunch</option>
                <option value="taarten">Taarten & Patisserie</option>
                <option value="ghorzza">Ghorzza</option>
                <option value="catering">Catering</option>
                <option value="overig">Overig</option>
              </select>
            </div>

            {/* Row 5: Bestelling */}
            <textarea
              name="bestelling"
              placeholder="Wat wil je bestellen / opmerking? *"
              required
              rows={5}
              value={formData.bestelling}
              onChange={handleChange}
              className={inputClass}
              style={{ minHeight: '120px', resize: 'vertical' }}
            />

            {/* Row 6: Extra wensen */}
            <textarea
              name="wensen"
              placeholder="Extra wensen (optioneel)"
              rows={3}
              value={formData.wensen}
              onChange={handleChange}
              className={inputClass}
              style={{ resize: 'vertical' }}
            />

            {/* Checkbox */}
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                name="akkoord"
                required
                checked={formData.akkoord}
                onChange={handleChange}
                className="mt-0.5 h-4 w-4 cursor-pointer rounded border-[#D4C4B0] accent-[#C4622D]"
              />
              <span className="font-sans text-[0.875rem] text-[#6B4C35]">
                Ik ga akkoord dat Benny&apos;s Bakery contact met mij opneemt over deze aanvraag.
              </span>
            </label>

            <input type="hidden" name="type" value={formType} />

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-[6px] bg-[#C4622D] py-[1.1rem] font-sans text-base font-medium tracking-wide text-white transition-all hover:brightness-110"
            >
              Verstuur aanvraag →
            </button>

            <p className="text-center font-sans text-[0.75rem] text-[#6B4C35]/60">
              We gebruiken je gegevens alleen voor deze aanvraag. Geen spam.
            </p>
          </form>

          {/* WhatsApp alternative */}
          <div className="mt-12">
            <div className="mb-8 h-px w-full bg-[#D4C4B0]" />
            <p className="mb-6 text-center font-sans text-[#6B4C35]">Liever direct contact?</p>
            <div className="flex justify-center">
              <Link
                href="https://wa.me/31685091092"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-10 py-4 font-sans font-medium text-white transition-all hover:brightness-110"
                style={{ background: '#25D366' }}
              >
                App ons op WhatsApp
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
