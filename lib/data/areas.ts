import { PROPERTIES, type Property } from './properties'

// Static area metadata. The displayed list of areas, however, is derived
// from PROPERTIES at render time (see deriveAreas()).
export type AreaMeta = {
  slug: string
  name: string         // e.g. "Marylebone"
  postcode: string     // e.g. "W1"
  tagline: string
  avgNightlyRate: string
  avgMonthlyRate: string
  intro: string        // long-form copy used on /areas/[slug]
  demand: string
}

export const AREA_META: Record<string, AreaMeta> = {
  marylebone: {
    slug: 'marylebone',
    name: 'Marylebone',
    postcode: 'W1',
    tagline: 'Block & portfolio management',
    avgNightlyRate: '£260/night',
    avgMonthlyRate: '£3,200+/mo',
    intro:
      'Marylebone is one of the most consistent earners in Central London. Demand is driven by Harley Street medical visitors, corporate guests around Baker Street, and the Marylebone High Street tourist trade. We manage residential blocks and individual units across W1U and W1G, with our guaranteed rent scheme proving particularly popular for owners of multi-unit buildings.',
    demand: 'Year-round corporate + leisure demand. Mid-week occupancy averages 88%.',
  },
  'high-street-kensington': {
    slug: 'high-street-kensington',
    name: 'High Street Kensington',
    postcode: 'W8',
    tagline: 'Short-let specialists',
    avgNightlyRate: '£340/night',
    avgMonthlyRate: '£4,800+/mo',
    intro:
      'High Street Kensington consistently outperforms standard letting yields by 2-3x once optimised for short-let. We manage premium units across W8, working closely with Kensington Palace and Holland Park footfall. Our portfolio here is overwhelmingly short-let, with average occupancy of 94% across the year.',
    demand: 'Tourist & corporate. Peak nightly rates exceed £600 in summer.',
  },
  pimlico: {
    slug: 'pimlico',
    name: 'Pimlico',
    postcode: 'SW1',
    tagline: 'Guaranteed rent & blocks',
    avgNightlyRate: '£195/night',
    avgMonthlyRate: '£2,800+/mo',
    intro:
      'Pimlico and Waterloo SW1 offer some of the best guaranteed rent yields in Central London. Proximity to Westminster, the South Bank and Victoria delivers reliable corporate-let demand. We operate purpose-managed serviced apartment blocks here and take on individual units under our guaranteed rent agreement.',
    demand: 'Strong corporate + tourist mix. Lower seasonality than W1.',
  },
  mayfair: {
    slug: 'mayfair',
    name: 'Mayfair',
    postcode: 'W1',
    tagline: 'Ultra-premium short-let',
    avgNightlyRate: '£780/night',
    avgMonthlyRate: '£9,500+/mo',
    intro:
      'Mayfair commands London’s highest nightly short-let rates. We manage a small, hand-picked portfolio of luxury 2- and 3-bedroom apartments for high-net-worth guests, family offices and ultra-premium leisure travel. White-glove housekeeping, concierge handovers and discretion-led guest vetting are standard.',
    demand: 'Ultra-premium HNW leisure + executive. Average stays 5-9 nights.',
  },
  chelsea: {
    slug: 'chelsea',
    name: 'Chelsea',
    postcode: 'SW3',
    tagline: 'Premium residential',
    avgNightlyRate: '£310/night',
    avgMonthlyRate: '£4,200+/mo',
    intro:
      'Chelsea SW3 sits at the sweet spot of design appeal, brand and yield. Our managed apartments along the King’s Road and Sloane Square corridor consistently deliver 90%+ occupancy. Guests are predominantly leisure couples and family visitors with high spend per stay.',
    demand: '90%+ occupancy year-round. Strong weekend pricing.',
  },
  westminster: {
    slug: 'westminster',
    name: 'Westminster',
    postcode: 'SW1',
    tagline: 'Mixed portfolio management',
    avgNightlyRate: '£245/night',
    avgMonthlyRate: '£3,600+/mo',
    intro:
      'Westminster SW1 offers an unusual mix of government, parliamentary, embassy and tourist short-let demand. We manage a balanced portfolio of guaranteed-rent and platform-managed units here, with a heavy lean toward corporate mid-stay (4-14 nights) bookings.',
    demand: 'Government & corporate weekday + tourist weekend mix.',
  },
  'notting-hill': {
    slug: 'notting-hill',
    name: 'Notting Hill',
    postcode: 'W11',
    tagline: 'Boutique short-let',
    avgNightlyRate: '£295/night',
    avgMonthlyRate: '£3,900+/mo',
    intro:
      'Notting Hill W11 is one of London’s most photographed neighbourhoods and that translates directly to short-let demand. We manage a curated boutique portfolio across Westbourne Grove, Portobello and Holland Park borders. Average stay is shorter (3-4 nights) but ADR is consistently strong.',
    demand: 'Strong leisure + creative-sector long weekends.',
  },
  'canary-wharf': {
    slug: 'canary-wharf',
    name: 'Canary Wharf',
    postcode: 'E14',
    tagline: 'Corporate let specialists',
    avgNightlyRate: '£175/night',
    avgMonthlyRate: '£2,600+/mo',
    intro:
      'Canary Wharf E14 is the easiest London market to model: predictable corporate weekday demand, strong mid-stay bookings (7-30 nights) and high renewal rates. We manage tower apartments in South Quay, Westferry and Wood Wharf, almost exclusively under short-let management for executives and project teams.',
    demand: 'Mid-stay corporate. Lower weekend rates but predictable Mon-Fri.',
  },
}

export type DerivedArea = AreaMeta & {
  propertyCount: number
  properties: Property[]
}

// Single source for areas displayed on the homepage Areas section and the
// /areas index page. Derived from PROPERTIES so adding a property auto-shows
// its area (we still need an AREA_META entry for the long-form page).
export function deriveAreas(): DerivedArea[] {
  const seen = new Set<string>()
  const derived: DerivedArea[] = []

  for (const property of PROPERTIES) {
    if (seen.has(property.areaSlug)) continue
    seen.add(property.areaSlug)
    const meta = AREA_META[property.areaSlug]
    if (!meta) continue
    const properties = PROPERTIES.filter((p) => p.areaSlug === property.areaSlug)
    derived.push({ ...meta, propertyCount: properties.length, properties })
  }

  // Then append additional areas we cover (AREA_META) that don't yet have
  // a representative property — so the homepage Areas section still shows them.
  for (const slug of Object.keys(AREA_META)) {
    if (seen.has(slug)) continue
    seen.add(slug)
    derived.push({ ...AREA_META[slug], propertyCount: 0, properties: [] })
  }

  return derived
}

export function getAreaBySlug(slug: string): DerivedArea | null {
  const meta = AREA_META[slug]
  if (!meta) return null
  const properties = PROPERTIES.filter((p) => p.areaSlug === slug)
  return { ...meta, propertyCount: properties.length, properties }
}

export function getAllAreaSlugs(): string[] {
  return Object.keys(AREA_META)
}
