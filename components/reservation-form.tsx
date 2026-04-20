'use client'

import { useState } from 'react'
import { useInView } from '@/hooks/use-in-view'

type FormType = 'particulier' | 'zakelijk'

export function ReservationForm() {
  const { ref, isInView } = useInView()
  const [formType, setFormType] = useState<FormType>('particulier')
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    telefoon: '',
    bedrijfsnaam: '',
    btwnummer: '',
    datum: '',
    tijd: '',
    soort: '',
    personen: '',
    bestelling: '',
    wensen: '',
    akkoord: false,
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <section id="reserveren" className="bg-cream py-32" ref={ref}>
      <div className="mx-auto max-w-[720px] px-6">
        <div className="mb-8 text-center">
          <span
            className={`mb-4 inline-block font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gold ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            RESERVERING OF BESTELLING
          </span>
          <h2
            className={`font-serif text-[clamp(2.5rem,3.5vw,3rem)] italic text-text-dark ${
              isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'
            }`}
          >
            Plan jouw bezoek
          </h2>
        </div>

        {/* Toggle Pills */}
        <div
          className={`mb-8 flex justify-center gap-2 ${
            isInView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'
          }`}
        >
          <button
            type="button"
            onClick={() => setFormType('particulier')}
            className={`rounded-full px-6 py-2 font-sans text-sm transition-all ${
              formType === 'particulier'
                ? 'bg-terracotta text-white'
                : 'border border-[#D4C4B0] bg-white text-text-dark hover:border-stone-400'
            }`}
          >
            Particulier
          </button>
          <button
            type="button"
            onClick={() => setFormType('zakelijk')}
            className={`rounded-full px-6 py-2 font-sans text-sm transition-all ${
              formType === 'zakelijk'
                ? 'bg-terracotta text-white'
                : 'border border-[#D4C4B0] bg-white text-text-dark hover:border-stone-400'
            }`}
          >
            Zakelijk
          </button>
        </div>

        {/* Form */}
        <form
          action="https://formspree.io/f/PLACEHOLDER"
          method="POST"
          className={`space-y-4 ${
            isInView ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'
          }`}
        >
          {/* Row 1: Name, Email, Phone */}
          <div className="grid gap-4 md:grid-cols-3">
            <input
              type="text"
              name="naam"
              placeholder="Naam *"
              required
              value={formData.naam}
              onChange={handleChange}
              className="w-full rounded-sm border border-[#D4C4B0] bg-white px-4 py-3 font-sans text-text-dark placeholder:text-stone-400 focus:border-terracotta focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail *"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-sm border border-[#D4C4B0] bg-white px-4 py-3 font-sans text-text-dark placeholder:text-stone-400 focus:border-terracotta focus:outline-none"
            />
            <input
              type="tel"
              name="telefoon"
              placeholder="Telefoon *"
              required
              value={formData.telefoon}
              onChange={handleChange}
              className="w-full rounded-sm border border-[#D4C4B0] bg-white px-4 py-3 font-sans text-text-dark placeholder:text-stone-400 focus:border-terracotta focus:outline-none"
            />
          </div>

          {/* Zakelijk Fields */}
          {formType === 'zakelijk' && (
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                name="bedrijfsnaam"
                placeholder="Bedrijfsnaam *"
                required
                value={formData.bedrijfsnaam}
                onChange={handleChange}
                className="w-full rounded-sm border border-[#D4C4B0] bg-white px-4 py-3 font-sans text-text-dark placeholder:text-stone-400 focus:border-terracotta focus:outline-none"
              />
              <input
                type="text"
                name="btwnummer"
                placeholder="BTW-nummer"
                value={formData.btwnummer}
                onChange={handleChange}
                className="w-full rounded-sm border border-[#D4C4B0] bg-white px-4 py-3 font-sans text-text-dark placeholder:text-stone-400 focus:border-terracotta focus:outline-none"
              />
            </div>
          )}

          {/* Row 2: Date, Time */}
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="date"
              name="datum"
              required
              value={formData.datum}
              onChange={handleChange}
              className="w-full rounded-sm border border-[#D4C4B0] bg-white px-4 py-3 font-sans text-text-dark focus:border-terracotta focus:outline-none"
            />
            <input
              type="time"
              name="tijd"
              required
              value={formData.tijd}
              onChange={handleChange}
              className="w-full rounded-sm border border-[#D4C4B0] bg-white px-4 py-3 font-sans text-text-dark focus:border-terracotta focus:outline-none"
            />
          </div>

          {/* Row 3: Soort, Personen */}
          <div className="grid gap-4 md:grid-cols-2">
            <select
              name="soort"
              required
              value={formData.soort}
              onChange={handleChange}
              className="w-full rounded-sm border border-[#D4C4B0] bg-white px-4 py-3 font-sans text-text-dark focus:border-terracotta focus:outline-none"
            >
              <option value="">Soort aanvraag *</option>
              <option value="bedrijfslunch">Bedrijfslunch</option>
              <option value="ghorzza">Ghorzza</option>
              <option value="taarten">Taarten & Patisserie</option>
              <option value="overig">Overig</option>
            </select>
            <input
              type="number"
              name="personen"
              placeholder="Aantal personen *"
              required
              min="1"
              value={formData.personen}
              onChange={handleChange}
              className="w-full rounded-sm border border-[#D4C4B0] bg-white px-4 py-3 font-sans text-text-dark placeholder:text-stone-400 focus:border-terracotta focus:outline-none"
            />
          </div>

          {/* Textarea: Bestelling */}
          <textarea
            name="bestelling"
            placeholder="Wat wil je bestellen? *"
            required
            rows={4}
            value={formData.bestelling}
            onChange={handleChange}
            className="w-full rounded-sm border border-[#D4C4B0] bg-white px-4 py-3 font-sans text-text-dark placeholder:text-stone-400 focus:border-terracotta focus:outline-none"
          />

          {/* Textarea: Wensen */}
          <textarea
            name="wensen"
            placeholder="Extra wensen (optioneel)"
            rows={3}
            value={formData.wensen}
            onChange={handleChange}
            className="w-full rounded-sm border border-[#D4C4B0] bg-white px-4 py-3 font-sans text-text-dark placeholder:text-stone-400 focus:border-terracotta focus:outline-none"
          />

          {/* Checkbox */}
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              name="akkoord"
              required
              checked={formData.akkoord}
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-[#D4C4B0] text-terracotta focus:ring-terracotta"
            />
            <span className="font-sans text-sm text-text-dark/70">
              Ik ga akkoord met de verwerking van mijn gegevens voor deze
              reservering of bestelling.
            </span>
          </label>

          {/* Hidden form type field */}
          <input type="hidden" name="type" value={formType} />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-sm bg-terracotta py-4 font-sans font-medium text-white transition-all hover:brightness-110"
          >
            Verstuur aanvraag
          </button>
        </form>
      </div>
    </section>
  )
}
