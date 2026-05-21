export type Testimonial = {
  id: number
  quote: string
  name: string
  role: string
  area: string
  stars: number
  propertyImage: string
  propertyLabel: string
  service: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote:
      "We handed over the full Marylebone block and haven't thought about it since. Guaranteed rent hits our account on the same day every month without fail. It's genuinely the best decision we made for the portfolio.",
    name: 'Richard & Caroline H.',
    role: 'Property Investors',
    area: 'Marylebone Block',
    stars: 5,
    propertyImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
    propertyLabel: 'Marylebone Apartments, W1',
    service: 'Guaranteed Rent',
  },
  {
    id: 2,
    quote:
      'After switching from a standard letting agent to short-let management, we saw over a 50% increase in revenue within the first three months. The difference has been remarkable.',
    name: 'James T.',
    role: 'Private Landlord',
    area: 'High Street Kensington',
    stars: 5,
    propertyImage: 'https://images.unsplash.com/photo-1526654196244-3bdc251b0965?w=800&q=80',
    propertyLabel: 'Kensington Gate, W8',
    service: 'Short-Let Management',
  },
  {
    id: 3,
    quote:
      "We own two one-bedroom apartments in Nine Elms and live abroad, so we needed someone we could fully trust to run them. Taj Cribs handles everything: guests, cleaning, maintenance, the lot. The payments come through reliably every month and we barely lift a finger. Knowing the flats are looked after properly while we're overseas is worth a lot.",
    name: 'Sarah & Tom W.',
    role: 'Overseas Investors',
    area: 'Nine Elms',
    stars: 5,
    propertyImage: 'https://images.unsplash.com/photo-1529408632839-a54952c491e5?w=800&q=80',
    propertyLabel: 'Nine Elms apartments, SW8',
    service: 'Property Management',
  },
  {
    id: 4,
    quote:
      "We put two Chelsea apartments under management with Taj Cribs and they sourced a corporate tenant on one of them within weeks. A 10 month let at £6,500 a month on the two-bed. The team handles the day to day completely. We see the income come through and don't have to think about anything else.",
    name: 'Priya M.',
    role: 'Buy-to-Let Investor',
    area: 'Chelsea',
    stars: 5,
    propertyImage: 'https://images.unsplash.com/photo-1584412181991-bf85c8e01f58?w=800&q=80',
    propertyLabel: 'Chelsea Reach, SW3',
    service: 'Property Management',
  },
]
