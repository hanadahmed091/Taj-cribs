'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { Fragment, useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { PROPERTIES } from '@/lib/data/properties'
import { SITE } from '@/lib/config'
import { Stars } from '@/components/ui/Stars'
import { cn, pushDataLayer } from '@/lib/utils'

const headlineWords = ['WE', 'MANAGE.', 'YOU', 'PROFIT.']

export function Hero() {
  const reduce = useReducedMotion()
  // Rotate through a small, curated set of portfolio properties.
  const featuredList = PROPERTIES.slice(0, 4)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  // Gentle auto-rotation with a crossfade. Pauses on hover and focus,
  // and is disabled entirely when the user prefers reduced motion
  // (in which case we just show the first property).
  useEffect(() => {
    if (reduce || paused || featuredList.length <= 1) return
    const id = setInterval(() => {
      setActive((i) => (i + 1) % featuredList.length)
    }, 5500)
    return () => clearInterval(id)
  }, [reduce, paused, featuredList.length])

  return (
    <section className="relative overflow-hidden hero-bg text-white pt-[120px] pb-20 lg:pt-[160px] lg:pb-32">
      <div className="absolute inset-0 hero-grid opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-950/60 pointer-events-none" />

      <div className="container-edge relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="gold-divider" />
              <span className="eyebrow">Central London Property Specialists</span>
            </motion.div>

            <h1 className="text-hero font-extrabold tracking-tightest leading-[0.95]">
              {headlineWords.map((word, i) => {
                const isGold = i === 1 || i === 3
                const lineBreak = i === 1
                const isLast = i === headlineWords.length - 1
                return (
                  <Fragment key={`${word}-${i}`}>
                    <motion.span
                      initial={{ opacity: 0, y: reduce ? 0 : 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.7,
                        delay: 0.15 + i * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="inline-block"
                    >
                      {isGold ? <span className="text-gold-500">{word}</span> : word}
                    </motion.span>
                    {lineBreak ? <br /> : !isLast && ' '}
                  </Fragment>
                )
              })}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-9 max-w-xl text-fluid-lg text-white/75 leading-relaxed"
            >
              Guaranteed rent paid monthly. Full short-let management.
              Quality-checked after every checkout. Zero hassle for London landlords.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/guaranteed-rent"
                onClick={() => pushDataLayer('cta_guaranteed_rent_hero', { location: 'home_hero' })}
                className="btn-gold"
              >
                Get Guaranteed Rent
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/property-management"
                onClick={() => pushDataLayer('cta_management_hero', { location: 'home_hero' })}
                className="btn-outline-light"
              >
                View Services
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-10 flex items-center gap-4 text-sm text-white/70"
            >
              <Stars />
              <span className="font-semibold text-white">
                {SITE.ratingValue.toFixed(1)}/5
              </span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">
                Trusted by Central London landlords.
              </span>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="relative w-full max-w-md mx-auto lg:ml-auto"
            >
              <div
                className="glass-card rounded-md p-5 lg:p-6 animate-float"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onFocusCapture={() => setPaused(true)}
                onBlurCapture={() => setPaused(false)}
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow !text-gold-400">Featured Property</span>
                  {!reduce && featuredList.length > 1 && (
                    <div className="flex gap-1.5" aria-hidden="true">
                      {featuredList.map((p, i) => (
                        <span
                          key={p.id}
                          className={cn(
                            'h-1.5 w-1.5 rounded-full transition-colors duration-500',
                            i === active ? 'bg-gold-400' : 'bg-white/25',
                          )}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Slides share one grid cell, so the card sizes to the
                    tallest property and the crossfade causes no layout
                    shift. Inactive slides fade to transparent. */}
                <div className="mt-4 grid">
                  {featuredList.map((p, i) => {
                    const isActive = i === active
                    return (
                      <div
                        key={p.id}
                        aria-hidden={!isActive}
                        className={cn(
                          'col-start-1 row-start-1 transition-opacity duration-700 ease-smooth',
                          isActive ? 'opacity-100' : 'opacity-0 pointer-events-none',
                        )}
                      >
                        <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                          <Image
                            src={p.imageUrl}
                            alt={`${p.name}, ${p.area}`}
                            fill
                            sizes="(max-width: 1024px) 90vw, 480px"
                            className="object-cover"
                            priority={i === 0}
                          />
                          <div className="absolute top-3 left-3 bg-navy-950/85 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-widest font-semibold rounded-sm">
                            {p.badge ?? p.type}
                          </div>
                        </div>
                        <div className="mt-5">
                          <p className="font-bold text-lg leading-tight">{p.name}</p>
                          <p className="text-sm text-white/60 mt-1">{p.area}</p>
                          <p className="mt-4 text-gold-500 font-bold text-fluid-xl tabular-nums">
                            {p.monthlyIncome}
                          </p>
                          <p className="text-xs text-white/55 mt-1">{p.highlight}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container-edge relative mt-16 lg:mt-24">
        <div className="border-t border-navy-line pt-8 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {[
            { num: `${SITE.managedPortfolioCount}`, label: 'Properties managed' },
            { num: '7 days', label: 'Average onboarding' },
            { num: `${SITE.ratingValue}/5`, label: 'Landlord rating' },
            { num: '£1.4m', label: 'Annual rent paid' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`lg:px-8 ${i !== 0 ? 'lg:border-l lg:border-gold-500/30' : ''}`}
            >
              <p className="font-extrabold text-fluid-2xl text-gold-500 tabular-nums">
                {stat.num}
              </p>
              <p className="text-xs uppercase tracking-widest text-white/55 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
