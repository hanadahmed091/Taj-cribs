import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Camera, Calendar, Users, Sparkles, ShieldCheck, Wrench,
  BarChart3, MessageCircle, Headphones, Globe, Key, Banknote,
} from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/ui/FadeIn'
import { LeadForm } from '@/components/forms/LeadForm'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { TajCribsStandard } from '@/components/sections/TajCribsStandard'
import { SHORT_LET_FAQS } from '@/lib/data/faqs'
import { FaqJsonLd } from '@/components/seo/FaqJsonLd'
import { PROPERTIES } from '@/lib/data/properties'
import { SITE } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Short-Let & Airbnb Management London',
  description:
    'Full-service short-let and Airbnb property management in Central London. Multi-platform listings, dynamic pricing, in-house housekeeping. Significantly more than a standard AST.',
  alternates: { canonical: '/property-management' },
}

const SERVICES_INCLUDED = [
  { icon: Camera, title: 'Professional photography' },
  { icon: Globe, title: 'Multi-platform listings' },
  { icon: BarChart3, title: 'Dynamic pricing engine' },
  { icon: MessageCircle, title: 'Guest screening & messaging' },
  { icon: Calendar, title: 'Calendar & booking management' },
  { icon: Key, title: 'Self-check-in setup' },
  { icon: Users, title: 'In-house housekeeping' },
  { icon: Wrench, title: 'Maintenance coordination' },
  { icon: Sparkles, title: 'Linen & consumables included' },
  { icon: ShieldCheck, title: 'Damage protection' },
  { icon: Headphones, title: '24/7 guest support' },
  { icon: Banknote, title: 'Monthly owner reporting' },
]

// Platforms shown in the "We list and optimise..." row. The first three
// have monochrome SVG logos saved under public/logos/. Vrbo isn't in
// Simple Icons so it renders as a styled wordmark text element. Direct
// is a direct-booking channel, not a third-party platform, and renders
// as text with a small "via taj cribs" sub-label.
type PlatformItem =
  | { kind: 'logo'; name: string; src: string; widthClass: string }
  | { kind: 'text'; name: string; subtitle?: string }

const PLATFORMS: PlatformItem[] = [
  { kind: 'logo', name: 'Airbnb',      src: '/logos/airbnb.svg',  widthClass: 'w-8 sm:w-10' },
  { kind: 'logo', name: 'Booking.com', src: '/logos/booking.svg', widthClass: 'w-8 sm:w-10' },
  { kind: 'text', name: 'Vrbo' },
  { kind: 'logo', name: 'Expedia',     src: '/logos/expedia.svg', widthClass: 'w-8 sm:w-10' },
  { kind: 'text', name: 'Direct', subtitle: 'via taj cribs' },
]

const CASE_STUDIES = PROPERTIES.filter((p) => p.service === 'short-let-management')

export default function PropertyManagementPage() {
  return (
    <>
      <FaqJsonLd faqs={SHORT_LET_FAQS} />

      {/* HERO */}
      <section className="relative hero-bg text-white pt-[120px] pb-20 lg:pt-[160px] lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-60 pointer-events-none" />
        <div className="container-edge relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <SectionLabel className="!justify-start">Short-Let Property Management</SectionLabel>
            <h1 className="mt-6 text-hero font-extrabold tracking-tightest leading-[0.95]">
              Your London property. <br />
              <span className="text-gold-500">Fully managed.</span> <br />
              Maximum returns.
            </h1>
            <p className="mt-8 max-w-xl text-fluid-lg text-white/75 leading-relaxed">
              We handle everything: listings, bookings, guests, housekeeping, maintenance.
              You see one number on the 5th of every month: your net. We model conservatively,
              around 10% below market rates. Most landlords exceed our estimate.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-cream rounded-md p-2">
              <div className="bg-white rounded-md border border-light-line p-6 lg:p-10">
                <SectionLabel onLight>Free Valuation</SectionLabel>
                <h3 className="mt-4 font-extrabold text-fluid-2xl tracking-tighter leading-tight text-navy-900">
                  Want a real number for your property?
                </h3>
                <p className="mt-4 text-sm text-navy-900/70 leading-relaxed">
                  Calculators don&apos;t know your finish, your street, or what your
                  property actually looks like. We do. Tell us about your property
                  and we&apos;ll send back a guaranteed monthly figure and a projected
                  short-let income within one business day.
                </p>
                <Link
                  href="/contact"
                  className="btn-gold w-full justify-center mt-7"
                >
                  Get a free valuation
                  <ArrowRight size={18} />
                </Link>
                <p className="mt-4 text-sm text-navy-900/60 text-center">
                  Or call us on{' '}
                  <a
                    href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                    className="font-semibold text-navy-900 hover:text-gold-600 transition-colors"
                  >
                    {SITE.phoneDisplay}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVERYTHING INCLUDED */}
      <section className="bg-white section-pad">
        <div className="container-edge">
          <div className="max-w-3xl">
            <FadeIn>
              <SectionLabel onLight>Everything Included</SectionLabel>
              <h2 className="mt-5 text-fluid-4xl font-extrabold tracking-tighter leading-tight">
                One flat fee. Everything covered.
              </h2>
              <p className="mt-6 text-fluid-lg text-navy-900/70 leading-relaxed">
                No listing fees. No photography fees. No call-out charges.
                Just 18% of gross. And we earn it.
              </p>
            </FadeIn>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-light-line border border-light-line">
            {SERVICES_INCLUDED.map((s, idx) => {
              const Icon = s.icon
              return (
                <FadeIn key={s.title} delay={idx * 0.03}>
                  <div className="bg-white p-6 lg:p-7 h-full">
                    <div className="w-10 h-10 bg-navy-950 text-gold-500 flex items-center justify-center rounded-sm">
                      <Icon size={16} />
                    </div>
                    <p className="mt-5 font-semibold text-sm lg:text-base tracking-tight leading-snug">{s.title}</p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="bg-cream section-pad !py-20">
        <div className="container-edge">
          <FadeIn>
            <p className="text-center text-[10px] uppercase tracking-widest font-semibold text-navy-900/45">
              We list and optimise your property across leading platforms
            </p>
            {/* Single navy colour drives every logo. SVGs are rendered as
                CSS masks with bg-current so the logo shape picks up
                text-navy-900/55 from this wrapper. Text-only items
                (Vrbo, Direct) sit in the same row at matched height. */}
            <div className="mt-10 flex flex-wrap justify-center items-center text-navy-900/55 gap-x-6 sm:gap-x-10 lg:gap-x-12 gap-y-6">
              {PLATFORMS.map((p) =>
                p.kind === 'logo' ? (
                  <span
                    key={p.name}
                    role="img"
                    aria-label={p.name}
                    className={`inline-block h-8 sm:h-10 ${p.widthClass} bg-current`}
                    style={{
                      WebkitMaskImage: `url(${p.src})`,
                      maskImage: `url(${p.src})`,
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskPosition: 'center',
                      WebkitMaskSize: 'contain',
                      maskSize: 'contain',
                    }}
                  />
                ) : (
                  <span
                    key={p.name}
                    className="flex flex-col items-center leading-none"
                  >
                    <span className="text-xl sm:text-2xl font-extrabold tracking-tight">
                      {p.name}
                    </span>
                    {p.subtitle && (
                      <span className="mt-1 text-[10px] uppercase tracking-widest text-navy-900/40">
                        {p.subtitle}
                      </span>
                    )}
                  </span>
                ),
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* MEDIUM-TERM RENTALS */}
      <section className="bg-white section-pad">
        <div className="container-edge">
          <div className="max-w-3xl">
            <FadeIn>
              <SectionLabel onLight>Medium-Term Rentals</SectionLabel>
              <h2 className="mt-5 text-fluid-4xl font-extrabold tracking-tighter leading-tight">
                One of central London&apos;s <span className="text-gold-600">strongest segments right now.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-7 text-fluid-lg text-navy-900/75 leading-relaxed">
                Corporate relocations, contractors, insurance housing, professionals
                between homes. They all need furnished one to six month stays.
                Demand consistently outstrips supply in Zone 1, and there aren&apos;t
                enough quality operators serving them.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.15}>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-light-line border border-light-line">
              <div className="bg-white p-8 lg:p-10">
                <p className="font-extrabold text-fluid-3xl text-gold-500 tabular-nums tracking-tighter">
                  30 to 50%
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest font-semibold text-navy-900/55">
                  Uplift on long-let
                </p>
                <p className="mt-3 text-sm text-navy-900/70 leading-relaxed">
                  What you typically earn from a well-managed mix of short and
                  medium-term stays vs. a traditional long-term tenancy.
                </p>
              </div>
              <div className="bg-white p-8 lg:p-10">
                <p className="font-extrabold text-fluid-3xl text-gold-500 tabular-nums tracking-tighter">
                  1 to 6 months
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest font-semibold text-navy-900/55">
                  Typical stay length
                </p>
                <p className="mt-3 text-sm text-navy-900/70 leading-relaxed">
                  Longer than a holiday booking, shorter than an AST. Lower
                  turnover means less wear on your property and fewer operational
                  headaches.
                </p>
              </div>
              <div className="bg-white p-8 lg:p-10">
                <p className="font-extrabold text-fluid-3xl text-gold-500 tabular-nums tracking-tighter">
                  Zero
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest font-semibold text-navy-900/55">
                  AST deposit disputes
                </p>
                <p className="mt-3 text-sm text-navy-900/70 leading-relaxed">
                  Corporate lets sit outside the AST framework. No protected
                  tenancies, no end-of-term deposit fights, no Section 8 hearings.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="mt-14 max-w-3xl space-y-5 text-fluid-lg text-navy-900/75 leading-relaxed">
            <FadeIn delay={0.2}>
              <p>
                A well-managed mix of short and medium-term stays gives you the
                uplift of short-let with the stability of longer stays. You get
                regular property inspections between guests, and no six-year AST
                locking you in.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p>
                For this guest profile we don&apos;t just rely on Airbnb. We market
                through corporate housing platforms, relocation agents, and direct
                booking channels. The right channels reach the right guests.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p>
                Operationally it&apos;s the full thing. Guest vetting, contracts,
                check-in and check-out, cleaning, linen, maintenance coordination,
                and 24/7 guest support.
              </p>
            </FadeIn>
            <FadeIn delay={0.35}>
              <p>
                Well above long-let yields, without the AST risk profile.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="mt-12">
              <Link href="/contact" className="btn-gold">
                Get a free valuation
                <ArrowRight size={18} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <TajCribsStandard variant="inline" />

      {/* CASE STUDIES */}
      <section className="bg-cream section-pad">
        <div className="container-edge">
          <div className="max-w-3xl">
            <FadeIn>
              <SectionLabel onLight>Case Studies</SectionLabel>
              <h2 className="mt-5 text-fluid-4xl font-extrabold tracking-tighter leading-tight">
                What our managed properties actually deliver.
              </h2>
            </FadeIn>
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {CASE_STUDIES.slice(0, 2).map((p, idx) => (
              <FadeIn key={p.id} delay={idx * 0.1}>
                <article className="bg-cream rounded-md overflow-hidden">
                  <div className="relative aspect-[3/2]">
                    <Image
                      src={p.imageUrl}
                      alt={`${p.name}, ${p.area}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <span className="absolute top-4 left-4 bg-navy-950 text-white px-3 py-1.5 rounded-sm text-[10px] uppercase tracking-widest font-bold">
                      {p.badge ?? p.type}
                    </span>
                  </div>
                  <div className="p-8">
                    <p className="eyebrow !text-gold-700">{p.area}</p>
                    <h3 className="mt-3 font-extrabold text-fluid-2xl tracking-tighter">{p.name}</h3>
                    <p className="mt-4 text-navy-900/70 leading-relaxed">{p.description}</p>
                    <div className="mt-6 pt-6 border-t border-light-line grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest font-semibold text-navy-900/50">Monthly income</p>
                        <p className="mt-1 font-bold text-fluid-xl tabular-nums text-navy-900">{p.monthlyIncome}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest font-semibold text-navy-900/50">Outcome</p>
                        <p className="mt-1 font-bold text-fluid-lg text-gold-700 leading-snug">{p.highlight}</p>
                      </div>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FEE TRANSPARENCY */}
      <section className="bg-navy-900 text-white section-pad">
        <div className="container-edge max-w-4xl text-center">
          <FadeIn>
            <SectionLabel align="center">Fee Transparency</SectionLabel>
            <h2 className="mt-5 text-fluid-4xl font-extrabold tracking-tighter leading-tight">
              One number. No surprises.
            </h2>
            <p className="mt-6 text-fluid-lg text-white/75 leading-relaxed max-w-2xl mx-auto">
              We charge a flat 18% of gross booking revenue. No setup fees,
              no listing fees, no photography fees, no call-out charges, no monthly retainer.
            </p>
            <div className="mt-10 inline-flex items-baseline gap-3 bg-navy-700 px-10 py-8 rounded-md border border-navy-600">
              <span className="font-extrabold text-7xl text-gold-500 tabular-nums tracking-tighter">18%</span>
              <span className="text-fluid-lg text-white/70">of gross. Flat.</span>
            </div>
          </FadeIn>
        </div>
      </section>

      <FAQ
        items={SHORT_LET_FAQS}
        heading="Questions about short-let management."
      />

      {/* FORM CTA */}
      <section className="bg-cream section-pad">
        <div className="container-edge max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <FadeIn>
                <SectionLabel onLight>Start Earning</SectionLabel>
                <h2 className="mt-5 text-fluid-3xl font-extrabold tracking-tighter leading-tight">
                  See your property&apos;s actual short-let income.
                </h2>
                <p className="mt-5 text-navy-900/70 leading-relaxed">
                  Tell us about your property and we&apos;ll model a realistic
                  monthly income based on similar units we manage today.
                </p>
                <Link href="/guaranteed-rent" className="mt-7 inline-flex items-center gap-2 text-navy-900 font-semibold border-b border-navy-900 pb-1 hover:text-gold-600 transition-colors">
                  Prefer guaranteed rent? View scheme →
                </Link>
              </FadeIn>
            </div>
            <div className="lg:col-span-7">
              <LeadForm source="property_management_footer" defaultService="short-let-management" />
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
