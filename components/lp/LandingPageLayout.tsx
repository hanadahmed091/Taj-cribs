import { Phone, ShieldCheck, Clock, Star, Building2 } from 'lucide-react'
import { SITE } from '@/lib/config'
import { LandingForm } from './LandingForm'
import { Stars } from '@/components/ui/Stars'

export type LandingPageProps = {
  areaLabel: string
  headline: string
  subheadline: string
  formTitle: string
  testimonialQuote: string
  testimonialName: string
  testimonialRole: string
  testimonialProperty: string
  // Tag this form's submission so analytics know which page it came from.
  // Defaults to a slug derived from areaLabel.
  formSource?: string
  defaultService?: 'guaranteed-rent' | 'short-let-management'
}

const TRUST_BADGES = [
  { icon: Building2,   label: `${SITE.managedPortfolioCount}+ Properties Managed` },
  { icon: ShieldCheck, label: 'Quality Officer Every Checkout' },
  { icon: Clock,       label: 'Less than a week onboarding' },
  { icon: Star,        label: `${SITE.ratingValue}/5 Rating` },
]

export function LandingPageLayout({
  areaLabel,
  headline,
  subheadline,
  formTitle,
  testimonialQuote,
  testimonialName,
  testimonialRole,
  testimonialProperty,
  formSource,
  defaultService,
}: LandingPageProps) {
  const source = formSource ?? `lp_${areaLabel.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')}`
  const telHref = `tel:${SITE.phone.replace(/\s/g, '')}`

  return (
    <>
      {/* HERO + FORM SPLIT */}
      <section className="relative hero-bg text-white pt-[110px] pb-10 lg:pt-[140px] lg:pb-14 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-60 pointer-events-none" />
        <div className="container-edge relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT — HEADLINE */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-7">
              <span className="gold-divider" />
              <span className="eyebrow">{areaLabel}</span>
            </div>
            <h1 className="text-fluid-4xl lg:text-hero font-extrabold tracking-tightest leading-[0.95]">
              <span className="text-gold-500">{headline}</span>
            </h1>
            <p className="mt-8 max-w-xl text-fluid-lg text-white/80 leading-relaxed">
              {subheadline}
            </p>
          </div>

          {/* RIGHT — FORM + TRUST BADGES */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <LandingForm
              title={formTitle}
              source={source}
              defaultService={defaultService}
            />
            <ul className="mt-6 grid grid-cols-2 gap-3 text-white">
              {TRUST_BADGES.map((b) => {
                const Icon = b.icon
                return (
                  <li
                    key={b.label}
                    className="flex items-center gap-3 rounded-sm bg-white/5 border border-white/10 px-3 py-3 text-sm font-semibold"
                  >
                    <span className="w-9 h-9 shrink-0 rounded-sm bg-navy-700 flex items-center justify-center text-gold-500">
                      <Icon size={18} />
                    </span>
                    <span className="leading-snug">{b.label}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* PHONE CTA */}
      <section className="bg-cream py-14 lg:py-20">
        <div className="container-edge text-center max-w-2xl">
          <span className="eyebrow">Prefer to talk?</span>
          <p className="mt-3 text-navy-900/70 text-fluid-lg">
            Call our Central London team directly — average answer in under 30 seconds.
          </p>
          <a
            href={telHref}
            className="mt-6 inline-block text-gold-600 font-extrabold tracking-tightest text-fluid-4xl tabular-nums hover:text-gold-500 transition-colors"
          >
            <Phone className="inline-block -mt-2 mr-3" size={32} />
            {SITE.phoneDisplay}
          </a>
          <p className="mt-3 text-xs uppercase tracking-widest font-semibold text-navy-900/50">
            Mon–Fri 9am–7pm · Sat 10am–4pm
          </p>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-white section-pad !py-20">
        <div className="container-edge max-w-3xl text-center">
          <Stars />
          <blockquote className="mt-6 text-fluid-2xl font-extrabold tracking-tighter leading-[1.25] text-navy-900">
            <span className="text-gold-500" aria-hidden="true">“</span>
            {testimonialQuote}
            <span className="text-gold-500" aria-hidden="true">”</span>
          </blockquote>
          <div className="mt-8 inline-flex flex-col items-center gap-1">
            <p className="font-bold text-navy-900">{testimonialName}</p>
            <p className="text-sm text-navy-900/60">
              {testimonialRole} · {testimonialProperty}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
