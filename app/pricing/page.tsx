'use client'
export const dynamic = 'force-dynamic'

import Link from 'next/link'
import nextDynamic from 'next/dynamic'
import { ArrowRight, Check } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FaqJsonLd } from '@/components/seo/FaqJsonLd'
import { PRICING_FAQS } from '@/lib/data/pricing'
import { pushDataLayer } from '@/lib/utils'

// Heavy / animation-driven components — client-only to keep the static
// generator from timing out trying to render them on the server.
const FadeIn = nextDynamic(
  () => import('@/components/ui/FadeIn').then((m) => m.FadeIn),
  { ssr: false },
)
const FAQ = nextDynamic(
  () => import('@/components/sections/FAQ').then((m) => m.FAQ),
  { ssr: false },
)
const FinalCTA = nextDynamic(
  () => import('@/components/sections/FinalCTA').then((m) => m.FinalCTA),
  { ssr: false },
)

const SHORT_LET_INCLUDES = [
  'Dedicated Quality Officer inspection after every single checkout',
  'Professional photography & listing creation',
  'Multi-platform distribution (Airbnb, Booking.com, Vrbo, Expedia)',
  'Daily dynamic pricing optimisation',
  'Guest vetting, check-in & 24/7 communication',
  'Hotel-quality linen, cleaning & housekeeping',
  'Routine property checks & maintenance coordination',
  'Monthly income reports & owner dashboard',
]

const GUARANTEED_BEST_FOR = [
  'Landlords who want complete certainty',
  'Overseas or hands-off investors',
  'Block and portfolio owners',
]

const GUARANTEED_HOW = [
  'We assess your property and make a fixed monthly offer',
  'You accept and sign a simple agreement (1–5 year terms available)',
  'We pay you on the same date every month, regardless of occupancy',
  'We manage the property entirely — you have zero involvement',
]

export default function PricingPage() {
  return (
    <>
      <FaqJsonLd faqs={PRICING_FAQS} />

      {/* HERO */}
      <section className="relative hero-bg text-white pt-[120px] pb-20 lg:pt-[160px] lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-60 pointer-events-none" />
        <div className="container-edge relative max-w-4xl">
          <SectionLabel className="!justify-start">Pricing</SectionLabel>
          <h1 className="mt-6 text-hero font-extrabold tracking-tightest leading-[0.95]">
            Transparent pricing. <br />
            <span className="text-gold-500">No surprises.</span>
          </h1>
          <p className="mt-8 text-fluid-lg text-white/75 leading-relaxed max-w-2xl">
            We compete on results, not on being the cheapest. One flat fee for full short-let
            management — or no commission at all under our guaranteed rent scheme.
          </p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="bg-cream section-pad">
        <div className="container-edge">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* SHORT-LET MANAGEMENT */}
            <FadeIn>
              <div className="bg-white rounded-md border border-light-line p-8 lg:p-12 h-full flex flex-col">
                <div>
                  <span className="eyebrow">Short-Let Management</span>
                  <h2 className="mt-4 text-fluid-3xl font-extrabold tracking-tighter leading-tight">
                    Pay only when <br />
                    your property earns.
                  </h2>
                </div>

                <div className="mt-8 pb-8 border-b border-light-line">
                  <div className="flex items-baseline gap-3">
                    <span className="font-extrabold text-7xl text-navy-900 tabular-nums tracking-tighter">
                      18%
                    </span>
                    <span className="text-navy-900/70 text-fluid-lg">+ VAT</span>
                  </div>
                  <p className="mt-2 text-sm text-navy-900/65 leading-relaxed">
                    of net payout (rent and cleaning combined). <br />
                    <span className="font-semibold text-navy-900">£149</span> one-off
                    onboarding fee. No retainer. No hidden costs.
                  </p>
                </div>

                <ul className="mt-8 space-y-3 flex-1">
                  {SHORT_LET_INCLUDES.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-navy-900">
                      <Check size={16} className="text-gold-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  onClick={() =>
                    pushDataLayer('cta_valuation_request', { location: 'pricing_card_shortlet' })
                  }
                  className="btn-outline-gold !text-navy-950 !border-navy-950 hover:!bg-navy-950 hover:!text-white mt-10 justify-center w-full"
                >
                  Get a free valuation
                  <ArrowRight size={16} />
                </Link>
              </div>
            </FadeIn>

            {/* GUARANTEED RENT — featured gold card */}
            <FadeIn delay={0.1}>
              <div className="bg-gold-500 text-navy-950 rounded-md p-8 lg:p-12 h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-navy-950 text-gold-400 px-3 py-1 rounded-sm text-[10px] uppercase tracking-widest font-bold">
                  Most Popular
                </div>

                <div>
                  <span className="eyebrow !text-navy-950/70">Guaranteed Rent</span>
                  <h2 className="mt-4 text-fluid-3xl font-extrabold tracking-tighter leading-tight">
                    Fixed monthly. <br />
                    No commission to you.
                  </h2>
                </div>

                <div className="mt-8 pb-8 border-b border-navy-950/15">
                  <div className="flex items-baseline gap-3">
                    <span className="font-extrabold text-7xl text-navy-950 tabular-nums tracking-tighter">
                      £0
                    </span>
                    <span className="text-navy-950/70 text-fluid-lg">commission</span>
                  </div>
                  <p className="mt-2 text-sm text-navy-950/80 leading-relaxed">
                    Paid at <span className="font-semibold">full market rent</span>. <br />
                    No setup fee. No voids. Ever. Our margin comes from optimising
                    short-let upside — not from undercutting your rent.
                  </p>
                </div>

                <div className="mt-8 flex-1">
                  <p className="font-bold text-sm text-navy-950">How it works</p>
                  <ul className="mt-4 space-y-3">
                    {GUARANTEED_HOW.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <Check size={16} className="text-navy-950 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-8 font-bold text-sm text-navy-950">Best for</p>
                  <ul className="mt-4 space-y-3">
                    {GUARANTEED_BEST_FOR.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <Check size={16} className="text-navy-950 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  onClick={() =>
                    pushDataLayer('cta_guaranteed_rent_hero', { location: 'pricing_card_gr' })
                  }
                  className="mt-10 inline-flex items-center justify-center gap-2 bg-navy-950 text-white px-7 py-4 rounded-sm font-semibold transition-all duration-500 hover:bg-navy-900 hover:-translate-y-0.5 w-full"
                >
                  Get a guaranteed rent offer
                  <ArrowRight size={16} />
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <p className="mt-10 text-center text-sm text-navy-900/60">
              Multi-unit or block portfolio?{' '}
              <Link
                href="/contact"
                className="text-navy-900 underline decoration-gold-500 underline-offset-4 hover:text-gold-600 transition-colors"
              >
                Ask about our portfolio pricing
              </Link>.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* PRICING PHILOSOPHY */}
      <section className="bg-white section-pad">
        <div className="container-edge">
          <div className="max-w-3xl">
            <FadeIn>
              <SectionLabel>Our Philosophy</SectionLabel>
              <h2 className="mt-5 text-fluid-4xl font-extrabold tracking-tighter leading-tight">
                Why our pricing is <span className="text-gold-600">what it is.</span>
              </h2>
            </FadeIn>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-light-line border border-light-line">
            <FadeIn>
              <div className="bg-white p-8 lg:p-10 h-full">
                <span className="font-extrabold text-fluid-3xl text-gold-500 tabular-nums">01</span>
                <h3 className="mt-5 font-bold text-fluid-xl tracking-tight leading-snug">
                  We don&apos;t compete on price — we compete on performance.
                </h3>
                <p className="mt-4 text-navy-900/70 leading-relaxed text-sm">
                  We charge 18% because that&apos;s what genuine full-service management costs to do
                  properly. Cheaper operators cut corners on guest experience, which means lower
                  reviews, lower occupancy, and lower income for you. Our fee pays for itself many
                  times over.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="bg-white p-8 lg:p-10 h-full">
                <span className="font-extrabold text-fluid-3xl text-gold-500 tabular-nums">02</span>
                <h3 className="mt-5 font-bold text-fluid-xl tracking-tight leading-snug">
                  No earn = no fee.
                </h3>
                <p className="mt-4 text-navy-900/70 leading-relaxed text-sm">
                  Our management fee is calculated on your income. If your property isn&apos;t
                  earning, we&apos;re not charging. Our incentives are perfectly aligned with yours
                  — we only do well when you do well.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.16}>
              <div className="bg-white p-8 lg:p-10 h-full">
                <span className="font-extrabold text-fluid-3xl text-gold-500 tabular-nums">03</span>
                <h3 className="mt-5 font-bold text-fluid-xl tracking-tight leading-snug">
                  One fee covers everything.
                </h3>
                <p className="mt-4 text-navy-900/70 leading-relaxed text-sm">
                  No add-ons for photography. No extra charge for dynamic pricing tools. No
                  surprise maintenance call-out fees. The 18% covers the full end-to-end
                  operation — top to bottom.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <FAQ items={PRICING_FAQS} heading="Pricing questions, answered." label="Pricing FAQ" />

      <FinalCTA />
    </>
  )
}
