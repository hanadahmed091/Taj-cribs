import type { Metadata } from 'next'
import { LandingTemplate } from '@/components/sections/LandingTemplate'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { SHORT_LET_FAQS } from '@/lib/data/faqs'
import { FaqJsonLd } from '@/components/seo/FaqJsonLd'

export const metadata: Metadata = {
  title: 'Airbnb Management London — 2-3x Standard Yields',
  description:
    'Full-service Airbnb and short-let management for Central London. 18% flat fee. 48-hour onboarding. Get your projected income today.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/lp/airbnb-management' },
}

export default function AirbnbManagementLandingPage() {
  return (
    <>
      <FaqJsonLd faqs={SHORT_LET_FAQS.slice(0, 6)} />
      <LandingTemplate
        eyebrow="Airbnb Management — Central London"
        heroHeadline={
          <>
            Earn 2-3x more. <br />
            <span className="text-gold-500">Fully managed.</span>
          </>
        }
        heroSub="Multi-platform short-let management for Central London apartments. We list, price, clean, host and report. You earn."
        bullets={[
          '18% flat management fee',
          'Live in 48 hours',
          'Airbnb, Booking, Vrbo, Expedia',
          'In-house housekeeping',
          'Dynamic pricing engine',
          'Owner dashboard included',
        ]}
        formSource="lp_airbnb_management"
        defaultService="short-let-management"
        proofPoints={[
          { label: 'Average yield uplift', value: '2.4x' },
          { label: 'Average occupancy', value: '87%' },
          { label: 'Onboarding time', value: '48h' },
          { label: 'Management fee', value: '18%' },
        ]}
      />
      <Testimonials />
      <FAQ items={SHORT_LET_FAQS.slice(0, 6)} heading="The questions landlords always ask." />
    </>
  )
}
