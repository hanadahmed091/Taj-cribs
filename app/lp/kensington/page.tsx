import type { Metadata } from 'next'
import { LandingPageLayout } from '@/components/lp/LandingPageLayout'

export const metadata: Metadata = {
  title: 'Airbnb Management Kensington | Taj Cribs | W8 Specialists',
  description:
    'Short-let and Airbnb management in High Street Kensington W8. Quality officer after every checkout. Free income estimate for your W8 property.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/lp/kensington' },
}

export default function KensingtonLandingPage() {
  return (
    <LandingPageLayout
      areaLabel="Kensington & W8 Property Specialists"
      headline="Short-let management in Kensington. W8 specialists."
      subheadline="We manage short-let and guaranteed rent properties in High Street Kensington and W8. Request a free valuation for your Kensington property and we’ll come back within one business day."
      formTitle="Get a free estimate for your Kensington property"
      defaultService="short-let-management"
      // No testimonial here intentionally — the previously-shown
      // attribution (James T.) was tied to invented detail. Re-add a
      // verified Kensington landlord quote here when one is provided.
    />
  )
}
