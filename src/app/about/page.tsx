import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const dynamic = 'force-dynamic'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center text-white">
        <div className="absolute inset-0 bg-black/45 dark:bg-black/60" />
        <div className="relative container mx-auto px-4 py-24 sm:py-28">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-widest text-amber-200">Our Story</p>
            <h1 className="text-4xl font-bold leading-tight sm:text-6xl">Rooted in Mfangano Island's rich culture, crafted for your unforgettable escape.</h1>
            <div className="flex items-center gap-3">
              <a href="#story" className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-primary-dark">Discover More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="section container mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div>
              <span className="text-sm uppercase tracking-widest text-primary">From Vision to Paradise</span>
              <h2 className="text-3xl font-bold mt-4">A Dream Realized</h2>
            </div>
            <div className="space-y-4 text-slate-600 dark:text-slate-300">
              <p>Kadongo Resort was born from a dream: to create a sanctuary where luxury hospitality harmonizes with the pristine beauty of Lake Victoria and the authentic warmth of Luo culture.</p>
              <p>Founded in 2018 by local conservationists and hospitality experts, we've carefully developed our resort to minimize environmental impact while maximizing guest comfort and cultural immersion.</p>
              <p>Today, Kadongo Resort stands as Mfangano Island's premier eco-luxury destination — a place where every detail honors the land, the lake, and the community that calls this paradise home.</p>
            </div>
            <a href="/booking" className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark">Book Your Stay</a>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" alt="Resort Grounds" className="w-full rounded-2xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-widest text-primary">Our Philosophy</span>
            <h2 className="text-3xl font-bold mt-4">Core Values</h2>
            <p className="text-slate-300 mt-4 max-w-2xl mx-auto">The principles that guide everything we do at Kadongo Resort.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center space-y-4">
              <div className="text-4xl">🌿</div>
              <h3 className="text-xl font-semibold">Sustainability</h3>
              <p className="text-slate-300 text-sm">Solar-powered, water-conserving, waste-reducing operations that protect Mfangano's ecosystem for future generations.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl">🤝</div>
              <h3 className="text-xl font-semibold">Community First</h3>
              <p className="text-slate-300 text-sm">90% of our staff are local. We partner with village artisans, fishermen, and cultural guides to create authentic experiences.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl">✨</div>
              <h3 className="text-xl font-semibold">Authentic Luxury</h3>
              <p className="text-slate-300 text-sm">Comfort that respects tradition. Modern amenities woven with Luo design and craftsmanship for a truly unique stay.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl">💙</div>
              <h3 className="text-xl font-semibold">Guest Wellbeing</h3>
              <p className="text-slate-300 text-sm">From spa treatments using local botanicals to mindful dining, we nurture body and soul in every interaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-widest text-primary">Leadership</span>
          <h2 className="text-3xl font-bold mt-4">Meet Our Team</h2>
          <p className="text-slate-600 dark:text-slate-300 mt-4">The passionate individuals behind your unforgettable experience.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center space-y-4">
            <img src="https://i.pravatar.cc/150?img=32" alt="Grace Atieno" className="w-32 h-32 rounded-full mx-auto border-4 border-primary" />
            <h3 className="text-xl font-semibold">Grace Atieno</h3>
            <p className="text-primary font-medium">General Manager</p>
            <p className="text-slate-600 dark:text-slate-300 text-sm">Luo Heritage Advocate</p>
          </div>
          <div className="text-center space-y-4">
            <img src="https://i.pravatar.cc/150?img=59" alt="David Omondi" className="w-32 h-32 rounded-full mx-auto border-4 border-primary" />
            <h3 className="text-xl font-semibold">David Omondi</h3>
            <p className="text-primary font-medium">Head of Sustainability</p>
            <p className="text-slate-600 dark:text-slate-300 text-sm">Marine Conservationist</p>
          </div>
          <div className="text-center space-y-4">
            <img src="https://i.pravatar.cc/150?img=12" alt="Sarah Mwangi" className="w-32 h-32 rounded-full mx-auto border-4 border-primary" />
            <h3 className="text-xl font-semibold">Sarah Mwangi</h3>
            <p className="text-primary font-medium">Guest Experience Director</p>
            <p className="text-slate-600 dark:text-slate-300 text-sm">Hospitality Expert</p>
          </div>
          <div className="text-center space-y-4">
            <img src="https://i.pravatar.cc/150?img=68" alt="James Otieno" className="w-32 h-32 rounded-full mx-auto border-4 border-primary" />
            <h3 className="text-xl font-semibold">James Otieno</h3>
            <p className="text-primary font-medium">Cultural Programs Lead</p>
            <p className="text-slate-600 dark:text-slate-300 text-sm">Luo Storyteller</p>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="relative bg-slate-900 py-16 text-white overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover opacity-20" autoPlay muted loop playsInline>
          <source src="https://videos.pexels.com/video-files/3209829/3209829-uhd_2560_1440_24fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm uppercase tracking-widest text-primary">Our Promise</span>
            <h2 className="text-3xl font-bold mt-4 mb-8">🌍 Commitment to Mfangano</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">We believe luxury travel should leave places better than we found them. Here's how we protect our island home:</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 text-left">
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">☀️</span>
                <span className="text-sm">100% solar-powered resort with battery backup</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">💧</span>
                <span className="text-sm">Rainwater harvesting + greywater recycling system</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">🌱</span>
                <span className="text-sm">Organic garden supplies 60% of our restaurant produce</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">🐠</span>
                <span className="text-sm">Partnering with Lake Victoria conservation NGOs</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">🎨</span>
                <span className="text-sm">Supporting local artisans through our craft marketplace</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">📚</span>
                <span className="text-sm">Funding scholarships for Mfangano Island students</span>
              </div>
            </div>
            <a href="/contact" className="inline-block mt-8 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark">Learn More About Our Initiatives</a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1520257328597-2c6d0e7f6f8e?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center text-white py-24">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the Kadongo Difference</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">Join us in creating tourism that uplifts communities and preserves paradise.</p>
          <a href="/booking" className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark">Book Your Meaningful Stay</a>
        </div>
      </section>

      <Footer />
    </main>
  )
}