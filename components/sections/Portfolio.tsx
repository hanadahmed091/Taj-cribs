'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import {
  PROPERTIES,
  SERVICE_LABELS_SHORT,
} from '@/lib/data/properties'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/ui/FadeIn'
import { PortfolioCardImages } from '@/components/sections/PortfolioCardImages'
import { pushDataLayer } from '@/lib/utils'

export function Portfolio() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-navy-900 text-white section-pad">
      <div className="container-edge">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <FadeIn className="lg:col-span-7">
            <SectionLabel>Our Portfolio</SectionLabel>
            <h2 className="mt-5 text-fluid-4xl font-extrabold tracking-tighter leading-tight">
              Properties we manage across <span className="text-gold-500">Central London.</span>
            </h2>
          </FadeIn>
          <FadeIn className="lg:col-span-5" delay={0.1}>
            <p className="text-white/65 text-fluid-lg leading-relaxed">
              From full residential blocks under guaranteed rent to ultra-premium
              short-let apartments. A snapshot of what we operate today.
            </p>
          </FadeIn>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROPERTIES.map((property, idx) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: reduce ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/areas/${property.areaSlug}`}
                onClick={() =>
                  pushDataLayer('portfolio_card_click', {
                    property: property.name,
                    area: property.area,
                  })
                }
                className="group relative block overflow-hidden rounded-md border border-navy-line aspect-[3/2.1]"
              >
                <PortfolioCardImages
                  images={[property.imageUrl, ...(property.gallery ?? [])]}
                  alt={`${property.name}, ${property.area}`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent pointer-events-none" />

                <span className="absolute top-4 left-4 bg-gold-500 text-navy-950 px-3 py-1 rounded-sm text-[10px] uppercase tracking-widest font-bold">
                  {property.area.split(',')[0]} {property.area.split(',')[1]?.trim()}
                </span>
                <span className="absolute top-4 right-4 bg-navy-950/85 backdrop-blur text-white px-3 py-1 rounded-sm text-[10px] uppercase tracking-widest font-bold">
                  {SERVICE_LABELS_SHORT[property.service]}
                </span>
                {/* "Recently onboarded" status pill — stacks under the
                    gold area tag at top-left, same shape/typography as
                    the other two badges. White pill + navy text inverts
                    the area-tag colour relationship; gold dot prefix
                    reads as a status indicator rather than a third
                    category. Conditional on the optional
                    `recentlyOnboarded` flag from PROPERTIES. */}
                {property.recentlyOnboarded && (
                  <span className="absolute top-14 left-4 bg-white/95 backdrop-blur text-navy-950 px-3 py-1 rounded-sm text-[10px] uppercase tracking-widest font-bold inline-flex items-center gap-1.5">
                    <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                    Recently onboarded
                  </span>
                )}

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-fluid-xl leading-tight tracking-tight">
                        {property.name}
                      </h3>
                      <p className="mt-2 text-gold-500 font-semibold tabular-nums">
                        {property.monthlyIncome}
                      </p>
                      <p className="mt-1 text-xs text-white/60 leading-relaxed">
                        {property.highlight}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="shrink-0 text-white/70 transition-all group-hover:text-gold-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-10 border-t border-navy-line">
            <p className="text-white/70 text-fluid-lg max-w-2xl">
              Managing properties across Marylebone, Kensington, Pimlico, Mayfair,
              Chelsea and beyond.
            </p>
            <Link
              href="/contact"
              onClick={() => pushDataLayer('cta_valuation_request', { location: 'portfolio_section' })}
              className="btn-outline-gold"
            >
              Discuss Your Property
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
