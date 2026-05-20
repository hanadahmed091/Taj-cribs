import Image from 'next/image'
import { Check } from 'lucide-react'
import { LeadForm } from '@/components/forms/LeadForm'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Stars } from '@/components/ui/Stars'
import { FadeIn } from '@/components/ui/FadeIn'
import { SITE } from '@/lib/config'

export type LandingProps = {
  eyebrow: string
  heroHeadline: React.ReactNode
  heroSub: string
  bullets: string[]
  formSource: string
  defaultService?: 'guaranteed-rent' | 'short-let-management'
  proofPoints: { label: string; value: string }[]
  socialProof?: string
  heroImage?: string
}

export function LandingTemplate({
  eyebrow,
  heroHeadline,
  heroSub,
  bullets,
  formSource,
  defaultService,
  proofPoints,
  socialProof,
  heroImage,
}: LandingProps) {
  return (
    <>
      <section className="relative bg-navy-950 text-white pt-[120px] pb-20 lg:pt-[160px] lg:pb-32 overflow-hidden">
        {heroImage ? (
          <>
            <Image
              src={heroImage}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/70" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 hero-bg" />
            <div className="absolute inset-0 hero-grid opacity-60" />
          </>
        )}

        <div className="container-edge relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <SectionLabel className="!justify-start">{eyebrow}</SectionLabel>
            <h1 className="mt-6 text-fluid-4xl lg:text-hero font-extrabold tracking-tightest leading-[0.95]">
              {heroHeadline}
            </h1>
            <p className="mt-8 max-w-xl text-fluid-lg text-white/75 leading-relaxed">
              {heroSub}
            </p>
            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-white/85">
                  <Check size={16} className="text-gold-500 shrink-0 mt-0.5" /> {b}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-center gap-4 text-sm text-white/75">
              <Stars />
              <span className="font-semibold">{SITE.ratingValue}/5</span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">
                {socialProof ?? `Trusted by ${SITE.managedPortfolioCount}+ London landlords`}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-cream rounded-md p-2">
              <LeadForm
                variant="full"
                source={formSource}
                defaultService={defaultService}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROOF POINTS */}
      <section className="bg-cream py-20">
        <div className="container-edge">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {proofPoints.map((p, i) => (
              <FadeIn key={p.label} delay={i * 0.05}>
                <p className="font-extrabold text-fluid-3xl text-navy-900 tabular-nums tracking-tighter">
                  {p.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-navy-900/55 font-semibold">
                  {p.label}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
