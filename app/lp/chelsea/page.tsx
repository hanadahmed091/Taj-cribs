import type { Metadata } from 'next'
import { LandingPageLayout } from '@/components/lp/LandingPageLayout'

export const metadata: Metadata = {
  title: 'Short-Let Management Chelsea | Taj Cribs | SW3 Specialists',
  description:
    'Short-let and Airbnb management specialists in Chelsea SW3. Quality officer after every checkout. Free income estimate for your Chelsea property.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/lp/chelsea' },
}

export default function ChelseaLandingPage() {
  return (
    <LandingPageLayout
      areaLabel="Chelsea & SW3 Property Specialists"
      headline="Property management in Chelsea. SW3 specialists."
      subheadline="Premium short-let management across Chelsea and SW3. Consistently achieving high occupancy rates with the Taj Cribs quality standard."
      formTitle="Get a free estimate for your Chelsea property"
      defaultService="short-let-management"
      testimonialQuote="The onboarding was 48 hours flat. Professional photographer came, listing went live, first booking confirmed the same week."
      testimonialName="Priya M."
      testimonialRole="Buy-to-Let Investor"
      testimonialProperty="Chelsea Reach, SW3"
    />
  )
}
