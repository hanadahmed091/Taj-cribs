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
          <SectionLabel className="!justify-start">Coverage</SectionLabel>
          <h1 className="mt-6 text-hero font-extrabold tracking-tightest leading-[0.95]">
            We cover all of <br />
            <span className="text-gold-500">Zone 1.</span>
          </h1>
          <p className="mt-8 text-fluid-lg text-white/75 leading-relaxed">
            Short-let, medium-term and guaranteed rent across central London. Tap any
            area below to fly the map and see what we operate there.
          </p>
        </div>
      </section>

      {/* WHO STAYS IN OUR PROPERTIES */}
      <section className="bg-white section-pad">
        <div className="container-edge">
          <div className="max-w-3xl">
            <FadeIn>
              <SectionLabel>Who stays in our properties</SectionLabel>
              <h2 className="mt-5 text-fluid-4xl font-extrabold tracking-tighter leading-tight">
                A mix of guests, <span className="text-gold-600">not just weekenders.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-7 text-fluid-lg text-navy-900/75 leading-relaxed">
                Our properties serve a wide range of guest profiles across the year.
                That mix is what keeps occupancy steady and yields above standard
                long-let returns.
              </p>
            </FadeIn>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-px bg-light-line border border-light-line">
            <FadeIn delay={0.12}>
              <div className="bg-white p-8 lg:p-10 h-full">
                <h3 className="font-bold text-fluid-xl tracking-tight">
                  Corporate relocations
                </h3>
                <p className="mt-3 text-sm text-navy-900/70 leading-relaxed">
                  Staff moving to London for new roles. Most are placed by their
                  employer and stay one to six months while they get set up. They
                  want a fully furnished home within commuting distance of the
                  City, Canary Wharf, Westminster or Mayfair. The company pays
                  the bill, so they prioritise quality and location over price.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.16}>
              <div className="bg-white p-8 lg:p-10 h-full">
                <h3 className="font-bold text-fluid-xl tracking-tight">
                  Project contractors and consultants
                </h3>
                <p className="mt-3 text-sm text-navy-900/70 leading-relaxed">
                  Finance, tech, legal and construction professionals on
                  fixed-term contracts. Typical stay runs three to nine months.
                  They need quality accommodation without signing a 12-month
                  tenancy, and they need it ready to move into on day one. Most
                  come through corporate housing platforms or via the
                  employer&apos;s relocation team.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white p-8 lg:p-10 h-full">
                <h3 className="font-bold text-fluid-xl tracking-tight">
                  Insurance and relocation housing
                </h3>
                <p className="mt-3 text-sm text-navy-900/70 leading-relaxed">
                  Guests placed by insurance companies while their own home is
                  being repaired, or by relocation agents while a family searches
                  for a permanent place. Stays vary widely, from a few weeks to
                  several months. The booking sits outside the usual short-let
                  channels, with the insurer or agent as the contracting party
                  rather than the guest.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.24}>
              <div className="bg-white p-8 lg:p-10 h-full">
                <h3 className="font-bold text-fluid-xl tracking-tight">
                  International visitors and families
                </h3>
                <p className="mt-3 text-sm text-navy-900/70 leading-relaxed">
                  Extended leisure stays for international families. Parents
                  visiting for medical treatment at Harley Street, Great Ormond
                  Street and other central London hospitals, often staying weeks
                  to months. Parents visiting students during term transitions.
                  They want a safe, properly cleaned, well-located home for a
                  stay that&apos;s too long for a hotel.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.28}>
              <div className="bg-white p-8 lg:p-10 h-full md:col-span-2">
                <h3 className="font-bold text-fluid-xl tracking-tight">
                  Short-stay leisure guests
                </h3>
                <p className="mt-3 text-sm text-navy-900/70 leading-relaxed max-w-3xl">
                  Weekend and week-long visitors booking through Airbnb,
                  Booking.com and Vrbo. These are the bookings most landlords
                  think of when they think short-let. They concentrate in the
                  more tourist-facing postcodes (Notting Hill, Mayfair,
                  Westminster) and pay a premium over peak weekends.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-cream section-pad">
        <div className="container-edge">
          <FadeIn>
            <CoverageMap />
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-14 text-fluid-lg text-navy-900/80 text-center leading-relaxed">
              Properties outside these areas considered.{' '}
              <Link
                href="/contact"
                className="font-semibold text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-600 transition-colors"
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
