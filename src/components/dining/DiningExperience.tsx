'use client'

import { motion } from 'framer-motion'
import { Wine, ChefHat, Users, Calendar } from 'lucide-react'

const experiences = [
  {
    icon: Wine,
    title: 'Wine Tasting Evenings',
    description: 'Join our sommelier for exclusive wine tastings featuring selections from around the world, paired with our chef\'s specially crafted dishes.',
    details: 'Every Friday & Saturday, 7:00 PM - 9:00 PM'
  },
  {
    icon: ChefHat,
    title: 'Cooking Classes',
    description: 'Learn the art of Luo cuisine from our master chefs. Discover traditional cooking techniques and the stories behind each dish.',
    details: 'Weekly sessions, book in advance'
  },
  {
    icon: Users,
    title: 'Private Dining',
    description: 'Host intimate gatherings, celebrations, or business dinners in our exclusive private pavilion with personalized menus.',
    details: 'Available daily, minimum 10 guests'
  },
  {
    icon: Calendar,
    title: 'Themed Dinner Nights',
    description: 'Experience cultural dining nights featuring different cuisines and entertainment from various Kenyan communities.',
    details: 'Special events throughout the month'
  }
]

export function DiningExperience() {
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
            Dining Experiences
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-4 mb-6">
            Beyond the Plate
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every dining experience at Kadongo Resort is crafted to create lasting memories,
            combining exceptional cuisine with cultural immersion and personalized service.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6 hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-600 transition-colors duration-300">
                <experience.icon className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                {experience.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {experience.description}
              </p>
              <p className="text-sm font-medium text-amber-600">
                {experience.details}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Dietary Requirements & Special Requests
            </h3>
            <p className="text-gray-600 mb-6">
              We accommodate all dietary needs including vegetarian, vegan, gluten-free, and allergen-specific requirements.
              Please inform us of any special dietary needs when making your reservation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Vegetarian Options</h4>
                <p className="text-gray-600">Extensive selection of plant-based dishes</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Halal & Kosher</h4>
                <p className="text-gray-600">Certified preparation available upon request</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Allergen Management</h4>
                <p className="text-gray-600">Dedicated preparation areas for allergies</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}