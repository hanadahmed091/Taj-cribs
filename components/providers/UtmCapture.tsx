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
      // Record where the visit started (first page + referring site) once
      // per session, so every enquiry email can say how the lead found us
      // even when there are no UTM tags. Never overwrite an earlier
      // capture: the first page of the visit is the one that matters.
      const existing = sessionStorage.getItem('taj_cribs_utm')
      const hasAdParams = Object.keys(captured).length > 0
      if (!existing || hasAdParams) {
        let referrer = ''
        try {
          if (document.referrer) {
            const host = new URL(document.referrer).hostname
            if (host !== window.location.hostname) referrer = host
          }
        } catch {
          // Malformed referrer: leave blank.
        }
        const previous = existing ? JSON.parse(existing) : {}
        sessionStorage.setItem(
          'taj_cribs_utm',
          JSON.stringify({
            landing_page: window.location.pathname,
            ...(referrer ? { referrer } : {}),
            landed_at: new Date().toISOString(),
            ...previous,
            ...captured,
          }),
        )
      }
    } catch {
      // sessionStorage may be unavailable (private mode, etc.) — fail silently.
    }
  }, [])

  return null
}
