import type { Metadata } from 'next'
import { LandingPageLayout } from '@/components/lp/LandingPageLayout'

export const metadata: Metadata = {
  title: 'Property Management Central London | Guaranteed Rent | Taj Cribs',
  description:
    'Short-let management and guaranteed rent specialists across Central London. Marylebone, Kensington, Pimlico, Mayfair, Chelsea and Westminster. Free valuation.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/lp/central-london' },
}

export default function CentralLondonLandingPage() {
  return (
    <LandingPageLayout
      areaLabel="Central London Property Specialists"
      headline="Central London property management. Done properly."
      subheadline="Guaranteed rent at market rate or full short-let management across Central London. Operating in Marylebone, Kensington, Pimlico, Mayfair, Chelsea, Westminster and beyond."
      formTitle="Get your free property valuation"
      testimonialQuote="We handed over the full Marylebone block and have not thought about it since. Guaranteed rent hits our account on the same day every month without fail."
      testimonialName="Richard & Caroline H."
      testimonialRole="Property Investors"
      testimonialProperty="Beaumont Court, Marylebone W1"
    />
  )
}
