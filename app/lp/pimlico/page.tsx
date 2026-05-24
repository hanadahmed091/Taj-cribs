import type { Metadata } from 'next'
import { LandingPageLayout } from '@/components/lp/LandingPageLayout'

export const metadata: Metadata = {
  title: 'Guaranteed Rent Pimlico | Taj Cribs | SW1 Specialists',
  description:
    'Guaranteed rent and short-let management in Pimlico SW1 and Waterloo. Managing a residential block in Pimlico. Free valuation for your SW1 property.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/lp/pimlico' },
}

export default function PimlicoLandingPage() {
  return (
    <LandingPageLayout
      areaLabel="Pimlico & SW1 Property Specialists"
      headline="Property management in Pimlico. SW1 specialists."
      subheadline="Guaranteed rent at market rate or full short-let management across Pimlico, Victoria and Waterloo. We already manage a full block in SW1."
      formTitle="Get a free valuation for your Pimlico property"
      testimonialQuote="We moved abroad and needed certainty. The guaranteed rent on our Pimlico block means we do not look at property prices or booking calendars. We just receive the payment."
      testimonialName="Devonteh"
      testimonialRole="Overseas Investors"
      testimonialProperty="Vauxhall Bridge House, Pimlico SW1"
    />
  )
}
