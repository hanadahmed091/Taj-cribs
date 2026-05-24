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
  /**
   * Mark a property as newly onboarded. When true, the homepage portfolio
   * card renders a small "Recently onboarded" pill beneath the area tag.
   * Leave undefined or false for established properties.
   */
  recentlyOnboarded?: boolean
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
  // Kensington Gate (kensington-hsk) was removed because we do not
  // currently operate a portfolio in W8. The Kensington area page is
  // still served from AREA_META as a coverage area (we are happy to
  // take on a W8 unit), but we do not surface a property card here.
  // Do not re-add a Kensington property entry unless we genuinely
  // operate one — propertyCount on the derived area record will be 0.
  {
    id: 'pimlico-block',
    name: 'Vauxhall Bridge House',
    type: 'Apartments',
    area: 'Pimlico / Waterloo, SW1',
    areaSlug: 'pimlico',
    description:
      'A couple of apartments within a managed block near Pimlico and Waterloo, operated under our guaranteed rent scheme. Minutes from the South Bank and Westminster.',
    bedrooms: '1-bed apartments',
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
    type: 'Boutique Apartment',
    area: 'Chelsea, SW3',
    areaSlug: 'chelsea',
    description:
      'A riverside apartment in Chelsea under our property management service. Currently let to a corporate tenant on a 10 month contract.',
    bedrooms: '2-bed apartment',
    service: 'short-let-management',
    monthlyIncome: '£6,500/month',
    highlight: 'Corporate tenant. 10 month let.',
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
  {
    id: 'earls-court-apartments',
    name: "Earl's Court Apartments",
    type: 'Apartments',
    area: "Earl's Court, SW5",
    areaSlug: 'earls-court',
    description:
      "A pair of serviced apartments in Earl's Court SW5, operated under our guaranteed rent scheme. Three-year fixed lease, fixed monthly payment to the landlord.",
    bedrooms: '1-bed & 2-bed apartments',
    service: 'guaranteed-rent',
    monthlyIncome: '£4,200/month guaranteed',
    highlight: '3 years fixed',
    imageQuery: "earl's court london apartment interior",
    imageUrl:
      'https://bookingenginecdn.hostaway.com/listing/67835-498290-qVwJqig9yVH0JUcXAtJGEsWEpK4AqDp114UJ0GcemVA-6a0ef52005b1e?width=1920&quality=70&format=webp&v=2',
    gallery: [
      'https://bookingenginecdn.hostaway.com/listing/67835-498290-lhbn582xB7WIpSBEeE42sFrJUhIPhQBj4P246s2AUlQ-6a0ef79b5a228?width=1920&quality=70&format=webp&v=2',
      'https://bookingenginecdn.hostaway.com/listing/67835-498290-xlH4yMdsQoBD46D1QTnhBB--Zp3p0Fs6O--QT--xaNGkzw-6a0ef4ebc9855?width=1920&quality=70&format=webp&v=2',
    ],
    badge: null,
    location: { lat: 51.4912, lng: -0.1947 },
  },
  {
    id: 'liverpool-street-apartments',
    name: 'Liverpool Street Apartments',
    type: 'Serviced Apartments',
    area: 'Liverpool Street, EC2',
    areaSlug: 'liverpool-street',
    description:
      'Two apartments near Liverpool Street station in the City of London, operated under our guaranteed rent scheme. The landlord receives a fixed monthly payment on a four-year term and has no involvement in day-to-day operations.',
    bedrooms: '2-bed, 2-bath apartments',
    service: 'guaranteed-rent',
    monthlyIncome: '£3,000/month guaranteed',
    highlight: '4 years fixed',
    imageQuery: 'liverpool street london apartment interior',
    imageUrl:
      'https://bookingenginecdn.hostaway.com/listing/67835-400511-sR0IbsUNfCwYAShH6sjhJuxIjhjEAuNtX4kMTekssaI-68475279d0e82?width=1920&quality=70&format=webp&v=2',
    gallery: [
      'https://bookingenginecdn.hostaway.com/listing/67835-400511-FwDNYXkJe54lH1McFFdW9iz2VWDD--XlzGaAQnwYiRFk-68476a18240c8?width=1920&quality=70&format=webp&v=2',
      'https://bookingenginecdn.hostaway.com/listing/67835-400511-QC-v1-6-WpVGT63-qmmffOm5IZsjIHMlZrGavhHFzJI-6847527517d81?width=1920&quality=70&format=webp&v=2',
    ],
    badge: null,
    location: { lat: 51.5180, lng: -0.0815 },
  },
]

export const SERVICE_LABELS: Record<ServiceType, string> = {
  'guaranteed-rent': 'Guaranteed Rent',
  'short-let-management': 'Property Management',
}

export const SERVICE_LABELS_SHORT: Record<ServiceType, string> = {
  'guaranteed-rent': 'Guaranteed Rent',
  'short-let-management': 'Property Management',
}
