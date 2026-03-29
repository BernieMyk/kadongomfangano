import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Location & Directions | Kadongo Resort - Mfangano Island',
  description: 'Find Kadongo Resort on Mfangano Island — Directions, GPS coordinates, and travel tips for your Lake Victoria escape.',
}

export default function LocationPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1920&q=80"
        >
          <source src="https://videos.pexels.com/video-files/5829129/5829129-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif italic mb-6 opacity-0 animate-fade-in-up">
            Find Us
          </h1>
          <p className="text-lg md:text-xl font-light opacity-0 animate-fade-in-up animation-delay-300">
            Nestled on the pristine shores of Lake Victoria's Winam Gulf, Kadongo Resort awaits your arrival.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-primary mb-6 block">
              Location
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-6">
              Kadongo Resort Location
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Use the interactive map below to explore our location and plan your journey.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 p-12 rounded-lg shadow-lg text-center">
            <div className="text-6xl mb-6 animate-bounce">📍</div>
            <h3 className="text-2xl font-serif mb-3">Kadongo Resort</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">Mfangano Island, Lake Victoria, Kenya</p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=-0.4740845929442699,34.067577324170614"
              target="_blank"
              rel="noopener"
              className="inline-block px-8 py-4 border border-gray-400 text-gray-800 dark:text-gray-200 dark:border-gray-600 uppercase tracking-widest text-sm font-bold hover:bg-primary hover:border-primary hover:text-white transition-all duration-700 relative overflow-hidden group mb-8"
            >
              <span className="relative z-10">🗺️ Open in Google Maps</span>
              <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
            </a>

            <div className="bg-primary/10 dark:bg-primary/20 p-8 rounded-lg text-left max-w-2xl mx-auto">
              <p className="font-semibold mb-4">📍 GPS Coordinates:</p>
              <p className="mb-2 font-mono text-sm">
                Latitude: <code className="bg-primary/20 px-2 py-1 rounded text-primary">-0.4740845929442699</code>
              </p>
              <p className="mb-2 font-mono text-sm">
                Longitude: <code className="bg-primary/20 px-2 py-1 rounded text-primary">34.067577324170614</code>
              </p>
              <p className="font-mono text-sm">
                Plus Code: <code className="bg-primary/20 px-2 py-1 rounded text-primary">G3G9+82 Sena Centre, Mfangano Island</code>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Options */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-primary mb-6 block">
              Getting Here
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-6">
              How to Get Here
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Multiple convenient routes to reach your island paradise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* By Air */}
            <div className="bg-gray-50 dark:bg-slate-700 p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="text-4xl mb-6">✈️</div>
              <h3 className="text-xl font-serif mb-3">By Air (Fastest)</h3>
              <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                ⏱️ 45 minutes flight
              </span>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Fly from Kisumu Airport (KIS) to Mfangano Island Airstrip.
                Daily scheduled flights available.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-6">
                <li className="border-b border-gray-200 dark:border-gray-600 pb-2">Airlines: Safarilink, Airkenya Express</li>
                <li className="border-b border-gray-200 dark:border-gray-600 pb-2">Resort Transfer: Complimentary 10-minute pickup from airstrip</li>
              </ul>
              <a
                href="/booking?transfer=air"
                className="inline-block w-full text-center px-6 py-3 border border-gray-400 text-gray-800 dark:text-gray-200 dark:border-gray-600 uppercase tracking-widest text-sm font-bold hover:bg-primary hover:border-primary hover:text-white transition-all duration-700 relative overflow-hidden group"
              >
                <span className="relative z-10">Arrange Flight Transfer</span>
                <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              </a>
            </div>

            {/* By Road & Boat */}
            <div className="bg-gray-50 dark:bg-slate-700 p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="text-4xl mb-6">🚗🚤</div>
              <h3 className="text-xl font-serif mb-3">By Road & Boat</h3>
              <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                ⏱️ 3.5 hours total
              </span>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Drive from Kisumu to Rusinga Island ferry terminal (2.5 hours),
                then cross to Mfangano Island.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-6">
                <li className="border-b border-gray-200 dark:border-gray-600 pb-2">Route: Kisumu → A104 → Homa Bay → Rusinga Ferry → Mfangano</li>
                <li className="border-b border-gray-200 dark:border-gray-600 pb-2">Resort Transfer: Private boat pickup from Mfangano jetty included</li>
              </ul>
              <a
                href="https://goo.gl/maps/XXXXXXXXX"
                target="_blank"
                rel="noopener"
                className="inline-block w-full text-center px-6 py-3 border border-gray-400 text-gray-800 dark:text-gray-200 dark:border-gray-600 uppercase tracking-widest text-sm font-bold hover:bg-primary hover:border-primary hover:text-white transition-all duration-700 relative overflow-hidden group"
              >
                <span className="relative z-10">Get Driving Directions</span>
                <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              </a>
            </div>

            {/* By Public Transport */}
            <div className="bg-gray-50 dark:bg-slate-700 p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="text-4xl mb-6">🚌</div>
              <h3 className="text-xl font-serif mb-3">By Public Transport</h3>
              <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                ⏱️ 4-5 hours
              </span>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Matatu (minibus) from Kisumu to Homa Bay, then connecting
                transport to Mfangano Island.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-6">
                <li className="border-b border-gray-200 dark:border-gray-600 pb-2">Cost: Budget-friendly option (~$10-15 USD)</li>
                <li className="border-b border-gray-200 dark:border-gray-600 pb-2">Note: Less convenient but authentic local experience</li>
              </ul>
              <a
                href="/contact"
                className="inline-block w-full text-center px-6 py-3 border border-gray-400 text-gray-800 dark:text-gray-200 dark:border-gray-600 uppercase tracking-widest text-sm font-bold hover:bg-primary hover:border-primary hover:text-white transition-all duration-700 relative overflow-hidden group"
              >
                <span className="relative z-10">Ask for Instructions</span>
                <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              </a>
            </div>

            {/* Private Transfer */}
            <div className="bg-gray-50 dark:bg-slate-700 p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="text-4xl mb-6">🚐</div>
              <h3 className="text-xl font-serif mb-3">Private Transfer</h3>
              <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                ⏱️ Door-to-door service
              </span>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Luxury vehicle pickup from Kisumu Airport or your hotel.
                Includes boat crossing and resort delivery.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-6">
                <li className="border-b border-gray-200 dark:border-gray-600 pb-2">Cost: $150-200 USD (one way, up to 4 passengers)</li>
                <li className="border-b border-gray-200 dark:border-gray-600 pb-2">Includes: Professional driver, refreshments, scenic stops</li>
              </ul>
              <a
                href="/booking?transfer=private"
                className="inline-block w-full text-center px-6 py-3 border border-gray-400 text-gray-800 dark:text-gray-200 dark:border-gray-600 uppercase tracking-widest text-sm font-bold hover:bg-primary hover:border-primary hover:text-white transition-all duration-700 relative overflow-hidden group"
              >
                <span className="relative z-10">Book Private Transfer</span>
                <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-primary mb-6 block">
              Discover
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-6">
              Explore Mfangano Island
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover the rich culture and natural beauty surrounding the resort.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-slate-800 p-8 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="text-4xl mb-6 text-primary">🎨</div>
              <h3 className="text-xl font-serif mb-3">Kwitone Rock Art Site</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                Ancient Luo rock paintings dating back 500+ years. Guided cultural tours available.
              </p>
              <p className="text-primary text-sm font-semibold">📍 3.2 km from resort</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="text-4xl mb-6 text-primary">🏖️</div>
              <h3 className="text-xl font-serif mb-3">Lake Victoria Shoreline</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                Pristine beaches, fishing villages, and spectacular sunsets over Africa's largest lake.
              </p>
              <p className="text-primary text-sm font-semibold">📍 Beachfront access</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="text-4xl mb-6 text-primary">🐦</div>
              <h3 className="text-xl font-serif mb-3">Bird Watching Paradise</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                Over 300 bird species recorded. Fish eagles, kingfishers, and rare lake specialists.
              </p>
              <p className="text-primary text-sm font-semibold">📍 On-site & surrounding areas</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="text-4xl mb-6 text-primary">🏘️</div>
              <h3 className="text-xl font-serif mb-3">Local Fishing Villages</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                Experience authentic Luo culture, traditional boat building, and fresh fish markets.
              </p>
              <p className="text-primary text-sm font-semibold">📍 1-5 km from resort</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="text-4xl mb-6 text-primary">🤿</div>
              <h3 className="text-xl font-serif mb-3">Scuba Diving & Snorkeling</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                Explore Lake Victoria's underwater world. Equipment rental and guides available.
              </p>
              <p className="text-primary text-sm font-semibold">📍 Resort-organized tours</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="text-4xl mb-6 text-primary">🥾</div>
              <h3 className="text-xl font-serif mb-3">Camping & Nature Trails</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                Hiking paths through indigenous forest, camping sites, and picnic areas.
              </p>
              <p className="text-primary text-sm font-semibold">📍 2-8 km from resort</p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Info Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-primary mb-6 block">
              Essential Info
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-6">
              Essential Travel Information
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Plan your journey with these helpful tips.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 dark:bg-slate-700 p-8">
              <div className="text-4xl mb-6 text-primary">🛂</div>
              <h3 className="text-xl font-serif mb-4">Visa Requirements</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Most visitors need a Kenyan visa. Apply online at{' '}
                <a
                  href="https://evisa.go.ke"
                  target="_blank"
                  rel="noopener"
                  className="text-primary hover:underline"
                >
                  evisa.go.ke
                </a>{' '}
                before travel. East African citizens exempt.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-slate-700 p-8">
              <div className="text-4xl mb-6 text-primary">💉</div>
              <h3 className="text-xl font-serif mb-4">Health & Vaccinations</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Yellow fever vaccination required if traveling from endemic countries.
                Malaria prophylaxis recommended. Resort has first aid facilities.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-slate-700 p-8">
              <div className="text-4xl mb-6 text-primary">💱</div>
              <h3 className="text-xl font-serif mb-4">Currency & Payments</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Kenyan Shilling (KES) is local currency. USD accepted at resort.
                ATMs available in Homa Bay (bring cash for island).
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-slate-700 p-8">
              <div className="text-4xl mb-6 text-primary">📱</div>
              <h3 className="text-xl font-serif mb-4">Connectivity</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Limited mobile coverage on island. Free Wi-Fi available at resort.
                Inform family of potential communication gaps.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-slate-700 p-8">
              <div className="text-4xl mb-6 text-primary">🧳</div>
              <h3 className="text-xl font-serif mb-4">What to Pack</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Light clothing, swimwear, sunscreen, insect repellent, comfortable
                walking shoes, camera, and a sense of adventure!
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-slate-700 p-8">
              <div className="text-4xl mb-6 text-primary">🌡️</div>
              <h3 className="text-xl font-serif mb-4">Best Time to Visit</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Year-round destination. Dry seasons (Dec-Mar, Jun-Oct) ideal for
                outdoor activities. Lake views spectacular year-round.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative h-4/5 flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1520257328597-2c6d0e7f6f8e?auto=format&fit=crop&w=1920&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif italic mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Book your stay at Kadongo Resort today and let us handle the rest. Complimentary transfers included with all bookings.
          </p>
          <a
            href="/booking"
            className="inline-block px-12 py-5 border border-white/40 text-white uppercase tracking-widest text-sm font-bold hover:bg-primary hover:border-primary transition-all duration-700 relative overflow-hidden group backdrop-blur-sm"
          >
            <span className="relative z-10">Reserve Your Stay Now</span>
            <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
          </a>
          <p className="mt-8 text-lg opacity-85">
            📞 Questions? Call us: <strong className="text-white">+254 7XX XXX XXX</strong> • ✉️ info@kadongoresort.com
          </p>
        </div>
      </section>
    </main>
  )
}