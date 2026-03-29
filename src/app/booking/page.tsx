import { Navbar } from '@/components/Navbar'
import { BookingForm } from '@/components/BookingForm'
import { Footer } from '@/components/Footer'

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      <Navbar />
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <h1 className="text-3xl font-bold text-center text-slate-900 dark:text-slate-100 mb-8">Reserve Your Stay</h1>
        <BookingForm />
      </section>
      <Footer />
    </main>
  )
}
