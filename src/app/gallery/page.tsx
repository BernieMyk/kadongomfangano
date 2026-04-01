import { Metadata } from 'next'
import GalleryClient from '@/components/GalleryClient'

export const metadata: Metadata = {
  title: 'Gallery | Kadongo Resort - Mfangano Island',
  description: 'Photo Gallery — A visual journey through Kadongo Resort\'s rooms, dining, and the breathtaking beauty of Mfangano Island.',
}

export default function GalleryPage() {
  return <GalleryClient />
}