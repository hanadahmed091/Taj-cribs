'use client'

import Image from 'next/image'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

type Props = {
  /**
   * Already-merged list of photos (lead photo first, then gallery). When
   * a single image is supplied, the component renders a plain next/image
   * with no carousel chrome — matching the previous static behaviour
   * exactly so non-gallery cards stay visually identical.
   */
  images: string[]
  alt: string
  sizes: string
  /** Auto-advance interval in ms. Defaults to 3000. */
  intervalMs?: number
}

/**
 * Image carousel for the homepage Portfolio card. Auto-advances every
 * `intervalMs`, pauses on hover, crossfades between frames, and renders
 * subtle dot indicators. Respects `prefers-reduced-motion` by disabling
 * auto-advance and leaving the dots clickable for manual control.
 *
 * Designed to be a drop-in replacement for the previous inline <Image>
 * in Portfolio.tsx — same fill/sizes/object-cover behaviour, same
 * group-hover scale effect, same z-stacking under the gradient overlay.
 */
export function PortfolioCardImages({ images, alt, sizes, intervalMs = 3000 }: Props) {
  const reduce = useReducedMotion()
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)
  const isSingle = images.length <= 1

  useEffect(() => {
    if (isSingle || reduce || paused) return
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % images.length)
    }, intervalMs)
    return () => clearInterval(id)
  }, [isSingle, reduce, paused, images.length, intervalMs])

  // Single-image case: render exactly the previous static element so cards
  // with one photo are visually unchanged.
  if (isSingle) {
    return (
      <Image
        src={images[0]}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.04]"
      />
    )
  }

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence>
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={images[idx]}
            alt={alt}
            fill
            sizes={sizes}
            className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.04]"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dot indicators — z-20 to sit above the gradient overlay applied
          in Portfolio.tsx. Buttons preventDefault + stopPropagation so a
          dot click doesn't trigger the surrounding <Link>. */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show image ${i + 1} of ${images.length}`}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setIdx(i)
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === idx
                ? 'w-4 bg-gold-500'
                : 'w-1.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
