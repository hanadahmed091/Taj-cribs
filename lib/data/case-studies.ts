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
    slug: 'chelsea-two-bed-corporate-let',
    title: 'A Chelsea two-bed, fully managed and let to a corporate tenant',
    metaTitle: 'Chelsea Two-Bed Case Study | Taj Cribs',
    metaDescription:
      'How we took a two-bed Chelsea apartment under management, sourced a corporate tenant within weeks and secured a 10 month let at £6,500 a month, hands-off for the owner.',
    summary:
      'A buy-to-let investor put a two-bed Chelsea apartment under our management. We sourced a corporate tenant within weeks and secured a 10 month let at £6,500 a month, with the day-to-day handled end to end.',
    area: 'Chelsea, SW3',
    propertyType: 'Two-bedroom apartment',
    service: 'Property Management',
    date: '2026-05-22',
    heroImage: 'https://images.unsplash.com/photo-1584412181991-bf85c8e01f58?w=1600&q=80',
    metrics: [
      { label: 'Monthly income', value: '£6,500' },
      { label: 'Let length', value: '10 months' },
      { label: 'Tenant', value: 'Corporate' },
      { label: 'Time to let', value: 'Within weeks' },
    ],
    sections: [
      {
        heading: 'The property',
        body: [
          'The property is a two-bedroom apartment in Chelsea, SW3, a short walk from the river. The owner is a buy-to-let investor who holds more than one apartment in the area.',
          'The flat was in good order and ready to let, but it was sitting empty while the owner decided how best to run it. They wanted it earning without taking on the day-to-day work themselves.',
        ],
      },
      {
        heading: 'The challenge',
        body: [
          'The owner wanted three things: reliable monthly income, a property kept to a high standard, and as little involvement as possible.',
          'Running a Chelsea flat directly means handling viewings, tenant vetting, contracts, maintenance and the gaps between lets. For a busy investor with other commitments, that is time they did not want to spend. They needed an operator they could hand the keys to and trust to run it properly.',
        ],
      },
      {
        heading: 'What we did',
        body: [
          'We took the apartment on under our property management service and prepared it for the corporate market, where demand in Chelsea is steady and tenants tend to stay longer.',
          'Rather than run a cycle of short stays, we positioned the flat for a single, well-vetted corporate let. We sourced a suitable corporate tenant within weeks and agreed a 10 month contract.',
          'From there we took over the full day-to-day running of the property, from the tenancy paperwork through to ongoing management for the length of the let.',
        ],
      },
      {
        heading: 'The result',
        body: [
          'The apartment is let to a corporate tenant on a 10 month contract at £6,500 a month. For the owner that means a steady income across the full term and a property that is looked after without their involvement.',
          'As they put it, they see the income come through and do not have to think about anything else. Because this is a single corporate let rather than a short-let cycle, the income is stable and predictable for the term, not something that rises and falls month to month.',
        ],
      },
    ],
    beforeAfter: {
      beforeLabel: 'Previous long-let rent',
      before: BEFORE_FIGURE_PLACEHOLDER,
      afterLabel: 'Under our management',
      after: '£6,500/month',
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
