import type { Metadata } from 'next'
import { LandingPageLayout } from '@/components/lp/LandingPageLayout'

export const metadata: Metadata = {
  title: 'Short-Let Management Canary Wharf | Taj Cribs | E14 Specialists',
  description:
    'Airbnb and short-let management in Canary Wharf E14. Corporate let specialists. Quality officer after every checkout. Free income estimate.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/lp/canary-wharf' },
}

export default function CanaryWharfLandingPage() {
  return (
    <LandingPageLayout
      areaLabel="Canary Wharf & E14 Property Specialists"
      headline="Short-let management in Canary Wharf. E14 specialists."
      subheadline="Corporate short-let management across Canary Wharf and E14. Strong demand from financial sector professionals and business travellers year-round."
      formTitle="Get a free estimate for your Canary Wharf property"
      defaultService="short-let-management"
      testimonialQuote="The onboarding was 48 hours flat. Professional photographer came, listing went live, first booking confirmed the same week. The management dashboard gives me full visibility."
      testimonialName="Priya M."
      testimonialRole="Buy-to-Let Investor"
      testimonialProperty="Canary Wharf E14"
    />
  )
}
