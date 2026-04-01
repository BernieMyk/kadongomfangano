import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Amenities | Kadongo Resort - Mfangano Island',
  description: 'Resort Amenities — Everything you need for the perfect island escape at Kadongo Resort.',
}

export const dynamic = 'force-dynamic'

export default function AmenitiesPage() {
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
          poster="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1920&q=80"
        >
          <source src="https://videos.pexels.com/video-files/5829129/5829129-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif italic mb-6 opacity-0 animate-fade-in-up">
            Resort Amenities
          </h1>
          <p className="text-lg md:text-xl font-light opacity-0 animate-fade-in-up animation-delay-300">
            Everything you need for the perfect island escape.
          </p>
        </div>
      </section>

      {/* Wellness & Relaxation Section */}
      <section className="relative py-32 text-white overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://videos.pexels.com/video-files/3209829/3209829-uhd_2560_1440_24fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-widest font-bold text-primary mb-6 block">
              Rejuvenate
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-6">
              Wellness & Relaxation
            </h2>
            <p className="text-lg opacity-85 max-w-2xl mx-auto">
              Rejuvenate your body and soul in our tranquil spaces designed for ultimate relaxation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="bg-white/8 backdrop-blur-sm border border-white/15 p-12 hover:bg-white/12 hover:border-primary transition-all duration-500 hover:-translate-y-2">
              <div className="text-4xl mb-6 text-primary">🧖</div>
              <h3 className="text-2xl font-serif mb-4">Lakeside Spa</h3>
              <p className="text-gray-200 mb-6 leading-relaxed">
                Traditional Luo herbal treatments, massages, and facials using organic local botanicals.
                Our spa therapists blend ancient wisdom with modern techniques.
              </p>
              <ul className="space-y-2 text-sm opacity-80">
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Couples treatment suites</li>
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Lakeside massage pavilions</li>
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Organic product line</li>
              </ul>
            </div>

            <div className="bg-white/8 backdrop-blur-sm border border-white/15 p-12 hover:bg-white/12 hover:border-primary transition-all duration-500 hover:-translate-y-2">
              <div className="text-4xl mb-6 text-primary">🧘</div>
              <h3 className="text-2xl font-serif mb-4">Yoga Pavilion</h3>
              <p className="text-gray-200 mb-6 leading-relaxed">
                Daily sunrise and sunset sessions overlooking Lake Victoria.
                Private instruction available for all levels.
              </p>
              <ul className="space-y-2 text-sm opacity-80">
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Open-air pavilion</li>
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> All equipment provided</li>
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Private sessions available</li>
              </ul>
            </div>

            <div className="bg-white/8 backdrop-blur-sm border border-white/15 p-12 hover:bg-white/12 hover:border-primary transition-all duration-500 hover:-translate-y-2">
              <div className="text-4xl mb-6 text-primary">🏊</div>
              <h3 className="text-2xl font-serif mb-4">Infinity Pool</h3>
              <p className="text-gray-200 mb-6 leading-relaxed">
                Heated freshwater pool that appears to merge with the lake horizon.
                Enjoy poolside service with refreshing cocktails.
              </p>
              <ul className="space-y-2 text-sm opacity-80">
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Heated year-round</li>
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Poolside bar service</li>
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Sunset views</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dining Section */}
      <section className="grid lg:grid-cols-2 min-h-screen items-center bg-white">
        <div className="h-screen lg:h-auto overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80"
            alt="Lakeside Dining"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-6 lg:px-16 py-20 lg:py-0">
          <span className="text-xs uppercase tracking-widest font-bold text-primary mb-6 block">
            Culinary Excellence
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-8">
            Lakeside Dining
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Savor farm-to-table cuisine at <strong>Ziwa Restaurant</strong>, featuring fresh Nile Perch,
            organic garden produce, and authentic Luo dishes prepared with love.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Enjoy sundowners at <strong>Sunset Bar</strong> with craft cocktails, local wines, and
            live acoustic music as the sun dips below Lake Victoria.
          </p>
          <h3 className="text-2xl font-serif mb-6">Restaurant Hours</h3>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 py-3 border-b border-gray-200">
              <span className="text-xl">🍳</span> Breakfast: 7:00 AM - 10:30 AM
            </li>
            <li className="flex items-center gap-3 py-3 border-b border-gray-200">
              <span className="text-xl">🥗</span> Lunch: 12:30 PM - 3:00 PM
            </li>
            <li className="flex items-center gap-3 py-3 border-b border-gray-200">
              <span className="text-xl">🍽️</span> Dinner: 7:00 PM - 10:00 PM
            </li>
            <li className="flex items-center gap-3 py-3 border-b border-gray-200">
              <span className="text-xl">🕯️</span> Private beach dinners available
            </li>
          </ul>
          <a
            href="/dining"
            className="inline-block px-12 py-5 border border-gray-400 text-gray-800 uppercase tracking-widest text-sm font-bold hover:bg-primary hover:border-primary hover:text-white transition-all duration-700 relative overflow-hidden group"
          >
            <span className="relative z-10">View Full Menu</span>
            <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
          </a>
        </div>
      </section>

      {/* Island Experiences Section */}
      <section className="relative py-32 text-white overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://videos.pexels.com/video-files/4426662/4426662-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-widest font-bold text-primary mb-6 block">
              Adventure
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-6">
              Island Experiences
            </h2>
            <p className="text-lg opacity-85 max-w-2xl mx-auto">
              Discover the magic of Mfangano Island with our curated activities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/8 backdrop-blur-sm border border-white/1 p-10 text-center hover:bg-white/12 hover:border-primary transition-all duration-500 hover:-translate-y-2">
              <div className="text-4xl mb-6 text-primary">🚤</div>
              <h3 className="text-xl font-serif mb-3">Boat Tours</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                Sunset cruises, fishing expeditions, and island-hopping adventures on Lake Victoria.
                Our experienced captains know the best spots.
              </p>
            </div>

            <div className="bg-white/8 backdrop-blur-sm border border-white/1 p-10 text-center hover:bg-white/12 hover:border-primary transition-all duration-500 hover:-translate-y-2">
              <div className="text-4xl mb-6 text-primary">🎨</div>
              <h3 className="text-xl font-serif mb-3">Cultural Immersion</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                Visit local villages, learn traditional crafts, and experience Luo music and dance.
                Connect with the community.
              </p>
            </div>

            <div className="bg-white/8 backdrop-blur-sm border border-white/1 p-10 text-center hover:bg-white/12 hover:border-primary transition-all duration-500 hover:-translate-y-2">
              <div className="text-4xl mb-6 text-primary">🐦</div>
              <h3 className="text-xl font-serif mb-3">Birdwatching</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                Guided tours to spot 300+ species. Binoculars and expert guides provided.
                Best at dawn and dusk.
              </p>
            </div>

            <div className="bg-white/8 backdrop-blur-sm border border-white/1 p-10 text-center hover:bg-white/12 hover:border-primary transition-all duration-500 hover:-translate-y-2">
              <div className="text-4xl mb-6 text-primary">🧒</div>
              <h3 className="text-xl font-serif mb-3">Kids' Club</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                Supervised activities, nature crafts, and cultural storytelling for young explorers.
                Let the little ones discover the island.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Conveniences Section */}
      <section className="py-32 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-widest font-bold text-primary mb-6 block">
              Comfort
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-6">
              Guest Conveniences
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Thoughtful touches to make your stay seamless and memorable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-slate-800 p-10 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="text-4xl mb-6 text-primary">📶</div>
              <h3 className="text-xl font-serif mb-3">Free Wi-Fi</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                High-speed internet throughout the resort. Work or stream with ease from your room or common areas.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-10 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="text-4xl mb-6 text-primary">🅿️</div>
              <h3 className="text-xl font-serif mb-3">Complimentary Parking</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Secure, shaded parking for guests arriving by car or ferry. Valet service available upon request.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-10 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="text-4xl mb-6 text-primary">🚐</div>
              <h3 className="text-xl font-serif mb-3">Airport Transfers</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Private boat + vehicle transfers from Kisumu Airport. Booking required; arrange at time of reservation.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-10 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="text-4xl mb-6 text-primary">💬</div>
              <h3 className="text-xl font-serif mb-3">24/7 Concierge</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our team is always available to arrange tours, dining reservations, special requests, or share local insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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
            Ready to Experience Kadongo?
          </h2>
          <p className="text-lg md:text-xl mb-12 opacity-90">
            Every amenity is designed to enhance your island escape. Let us help you plan the perfect stay.
          </p>
          <a
            href="/booking"
            className="inline-block px-12 py-5 border border-white/40 text-white uppercase tracking-widest text-sm font-bold hover:bg-primary hover:border-primary transition-all duration-700 relative overflow-hidden group backdrop-blur-sm"
          >
            <span className="relative z-10">Book Your Stay Now</span>
            <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
          </a>
        </div>
      </section>
    </main>
  )
}