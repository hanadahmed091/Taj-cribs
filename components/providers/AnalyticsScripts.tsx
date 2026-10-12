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
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || ''

export function AnalyticsScripts() {
  const [consent, setConsent] = useState<ConsentValue | null>(null)

  useEffect(() => {
    setConsent(getStoredConsent())
    const handler = () => setConsent(getStoredConsent())
    window.addEventListener(CONSENT_EVENT, handler)
    return () => window.removeEventListener(CONSENT_EVENT, handler)
  }, [])

  const loadGtm = Boolean(GTM_ID) && analyticsAllowed(consent)
  const loadMetaPixel = Boolean(META_PIXEL_ID) && analyticsAllowed(consent)

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

      {/* Meta Pixel for Facebook and Instagram ads. Same consent rule as
          GTM. Set NEXT_PUBLIC_META_PIXEL_ID in Vercel to switch it on. */}
      {loadMetaPixel && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
          document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
        </Script>
      )}
    </>
  )
}
