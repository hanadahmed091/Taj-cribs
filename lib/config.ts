export const SITE = {
  name: 'Taj Cribs Property',
  shortName: 'Taj Cribs',
  domain: 'https://www.tajcribs.co.uk',
  phone: '+44 20 7946 0000',
  phoneDisplay: 'PHONE_NUMBER_HERE',
  email: 'support@tajcribs.co.uk',
  // Placeholder values. The real office address is not yet on the site.
  // Footer, contact page, and structured data treat 'ADDRESS_HERE' as
  // a sentinel and render / emit it accordingly. Drop the real address
  // into line1 (and fill locality/postcode/country) to switch over.
  address: {
    line1: 'ADDRESS_HERE',
    locality: 'ADDRESS_HERE',
    postcode: 'ADDRESS_HERE',
    country: 'ADDRESS_HERE',
  },
  social: {
    instagram: 'https://instagram.com/tajcribs',
    linkedin: 'https://linkedin.com/company/tajcribs',
  },
  // Single source of truth for the headline "X+ properties" figure.
  // Update here and it propagates everywhere.
  managedPortfolioCount: 30,
  // Guest rating shown on the site is sourced from Airbnb (currently 4.8).
  // It is intentionally NOT emitted as schema.org AggregateRating, because
  // Airbnb is a third-party platform and Google rich-result rules expect
  // self-collected reviews. Reference as plain descriptive text only.
  airbnbRatingDisplay: '4.8 on Airbnb',
} as const

export const NAV_LINKS = [
  { label: 'Guaranteed Rent', href: '/guaranteed-rent' },
  { label: 'Property Management', href: '/property-management' },
  { label: 'Serviced Accommodation', href: '/serviced-accommodation' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Areas', href: '/areas' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const
