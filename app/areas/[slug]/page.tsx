import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { getAllAreaSlugs, getAreaBySlug } from '@/lib/data/areas'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/ui/FadeIn'
import { LeadForm } from '@/components/forms/LeadForm'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { SERVICE_LABELS } from '@/lib/data/properties'
import type { FAQ as FAQType } from '@/lib/data/faqs'
import { FaqJsonLd } from '@/components/seo/FaqJsonLd'

export async function generateStaticParams() {
  return getAllAreaSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const area = getAreaBySlug(params.slug)
  if (!area) return {}
  const title = `Short-Let & Guaranteed Rent Management in ${area.name} ${area.postcode}`
  return {
    title,
    description: `${area.intro.slice(0, 155)}…`,
    alternates: { canonical: `/areas/${area.slug}` },
  }
}

function buildAreaFaqs(areaName: string, postcode: string): FAQType[] {
  return [
    {
      q: `Do you manage short-let properties in ${areaName} ${postcode}?`,
      a: `Yes — ${areaName} is one of our core operating areas. We currently manage a portfolio in the ${postcode} postcode under both short-let and guaranteed rent arrangements.`,
    },
    {
      q: `What is the average short-let income in ${areaName}?`,
      a: `It depends heavily on bedrooms, finish quality and calendar timing, but our managed units in ${areaName} consistently deliver above standard AST yields. Use our income calculator for a specific estimate.`,
    },
    {
      q: `Can I get guaranteed rent on a property in ${areaName}?`,
      a: `Yes — guaranteed rent is available across all of our ${postcode} stock, subject to a free valuation. We offer 1–5 year corporate leases with fixed monthly payments.`,
    },
    {
      q: `How fast can a ${areaName} property be onboarded?`,
      a: `For a furnished property: typically less than a week to live. For unfurnished or properties needing minor works: 1-2 weeks.`,
    },
  ]
}

export default function AreaPage({ params }: { params: { slug: string } }) {
  const area = getAreaBySlug(params.slug)
  if (!area) notFound()

  const faqs = buildAreaFaqs(area.name, area.postcode)
  const heroImage =
    area.properties[0]?.imageUrl ??
    'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80'

  return (
    <>
      <FaqJsonLd faqs={faqs} />

      {/* HERO */}
      <section className="relative bg-navy-950 text-white pt-[120px] pb-20 lg:pt-[160px] lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={`${area.name} ${area.postcode}`}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-950/70 to-navy-950" />
        </div>
        <div className="container-edge relative max-w-4xl">
          <SectionLabel className="!justify-start">{area.tagline}</SectionLabel>
          <h1 className="mt-6 text-hero font-extrabold tracking-tightest leading-[0.95]">
            Short-Let & Guaranteed Rent <br />
            <span className="text-gold-500">in {area.name}.</span>
          </h1>
          <p className="mt-8 text-fluid-lg text-white/75 leading-relaxed max-w-2xl">
            {area.intro}
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-navy-line">
            <div>
              <p className="text-[10px] uppercase tracking-widest font-semibold text-gold-400">Postcode</p>
              <p className="mt-1 font-bold text-fluid-xl">{area.postcode}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-semibold text-gold-400">Avg monthly</p>
              <p className="mt-1 font-bold text-fluid-xl tabular-nums">{area.avgMonthlyRate}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-semibold text-gold-400">Avg nightly</p>
              <p className="mt-1 font-bold text-fluid-xl tabular-nums">{area.avgNightlyRate}</p>
            </div>
          </div>
        </div>
      </section>

      {/* DEMAND COPY */}
      <section className="bg-white section-pad !pb-0">
        <div className="container-edge max-w-4xl">
          <FadeIn>
            <SectionLabel>Local Demand</SectionLabel>
            <h2 className="mt-5 text-fluid-3xl font-extrabold tracking-tighter leading-tight">
              {area.demand}
            </h2>
          </FadeIn>
        </div>
      </section>

      {/* PROPERTIES IN AREA */}
      {area.properties.length > 0 && (
        <section className="bg-white section-pad">
          <div className="container-edge">
            <FadeIn>
              <SectionLabel>What We Manage Here</SectionLabel>
              <h2 className="mt-5 text-fluid-3xl font-extrabold tracking-tighter leading-tight">
                Current portfolio in {area.name}.
              </h2>
            </FadeIn>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {area.properties.map((p) => (
                <FadeIn key={p.id}>
                  <article className="bg-cream rounded-md overflow-hidden h-full">
                    <div className="relative aspect-[3/2]">
                      <Image
                        src={p.imageUrl}
                        alt={p.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                      <span className="absolute top-3 left-3 bg-gold-500 text-navy-950 px-2.5 py-1 rounded-sm text-[10px] uppercase tracking-widest font-bold">
                        {SERVICE_LABELS[p.service]}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-fluid-xl tracking-tight">{p.name}</h3>
                      <p className="mt-2 text-sm text-navy-900/60">{p.bedrooms}</p>
                      <p className="mt-4 text-gold-600 font-bold tabular-nums">{p.monthlyIncome}</p>
                      <p className="text-xs text-navy-900/55 mt-1">{p.highlight}</p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQ items={faqs} heading={`${area.name} — common questions.`} />

      {/* CTA FORM */}
      <section className="bg-cream section-pad">
        <div className="container-edge max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <FadeIn>
                <SectionLabel>Free Valuation</SectionLabel>
                <h2 className="mt-5 text-fluid-3xl font-extrabold tracking-tighter leading-tight">
                  Own property in {area.name}?
                </h2>
                <p className="mt-5 text-navy-900/70 leading-relaxed">
                  Tell us about it. We&apos;ll send a guaranteed monthly figure and projected
                  short-let income within one business day.
                </p>
                <Link href="/areas" className="mt-7 inline-flex items-center gap-2 text-navy-900 font-semibold border-b border-navy-900 pb-1 hover:text-gold-600 transition-colors">
                  Browse other areas
                  <ArrowUpRight size={16} />
                </Link>
              </FadeIn>
            </div>
            <div className="lg:col-span-7">
              <LeadForm source={`area_${area.slug}`} />
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
