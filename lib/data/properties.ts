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
  /**
   * Optional additional photos beyond imageUrl. Rendered on the area page
   * as an "Inside the property" gallery when present.
   */
  gallery?: string[]
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
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1529408632839-a54952c491e5?w=800&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    badge: null,
    location: { lat: 51.4871, lng: -0.1678 },
  },
  {
    id: 'waterloo-apartments',
    name: 'Waterloo Apartments',
    type: 'Serviced Apartments',
    area: 'Waterloo, SE1',
    areaSlug: 'waterloo',
    description:
      'Modern serviced apartments minutes from Waterloo Station and the South Bank. Operated under our guaranteed rent scheme with a corporate-let focus and consistent year-round demand.',
    bedrooms: '1-bed & 2-bed apartments',
    service: 'guaranteed-rent',
    monthlyIncome: '£3,500/month guaranteed',
    highlight: '2 years fixed',
    imageQuery: 'waterloo london serviced apartment bedroom interior',
    imageUrl:
      'https://bookingenginecdn.hostaway.com/listing/67835-432700-wpQjLbHqDwghT6RiCTA438253xvnIUY--YLTLl4d----tI-68c4d195da1b7?width=1920&quality=70&format=webp&v=2',
    gallery: [
      'https://bookingenginecdn.hostaway.com/listing/67835-432700-kKATe3pyKt8CJGkJm7lYODkYhkT7T13Rf8YsmgHVChw-68c4d15635df5?width=1920&quality=70&format=webp&v=2',
      'https://bookingenginecdn.hostaway.com/listing/67835-432700-seTJHcnS11YjoGxvX1gl9MHVwGf-NYlb8pqv8Rn6MeA-68c4d173456ce?width=1920&quality=70&format=webp&v=2',
    ],
    badge: null,
    location: { lat: 51.5036, lng: -0.1143 },
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
