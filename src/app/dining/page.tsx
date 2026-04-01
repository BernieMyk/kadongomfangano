import { Metadata } from 'next'
import { DiningHero } from '@/components/dining/DiningHero'
import { DiningVenues } from '@/components/dining/DiningVenues'
import { MenuHighlights } from '@/components/dining/MenuHighlights'
import { DiningExperience } from '@/components/dining/DiningExperience'
import { DiningCTA } from '@/components/dining/DiningCTA'

export const metadata: Metadata = {
  title: 'Dining | Kadongo Resort',
  description: 'Experience exceptional dining at Kadongo Resort with lakeside views, local Luo cuisine, and international flavors. From fresh Nile perch to gourmet experiences.',
  keywords: 'Kadongo Resort dining, Mfangano Island restaurants, Luo cuisine, lakeside dining, Nile perch, resort restaurants',
  openGraph: {
    title: 'Dining | Kadongo Resort',
    description: 'Experience exceptional dining at Kadongo Resort with lakeside views, local Luo cuisine, and international flavors.',
    images: ['/images/dining/hero.jpg'],
  },
}

export const dynamic = 'force-dynamic'

export default function DiningPage() {
  return (
    <main className="min-h-screen">
      <DiningHero />
      <DiningVenues />
      <MenuHighlights />
      <DiningExperience />
      <DiningCTA />
    </main>
  )
}