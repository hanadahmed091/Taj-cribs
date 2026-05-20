'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { DoorOpen, ClipboardCheck, KeyRound, ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/ui/FadeIn'

const STEPS = [
  {
    icon: DoorOpen,
    title: 'Guest checks out',
    body: 'The previous booking ends. Cleaning team scheduled.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Officer inspects',
    body: 'A trained member of our team on-site. Every time. No exceptions.',
  },
  {
    icon: KeyRound,
    title: 'Next guest arrives',
    body: 'Hotel-standard handover. Five-star reviews protected.',
  },
]

export function PrimecoStandard({ variant = 'home' }: { variant?: 'home' | 'inline' }) {
  const reduce = useReducedMotion()

  return (
    <section
      className={
        variant === 'inline'
          ? 'bg-white section-pad'
          : 'bg-cream section-pad'
      }
    >
      <div className="container-edge">
        <div className="max-w-3xl">
          <FadeIn>
            <SectionLabel>The Primeco Standard</SectionLabel>
            <h2 className="mt-5 text-fluid-4xl font-extrabold tracking-tighter leading-tight">
              Every checkout. Every time. <span className="text-gold-600">No exceptions.</span>
            </h2>
            <p className="mt-7 text-fluid-lg text-navy-900/75 leading-relaxed">
              After every guest checks out, one of our dedicated Quality Officers personally
              inspects the property before the next arrival. Not a checklist sent to a
              cleaner — a trained member of our team, on-site, every single time. It&apos;s
              how we protect your property, maintain 5-star reviews, and ensure every
              guest arrives to a hotel-standard home.
            </p>
          </FadeIn>
        </div>

        {/* 3-STEP VISUAL */}
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-4 relative items-stretch">
            {STEPS.map((step, idx) => {
              const Icon = step.icon
              const isLast = idx === STEPS.length - 1
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: reduce ? 0 : 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-col items-start"
                >
                  {/* Step number */}
                  <span className="font-extrabold text-[11px] uppercase tracking-widest text-gold-600">
                    Step 0{idx + 1}
                  </span>

                  {/* Icon */}
                  <div className="mt-4 w-16 h-16 rounded-md bg-navy-950 text-gold-500 flex items-center justify-center">
                    <Icon size={26} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 font-bold text-fluid-xl tracking-tight leading-snug">
                    {step.title}
                  </h3>

                  {/* Body */}
                  <p className="mt-2 text-sm text-navy-900/65 leading-relaxed max-w-xs">
                    {step.body}
                  </p>

                  {/* Gold connecting arrow — to the right of this step on desktop;
                      hidden on the last step and on mobile (where flow is vertical) */}
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="hidden md:flex absolute top-[68px] -right-2 lg:-right-4 items-center text-gold-500"
                    >
                      <span className="h-px w-8 lg:w-12 bg-gold-500/70" />
                      <ArrowRight size={18} className="ml-0.5" />
                    </span>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
