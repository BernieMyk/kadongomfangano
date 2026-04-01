import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { RoomGrid } from '@/components/RoomGrid'
import { BookingForm } from '@/components/BookingForm'
import { Footer } from '@/components/Footer'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      <Navbar />
      <Hero />

      <section className="section container mx-auto px-4 py-10 sm:py-16">
        <h2 className="text-3xl font-bold text-center tracking-tight text-slate-900 dark:text-slate-100 mb-8">Experiences at Kadongo Resort</h2>
        <RoomGrid />
      </section>

      <section className="section bg-gray-100 dark:bg-slate-900 py-10 sm:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center dark:text-white mb-6">Book Your Escape</h2>
          <BookingForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}
