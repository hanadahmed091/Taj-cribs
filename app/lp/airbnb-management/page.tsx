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
      areaLabel="Airbnb & Short-Let Management — Central London"
      headline="Your London property. Fully managed. Maximum returns."
      subheadline="We handle listings, bookings, guests, housekeeping and maintenance. You receive one monthly payment. Nothing else required from you."
      formTitle="Get your free income estimate"
      defaultService="short-let-management"
      testimonialQuote="After switching from a standard letting agent to short-let management with Taj Cribs, we saw over a 50% increase in revenue within the first three months."
      testimonialName="James T."
      testimonialRole="Private Landlord"
      testimonialProperty="Kensington Gate, High Street Kensington W8"
    />
  )
}
