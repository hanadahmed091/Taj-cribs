import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'

export default function NotFound() {
  return (
    <section className="hero-bg text-white min-h-[80vh] flex items-center pt-[120px] pb-20 relative overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-60 pointer-events-none" />
      <div className="container-edge relative max-w-3xl">
        <SectionLabel className="!justify-start">Page not found</SectionLabel>
        <h1 className="mt-6 text-hero font-extrabold tracking-tightest leading-[0.95]">
          404. <br />
          <span className="text-gold-500">Out of stock.</span>
        </h1>
        <p className="mt-8 text-fluid-lg text-white/75 leading-relaxed max-w-xl">
          The page you&apos;re looking for isn&apos;t here. Let&apos;s get you back
          on the right side of Marylebone.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/" className="btn-gold">
            Back to home <ArrowRight size={18} />
          </Link>
          <Link href="/contact" className="btn-outline-light">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}
