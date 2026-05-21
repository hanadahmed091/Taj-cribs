import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { deriveAreas } from '@/lib/data/areas'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/ui/FadeIn'

export function AreasSection() {
  const areas = deriveAreas()

  return (
    <section className="bg-cream section-pad">
      <div className="container-edge">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <FadeIn className="lg:col-span-7">
            <SectionLabel>Where We Operate</SectionLabel>
            <h2 className="mt-5 text-fluid-4xl font-extrabold tracking-tighter leading-tight">
              Central London, <span className="text-gold-600">inside out.</span>
            </h2>
          </FadeIn>
          <FadeIn className="lg:col-span-5" delay={0.1}>
            <p className="text-fluid-lg text-navy-900/70 leading-relaxed">
              We operate exclusively across prime Central London postcodes,
              with deep portfolios in the areas below.
            </p>
          </FadeIn>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-light-line border border-light-line">
          {areas.map((area, idx) => (
            <FadeIn key={area.slug} delay={idx * 0.04}>
              <Link
                href={`/areas/${area.slug}`}
                className="group block bg-white p-8 lg:p-10 h-full transition-colors duration-300 hover:bg-navy-900 hover:text-white"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-fluid-xl tracking-tight">
                      {area.name}{' '}
                      <span className="text-gold-500 font-semibold">{area.postcode}</span>
                    </h3>
                    <p className="mt-2 text-sm text-navy-900/65 group-hover:text-white/70 transition-colors">
                      {area.tagline}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-navy-900/40 group-hover:text-gold-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <div className="mt-8 pt-5 border-t border-light-line group-hover:border-white/15 transition-colors">
                  {area.avgMonthlyRate ? (
                    <>
                      <p className="text-[10px] uppercase tracking-widest font-semibold text-navy-900/45 group-hover:text-gold-400">
                        Average rate
                      </p>
                      <p className="mt-1 font-bold tabular-nums text-fluid-lg">
                        {area.avgMonthlyRate}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-[10px] uppercase tracking-widest font-semibold text-navy-900/45 group-hover:text-gold-400">
                        Coverage
                      </p>
                      <p className="mt-1 font-bold text-fluid-lg">
                        Available now
                      </p>
                    </>
                  )}
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <p className="mt-12 text-sm text-navy-900/60 text-center">
            Properties outside these areas considered.{' '}
            <Link href="/contact" className="text-navy-900 underline decoration-gold-500 underline-offset-4 hover:text-gold-600 transition-colors">
              Get in touch
            </Link>.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
