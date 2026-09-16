// Case studies: longer-form, numbers-backed stories about real
// (anonymised) properties we manage. Structured as data so the
// /case-studies index and /case-studies/[slug] pages can grow as we
// add more. Only use facts we can stand behind. Where a figure is not
// yet confirmed, use BEFORE_FIGURE_PLACEHOLDER so it is obvious what
// still needs filling in, and the page hides that block until it is.

// Sentinel for an unconfirmed before/after figure. The detail page
// does not render the before/after comparison while this value is in
// place, so nothing unfinished ships to the live site. Replace it with
// a real figure (e.g. '£3,800/month') to switch the comparison on.
export const BEFORE_FIGURE_PLACEHOLDER = '[BEFORE FIGURE IF AVAILABLE]'

export type CaseStudyMetric = { label: string; value: string }
export type CaseStudySection = { heading: string; body: string[] }

export type CaseStudy = {
  slug: string
  // Page H1.
  title: string
  metaTitle: string
  metaDescription: string
  // Short excerpt for the listing card and meta.
  summary: string
  // Area level only. Never an exact address.
  area: string
  propertyType: string
  service: string
  // ISO date, used for the Article schema and ordering.
  date: string
  heroImage: string
  // Headline numbers shown as a stat row. Keep to confirmed facts.
  metrics: CaseStudyMetric[]
  // Narrative: the property, the challenge, what we did, the result.
  sections: CaseStudySection[]
  // Optional before/after comparison. Hidden on the page until the
  // 'before' value is a real figure rather than the placeholder.
  beforeAfter?: { beforeLabel: string; before: string; afterLabel: string; after: string }
  // Pull quote sourced from an existing testimonial (single source of
  // truth). Resolved against TESTIMONIALS by id on the page.
  pullQuoteTestimonialId?: number
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'chelsea-two-bed-guaranteed-rent',
    title: 'A Chelsea two-bed on guaranteed rent, fixed for 3 years',
    metaTitle: 'Chelsea Two-Bed Guaranteed Rent Case Study | Taj Cribs',
    metaDescription:
      'A Chelsea landlord was struggling to find a tenant for their two-bed apartment. We offered a 3 year guaranteed rent contract at £4,000 a month, with no voids and no day-to-day involvement.',
    summary:
      'A Chelsea landlord came to us after struggling to find a tenant for their two-bed apartment. We offered a 3 year guaranteed rent contract at a fixed £4,000 a month, with the day-to-day handled end to end.',
    area: 'Chelsea, SW3',
    propertyType: 'Two-bedroom apartment',
    service: 'Guaranteed Rent',
    date: '2026-05-22',
    heroImage: 'https://images.unsplash.com/photo-1584412181991-bf85c8e01f58?w=1600&q=80',
    metrics: [
      { label: 'Guaranteed rent', value: '£4,000' },
      { label: 'Lease term', value: '3 years' },
      { label: 'Void periods', value: 'None' },
    ],
    sections: [
      {
        heading: 'The property',
        body: [
          'The property is a two-bedroom apartment in Chelsea, SW3, a short walk from the river. The owner is a buy-to-let investor who holds more than one apartment in the area.',
          'The flat was in good order and on the market to let, but it was sitting empty and not earning anything.',
        ],
      },
      {
        heading: 'The challenge',
        body: [
          'The landlord was struggling to find a tenant. Viewings were not turning into lets, and every month the flat stood empty was a month of costs with no rent coming in.',
          'They wanted three things: reliable monthly income, a property kept to a high standard, and an end to the uncertainty of searching for tenants. So they reached out to us.',
        ],
      },
      {
        heading: 'What we did',
        body: [
          'We came in and offered the landlord a 3 year guaranteed rent contract at £4,000 a month. The landlord leased the apartment directly to Taj Cribs, so there was no longer any need for them to find a tenant.',
          'We pay that rent every month whether the property is occupied or not. There are no void periods for the landlord to cover and no tenants for them to deal with.',
          'We take on the full day-to-day running of the property for the length of the contract, including maintenance and keeping it to a high standard.',
        ],
      },
      {
        heading: 'The result',
        body: [
          'A flat that had been sitting empty now pays the landlord a guaranteed £4,000 a month, fixed for 3 years. That means a steady, predictable income across the full term and a property that is looked after without their involvement.',
          'As they put it, they see the rent come through and do not have to think about anything else. Because the rent is guaranteed by us rather than dependent on finding and keeping a tenant, it does not rise and fall month to month.',
        ],
      },
    ],
    pullQuoteTestimonialId: 4,
  },
]

export function getAllCaseStudySlugs(): string[] {
  return CASE_STUDIES.map((c) => c.slug)
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug)
}
