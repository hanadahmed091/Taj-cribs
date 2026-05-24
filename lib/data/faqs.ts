export type FAQ = {
  q: string
  a: string
  // Optional in-UI link shown after the answer. Not included in the
  // FAQPage JSON-LD, which uses the plain `a` text only.
  cta?: { label: string; href: string }
}

// General landlord FAQs used on the homepage and the /faqs page.
export const HOMEPAGE_FAQS: FAQ[] = [
  {
    q: 'What is the difference between guaranteed rent and short-let management?',
    a: 'Guaranteed rent means we lease your property on a fixed corporate contract and pay you the same amount every month, whether or not it is occupied. Short-let management means we run your property across the booking platforms for you and pass on the income, less our fee, so your monthly figure moves with demand. Guaranteed rent trades a little upside for total certainty. Management gives you the full earning potential with some month-to-month variation.',
  },
  {
    q: 'How much do you charge?',
    a: 'For short-let management we charge a flat 18% of gross booking revenue, with no listing fees, photography fees or call-out charges. For guaranteed rent there is no fee at all. We pay you an agreed monthly figure and keep the difference between that and what the property earns. Either way, the number we quote you is the number you receive.',
  },
  {
    q: 'What happens if my property is empty?',
    a: 'On guaranteed rent, an empty property changes nothing for you. You are paid the same agreed amount on the same date regardless of occupancy, because the void risk sits with us. On management, your income reflects actual bookings, so quieter winter months earn less than peak summer ones — the trade-off for the higher earning ceiling.',
  },
  {
    q: 'Who pays for repairs and maintenance?',
    a: 'We coordinate all maintenance and handle the minor day-to-day repairs. On guaranteed rent we cover routine maintenance, cleaning, consumables and the running costs of letting. On management we arrange repairs on your behalf and bill them at cost, never marked up. Larger and structural works stay with you as the owner, as do your mortgage and building insurance, and we always get your approval before any significant spend.',
  },
  {
    q: 'How and when do I get paid?',
    a: 'You are paid by bank transfer once a month. On guaranteed rent the payment lands on the same fixed date every month, set in your contract. On management we pay your net income on a set date with a clear statement showing the gross bookings, our 18% fee and your balance. No chasing and no surprises.',
  },
  {
    q: 'What about the London 90-day short-let rule?',
    a: 'In Greater London, letting an entire home on short stays is capped at 90 nights per calendar year unless you hold planning permission for more. We track every property’s night count and switch to medium-term and corporate lets once the cap is reached, so you stay compliant and keep earning year-round. It is one of the main reasons our properties mix short stays with longer corporate bookings.',
    cta: { label: 'Read our guide to the 90-day rule', href: '/blog/90-day-rule-airbnb-london' },
  },
  {
    q: 'How long are your contracts?',
    a: 'Guaranteed rent contracts run from one to five years, with longer terms earning you a higher monthly figure. Short-let management is more flexible, with a rolling agreement and no long lock-in. We are happy to start with a shorter term so you can see how the model performs before committing further.',
  },
  {
    q: 'Do you take on whole blocks and portfolios?',
    a: 'Yes. We are structured for whole blocks and multi-property portfolios, which most short-let operators are not. We already manage full residential blocks and landlords with several units across Central London, with one point of contact and one consolidated statement. If you own a block or a portfolio, this is exactly the kind of work we are built for.',
  },
  {
    q: 'How quickly can you onboard my property?',
    a: 'A furnished, photo-ready property can be live and taking bookings in less than a week from signing. If it needs photography, styling or a few furniture additions, allow one to two weeks. We move as fast as the property allows, and we tell you honestly what is needed before we start.',
  },
  {
    q: 'What areas do you cover?',
    a: 'We focus on Central London, broadly Zone 1, including Marylebone, Mayfair, Kensington, Chelsea, Pimlico, Westminster, Notting Hill and Canary Wharf. Concentrating on these postcodes is how we keep occupancy and standards high. We do consider strong properties just outside these areas, so it is always worth asking.',
    cta: { label: 'See the areas we cover', href: '/areas' },
  },
]

export const GUARANTEED_RENT_FAQS: FAQ[] = [
  {
    q: 'How does guaranteed rent actually work?',
    a: 'We guarantee you the full market rental value of your property as a fixed monthly payment, paid on the same date every month, regardless of occupancy. No voids, no chasing rent, no hassle. We sign a corporate lease for a fixed term (typically 1–5 years) and take on all operational risk in exchange for the right to short-let the property. Our margin comes from optimising short-let upside, not from undercutting your rent.',
  },
  {
    q: 'What is the minimum lease term?',
    a: 'We offer 1, 3 and 5-year terms (1–5 years), with longer terms commanding a higher monthly figure. Shorter terms suit landlords trialling the model; longer terms are usually preferred for purpose-managed blocks.',
  },
  {
    q: 'Do I still pay the mortgage and bills?',
    a: 'You continue to pay the mortgage and building insurance. We cover all utility bills, council tax, internet, cleaning, routine maintenance and consumables.',
  },
  {
    q: 'What if a guest damages the property?',
    a: 'Every booking is covered by guest deposits and platform damage guarantees. For anything beyond that we hold a £5,000 reserve fund per property. You pay nothing.',
  },
  {
    q: 'Will I lose control of the property?',
    a: 'No. You retain full ownership and can inspect the property with reasonable notice. The lease specifies maximum guest numbers, no parties policy, and standards of upkeep.',
  },
  {
    q: 'How quickly can guaranteed rent start?',
    a: 'For a property ready to let, we can usually start the first guaranteed payment in less than a week from contract. Properties needing furnishing or minor works can take 4-6 weeks.',
  },
  {
    q: 'Do I need to furnish the property?',
    a: 'For guaranteed rent we strongly prefer to furnish it ourselves to our short-let spec. We can either buy the furniture and depreciate it across the term, or take over your existing furnishings if they meet standard.',
  },
  {
    q: 'Is this Rent-to-Rent? Is it legal?',
    a: 'Yes. This is a corporate let arrangement (sometimes called Rent-to-SA or Rent-to-Rent). It is fully legal, regulated, and we are licensed where applicable. We can provide references from existing landlords on request.',
  },
]

export const SHORT_LET_FAQS: FAQ[] = [
  {
    q: 'What is a "managed short let"?',
    a: 'We take over the full operation of letting your property on short-stay platforms (Airbnb, Booking.com, Vrbo, Expedia and direct) and corporate channels. You receive net income after our management fee, typically significantly more than a standard AST would deliver.',
  },
  {
    q: 'What is the management fee?',
    a: 'A flat 18% of gross booking revenue for full management. There are no hidden costs, no listing fees, no photography fees. You see the gross and net figures in your dashboard every month.',
  },
  {
    q: 'How fast can I be live and earning?',
    a: 'For a furnished, photo-ready property: less than a week. For properties needing photography, styling or minor furniture additions: 1-2 weeks.',
  },
  {
    q: 'What is the average income I can expect?',
    a: 'It depends on your property, location, finish and the model you choose. Rather than quote ranges that may not apply to your situation, we give every landlord a tailored figure within one business day. Get a free valuation to see what your property would earn under guaranteed rent and under short-let management.',
  },
  {
    q: 'How is the property cleaned between guests?',
    a: 'Professional housekeeping team, in-house, with a defined checklist and quality control between every stay. Linen is changed each turnaround.',
  },
  {
    q: 'Will my flat be over-occupied or used for parties?',
    a: 'No. We screen every booking, set max guest numbers below capacity, and operate a strict no-parties, no-events policy. Noise-monitoring devices are installed in every property as standard.',
  },
  {
    q: 'Can I block out dates for personal use?',
    a: 'Yes. You have full calendar control through your owner dashboard. Block dates instantly for your own stays or family use.',
  },
  {
    q: 'What if occupancy is low one month?',
    a: 'Short-let income is variable by nature. Our average across the portfolio is 80% occupancy with month-to-month variation typically under 12%. Income also rises and falls with the season. Summer and Christmas tend to be the strongest months, while January and February are quieter. We aim to maximise both occupancy and rate, but a fully booked low-season month will still earn less than a busy peak-season month. If predictability matters more than maximising returns, our guaranteed rent product may suit better.',
  },
]

// Serviced-accommodation FAQs — framed for landlords choosing our SA
// management service. No invented figures: every answer is qualitative
// or references operational policy (the 90-day rule, contract terms,
// bill-handling) that's stated elsewhere on the site.
export const SERVICED_ACCOMMODATION_FAQS: FAQ[] = [
  {
    q: 'How is serviced accommodation different from Airbnb?',
    a: 'Both run on the same regulatory footing, but the guest profile and operating model differ. Airbnb-style short-let is nightly-priced, leisure-heavy and typically 2-7 night stays. Serviced accommodation targets longer stays — one week to three months — and the bookings come predominantly from corporate housing budgets, relocation agents, insurance placements and overseas family visitors. Service is hotel-grade: defined check-in and check-out, weekly or bi-weekly housekeeping, billing on a weekly or monthly cycle rather than per night. For landlords the practical result is a longer average stay, lower turnover and less wear on the property.',
  },
  {
    q: 'Does the London 90-day rule apply to serviced accommodation?',
    a: 'The 90-day cap applies to stays under 90 nights on entire properties. Serviced-accommodation bookings of 90 nights or more sit outside the rule entirely, which is one reason the longer-stay segment works so well in compliance-sensitive boroughs like Westminster and RBKC. For shorter SA stays we count nights against the cap the same as any short-let, and we structure each property’s calendar to stay compliant year-round.',
  },
  {
    q: 'Who pays the bills and council tax?',
    a: 'On our serviced-accommodation product we take responsibility for utilities, council tax, internet, cleaning and consumables, so the guest sees an all-in monthly figure and you see a single net payout. You retain ownership, the mortgage and building insurance, the same as any short-let-management arrangement.',
  },
  {
    q: 'Can I block out personal use of my property?',
    a: 'Yes. You retain full calendar control through your owner dashboard. Block dates for your own stays or family use; we work around them. The longer typical stay length on SA means we plan calendars a few months in advance, so personal-use dates land best when flagged early.',
  },
  {
    q: 'What is the contract term with Taj Cribs?',
    a: 'Serviced-accommodation management runs on the same rolling management agreement as our short-let product, with no long lock-in. If guaranteed-rent certainty suits you better than the management model, we also offer 1–5 year corporate leases — request a free valuation and we will model both for your property.',
  },
  {
    q: 'How do payouts work?',
    a: 'A single net payment lands in your account once a month, with a clear statement showing the gross bookings, our management fee, any uncovered costs and your balance. No chasing, no surprises, and the same dashboard view as our short-let-management owners.',
  },
]
