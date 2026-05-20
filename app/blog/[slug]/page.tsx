import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import {
  getAllBlogSlugs,
  getBlogPostBySlug,
  getRelatedPosts,
} from '@/lib/data/blog'
import { BlogPostingJsonLd } from '@/components/seo/BlogPostingJsonLd'
import { PostBody } from '@/components/blog/PostBody'
import { BlogCard } from '@/components/blog/BlogCard'
import { FadeIn } from '@/components/ui/FadeIn'
import { FinalCTA } from '@/components/sections/FinalCTA'

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.metaTitle,
      description: post.metaDescription,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.heroImage, width: 1600, height: 900 }],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) notFound()

  const related = getRelatedPosts(post.slug, 3)
  const date = new Date(post.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <>
      <BlogPostingJsonLd post={post} />

      <article className="pt-[120px] lg:pt-[140px] pb-20 bg-white">
        <div className="container-edge max-w-[760px]">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-navy-900/55"
          >
            <Link href="/" className="hover:text-gold-600 transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link href="/blog" className="hover:text-gold-600 transition-colors">
              Blog
            </Link>
            <ChevronRight size={12} />
            <span className="truncate max-w-[40ch] text-navy-900">{post.title}</span>
          </nav>

          {/* Category pill */}
          <span className="mt-8 inline-block bg-gold-500 text-navy-950 px-3 py-1 rounded-sm text-[10px] uppercase tracking-widest font-bold">
            {post.category}
          </span>

          {/* Headline */}
          <h1 className="mt-5 text-fluid-4xl font-extrabold tracking-tightest leading-[1.05] text-navy-900">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-navy-900/55 font-semibold">
            <span>{post.author}</span>
            <span className="w-1 h-1 rounded-full bg-navy-900/30" />
            <span>{date}</span>
            <span className="w-1 h-1 rounded-full bg-navy-900/30" />
            <span>{post.readTime}</span>
          </div>

          {/* Hero image */}
          <div className="mt-10 relative aspect-[16/9] rounded-md overflow-hidden">
            <Image
              src={post.heroImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 800px) 100vw, 760px"
              className="object-cover"
            />
          </div>

          {/* Excerpt as lede */}
          <p className="mt-10 text-fluid-lg leading-[1.7] text-navy-900/85 font-medium">
            {post.excerpt}
          </p>

          {/* Body */}
          <div className="mt-8">
            <PostBody blocks={post.body} />
          </div>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="bg-cream section-pad">
          <div className="container-edge">
            <FadeIn>
              <h2 className="text-fluid-3xl font-extrabold tracking-tighter leading-tight">
                More from <span className="text-gold-600">our team.</span>
              </h2>
            </FadeIn>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {related.map((p) => (
                <FadeIn key={p.slug}>
                  <BlogCard post={p} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
    </>
  )
}

// Ensure all posts are statically generated (we know the slugs at build time)
export const dynamicParams = false
