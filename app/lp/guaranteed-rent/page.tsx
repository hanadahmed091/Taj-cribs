import type { Metadata } from 'next'
import { LandingPageLayout } from '@/components/lp/LandingPageLayout'

export const metadata: Metadata = {
  title: 'Guaranteed Rent London | Market Rate. Paid Monthly | Taj Cribs',
  description:
    'Get guaranteed rent on your Central London property at full market rate. Paid on the same date every month whether occupied or not. Free valuation in 24 hours.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/lp/guaranteed-rent' },
}

export default function GuaranteedRentLandingPage() {
  return (
    <LandingPageLayout
      areaLabel="Central London Property Specialists"
      headline="Guaranteed rent. Market rate. Every month."
      subheadline="We pay you the full market rental value of your Central London property on the same date every month, whether it is occupied or not. Zero voids. Zero hassle."
      formTitle="Get your free guaranteed rent offer"
      defaultService="guaranteed-rent"
      testimonialQuote="We handed over our Marylebone apartments and have not thought about them since. Guaranteed rent hits our account on the same day every month without fail."
      testimonialName="Javed"
      testimonialRole="Property Investors"
      testimonialProperty="Marylebone Apartments, W1"
    />
  )
}
