import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import type { BlogPost } from '@/lib/data/blog'

export function BlogCard({ post, priority = false }: { post: BlogPost; priority?: boolean }) {
  const date = new Date(post.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <div className="relative aspect-[4/3] overflow-hidden rounded-md">
        <Image
          src={post.heroImage}
          alt={post.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 bg-gold-500 text-navy-950 px-3 py-1 rounded-sm text-[10px] uppercase tracking-widest font-bold">
          {post.category}
        </span>
      </div>
      <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-widest">
        <span className="text-navy-900/55">{date}</span>
        <span className="w-1 h-1 rounded-full bg-navy-900/30" />
        <span className="text-navy-900/55">{post.readTime}</span>
      </div>
      <h3 className="mt-4 font-bold text-fluid-xl tracking-tight leading-snug group-hover:text-gold-600 transition-colors">
        {post.title}
      </h3>
      <p className="mt-3 text-sm text-navy-900/65 leading-relaxed line-clamp-2">
        {post.excerpt}
      </p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold border-b border-navy-900 pb-1 group-hover:gap-3 transition-all">
        Read article
        <ArrowUpRight size={14} />
      </span>
    </Link>
  )
}
