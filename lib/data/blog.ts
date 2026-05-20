export type BlogCategory =
  | 'Regulations'
  | 'Tax & Finance'
  | 'Market Insights'
  | 'Landlord Guides'

export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'quote'; text: string }
  | { type: 'cta'; headline: string; body: string; href: string; label: string }
  | { type: 'table'; headers: string[]; rows: string[][] }

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: BlogCategory
  date: string         // ISO
  readTime: string
  author: string
  heroImage: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  body: BlogBlock[]
}

const TEAM = 'Taj Cribs Team'

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'renters-rights-act-2026-london-landlords',
    title: "The Renters' Rights Act 2026: What Every London Landlord Needs to Know",
    excerpt:
      "Section 21 is gone, fixed-term ASTs are gone, and there's a national landlord database on the way. Here's the practical playbook for prime London landlords from 1 May 2026.",
    category: 'Regulations',
    date: '2026-04-22',
    readTime: '7 min read',
    author: TEAM,
    heroImage:
      'https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?w=1600&q=80',
    metaTitle: "Renters' Rights Act 2026: The London Landlord's Practical Guide",
    metaDescription:
      "The Renters' Rights Act 2026 is the biggest shake-up of UK lettings in 30 years. Section 21, fixed-term ASTs, the landlord database — what it means for Central London landlords.",
    keywords: [
      'renters rights act landlord london',
      'section 21 abolished london',
      'no fault eviction ban',
      'landlord database 2026',
    ],
    body: [
      {
        type: 'p',
        text:
          "After eight years of consultation, two bills, three Prime Ministers and a string of delayed deadlines, the Renters' Rights Act comes into force on 1 May 2026. It is the most significant rewrite of the private rental sector in a generation — and for Central London landlords, the practical implications are larger than the headlines suggest.",
      },
      {
        type: 'p',
        text:
          "We've spent the last six months helping our clients prepare. This guide is the short, plain-English version of what every Marylebone, Kensington, Mayfair, Pimlico and Chelsea landlord needs to understand before the Act takes effect — and what to actually do about it.",
      },
      { type: 'h2', text: 'The four changes that matter most' },
      {
        type: 'h3',
        text: '1. Section 21 no-fault evictions are abolished',
      },
      {
        type: 'p',
        text:
          "From 1 May 2026, landlords can no longer end a tenancy without providing a reason. The 'two months and out' route is gone. Possession will only be available under specific Section 8 grounds — sale of the property, landlord moving back in, persistent rent arrears, anti-social behaviour, or major refurbishment. Each ground carries a longer notice period (typically four months) and the burden of proof sits with the landlord at court.",
      },
      {
        type: 'h3',
        text: '2. Fixed-term ASTs are replaced with periodic tenancies',
      },
      {
        type: 'p',
        text:
          "Every assured shorthold tenancy will automatically become a rolling periodic tenancy. Tenants can give two months' notice to leave at any point, including the day they move in. The 12-month or 24-month fixed term — the structure most London landlords have relied on for decades — no longer legally exists.",
      },
      {
        type: 'h3',
        text: '3. A ban on rental bidding and pre-agreed annual increases',
      },
      {
        type: 'p',
        text:
          "Landlords and agents must advertise an asking rent and cannot accept higher offers. Rent reviews are limited to once a year, must follow a statutory notice procedure, and are challengeable at the First-tier Tribunal. The 'best and final offers' culture that dominated the 2022-2024 London market is, in practice, illegal.",
      },
      {
        type: 'h3',
        text: '4. A national landlord database and Decent Homes Standard',
      },
      {
        type: 'p',
        text:
          "Every landlord must register on a national database — searchable by tenants — and every rental property must meet a statutory Decent Homes Standard covering damp, heating, electrical safety, structural condition and disrepair. Enforcement powers sit with local authorities, with civil penalties up to £40,000 per breach.",
      },
      { type: 'h2', text: 'What this means in practice for London landlords' },
      {
        type: 'p',
        text:
          "On paper, the changes apply uniformly. In practice, the London market is uniquely exposed for three reasons: average tenancies are short (most blue-chip ASTs are 12 months), property values are high (so a two-month void costs more), and the corporate-let market the city relies on doesn't fit neatly into the new framework.",
      },
      {
        type: 'ul',
        items: [
          'Voids are now harder to control. A tenant can give notice on day one, with no fixed term to fall back on. Re-letting in prime Central London takes 3–6 weeks even in a strong market.',
          'Yields tighten. Annual rent increases are capped and challengeable. The 7-12% uplifts seen in W1 and SW3 between 2022 and 2024 will not be repeatable.',
          'Compliance costs rise. The Decent Homes Standard for older period buildings — common across Marylebone and Pimlico — will trigger meaningful capital expenditure for many owners.',
          "Section 21 alternatives are still untested. The court system is already backlogged. Section 8 possession routes that 'should' take 4 months will, in practice, take longer.",
        ],
      },
      { type: 'h2', text: 'Why many landlords are rethinking long-term ASTs' },
      {
        type: 'p',
        text:
          "We are seeing a clear pattern across our client base. Landlords with single high-value units in W1, W8 and SW3 are increasingly questioning whether the AST structure still works for them at all. The combination of capped rent reviews, removed Section 21, and a longer-route eviction process changes the risk profile fundamentally.",
      },
      {
        type: 'p',
        text:
          "The Act does not apply to all types of letting arrangement. Two models that sit outside the assured shorthold framework — corporate lets and short-let / serviced accommodation — are unaffected in the same way:",
      },
      {
        type: 'ul',
        items: [
          'Corporate lets (where a company is the tenant) operate under a different legal regime and are not classified as ASTs. This is the legal basis of our guaranteed rent product.',
          "Short-let / serviced accommodation (stays under 90 days) is not regulated by the Act either. London's existing 90-day rule for entire-home short-lets still applies.",
        ],
      },
      {
        type: 'p',
        text:
          "This is why we are seeing increased enquiries about guaranteed rent and short-let management. Neither model is a workaround — both are legitimate alternative letting structures that have always existed. The Act simply makes them relatively more attractive for landlords whose primary concern is income certainty and operational control.",
      },
      { type: 'h2', text: 'A 5-step checklist for landlords this quarter' },
      {
        type: 'ol',
        items: [
          'Audit your tenancies. Note expiry dates of any current fixed-term AST that runs past 1 May 2026 — they will convert automatically.',
          'Review your property against the Decent Homes Standard. Period buildings typically have damp, ventilation or electrical issues that need investment.',
          "Decide your model. AST, corporate-let / guaranteed rent, or short-let? Each has a different risk-return profile.",
          'Update your insurance. Many policies are written against AST tenancies and need updating for periodic or alternative letting structures.',
          'Get a second opinion. Speak to an operator who manages all three models. A 30-minute conversation now will save you a year of indecision.',
        ],
      },
      {
        type: 'cta',
        headline: "Not sure which model is right post-Act?",
        body:
          "We manage AST stock, corporate lets and short-lets across Central London. A 20-minute call with one of our team will give you a clear, honest read on what works best for your property and your tolerance for risk.",
        href: '/contact',
        label: 'Book a 20-minute conversation',
      },
      { type: 'h2', text: 'Final word' },
      {
        type: 'p',
        text:
          "The Renters' Rights Act is well-intended legislation responding to genuine problems. For most London landlords, the changes are absorbable — but only with planning. Landlords who treat 1 May 2026 as a 'wait and see' date are the ones likely to be caught out.",
      },
      {
        type: 'p',
        text:
          'Take the next six weeks to make decisions. The Act is happening regardless of how prepared you are for it.',
      },
      {
        type: 'p',
        text:
          'This article is provided as general guidance only and does not constitute legal advice. Landlords should consult a qualified solicitor for advice specific to their circumstances.',
      },
    ],
  },
  {
    slug: 'airbnb-tax-guide-london-landlords-2025',
    title: 'Airbnb & Short-Let Tax Guide for London Landlords 2025/26',
    excerpt:
      "Every short-let pound is taxable income. Here's the plain-English guide to declaring, claiming and structuring your Airbnb earnings in London — including the FHL changes, the £90k VAT threshold, and what HMRC actually checks.",
    category: 'Tax & Finance',
    date: '2026-02-14',
    readTime: '8 min read',
    author: TEAM,
    heroImage:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80',
    metaTitle: 'Airbnb Tax UK 2025/26 — London Landlord Guide',
    metaDescription:
      'A practical guide to short-let and Airbnb tax in London for the 2025/26 tax year. Income tax, Rent-a-Room, FHL changes, VAT registration, allowable expenses.',
    keywords: [
      'airbnb tax london landlord',
      'short let tax uk',
      'furnished holiday let tax 2025',
      'rent a room scheme airbnb',
    ],
    body: [
      {
        type: 'p',
        text:
          "Every conversation we have with a new landlord eventually arrives at the same question: what about the tax? It is, sensibly, what most people care about — because short-let income looks different to standard rental income in three meaningful ways: it can be higher, it is more variable, and it is taxed under rules that have changed twice in the last 18 months.",
      },
      {
        type: 'p',
        text:
          "This is our 2025/26 plain-English summary for Central London landlords. It is not a substitute for a qualified accountant. It is the version we wish every landlord had read before they called us.",
      },
      { type: 'h2', text: 'Do I need to declare Airbnb income?' },
      {
        type: 'p',
        text:
          "Yes. Always. Income from short-letting your property — through Airbnb, Booking.com, Vrbo, Expedia or direct — is taxable. HMRC has had a data-sharing agreement with Airbnb since 2020 and, since 2024, with the other major platforms too. They know what you earned. The only question is whether you declared it.",
      },
      {
        type: 'p',
        text:
          'There are two narrow exceptions:',
      },
      {
        type: 'ul',
        items: [
          'The Rent-a-Room Scheme: if you let a furnished room in your own main residence, the first £7,500 of income per tax year is tax-free.',
          'The £1,000 trading allowance: if total miscellaneous income is below £1,000 in a year, no declaration is required.',
        ],
      },
      {
        type: 'p',
        text:
          'Anyone earning more than £1,000 from short-letting a property they do not live in needs to declare it via Self Assessment.',
      },
      { type: 'h2', text: 'How short-let income is taxed' },
      {
        type: 'p',
        text:
          'Income from short-letting a property is treated as rental income for tax purposes — Property Income, on page UK Property (SA105) of your Self Assessment. It is taxed at your marginal rate: 20%, 40% or 45%. There is no separate "Airbnb tax band".',
      },
      {
        type: 'p',
        text:
          'Allowable expenses are deducted from gross income to arrive at the taxable profit. The main ones for a Central London short-let:',
      },
      {
        type: 'ul',
        items: [
          'Management fees (such as our 18% short-let management fee)',
          'Platform fees taken by Airbnb / Booking.com',
          'Cleaning costs (per turnaround and deep cleans)',
          'Utility bills paid by the landlord',
          'Linen, consumables and welcome packs',
          'Property insurance (specialist short-let policies)',
          'Maintenance and minor repairs',
          'Mortgage interest (subject to the residential restriction — 20% tax credit only)',
        ],
      },
      { type: 'h2', text: 'The Furnished Holiday Let regime — and its 2025 abolition' },
      {
        type: 'p',
        text:
          'Until 5 April 2025, properties meeting the Furnished Holiday Let (FHL) criteria enjoyed three meaningful tax advantages: mortgage interest was fully deductible, capital allowances on furniture were claimable, and disposals qualified for Business Asset Disposal Relief.',
      },
      {
        type: 'p',
        text:
          'As of 6 April 2025, the FHL regime no longer exists. Short-let properties are now taxed in the same way as standard rental properties — meaning the residential mortgage interest restriction applies, and FHL-specific reliefs are no longer available. This is a meaningful change and one that some landlords have not yet absorbed.',
      },
      {
        type: 'p',
        text:
          'In practical terms: if you bought a Central London short-let on a high-leverage residential mortgage and were relying on full interest deductibility, your effective tax position is now meaningfully worse. Many of our clients have moved their financing into corporate structures (limited company ownership) since the announcement.',
      },
      { type: 'h2', text: 'The £90,000 VAT threshold — a London-specific risk' },
      {
        type: 'p',
        text:
          'Short-let income, unlike long-term rental income, is not exempt from VAT. It is a taxable supply. Once gross short-let income exceeds £90,000 in any rolling 12-month period, the landlord (or their limited company) must register for VAT and charge 20% on every booking.',
      },
      {
        type: 'p',
        text:
          'In Mayfair, Marylebone and Knightsbridge — where two-bed apartments routinely generate £150,000+ in gross short-let income — the VAT threshold is a real consideration. The Tour Operators Margin Scheme (TOMS) is available to some operators to mitigate this but it is structurally complex.',
      },
      { type: 'h2', text: 'Council tax vs business rates' },
      {
        type: 'p',
        text:
          'A property let on a short-let basis can in some circumstances be re-classified from Council Tax to Business Rates, provided certain occupancy thresholds are met (140 days available, 70 days actually let). For some smaller properties, Small Business Rates Relief means an effective rate of zero — meaningfully cheaper than Council Tax. The 2024 rules made this harder to achieve in practice; HMRC and the VOA now scrutinise applications closely.',
      },
      { type: 'h2', text: 'The five biggest mistakes we see' },
      {
        type: 'ol',
        items: [
          "Not declaring at all. HMRC's data is comprehensive. Penalties for non-disclosure can reach 100% of the unpaid tax, plus interest.",
          'Treating Airbnb cleaning fees as non-income. Cleaning fees collected from guests are gross income. The cost of cleaning is a separate expense to deduct.',
          'Forgetting to deduct platform fees and management fees. Airbnb takes ~15% before payout; managers take 15-20% on top. Both are fully deductible.',
          'Mishandling the 90-day rule. Exceeding 90 days without planning permission can technically reclassify the property and the income for tax purposes.',
          'Assuming FHL still applies. It does not — for any year ending after 5 April 2025.',
        ],
      },
      {
        type: 'cta',
        headline: 'Earning more matters less if you keep less.',
        body:
          'When we onboard a property, we structure it for tax-efficiency from day one — accurate cleaning fee accounting, full expense tracking, correct payment routing into your preferred entity. Speak to us about how we set this up.',
        href: '/contact',
        label: 'Get a free property review',
      },
      { type: 'h2', text: 'Final word' },
      {
        type: 'p',
        text:
          'The tax position on Central London short-lets has tightened meaningfully in the last 18 months. It is still very profitable. But the gap between landlords who structure their tax well and those who do not has widened from a few percent to genuine double-digit differences in net return.',
      },
      {
        type: 'p',
        text:
          'This article is provided as general information only. Tax law is complex and individual circumstances vary. Landlords should consult a qualified accountant or tax adviser before acting.',
      },
    ],
  },
  {
    slug: 'guaranteed-rent-vs-airbnb-management-london',
    title:
      'Guaranteed Rent vs Short-Let Management: Which is Right for Your London Property?',
    excerpt:
      "Two legitimate models. Two very different risk profiles. Here's how to decide — without either of them being oversold.",
    category: 'Landlord Guides',
    date: '2026-03-08',
    readTime: '6 min read',
    author: TEAM,
    heroImage:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    metaTitle:
      'Guaranteed Rent vs Airbnb Management — London Landlord Decision Guide',
    metaDescription:
      'A balanced comparison of guaranteed rent and short-let management for Central London landlords. Risk, return, contract length and operational involvement — explained without the sales pitch.',
    keywords: [
      'guaranteed rent vs airbnb management london',
      'short let vs guaranteed rent',
      'london landlord options',
    ],
    body: [
      {
        type: 'p',
        text:
          'We offer both. We genuinely have no preference about which one a landlord chooses, because they suit different people for different reasons. The version of this article we want you to read is the honest one — not the version that tries to talk you into the model that pays us more.',
      },
      {
        type: 'p',
        text:
          'Here is how to think about it.',
      },
      { type: 'h2', text: 'The short version' },
      {
        type: 'ul',
        items: [
          'Guaranteed rent: full market rent, fixed every month, zero involvement, one-to-five-year term. Lower upside than short-let but absolute certainty.',
          'Short-let management: higher gross income, variable month-to-month, 18% management fee, rolling agreement. Higher upside in exchange for variability.',
        ],
      },
      { type: 'h2', text: 'How guaranteed rent works' },
      {
        type: 'p',
        text:
          'We sign a corporate lease with you for any term between 1 and 5 years and pay you the full market rental value of your property as a fixed monthly amount, on the same date every month, for the duration of the agreement. We take responsibility for utilities, council tax, internet, cleaning, maintenance under £250 per incident and consumables. You retain ownership, building insurance and the mortgage.',
      },
      {
        type: 'p',
        text:
          'During the term, we operate the property as a short-let. Some months we do better than market rent; some months we do worse. That variance is entirely our problem, not yours — our margin comes from optimising short-let upside, not from undercutting your rent. You receive the full market figure every month, regardless of occupancy.',
      },
      { type: 'h2', text: 'Who guaranteed rent suits' },
      {
        type: 'ul',
        items: [
          "Overseas owners who cannot easily attend to a UK property",
          'Pension-style portfolio holders who want predictable monthly income',
          "Block and portfolio owners who don't want to operate multiple short-lets in parallel",
          'Landlords who prioritise certainty above all else',
          'Anyone whose mortgage covenants require fixed contracted income',
        ],
      },
      { type: 'h2', text: 'How short-let management works' },
      {
        type: 'p',
        text:
          'We list your property across Airbnb, Booking.com, Vrbo, Expedia and direct channels. We operate dynamic pricing daily, manage all guest communication, organise housekeeping, and coordinate maintenance. You receive net rental income — gross bookings minus platform fees, our 18% management fee, and any cleaning costs not recovered from the guest — paid monthly with a full reconciliation.',
      },
      {
        type: 'p',
        text:
          'Your income varies by month — typically by 15-25% from peak to trough — depending on calendar, demand and your property type.',
      },
      { type: 'h2', text: 'Who short-let management suits' },
      {
        type: 'ul',
        items: [
          'Owners with a single premium property who want to maximise return',
          'Landlords who can absorb monthly variance without it affecting their lifestyle',
          'Properties in prime tourist or corporate-let postcodes (W1, W8, SW1, SW3, W11)',
          'Owners who block dates for personal use periodically',
          'Anyone for whom the upside of 2-3x AST yields justifies the variability',
        ],
      },
      { type: 'h2', text: 'Side-by-side comparison' },
      {
        type: 'table',
        headers: ['', 'Guaranteed Rent', 'Short-Let Management'],
        rows: [
          ['Rent received', 'Full market rent (guaranteed)', 'Variable — typically 2-3x AST gross'],
          ['Monthly income', 'Fixed', 'Variable'],
          ['Income certainty', 'Total', 'Probabilistic'],
          ['Income potential', 'Market rent, certain', 'Higher upside, variable'],
          ['Operational involvement', 'Zero', 'Light (calendar control)'],
          ['Fees', 'None to you', '18% + VAT'],
          ['Contract length', '1–5 years', 'Rolling, no lock-in'],
          ['Personal use of property', 'Restricted', 'Free to block dates'],
          ['Maintenance under £250', 'Covered by us', 'Coordinated, charged to you'],
        ],
      },
      { type: 'h2', text: 'How to decide — three honest questions' },
      {
        type: 'h3',
        text: '1. How much does monthly variance bother you?',
      },
      {
        type: 'p',
        text:
          'If a £2,000 swing in income from May to November affects how you sleep at night, guaranteed rent is genuinely a better product for you, even though the headline number is lower. Income certainty has real value and is worth paying for.',
      },
      {
        type: 'h3',
        text: '2. Do you ever want to use the property yourself?',
      },
      {
        type: 'p',
        text:
          "Guaranteed rent is a full corporate lease — we use the property. If you want to spend three weeks a year in your Mayfair apartment, short-let management is the only model that allows that. You block the dates in your owner dashboard; we don't book over them.",
      },
      {
        type: 'h3',
        text: '3. Is this one property or part of a portfolio?',
      },
      {
        type: 'p',
        text:
          'For single premium properties, short-let management nearly always produces a better outcome. For multi-unit blocks or portfolios where the operational overhead of coordinating across units would be a problem, guaranteed rent is the structurally right answer.',
      },
      {
        type: 'cta',
        headline: "Still on the fence? That's normal.",
        body:
          "We've had this conversation a few thousand times. A 20-minute call with one of our team will get you to a confident decision — and we genuinely don't mind which way it goes.",
        href: '/contact',
        label: 'Book a 20-minute conversation',
      },
      { type: 'h2', text: 'One thing we will not do' },
      {
        type: 'p',
        text:
          'Tell you that one of these is universally better than the other. Anyone who does is selling. The right answer depends on your property, your finances, your relationship to risk and whether you want to use the place yourself. Get a recommendation from someone who offers both.',
      },
    ],
  },
  {
    slug: 'short-let-regulations-london-90-day-rule',
    title: 'Short-Let Regulations in London: The 90-Day Rule Explained',
    excerpt:
      "Why most London short-lets cap at 90 days, what the exceptions are, and how mid-term lets keep your calendar working past that limit — without falling foul of the regulator.",
    category: 'Regulations',
    date: '2026-01-19',
    readTime: '6 min read',
    author: TEAM,
    heroImage:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600&q=80',
    metaTitle: 'The 90-Day Rule for Airbnb London — Complete Compliance Guide',
    metaDescription:
      'The 90-day rule for short-lets in Greater London explained: how it works, which properties it applies to, exceptions, and how to operate compliantly beyond 90 days.',
    keywords: [
      '90 day rule airbnb london',
      'short let rules london',
      'london airbnb regulations',
      'mid term let london',
    ],
    body: [
      {
        type: 'p',
        text:
          "If you have ever asked us 'can my London property be on Airbnb all year?' and we have said 'well, sort of, but no' — this article is the longer answer.",
      },
      {
        type: 'p',
        text:
          'London is the only city in the United Kingdom with its own statutory cap on short-letting: the 90-day rule. Every landlord operating an entire-home Airbnb in Greater London needs to understand it, comply with it, and have a plan for what happens after day 91.',
      },
      { type: 'h2', text: 'What is the 90-day rule?' },
      {
        type: 'p',
        text:
          "Introduced in January 2017 via amendments to Section 25 of the Greater London Council (General Powers) Act 1973, the 90-day rule says that an entire residential property in Greater London can only be let on a short-term basis (less than 90 consecutive nights) for a maximum of 90 nights per calendar year — without planning permission for a change of use.",
      },
      {
        type: 'p',
        text:
          'In plain English: if you list a whole flat or house on Airbnb in any of the 32 London boroughs (plus the City of London), the platform will automatically cap your calendar at 90 nights of short-stay bookings between 1 January and 31 December.',
      },
      { type: 'h2', text: 'Which properties does it apply to?' },
      {
        type: 'ul',
        items: [
          'Entire-home listings within the Greater London boundary',
          'Residential properties (Class C3) without specific planning consent for short-let use',
          'All major short-let platforms — Airbnb, Booking.com, Vrbo and Expedia all enforce the cap',
        ],
      },
      {
        type: 'p',
        text:
          'It does not apply to:',
      },
      {
        type: 'ul',
        items: [
          "Properties with planning permission for short-let (planning class Sui Generis or specific consent)",
          'Properties classified as serviced apartments under a different use class',
          'Hotels, B&Bs, and aparthotels operating under hospitality licences',
          'Rentals of 90 consecutive nights or more (mid-term lets — see below)',
          'Properties outside the Greater London boundary',
        ],
      },
      { type: 'h2', text: 'How platforms enforce the cap' },
      {
        type: 'p',
        text:
          'Airbnb introduced auto-capping in 2017 — when your listing reaches 90 nights of stays under 90 nights long, the platform blocks the calendar from further short bookings for the rest of the year. Booking.com applies the same logic. The cap is reset every 1 January.',
      },
      {
        type: 'p',
        text:
          'This is automatic. You cannot turn it off through the platform interface. Hosts who attempt to operate across multiple platforms to circumvent the cap risk being detected by both the platforms (they share data) and by HMRC, the local authority and trading standards.',
      },
      { type: 'h2', text: 'Exceptions: when you can exceed 90 nights' },
      {
        type: 'p',
        text:
          'There are three legal routes to operating beyond 90 nights:',
      },
      {
        type: 'ol',
        items: [
          'Apply to your local borough for a change-of-use planning permission. This is rare to obtain — outcomes vary borough to borough, and many (notably Westminster) are very restrictive.',
          "Reclassify the property as serviced accommodation. This involves a different planning route, an operating model that resembles aparthotel rather than residential, and specific compliance with fire and health regulations.",
          'Operate mid-term lets (90+ nights per stay) for any nights beyond the 90-day cap.',
        ],
      },
      { type: 'h2', text: 'What happens if you exceed 90 days without permission?' },
      {
        type: 'p',
        text:
          'Local councils can issue enforcement notices, fines of up to £20,000, and require the property to revert to permitted residential use. Some boroughs (Westminster and Kensington & Chelsea in particular) have dedicated short-let enforcement teams who actively monitor platforms and respond to neighbour complaints.',
      },
      {
        type: 'p',
        text:
          'Beyond the borough, you also risk: invalidating your insurance, breaching your mortgage terms, and triggering HMRC re-classification of the property for tax purposes.',
      },
      { type: 'h2', text: 'The mid-term let route — what most operators actually do' },
      {
        type: 'p',
        text:
          'The cleanest way to make a London short-let property work all year is to combine short stays (under 90 days, up to the 90-night cap) with mid-term lets (single stays of 90 nights or more). A 90-night stay is not a short-let by definition and does not count against the cap.',
      },
      {
        type: 'p',
        text:
          'Practical model:',
      },
      {
        type: 'ul',
        items: [
          'Q1: short-stay holiday and corporate guests (~30 nights of cap used)',
          'Q2: short-stays around the Chelsea Flower Show, Wimbledon, Royal Ascot (~30 nights of cap)',
          'Q3-Q4: cap nearly used, switch to mid-term corporate lets (3-month minimum stay)',
        ],
      },
      {
        type: 'p',
        text:
          'Done correctly, mid-term lets deliver almost as much gross income per night as short-let, with lower turnover cost, lower wear and tear, and full compliance with the cap. Our W8 Kensington Gate portfolio operates this exact model.',
      },
      {
        type: 'cta',
        headline: "Compliant Airbnb management — without the 90-day headache.",
        body:
          "We operate every London short-let we manage to the 90-day cap, then switch to mid-term lets seamlessly to keep the calendar full. Full compliance, full year of bookings.",
        href: '/property-management',
        label: 'See how it works',
      },
      { type: 'h2', text: 'Final word' },
      {
        type: 'p',
        text:
          "The 90-day rule is the most misunderstood piece of legislation we encounter. Landlords assume it makes Central London short-letting unprofitable — it doesn't. It makes naive short-letting unprofitable. A professionally-operated calendar that mixes short and mid-term lets across the right windows delivers materially better returns than a standard AST, in compliance, every time.",
      },
      {
        type: 'p',
        text:
          'This article is provided as general information only. Planning law is borough-specific and complex. Landlords should consult a qualified planning solicitor before acting.',
      },
    ],
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | null {
  return BLOG_POSTS.find((p) => p.slug === slug) ?? null
}

export function getRelatedPosts(currentSlug: string, n = 3): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.slug !== currentSlug).slice(0, n)
}

export function getAllCategories(): BlogCategory[] {
  const set = new Set<BlogCategory>()
  for (const p of BLOG_POSTS) set.add(p.category)
  return Array.from(set)
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug)
}
