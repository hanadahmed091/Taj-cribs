import type { Metadata } from 'next'
import { LandingPageLayout } from '@/components/lp/LandingPageLayout'

export const metadata: Metadata = {
  title: 'Guaranteed Rent Westminster | Taj Cribs | SW1 Specialists',
  description:
    'Guaranteed rent and property management in Westminster SW1. Market rate paid monthly. Zero voids. Free valuation for your Westminster property.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/lp/westminster' },
}

export default function WestminsterLandingPage() {
  return (
    <LandingPageLayout
      areaLabel="Westminster & SW1 Property Specialists"
      headline="Guaranteed rent in Westminster. SW1 specialists."
      subheadline="Guaranteed rent at full market rate or short-let management across Westminster and SW1. Steps from Parliament, the South Bank and St James’s Park."
      formTitle="Get a free valuation for your Westminster property"
      defaultService="guaranteed-rent"
      testimonialQuote="We moved abroad and needed certainty. The guaranteed rent means we do not look at property prices or booking calendars — we just receive the payment. Absolute peace of mind."
      testimonialName="Sarah & Tom W."
      testimonialRole="Overseas Investors"
      testimonialProperty="Westminster SW1"
    />
  )
}
