export const SITE = {
  name: 'Taj Cribs Property',
  shortName: 'Taj Cribs',
  domain: 'https://www.tajcribs.co.uk',
  // Real business phone number. The tel: href uses SITE.phone with
  // whitespace stripped (`SITE.phone.replace(/\s/g, '')`); phoneDisplay is
  // what users see. Keep these in lockstep with each other and with the
  // E.164 form embedded in SITE.whatsapp below.
  phone: '+44 7457 417844',
  phoneDisplay: '+44 7457 417844',
  // wa.me URL — number with +, spaces and all symbols removed.
  // Single source of truth for every WhatsApp link on the site.
  whatsapp: 'https://wa.me/447457417844',
  email: 'Nimra@tajcribs.co.uk',
  // Placeholder values. The real office address is not yet on the site.
  // While line1 is 'ADDRESS_HERE' (see HAS_REAL_ADDRESS below), the footer
  // and contact page hide the address and structured data omits it. Drop
  // the real address into line1 (and fill locality/postcode/country) and
  // it appears in all three automatically.
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
  managedPortfolioCount: 25,
  // Guest rating shown on the site is sourced from Airbnb (currently 4.8).
  // It is intentionally NOT emitted as schema.org AggregateRating, because
  // Airbnb is a third-party platform and Google rich-result rules expect
  // self-collected reviews. Reference as plain descriptive text only.
  airbnbRatingDisplay: '4.8 on Airbnb',
} as const

// True once a real address replaces the 'ADDRESS_HERE' placeholder. The
// footer, contact page and LocalBusiness schema all check this.
export const HAS_REAL_ADDRESS = SITE.address.line1 !== 'ADDRESS_HERE'

export const NAV_LINKS = [
  { label: 'Guaranteed Rent', href: '/guaranteed-rent' },
  { label: 'Property Management', href: '/property-management' },
  { label: 'Serviced Accommodation', href: '/serviced-accommodation' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Areas', href: '/areas' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const
