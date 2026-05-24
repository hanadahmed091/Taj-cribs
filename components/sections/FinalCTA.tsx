'use client'

import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { SITE } from '@/lib/config'
import { FadeIn } from '@/components/ui/FadeIn'
import { pushDataLayer } from '@/lib/utils'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

export function FinalCTA() {
  return (
    <section className="bg-navy-950 text-white section-pad relative overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-50 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/3 -right-1/4 w-[60vw] h-[60vw] rounded-full bg-gold-500/[0.04] blur-3xl" />
      </div>
      <div className="container-edge relative">
        <div className="max-w-4xl">
          <FadeIn>
            <span className="eyebrow">Ready to switch?</span>
            <h2 className="mt-5 text-fluid-4xl lg:text-hero font-extrabold tracking-tightest leading-[0.95]">
              Free valuation. <br />
              <span className="text-gold-500">24-hour turnaround.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-8 max-w-xl text-fluid-lg text-white/70 leading-relaxed">
              Tell us about your property. We&apos;ll come back with a guaranteed monthly
              figure and a projected short-let income, within one business day.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/contact"
                onClick={() => pushDataLayer('cta_valuation_request', { location: 'home_final' })}
                className="btn-gold"
              >
                Get Free Valuation
                <ArrowRight size={18} />
              </Link>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                onClick={() => pushDataLayer('phone_click', { location: 'home_final' })}
                className="btn-outline-light"
              >
                <Phone size={16} />
                {SITE.phoneDisplay}
              </a>
              <WhatsAppButton variant="link" location="home_final" className="text-white/85 hover:text-white" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
