import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Camera, Calendar, Users, Sparkles, ShieldCheck, Wrench,
  BarChart3, MessageCircle, Headphones, Globe, Key, Banknote,
} from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/ui/FadeIn'
import { LeadForm } from '@/components/forms/LeadForm'
import { IncomeCalculator } from '@/components/forms/IncomeCalculator'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { TajCribsStandard } from '@/components/sections/TajCribsStandard'
import { SHORT_LET_FAQS } from '@/lib/data/faqs'
import { FaqJsonLd } from '@/components/seo/FaqJsonLd'
import { PROPERTIES } from '@/lib/data/properties'

export const metadata: Metadata = {
  title: 'Short-Let & Airbnb Management London',
  description:
    'Full-service short-let and Airbnb property management in Central London. Multi-platform listings, dynamic pricing, in-house housekeeping. 2-3x standard yields.',
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

const PLATFORMS = [
  { name: 'Airbnb' },
  { name: 'Booking.com' },
  { name: 'Vrbo' },
  { name: 'Expedia' },
  { name: 'Direct' },
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
              You see one number on the 5th of every month: your net. Our estimates sit 10%
              below market ADR. Most landlords exceed them.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-cream rounded-md p-2">
              <IncomeCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* EVERYTHING INCLUDED */}
      <section className="bg-white section-pad">
        <div className="container-edge">
          <div className="max-w-3xl">
            <FadeIn>
              <SectionLabel>Everything Included</SectionLabel>
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
              Your property listed and optimised across
            </p>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
              {PLATFORMS.map((p) => (
                <span key={p.name} className="text-fluid-2xl font-extrabold tracking-tighter text-navy-900/40">
                  {p.name}
                </span>
              ))}
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
              <SectionLabel>Case Studies</SectionLabel>
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
                    <p className="eyebrow">{p.area}</p>
                    <h3 className="mt-3 font-extrabold text-fluid-2xl tracking-tighter">{p.name}</h3>
                    <p className="mt-4 text-navy-900/70 leading-relaxed">{p.description}</p>
                    <div className="mt-6 pt-6 border-t border-light-line grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest font-semibold text-navy-900/50">Monthly income</p>
                        <p className="mt-1 font-bold text-fluid-xl tabular-nums text-navy-900">{p.monthlyIncome}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest font-semibold text-navy-900/50">Outcome</p>
                        <p className="mt-1 font-bold text-fluid-lg text-gold-600 leading-snug">{p.highlight}</p>
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
                <SectionLabel>Start Earning</SectionLabel>
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
