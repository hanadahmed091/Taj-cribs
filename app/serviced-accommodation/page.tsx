import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  TrendingUp,
  LineChart,
  Hand,
  Camera,
  Globe,
  Sparkles,
  Headphones,
  Banknote,
} from 'lucide-react'
import { LeadForm } from '@/components/forms/LeadForm'
import { FAQ } from '@/components/sections/FAQ'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/ui/FadeIn'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { SERVICED_ACCOMMODATION_FAQS } from '@/lib/data/faqs'
import { FaqJsonLd } from '@/components/seo/FaqJsonLd'
import { SITE } from '@/lib/config'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Serviced Accommodation Management London',
  description:
    'Serviced-accommodation management for Central London landlords. Multi-platform listings, in-house housekeeping, monthly net payout. Free valuation.',
  alternates: { canonical: '/serviced-accommodation' },
}

const LANDLORD_CASE = [
  {
    icon: TrendingUp,
    title: 'Higher yield than long-let',
    body:
      'Multi-week stays priced as a serviced product earn meaningfully more per month than an equivalent AST, particularly in prime Central London postcodes. We model your specific property and come back with a tailored figure within one business day.',
  },
  {
    icon: LineChart,
    title: 'Lower volatility than nightly short-let',
    body:
      'Stays of one week to three months smooth out the peak-and-trough pattern of nightly bookings. Fewer weekends-only earning gaps, fewer turnovers, less wear on the property.',
  },
  {
    icon: Hand,
    title: 'Operationally hands-off',
    body:
      'We handle the furnishing brief, multi-platform marketing, guest vetting, housekeeping, maintenance and billing. You see one monthly net payment.',
  },
]

const OPERATIONS = [
  {
    icon: Camera,
    title: 'Furnishing brief',
    body:
      'A consistent specification works hardest in the corporate and medium-stay market. We brief any furnishing work needed before going live, then handle photography and listing copy.',
  },
  {
    icon: Globe,
    title: 'Multi-platform distribution',
    body:
      'Booking.com, Airbnb longer-stay listings, Homelike, SilverDoor, corporate housing networks and direct booking. The right channels reach the right guests for this product.',
  },
  {
    icon: Sparkles,
    title: 'In-house housekeeping',
    body:
      'A hotel-grade turnaround cadence with a defined checklist and quality control between every stay. Linen, consumables and minor maintenance are included in the operation.',
  },
  {
    icon: Headphones,
    title: '24/7 guest support',
    body:
      'A real person on call around the clock for any guest or maintenance issue, so you never need to take the call.',
  },
  {
    icon: Banknote,
    title: 'Monthly owner reporting',
    body:
      'A single net payment per month with a clear statement showing the gross bookings, our management fee, any uncovered costs and your balance.',
  },
]

const COMPARISON = [
  {
    feature: 'Typical stay',
    long: '12+ months',
    sa: '1 week – 3 months',
    nightly: '2–7 nights',
    gr: 'n/a (lease)',
  },
  {
    feature: 'Income profile',
    long: 'Flat monthly',
    sa: 'Predictable monthly',
    nightly: 'Variable nightly',
    gr: 'Fixed monthly',
  },
  {
    feature: 'Void risk',
    long: 'On landlord',
    sa: 'Shared / low',
    nightly: 'On landlord',
    gr: 'On us',
  },
  {
    feature: 'Operational load',
    long: 'Light',
    sa: 'We handle',
    nightly: 'We handle',
    gr: 'We handle',
  },
  {
    feature: 'Lease structure',
    long: 'AST',
    sa: 'Corporate / management',
    nightly: 'Management',
    gr: 'Corporate lease',
  },
  {
    feature: 'Best for',
    long: 'Income certainty',
    sa: 'Income + flexibility',
    nightly: 'Maximum yield',
    gr: 'Hands-off + certainty',
  },
]

const SA_BOROUGHS = [
  {
    name: 'Mayfair',
    blurb: 'Ultra-premium leisure, family offices, embassy and Berkeley Square corporate.',
    href: '/areas/mayfair',
  },
  {
    name: 'Kensington',
    blurb: 'Museum-quarter family stays, Imperial College / Royal Brompton visitors.',
    href: '/areas/high-street-kensington',
  },
  {
    name: 'Chelsea',
    blurb: 'King’s Road relocations, Chelsea & Westminster Hospital, design industry.',
    href: '/areas/chelsea',
  },
  {
    name: 'Marylebone',
    blurb: 'Harley Street medical, Baker Street corporate, Wigmore Hall cultural.',
    href: '/areas/marylebone',
  },
]

const GUEST_PROFILES = [
  {
    label: 'Corporate relocations',
    body:
      'Staff moving to London for new roles, typically placed by their employer for one to six months while they get set up.',
  },
  {
    label: 'Project contractors and consultants',
    body:
      'Finance, tech, legal and construction professionals on fixed-term contracts. Three to nine months is typical.',
  },
  {
    label: 'Insurance and relocation housing',
    body:
      'Guests placed by insurance companies while their home is being repaired, or by relocation agents while a family searches for a permanent place.',
  },
  {
    label: 'International medical visitors',
    body:
      'Patients and family travelling to Central London for treatment at Harley Street, Great Ormond Street and other private and NHS clinics.',
  },
  {
    label: 'Family stays during student term transitions',
    body:
      'Parents visiting students during term starts, exam periods and graduation, where a serviced flat is more comfortable than a hotel.',
  },
]

export default function ServicedAccommodationPage() {
  return (
    <>
      <FaqJsonLd faqs={SERVICED_ACCOMMODATION_FAQS} />

      {/* HERO with inline form */}
      <section className="relative hero-bg text-white pt-[120px] pb-20 lg:pt-[160px] lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-60 pointer-events-none" />
        <div className="container-edge relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <SectionLabel className="!justify-start">Serviced Accommodation</SectionLabel>
            <h1 className="mt-6 text-hero font-extrabold tracking-tightest leading-[0.95]">
              Serviced Accommodation <br />
              <span className="text-gold-500">Management in Central London.</span>
            </h1>
            <p className="mt-8 max-w-xl text-fluid-lg text-white/75 leading-relaxed">
              We operate Central London apartments on the serviced-accommodation
              model. Furnishing brief, multi-platform distribution, in-house
              housekeeping on a hotel turnaround cadence, and 24/7 guest support.
              You see one monthly net payment.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-cream rounded-md p-2">
              <LeadForm
                variant="compact"
                source="serviced_accommodation_hero"
                defaultService="short-let-management"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IT MEANS */}
      <section className="bg-white section-pad">
        <div className="container-edge max-w-4xl">
          <FadeIn>
            <SectionLabel onLight>What it actually means</SectionLabel>
            <h2 className="mt-5 text-fluid-4xl font-extrabold tracking-tighter leading-tight">
              Hotel-grade operation. <span className="text-gold-600">Longer stays. One monthly net.</span>
            </h2>
          </FadeIn>
          <div className="mt-10 space-y-6 text-fluid-lg text-navy-900/80 leading-relaxed">
            <FadeIn delay={0.05}>
              <p>
                Serviced accommodation sits between short-let (nightly Airbnb /
                Booking.com) and a long-term AST. The guest typically books for
                one week to three months. The product is more like a small hotel
                suite than a holiday flat — a consistent service standard,
                weekly or bi-weekly housekeeping cycles, defined check-in and
                check-out, billing on a weekly or monthly cycle rather than
                per-night.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p>
                For landlords, the practical difference is the guest profile.
                Serviced-accommodation bookings come predominantly from
                corporate housing budgets, relocation agents, insurance
                placements and overseas family visitors, rather than nightly
                leisure travellers. The result is a longer average stay, lower
                turnover, less wear on the property, and a more predictable
                monthly income than nightly short-let.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* LANDLORD CASE — 3 CARDS */}
      <section className="bg-cream section-pad">
        <div className="container-edge">
          <div className="max-w-3xl">
            <FadeIn>
              <SectionLabel onLight>The landlord case</SectionLabel>
              <h2 className="mt-5 text-fluid-4xl font-extrabold tracking-tighter leading-tight">
                Why landlords choose serviced accommodation.
              </h2>
            </FadeIn>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-light-line border border-light-line">
            {LANDLORD_CASE.map((c) => {
              const Icon = c.icon
              return (
                <FadeIn key={c.title}>
                  <div className="bg-white p-8 lg:p-10 h-full">
                    <div className="w-12 h-12 bg-navy-950 text-gold-500 flex items-center justify-center rounded-sm">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-6 font-bold text-fluid-xl tracking-tight">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-sm text-navy-900/70 leading-relaxed">
                      {c.body}
                    </p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* WHERE IT WORKS — borough tiles */}
      <section className="bg-white section-pad">
        <div className="container-edge">
          <div className="max-w-3xl">
            <FadeIn>
              <SectionLabel onLight>Where it works</SectionLabel>
              <h2 className="mt-5 text-fluid-4xl font-extrabold tracking-tighter leading-tight">
                The boroughs where serviced accommodation <span className="text-gold-600">runs hardest.</span>
              </h2>
              <p className="mt-6 text-fluid-lg text-navy-900/70 leading-relaxed">
                Demand is strongest where corporate, medical and embassy
                visitors cluster. We run the serviced-accommodation model
                across the four prime Central London postcodes below.
              </p>
            </FadeIn>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SA_BOROUGHS.map((b) => (
              <FadeIn key={b.name}>
                <Link
                  href={b.href}
                  className="block bg-cream rounded-md p-7 h-full border border-light-line hover:border-gold-500/40 transition-colors group"
                >
                  <h3 className="font-bold text-fluid-xl tracking-tight text-navy-900">
                    {b.name}
                  </h3>
                  <p className="mt-3 text-sm text-navy-900/70 leading-relaxed">
                    {b.blurb}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 group-hover:text-gold-600 transition-colors">
                    View {b.name} guide
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHO BOOKS */}
      <section className="bg-cream section-pad">
        <div className="container-edge">
          <div className="max-w-3xl">
            <FadeIn>
              <SectionLabel onLight>Who books serviced accommodation</SectionLabel>
              <h2 className="mt-5 text-fluid-4xl font-extrabold tracking-tighter leading-tight">
                A different guest mix to nightly short-let.
              </h2>
            </FadeIn>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-light-line border border-light-line">
            {GUEST_PROFILES.map((p) => (
              <FadeIn key={p.label}>
                <div className="bg-white p-8 lg:p-10 h-full">
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

      {/* HOW WE OPERATE */}
      <section className="bg-white section-pad">
        <div className="container-edge">
          <div className="max-w-3xl">
            <FadeIn>
              <SectionLabel onLight>How we operate it</SectionLabel>
              <h2 className="mt-5 text-fluid-4xl font-extrabold tracking-tighter leading-tight">
                One operation. <span className="text-gold-600">Top to bottom.</span>
              </h2>
            </FadeIn>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-light-line border border-light-line">
            {OPERATIONS.map((o) => {
              const Icon = o.icon
              return (
                <FadeIn key={o.title}>
                  <div className="bg-white p-8 lg:p-10 h-full">
                    <div className="w-10 h-10 bg-navy-950 text-gold-500 flex items-center justify-center rounded-sm">
                      <Icon size={16} />
                    </div>
                    <h3 className="mt-5 font-bold text-fluid-xl tracking-tight">
                      {o.title}
                    </h3>
                    <p className="mt-3 text-sm text-navy-900/70 leading-relaxed">
                      {o.body}
                    </p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE — qualitative only, no numbers */}
      <section className="bg-cream section-pad">
        <div className="container-edge">
          <div className="max-w-3xl">
            <FadeIn>
              <SectionLabel onLight>How it compares</SectionLabel>
              <h2 className="mt-5 text-fluid-4xl font-extrabold tracking-tighter leading-tight">
                Serviced accommodation vs. AST vs. short-let vs. guaranteed rent.
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.1}>
            <div className="mt-12 overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse">
                <thead>
                  <tr>
                    <th className="text-left py-5 pr-6 text-[10px] uppercase tracking-widest font-semibold text-navy-900/50">
                      Feature
                    </th>
                    <th className="py-5 px-4 text-left text-[10px] uppercase tracking-widest font-semibold text-navy-900/50">
                      Long-let AST
                    </th>
                    <th className="py-5 px-4 text-left bg-gold-500 text-navy-950 text-[11px] uppercase tracking-widest font-bold rounded-t-sm">
                      Serviced accommodation
                    </th>
                    <th className="py-5 px-4 text-left text-[10px] uppercase tracking-widest font-semibold text-navy-900/50">
                      Nightly short-let
                    </th>
                    <th className="py-5 px-4 text-left text-[10px] uppercase tracking-widest font-semibold text-navy-900/50">
                      Guaranteed rent
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-cream'}>
                      <td className="py-4 pr-6 font-semibold text-sm">{row.feature}</td>
                      <td className="py-4 px-4 text-sm text-navy-900/75">{row.long}</td>
                      <td className="py-4 px-4 text-sm font-medium text-navy-900 bg-gold-500/10 border-l border-r border-gold-500/20">
                        {row.sa}
                      </td>
                      <td className="py-4 px-4 text-sm text-navy-900/75">{row.nightly}</td>
                      <td className="py-4 px-4 text-sm text-navy-900/75">{row.gr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      <FAQ
        items={SERVICED_ACCOMMODATION_FAQS}
        heading="Serviced accommodation. Common landlord questions."
      />

      {/* FOOTER CTA */}
      <section className="bg-cream section-pad">
        <div className="container-edge max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <FadeIn>
                <SectionLabel onLight>Get Started</SectionLabel>
                <h2 className="mt-5 text-fluid-3xl font-extrabold tracking-tighter leading-tight">
                  See what your property would earn as serviced accommodation.
                </h2>
                <p className="mt-5 text-navy-900/70 leading-relaxed">
                  Tell us about your property and we will model both a
                  serviced-accommodation income and a guaranteed-rent figure
                  within one business day. Free, no obligation.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <Link
                    href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-2 text-navy-900 font-semibold border-b border-navy-900 pb-1 hover:text-gold-600 transition-colors"
                  >
                    Or call us directly
                    <ArrowRight size={16} />
                  </Link>
                  <WhatsAppButton variant="link" location="serviced_accommodation_footer" />
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-7">
              <LeadForm
                source="serviced_accommodation_footer"
                defaultService="short-let-management"
              />
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
