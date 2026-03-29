'use client'

import { motion } from 'framer-motion'
import { Clock, Users, ChefHat } from 'lucide-react'

const venues = [
  {
    id: 'main-restaurant',
    name: 'The Main Restaurant',
    description: 'Our flagship dining venue offering panoramic lake views and an extensive menu featuring both local and international cuisine.',
    hours: '6:30 AM - 10:00 PM',
    capacity: '120 guests',
    specialty: 'Fresh Nile Perch & Continental Breakfast',
    image: '/images/dining/main-restaurant.jpg',
    features: ['Lake View Dining', 'International Cuisine', 'Fresh Local Seafood']
  },
  {
    id: 'pool-bar',
    name: 'Poolside Bar & Grill',
    description: 'Casual dining by the infinity pool with light meals, refreshing cocktails, and sunset views over Lake Victoria.',
    hours: '10:00 AM - 8:00 PM',
    capacity: '60 guests',
    specialty: 'Grilled Specialties & Tropical Cocktails',
    image: '/images/dining/pool-bar.jpg',
    features: ['Poolside Seating', 'Cocktail Menu', 'Light Meals']
  },
  {
    id: 'private-dining',
    name: 'Private Dining Pavilion',
    description: 'Intimate dining experiences for special occasions, romantic dinners, or exclusive group gatherings.',
    hours: 'By Reservation',
    capacity: '20 guests',
    specialty: 'Customized Menus & Wine Pairing',
    image: '/images/dining/private-dining.jpg',
    features: ['Private Setting', 'Custom Menus', 'Romantic Atmosphere']
  },
  {
    id: 'beach-bar',
    name: 'Beachfront Bar',
    description: 'Relaxed beachside dining with fresh seafood, cold beers, and the sound of Lake Victoria waves.',
    hours: '11:00 AM - 7:00 PM',
    capacity: '40 guests',
    specialty: 'Fresh Seafood & Local Beers',
    image: '/images/dining/beach-bar.jpg',
    features: ['Beachfront Location', 'Seafood Focus', 'Casual Atmosphere']
  }
]

export function DiningVenues() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-amber-600 uppercase tracking-wider">
            Dining Venues
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-4 mb-6">
            Where Every Meal is a Memory
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our diverse dining venues, each offering unique culinary experiences
            with stunning Lake Victoria views and authentic island hospitality.
          </p>
        </motion.div>

        {/* Venue Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {venues.map((venue, index) => (
            <motion.div
              key={venue.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="venue-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Venue Image */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${venue.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">
                    {venue.name}
                  </h3>
                </div>
              </div>

              {/* Venue Details */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {venue.description}
                </p>

                {/* Venue Info */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2 text-amber-600" />
                    <span>{venue.hours}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2 text-amber-600" />
                    <span>{venue.capacity}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <ChefHat className="w-4 h-4 mr-2 text-amber-600" />
                    <span>{venue.specialty}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {venue.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}