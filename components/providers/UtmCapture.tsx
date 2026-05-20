'use client'

import { useEffect } from 'react'

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid'] as const

export function UtmCapture() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      const params = new URLSearchParams(window.location.search)
      const captured: Record<string, string> = {}
      for (const key of UTM_KEYS) {
        const value = params.get(key)
        if (value) captured[key] = value
      }
      if (Object.keys(captured).length > 0) {
        sessionStorage.setItem(
          'primeco_utm',
          JSON.stringify({ ...captured, landed_at: new Date().toISOString() }),
        )
      }
    } catch {
      // sessionStorage may be unavailable (private mode, etc.) — fail silently.
    }
  }, [])

  return null
}
