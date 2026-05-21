import Link from 'next/link'
import { ArrowUpRight, ShieldCheck, KeyRound } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/ui/FadeIn'

const SERVICES = [
  {
    icon: ShieldCheck,
    eyebrow: 'For predictable income',
    title: 'Guaranteed Rent',
    description:
      'Your full market rent, paid as a fixed monthly amount. Same day. Every month. For 1–5 years. No voids, no chasing rent. We carry all the operational risk.',
    bullets: [
      'Paid at full market rent',
      'No void periods, ever',
      'Full management included',
      'Long-term corporate lease',
    ],
    cta: { label: 'Get your guaranteed rate', href: '/guaranteed-rent' },
    accent: false,
  },
  {
    icon: KeyRound,
    eyebrow: 'For maximum returns',
    title: 'Short-Let Management',
    description:
      'Full-service short-let management. Multi-platform listings, dynamic pricing, professional housekeeping. Typically 2–3× standard AST yields.',
    bullets: [
      '18% flat management fee',
      'Listed on Airbnb, Booking, Vrbo',
      'Dynamic pricing optimised',
      'Owner dashboard included',
    ],
    cta: { label: 'See how it works', href: '/property-management' },
    accent: true,
  },
]

export function ServicesOverview() {
  return (
    <section className="bg-cream section-pad">
      <div className="container-edge">
        <FadeIn>
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="mt-5 text-fluid-4xl font-extrabold tracking-tighter leading-tight max-w-2xl">
            Two ways to let. <span className="text-gold-600">Both stress-free.</span>
          </h2>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon
            return (
              <FadeIn key={service.title} delay={idx * 0.1}>
                <Link
                  href={service.cta.href}
                  className={`group block h-full rounded-md p-8 lg:p-12 transition-all duration-500 border ${
                    service.accent
                      ? 'bg-gold-500 border-gold-500 text-navy-950 hover:bg-gold-400'
                      : 'bg-white border-light-line text-navy-900 hover:border-navy-600 hover:shadow-[0_30px_60px_-30px_rgba(6,19,37,0.25)]'
                  } hover:-translate-y-1`}
                >
                  <div className="flex justify-between items-start">
                    <div
                      className={`w-14 h-14 flex items-center justify-center rounded-sm ${
                        service.accent
                          ? 'bg-navy-950 text-gold-500'
                          : 'bg-navy-950 text-gold-500'
                      }`}
                    >
                      <Icon size={22} />
                    </div>
                    <ArrowUpRight
                      size={28}
                      className={`transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                        service.accent ? 'text-navy-950' : 'text-navy-700'
                      }`}
                    />
                  </div>

                  <p className={`mt-8 eyebrow ${service.accent ? '!text-navy-950/70' : ''}`}>
                    {service.eyebrow}
                  </p>
                  <h3 className="mt-3 text-fluid-3xl font-extrabold tracking-tighter leading-tight">
                    {service.title}
                  </h3>
                  <p
                    className={`mt-4 text-fluid-lg leading-relaxed ${
                      service.accent ? 'text-navy-950/80' : 'text-navy-900/75'
                    }`}
                  >
                    {service.description}
                  </p>

                  <ul className="mt-8 space-y-3">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className={`flex items-center gap-3 text-sm font-medium ${
                          service.accent ? 'text-navy-950' : 'text-navy-900'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            service.accent ? 'bg-navy-950' : 'bg-gold-500'
                          }`}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`mt-10 inline-flex items-center gap-2 font-semibold border-b pb-1 transition-all ${
                      service.accent
                        ? 'border-navy-950 group-hover:gap-3'
                        : 'border-navy-900 group-hover:gap-3'
                    }`}
                  >
                    {service.cta.label}
                  </div>
                </Link>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
