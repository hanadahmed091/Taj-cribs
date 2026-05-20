import type { Metadata } from 'next'
import { LandingTemplate } from '@/components/sections/LandingTemplate'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { SHORT_LET_FAQS } from '@/lib/data/faqs'
import { FaqJsonLd } from '@/components/seo/FaqJsonLd'
import { getAreaBySlug } from '@/lib/data/areas'

const SLUG = 'high-street-kensington'

export const metadata: Metadata = {
  title: 'Kensington Landlords — Short-Let & Guaranteed Rent Specialists',
  description:
    'High Street Kensington W8 short-let management. 94% occupancy across our W8 portfolio. Free valuation in 24 hours.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/lp/kensington' },
}

export default function KensingtonLandingPage() {
  const area = getAreaBySlug(SLUG)!
  const heroImage = area.properties[0]?.imageUrl

  return (
    <>
      <FaqJsonLd faqs={SHORT_LET_FAQS.slice(0, 5)} />
      <LandingTemplate
        eyebrow="High Street Kensington W8"
        heroHeadline={
          <>
            Kensington short-let. <br />
            <span className="text-gold-500">94% occupied.</span>
          </>
        }
        heroSub="Our W8 portfolio achieves 94% occupancy year-round. See what your Kensington property could earn."
        bullets={[
          'Operating across W8 today',
          '94% average occupancy',
          'Multi-platform listings',
          'In-house housekeeping team',
          'Owner dashboard live',
          'Live in 48 hours',
        ]}
        formSource="lp_kensington"
        defaultService="short-let-management"
        heroImage={heroImage}
        proofPoints={[
          { label: 'Avg monthly rate', value: area.avgMonthlyRate },
          { label: 'Avg nightly rate', value: area.avgNightlyRate },
          { label: 'Occupancy', value: '94%' },
          { label: 'Onboarding', value: '48h' },
        ]}
      />
      <Testimonials />
      <FAQ items={SHORT_LET_FAQS.slice(0, 5)} heading="Kensington landlord questions." />
    </>
  )
}
