'use client'

import Link from 'next/link'
import { ThemeToggle } from '@/components/ThemeToggle'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 dark:border-slate-700/75 bg-white/80 dark:bg-slate-900/80 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:py-4">
        <Link href="/" className="text-xl font-bold text-primary dark:text-primary-light">
          KADONGO<span className="text-slate-600 dark:text-slate-400">RESORT</span>
        </Link>

        <nav className="flex items-center gap-3 md:gap-5">
          <Link href="/" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary-light">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary-light">
            About
          </Link>
          <Link href="/rooms" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary-light">
            Rooms
          </Link>
          <Link href="/amenities" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary-light">
            Amenities
          </Link>
          <Link href="/dining" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary-light">
            Dining
          </Link>
          <Link href="/gallery" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary-light">
            Gallery
          </Link>
          <Link href="/location" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary-light">
            Location
          </Link>
          <Link href="/booking" className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-dark">
            Book Now
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
