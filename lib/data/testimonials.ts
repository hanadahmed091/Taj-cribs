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
    propertyLabel: 'Beaumont Court, Marylebone W1',
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
    propertyImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    propertyLabel: 'Kensington Gate, W8',
    service: 'Short-Let Management',
  },
  {
    id: 3,
    quote:
      "We moved abroad and needed certainty. The guaranteed rent on our Pimlico block means we don't look at property prices or booking calendars — we just receive the payment. Absolute peace of mind.",
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
      'My Mayfair apartment had been difficult to let — the nightly rate put off long-term tenants. Short-let management was the obvious answer and the team delivered immediately. Guest quality is exceptional.',
    name: 'Amir K.',
    role: 'Luxury Property Owner',
    area: 'Mayfair',
    stars: 5,
    propertyImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
    propertyLabel: 'Mayfair Residences, W1',
    service: 'Short-Let Management',
  },
  {
    id: 5,
    quote:
      'The onboarding took less than a week. Professional photographer came, listing went live, first booking confirmed the same week. The management dashboard gives me full visibility without any involvement.',
    name: 'Priya M.',
    role: 'Buy-to-Let Investor',
    area: 'Chelsea',
    stars: 5,
    propertyImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    propertyLabel: 'Chelsea Reach, SW3',
    service: 'Short-Let Management',
  },
]
