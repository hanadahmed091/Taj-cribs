export const SITE = {
  name: 'Taj Cribs Property',
  shortName: 'Taj Cribs',
  domain: 'https://www.tajcribs.co.uk',
  phone: '+44 20 7946 0000',
  phoneDisplay: '+44 (0)20 7946 0000',
  email: 'support@tajcribs.co.uk',
  address: {
    line1: '48 Marylebone High Street',
    locality: 'London',
    postcode: 'W1U 5HR',
    country: 'United Kingdom',
  },
  social: {
    instagram: 'https://instagram.com/tajcribs',
    linkedin: 'https://linkedin.com/company/tajcribs',
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
