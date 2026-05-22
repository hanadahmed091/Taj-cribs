'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { getStoredConsent, setStoredConsent } from '@/lib/consent'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [showPrefs, setShowPrefs] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  // Only show the banner when no choice has been made yet.
  useEffect(() => {
    if (getStoredConsent() === null) setVisible(true)
  }, [])

  // Move focus to the banner so keyboard and screen-reader users are
  // taken to it. It is non-modal, so focus is not trapped and the rest
  // of the page stays usable.
  useEffect(() => {
    if (visible) panelRef.current?.focus()
  }, [visible])

  function decide(value: 'all' | 'essential') {
    setStoredConsent(value)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6 pointer-events-none">
      <div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="false"
        aria-labelledby="cookie-consent-title"
        aria-describedby="cookie-consent-desc"
        className="pointer-events-auto mx-auto max-w-content bg-navy-950 text-white border border-white/15 rounded-md shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)] p-5 sm:p-7 focus:outline-none"
      >
        <div className="lg:flex lg:items-start lg:gap-10">
          <div className="lg:flex-1">
            <h2
              id="cookie-consent-title"
              className="font-bold text-fluid-lg tracking-tight"
            >
              Your privacy
            </h2>
            <p
              id="cookie-consent-desc"
              className="mt-2 text-sm text-white/70 leading-relaxed max-w-2xl"
            >
              We use essential cookies to make this site work. With your
              permission we also use analytics cookies to understand how the
              site is used, so we can improve it. You can accept all, keep only
              the essential ones, or choose what to allow. See our{' '}
              <Link
                href="/privacy-policy"
                className="font-semibold text-gold-400 underline underline-offset-4 hover:text-gold-300 transition-colors"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          {/* Buttons. Accept and reject are given equal prominence so
              rejecting is no harder than accepting. */}
          <div className="mt-5 lg:mt-0 flex flex-col sm:flex-row lg:flex-col gap-3 lg:w-56 shrink-0">
            <button
              type="button"
              onClick={() => decide('all')}
              className="btn-gold w-full justify-center !py-3"
            >
              Accept all
            </button>
            <button
              type="button"
              onClick={() => decide('essential')}
              className="btn-outline-light w-full justify-center !py-3"
            >
              Essential only
            </button>
            <button
              type="button"
              onClick={() => setShowPrefs((s) => !s)}
              aria-expanded={showPrefs}
              aria-controls="cookie-consent-prefs"
              className="text-sm font-semibold text-white/70 hover:text-gold-400 transition-colors underline underline-offset-4 self-center lg:self-start"
            >
              {showPrefs ? 'Hide preferences' : 'Manage preferences'}
            </button>
          </div>
        </div>

        {showPrefs && (
          <div
            id="cookie-consent-prefs"
            className="mt-6 pt-6 border-t border-white/10 space-y-4"
          >
            <div className="flex items-start justify-between gap-4">
              <label htmlFor="cookie-essential" className="block">
                <span className="font-semibold text-sm">Essential cookies</span>
                <span className="block text-xs text-white/60 mt-1 max-w-md">
                  Always on. Needed for the site to function, such as
                  remembering this choice. They set no tracking cookies.
                </span>
              </label>
              <input
                id="cookie-essential"
                type="checkbox"
                checked
                disabled
                aria-label="Essential cookies, always on"
                className="mt-1 h-4 w-4 shrink-0 accent-gold-500 opacity-60"
              />
            </div>

            <div className="flex items-start justify-between gap-4">
              <label htmlFor="cookie-analytics" className="block">
                <span className="font-semibold text-sm">Analytics cookies</span>
                <span className="block text-xs text-white/60 mt-1 max-w-md">
                  Help us understand how visitors use the site so we can
                  improve it. Off until you allow them.
                </span>
              </label>
              <input
                id="cookie-analytics"
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 accent-gold-500"
              />
            </div>

            <button
              type="button"
              onClick={() => decide(analytics ? 'all' : 'essential')}
              className="btn-outline-gold !py-3 mt-2"
            >
              Save choices
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
