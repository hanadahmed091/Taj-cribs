import { SITE } from '@/lib/config'

export function OrganizationJsonLd() {
  // Only emit the postal address when a real one is configured. While
  // SITE.address.line1 is set to the 'ADDRESS_HERE' placeholder, the
  // address block is omitted from structured data so we don't tell
  // Google our address is "ADDRESS_HERE".
  const hasRealAddress = SITE.address.line1 !== 'ADDRESS_HERE'

  const data: Record<string, unknown> = {
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE.ratingValue,
      reviewCount: SITE.reviewCount,
    },
  }

  if (hasRealAddress) {
    data.address = {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.line1,
      addressLocality: SITE.address.locality,
      postalCode: SITE.address.postcode,
      addressCountry: 'GB',
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
