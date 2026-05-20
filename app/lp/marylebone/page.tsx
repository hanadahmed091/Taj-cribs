import type { Metadata } from 'next'
import { LandingTemplate } from '@/components/sections/LandingTemplate'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { GUARANTEED_RENT_FAQS } from '@/lib/data/faqs'
import { FaqJsonLd } from '@/components/seo/FaqJsonLd'
import { getAreaBySlug } from '@/lib/data/areas'

const SLUG = 'marylebone'

export const metadata: Metadata = {
  title: 'Marylebone Landlords — Guaranteed Rent & Short-Let Management',
  description:
    'Marylebone W1 specialists. Free property valuation in 24 hours. Guaranteed monthly rent or full short-let management.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/lp/marylebone' },
}

export default function MaryleboneLandingPage() {
  const area = getAreaBySlug(SLUG)!
  const heroImage = area.properties[0]?.imageUrl

  return (
    <>
      <FaqJsonLd faqs={GUARANTEED_RENT_FAQS.slice(0, 5)} />
      <LandingTemplate
        eyebrow="Marylebone W1 Landlords"
        heroHeadline={
          <>
            We manage Marylebone. <br />
            <span className="text-gold-500">Better than anyone.</span>
          </>
        }
        heroSub={`We already operate a full residential block in Marylebone under guaranteed rent. Same scheme, same payment reliability — for your property.`}
        bullets={[
          'Local team based in W1',
          'Operating a 14-unit Marylebone block',
          '88% occupancy across our W1 stock',
          'Free 24h valuation',
          'Same-day monthly payment',
          'Block & portfolio specialists',
        ]}
        formSource="lp_marylebone"
        heroImage={heroImage}
        proofPoints={[
          { label: 'Avg monthly rate', value: area.avgMonthlyRate },
          { label: 'Avg nightly rate', value: area.avgNightlyRate },
          { label: 'Our occupancy', value: '88%' },
          { label: 'Onboarding', value: '48h' },
        ]}
      />
      <Testimonials />
      <FAQ items={GUARANTEED_RENT_FAQS.slice(0, 5)} heading="Marylebone landlord questions." />
    </>
  )
}
