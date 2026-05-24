'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Respect reduced-motion preference.
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    // Skip Lenis on touch-primary devices (phones, most tablets).
    // Native mobile scroll already has excellent inertia and rubber-band
    // physics; Lenis layers a continuous requestAnimationFrame loop on
    // top that reads/writes scroll position on every frame. On mid-range
    // mobile that extra main-thread work competes with compositor
    // animations (marquee, hero) for the frame budget — purely cost,
    // no UX gain. `(pointer: coarse)` is the modern way to detect
    // touch-primary input without false-positives on hybrid laptops
    // (which still report `(pointer: fine)` for their trackpad).
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches
    if (isTouchDevice) return

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    })

    let rafId = 0
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
