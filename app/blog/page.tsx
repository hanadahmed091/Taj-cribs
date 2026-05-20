import type { Metadata } from 'next'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/ui/FadeIn'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { BLOG_POSTS, getAllCategories } from '@/lib/data/blog'
import { BlogFilter } from '@/components/blog/BlogFilter'

export const metadata: Metadata = {
  title: 'Insights & Landlord Guides | Taj Cribs Property London',
  description:
    'Field notes, market analysis and regulatory guides for Central London landlords — written by the team that manages the properties.',
  alternates: { canonical: '/blog' },
}

export default function BlogIndexPage() {
  const categories = getAllCategories()

  return (
    <>
      <section className="relative hero-bg text-white pt-[120px] pb-16 lg:pt-[160px] lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-60 pointer-events-none" />
        <div className="container-edge relative max-w-3xl">
          <SectionLabel className="!justify-start">Insights</SectionLabel>
          <h1 className="mt-6 text-hero font-extrabold tracking-tightest leading-[0.95]">
            Field notes from <br />
            <span className="text-gold-500">Central London.</span>
          </h1>
          <p className="mt-8 text-fluid-lg text-white/75 leading-relaxed max-w-2xl">
            Regulations, tax, market data, and real lessons from the properties we
            operate. Written by the team. No fluff, no SEO bloat.
          </p>
        </div>
      </section>

      <section className="bg-cream section-pad !pt-16">
        <div className="container-edge">
          <FadeIn>
            <BlogFilter posts={BLOG_POSTS} categories={categories} />
          </FadeIn>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
