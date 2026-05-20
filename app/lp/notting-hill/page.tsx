import type { Metadata } from 'next'
import { LandingPageLayout } from '@/components/lp/LandingPageLayout'

export const metadata: Metadata = {
  title: 'Airbnb Management Notting Hill | Taj Cribs | W11 Specialists',
  description:
    'Short-let and Airbnb management in Notting Hill W11. Quality officer after every checkout. Free income estimate for your Notting Hill property.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/lp/notting-hill' },
}

export default function NottingHillLandingPage() {
  return (
    <LandingPageLayout
      areaLabel="Notting Hill & W11 Property Specialists"
      headline="Short-let management in Notting Hill. W11 specialists."
      subheadline="Boutique short-let management across Notting Hill, W11 and W2. Strong year-round demand from international guests and corporate travellers."
      formTitle="Get a free estimate for your Notting Hill property"
      defaultService="short-let-management"
      testimonialQuote="After switching from a standard letting agent to short-let management with Taj Cribs, we saw over a 50% increase in revenue within the first three months."
      testimonialName="James T."
      testimonialRole="Private Landlord"
      testimonialProperty="Notting Hill W11"
    />
  )
}
