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
      "We moved abroad and needed certainty. The guaranteed rent on our Pimlico block means we don't look at property prices or booking calendars. We just receive the payment. Absolute peace of mind.",
    name: 'Sarah & Tom W.',
    role: 'Overseas Investors',
    area: 'Pimlico / Waterloo',
    stars: 5,
    propertyImage: 'https://images.unsplash.com/photo-1529408632839-a54952c491e5?w=800&q=80',
    propertyLabel: 'Vauxhall Bridge House, SW1',
    service: 'Guaranteed Rent',
  },
  {
    id: 4,
    quote:
      'Onboarding took just 7 days. The team brought us a corporate tenant on a three-year lease and the guaranteed payment lands on the same day every month. Hands-off. Exactly what we wanted.',
    name: 'Priya M.',
    role: 'Buy-to-Let Investor',
    area: 'Chelsea',
    stars: 5,
    propertyImage: 'https://images.unsplash.com/photo-1584412181991-bf85c8e01f58?w=800&q=80',
    propertyLabel: 'Chelsea Reach, SW3',
    service: 'Guaranteed Rent',
  },
]
