// Cookie consent state. Self-hosted, no third-party platform.
//
// We store the choice in localStorage (client-only; nothing here needs
// to be read on the server) under a versioned key, so bumping the
// version re-prompts everyone if our cookie use changes. Two outcomes:
//   'all'       -> essential + analytics
//   'essential' -> essential only (analytics rejected)
// No value means the visitor has not chosen yet, so the banner shows.

export type ConsentValue = 'all' | 'essential'

export const CONSENT_KEY = 'tajcribs_consent_v1'
// Fired on the window whenever the choice changes, so the analytics
// loader can react without a page reload.
export const CONSENT_EVENT = 'tajcribs:consentchange'

export function getStoredConsent(): ConsentValue | null {
  if (typeof window === 'undefined') return null
  try {
    const v = window.localStorage.getItem(CONSENT_KEY)
    return v === 'all' || v === 'essential' ? v : null
  } catch {
    return null
  }
}

export function setStoredConsent(value: ConsentValue): void {
  try {
    window.localStorage.setItem(CONSENT_KEY, value)
  } catch {
    // Ignore storage failures (private mode, blocked storage). The
    // banner will simply reappear next time, which is acceptable.
  }
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }))
  }
}

export function analyticsAllowed(value: ConsentValue | null): boolean {
  return value === 'all'
}
