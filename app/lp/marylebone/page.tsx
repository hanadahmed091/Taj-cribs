import type { Metadata } from 'next'
import { LandingPageLayout } from '@/components/lp/LandingPageLayout'

export const metadata: Metadata = {
  title: 'Guaranteed Rent Marylebone | Taj Cribs | W1 Specialists',
  description:
    'Guaranteed rent and Airbnb management in Marylebone W1. We manage a full residential block in Marylebone. Free valuation for your W1 property.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/lp/marylebone' },
}

export default function MaryleboneLandingPage() {
  return (
    <LandingPageLayout
      areaLabel="Marylebone & W1 Property Specialists"
      headline="Property management in Marylebone. W1 specialists."
      subheadline="From guaranteed rent on full residential blocks to premium short-let management. We are Marylebone’s most experienced property management partner."
      formTitle="Get a free valuation for your Marylebone property"
      testimonialQuote="We handed over our Marylebone apartments and have not thought about them since. Guaranteed rent hits our account on the same day every month without fail."
      testimonialName="Richard & Caroline H."
      testimonialRole="Property Investors"
      testimonialProperty="Marylebone Apartments, W1"
    />
  )
}
