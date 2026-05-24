import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/config'
import { getAllAreaSlugs } from '@/lib/data/areas'
import { BLOG_POSTS } from '@/lib/data/blog'
import { getAllCaseStudySlugs } from '@/lib/data/case-studies'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.domain
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${base}/guaranteed-rent`, lastModified: now, priority: 0.95, changeFrequency: 'weekly' },
    { url: `${base}/property-management`, lastModified: now, priority: 0.95, changeFrequency: 'weekly' },
    { url: `${base}/serviced-accommodation`, lastModified: now, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/pricing`, lastModified: now, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/areas`, lastModified: now, priority: 0.85, changeFrequency: 'monthly' },
    { url: `${base}/blog`, lastModified: now, priority: 0.85, changeFrequency: 'weekly' },
    { url: `${base}/faqs`, lastModified: now, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${base}/case-studies`, lastModified: now, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/contact`, lastModified: now, priority: 0.7, changeFrequency: 'monthly' },
  ]

  const areaRoutes: MetadataRoute.Sitemap = getAllAreaSlugs().map((slug) => ({
    url: `${base}/areas/${slug}`,
    lastModified: now,
    priority: 0.8,
    changeFrequency: 'monthly',
  }))

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.75,
    changeFrequency: 'monthly',
  }))

  const caseStudyRoutes: MetadataRoute.Sitemap = getAllCaseStudySlugs().map((slug) => ({
    url: `${base}/case-studies/${slug}`,
    lastModified: now,
    priority: 0.75,
    changeFrequency: 'monthly',
  }))

  return [...staticRoutes, ...areaRoutes, ...blogRoutes, ...caseStudyRoutes]
}
