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
      // Testimonial intentionally omitted — the previous attribution
      // (Amir K. / Mayfair Apartment, W1) was invented and we have no
      // verified Mayfair landlord quote to substitute. Re-add when
      // a consented Mayfair client is available.
    />
  )
}
