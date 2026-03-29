import Image from 'next/image'

type RoomCardProps = {
  title: string
  description: string
  price: string
  image: string
  category?: string
  badge?: string
  guests?: number
  bed?: string
  size?: string
}

export function RoomCard({ title, description, price, image, badge, guests, bed, size }: RoomCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
      <div className="relative h-52 w-full">
        {badge && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
            {badge}
          </span>
        )}
        <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="p-5">
        {(guests || bed || size) && (
          <div className="mb-3 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-400">
            {guests && <span>👥 {guests} Guests</span>}
            {bed && <span>🛏️ {bed}</span>}
            {size && <span>📐 {size}</span>}
          </div>
        )}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{description}</p>
        <p className="mt-3 text-lg font-semibold text-primary dark:text-primary-light">{price}</p>
      </div>
    </article>
  )
}
