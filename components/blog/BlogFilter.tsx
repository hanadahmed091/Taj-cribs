'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { BlogCard } from './BlogCard'
import type { BlogCategory, BlogPost } from '@/lib/data/blog'
import { cn } from '@/lib/utils'

type Filter = 'All' | BlogCategory

export function BlogFilter({
  posts,
  categories,
}: {
  posts: BlogPost[]
  categories: BlogCategory[]
}) {
  const [active, setActive] = useState<Filter>('All')

  const filtered = useMemo(
    () => (active === 'All' ? posts : posts.filter((p) => p.category === active)),
    [active, posts],
  )

  const filters: Filter[] = ['All', ...categories]

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-12">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={cn(
              'px-5 py-2.5 rounded-sm text-sm font-semibold transition-all duration-300 border',
              active === f
                ? 'bg-navy-900 text-white border-navy-900'
                : 'bg-white text-navy-900 border-light-line hover:border-navy-900',
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div
        key={active}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {filtered.map((post, i) => (
          <BlogCard key={post.slug} post={post} priority={i < 3} />
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-navy-900/55 mt-12">
          No posts in this category yet. Check back soon.
        </p>
      )}
    </div>
  )
}
