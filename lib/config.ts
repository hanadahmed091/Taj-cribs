export const SITE = {
  name: 'Primeco Property',
  shortName: 'Primeco',
  domain: 'https://www.primeco.co.uk',
  phone: '+44 20 7946 0000',
  phoneDisplay: '+44 (0)20 7946 0000',
  email: 'hello@primeco.co.uk',
  address: {
    line1: '48 Marylebone High Street',
    locality: 'London',
    postcode: 'W1U 5HR',
    country: 'United Kingdom',
  },
  social: {
    instagram: 'https://instagram.com/primeco',
    linkedin: 'https://linkedin.com/company/primeco',
  },
  // Single source of truth for the headline "X+ properties" figure.
  // Update here and it propagates everywhere.
  managedPortfolioCount: 30,
  ratingValue: 4.9,
  reviewCount: 47,
  responsePromiseHours: 2,
} as const

export const NAV_LINKS = [
  { label: 'Guaranteed Rent', href: '/guaranteed-rent' },
  { label: 'Property Management', href: '/property-management' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Areas', href: '/areas' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const
