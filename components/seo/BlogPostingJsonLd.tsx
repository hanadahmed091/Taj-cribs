import { SITE } from '@/lib/config'
import type { BlogPost } from '@/lib/data/blog'

// Turns an ISO date (YYYY-MM-DD) into a full ISO datetime at 09:00 London
// time, with the correct offset for that date: +01:00 during BST, +00:00
// in winter. E.g. '2026-09-21' becomes '2026-09-21T09:00:00+01:00'.
function toLondonDateTime(date: string): string {
  const offset = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/London',
    timeZoneName: 'shortOffset',
  })
    .formatToParts(new Date(`${date}T09:00:00Z`))
    .find((p) => p.type === 'timeZoneName')?.value
  const hours = offset === 'GMT+1' ? '+01:00' : '+00:00'
  return `${date}T09:00:00${hours}`
}

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
        url: SITE.domain,
        worksFor: { '@type': 'Organization', name: SITE.shortName },
      }
    : { '@type': 'Organization', name: post.author, url: SITE.domain }
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline: post.title,
    description: post.metaDescription,
    image: [image],
    datePublished: toLondonDateTime(post.date),
    dateModified: toLondonDateTime(post.updated ?? post.date),
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
