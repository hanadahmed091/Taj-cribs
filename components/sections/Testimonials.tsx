'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/data/testimonials'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Stars } from '@/components/ui/Stars'
import { FadeIn } from '@/components/ui/FadeIn'

export function Testimonials() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-cream section-pad">
      <div className="container-edge">
        <div className="max-w-3xl">
          <FadeIn>
            <SectionLabel onLight>Client Results</SectionLabel>
            <h2 className="mt-5 text-fluid-4xl font-extrabold tracking-tighter leading-tight">
              Landlords who switched. <span className="text-gold-600">And never looked back.</span>
            </h2>
            <p className="mt-6 text-fluid-lg text-navy-900/70 leading-relaxed">
              Real properties. Real numbers. Real owners we still manage for today.
            </p>
          </FadeIn>
        </div>

        <div className="mt-20 flex flex-col gap-16 lg:gap-24">
          {TESTIMONIALS.map((t, idx) => {
            const photoLeft = idx % 2 === 0
            return (
              <motion.article
                key={t.id}
                initial={{ opacity: 0, y: reduce ? 0 : 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center`}
              >
                {/* PHOTO COLUMN — 55% */}
                <div
                  className={`lg:col-span-7 ${
                    photoLeft ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative aspect-[4/3] rounded-md overflow-hidden">
                    <Image
                      src={t.propertyImage}
                      alt={`${t.propertyLabel}, managed by Taj Cribs`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 720px"
                      className="object-cover"
                    />
                    <span className="absolute bottom-4 left-4 bg-navy-900 text-white px-3 py-1.5 text-[10px] uppercase tracking-widest font-bold rounded-sm">
                      {t.service}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-muted">{t.propertyLabel}</p>
                </div>

                {/* CONTENT COLUMN — 45% */}
                <div
                  className={`lg:col-span-5 ${
                    photoLeft ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="bg-white rounded-md p-8 lg:p-10 shadow-[0_30px_60px_-30px_rgba(6,19,37,0.18)]">
                    <span
                      className="font-extrabold text-gold-500 leading-none block"
                      style={{ fontSize: 80 }}
                      aria-hidden="true"
                    >
                      “
                    </span>
                    <blockquote className="mt-2 text-fluid-lg text-navy-900 leading-[1.8]">
                      {t.quote}
                    </blockquote>
                    <span className="gold-divider mt-8" />
                    <div className="mt-5 flex items-center justify-between gap-4 flex-wrap">
                      <div>
                        <p className="font-bold text-navy-900">{t.name}</p>
                        <p className="text-sm text-muted mt-0.5">
                          {t.role} · {t.area}
                        </p>
                      </div>
                      <Stars count={t.stars} />
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
