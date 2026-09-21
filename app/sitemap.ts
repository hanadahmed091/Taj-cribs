import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/config'
import { getAllAreaSlugs } from '@/lib/data/areas'
import { BLOG_POSTS, VISIBLE_BLOG_POSTS } from '@/lib/data/blog'
import { getAllCaseStudySlugs } from '@/lib/data/case-studies'

// lastmod policy: only emit a date we actually know. Blog posts use the
// same dateModified as their BlogPosting schema, and /blog uses the newest
// post on the index. Other pages don't store a modified date, so they omit
// lastmod rather than claim the build time. Add a real date to a page's
// data before giving it a lastmod here.
const postModified = (p: { date: string; updated?: string }) => p.updated ?? p.date

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.domain
  const blogIndexModified = VISIBLE_BLOG_POSTS.map(postModified).sort().at(-1)

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${base}/guaranteed-rent`, priority: 0.95, changeFrequency: 'weekly' },
    { url: `${base}/property-management`, priority: 0.95, changeFrequency: 'weekly' },
    { url: `${base}/serviced-accommodation`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/pricing`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/areas`, priority: 0.85, changeFrequency: 'monthly' },
    { url: `${base}/blog`, lastModified: blogIndexModified, priority: 0.85, changeFrequency: 'weekly' },
    { url: `${base}/faqs`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/case-studies`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/contact`, priority: 0.7, changeFrequency: 'monthly' },
  ]

  const areaRoutes: MetadataRoute.Sitemap = getAllAreaSlugs().map((slug) => ({
    url: `${base}/areas/${slug}`,
    priority: 0.8,
    changeFrequency: 'monthly',
  }))

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: postModified(post),
    priority: 0.75,
    changeFrequency: 'monthly',
  }))

  const caseStudyRoutes: MetadataRoute.Sitemap = getAllCaseStudySlugs().map((slug) => ({
    url: `${base}/case-studies/${slug}`,
    priority: 0.75,
    changeFrequency: 'monthly',
  }))

  return [...staticRoutes, ...areaRoutes, ...blogRoutes, ...caseStudyRoutes]
}
