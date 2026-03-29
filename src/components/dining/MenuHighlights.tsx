'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const menuCategories = [
  {
    id: 'luo-cuisine',
    name: 'Luo Cuisine',
    description: 'Authentic dishes from the Luo community, featuring fresh Lake Victoria fish and traditional flavors.',
    items: [
      {
        name: 'Nile Perch with Ugali',
        description: 'Fresh Nile perch fillet grilled to perfection, served with traditional maize meal and sukuma wiki.',
        price: 'KSh 2,800',
        image: '/images/dining/nile-perch.jpg'
      },
      {
        name: 'Tilapia in Coconut Sauce',
        description: 'Whole tilapia cooked in rich coconut milk with local spices and served with rice.',
        price: 'KSh 2,200',
        image: '/images/dining/tilapia.jpg'
      },
      {
        name: 'Chicken Nyama Choma',
        description: 'Grilled chicken marinated in traditional spices, served with kachumbari and ugali.',
        price: 'KSh 1,800',
        image: '/images/dining/nyama-choma.jpg'
      },
      {
        name: 'Mukimo with Beef Stew',
        description: 'Traditional mashed potatoes with peas and corn, served with slow-cooked beef stew.',
        price: 'KSh 1,600',
        image: '/images/dining/mukimo.jpg'
      }
    ]
  },
  {
    id: 'international',
    name: 'International Cuisine',
    description: 'A selection of globally inspired dishes prepared with local ingredients and international techniques.',
    items: [
      {
        name: 'Grilled Salmon',
        description: 'Atlantic salmon fillet with herb butter, served with roasted vegetables and quinoa.',
        price: 'KSh 3,200',
        image: '/images/dining/salmon.jpg'
      },
      {
        name: 'Beef Tenderloin',
        description: 'Prime beef tenderloin with red wine reduction, garlic mashed potatoes, and seasonal vegetables.',
        price: 'KSh 4,500',
        image: '/images/dining/tenderloin.jpg'
      },
      {
        name: 'Mediterranean Pasta',
        description: 'Linguine with fresh seafood, cherry tomatoes, olives, and basil in white wine sauce.',
        price: 'KSh 2,400',
        image: '/images/dining/pasta.jpg'
      },
      {
        name: 'Vegetarian Risotto',
        description: 'Creamy Arborio rice with wild mushrooms, truffle oil, and aged parmesan.',
        price: 'KSh 2,100',
        image: '/images/dining/risotto.jpg'
      }
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts & Sweets',
    description: 'Indulgent desserts featuring local fruits, traditional sweets, and international favorites.',
    items: [
      {
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with molten center, served with vanilla ice cream and berry compote.',
        price: 'KSh 950',
        image: '/images/dining/lava-cake.jpg'
      },
      {
        name: 'Tropical Fruit Platter',
        description: 'Seasonal tropical fruits including mango, papaya, pineapple, and passion fruit.',
        price: 'KSh 750',
        image: '/images/dining/fruit-platter.jpg'
      },
      {
        name: 'Crème Brûlée',
        description: 'Classic vanilla custard with caramelized sugar crust and fresh berries.',
        price: 'KSh 850',
        image: '/images/dining/creme-brulee.jpg'
      },
      {
        name: 'Local Honey Cake',
        description: 'Traditional cake made with Mfangano Island honey, served with coconut cream.',
        price: 'KSh 650',
        image: '/images/dining/honey-cake.jpg'
      }
    ]
  }
]

export function MenuHighlights() {
  const [activeTab, setActiveTab] = useState('luo-cuisine')

  const activeCategory = menuCategories.find(cat => cat.id === activeTab)

  return (
    <section className="py-20 bg-gray-50">
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
            Menu Highlights
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-4 mb-6">
            Culinary Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the best of both worlds - traditional Luo flavors and international cuisine,
            all prepared with the freshest local ingredients.
          </p>
        </motion.div>

        {/* Menu Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-2 shadow-sm border">
            <div className="flex space-x-2">
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                    activeTab === category.id
                      ? 'bg-amber-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-amber-600 hover:bg-amber-50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-6xl mx-auto"
          >
            {/* Category Description */}
            <div className="text-center mb-12">
              <p className="text-lg text-gray-600">
                {activeCategory?.description}
              </p>
            </div>

            {/* Menu Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {activeCategory?.items.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="menu-item bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex">
                    {/* Item Image */}
                    <div className="w-32 h-32 flex-shrink-0">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${item.image}')` }}
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-serif font-bold text-gray-900">
                          {item.name}
                        </h3>
                        <span className="text-amber-600 font-bold text-lg">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}