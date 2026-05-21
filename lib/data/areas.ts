import { PROPERTIES, type Property } from './properties'

// Static area metadata. The displayed list of areas, however, is derived
// from PROPERTIES at render time (see deriveAreas()).
//
// Note: we no longer publish indicative avg monthly / nightly rates on
// the site. Those were modelled figures and not defensible against a
// landlord challenging them, so they've been replaced sitewide with a
// "Free valuation" prompt. Don't reintroduce a rate field here.
export type AreaMeta = {
  slug: string
  name: string         // e.g. "Marylebone"
  postcode: string     // e.g. "W1"
  tagline: string
  intro: string        // long-form copy used on /areas/[slug]
  demand: string
}

export const AREA_META: Record<string, AreaMeta> = {
  marylebone: {
    slug: 'marylebone',
    name: 'Marylebone',
    postcode: 'W1',
    tagline: 'Block & portfolio management',
    intro:
      'Marylebone is one of the most consistent earners in Central London. Demand is driven by Harley Street medical visitors, corporate guests around Baker Street, and the Marylebone High Street tourist trade. We manage residential blocks and individual units across W1U and W1G, with our guaranteed rent scheme proving particularly popular for owners of multi-unit buildings.',
    demand: 'Year-round corporate + leisure demand. Mid-week occupancy averages 88%.',
  },
  'high-street-kensington': {
    slug: 'high-street-kensington',
    name: 'High Street Kensington',
    postcode: 'W8',
    tagline: 'Short-let specialists',
    intro:
      'High Street Kensington significantly outperforms standard letting yields once optimised for short-let. We manage premium units across W8, working closely with Kensington Palace and Holland Park footfall. Our portfolio here is overwhelmingly short-let, with average occupancy of 94% across the year.',
    demand: 'Tourist & corporate. Peak nightly rates exceed £600 in summer.',
  },
  pimlico: {
    slug: 'pimlico',
    name: 'Pimlico',
    postcode: 'SW1',
    tagline: 'Guaranteed rent & blocks',
    intro:
      'Pimlico and Waterloo SW1 offer some of the best guaranteed rent yields in Central London. Proximity to Westminster, the South Bank and Victoria delivers reliable corporate-let demand. We operate purpose-managed serviced apartment blocks here and take on individual units under our guaranteed rent agreement.',
    demand: 'Strong corporate + tourist mix. Lower seasonality than W1.',
  },
  mayfair: {
    slug: 'mayfair',
    name: 'Mayfair',
    postcode: 'W1',
    tagline: 'Ultra-premium short-let',
    intro:
      'Mayfair commands London’s highest nightly short-let rates. We manage a small, hand-picked portfolio of luxury 2- and 3-bedroom apartments for high-net-worth guests, family offices and ultra-premium leisure travel. White-glove housekeeping, concierge handovers and discretion-led guest vetting are standard.',
    demand: 'Ultra-premium HNW leisure + executive. Average stays 5-9 nights.',
  },
  chelsea: {
    slug: 'chelsea',
    name: 'Chelsea',
    postcode: 'SW3',
    tagline: 'Premium residential',
    intro:
      'Chelsea SW3 sits at the sweet spot of design appeal, brand and yield. Our managed apartments along the King’s Road and Sloane Square corridor consistently deliver 90%+ occupancy. Guests are predominantly leisure couples and family visitors with high spend per stay.',
    demand: '90%+ occupancy year-round. Strong weekend pricing.',
  },
  westminster: {
    slug: 'westminster',
    name: 'Westminster',
    postcode: 'SW1',
    tagline: 'Mixed portfolio management',
    intro:
      'Westminster SW1 offers an unusual mix of government, parliamentary, embassy and tourist short-let demand. We manage a balanced portfolio of guaranteed-rent and platform-managed units here, with a heavy lean toward corporate mid-stay (4-14 nights) bookings.',
    demand: 'Government & corporate weekday + tourist weekend mix.',
  },
  'notting-hill': {
    slug: 'notting-hill',
    name: 'Notting Hill',
    postcode: 'W11',
    tagline: 'Boutique short-let',
    intro:
      'Notting Hill W11 is one of London’s most photographed neighbourhoods and that translates directly to short-let demand. We manage a curated boutique portfolio across Westbourne Grove, Portobello and Holland Park borders. Average stay is shorter (3-4 nights) but ADR is consistently strong.',
    demand: 'Strong leisure + creative-sector long weekends.',
  },
  'canary-wharf': {
    slug: 'canary-wharf',
    name: 'Canary Wharf',
    postcode: 'E14',
    tagline: 'Corporate let specialists',
    intro:
      'Canary Wharf E14 is the easiest London market to model: predictable corporate weekday demand, strong mid-stay bookings (7-30 nights) and high renewal rates. We manage tower apartments in South Quay, Westferry and Wood Wharf, almost exclusively under short-let management for executives and project teams.',
    demand: 'Mid-stay corporate. Lower weekend rates but predictable Mon-Fri.',
  },
  'kings-cross': {
    slug: 'kings-cross',
    name: "King's Cross",
    postcode: 'N1',
    tagline: 'Short-let & guaranteed rent specialists',
    intro:
      "King's Cross has transformed into one of London's most dynamic neighbourhoods. Home to Google, Central Saint Martins and outstanding transport links across the city and internationally via St Pancras. Strong year-round demand from corporate travellers, students and tourists makes it an excellent short-let and guaranteed rent location.",
    demand: 'Year-round corporate, student and international traveller demand.',
  },
  'earls-court': {
    slug: 'earls-court',
    name: "Earl's Court",
    postcode: 'SW5',
    tagline: 'Guaranteed Rent specialists',
    intro:
      "Earl's Court SW5 sits at one of London's best-connected interchanges. The District and Piccadilly lines meet at Earl's Court station, putting Heathrow on a direct ride and the City, Westminster and the West End within 15-20 minutes. Kensington and Chelsea border the postcode to the north and east, with Fulham to the south. The guest mix here is unusually balanced: international visitors arriving via Heathrow, professionals on mid-stay corporate assignments, and steady leisure demand around museums and the King's Road. Regulation is straightforward. SW5 sits outside the prime W1 enforcement pressure on the 90-day rule, but we still operate every unit Rule-compliant. We took on Earl's Court Apartments because the demand profile is consistent year-round and the postcode supports our guaranteed-rent model on a longer fixed lease.",
    demand: "International + corporate weekday + leisure weekend. Strong year-round occupancy.",
  },
  'nine-elms': {
    slug: 'nine-elms',
    name: 'Nine Elms',
    postcode: 'SW8',
    tagline: 'Short-let & guaranteed rent specialists',
    intro:
      "Nine Elms is one of London's most exciting regeneration areas. Home to the new US Embassy, Battersea Power Station and a rapidly growing residential community. Corporate short-let and guaranteed rent demand is increasing strongly as the area matures.",
    demand: 'Growing corporate short-let demand as the area matures.',
  },
  waterloo: {
    slug: 'waterloo',
    name: 'Waterloo',
    postcode: 'SE1',
    tagline: 'Guaranteed Rent specialists',
    intro:
      'Waterloo SE1 sits at the centre of one of London’s busiest transport hubs. Waterloo and Waterloo East together feed the Jubilee, Northern, Bakerloo and Waterloo & City lines, with direct National Rail across the south of England and a short walk to Eurostar at St Pancras. The City, Westminster and the South Bank cultural quarter are all on foot. Corporate-guest demand is consistent Monday-to-Friday, with strong weekend leisure top-up driven by the National Theatre, Royal Festival Hall, the Tate Modern and the London Eye. Regulation here is straightforward. Waterloo falls outside the harshest 90-day enforcement pressure that hits prime W1, but we still operate every unit Rule-compliant. We took on Waterloo Apartments because the demand profile fits our guaranteed-rent model precisely: high mid-week occupancy, low seasonality, and a guest mix that values service over price.',
    demand: 'Corporate weekday + cultural-tourism weekend. Strong year-round occupancy.',
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
  // a representative property, so the homepage Areas section still shows them.
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

/**
 * Returns a clean product label for the area detail page hero stat row.
 * Pulls from the tagline string to detect which products we offer in an
 * area. Falls back to "Guaranteed Rent & Short-Let Management" when the
 * tagline doesn't mention either product explicitly, since Taj Cribs
 * operates both products across Central London by default.
 */
export function getAreaProductLabel(area: Pick<AreaMeta, 'tagline'>): string {
  const tag = area.tagline.toLowerCase()
  const hasGR = /guaranteed[\s-]?rent/.test(tag)
  const hasSLM = /short[\s-]?let/.test(tag)
  if (hasGR && hasSLM) return 'Guaranteed Rent & Short-Let Management'
  if (hasGR) return 'Guaranteed Rent'
  if (hasSLM) return 'Short-Let Management'
  return 'Guaranteed Rent & Short-Let Management'
}
