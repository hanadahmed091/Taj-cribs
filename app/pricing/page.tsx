'use client'
export const dynamic = 'force-dynamic'

import Link from 'next/link'
import nextDynamic from 'next/dynamic'
import {
  ArrowRight,
  Phone,
  Megaphone,
  Camera,
  PenLine,
  LineChart,
  Sparkles,
  ShieldCheck,
  Gift,
  Wrench,
  MessageSquare,
  UserCheck,
  KeyRound,
  Clock,
  type LucideIcon,
} from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { SITE } from '@/lib/config'
import { pushDataLayer } from '@/lib/utils'

// Heavy / animation-driven components rendered client-only to keep the
// static generator from timing out on framer-motion server work.
const FadeIn = nextDynamic(
  () => import('@/components/ui/FadeIn').then((m) => m.FadeIn),
  { ssr: false },
)
const FinalCTA = nextDynamic(
  () => import('@/components/sections/FinalCTA').then((m) => m.FinalCTA),
  { ssr: false },
)

type Tier = {
  label: string
  rate: string
  oneLiner: string
  featured?: boolean
}

// Desktop order: 30-day flexible on the left, the featured 12-month
// contract in the middle, multi-unit on the right. The featured card
// sits in the centre slot and lifts slightly so it reads as the
// recommended option without needing loud colour.
const TIERS: Tier[] = [
  {
    label: '30-day flexible',
    rate: '20%',
    oneLiner: "Roll month to month. Cancel any time with 30 days' notice.",
  },
  {
    label: '12-month contract',
    rate: '18%',
    oneLiner:
      'Best rate for single properties. Twelve-month commitment, full-service management.',
    featured: true,
  },
  {
    label: 'Multi-unit (2+ properties)',
    rate: '15%',
    oneLiner:
      'Lowest rate for portfolio owners with two or more units.',
  },
]

type Feature = {
  icon: LucideIcon
  title: string
  body: string
}

const LISTING_MANAGEMENT: Feature[] = [
  {
    icon: Megaphone,
    title: 'Marketing on leading platforms',
    body: 'We list your property on Booking.com, Airbnb, Vrbo, Homelike for medium-term lets, and Rightmove, OpenRent and Zoopla for longer-term lets. Specialist software keeps every channel in sync to drive the highest yield.',
  },
  {
    icon: Camera,
    title: 'Professional photography',
    body: 'High-end equipment and professional lighting. Your property is shot to compete with the top listings in its area.',
  },
  {
    icon: PenLine,
    title: 'Listing creation',
    body: 'From Airbnb to Homelike, we write the listing copy that wins the click and the booking.',
  },
  {
    icon: LineChart,
    title: 'Manual pricing optimisation',
    body: 'Human-operated pricing. We consistently outperform algorithm-only platforms because a person is making the call on every rate.',
  },
  {
    icon: Sparkles,
    title: 'Cleaning and linen',
    body: 'In-house housekeeping team trained on a strict checklist. Before-and-after photos every turnaround. Damage reported immediately.',
  },
  {
    icon: ShieldCheck,
    title: 'Insurance',
    body: 'We partner with a specialist short-let landlord insurer. You only pay for the days your property is occupied.',
  },
  {
    icon: Gift,
    title: 'Premium amenities',
    body: 'Premium brands for toiletries, coffee, linen and the welcome basket. Guests notice.',
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    body: 'Certified handymen on call. Urgent issues resolved without you ever picking up the phone.',
  },
]

const GUEST_MANAGEMENT: Feature[] = [
  {
    icon: MessageSquare,
    title: 'Guest communication',
    body: 'Every guest message answered quickly and professionally, in our voice and to our standard.',
  },
  {
    icon: UserCheck,
    title: 'Guest vetting',
    body: "Every booking checked before confirmation. We turn away the bookings that don't fit your property.",
  },
  {
    icon: KeyRound,
    title: 'Personal welcome and key exchange',
    body: 'Where possible, we meet guests at the property, hand over keys in person, and walk them through the home.',
  },
  {
    icon: Clock,
    title: '24/7 concierge',
    body: 'Real people on call around the clock for any guest or maintenance issue. You sleep, we handle it.',
  },
]

function FeatureBlock({ feature }: { feature: Feature }) {
  const Icon = feature.icon
  return (
    <div className="bg-white p-8 lg:p-10 h-full">
      <div className="w-12 h-12 bg-navy-950 text-gold-500 flex items-center justify-center rounded-sm">
        <Icon size={20} />
      </div>
      <h3 className="mt-6 font-bold text-fluid-xl tracking-tight">
        {feature.title}
      </h3>
      <p className="mt-3 text-sm text-navy-900/70 leading-relaxed">
        {feature.body}
      </p>
    </div>
  )
}

export default function PricingPage() {
  const telHref = `tel:${SITE.phone.replace(/\s/g, '')}`

  return (
    <>
      {/* HERO */}
      <section className="relative hero-bg text-white pt-[120px] pb-20 lg:pt-[160px] lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-60 pointer-events-none" />
        <div className="container-edge relative max-w-4xl">
          <SectionLabel className="!justify-start">Pricing</SectionLabel>
          <h1 className="mt-6 text-hero font-extrabold tracking-tightest leading-[0.95]">
            Flexible Airbnb management <br />
            in London. <span className="text-gold-500">From 15%.</span>
          </h1>
          <p className="mt-8 text-fluid-lg text-white/75 leading-relaxed max-w-2xl">
            Hands-on short-let management across Central London. Human pricing
            decisions, in-house housekeeping, and a real person on call for
            every guest.
          </p>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section className="bg-cream section-pad">
        <div className="container-edge">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {TIERS.map((tier, idx) => (
              <FadeIn key={tier.label} delay={idx * 0.08}>
                <div
                  className={`relative bg-white rounded-md p-8 lg:p-12 h-full flex flex-col transition-all ${
                    tier.featured
                      ? 'border-2 border-navy-900 lg:-translate-y-2 shadow-[0_30px_60px_-30px_rgba(6,19,37,0.25)]'
                      : 'border border-light-line'
                  }`}
                >
                  {tier.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-950 px-3 py-1 rounded-sm text-[10px] uppercase tracking-widest font-bold">
                      Most Popular
                    </span>
                  )}

                  <span className="eyebrow">{tier.label}</span>

                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="font-extrabold text-7xl text-navy-900 tabular-nums tracking-tighter">
                      {tier.rate}
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-navy-900/70 leading-relaxed flex-1">
                    {tier.oneLiner}
                  </p>

                  <Link
                    href="/contact"
                    onClick={() =>
                      pushDataLayer('cta_valuation_request', {
                        location: `pricing_tier_${tier.label.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')}`,
                      })
                    }
                    className={`mt-10 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-sm font-semibold transition-all duration-500 w-full ${
                      tier.featured
                        ? 'bg-navy-950 text-white hover:bg-navy-900 hover:-translate-y-0.5'
                        : 'btn-outline-gold !text-navy-950 !border-navy-950 hover:!bg-navy-950 hover:!text-white'
                    }`}
                  >
                    Get a free valuation
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* EVERYTHING INCLUDED */}
      <section className="bg-white section-pad">
        <div className="container-edge">
          <div className="max-w-3xl">
            <FadeIn>
              <SectionLabel>What you get</SectionLabel>
              <h2 className="mt-5 text-fluid-4xl font-extrabold tracking-tighter leading-tight">
                Everything included, at <span className="text-gold-600">every tier.</span>
              </h2>
              <p className="mt-6 text-fluid-lg text-navy-900/70 leading-relaxed">
                The rate changes with your commitment and the size of your
                portfolio. The service does not. Every property on our books
                gets the full operation, top to bottom.
              </p>
            </FadeIn>
          </div>

          {/* Listing management */}
          <div className="mt-16">
            <FadeIn>
              <h3 className="text-[11px] uppercase tracking-widest font-semibold text-gold-600">
                Listing management
              </h3>
              <p className="mt-3 text-fluid-2xl font-extrabold tracking-tighter leading-tight text-navy-900">
                The work of finding the right guest at the right price.
              </p>
            </FadeIn>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-px bg-light-line border border-light-line">
              {LISTING_MANAGEMENT.map((feature, idx) => (
                <FadeIn key={feature.title} delay={idx * 0.04}>
                  <FeatureBlock feature={feature} />
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Guest management */}
          <div className="mt-20">
            <FadeIn>
              <h3 className="text-[11px] uppercase tracking-widest font-semibold text-gold-600">
                Guest management
              </h3>
              <p className="mt-3 text-fluid-2xl font-extrabold tracking-tighter leading-tight text-navy-900">
                The work of looking after them once they are in.
              </p>
            </FadeIn>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-px bg-light-line border border-light-line">
              {GUEST_MANAGEMENT.map((feature, idx) => (
                <FadeIn key={feature.title} delay={idx * 0.04}>
                  <FeatureBlock feature={feature} />
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-cream section-pad">
        <div className="container-edge max-w-3xl text-center">
          <FadeIn>
            <h2 className="text-fluid-4xl font-extrabold tracking-tighter leading-tight">
              Ready to switch? <span className="text-gold-600">Tell us about your property.</span>
            </h2>
            <p className="mt-6 text-fluid-lg text-navy-900/70 leading-relaxed">
              We come back with a clear income projection and the right tier
              for your portfolio within one business day.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                onClick={() =>
                  pushDataLayer('cta_valuation_request', { location: 'pricing_bottom_cta' })
                }
                className="btn-gold"
              >
                Get a free valuation
                <ArrowRight size={18} />
              </Link>
              <a
                href={telHref}
                onClick={() => pushDataLayer('phone_click', { location: 'pricing_bottom_cta' })}
                className="btn-outline-gold !text-navy-950 !border-navy-950 hover:!bg-navy-950 hover:!text-white"
              >
                <Phone size={16} />
                {SITE.phoneDisplay}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
