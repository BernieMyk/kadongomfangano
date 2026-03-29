'use client'

import React, { useState } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery | Kadongo Resort - Mfangano Island',
  description: 'Photo Gallery — A visual journey through Kadongo Resort\'s rooms, dining, and the breathtaking beauty of Mfangano Island.',
}

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

export default function GalleryPage() {
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
            Ready to Experience Paradise?
          </h2>
          <p className="text-lg md:text-xl mb-12 opacity-90">
            These images only capture a glimpse of what awaits you at Kadongo Resort.
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

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center flex-col"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-8 right-8 text-white text-4xl hover:rotate-90 transition-transform duration-300"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            ×
          </button>

          <button
            className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/10 text-white text-2xl p-4 hover:bg-white/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            aria-label="Previous image"
          >
            ❮
          </button>

          <img
            src={filteredItems[currentImageIndex].src}
            alt={filteredItems[currentImageIndex].alt}
            className="max-w-[90%] max-h-[80vh] object-contain"
          />

          <button
            className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/10 text-white text-2xl p-4 hover:bg-white/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            aria-label="Next image"
          >
            ❯
          </button>

          <div className="text-white mt-6 text-xl font-serif italic text-center">
            {filteredItems[currentImageIndex].title}
          </div>
        </div>
      )}
    </main>
  )
}