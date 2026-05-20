import type { Metadata } from 'next'
import { LandingPageLayout } from '@/components/lp/LandingPageLayout'

export const metadata: Metadata = {
  title: 'Airbnb Management Kensington | Taj Cribs | W8 Specialists',
  description:
    'Short-let and Airbnb management specialists in High Street Kensington W8. Quality officer after every checkout. Free income estimate for your W8 property.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/lp/kensington' },
}

export default function KensingtonLandingPage() {
  return (
    <LandingPageLayout
      areaLabel="Kensington & W8 Property Specialists"
      headline="Short-let management in Kensington. W8 specialists."
      subheadline="We manage short-let and guaranteed rent properties across High Street Kensington and W8. Local experts who know exactly what Kensington guests expect."
      formTitle="Get a free estimate for your Kensington property"
      defaultService="short-let-management"
      testimonialQuote="After switching from a standard letting agent to short-let management with Taj Cribs, we saw over a 50% increase in revenue within the first three months."
      testimonialName="James T."
      testimonialRole="Private Landlord"
      testimonialProperty="Kensington Gate, High Street Kensington W8"
    />
  )
}
