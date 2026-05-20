import { CalendarCheck, Sparkles, ShieldCheck, BarChart3, Building2, Users } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/ui/FadeIn'

const REASONS = [
  {
    icon: CalendarCheck,
    title: 'Same-day monthly payments',
    body: 'Guaranteed rent paid on the same date every month. No chasing, no surprises, no excuses.',
  },
  {
    icon: ShieldCheck,
    title: 'Full operational risk on us',
    body: 'We carry the void risk, the bad-debt risk, the operational risk. You collect the cheque.',
  },
  {
    icon: Sparkles,
    title: 'In-house housekeeping team',
    body: 'No outsourced cleaners. Our team does the turnaround — same standard, every time.',
  },
  {
    icon: BarChart3,
    title: 'Live owner dashboard',
    body: 'Bookings, revenue, occupancy, payouts — visible to you in real time.',
  },
  {
    icon: Building2,
    title: 'Block & portfolio specialists',
    body: 'We are one of the only operators in London structured to take on full buildings.',
  },
  {
    icon: Users,
    title: 'Local team, local knowledge',
    body: 'Office in Marylebone. Operators across W1, W8, SW1 and SW3 daily.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-white section-pad">
      <div className="container-edge">
        <div className="max-w-3xl">
          <FadeIn>
            <SectionLabel>Why Primeco</SectionLabel>
            <h2 className="mt-5 text-fluid-4xl font-extrabold tracking-tighter leading-tight">
              The operator London landlords actually <span className="text-gold-600">trust.</span>
            </h2>
          </FadeIn>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-light-line border border-light-line">
          {REASONS.map((reason, idx) => {
            const Icon = reason.icon
            return (
              <FadeIn key={reason.title} delay={idx * 0.05}>
                <div className="bg-white p-8 lg:p-10 h-full">
                  <div className="w-12 h-12 bg-navy-950 text-gold-500 flex items-center justify-center rounded-sm">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-6 font-bold text-fluid-xl tracking-tight">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm text-navy-900/70 leading-relaxed">
                    {reason.body}
                  </p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
