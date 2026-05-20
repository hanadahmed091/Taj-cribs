'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import type { FAQ as FAQType } from '@/lib/data/faqs'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/ui/FadeIn'
import { cn } from '@/lib/utils'

export function FAQ({ items, label = 'Common Questions', heading }: { items: FAQType[]; label?: string; heading: string }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-white section-pad">
      <div className="container-edge max-w-4xl">
        <FadeIn>
          <SectionLabel>{label}</SectionLabel>
          <h2 className="mt-5 text-fluid-4xl font-extrabold tracking-tighter leading-tight">
            {heading}
          </h2>
        </FadeIn>

        <div className="mt-12 border-t border-light-line">
          {items.map((item, idx) => {
            const isOpen = open === idx
            return (
              <div key={item.q} className="border-b border-light-line">
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-fluid-xl tracking-tight leading-snug group-hover:text-gold-600 transition-colors">
                    {item.q}
                  </span>
                  <Plus
                    size={22}
                    className={cn(
                      'shrink-0 mt-1 transition-transform duration-500',
                      isOpen && 'rotate-45 text-gold-600',
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-10 text-navy-900/75 leading-relaxed text-fluid-lg">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
