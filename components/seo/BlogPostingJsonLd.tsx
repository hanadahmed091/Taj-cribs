import { SITE } from '@/lib/config'
import type { BlogPost } from '@/lib/data/blog'

export function BlogPostingJsonLd({ post }: { post: BlogPost }) {
  const url = `${SITE.domain}/blog/${post.slug}`
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline: post.title,
    description: post.metaDescription,
    image: [post.heroImage],
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
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
