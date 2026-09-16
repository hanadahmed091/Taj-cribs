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
      'How a Chelsea landlord leased their two-bed apartment to Taj Cribs for a guaranteed £4,000 a month, fixed for 3 years, with no voids and no day-to-day involvement.',
    summary:
      'A buy-to-let investor leased a two-bed Chelsea apartment to us under our guaranteed rent scheme. They receive a fixed £4,000 a month for 3 years, with the day-to-day handled end to end.',
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
          'The flat was in good order, but it was sitting empty while the owner decided how best to run it. They wanted it earning without taking on the day-to-day work themselves.',
        ],
      },
      {
        heading: 'The challenge',
        body: [
          'The owner wanted three things: reliable monthly income, a property kept to a high standard, and as little involvement as possible.',
          'Letting a Chelsea flat directly means finding tenants, handling viewings, vetting, contracts, maintenance and the gaps between lets. For a busy investor with other commitments, that is time and risk they did not want to take on. They wanted a fixed income they could count on.',
        ],
      },
      {
        heading: 'What we did',
        body: [
          'The owner leased the apartment directly to Taj Cribs under our guaranteed rent scheme, on a 3 year term at £4,000 a month.',
          'We pay that rent every month whether the property is occupied or not. There is no tenant for the owner to find or deal with, and no void periods to cover.',
          'We take on the full day-to-day running of the property for the length of the lease, including maintenance and keeping it to a high standard.',
        ],
      },
      {
        heading: 'The result',
        body: [
          'The owner receives a guaranteed £4,000 a month, fixed for 3 years. That means a steady, predictable income across the full term and a property that is looked after without their involvement.',
          'As they put it, they see the rent come through and do not have to think about anything else. Because the rent is guaranteed by us rather than dependent on occupancy, it does not rise and fall month to month.',
        ],
      },
    ],
    beforeAfter: {
      beforeLabel: 'Previous long-let rent',
      before: BEFORE_FIGURE_PLACEHOLDER,
      afterLabel: 'Guaranteed rent',
      after: '£4,000/month',
    },
    pullQuoteTestimonialId: 4,
  },
]

export function getAllCaseStudySlugs(): string[] {
  return CASE_STUDIES.map((c) => c.slug)
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug)
}
