'use client'

import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import {
  COVERAGE_AREAS,
  ZONE1_CENTRE,
  ZONE1_DEFAULT_ZOOM,
} from '@/lib/data/coverage-areas'

/**
 * Interactive coverage map.
 *
 * Renders a gold pin for every area we operate in on a light Mapbox
 * base map. Tapping a pin, or an area name in the list below the
 * map, flies the map to that area and opens a per-area popup.
 *
 * Consumers should import the sibling CoverageMap.tsx wrapper,
 * which dynamically loads this file with ssr: false because
 * mapbox-gl needs `window`.
 */
export function CoverageMapClient() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<mapboxgl.Map | null>(null)
  const popupRef = useRef<mapboxgl.Popup | null>(null)
  const [ready, setReady] = useState(false)
  const [tokenMissing, setTokenMissing] = useState(false)

  // Initialise the map once on mount. We don't depend on any prop or
  // state, so this effect runs exactly once and tears down on unmount.
  useEffect(() => {
    if (!containerRef.current) return
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN
    if (!token) {
      setTokenMissing(true)
      return
    }
    mapboxgl.accessToken = token

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: ZONE1_CENTRE,
      zoom: ZONE1_DEFAULT_ZOOM,
      scrollZoom: false,
      dragRotate: false,
      pitchWithRotate: false,
    })
    mapRef.current = map

    // Flat 2D, pinch-zoom allowed but no rotation.
    map.touchZoomRotate.disableRotation()

    map.addControl(
      new mapboxgl.NavigationControl({ showCompass: false }),
      'top-right',
    )

    // Keep the canvas in sync with the container. See the commit fixing
    // the dark-rectangle bug for the full story.
    const resizeObserver = new ResizeObserver(() => {
      mapRef.current?.resize()
    })
    resizeObserver.observe(containerRef.current)

    map.on('load', () => {
      map.resize()

      // One gold pin per area. The map is framed to fit every pin.
      const bounds = new mapboxgl.LngLatBounds()
      for (const area of COVERAGE_AREAS) {
        const el = document.createElement('button')
        el.type = 'button'
        el.setAttribute('aria-label', `${area.name} ${area.postcode}`)
        el.style.cssText =
          'width:18px;height:18px;border-radius:9999px;background:#C9A96E;border:3px solid #10291F;box-shadow:0 2px 6px rgba(0,0,0,0.25);cursor:pointer;padding:0'
        el.addEventListener('click', (e) => {
          e.stopPropagation()
          focusArea(area.slug)
        })
        new mapboxgl.Marker({ element: el }).setLngLat(area.centre).addTo(map)
        bounds.extend(area.centre)
      }
      map.fitBounds(bounds, { padding: 80, duration: 0, maxZoom: 10.5 })

      setReady(true)
    })

    return () => {
      resizeObserver.disconnect()
      popupRef.current?.remove()
      popupRef.current = null
      map.remove()
      mapRef.current = null
    }
    // focusArea only reads refs, so it is safe to leave out.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // External focus from the area list: fly to the centre and open the
  // per-area popup.
  function focusArea(slug: string) {
    const map = mapRef.current
    if (!map) return
    const area = COVERAGE_AREAS.find((a) => a.slug === slug)
    if (!area) return
    map.flyTo({ center: area.centre, zoom: 13, speed: 1.2 })
    openAreaPopup(map, area.centre, {
      name: area.name,
      postcode: area.postcode,
      oneLiner: area.oneLiner,
    })
  }

  return (
    <div>
      <div className="relative h-[400px] lg:h-[500px] rounded-md overflow-hidden border border-light-line bg-cream">
        <div ref={containerRef} className="h-full w-full" />
        {tokenMissing && (
          <div className="absolute inset-0 flex items-center justify-center bg-cream text-navy-900/70 text-sm px-6 text-center">
            Map unavailable. The area list below covers everywhere we operate.
          </div>
        )}
        {!ready && !tokenMissing && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-navy-900/55 text-xs uppercase tracking-widest">
            Loading map…
          </div>
        )}
      </div>

      <p className="mt-8 text-xs uppercase tracking-widest font-semibold text-navy-900/45">
        Areas we cover include
      </p>

      <ul className="mt-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-3 text-sm">
        {COVERAGE_AREAS.map((area) => (
          <li key={area.slug}>
            <button
              type="button"
              onClick={() => focusArea(area.slug)}
              className="w-full text-left text-navy-900/70 hover:text-gold-600 transition-colors"
            >
              <span className="font-bold">{area.name}</span>{' '}
              <span className="font-medium text-navy-900/40">
                {area.postcode}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )

  /**
   * Open (or replace) the single popup with per-area content. Used
   * when the user taps an area name in the list below the map.
   */
  function openAreaPopup(
    map: mapboxgl.Map,
    coords: mapboxgl.LngLatLike,
    props: { name: string; postcode: string; oneLiner: string },
  ) {
    popupRef.current?.remove()
    const html = `
      <div class="coverage-popup-content">
        <p class="coverage-popup-title">${escapeHtml(props.name)} <span>${escapeHtml(props.postcode)}</span></p>
        <p class="coverage-popup-body">${escapeHtml(props.oneLiner)}</p>
        <a href="/contact" class="coverage-popup-cta">Free valuation</a>
      </div>
    `
    popupRef.current = new mapboxgl.Popup({
      offset: 12,
      closeButton: true,
      closeOnClick: true,
      className: 'coverage-popup',
      maxWidth: '260px',
    })
      .setLngLat(coords)
      .setHTML(html)
      .addTo(map)
  }

}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
