'use client'

import React, { useState } from 'react'

interface GalleryItem {
  id: number
  src: string
  alt: string
  category: string
  title: string
  description: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80',
    alt: 'Lake View Suite',
    category: 'rooms',
    title: 'Lake View Suite',
    description: 'Wake up to the sunrise over Lake Victoria.'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
    alt: 'Lakeside Dining',
    category: 'dining',
    title: 'Lakeside Dining',
    description: 'Fresh catch of the day served under the stars.'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    alt: 'Private Beach',
    category: 'nature',
    title: 'Private Beach',
    description: 'Pristine sands exclusive to our guests.'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1590490360182-c31938a86497?auto=format&fit=crop&w=800&q=80',
    alt: 'Garden Villa',
    category: 'rooms',
    title: 'Garden Villa',
    description: 'Surrounded by tropical lushness.'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=800&q=80',
    alt: 'Cultural Experience',
    category: 'culture',
    title: 'Cultural Experience',
    description: 'Traditional Luo dance performances.'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
    alt: 'Infinity Pool',
    category: 'amenities',
    title: 'Infinity Pool',
    description: 'Blending seamlessly with the lake horizon.'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    alt: 'Local Cuisine',
    category: 'dining',
    title: 'Local Cuisine',
    description: 'Organic ingredients from our own garden.'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    alt: 'Traditional Banda',
    category: 'rooms',
    title: 'Traditional Banda',
    description: 'Authentic architecture with modern luxury.'
  }
]

export default function GalleryClient() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'rooms', label: 'Rooms & Suites' },
    { key: 'dining', label: 'Dining' },
    { key: 'nature', label: 'Nature & Lake' },
    { key: 'culture', label: 'Culture' }
  ]

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }

  const showNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredItems.length)
  }

  const showPrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!lightboxOpen) return
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') showNext()
    if (e.key === 'ArrowLeft') showPrev()
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen])

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
            Photo Gallery
          </h1>
          <p className="text-lg md:text-xl font-light opacity-0 animate-fade-in-up animation-delay-300">
            A visual journey through paradise. Explore our rooms, dining, and the breathtaking beauty of Mfangano Island.
          </p>
        </div>
      </section>

      {/* Gallery Filters */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-8 py-3 border uppercase tracking-widest text-sm font-bold transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'border-primary bg-primary text-white'
                    : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary hover:bg-primary hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="relative h-96 overflow-hidden cursor-pointer group opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-10 left-10 text-white transform translate-y-5 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 transition-colors z-60"
          >
            ×
          </button>

          <button
            onClick={showPrev}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors z-60"
          >
            ‹
          </button>

          <button
            onClick={showNext}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors z-60"
          >
            ›
          </button>

          <div className="max-w-5xl max-h-full p-4">
            <img
              src={filteredItems[currentImageIndex].src}
              alt={filteredItems[currentImageIndex].alt}
              className="max-w-full max-h-full object-contain"
            />
            <div className="text-white text-center mt-4">
              <h3 className="text-2xl font-serif mb-2">{filteredItems[currentImageIndex].title}</h3>
              <p className="text-lg opacity-90">{filteredItems[currentImageIndex].description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}