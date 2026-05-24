import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { getAllAreaSlugs, getAreaBySlug, getAreaProductLabel } from '@/lib/data/areas'
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
  const title = `Guaranteed Rent & Short-Let in ${area.name}`
  const description = `Guaranteed rent and short-let management for landlords in ${area.name} ${area.postcode}. Free valuation in 24 hours, fixed monthly income, no voids.`
  return {
    title,
    description,
    alternates: { canonical: `/areas/${area.slug}` },
  }
}

/**
 * Builds the area-page FAQ list. Critical: the wording branches on
 * whether we currently operate stock in the postcode (hasPortfolio).
 *
 * For areas we operate in: keeps the "we currently manage" portfolio
 * language.
 *
 * For areas we cover but don't currently operate stock in: avoids any
 * claim of an existing portfolio in that postcode. We instead say "we
 * cover" and route the prospect to a free valuation. Do NOT regress
 * this to a one-size answer that asserts a portfolio — every area page
 * page would then carry an invented claim.
 */
function buildAreaFaqs(
  areaName: string,
  postcode: string,
  hasPortfolio: boolean,
): FAQType[] {
  if (hasPortfolio) {
    return [
      {
        q: `Do you manage short-let properties in ${areaName} ${postcode}?`,
        a: `Yes. ${areaName} is one of our operating areas. We currently manage stock in the ${postcode} postcode under both short-let and guaranteed rent arrangements.`,
      },
      {
        q: `What is the typical short-let income for a ${areaName} property?`,
        a: `It depends heavily on bedrooms, finish quality and calendar timing. Request a free valuation and we will come back within one business day with a guaranteed monthly figure and a projected short-let income for your specific property.`,
      },
      {
        q: `Can I get guaranteed rent on a property in ${areaName}?`,
        a: `Yes. Guaranteed rent is available in ${postcode} subject to a free valuation. We offer 1–5 year corporate leases with fixed monthly payments.`,
      },
      {
        q: `How fast can a ${areaName} property be onboarded?`,
        a: `For a furnished property: typically less than a week to live. For unfurnished or properties needing minor works: 1-2 weeks.`,
      },
    ]
  }

  // Coverage-area FAQ (we serve the postcode but don't currently
  // operate stock there). No portfolio claim of any kind.
  return [
    {
      q: `Do you cover ${areaName} ${postcode}?`,
      a: `Yes. ${areaName} is one of the Central London postcodes we cover under both short-let management and guaranteed rent. Request a free valuation for your ${areaName} property and we will come back within one business day.`,
    },
    {
      q: `What is the typical short-let income for a ${areaName} property?`,
      a: `It depends heavily on bedrooms, finish quality and calendar timing. Generic per-bedroom ranges rarely apply to a specific property, so we model every unit individually — request a free valuation for a tailored figure.`,
    },
    {
      q: `Can I get guaranteed rent on a property in ${areaName}?`,
      a: `Yes. Guaranteed rent is available across our coverage area in ${postcode} subject to a free valuation. We offer 1–5 year corporate leases with fixed monthly payments.`,
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

  // Kensington is a real-portfolio area but its property card was
  // intentionally suppressed (the original card carried invented stats —
  // see properties.ts tombstone). Override the FAQ branch so /areas/
  // high-street-kensington serves the "we currently manage stock"
  // wording rather than the coverage-only fallback.
  const hasPortfolio =
    area.properties.length > 0 || area.slug === 'high-street-kensington'
  const faqs = buildAreaFaqs(area.name, area.postcode, hasPortfolio)
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
            {area.content?.overview[0] ?? area.intro}
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-navy-line">
            <div>
              <p className="text-[10px] uppercase tracking-widest font-semibold text-gold-400">Postcode</p>
              <p className="mt-1 font-bold text-fluid-xl">{area.postcode}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-semibold text-gold-400">Product</p>
              <p className="mt-1 font-bold text-fluid-lg leading-snug">{getAreaProductLabel(area)}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-semibold text-gold-400">Valuation</p>
              <p className="mt-1 font-bold text-fluid-lg leading-snug">Free, within 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* DEMAND COPY — legacy one-liner. Suppressed when a structured
          content block exists, since the overview section below carries
          the same intent in more depth. */}
      {!area.content && (
        <section className="bg-white section-pad !pb-0">
          <div className="container-edge max-w-4xl">
            <FadeIn>
              <SectionLabel onLight>Local Demand</SectionLabel>
              <h2 className="mt-5 text-fluid-3xl font-extrabold tracking-tighter leading-tight">
                {area.demand}
              </h2>
            </FadeIn>
          </div>
        </section>
      )}

      {/* BOROUGH-SPECIFIC CONTENT — only renders when area.content is
          populated. Lets us roll out genuine local depth borough by
          borough without breaking pages that haven't been written up yet. */}
      {area.content && (
        <>
          {/* OVERVIEW — extra paragraphs beyond the hero opener */}
          {area.content.overview.length > 1 && (
            <section className="bg-white section-pad !pb-0">
              <div className="container-edge max-w-4xl">
                <FadeIn>
                  <SectionLabel onLight>Overview</SectionLabel>
                  <div className="mt-7 space-y-5 text-fluid-lg text-navy-900/80 leading-relaxed">
                    {area.content.overview.slice(1).map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </FadeIn>
              </div>
            </section>
          )}

          {/* PROPERTY CHARACTER */}
          <section className="bg-white section-pad !pb-0">
            <div className="container-edge max-w-4xl">
              <FadeIn>
                <SectionLabel onLight>Property character</SectionLabel>
                <h2 className="mt-5 text-fluid-3xl font-extrabold tracking-tighter leading-tight">
                  {area.content.propertyCharacter.heading}
                </h2>
                <div className="mt-7 space-y-5 text-fluid-lg text-navy-900/80 leading-relaxed">
                  {area.content.propertyCharacter.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </FadeIn>
            </div>
          </section>

          {/* GUEST PROFILE */}
          <section className="bg-white section-pad !pb-0">
            <div className="container-edge max-w-4xl">
              <FadeIn>
                <SectionLabel onLight>Who stays here</SectionLabel>
                <h2 className="mt-5 text-fluid-3xl font-extrabold tracking-tighter leading-tight">
                  {area.content.guestProfile.heading}
                </h2>
              </FadeIn>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-px bg-light-line border border-light-line">
                {area.content.guestProfile.profiles.map((p) => (
                  <FadeIn key={p.label}>
                    <div className="bg-white p-7 lg:p-8 h-full">
                      <h3 className="font-bold text-fluid-xl tracking-tight">
                        {p.label}
                      </h3>
                      <p className="mt-3 text-sm text-navy-900/70 leading-relaxed">
                        {p.body}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

          {/* LOCATION & TRANSPORT */}
          <section className="bg-white section-pad !pb-0">
            <div className="container-edge max-w-4xl">
              <FadeIn>
                <SectionLabel onLight>Location & transport</SectionLabel>
                <h2 className="mt-5 text-fluid-3xl font-extrabold tracking-tighter leading-tight">
                  {area.content.locationTransport.heading}
                </h2>
                <div className="mt-7 space-y-5 text-fluid-lg text-navy-900/80 leading-relaxed">
                  {area.content.locationTransport.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </FadeIn>
            </div>
          </section>

          {/* REGULATION & PLANNING */}
          <section className="bg-white section-pad !pb-0">
            <div className="container-edge max-w-4xl">
              <FadeIn>
                <SectionLabel onLight>Regulation & planning</SectionLabel>
                <h2 className="mt-5 text-fluid-3xl font-extrabold tracking-tighter leading-tight">
                  {area.content.regulation.heading}
                </h2>
                <div className="mt-7 space-y-5 text-fluid-lg text-navy-900/80 leading-relaxed">
                  {area.content.regulation.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </FadeIn>
            </div>
          </section>

          {/* OPTIONAL SERVICED ACCOMMODATION — only Mayfair / Kensington /
              Chelsea / Marylebone supply this block. Frames the SA product
              for landlords choosing our management service. */}
          {area.content.servicedAccommodation && (
            <section className="bg-cream section-pad !pb-0">
              <div className="container-edge max-w-4xl">
                <FadeIn>
                  <SectionLabel onLight>Serviced accommodation</SectionLabel>
                  <h2 className="mt-5 text-fluid-3xl font-extrabold tracking-tighter leading-tight">
                    {area.content.servicedAccommodation.heading}
                  </h2>
                  <div className="mt-7 space-y-5 text-fluid-lg text-navy-900/80 leading-relaxed">
                    {area.content.servicedAccommodation.body.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                  <Link
                    href="/serviced-accommodation"
                    className="mt-7 inline-flex items-center gap-2 text-navy-900 font-semibold border-b border-navy-900 pb-1 hover:text-gold-600 transition-colors"
                  >
                    See our serviced-accommodation service
                    <ArrowUpRight size={16} />
                  </Link>
                </FadeIn>
              </div>
            </section>
          )}
        </>
      )}

      {/* PROPERTY GALLERY (if any property in this area has extra photos) */}
      {(() => {
        const gallerySources = area.properties.flatMap((p) =>
          p.gallery && p.gallery.length > 0
            ? [{ name: p.name, photos: [p.imageUrl, ...p.gallery] }]
            : [],
        )
        if (gallerySources.length === 0) return null
        return (
          <section className="bg-white section-pad !pb-0">
            <div className="container-edge">
              <FadeIn>
                <SectionLabel onLight>Inside the property</SectionLabel>
                <h2 className="mt-5 text-fluid-3xl font-extrabold tracking-tighter leading-tight">
                  A look at {gallerySources[0].name}.
                </h2>
              </FadeIn>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                {gallerySources[0].photos.map((src, i) => (
                  <FadeIn key={src} delay={i * 0.05}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-cream">
                      <Image
                        src={src}
                        alt={`${gallerySources[0].name}, photo ${i + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        )
      })()}

      {/* PROPERTIES IN AREA */}
      {area.properties.length > 0 && (
        <section className="bg-white section-pad">
          <div className="container-edge">
            <FadeIn>
              <SectionLabel onLight>What We Manage Here</SectionLabel>
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
                      <p className="mt-4 text-gold-700 font-bold tabular-nums">{p.monthlyIncome}</p>
                      <p className="text-xs text-navy-900/55 mt-1">{p.highlight}</p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQ items={faqs} heading={`${area.name}. Common questions.`} />

      {/* AREA-SPECIFIC CTA */}
      <section className="bg-navy-900 text-white py-16 lg:py-20">
        <div className="container-edge text-center max-w-3xl">
          <FadeIn>
            <Link
              href="/contact"
              className="btn-gold inline-flex"
            >
              Get a free valuation for your {area.name} property
              <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* CTA FORM */}
      <section className="bg-cream section-pad">
        <div className="container-edge max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <FadeIn>
                <SectionLabel onLight>Free Valuation</SectionLabel>
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
