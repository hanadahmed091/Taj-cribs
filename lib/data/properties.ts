export type ServiceType = 'guaranteed-rent' | 'short-let-management'

export type Property = {
  id: string
  name: string
  type: string
  area: string          // human-readable, e.g. "Marylebone, W1"
  areaSlug: string      // url-safe, e.g. "marylebone"
  description: string
  bedrooms: string
  service: ServiceType
  monthlyIncome: string
  highlight: string
  imageQuery: string
  imageUrl: string
  badge: string | null
  location: { lat: number; lng: number }
}

export const PROPERTIES: Property[] = [
  {
    id: 'marylebone-block',
    name: 'Beaumont Court',
    type: 'Residential Block',
    area: 'Marylebone, W1',
    areaSlug: 'marylebone',
    description:
      'A prestigious 14-unit residential block in the heart of Marylebone, steps from Chiltern Street and Marylebone High Street. We manage the full block under our guaranteed rent scheme.',
    bedrooms: 'Mix of studios, 1-bed & 2-bed',
    service: 'guaranteed-rent',
    monthlyIncome: '£47,500/month guaranteed',
    highlight: 'Full block — zero vacancy risk',
    imageQuery: 'marylebone london residential building exterior',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    badge: 'Full Block',
    location: { lat: 51.5194, lng: -0.1548 },
  },
  {
    id: 'kensington-hsk',
    name: 'Kensington Gate',
    type: 'Mixed Portfolio',
    area: 'High Street Kensington, W8',
    areaSlug: 'high-street-kensington',
    description:
      'A collection of premium apartments across two buildings on Kensington High Street, fully managed on short-let platforms. Walking distance from Holland Park and Kensington Palace.',
    bedrooms: '1-bed & 2-bed apartments',
    service: 'short-let-management',
    monthlyIncome: '£8,200–£14,500/month per unit',
    highlight: '94% occupancy rate achieved',
    imageQuery: 'high street kensington london apartments',
    imageUrl: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    badge: 'Top Performer',
    location: { lat: 51.5008, lng: -0.1919 },
  },
  {
    id: 'pimlico-block',
    name: 'Vauxhall Bridge House',
    type: 'Residential Block',
    area: 'Pimlico / Waterloo, SW1',
    areaSlug: 'pimlico',
    description:
      'A purpose-managed serviced apartment block near Pimlico and Waterloo, ideal for corporate short-let guests and tourism. Minutes from the South Bank and Westminster.',
    bedrooms: 'Studios & 1-bed units',
    service: 'guaranteed-rent',
    monthlyIncome: '£38,000/month guaranteed',
    highlight: 'Corporate let focus — high yield',
    imageQuery: 'pimlico london apartment building modern',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
    badge: 'Full Block',
    location: { lat: 51.4896, lng: -0.1338 },
  },
  {
    id: 'mayfair',
    name: 'Mayfair Residences',
    type: 'Luxury Apartments',
    area: 'Mayfair, W1',
    areaSlug: 'mayfair',
    description:
      'Ultra-premium short-let apartments in Mayfair, commanding London’s highest nightly rates. Managed with white-glove service for high-net-worth guests and corporate clients.',
    bedrooms: '2-bed & 3-bed luxury apartments',
    service: 'short-let-management',
    monthlyIncome: '£18,000–£32,000/month per unit',
    highlight: 'Top 1% earner on Airbnb London',
    imageQuery: 'mayfair london luxury apartment interior modern',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
    badge: 'Luxury',
    location: { lat: 51.5099, lng: -0.1476 },
  },
  {
    id: 'chelsea',
    name: 'Chelsea Reach',
    type: 'Boutique Apartments',
    area: 'Chelsea, SW3',
    areaSlug: 'chelsea',
    description:
      'A curated collection of boutique apartments in Chelsea, managed for premium short-let returns. Consistently achieving 90%+ occupancy year-round.',
    bedrooms: '1-bed & 2-bed',
    service: 'short-let-management',
    monthlyIncome: '£9,500–£16,000/month per unit',
    highlight: '90%+ occupancy year-round',
    imageQuery: 'chelsea london apartment building townhouse',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6d3a4b7b?w=1200&q=80',
    badge: null,
    location: { lat: 51.4871, lng: -0.1678 },
  },
]

export const SERVICE_LABELS: Record<ServiceType, string> = {
  'guaranteed-rent': 'Guaranteed Rent',
  'short-let-management': 'Short-Let Management',
}

export const SERVICE_LABELS_SHORT: Record<ServiceType, string> = {
  'guaranteed-rent': 'Guaranteed Rent',
  'short-let-management': 'Short-Let Mgmt',
}
