import { Navbar } from '@/components/Navbar'
import { RoomGrid } from '@/components/RoomGrid'
import { Footer } from '@/components/Footer'

export default function RoomsPage() {
  return (
    <main className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      <Navbar />
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <h1 className="text-3xl font-bold text-center text-slate-900 dark:text-slate-100 mb-8">Our Rooms and Suites</h1>
        <RoomGrid />
      </section>
      <Footer />
    </main>
  )
}
