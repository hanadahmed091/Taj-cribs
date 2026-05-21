'use client'

import dynamic from 'next/dynamic'

/**
 * Wrapper for the coverage map. Mapbox GL JS touches `window` during
 * initialisation, so the client component is loaded with ssr: false.
 * next/dynamic with ssr: false requires its parent to be a Client
 * Component in App Router, which is why this wrapper carries
 * 'use client' even though it does almost nothing itself.
 *
 * Consumers anywhere on the site (Server or Client Components)
 * import this file and render <CoverageMap /> directly.
 */
const CoverageMap = dynamic(
  () => import('./CoverageMap.client').then((m) => m.CoverageMapClient),
  {
    ssr: false,
    loading: () => (
      <div className="h-[400px] lg:h-[500px] rounded-md border border-light-line bg-navy-950 flex items-center justify-center text-white/55 text-xs uppercase tracking-widest">
        Loading map…
      </div>
    ),
  },
)

export { CoverageMap }
