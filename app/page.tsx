import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/sections/Marquee'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { StatsStrip } from '@/components/sections/StatsStrip'
import { PrimecoStandard } from '@/components/sections/PrimecoStandard'
import { Portfolio } from '@/components/sections/Portfolio'
import { Testimonials } from '@/components/sections/Testimonials'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { AreasSection } from '@/components/sections/AreasSection'
import { BlogPreview } from '@/components/sections/BlogPreview'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ServicesOverview />
      <HowItWorks />
      <StatsStrip />
      <PrimecoStandard />
      <Portfolio />
      <Testimonials />
      <WhyChooseUs />
      <AreasSection />
      <BlogPreview />
      <FinalCTA />
    </>
  )
}
