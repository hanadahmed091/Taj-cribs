import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/ui/FadeIn'
import { BlogCard } from '@/components/blog/BlogCard'
import { VISIBLE_BLOG_POSTS } from '@/lib/data/blog'

export function BlogPreview() {
  const posts = VISIBLE_BLOG_POSTS.slice(0, 3)

  return (
    <section className="bg-white section-pad">
      <div className="container-edge">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <FadeIn className="lg:col-span-7">
            <SectionLabel onLight>Insights</SectionLabel>
            <h2 className="mt-5 text-fluid-4xl font-extrabold tracking-tighter leading-tight">
              Field notes from <span className="text-gold-600">Central London.</span>
            </h2>
          </FadeIn>
          <FadeIn className="lg:col-span-5" delay={0.1}>
            <p className="text-fluid-lg text-navy-900/70 leading-relaxed">
              Regulations, tax, market data, and real lessons from the
              properties we operate. No fluff.
            </p>
          </FadeIn>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post, idx) => (
            <FadeIn key={post.slug} delay={idx * 0.08}>
              <BlogCard post={post} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-14 flex justify-center">
            <Link href="/blog" className="btn-outline-gold !text-navy-950 !border-navy-950 hover:!bg-navy-950 hover:!text-white">
              View all articles
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
