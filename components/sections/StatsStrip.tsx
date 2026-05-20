import { SITE } from '@/lib/config'
import { FadeIn } from '@/components/ui/FadeIn'

const STATS = [
  { num: `${SITE.managedPortfolioCount}`, label: 'Properties under management' },
  { num: '£2.4m', label: 'Annual rent paid to landlords' },
  { num: '87%', label: 'Average occupancy rate' },
  { num: '48h', label: 'From sign-off to first booking' },
]

export function StatsStrip() {
  return (
    <section className="bg-navy-900 text-white py-20">
      <div className="container-edge">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {STATS.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.06}>
              <div className="flex flex-col items-start gap-2">
                <span className="font-extrabold text-fluid-3xl text-gold-500 tabular-nums tracking-tighter">
                  {s.num}
                </span>
                <span className="text-xs uppercase tracking-widest text-white/55 font-semibold">
                  {s.label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
