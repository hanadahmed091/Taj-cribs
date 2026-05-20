import type { Metadata } from 'next'
import { LandingTemplate } from '@/components/sections/LandingTemplate'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { GUARANTEED_RENT_FAQS } from '@/lib/data/faqs'
import { FaqJsonLd } from '@/components/seo/FaqJsonLd'

export const metadata: Metadata = {
  title: 'Guaranteed Rent London — Fixed Monthly Income',
  description:
    'Free valuation in 24 hours. Fixed monthly rent for 3-5 years. No voids. No fees. Central London landlords only.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/lp/guaranteed-rent' },
}

export default function GuaranteedRentLandingPage() {
  return (
    <>
      <FaqJsonLd faqs={GUARANTEED_RENT_FAQS.slice(0, 6)} />
      <LandingTemplate
        eyebrow="Guaranteed Rent — Central London"
        heroHeadline={
          <>
            Guaranteed rent. <br />
            <span className="text-gold-500">Fixed. Monthly.</span>
          </>
        }
        heroSub="Tell us about your property. We come back with a fixed monthly figure — guaranteed for 3 to 5 years — within one business day."
        bullets={[
          'Fixed monthly payment',
          'No void periods, ever',
          'Maintenance included',
          'No agency fees',
          'Same payment date every month',
          '3-5 year contracted term',
        ]}
        formSource="lp_guaranteed_rent"
        defaultService="guaranteed-rent"
        proofPoints={[
          { label: 'Properties under guarantee', value: '18' },
          { label: 'Average term', value: '4.2 yrs' },
          { label: 'Missed payments', value: '0' },
          { label: 'Onboarding time', value: '21 days' },
        ]}
      />
      <Testimonials />
      <FAQ items={GUARANTEED_RENT_FAQS.slice(0, 6)} heading="The questions landlords always ask." />
    </>
  )
}
