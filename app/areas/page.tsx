import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { deriveAreas } from '@/lib/data/areas'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/ui/FadeIn'
import { FinalCTA } from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'Areas We Cover Across Central London',
  description:
    'Short-let management and guaranteed rent across Marylebone, Mayfair, Kensington, Pimlico, Chelsea, Westminster, Notting Hill and Canary Wharf.',
  alternates: { canonical: '/areas' },
}

export default function AreasIndexPage() {
  const areas = deriveAreas()

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
            in postcodes we know intimately. Pick an area below to see our portfolio
            and local demand.
          </p>
        </div>
      </section>

      <section className="bg-cream section-pad">
        <div className="container-edge">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-light-line border border-light-line">
            {areas.map((area, idx) => (
              <FadeIn key={area.slug} delay={idx * 0.05}>
                {/* Card-link with inner exception: outer absolutely-positioned
                    Link routes the whole card to /areas/[slug], the inner
                    Free Valuation link sits above it (z-20) and routes to
                    /contact. */}
                <div className="group relative block bg-white p-8 lg:p-10 h-full transition-colors duration-300 hover:bg-navy-900 hover:text-white">
                  <Link
                    href={`/areas/${area.slug}`}
                    aria-label={`View ${area.name} area page`}
                    className="absolute inset-0 z-10"
                  />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="eyebrow group-hover:!text-gold-400 transition-colors">{area.tagline}</p>
                      <h2 className="mt-3 font-extrabold text-fluid-2xl tracking-tighter leading-tight">
                        {area.name} <span className="text-gold-500">{area.postcode}</span>
                      </h2>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="shrink-0 text-navy-900/40 group-hover:text-gold-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                  <div className="mt-8 pt-6 border-t border-light-line group-hover:border-white/15 transition-colors">
                    <p className="text-[10px] uppercase tracking-widest font-semibold text-navy-900/45 group-hover:text-gold-400/80">
                      Rent guide
                    </p>
                    <Link
                      href="/contact"
                      className="relative z-20 mt-1 inline-flex items-center gap-1 font-bold border-b border-navy-900/30 group-hover:border-gold-400 group-hover:text-gold-400 transition-colors"
                    >
                      Free valuation
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
