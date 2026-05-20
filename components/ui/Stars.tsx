import { Star } from 'lucide-react'

export function Stars({ count = 5, size = 14 }: { count?: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={size} className="fill-gold-500 text-gold-500" />
      ))}
    </div>
  )
}
