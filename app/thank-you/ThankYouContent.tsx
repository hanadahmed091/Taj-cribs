'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import { SITE } from '@/lib/config'
import { pushDataLayer } from '@/lib/utils'

export function ThankYouContent() {
  const reduce = useReducedMotion()
  const telHref = `tel:${SITE.phone.replace(/\s/g, '')}`

  useEffect(() => {
    pushDataLayer('form_submission_complete', { page: '/thank-you' })
  }, [])

  // SVG draw timings
  const circleDur = reduce ? 0 : 0.7
  const checkDur = reduce ? 0 : 0.45
  const checkDelay = reduce ? 0 : 0.55

  return (
    <div className="min-h-screen bg-navy-950 text-white flex flex-col">
      <header className="py-6">
        <div className="container-edge">
          <Link
            href="/"
            className="text-white font-extrabold tracking-tighter text-xl flex items-center gap-2"
          >
            <span className="text-gold-500">T</span>
            {SITE.shortName}
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 hero-bg pointer-events-none" />
        <div className="absolute inset-0 hero-grid opacity-50 pointer-events-none" />

        <div className="container-edge relative text-center max-w-2xl py-16">
          {/* Animated gold checkmark */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: reduce ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-28 h-28 lg:w-32 lg:h-32"
          >
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              aria-hidden="true"
            >
              <motion.circle
                cx="50"
                cy="50"
                r="46"
                stroke="#C9A96E"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: circleDur, ease: 'easeOut' }}
              />
              <motion.path
                d="M30 52 L45 67 L72 38"
                stroke="#C9A96E"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: checkDur, delay: checkDelay, ease: 'easeOut' }}
              />
            </svg>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: reduce ? 0 : 0.8 }}
            className="mt-10 text-fluid-4xl font-extrabold tracking-tightest leading-[1.05]"
          >
            Thank you. <br />
            <span className="text-gold-500">We will be in touch within 2 hours.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: reduce ? 0 : 0.95 }}
            className="mt-7 text-fluid-lg text-white/75 leading-relaxed max-w-xl mx-auto"
          >
            One of our Central London property specialists will call you shortly
            to discuss your property and give you a free valuation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: reduce ? 0 : 1.1 }}
            className="mt-10 flex flex-col items-center gap-4"
          >
            <a
              href={telHref}
              className="inline-flex items-center gap-3 text-gold-500 font-extrabold tracking-tighter text-fluid-2xl hover:text-gold-400 transition-colors"
            >
              <Phone size={22} />
              {SITE.phoneDisplay}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 text-white/70 text-sm hover:text-gold-400 transition-colors"
            >
              <Mail size={14} />
              {SITE.email}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: reduce ? 0 : 1.25 }}
            className="mt-12 pt-10 border-t border-white/10"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/85 hover:text-gold-400 transition-colors text-sm font-semibold border-b border-white/30 pb-1"
            >
              Return to {SITE.shortName}
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </main>

      <footer className="bg-navy-950 text-white/55 py-8 text-center text-xs px-4">
        {SITE.shortName} · Central London Property Specialists · {SITE.email}
      </footer>
    </div>
  )
}
