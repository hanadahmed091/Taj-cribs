import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Check, X, Minus } from 'lucide-react'
import { LeadForm } from '@/components/forms/LeadForm'
import { IncomeCalculator } from '@/components/forms/IncomeCalculator'
import { FAQ } from '@/components/sections/FAQ'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/ui/FadeIn'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { GUARANTEED_RENT_FAQS } from '@/lib/data/faqs'
import { FaqJsonLd } from '@/components/seo/FaqJsonLd'
import { PROPERTIES } from '@/lib/data/properties'

export const metadata: Metadata = {
  title: 'Guaranteed Rent London | Fixed Monthly Income | No Void Periods',
  description:
    'Guaranteed rent for Central London landlords. Fixed monthly income for 3-5 years. No voids, no agency fees, no hassle. Free valuation in 24 hours.',
  alternates: { canonical: '/guaranteed-rent' },
}

const STEPS = [
  { n: '01', title: 'Free valuation', body: 'Tell us about your property. We confirm a guaranteed monthly figure within 24 hours.' },
  { n: '02', title: 'Sign corporate lease', body: 'A simple 3-5 year corporate lease — fixed monthly payment, on the same date.' },
  { n: '03', title: 'We onboard', body: 'Photography, listing, compliance, insurance, furnishing. Two weeks, hands-off.' },
  { n: '04', title: 'You get paid', body: 'Fixed payment lands in your account. Same day, every month, for the full term.' },
]

const COMPARISON = [
  { feature: 'Rent received', gr: 'Full market rent (guaranteed)', ast: 'Market rent (minus voids)', diy: 'Variable (often below AST net)' },
  { feature: 'Monthly income', gr: 'Fixed', ast: 'Fixed (subject to voids)', diy: 'Variable' },
  { feature: 'Void risk', gr: 'On us', ast: 'On you', diy: 'On you' },
  { feature: 'Maintenance', gr: 'Included', ast: 'You pay', diy: 'You pay' },
  { feature: 'Tenant find fees', gr: 'None', ast: 'On you', diy: 'On you' },
  { feature: 'Onboarding time', gr: '21 days', ast: '4–8 weeks', diy: '4–10 weeks' },
  { feature: 'Property condition', gr: 'Hotel standard', ast: 'Variable', diy: 'Owner-managed' },
  { feature: 'Lease term', gr: '3–5 years', ast: '6–12 months', diy: 'N/A' },
  { feature: 'Operational involvement', gr: 'Zero', ast: 'Moderate', diy: 'High' },
]

const CASE_STUDIES = PROPERTIES.filter((p) => p.service === 'guaranteed-rent').slice(0, 3)

export default function GuaranteedRentPage() {
  return (
    <>
      <FaqJsonLd faqs={GUARANTEED_RENT_FAQS} />

      {/* HERO with inline form */}
      <section className="relative hero-bg text-white pt-[120px] pb-20 lg:pt-[160px] lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-60 pointer-events-none" />
        <div className="container-edge relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <SectionLabel className="!justify-start">Guaranteed Rent Scheme</SectionLabel>
            <h1 className="mt-6 text-hero font-extrabold tracking-tightest leading-[0.95]">
              Guaranteed rent. <br />
              <span className="text-gold-500">Fixed. Monthly. Yours.</span>
            </h1>
            <p className="mt-8 max-w-xl text-fluid-lg text-white/75 leading-relaxed">
              We guarantee you the <strong className="text-white">full market rental value</strong>
              {' '}of your property as a fixed monthly payment — paid on the same date every month,
              regardless of occupancy. No voids, no chasing rent, no hassle.
            </p>
            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
              {['Paid at full market rent', 'No void periods, ever', 'Maintenance included', 'Long-term security'].map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-white/85">
                  <Check size={16} className="text-gold-500 shrink-0" /> {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-cream rounded-md p-2">
              <LeadForm
                variant="compact"
                source="guaranteed_rent_hero"
                defaultService="guaranteed-rent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white section-pad">
        <div className="container-edge">
          <div className="max-w-3xl">
            <FadeIn>
              <SectionLabel>How It Works</SectionLabel>
              <h2 className="mt-5 text-fluid-4xl font-extrabold tracking-tighter leading-tight">
                Four steps. <span className="text-gold-600">No paperwork lost in translation.</span>
              </h2>
            </FadeIn>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-light-line border border-light-line">
            {STEPS.map((s) => (
              <div key={s.n} className="bg-white p-8 lg:p-10">
                <span className="font-extrabold text-fluid-3xl text-gold-500 tabular-nums">{s.n}</span>
                <h3 className="mt-5 font-bold text-fluid-xl tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-navy-900/70 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="bg-cream section-pad">
        <div className="container-edge max-w-4xl">
          <IncomeCalculator />
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-white section-pad">
        <div className="container-edge">
          <div className="max-w-3xl">
            <FadeIn>
              <SectionLabel>How It Compares</SectionLabel>
              <h2 className="mt-5 text-fluid-4xl font-extrabold tracking-tighter leading-tight">
                Guaranteed Rent vs. Standard AST vs. DIY Short-Let.
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <div className="mt-12 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse">
                <thead>
                  <tr>
                    <th className="text-left py-5 pr-6 text-[10px] uppercase tracking-widest font-semibold text-navy-900/50">
                      Feature
                    </th>
                    <th className="py-5 px-4 text-left bg-gold-500 text-navy-950 text-[11px] uppercase tracking-widest font-bold rounded-t-sm">
                      Guaranteed Rent
                    </th>
                    <th className="py-5 px-4 text-left text-[10px] uppercase tracking-widest font-semibold text-navy-900/50">
                      Standard AST
                    </th>
                    <th className="py-5 px-4 text-left text-[10px] uppercase tracking-widest font-semibold text-navy-900/50">
                      DIY Short-Let
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? 'bg-cream' : 'bg-white'}>
                      <td className="py-4 pr-6 font-semibold text-sm">{row.feature}</td>
                      <td className="py-4 px-4 text-sm font-medium text-navy-900 bg-gold-500/10 border-l border-r border-gold-500/20">
                        <span className="flex items-center gap-2">
                          <Check size={14} className="text-gold-600 shrink-0" /> {row.gr}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-navy-900/75">
                        <span className="flex items-center gap-2">
                          <Minus size={14} className="text-navy-900/40 shrink-0" /> {row.ast}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-navy-900/75">
                        <span className="flex items-center gap-2">
                          <X size={14} className="text-navy-900/40 shrink-0" /> {row.diy}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CASE STUDIES from PROPERTIES */}
      <section className="bg-navy-900 text-white section-pad">
        <div className="container-edge">
          <div className="max-w-3xl">
            <FadeIn>
              <SectionLabel>Properties we operate</SectionLabel>
              <h2 className="mt-5 text-fluid-4xl font-extrabold tracking-tighter leading-tight">
                Blocks we&apos;ve taken on under guaranteed rent.
              </h2>
            </FadeIn>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((p) => (
              <FadeIn key={p.id}>
                <article className="rounded-md border border-navy-line overflow-hidden">
                  <div className="relative aspect-[3/2]">
                    <Image
                      src={p.imageUrl}
                      alt={`${p.name}, ${p.area}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-7">
                    <span className="eyebrow">{p.area}</span>
                    <h3 className="mt-3 font-bold text-fluid-2xl tracking-tight">{p.name}</h3>
                    <p className="mt-3 text-white/65 text-sm leading-relaxed">{p.description}</p>
                    <div className="mt-5 pt-5 border-t border-navy-line">
                      <p className="text-gold-500 font-bold text-fluid-xl tabular-nums">{p.monthlyIncome}</p>
                      <p className="text-xs text-white/55 mt-1">{p.highlight}</p>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        items={GUARANTEED_RENT_FAQS}
        heading="Everything landlords ask before signing."
      />

      {/* Form CTA */}
      <section className="bg-cream section-pad">
        <div className="container-edge max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <FadeIn>
                <SectionLabel>Get Started</SectionLabel>
                <h2 className="mt-5 text-fluid-3xl font-extrabold tracking-tighter leading-tight">
                  Get your guaranteed monthly figure — in 24 hours.
                </h2>
                <p className="mt-5 text-navy-900/70 leading-relaxed">
                  Tell us about your property. We&apos;ll review and come back with
                  a firm guaranteed monthly figure within one business day.
                </p>
                <Link href="tel:+442079460000" className="mt-7 inline-flex items-center gap-2 text-navy-900 font-semibold border-b border-navy-900 pb-1 hover:text-gold-600 transition-colors">
                  Or call us directly
                  <ArrowRight size={16} />
                </Link>
              </FadeIn>
            </div>
            <div className="lg:col-span-7">
              <LeadForm source="guaranteed_rent_footer" defaultService="guaranteed-rent" />
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
