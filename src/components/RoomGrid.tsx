import { RoomCard } from '@/components/RoomCard'

const rooms = [
  {
    title: 'Lake View Suite',
    description: 'Panoramic windows overlooking Lake Victoria, premium amenities, and serene lake breezes.',
    price: '$189 / night',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80',
    category: 'lake',
    badge: 'Best Seller',
    guests: 2,
    bed: 'King Bed',
    size: '45m²'
  },
  {
    title: 'Garden Villa',
    description: 'Private villa surrounded by tropical gardens with dedicated butler service for families.',
    price: '$329 / night',
    image: 'https://images.unsplash.com/photo-1590490360182-c31938a86497?auto=format&fit=crop&w=800&q=80',
    category: 'garden',
    guests: 4,
    bed: '2 Queens',
    size: '65m²'
  },
  {
    title: 'Traditional Banda',
    description: 'Authentic Luo-style cottage with modern comforts, steps from the lakeshore.',
    price: '$149 / night',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    category: 'banda',
    badge: 'Authentic',
    guests: 2,
    bed: 'Queen Bed',
    size: '35m²'
  },
]

export function RoomGrid() {
  return (
    <div id="rooms" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {rooms.map((room) => (
        <RoomCard key={room.title} {...room} />
      ))}
    </div>
  )
}
