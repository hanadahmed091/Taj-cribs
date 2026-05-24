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
    // Both phone and WhatsApp registered as customer-service contact
    // points so Google knows there are two channels for the same
    // business. Keep the legacy top-level `telephone` field above too
    // for older crawlers that don't read contactPoint.
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: SITE.phone,
        contactType: 'customer service',
        availableLanguage: ['English'],
      },
      {
        '@type': 'ContactPoint',
        url: SITE.whatsapp,
        contactType: 'customer service',
        name: 'WhatsApp',
        availableLanguage: ['English'],
      },
    ],
    // NOTE: AggregateRating intentionally omitted. Our guest rating is
    // sourced from Airbnb (a third party), and Google rich-result rules
    // expect aggregateRating to come from self-collected reviews on the
    // same domain. Surfacing Airbnb-sourced ratings in schema risks a
    // manual penalty. Mention the rating as plain descriptive text only.
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
