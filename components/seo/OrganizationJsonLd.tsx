import { SITE } from '@/lib/config'

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE.domain}#organization`,
    name: SITE.name,
    description:
      'Short-term rental management and guaranteed rent specialists in Central London.',
    url: SITE.domain,
    telephone: SITE.phone,
    email: SITE.email,
    areaServed: [
      'Marylebone',
      'Kensington',
      'Pimlico',
      'Mayfair',
      'Chelsea',
      'Westminster',
      'Notting Hill',
      'Canary Wharf',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.line1,
      addressLocality: SITE.address.locality,
      postalCode: SITE.address.postcode,
      addressCountry: 'GB',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE.ratingValue,
      reviewCount: SITE.reviewCount,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
