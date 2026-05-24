import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { SITE } from '@/lib/config'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { SiteFrame } from '@/components/layout/SiteFrame'
import { LenisProvider } from '@/components/providers/LenisProvider'
import { AnalyticsScripts } from '@/components/providers/AnalyticsScripts'
import { UtmCapture } from '@/components/providers/UtmCapture'
import { CookieConsent } from '@/components/providers/CookieConsent'
import { OrganizationJsonLd } from '@/components/seo/OrganizationJsonLd'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: 'Guaranteed Rent & Short-Let Management London | Taj Cribs',
    template: '%s | Taj Cribs',
  },
  description:
    'Guaranteed rent and short-let management for Central London landlords. Fixed monthly income, no voids, in-house housekeeping. Free 24-hour valuation.',
  keywords: [
    'guaranteed rent london',
    'guaranteed rent marylebone',
    'guaranteed rent pimlico',
    'short let management london',
    'airbnb management kensington',
    'airbnb management mayfair',
    'property management central london',
    'short term rental management london',
    'guaranteed rent scheme landlord',
    'no void periods london property',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Taj Cribs Property',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taj Cribs | Short-Let Management & Guaranteed Rent | Central London',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={poppins.variable}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body>
        <AnalyticsScripts />
        <OrganizationJsonLd />
        <UtmCapture />
        <LenisProvider>
          <SiteFrame navbar={<Navbar />} footer={<Footer />}>
            {children}
          </SiteFrame>
        </LenisProvider>
        <CookieConsent />
      </body>
    </html>
  )
}
