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
      testimonialQuote="We were struggling to find a tenant for our Chelsea two-bed, so we reached out to Taj Cribs. They offered us a 3 year guaranteed rent contract at £4,000 a month, and we don't have to think about anything else."
      testimonialName="Tasneem"
      testimonialRole="Buy-to-Let Investor"
      testimonialProperty="Chelsea Reach, SW3"
    />
  )
}
