import { Metadata } from 'next'
import ContactFormSection from '@/components/ContactFormSection'

export const metadata: Metadata = {
  title: 'Contact Us | Kadongo Resort - Mfangano Island',
  description: 'Get in touch with Kadongo Resort. Contact us for reservations, inquiries, or to plan your perfect island escape on Mfangano Island.',
}

export const dynamic = 'force-dynamic'

export default function ContactPage() {

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
            Contact Us
          </h1>
          <p className="text-lg md:text-xl font-light opacity-0 animate-fade-in-up animation-delay-300">
            Get in touch with our team. We're here to help you plan your perfect island escape.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-primary mb-6 block">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-6">
              Let's Start a Conversation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Whether you have questions about our resort, need help with your booking, or want to plan a special occasion, we're here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <ContactFormSection />

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-serif mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl text-primary mt-1">📍</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Address</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Kadongo Resort<br />
                        Mfangano Island<br />
                        Lake Victoria, Kenya
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-2xl text-primary mt-1">📞</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Phone</h4>
                      <a
                        href="tel:+254700000000"
                        className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                      >
                        +254 700 000 000
                      </a>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Available 24/7 for reservations
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-2xl text-primary mt-1">✉️</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Email</h4>
                      <a
                        href="mailto:reservations@kadongoresort.com"
                        className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                      >
                        reservations@kadongoresort.com
                      </a>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-2xl text-primary mt-1">🕒</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Business Hours</h4>
                      <div className="text-gray-600 dark:text-gray-300 space-y-1">
                        <p>Monday - Sunday: 24/7</p>
                        <p>Front Desk: 6:00 AM - 10:00 PM</p>
                        <p>Restaurant: 7:00 AM - 10:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-serif mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <a
                    href="/booking"
                    className="block w-full text-center bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                  >
                    Book Your Stay
                  </a>
                  <a
                    href="https://wa.me/254700000000"
                    target="_blank"
                    rel="noopener"
                    className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                  >
                    💬 WhatsApp Us
                  </a>
                  <a
                    href="tel:+254700000000"
                    className="block w-full text-center border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-primary mb-6 block">
              Find Us
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-6">
              Our Location
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Nestled on the pristine shores of Lake Victoria's Winam Gulf, Kadongo Resort awaits your arrival.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-slate-700 p-8 rounded-lg text-center">
            <div className="text-6xl mb-6 text-primary">📍</div>
            <h3 className="text-2xl font-serif mb-4">Kadongo Resort</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Mfangano Island, Lake Victoria, Kenya</p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=-0.4740845929442699,34.067577324170614"
              target="_blank"
              rel="noopener"
              className="inline-block px-8 py-4 border border-gray-400 text-gray-800 dark:text-gray-200 dark:border-gray-600 uppercase tracking-widest text-sm font-bold hover:bg-primary hover:border-primary hover:text-white transition-all duration-700 relative overflow-hidden group mb-6"
            >
              <span className="relative z-10">🗺️ Open in Google Maps</span>
              <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
            </a>

            <div className="bg-primary/10 dark:bg-primary/20 p-6 rounded-lg text-left max-w-2xl mx-auto">
              <p className="font-semibold mb-3">📍 GPS Coordinates:</p>
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

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-primary mb-6 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-3">How do I get to Kadongo Resort?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We offer complimentary transfers from Mfangano Island airstrip for flight arrivals.
                For road travel, we can arrange private transfers from Kisumu Airport or your hotel.
                Detailed directions are provided upon booking confirmation.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-3">What's the best time to visit?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Kadongo Resort is a year-round destination. The dry seasons (December-March and June-October)
                are ideal for outdoor activities and birdwatching. Lake views are spectacular year-round.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-3">Do you accept credit cards?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, we accept major credit cards (Visa, Mastercard, American Express) and mobile money payments.
                Cash payments in Kenyan Shillings are also accepted on the island.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-3">Is there Wi-Fi available?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, complimentary high-speed Wi-Fi is available throughout the resort including all rooms,
                common areas, and the restaurant. Signal strength may vary in some outdoor areas.
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
            Ready to Experience Kadongo?
          </h2>
          <p className="text-lg md:text-xl mb-12 opacity-90">
            Don't hesitate to reach out. We're here to make your island escape unforgettable.
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
