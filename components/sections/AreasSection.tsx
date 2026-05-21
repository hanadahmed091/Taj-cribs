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
            <SectionLabel>Where We Operate</SectionLabel>
            <h2 className="mt-5 text-fluid-4xl font-extrabold tracking-tighter leading-tight">
              Central London, <span className="text-gold-600">inside out.</span>
            </h2>
          </FadeIn>
          <FadeIn className="lg:col-span-5" delay={0.1}>
            <p className="text-fluid-lg text-navy-900/70 leading-relaxed">
              We operate exclusively across prime Central London postcodes.
              Tap any area on the map to see what we cover.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <div className="mt-12">
            <CoverageMap />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-10 text-sm text-navy-900/60 text-center">
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
