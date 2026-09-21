import { SITE } from '@/lib/config'
import type { BlogPost } from '@/lib/data/blog'

export function BlogPostingJsonLd({ post }: { post: BlogPost }) {
  const url = `${SITE.domain}/blog/${post.slug}`
  // Local images (e.g. /blog/foo.png) must be absolute in structured data.
  const image = post.heroImage.startsWith('/')
    ? `${SITE.domain}${post.heroImage}`
    : post.heroImage
  const author = post.authorRole
    ? {
        '@type': 'Person',
        name: post.author,
        jobTitle: post.authorRole,
        worksFor: { '@type': 'Organization', name: SITE.shortName },
      }
    : { '@type': 'Organization', name: post.author }
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline: post.title,
    description: post.metaDescription,
    image: [image],
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author,
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.domain,
      logo: { '@type': 'ImageObject', url: `${SITE.domain}/og-image.jpg` },
    },
    articleSection: post.category,
    keywords: post.keywords.join(', '),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
