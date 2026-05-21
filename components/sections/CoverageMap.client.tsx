'use client'

import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import {
  COVERAGE_AREAS,
  coverageGeoJson,
  type CoverageFeatureId,
} from '@/lib/data/coverage-areas'

/**
 * Interactive Mapbox coverage map.
 *
 * Renders a flat 2D map of Central London with a navy/gold polygon
 * for each coverage area, plus a condensed area list below the map.
 * Tapping any polygon (or any area name in the list) flies the map
 * to that area and opens a brand-styled popup with a Free Valuation
 * link.
 *
 * This is the client implementation. Consumers should import the
 * sibling `CoverageMap.tsx` wrapper, which dynamically loads this
 * file with ssr: false because mapbox-gl needs `window`.
 */
export function CoverageMapClient() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<mapboxgl.Map | null>(null)
  const popupRef = useRef<mapboxgl.Popup | null>(null)
  const hoveredIdRef = useRef<CoverageFeatureId | null>(null)
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
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-0.1278, 51.5074],
      zoom: 12,
      scrollZoom: false,
      dragRotate: false,
      pitchWithRotate: false,
    })
    mapRef.current = map

    // Flat 2D — disable rotation gesture entirely.
    map.touchZoomRotate.disableRotation()

    map.addControl(
      new mapboxgl.NavigationControl({ showCompass: false }),
      'top-right',
    )

    // Resize on container size changes. Mapbox's canvas dimensions are
    // measured once at init; if the container resolves to a different
    // size later (CSS transitions, lg-breakpoint height change, mobile
    // browser chrome bar toggling) the canvas keeps its initial size
    // and tiles paint into a region that's no longer visible. The
    // observer keeps the canvas in sync with the container.
    const resizeObserver = new ResizeObserver(() => {
      mapRef.current?.resize()
    })
    resizeObserver.observe(containerRef.current)

    map.on('load', () => {
      // Force a resize in case the container had its final dimensions
      // resolved after init. Without this, tiles can paint into a
      // canvas sized to a stale measurement.
      map.resize()

      map.addSource('coverage', {
        type: 'geojson',
        data: coverageGeoJson,
      })

      // Fill layer — navy at 30% opacity, 50% on hover.
      map.addLayer({
        id: 'coverage-fill',
        type: 'fill',
        source: 'coverage',
        paint: {
          'fill-color': '#0a1929',
          'fill-opacity': [
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            0.5,
            0.3,
          ],
        },
      })

      // Border — gold, slightly thicker on hover.
      map.addLayer({
        id: 'coverage-line',
        type: 'line',
        source: 'coverage',
        paint: {
          'line-color': '#d4af7a',
          'line-width': [
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            2,
            1.5,
          ],
        },
      })

      setReady(true)
    })

    // Hover state for desktop pointer users.
    map.on('mousemove', 'coverage-fill', (e) => {
      if (!e.features || e.features.length === 0) return
      map.getCanvas().style.cursor = 'pointer'
      const id = e.features[0].id as CoverageFeatureId
      if (hoveredIdRef.current !== null && hoveredIdRef.current !== id) {
        map.setFeatureState(
          { source: 'coverage', id: hoveredIdRef.current },
          { hover: false },
        )
      }
      if (hoveredIdRef.current !== id) {
        map.setFeatureState({ source: 'coverage', id }, { hover: true })
        hoveredIdRef.current = id
      }
    })

    map.on('mouseleave', 'coverage-fill', () => {
      map.getCanvas().style.cursor = ''
      if (hoveredIdRef.current !== null) {
        map.setFeatureState(
          { source: 'coverage', id: hoveredIdRef.current },
          { hover: false },
        )
        hoveredIdRef.current = null
      }
    })

    map.on('click', 'coverage-fill', (e) => {
      if (!e.features || e.features.length === 0) return
      const props = e.features[0].properties as {
        name: string
        postcode: string
        oneLiner: string
      } | null
      if (!props) return
      openPopup(map, e.lngLat, props)
    })

    return () => {
      resizeObserver.disconnect()
      popupRef.current?.remove()
      popupRef.current = null
      map.remove()
      mapRef.current = null
      hoveredIdRef.current = null
    }
  }, [])

  // External focus from the condensed area list: fly to the centre
  // and open the popup. Called from each list button below.
  function focusArea(slug: string) {
    const map = mapRef.current
    if (!map) return
    const area = COVERAGE_AREAS.find((a) => a.slug === slug)
    if (!area) return
    map.flyTo({ center: area.centre, zoom: 13, speed: 1.2 })
    openPopup(map, area.centre, {
      name: area.name,
      postcode: area.postcode,
      oneLiner: area.oneLiner,
    })
  }

  return (
    <div>
      {/* Map container — taller on desktop. The ref'd inner div uses
          h-full w-full instead of `absolute inset-0` because Mapbox
          forces position: relative on the container at init time,
          which would otherwise collapse an absolute+inset-0 element
          to zero height. Explicit dimensions make the container
          robust against that override. */}
      <div className="relative h-[400px] lg:h-[500px] rounded-md overflow-hidden border border-light-line bg-navy-950">
        <div ref={containerRef} className="h-full w-full" />
        {tokenMissing && (
          <div className="absolute inset-0 flex items-center justify-center bg-navy-950 text-white/80 text-sm px-6 text-center">
            Map unavailable. The area list below covers everywhere we operate.
          </div>
        )}
        {!ready && !tokenMissing && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-white/55 text-xs uppercase tracking-widest">
            Loading map…
          </div>
        )}
      </div>

      {/* Condensed area list — synchronised with the map. Tapping a
          name flies the map to that area and opens its popup. */}
      <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-3 text-sm">
        {COVERAGE_AREAS.map((area) => (
          <li key={area.slug}>
            <button
              type="button"
              onClick={() => focusArea(area.slug)}
              className="w-full text-left text-navy-900/70 hover:text-gold-600 transition-colors"
            >
              {area.name}{' '}
              <span className="text-navy-900/40 font-medium">
                {area.postcode}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )

  /**
   * Open (or replace) the single popup at the given coordinates with
   * brand-styled content and a Free Valuation link.
   */
  function openPopup(
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
