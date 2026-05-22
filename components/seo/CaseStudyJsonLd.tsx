import { SITE } from '@/lib/config'
import type { CaseStudy } from '@/lib/data/case-studies'

export function CaseStudyJsonLd({ caseStudy }: { caseStudy: CaseStudy }) {
  const url = `${SITE.domain}/case-studies/${caseStudy.slug}`
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline: caseStudy.title,
    description: caseStudy.metaDescription,
    image: [caseStudy.heroImage],
    datePublished: caseStudy.date,
    dateModified: caseStudy.date,
    author: { '@type': 'Organization', name: SITE.name },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: { '@type': 'ImageObject', url: `${SITE.domain}/og-image.jpg` },
    },
    about: `${caseStudy.service} case study, ${caseStudy.area}`,
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
