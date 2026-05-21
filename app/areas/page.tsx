import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/ui/FadeIn'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { CoverageMap } from '@/components/sections/CoverageMap'

export const metadata: Metadata = {
  title: 'Areas We Cover Across Central London',
  description:
    'Short-let management and guaranteed rent across Marylebone, Mayfair, Kensington, Pimlico, Chelsea, Westminster, Notting Hill and Canary Wharf.',
  alternates: { canonical: '/areas' },
}

export default function AreasIndexPage() {
  return (
    <>
      <section className="relative hero-bg text-white pt-[120px] pb-20 lg:pt-[160px] lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-60 pointer-events-none" />
        <div className="container-edge relative max-w-3xl">
          <SectionLabel className="!justify-start">Coverage Map</SectionLabel>
          <h1 className="mt-6 text-hero font-extrabold tracking-tightest leading-[0.95]">
            Central London, <br />
            <span className="text-gold-500">inside out.</span>
          </h1>
          <p className="mt-8 text-fluid-lg text-white/75 leading-relaxed">
            We are operators, not just agents, and that means we operate exclusively
            in postcodes we know intimately. Tap any area on the map below to see
            what we cover.
          </p>
        </div>
      </section>

      <section className="bg-cream section-pad">
        <div className="container-edge">
          <FadeIn>
            <CoverageMap />
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-10 text-sm text-navy-900/60 text-center">
              Properties outside these areas considered.{' '}
              <Link
                href="/contact"
                className="text-navy-900 underline decoration-gold-500 underline-offset-4 hover:text-gold-600 transition-colors"
              >
                Get in touch
              </Link>
              .
            </p>
          </FadeIn>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
