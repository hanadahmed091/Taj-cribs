import type { Metadata } from 'next'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { FaqJsonLd } from '@/components/seo/FaqJsonLd'
import { HOMEPAGE_FAQS } from '@/lib/data/faqs'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Answers for London landlords on guaranteed rent and short-let management: fees, payments, the 90-day rule, contract terms, blocks and portfolios, onboarding and coverage.',
  alternates: { canonical: '/faqs' },
}

export default function FaqsPage() {
  return (
    <>
      <FaqJsonLd faqs={HOMEPAGE_FAQS} />

      {/* HERO */}
      <section className="relative hero-bg text-white pt-[120px] pb-16 lg:pt-[160px] lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-60 pointer-events-none" />
        <div className="container-edge relative max-w-3xl">
          <SectionLabel className="!justify-start">Common Questions</SectionLabel>
          <h1 className="mt-6 text-hero font-extrabold tracking-tightest leading-[0.95]">
            Questions landlords <br />
            <span className="text-gold-500">ask us.</span>
          </h1>
          <p className="mt-8 text-fluid-lg text-white/75 leading-relaxed">
            Straight answers on how we work, what we charge and how you get paid.
            If your question is not here, call us or send a message and we will
            answer it directly.
          </p>
        </div>
      </section>

      <FAQ
        items={HOMEPAGE_FAQS}
        label="Guaranteed Rent and Management"
        heading="Everything you need to know"
      />

      <FinalCTA />
    </>
  )
}
