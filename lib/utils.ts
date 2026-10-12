import clsx, { type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function pushDataLayer(event: string, payload: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return
  // @ts-expect-error dataLayer is injected by GTM
  window.dataLayer = window.dataLayer || []
  // @ts-expect-error dataLayer is injected by GTM
  window.dataLayer.push({ event, ...payload })
}

/** Tell the Meta Pixel a lead was submitted. Does nothing if the pixel
 * is not loaded (no ID set, or the visitor declined analytics). */
export function trackMetaLead(payload: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return
  const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq
  if (typeof fbq === 'function') fbq('track', 'Lead', payload)
}

export function getStoredUtm() {
  if (typeof window === 'undefined') return {}
  try {
    const raw = sessionStorage.getItem('taj_cribs_utm')
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}
