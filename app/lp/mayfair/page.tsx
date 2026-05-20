import type { Metadata } from 'next'
import { LandingPageLayout } from '@/components/lp/LandingPageLayout'

export const metadata: Metadata = {
  title: 'Luxury Property Management Mayfair | Taj Cribs | W1 Specialists',
  description:
    'Ultra-premium short-let management in Mayfair W1. White-glove service, high-net-worth guests, maximum nightly rates. Free valuation for your Mayfair property.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/lp/mayfair' },
}

export default function MayfairLandingPage() {
  return (
    <LandingPageLayout
      areaLabel="Mayfair & W1 Luxury Property Specialists"
      headline="Short-let management in Mayfair. Premium W1 specialists."
      subheadline="Ultra-premium short-let management for Mayfair properties. We attract high-net-worth guests and corporate clients commanding London’s highest nightly rates."
      formTitle="Get a free estimate for your Mayfair property"
      defaultService="short-let-management"
      testimonialQuote="My Mayfair apartment had been difficult to let on a long-term basis. Short-let management was the obvious answer and the team delivered immediately. Guest quality is exceptional."
      testimonialName="Amir K."
      testimonialRole="Luxury Property Owner"
      testimonialProperty="Mayfair Residences, W1"
    />
  )
}
