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
    name: 'Marylebone Apartments',
    type: 'Apartments',
    area: 'Marylebone, W1',
    areaSlug: 'marylebone',
    description:
      'Premium apartments in the heart of Marylebone, steps from Chiltern Street and Marylebone High Street. Operated under our guaranteed rent scheme with fixed monthly payments to the landlord.',
    bedrooms: '1-bed & 2-bed apartments',
    service: 'guaranteed-rent',
    monthlyIncome: '£15,000/month guaranteed',
    highlight: '2 years fixed',
    imageQuery: 'marylebone station london exterior',
    imageUrl: 'https://images.unsplash.com/photo-1663058008452-a97919e6aeda?w=800&q=80',
    badge: null,
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
    imageQuery: 'london kensington white stucco townhouse',
    imageUrl: 'https://images.unsplash.com/photo-1526654196244-3bdc251b0965?w=800&q=80',
    badge: 'Top Performer',
    location: { lat: 51.5008, lng: -0.1919 },
  },
  {
    id: 'pimlico-block',
    name: 'Vauxhall Bridge House',
    type: 'Apartments',
    area: 'Pimlico / Waterloo, SW1',
    areaSlug: 'pimlico',
    description:
      'A couple of apartments within a managed block near Pimlico and Waterloo, operated under our guaranteed rent scheme. Minutes from the South Bank and Westminster.',
    bedrooms: 'Studios & 1-bed apartments',
    service: 'guaranteed-rent',
    monthlyIncome: '£11,300/month guaranteed',
    highlight: '2 years fixed',
    imageQuery: 'pimlico london apartment interior',
    imageUrl:
      'https://bookingenginecdn.hostaway.com/listing/67835-436180-tq87ybjkw4JwjpaXp8noymeB5EECStMPEntesJPtT5k-693c5ab12c5aa?width=1920&quality=70&format=webp&v=2',
    gallery: [
      'https://bookingenginecdn.hostaway.com/listing/67835-367085-r8ly45f94yltg1qWoWuqPxovZUvl5ULKZBfHKt4wLx0-688e21285e0a6?width=1920&quality=70&format=webp&v=2',
      'https://bookingenginecdn.hostaway.com/listing/67835-486012-y1o5-mN0IrbVk7pr97F--dReXIXbBuvnDZIlxGa8pmuE-698b621da3e09?width=1920&quality=70&format=webp&v=2',
    ],
    badge: null,
    location: { lat: 51.4896, lng: -0.1338 },
  },
  {
    id: 'chelsea',
    name: 'Chelsea Reach',
    type: 'Boutique Apartments',
    area: 'Chelsea, SW3',
    areaSlug: 'chelsea',
    description:
      'A pair of riverside apartments in Chelsea on our guaranteed rent scheme. Currently let to a corporate client on a one-year contract.',
    bedrooms: '1-bed & 2-bed',
    service: 'guaranteed-rent',
    monthlyIncome: '£7,000/month guaranteed',
    highlight: 'Corporate client secured. 1 year contract.',
    imageQuery: 'london thames riverside apartment chelsea',
    imageUrl: 'https://images.unsplash.com/photo-1584412181991-bf85c8e01f58?w=800&q=80',
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
