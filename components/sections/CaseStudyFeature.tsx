import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/ui/FadeIn'
import { CASE_STUDIES } from '@/lib/data/case-studies'

// Feature card on the homepage that surfaces the latest case study.
// Uses the first entry in CASE_STUDIES.
export function CaseStudyFeature() {
  const study = CASE_STUDIES[0]
  if (!study) return null

  return (
    <section className="bg-cream section-pad">
      <div className="container-edge">
        <FadeIn>
          <SectionLabel onLight>Case Study</SectionLabel>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Link
            href={`/case-studies/${study.slug}`}
            className="group mt-8 grid grid-cols-1 lg:grid-cols-2 bg-white rounded-md border border-light-line overflow-hidden hover:border-gold-500 transition-colors"
          >
            <div className="relative aspect-[16/11] lg:aspect-auto lg:min-h-[380px] w-full overflow-hidden">
              <Image
                src={study.heroImage}
                alt={`${study.propertyType} in ${study.area}`}
                fill
                sizes="(min-width: 1024px) 640px, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <p className="eyebrow !text-gold-700">
                {study.area} &middot; {study.service}
              </p>
              <h2 className="mt-4 font-extrabold text-fluid-2xl tracking-tight leading-tight text-navy-900">
                {study.title}
              </h2>
              <p className="mt-4 text-navy-900/70 leading-relaxed">
                {study.summary}
              </p>

              <div className="mt-7 flex flex-wrap gap-x-10 gap-y-4">
                {study.metrics.slice(0, 3).map((m) => (
                  <div key={m.label}>
                    <p className="text-fluid-xl font-extrabold tracking-tight text-gold-700">
                      {m.value}
                    </p>
                    <p className="text-[10px] uppercase tracking-widest font-semibold text-navy-900/55">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy-900">
                Read the full case study
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
