// Coverage areas displayed on the "Where We Operate" map (homepage)
// and the /areas page. Each area gets a near-circular polygon drawn
// around its centre point; polygons are computed at module load time
// so we don't need turf.js or anything heavier.
//
// The Mapbox source layer consumes `coverageGeoJson` directly. The
// `COVERAGE_AREAS` array drives the condensed area list below the map
// so a tap in the list can fly the map to the corresponding centre
// and open the matching popup.

export type CoverageArea = {
  slug: string
  name: string
  postcode: string
  oneLiner: string
  /** [lng, lat] in Mapbox order, NOT Google Maps order. */
  centre: [number, number]
}

/**
 * Generate a ~32-vertex closed ring approximating a circle of the
 * given radius around a lng/lat centre. Returns coords in [lng, lat]
 * GeoJSON order.
 */
function circlePolygon(
  centre: [number, number],
  radiusKm = 1.1,
  segments = 32,
): number[][] {
  const [lng, lat] = centre
  const ring: number[][] = []
  const dLat = radiusKm / 111.32
  const dLng = radiusKm / (111.32 * Math.cos((lat * Math.PI) / 180))
  for (let i = 0; i <= segments; i++) {
    const t = (i / segments) * 2 * Math.PI
    ring.push([lng + dLng * Math.cos(t), lat + dLat * Math.sin(t)])
  }
  return ring
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
 * FeatureCollection consumed by the Mapbox `coverage` source. Each
 * feature carries the area metadata in its `properties` block so the
 * click handler can read it back without a separate lookup.
 */
export const coverageGeoJson = {
  type: 'FeatureCollection' as const,
  features: COVERAGE_AREAS.map((area, idx) => ({
    type: 'Feature' as const,
    id: idx + 1, // numeric id required by setFeatureState
    geometry: {
      type: 'Polygon' as const,
      coordinates: [circlePolygon(area.centre)],
    },
    properties: {
      slug: area.slug,
      name: area.name,
      postcode: area.postcode,
      oneLiner: area.oneLiner,
    },
  })),
}

export type CoverageFeatureId = number
