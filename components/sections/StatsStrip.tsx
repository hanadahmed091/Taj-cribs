import { SITE } from '@/lib/config'
import { FadeIn } from '@/components/ui/FadeIn'

type Stat = {
  num: string
  label: string
  /** Optional comparison line shown beneath the main label */
  sublabel?: string
}

// NOTE: every figure here must be defensible. Do not reintroduce an
// "average occupancy" tile (or any other modelled %) without a verified
// source — those numbers were stripped because they weren't operator-
// confirmed. Add a real, owner-confirmed number or keep the slot
// qualitative.
const STATS: Stat[] = [
  { num: `${SITE.managedPortfolioCount}`, label: 'Properties under management' },
  { num: '£1.4m', label: 'Annual rent paid to landlords' },
  { num: 'Zone 1', label: 'Central London coverage', sublabel: 'Marylebone to Canary Wharf' },
  { num: '7 days', label: 'From sign-off to first booking' },
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
                {s.sublabel && (
                  <span className="text-[11px] tracking-wide text-white/45">
                    {s.sublabel}
                  </span>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
