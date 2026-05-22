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
              We cover all of <span className="text-gold-600">Zone 1.</span>
            </h2>
          </FadeIn>
          <FadeIn className="lg:col-span-5" delay={0.1}>
            <p className="text-fluid-lg text-navy-900/70 leading-relaxed">
              Short-let, medium-term and guaranteed rent across central London.
              Tap any area below to fly the map and see what we operate there.
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
  )
}
