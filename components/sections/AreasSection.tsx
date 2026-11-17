import Link from 'next/link'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/ui/FadeIn'
import { CoverageMap } from '@/components/sections/CoverageMap'

export function AreasSection() {
  return (
    <section className="bg-cream section-pad">
      <div className="container-edge">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <FadeIn className="lg:col-span-7">
            <SectionLabel onLight>Where We Operate</SectionLabel>
            <h2 className="mt-5 text-fluid-4xl font-extrabold tracking-tighter leading-tight">
              We cover <span className="text-gold-600">the UK.</span>
            </h2>
          </FadeIn>
          <FadeIn className="lg:col-span-5" delay={0.1}>
            <p className="text-fluid-lg text-navy-900/70 leading-relaxed">
              Short-let, medium-term and guaranteed rent across the UK.
              Tap any area below to see where we operate in London.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <div className="mt-12">
            <CoverageMap />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-14 text-fluid-lg text-navy-900/80 text-center leading-relaxed">
            Don&apos;t see your area? We cover the whole of the UK.{' '}
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
  )
}
