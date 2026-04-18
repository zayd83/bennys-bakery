export function Marquee() {
  const text = "VERS GEBAKKEN · DORDRECHT · DI T/M ZA 08–18 ✦ ZO 10–18 · ONTBIJT · LUNCH · DINER · PATISSERIE ✦ "
  
  return (
    <section className="overflow-hidden bg-terracotta py-4">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="mx-4 font-sans text-[0.72rem] uppercase tracking-[0.1em] text-white"
          >
            {text}
          </span>
        ))}
      </div>
    </section>
  )
}
