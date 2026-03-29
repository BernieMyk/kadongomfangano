'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

export function DiningCTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
           style={{ backgroundImage: "url('/images/dining/cta-bg.jpg')" }} />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold">
            Ready to Savor Paradise?
          </h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            Every meal at Kadongo Resort is a celebration of local flavors and lakeside beauty.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Link
              href="/booking"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 text-lg"
            >
              Reserve Your Table
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 text-lg">
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2 text-amber-400" />
              <span>dining@kadongoresort.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2 text-amber-400" />
              <span>+254 7XX XXX XXX</span>
            </div>
          </div>

          {/* Additional Note */}
          <p className="text-sm opacity-85 max-w-2xl mx-auto pt-4">
            Reservations recommended for dinner service. For special dietary requirements or large groups,
            please contact us at least 24 hours in advance.
          </p>
        </motion.div>
      </div>
    </section>
  )
}