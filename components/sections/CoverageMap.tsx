'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'

/**
 * Wrapper for the coverage map. Mapbox GL JS touches `window` during
 * initialisation, so the client component is loaded with ssr: false.
 * next/dynamic with ssr: false requires its parent to be a Client
 * Component in App Router, which is why this wrapper carries
 * 'use client'.
 *
 * On top of that, the map is the single heaviest component on the site
 * (mapbox-gl plus its stylesheet). We gate it behind an
 * IntersectionObserver so the chunk and the map only load once the
 * section is near the viewport. The rest of the page stays interactive
 * while the map is still off screen.
 *
 * Consumers anywhere on the site (Server or Client Components) import
 * this file and render <CoverageMap /> directly.
 */
const CoverageMapInner = dynamic(
  () => import('./CoverageMap.client').then((m) => m.CoverageMapClient),
  {
    ssr: false,
    loading: () => <MapPlaceholder />,
  },
)

function MapPlaceholder() {
  return (
    <div className="h-[400px] lg:h-[500px] rounded-md border border-light-line bg-navy-950 flex items-center justify-center text-white/55 text-xs uppercase tracking-widest">
      Loading map…
    </div>
  )
}

export function CoverageMap() {
  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (show) return
    const el = ref.current
    if (!el) return
    // Older browsers without IntersectionObserver: just load it.
    if (typeof IntersectionObserver === 'undefined') {
      setShow(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true)
          observer.disconnect()
        }
      },
      // Start loading a little before the map scrolls into view so it
      // is ready by the time the user reaches it.
      { rootMargin: '300px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [show])

  return <div ref={ref}>{show ? <CoverageMapInner /> : <MapPlaceholder />}</div>
}
