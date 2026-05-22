import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ChevronRight, ArrowRight, Quote } from 'lucide-react'
import {
  getAllCaseStudySlugs,
  getCaseStudyBySlug,
  BEFORE_FIGURE_PLACEHOLDER,
} from '@/lib/data/case-studies'
import { TESTIMONIALS } from '@/lib/data/testimonials'
import { CaseStudyJsonLd } from '@/components/seo/CaseStudyJsonLd'
import { FadeIn } from '@/components/ui/FadeIn'
import { FinalCTA } from '@/components/sections/FinalCTA'

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const study = getCaseStudyBySlug(params.slug)
  if (!study) return {}
  return {
    title: study.metaTitle,
    description: study.metaDescription,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      type: 'article',
      title: study.metaTitle,
      description: study.metaDescription,
      publishedTime: study.date,
      images: [{ url: study.heroImage, width: 1600, height: 900 }],
    },
  }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudyBySlug(params.slug)
  if (!study) notFound()

  const pullQuote =
    study.pullQuoteTestimonialId != null
      ? TESTIMONIALS.find((t) => t.id === study.pullQuoteTestimonialId)
      : undefined

  const showBeforeAfter =
    study.beforeAfter != null &&
    study.beforeAfter.before !== BEFORE_FIGURE_PLACEHOLDER

  return (
    <>
      <CaseStudyJsonLd caseStudy={study} />

      {/* HERO */}
      <section className="relative hero-bg text-white pt-[120px] pb-16 lg:pt-[150px] lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-60 pointer-events-none" />
        <div className="container-edge relative max-w-3xl">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/55"
          >
            <Link href="/" className="hover:text-gold-400 transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link href="/case-studies" className="hover:text-gold-400 transition-colors">
              Case Studies
            </Link>
          </nav>

          <p className="mt-8 eyebrow !text-gold-400">
            {study.propertyType} &middot; {study.area} &middot; {study.service}
          </p>
          <h1 className="mt-5 text-fluid-4xl lg:text-hero font-extrabold tracking-tightest leading-[0.98]">
            {study.title}
          </h1>
          <p className="mt-8 text-fluid-lg text-white/75 leading-relaxed">
            {study.summary}
          </p>
        </div>
      </section>

      {/* METRICS */}
      <section className="bg-navy-950 text-white border-t border-white/10">
        <div className="container-edge">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {study.metrics.map((m) => (
              <div key={m.label} className="bg-navy-950 px-6 py-8 text-center">
                <dt className="text-[10px] uppercase tracking-widest font-semibold text-white/50">
                  {m.label}
                </dt>
                <dd className="mt-2 text-fluid-2xl font-extrabold tracking-tight text-gold-400">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="bg-white pt-12 lg:pt-16">
        <div className="container-edge max-w-4xl">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md border border-light-line">
            <Image
              src={study.heroImage}
              alt={`${study.propertyType} in ${study.area}`}
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* NARRATIVE */}
      <article className="bg-white section-pad !pt-12 lg:!pt-16">
        <div className="container-edge max-w-3xl">
          {study.sections.map((section, idx) => (
            <FadeIn key={section.heading} delay={idx * 0.05}>
              <div className={idx > 0 ? 'mt-14' : ''}>
                <h2 className="text-fluid-2xl font-extrabold tracking-tight text-navy-900">
                  {section.heading}
                </h2>
                {section.body.map((p, i) => (
                  <p
                    key={i}
                    className="mt-4 text-fluid-lg text-navy-900/75 leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </FadeIn>
          ))}

          {showBeforeAfter && study.beforeAfter && (
            <FadeIn>
              <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-px bg-light-line border border-light-line rounded-md overflow-hidden">
                <div className="bg-cream p-8 text-center">
                  <p className="text-[10px] uppercase tracking-widest font-semibold text-navy-900/55">
                    {study.beforeAfter.beforeLabel}
                  </p>
                  <p className="mt-2 text-fluid-2xl font-extrabold tracking-tight text-navy-900">
                    {study.beforeAfter.before}
                  </p>
                </div>
                <div className="bg-white p-8 text-center">
                  <p className="text-[10px] uppercase tracking-widest font-semibold text-navy-900/55">
                    {study.beforeAfter.afterLabel}
                  </p>
                  <p className="mt-2 text-fluid-2xl font-extrabold tracking-tight text-gold-700">
                    {study.beforeAfter.after}
                  </p>
                </div>
              </div>
            </FadeIn>
          )}

          {pullQuote && (
            <FadeIn>
              <figure className="mt-16 border-l-2 border-gold-500 pl-6 lg:pl-8">
                <Quote size={28} className="text-gold-600" aria-hidden="true" />
                <blockquote className="mt-4 text-fluid-2xl font-semibold tracking-tight leading-snug text-navy-900">
                  {pullQuote.quote}
                </blockquote>
                <figcaption className="mt-5 text-sm font-semibold text-navy-900/70">
                  {pullQuote.name}
                  <span className="font-normal text-navy-900/55">
                    {' '}&middot; {pullQuote.role}, {pullQuote.area}
                  </span>
                </figcaption>
              </figure>
            </FadeIn>
          )}

          <FadeIn>
            <div className="mt-16 bg-navy-950 text-white rounded-md p-8 lg:p-10 text-center">
              <h2 className="text-fluid-2xl font-extrabold tracking-tight">
                Want a real number for your property?
              </h2>
              <p className="mt-3 text-white/70 leading-relaxed max-w-xl mx-auto">
                Tell us about your property and we will send back a guaranteed
                monthly figure and a projected short-let income within one
                business day.
              </p>
              <Link href="/contact" className="btn-gold mt-7">
                Get a free valuation
                <ArrowRight size={18} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </article>

      <FinalCTA />
    </>
  )
}
