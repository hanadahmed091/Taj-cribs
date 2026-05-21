// Coverage areas displayed on the "Where We Operate" map (homepage)
// and the /areas page.
//
// We don't draw per-area shapes any more. Coverage is the entire TfL
// Zone 1 area, rendered as a single soft-filled polygon. The map
// stays interactive via the area list below it: tapping a name flies
// the map to that area's centre and opens a small popup.
//
// COVERAGE_AREAS drives the area-list buttons and the per-area popups
// triggered from the list.
// zone1GeoJson is what the Mapbox source consumes for the polygon.

export type CoverageArea = {
  slug: string
  name: string
  postcode: string
  oneLiner: string
  /** [lng, lat] in Mapbox order, NOT Google Maps order. */
  centre: [number, number]
}

export const COVERAGE_AREAS: CoverageArea[] = [
  {
    slug: 'marylebone',
    name: 'Marylebone',
    postcode: 'W1',
    oneLiner: 'Short-let and guaranteed rent across W1.',
    centre: [-0.1487, 51.5174],
  },
  {
    slug: 'mayfair',
    name: 'Mayfair',
    postcode: 'W1',
    oneLiner: 'Short-let and guaranteed rent across W1.',
    centre: [-0.1469, 51.5089],
  },
  {
    slug: 'high-street-kensington',
    name: 'High Street Kensington',
    postcode: 'W8',
    oneLiner: 'Short-let and guaranteed rent across W8.',
    centre: [-0.1924, 51.5004],
  },
  {
    slug: 'pimlico',
    name: 'Pimlico',
    postcode: 'SW1',
    oneLiner: 'Short-let and guaranteed rent across SW1.',
    centre: [-0.134, 51.4894],
  },
  {
    slug: 'chelsea',
    name: 'Chelsea',
    postcode: 'SW3',
    oneLiner: 'Short-let and guaranteed rent across SW3.',
    centre: [-0.1687, 51.4875],
  },
  {
    slug: 'westminster',
    name: 'Westminster',
    postcode: 'SW1',
    oneLiner: 'Short-let and guaranteed rent across SW1.',
    centre: [-0.1278, 51.4994],
  },
  {
    slug: 'notting-hill',
    name: 'Notting Hill',
    postcode: 'W11',
    oneLiner: 'Short-let and guaranteed rent across W11.',
    centre: [-0.2049, 51.5095],
  },
  {
    slug: 'canary-wharf',
    name: 'Canary Wharf',
    postcode: 'E14',
    oneLiner: 'Short-let and guaranteed rent across E14.',
    centre: [-0.0235, 51.5054],
  },
  {
    slug: 'kings-cross',
    name: "King's Cross",
    postcode: 'N1',
    oneLiner: 'Short-let and guaranteed rent across N1.',
    centre: [-0.1238, 51.5308],
  },
  {
    slug: 'earls-court',
    name: "Earl's Court",
    postcode: 'SW5',
    oneLiner: 'Short-let and guaranteed rent across SW5.',
    centre: [-0.1947, 51.4913],
  },
  {
    slug: 'nine-elms',
    name: 'Nine Elms',
    postcode: 'SW8',
    oneLiner: 'Short-let and guaranteed rent across SW8.',
    centre: [-0.1278, 51.481],
  },
  {
    slug: 'waterloo',
    name: 'Waterloo',
    postcode: 'SE1',
    oneLiner: 'Short-let and guaranteed rent across SE1.',
    centre: [-0.1132, 51.5031],
  },
]

/**
 * Hand-traced approximation of the TfL Zone 1 boundary. Coordinates
 * are [lng, lat] (GeoJSON order). Traced clockwise from Paddington
 * in the north-west. Not GIS-accurate, but reads correctly as a
 * coverage shape over Central London.
 */
const zone1Boundary: number[][] = [
  [-0.185, 51.521], // NW: Paddington / Edgware Rd
  [-0.165, 51.527], // N: Marylebone / Regent's Park edge
  [-0.140, 51.531], // N: north of Marylebone Rd
  [-0.120, 51.536], // King's Cross / Euston
  [-0.098, 51.535], // Angel / Pentonville
  [-0.080, 51.527], // Old Street
  [-0.070, 51.520], // Shoreditch
  [-0.068, 51.514], // Aldgate / Liverpool Street
  [-0.073, 51.509], // Tower Hill
  [-0.082, 51.504], // London Bridge
  [-0.090, 51.500], // Borough
  [-0.098, 51.495], // Southwark
  [-0.103, 51.490], // Elephant & Castle
  [-0.115, 51.487], // Lambeth North
  [-0.125, 51.485], // Vauxhall north
  [-0.140, 51.485], // Pimlico south edge
  [-0.155, 51.488], // Belgravia south
  [-0.170, 51.490], // Chelsea (King's Rd)
  [-0.190, 51.491], // Earl's Court east
  [-0.205, 51.495], // Earl's Court / West Brompton
  [-0.212, 51.503], // Holland Park south
  [-0.210, 51.512], // Holland Park / Notting Hill
  [-0.205, 51.518], // Notting Hill Gate
  [-0.195, 51.520], // Bayswater
  [-0.185, 51.521], // close to start
]

/**
 * FeatureCollection consumed by the Mapbox `coverage` source.
 * One feature: the Zone 1 polygon.
 */
export const zone1GeoJson = {
  type: 'FeatureCollection' as const,
  features: [
    {
      type: 'Feature' as const,
      id: 1,
      geometry: {
        type: 'Polygon' as const,
        coordinates: [zone1Boundary],
      },
      properties: {
        name: 'Zone 1',
      },
    },
  ],
}

/**
 * Suggested map view: Westminster-centred with enough zoom to fit
 * Zone 1 in view on most viewports.
 */
export const ZONE1_CENTRE: [number, number] = [-0.1278, 51.5074]
export const ZONE1_DEFAULT_ZOOM = 11.6
