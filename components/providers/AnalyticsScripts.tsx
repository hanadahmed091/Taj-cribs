'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import {
  getStoredConsent,
  analyticsAllowed,
  CONSENT_EVENT,
  type ConsentValue,
} from '@/lib/consent'

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || ''

export function AnalyticsScripts() {
  const [consent, setConsent] = useState<ConsentValue | null>(null)

  useEffect(() => {
    setConsent(getStoredConsent())
    const handler = () => setConsent(getStoredConsent())
    window.addEventListener(CONSENT_EVENT, handler)
    return () => window.removeEventListener(CONSENT_EVENT, handler)
  }, [])

  const loadGtm = Boolean(GTM_ID) && analyticsAllowed(consent)

  return (
    <>
      {/* dataLayer is just an array and sets no cookies, so it is safe
          to initialise without consent. pushDataLayer() calls elsewhere
          stay harmless until GTM actually loads. */}
      <Script id="dataLayer-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];`}
      </Script>

      {/* GTM (which sets analytics cookies) loads only once the visitor
          has accepted analytics. Granting consent dispatches the consent
          event, which flips this on without a page reload. */}
      {loadGtm && (
        <Script id="gtm-base" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
        </Script>
      )}
    </>
  )
}
