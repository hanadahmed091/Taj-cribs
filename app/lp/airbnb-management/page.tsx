import type { Metadata } from 'next'
import { LandingPageLayout } from '@/components/lp/LandingPageLayout'

export const metadata: Metadata = {
  title: 'Airbnb & Short-Let Management London | Taj Cribs',
  description:
    'Full-service Airbnb and short-let management in Central London. Listings, guests, cleaning, 24/7 support. Free income estimate for your property.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/lp/airbnb-management' },
}

export default function AirbnbManagementLandingPage() {
  return (
    <LandingPageLayout
      areaLabel="Airbnb & Short-Let Management, Central London"
      headline="Your London property. Fully managed. Maximum returns."
      subheadline="We handle listings, bookings, guests, housekeeping and maintenance. You receive one monthly payment. Nothing else required from you."
      formTitle="Get your free income estimate"
      defaultService="short-let-management"
      // Testimonial intentionally omitted — the previous attribution
      // (James T. / Kensington Gate W8) was tied to an invented
      // portfolio. Re-add a verified landlord quote here when one
      // becomes available.
    />
  )
}
