export function Hero() {
  return (
    <section className="relative bg-[url('https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center text-white" aria-label="Resort hero">
      <div className="absolute inset-0 bg-black/45 dark:bg-black/60" />
      <div className="relative container mx-auto px-4 py-24 sm:py-28">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm uppercase tracking-widest text-amber-200">Mfangano Island, Lake Victoria</p>
          <h1 className="text-4xl font-bold leading-tight sm:text-6xl">Kadongo Resort</h1>
          <p className="text-lg text-amber-100 max-w-xl">Where Lake Victoria meets authentic luxury. An intimate escape on Mfangano Island for those who seek more than a stay—they seek a story.</p>
          <div className="flex items-center gap-3">
            <a href="#booking" className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-primary-dark">Reserve Your Escape</a>
            <a href="#amenities" className="rounded-lg border border-white/70 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15">Explore Amenities</a>
          </div>
        </div>
      </div>
    </section>
  )
}
