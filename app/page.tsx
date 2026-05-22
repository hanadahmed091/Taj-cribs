import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/sections/Marquee'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { StatsStrip } from '@/components/sections/StatsStrip'
import { TajCribsStandard } from '@/components/sections/TajCribsStandard'
import { Portfolio } from '@/components/sections/Portfolio'
import { Testimonials } from '@/components/sections/Testimonials'
import { CaseStudyFeature } from '@/components/sections/CaseStudyFeature'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { AreasSection } from '@/components/sections/AreasSection'
import { BlogPreview } from '@/components/sections/BlogPreview'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { FaqJsonLd } from '@/components/seo/FaqJsonLd'
import { HOMEPAGE_FAQS } from '@/lib/data/faqs'

export default function HomePage() {
  return (
    <>
      <FaqJsonLd faqs={HOMEPAGE_FAQS} />
      <Hero />
      <Marquee />
      <ServicesOverview />
      <HowItWorks />
      <StatsStrip />
      <TajCribsStandard />
      <Portfolio />
      <Testimonials />
      <CaseStudyFeature />
      <WhyChooseUs />
      <AreasSection />
      <BlogPreview />
      <FAQ
        items={HOMEPAGE_FAQS}
        label="Common Questions"
        heading="Questions landlords ask us"
      />
      <FinalCTA />
    </>
  )
}
