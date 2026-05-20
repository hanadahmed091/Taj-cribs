'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/ui/FadeIn'

const TABS = [
  {
    key: 'guaranteed-rent',
    label: 'Guaranteed Rent',
    steps: [
      { n: '01', title: 'Free valuation', body: 'We assess your property and confirm a guaranteed monthly figure within 24 hours.' },
      { n: '02', title: 'Sign lease', body: 'Corporate lease signed for 1–5 years. Fixed term, fixed monthly payment.' },
      { n: '03', title: 'We onboard', body: 'Furnishing, photography, listing, compliance, insurance — all handled.' },
      { n: '04', title: 'You get paid', body: 'Same day of the month. Every month. Regardless of occupancy.' },
    ],
  },
  {
    key: 'short-let',
    label: 'Short-Let Management',
    steps: [
      { n: '01', title: 'Onboarding call', body: '30-minute consultation. We confirm strategy, pricing model and expected returns.' },
      { n: '02', title: 'Go live in less than a week', body: 'Professional photography, multi-platform listings, dynamic pricing engaged.' },
      { n: '03', title: 'We operate', body: 'Bookings, guest comms, housekeeping, maintenance — all in-house.' },
      { n: '04', title: 'Net payout monthly', body: 'Net rental income transferred on the 5th of every month, with full reporting.' },
    ],
  },
]

export function HowItWorks() {
  const [active, setActive] = useState(TABS[0].key)
  const activeTab = TABS.find((t) => t.key === active)!

  return (
    <section className="bg-white section-pad">
      <div className="container-edge">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <FadeIn className="lg:col-span-7">
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="mt-5 text-fluid-4xl font-extrabold tracking-tighter leading-tight">
              Four steps. From handover to income.
            </h2>
          </FadeIn>
          <FadeIn className="lg:col-span-5" delay={0.1}>
            <p className="text-navy-900/75 text-fluid-lg leading-relaxed">
              Choose your route below. Both are operated entirely by our team
              and deliver fully managed income within a fortnight.
            </p>
          </FadeIn>
        </div>

        <div className="mt-12 flex flex-wrap gap-2 border-b border-light-line">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`relative -mb-px px-6 py-4 text-sm font-semibold tracking-wide uppercase transition-colors ${
                active === t.key
                  ? 'text-navy-950'
                  : 'text-navy-900/45 hover:text-navy-900'
              }`}
              aria-pressed={active === t.key}
            >
              {t.label}
              {active === t.key && (
                <motion.div
                  layoutId="howitworks-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-500"
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-light-line border border-light-line"
          >
            {activeTab.steps.map((step) => (
              <div key={step.n} className="bg-white p-8 lg:p-10">
                <span className="font-extrabold text-fluid-3xl text-gold-500 tabular-nums">
                  {step.n}
                </span>
                <h3 className="mt-5 text-fluid-xl font-bold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-navy-900/70 leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
