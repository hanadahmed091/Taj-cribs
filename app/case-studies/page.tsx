import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/ui/FadeIn'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { CASE_STUDIES } from '@/lib/data/case-studies'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Real, anonymised stories from the Central London properties we manage. How landlords turned to Taj Cribs for reliable income and hands-off management.',
  alternates: { canonical: '/case-studies' },
}

export default function CaseStudiesIndexPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative hero-bg text-white pt-[120px] pb-16 lg:pt-[160px] lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-60 pointer-events-none" />
        <div className="container-edge relative max-w-3xl">
          <SectionLabel className="!justify-start">Case Studies</SectionLabel>
          <h1 className="mt-6 text-hero font-extrabold tracking-tightest leading-[0.95]">
            Real properties. <br />
            <span className="text-gold-500">Real numbers.</span>
          </h1>
          <p className="mt-8 text-fluid-lg text-white/75 leading-relaxed">
            Testimonials tell you what a landlord thinks. A case study shows you
            what actually happened. Here are the stories behind the properties
            we manage, anonymised to area level.
          </p>
        </div>
      </section>

      {/* LISTING */}
      <section className="bg-cream section-pad">
        <div className="container-edge">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study, idx) => (
              <FadeIn key={study.slug} delay={idx * 0.06}>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="group block bg-white rounded-md border border-light-line overflow-hidden h-full hover:border-gold-500 transition-colors"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={study.heroImage}
                      alt={`${study.propertyType} in ${study.area}`}
                      fill
                      sizes="(min-width: 1024px) 600px, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7 lg:p-8">
                    <p className="eyebrow !text-gold-700">
                      {study.area} &middot; {study.service}
                    </p>
                    <h2 className="mt-4 font-extrabold text-fluid-xl tracking-tight leading-snug group-hover:text-gold-600 transition-colors">
                      {study.title}
                    </h2>
                    <p className="mt-3 text-sm text-navy-900/70 leading-relaxed">
                      {study.summary}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-900">
                      Read the case study
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
