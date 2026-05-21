export type BlogCategory =
  | 'Regulations'
  | 'Tax & Finance'
  | 'Market Insights'
  | 'Landlord Guides'
  | 'Guaranteed Rent'
  | 'Short-Let Management'
  | 'Area Guides'

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
  /**
   * When true, the post is excluded from the /blog index list and the
   * homepage "Insights" preview. The article page itself (/blog/[slug])
   * remains live, so direct links and the sitemap still work.
   * Flip to false (or remove the line) to bring an article back to the index.
   */
  hiddenFromIndex?: boolean
}

const TEAM = 'Taj Cribs Team'

// Standard closing paragraph every post ends with. Reused via spread to
// keep tone identical across the publishing schedule.
const CLOSING_PARA: BlogBlock = {
  type: 'p',
  text: 'Have a question about your property? Speak to the [Taj Cribs team](/contact). We manage properties across the whole of Central London and offer free valuations with no obligation.',
}

export const BLOG_POSTS: BlogPost[] = [
  // ─────────────────────────────────────────────────────────────────────
  // POST 1 — Tue 26 May 2026 — Regulations
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'renters-rights-act-2026-london-landlords',
    title: 'The Renters Rights Act 2026: What Every London Landlord Needs to Know Right Now',
    excerpt:
      "Section 21 is gone, fixed-term ASTs are gone, and there's a national landlord database on the way. The practical playbook for prime London landlords from 1 May 2026.",
    category: 'Regulations',
    date: '2026-05-26',
    readTime: '6 min read',
    author: TEAM,
    heroImage: 'https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?w=1600&q=80',
    metaTitle: 'Renters Rights Act 2026: What London Landlords Need to Know',
    metaDescription:
      'What the Renters Rights Act 2026 means for London landlords. Section 21 abolished, fixed-term ASTs gone, the landlord database. Plus the alternatives that sit outside the new rules.',
    keywords: [
      'renters rights act 2026 london landlords',
      'section 21 abolished',
      'fixed term ast changes',
      'landlord database london',
    ],
    body: [
      { type: 'p', text: "If you're a London landlord, the Renters Rights Act 2026 is the biggest legal change you'll face this decade. It comes into force on 1 May 2026 and rewrites large parts of how private renting works in England." },
      { type: 'p', text: "The headlines have been everywhere. The detail has been less well covered. So here's the plain-English version of what's actually changing. And what your options are if the new rules don't suit your property." },

      { type: 'h2', text: "What's actually changing on 1 May 2026" },
      { type: 'p', text: "Four changes matter more than the rest. Get your head around these and you'll understand 90% of the Act." },

      { type: 'h3', text: '1. Section 21 no-fault eviction is gone' },
      { type: 'p', text: 'From 1 May 2026, you can no longer end a tenancy without a specified reason. Possession will only be available under defined Section 8 grounds. Sale, moving back in, persistent arrears, anti-social behaviour, or major refurbishment.' },
      { type: 'p', text: 'Each ground carries a longer notice period (typically four months), and the court will look at the evidence. The two-months-and-out shortcut that landlords have relied on for 35 years has ended.' },

      { type: 'h3', text: '2. Fixed-term ASTs become periodic by default' },
      { type: 'p', text: 'Every assured shorthold tenancy will automatically be a rolling periodic tenancy. Tenants can give two months notice to leave at any point. Including the day they move in.' },
      { type: 'p', text: "If you currently have a 12-month or 24-month AST in place, it'll convert. There's no need to issue new paperwork; the law makes the change for you." },

      { type: 'h3', text: '3. Rental bidding is outlawed' },
      { type: 'p', text: 'You must advertise an asking rent and accept offers at that level. Bidding wars are gone, and annual rent reviews are capped and challengeable at the First-tier Tribunal.' },

      { type: 'h3', text: '4. A national landlord database and Decent Homes Standard' },
      { type: 'p', text: 'Every landlord must register on a national database that tenants can search. Every rental property must meet a statutory Decent Homes Standard covering damp, heating, electrical safety, structural condition and disrepair.' },
      { type: 'p', text: 'Local authorities will enforce, with civil penalties up to £40,000 per breach. Period buildings across Marylebone, Pimlico and Kensington will need careful audits.' },

      { type: 'h2', text: 'What this means in practice for London landlords' },
      { type: 'p', text: "On paper, the changes apply uniformly. In practice, London is uniquely exposed for three reasons. Properties are high value (so a void costs more), tenancies are short (most blue-chip ASTs are 12 months), and the corporate-let market the city relies on doesn't slot neatly into the new framework." },
      {
        type: 'ul',
        items: [
          'Voids are harder to control. A tenant can give notice on day one. Re-letting in prime Central London takes 3 to 6 weeks even in a strong market.',
          'Yields tighten. Annual rent increases are capped and challengeable. The 7-12% uplifts seen in W1 and SW3 between 2022 and 2024 will not be repeatable.',
          'Compliance costs rise. The Decent Homes Standard for older period buildings will trigger meaningful capital expenditure for some owners.',
          'Section 21 alternatives are untested at scale. Section 8 routes will, in practice, take longer than the legislation suggests.',
        ],
      },

      {
        type: 'cta',
        headline: 'Not sure how the Act affects your property?',
        body:
          "We've spent the last six months helping our clients prepare. A free 20-minute call with the Taj Cribs team will give you a clear, honest read on what works best for your property (AST, guaranteed rent or short-let) and your tolerance for risk.",
        href: '/contact',
        label: 'Book a free 20-minute call',
      },

      { type: 'h2', text: 'Why short-let and guaranteed rent sit outside the new rules' },
      { type: 'p', text: "Here's the part most landlords miss. The Act regulates [assured shorthold tenancies](/blog/ast-tenancy-agreement-guide-landlords). It doesn't regulate every type of letting." },
      { type: 'p', text: 'Two models that already exist sit outside the AST framework, and both give Central London landlords more flexibility under the new rules.' },

      { type: 'h3', text: 'Corporate lets (guaranteed rent)' },
      { type: 'p', text: 'When a company takes the lease (not an individual), different legislation applies. This is the legal basis of our [guaranteed rent product](/guaranteed-rent). You sign a corporate lease for 1 to 5 years; we pay you the full market rental value every month, regardless of occupancy.' },
      { type: 'p', text: "Section 21 doesn't apply. Periodic conversion doesn't apply. Rent bidding rules don't apply. The Decent Homes Standard does still apply, but maintenance is our responsibility." },

      { type: 'h3', text: 'Short-let / serviced accommodation' },
      { type: 'p', text: 'Stays under 90 nights are regulated by separate planning and platform rules, not the Renters Rights Act. London still has its [90-day rule](/blog/90-day-rule-airbnb-london), which sets the annual cap, but the operational model is fundamentally different.' },
      { type: 'p', text: "If you're considering Airbnb-style letting, the new rules have made it relatively more attractive. Not because they regulate short-let, but because they tighten everything around traditional ASTs." },

      { type: 'h2', text: 'A 5-step checklist for landlords this quarter' },
      {
        type: 'ol',
        items: [
          'Audit your tenancies. Note expiry dates of any fixed-term AST that runs past 1 May 2026. They will convert automatically.',
          'Review your property against the Decent Homes Standard. Period buildings typically have damp, ventilation or electrical issues that need investment.',
          'Decide your model. AST, [guaranteed rent](/guaranteed-rent) or [short-let management](/property-management). Each has a different risk-return profile.',
          'Update your insurance. Many policies are written against AST tenancies and need updating for periodic or alternative letting structures.',
          'Get a second opinion. We offer free reviews. See [our areas of operation](/areas) and book a call.',
        ],
      },

      CLOSING_PARA,

      {
        type: 'cta',
        headline: 'Want guaranteed monthly rent and no Section 21 worries?',
        body:
          'Our guaranteed rent scheme pays you the full market rental value on the same date every month, for 1 to 5 years, with zero involvement from you. Free valuation in 24 hours.',
        href: '/guaranteed-rent',
        label: 'Get a guaranteed rent offer',
      },

      { type: 'p', text: 'This article is general guidance only and does not constitute legal advice. Landlords should consult a qualified solicitor for advice specific to their property.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // POST 2 — Thu 28 May 2026 — Guaranteed Rent
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'guaranteed-rent-london-guide',
    title: 'Guaranteed Rent in London: The Complete Landlord Guide for 2026',
    excerpt:
      'What guaranteed rent actually is, how it works, who it suits and the questions to ask before signing. The 2026 guide for Central London landlords.',
    category: 'Guaranteed Rent',
    date: '2026-05-28',
    readTime: '7 min read',
    author: TEAM,
    heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&q=80',
    metaTitle: 'Guaranteed Rent London. The Complete Landlord Guide for 2026',
    metaDescription:
      'What guaranteed rent is, how it works, who it suits and what to look for in a Central London provider. Full guide for landlords with free valuation.',
    keywords: [
      'guaranteed rent london landlord',
      'guaranteed rent scheme',
      'corporate let london',
      'rent to rent guaranteed',
    ],
    body: [
      { type: 'p', text: "Guaranteed rent has gone from niche to mainstream in the last 24 months. We field calls about it every week. From landlords who've heard the term and want to understand what it actually means." },
      { type: 'p', text: "This is the complete 2026 guide. What guaranteed rent is. How it works in real life. Who it suits (and who it doesn't). And the questions to ask before signing anything." },

      { type: 'h2', text: 'What guaranteed rent actually is' },
      { type: 'p', text: "A guaranteed rent scheme is a contract where a property management company. Like Taj Cribs. Leases your property directly. You receive a fixed monthly payment for the full term of the lease. You don't deal with tenants, voids, maintenance, or bookings." },
      { type: 'p', text: 'The legal structure is a corporate let. We are the tenant. The company holds the lease, sub-lets the property as a short-let or serviced apartment, and pays you a guaranteed monthly figure regardless of how the property is performing.' },
      { type: 'p', text: "It's sometimes called rent-to-rent or rent-to-SA. It's been around for decades; it's only the professionalisation of the model that's new." },

      { type: 'h2', text: 'How it works in practice' },
      { type: 'p', text: 'Our process is straightforward. We assess your property, agree a [guaranteed monthly figure](/pricing), and sign a corporate lease for between 1 and 5 years.' },
      { type: 'p', text: 'From the day the lease starts, you receive the same payment on the same date every month. We take responsibility for utilities, council tax, internet, cleaning, maintenance under £250 per incident, and consumables. You retain ownership, the mortgage, and building insurance.' },
      {
        type: 'ul',
        items: [
          'Lease term: typically 1, 3 or 5 years (you choose)',
          'Payment: full market rental value, paid on the same date monthly',
          'Maintenance: we cover everything under £250; you cover capital items',
          'Property condition: returned to you at lease end in agreed condition',
          'Notice: structured so neither side can exit on a whim',
        ],
      },

      { type: 'h2', text: 'Who guaranteed rent suits' },
      { type: 'p', text: 'In our experience managing properties across [Central London](/areas), guaranteed rent works best for a specific kind of owner.' },
      { type: 'p', text: "If you want certainty above all else. Same payment, same date, no surprises. Guaranteed rent is built for you. If you live abroad or simply can't make property your second job, it's the cleanest option on the market." },
      { type: 'p', text: 'Block and portfolio owners benefit most. We already manage a full 14-unit block in [Marylebone](/areas/marylebone) under our scheme; the maths gets stronger the more units you have.' },

      {
        type: 'cta',
        headline: 'Get a guaranteed monthly figure for your property',
        body:
          "Tell us about your property and we'll come back with a guaranteed rent offer within one business day. No fee, no obligation, no pressure. Just an honest figure.",
        href: '/lp/guaranteed-rent',
        label: 'Get your guaranteed offer',
      },

      { type: 'h2', text: 'Five myths worth debunking' },

      { type: 'h3', text: "Myth 1: It's not legal" },
      { type: 'p', text: 'False. Corporate lets are a long-standing structure recognised by HMRC, mortgage lenders and the courts. Done properly, with the right paperwork, they are completely legitimate.' },

      { type: 'h3', text: "Myth 2: You'll be paid below market" },
      { type: 'p', text: 'False (when done by a serious operator). We pay the full market rental value. Our margin comes from optimising short-let upside, not from undercutting your rent. If a provider offers significantly less than market AST rent, walk away.' },

      { type: 'h3', text: 'Myth 3: You lose control of your property' },
      { type: 'p', text: 'False. You retain full ownership. The lease specifies maximum guest numbers, no-party policy, no commercial use, and standards of upkeep. You can inspect with reasonable notice.' },

      { type: 'h3', text: 'Myth 4: It will affect your mortgage' },
      { type: 'p', text: "It can, which is why you must check. Many BTL mortgages require permission for any arrangement that isn't a standard AST. We provide template wording for the conversation with your lender." },

      { type: 'h3', text: 'Myth 5: Guests will trash your property' },
      { type: 'p', text: 'False. Our [Quality Officer inspects the property after every checkout](/property-management). Every single time, no exceptions. Damage above platform deposits is covered by a reserve fund. You pay nothing.' },

      { type: 'h2', text: 'What to look for in a guaranteed rent provider' },
      { type: 'p', text: 'Not all providers are equal. Three things separate the good from the questionable.' },
      {
        type: 'ol',
        items: [
          'Length of operating history. Look for providers with at least 3 years of consistent operation in your borough. And ask for references.',
          "Quality of the contract. The lease should specify payment dates, condition standards, dispute resolution and clear exit terms. If it doesn't, redraft.",
          'Operational quality on the ground. Ask how they handle guest turnover. Cheap providers outsource to gig-economy cleaners; the best run housekeeping in-house. Our [Quality Officer standard](/property-management) is the operational reason our reviews stay 5-star.',
        ],
      },

      { type: 'h2', text: 'How to get started' },
      { type: 'p', text: 'Three steps. Free valuation, fixed offer, contract.' },
      { type: 'p', text: 'Step one: we visit your property (or review photos and details remotely for overseas owners) and confirm a guaranteed monthly figure within 24 hours. Step two: if you accept, we send a lease draft for you and your solicitor to review. Step three: we sign, onboard the property in less than a week, and start paying.' },

      CLOSING_PARA,

      {
        type: 'cta',
        headline: 'Ready to lock in a guaranteed monthly figure?',
        body:
          "Free valuation. 24-hour turnaround. No obligation. We'll tell you exactly what we can guarantee on your Central London property and walk you through the lease line by line.",
        href: '/lp/guaranteed-rent',
        label: 'Start your free valuation',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // POST 3 — Sun 31 May 2026 — Short-Let Management
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'airbnb-management-london-guide',
    title: 'Airbnb Management in London: Everything Landlords Need to Know in 2026',
    excerpt:
      'What full-service Airbnb management actually includes, how dynamic pricing works, and how to tell a quality manager from a cheap one. Without the marketing fluff.',
    category: 'Short-Let Management',
    date: '2026-05-31',
    readTime: '7 min read',
    author: TEAM,
    heroImage: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&q=80',
    metaTitle: "Airbnb Management London 2026. A Landlord's Complete Guide",
    metaDescription:
      'What Airbnb management in London actually includes, what to expect, how dynamic pricing works, and how to spot a quality manager from a cheap one.',
    keywords: [
      'airbnb management london',
      'short let management central london',
      'airbnb property manager',
      'serviced accommodation management',
    ],
    body: [
      { type: 'p', text: 'Ten years ago, Airbnb management in London was a cottage industry. People did it on the side. The properties were often hosted by enthusiastic amateurs and the standards were inconsistent.' },
      { type: 'p', text: 'Today the market has matured. Professional Airbnb management is a real industry with real operating standards, dynamic pricing engines, and 24/7 guest support. But the gap between the best operators and the cheapest has widened. And that gap directly affects your income.' },
      { type: 'p', text: 'This guide explains what full-service [Airbnb management](/property-management) looks like in London in 2026, what to expect financially, and how to pick the right operator for your property.' },

      { type: 'h2', text: 'What full Airbnb management actually includes' },
      { type: 'p', text: "Anyone can list a property on Airbnb. Managing it properly is a different proposition entirely. Here's what a proper full-service offering covers." },
      {
        type: 'ul',
        items: [
          'Professional photography and listing creation',
          'Multi-platform distribution (Airbnb, Booking.com, Vrbo, Expedia and direct)',
          'Dynamic pricing. Recalculated daily based on local demand, events, season and competitor rates',
          'Guest screening, communication and 24/7 in-stay support',
          'In-house housekeeping with a defined checklist and quality control between every stay',
          'Routine property checks, maintenance coordination and emergency response',
          'Monthly owner reports. Gross, net, occupancy, guest reviews, and upcoming calendar',
        ],
      },
      { type: 'p', text: "If a manager isn't doing all of the above, you're paying for incomplete service. Our flat [18% management fee](/pricing) covers every line on that list with no add-ons." },

      { type: 'h2', text: 'How dynamic pricing actually works' },
      { type: 'p', text: 'Dynamic pricing is the single most important technical capability separating a good manager from a bad one. In short, it means setting your nightly rate based on real-time data. Not a fixed monthly figure.' },
      { type: 'p', text: 'A Mayfair 2-bed in mid-August commands a different rate than the same flat in early February. Wimbledon week, the Chelsea Flower Show, party-conference season. All push rates higher. Empty Tuesdays in November push them lower. A well-tuned engine adjusts every day.' },
      { type: 'p', text: "We use a combination of platform-supplied data, our own occupancy data across 30+ Central London properties, and event calendars from the London tourism board. Most owners we onboard see [a meaningful uplift in revenue](/blog/short-let-vs-long-let-london) within the first three months. Not because we've changed the property, but because we're pricing it more intelligently." },

      { type: 'h2', text: 'Why quality of management matters more than ever' },
      { type: 'p', text: "Airbnb's algorithm rewards properties that get consistent 5-star reviews. The best-reviewed listings appear higher in search, get more enquiries, and earn premium rates. That virtuous cycle compounds over time." },
      { type: 'p', text: "Cheap managers tend to outsource housekeeping to gig-economy cleaners with no quality control. The result is occasionally good, occasionally not. And the 'not' shows up in reviews. Once your average rating slips below 4.7, you fall off the front page and revenue drops materially." },

      {
        type: 'cta',
        headline: 'Want to see your projected short-let income?',
        body:
          "We'll model a realistic monthly income based on similar units we manage today. Conservatively, so we underpromise and overdeliver. Free, no obligation, takes 24 hours.",
        href: '/lp/airbnb-management',
        label: 'Get your free estimate',
      },

      { type: 'h2', text: 'The Quality Officer standard. What makes us different' },
      { type: 'p', text: "Here's what we do that most operators don't. After every guest checks out, one of our dedicated Quality Officers inspects the property in person before the next arrival. Not a checklist sent to a cleaner. A trained member of our team, on-site, every single time." },
      { type: 'p', text: "It catches the small things before they become guest complaints. A stained sheet, a broken kettle, a low towel count, a dusty skirting. It's the operational reason our Central London portfolio averages 4.9 stars and 80% occupancy." },
      { type: 'p', text: "We mention it because it's the single biggest thing landlords should ask any manager about. Not whether they 'have a quality process' but who specifically is on-site between guests, and how often." },

      { type: 'h2', text: 'What to expect financially' },
      { type: 'p', text: 'Realistic expectations matter. Short-let in Central London typically delivers 2 to 3 times standard AST yields gross, before our 18% management fee.' },
      { type: 'p', text: "A 1-bed in Marylebone that lets at £2,200/month on a standard AST might deliver £4,500-£6,500 gross on short-let. A 2-bed in Mayfair that lets at £5,000 long-term might command £14,000-£25,000 gross on short-let. The numbers depend on the property, area, finish, and how well it's marketed." },
      { type: 'p', text: 'If you want a specific estimate for your property, our [income calculator on the property management page](/property-management) is a good starting point. But a free valuation gives you a sharper figure.' },

      { type: 'h2', text: 'How to choose the right manager' },
      { type: 'p', text: 'Five questions worth asking every operator you speak to.' },
      {
        type: 'ol',
        items: [
          'Who handles housekeeping between guests, and is it in-house?',
          'Do you have an in-person quality check on every changeover, or just spot checks?',
          'How is dynamic pricing managed, and what tools do you use?',
          'What is your average occupancy across properties in my area?',
          'Can I see real, recent reviews from the properties you manage today?',
        ],
      },
      { type: 'p', text: "If any answer is vague, keep looking. The best operators answer these directly because they've systematised the answer." },

      CLOSING_PARA,

      {
        type: 'cta',
        headline: 'Get a free income estimate for your London property',
        body:
          "Tell us about your property. We'll come back with a realistic monthly income. Modelled conservatively against properties we manage today. Free, 24-hour turnaround.",
        href: '/lp/airbnb-management',
        label: 'Get my free estimate',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // POST 4 — Tue 2 Jun 2026 — Landlord Guides
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'short-let-vs-long-let-london',
    title: 'Short-Let vs Long-Let in London: Which Makes More Money in 2026?',
    excerpt:
      "A balanced comparison with real numbers, real pros and cons. Short-let isn't always the right answer. Here's how to work out what suits your property.",
    category: 'Landlord Guides',
    date: '2026-06-02',
    readTime: '6 min read',
    author: TEAM,
    heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80',
    metaTitle: 'Short-Let vs Long-Let London 2026. Real Numbers Compared',
    metaDescription:
      'Short-let vs long-let in London with real 2026 numbers, pros and cons of each model, and how to decide which suits your property.',
    keywords: [
      'short let vs long let london',
      'short let vs ast',
      'airbnb vs long term let',
      'london landlord short let',
    ],
    body: [
      { type: 'p', text: "Short-let is more profitable than long-let. That's the marketing line, and it isn't wrong. But it isn't the whole truth either." },
      { type: 'p', text: "In our experience managing properties across Central London, the right answer depends on the property, the area, the landlord, and what you want from your investment. Here's the honest version of the comparison." },

      { type: 'h2', text: 'The financial picture in 2026' },
      { type: 'p', text: "Let's start with the headline numbers. Across our managed portfolio in Marylebone, Kensington, Pimlico, Mayfair and Chelsea, short-let net income runs between 1.7x and 2.6x the equivalent long-let figure. The exact multiple depends heavily on the area and bedroom count." },
      {
        type: 'table',
        headers: ['Property', 'Long-Let / month', 'Short-Let Net / month', 'Multiple'],
        rows: [
          ['1-bed Marylebone W1', '£2,200', '£4,200', '1.9x'],
          ['1-bed Kensington W8', '£2,400', '£5,400', '2.3x'],
          ['2-bed Chelsea SW3', '£3,800', '£6,800', '1.8x'],
          ['2-bed Mayfair W1', '£5,000', '£11,000', '2.2x'],
          ['1-bed Pimlico SW1', '£1,900', '£3,200', '1.7x'],
        ],
      },
      { type: 'p', text: 'These are conservative net figures. After our 18% management fee, 10% conservative ADR cushion, platform commissions and 80% average occupancy. Most owners exceed them.' },

      { type: 'h2', text: 'When long-let still wins' },
      { type: 'p', text: 'Long-let beats short-let in a few specific situations that landlords often underweight.' },
      { type: 'p', text: 'If you want zero involvement and zero variance, an AST is genuinely simpler. The same tenant pays the same amount every month for a year or longer. You sign once and forget about it.' },
      { type: 'p', text: 'If your property is in an area with weak tourist or corporate demand. Outer zones, suburban boroughs, areas with very few transport links. Short-let returns drop sharply and the long-let multiple often disappears.' },
      { type: 'p', text: 'If your mortgage explicitly prohibits short-letting (some BTLs do), the conversation ends before it begins. Always check your mortgage terms first; the alternative is [guaranteed rent](/guaranteed-rent), which most lenders are comfortable with.' },

      { type: 'h2', text: 'When short-let wins' },
      { type: 'p', text: 'Short-let is the clear winner for properties in high-demand Central London postcodes. W1, W8, SW1, SW3, W11 and the prime parts of SW7 all consistently produce strong short-let multiples.' },
      { type: 'p', text: 'If you can absorb monthly variance. Typically 15-25% from peak to trough. Short-let delivers materially more income over a year. Most landlords adapt to the variance once they see the annual total.' },
      { type: 'p', text: 'Short-let also wins if you want to use the property yourself occasionally. You retain calendar control and can block dates instantly through the owner dashboard.' },

      {
        type: 'cta',
        headline: 'Get a personalised comparison for your property',
        body:
          "We'll model the long-let vs short-let numbers for your specific property (area, bedrooms, finish) and tell you honestly which model produces a better outcome.",
        href: '/contact',
        label: 'Get my free comparison',
      },

      { type: 'h2', text: 'The hybrid option: short-let + mid-term' },
      { type: 'p', text: "London's [90-day rule](/blog/90-day-rule-airbnb-london) caps short-stay nights on Airbnb at 90 per calendar year. The professional move is to combine short stays (up to the cap) with mid-term lets (90+ nights per stay) for the rest of the year." },
      { type: 'p', text: "A 90-night mid-term let to a corporate guest pays slightly less per night than a true short-stay but more than an AST. And it's fully compliant year-round. We operate this model across most of our [Canary Wharf](/areas/canary-wharf) and [Westminster](/areas/westminster) portfolios." },

      { type: 'h2', text: 'How to decide for your property' },
      { type: 'p', text: 'Three honest questions get most landlords to the right answer.' },
      {
        type: 'ol',
        items: [
          'How much does monthly variance bother you? If £2,000 month-to-month swings would stress you, [guaranteed rent](/guaranteed-rent) gives you the income certainty of an AST without the void risk.',
          'Do you ever want to use the property yourself? If yes, short-let is the only model that keeps that option open.',
          'Is this one property or part of a portfolio? Single premium properties almost always do better on short-let. Multi-unit blocks often work better on guaranteed rent.',
        ],
      },

      { type: 'h2', text: 'The third option most landlords overlook' },
      { type: 'p', text: 'Guaranteed rent sits in between short-let and long-let. You get fixed monthly income (like a long-let) but at full market value, with no voids and no management. We sub-let on the short-let side; that variance is our problem, not yours.' },
      { type: 'p', text: "It's not for everyone. If you want maximum upside and can stomach variance, short-let beats it. But if you want predictability without the AST risks under the [Renters Rights Act](/blog/renters-rights-act-2026-london-landlords), it's worth a serious look." },

      CLOSING_PARA,

      {
        type: 'cta',
        headline: 'Speak to a Central London property specialist',
        body:
          "We manage all three models (AST, short-let and guaranteed rent) and have no preference. A free 20-minute call gets you a recommendation specific to your property.",
        href: '/contact',
        label: 'Book a free consultation',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // POST 5 — Thu 4 Jun 2026 — Regulations
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: '90-day-rule-airbnb-london',
    title: 'The 90-Day Airbnb Rule in London: What It Means and How to Stay Compliant',
    excerpt:
      'Why London short-lets cap at 90 days, what the exceptions are, and how mid-term lets keep your calendar legal beyond that limit. Without falling foul of the regulator.',
    category: 'Regulations',
    date: '2026-06-04',
    readTime: '6 min read',
    author: TEAM,
    heroImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600&q=80',
    metaTitle: 'The 90-Day Airbnb Rule London. How to Stay Compliant in 2026',
    metaDescription:
      "London's 90-day Airbnb rule explained: who it applies to, how Airbnb enforces it, the penalties for breaking it, and how mid-term lets keep you compliant.",
    keywords: [
      '90 day rule airbnb london',
      'short let rules london',
      'london airbnb regulations',
      'mid term let london',
    ],
    body: [
      { type: 'p', text: "London is the only city in the UK with its own statutory cap on short-letting. The 90-day rule has been in place since 2017, and Airbnb enforces it automatically. You can't switch it off." },
      { type: 'p', text: "If you let a property on Airbnb in London, this rule affects you. Here's the plain-English version of what it says, what it actually means in practice, and how to keep your property earning all year without breaking it." },

      { type: 'h2', text: 'What the 90-day rule actually says' },
      { type: 'p', text: 'The rule comes from amendments to Section 25 of the Greater London Council (General Powers) Act 1973, introduced via the Deregulation Act 2015. In short: an entire residential property in Greater London can be let on short-term stays (under 90 nights per booking) for a maximum of 90 nights per calendar year.' },
      { type: 'p', text: 'Beyond 90 nights of short-stay use, you need planning permission for a change of use. Without it, the property must revert to ordinary residential use for the rest of the year.' },
      { type: 'p', text: 'The cap resets every 1 January.' },

      { type: 'h2', text: 'Who it applies to' },
      { type: 'p', text: "The rule applies to entire-home listings within the Greater London boundary. All 32 boroughs plus the City of London. If you let a self-contained residential property on Airbnb, Booking.com, Vrbo, Expedia or any other short-let platform, you're subject to it." },
      { type: 'p', text: "It doesn't apply to:" },
      {
        type: 'ul',
        items: [
          'Properties with explicit planning permission for short-let or serviced apartment use',
          'Hotels, B&Bs and aparthotels operating under hospitality use classes',
          'Properties outside the Greater London boundary',
          'Bookings of 90 consecutive nights or more (these are mid-term lets, see below)',
          'Hosted stays where you remain in the property as the owner',
        ],
      },

      { type: 'h2', text: 'How Airbnb and Booking.com enforce it' },
      { type: 'p', text: 'Airbnb introduced auto-capping in 2017. Once your listing reaches 90 nights of short-stay bookings in a calendar year, the platform automatically blocks the calendar for the remainder of the year. Booking.com applies the same logic.' },
      { type: 'p', text: 'You cannot disable the cap from inside the platform. Hosts who attempt to dodge it by spreading bookings across multiple platforms risk detection. The platforms share data, and HMRC has data-sharing agreements with all the major ones.' },

      { type: 'h2', text: 'Penalties for breaching the rule' },
      { type: 'p', text: 'Local councils can issue enforcement notices, civil penalties of up to £20,000 per breach, and require the property to revert to residential use. Westminster and Kensington & Chelsea both have dedicated short-let enforcement teams who actively monitor listings.' },
      { type: 'p', text: 'Beyond the council, you also risk invalidating your insurance, breaching your mortgage terms, and triggering HMRC reclassification of the property for tax purposes. See our [Airbnb tax guide](/blog/airbnb-tax-guide-london-2026) for what that means.' },

      {
        type: 'cta',
        headline: 'Operating London short-lets properly is what we do',
        body:
          'Every property we manage operates fully within the 90-day cap, then switches to mid-term lets to keep earning all year. Compliant, year-round revenue without the regulatory headache.',
        href: '/property-management',
        label: 'See how full management works',
      },

      { type: 'h2', text: 'How mid-term lets keep your calendar legal beyond 90 days' },
      { type: 'p', text: 'The cleanest way to operate a London short-let property all year is to combine short-stays (under 90 nights, up to the 90-night cap) with mid-term lets (single bookings of 90 nights or more).' },
      { type: 'p', text: "A 90+ night stay isn't a short-let by legal definition. It's a residential occupancy. It doesn't count against the cap. Mid-term lets work especially well for corporate guests on project assignments, expats settling in, and visiting medical professionals using Harley Street or the private hospital network." },
      { type: 'p', text: 'Done well, the calendar looks like this:' },
      {
        type: 'ul',
        items: [
          'Q1: Short-stay tourist and corporate bookings (~30 nights of cap used)',
          'Q2: Short-stays around major London events. Chelsea Flower Show, Wimbledon, Royal Ascot (~30 more nights of cap)',
          'Q3-Q4: Cap nearly used; switch to 3-month mid-term lets to fill the rest of the year',
        ],
      },
      { type: 'p', text: 'We run this exact model across our [High Street Kensington portfolio](/areas/high-street-kensington), where average occupancy sits at 94% across the calendar year.' },

      { type: 'h2', text: 'When planning permission is worth pursuing' },
      { type: 'p', text: 'Some properties. Typically in less residential areas like Soho or parts of Westminster. Can secure planning permission for short-let use beyond 90 days. The process is borough-specific, expensive, and far from guaranteed.' },
      { type: 'p', text: 'If you own a Mayfair or Marylebone flat in a residential block, applying for change-of-use is usually a long, costly battle that the borough will resist. Mid-term lets are almost always the better strategy.' },

      { type: 'h2', text: "What good operators do (and what they don't)" },
      { type: 'p', text: "Stay away from any operator who suggests dodging the cap. Spreading bookings across multiple platforms doesn't work. They share data. And the financial consequences of an enforcement notice are real." },
      { type: 'p', text: 'Our approach is straightforward: operate to the cap, switch seamlessly to mid-term, document everything for HMRC and the council, and stay clean. Done right, full-year compliance produces materially better returns than corner-cutting.' },

      CLOSING_PARA,

      {
        type: 'cta',
        headline: 'Compliant short-let management without the headache',
        body:
          'We handle the 90-day cap, mid-term let scheduling, planning, insurance and tax routing. Start to finish. Free income estimate for your property in 24 hours.',
        href: '/property-management',
        label: 'See full management',
      },

      { type: 'p', text: 'This article is general guidance only. Planning law is borough-specific and complex; landlords should consult a qualified planning solicitor before acting.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // POST 6 — Sun 7 Jun 2026 — Landlord Guides
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: 'guaranteed-rent-vs-airbnb-management',
    title: 'Guaranteed Rent vs Airbnb Management: Which Is Right for Your London Property?',
    excerpt:
      "Both are legitimate models with very different risk profiles. Here's the honest comparison. Without any sales push for either side.",
    category: 'Landlord Guides',
    date: '2026-06-07',
    readTime: '6 min read',
    author: TEAM,
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    metaTitle: 'Guaranteed Rent vs Airbnb Management London. Which Suits You?',
    metaDescription:
      'A balanced comparison of guaranteed rent and Airbnb management for London landlords. Including three honest questions to help you choose.',
    keywords: [
      'guaranteed rent vs airbnb management london',
      'short let vs guaranteed rent',
      'london landlord options',
    ],
    body: [
      { type: 'p', text: "We offer both. We genuinely don't mind which one you choose, because they suit different landlords for different reasons. Here's the version of this article we'd want you to read. Not the version designed to push you toward whichever pays us more." },

      { type: 'h2', text: 'The short version' },
      {
        type: 'ul',
        items: [
          '[Guaranteed rent](/guaranteed-rent): fixed monthly income at full market rate. Zero involvement. 1-5 year term. Lower upside in exchange for total certainty.',
          '[Airbnb management](/property-management): higher gross income, variable month-to-month, 18% management fee, rolling agreement. Higher upside in exchange for variability.',
        ],
      },

      { type: 'h2', text: 'How guaranteed rent works' },
      { type: 'p', text: 'We sign a corporate lease with you for between 1 and 5 years. We pay you the full market rental value of your property as a fixed monthly amount, on the same date every month, for the full term.' },
      { type: 'p', text: 'We take responsibility for utilities, council tax, internet, cleaning, maintenance under £250 per incident, and consumables. You retain ownership, the mortgage, and building insurance. Some months we earn more than the guaranteed figure on short-let; some months less. That variance is our problem, not yours.' },

      { type: 'h2', text: 'How Airbnb management works' },
      { type: 'p', text: 'We list your property across Airbnb, Booking.com, Vrbo, Expedia and direct channels. We operate dynamic pricing daily, manage all guest communication, organise housekeeping with [a Quality Officer on-site between every booking](/blog/airbnb-management-london-guide), and coordinate maintenance. You receive net rental income. Gross bookings minus platform fees, our 18% management fee, and uncovered cleaning. Paid monthly with a full reconciliation.' },
      { type: 'p', text: 'Income varies by month, typically 15-25% from peak to trough across the calendar year. Most landlords adapt to the variance once they see the annual total.' },

      { type: 'h2', text: 'Side by side' },
      {
        type: 'table',
        headers: ['', 'Guaranteed Rent', 'Airbnb Management'],
        rows: [
          ['Monthly income', 'Fixed', 'Variable'],
          ['Income certainty', 'Total', 'Probabilistic'],
          ['Income potential', 'Market rent, certain', 'Higher upside, variable'],
          ['Operational involvement', 'Zero', 'Light (calendar control)'],
          ['Fees', 'None to you', '18% + VAT'],
          ['Contract length', '1-5 years', 'Rolling, no lock-in'],
          ['Personal use of property', 'Restricted', 'Free to block dates'],
          ['Maintenance under £250', 'Covered by us', 'Coordinated, charged to you'],
        ],
      },

      {
        type: 'cta',
        headline: 'Still not sure which suits you?',
        body:
          "A free 20-minute call with our team will get you to a confident decision. We'll model both options for your property and recommend honestly. We offer both, so we genuinely don't mind which way it goes.",
        href: '/contact',
        label: 'Book a free 20-minute call',
      },

      { type: 'h2', text: 'Three questions to ask yourself' },

      { type: 'h3', text: '1. How much does monthly variance bother you?' },
      { type: 'p', text: 'If a £2,000 swing in monthly income from May to November would affect how you sleep at night, guaranteed rent is genuinely the better product for you. Even though the headline number is lower. Income certainty has real value and is worth paying for.' },

      { type: 'h3', text: '2. Do you ever want to use the property yourself?' },
      { type: 'p', text: "Guaranteed rent is a full corporate lease. We use the property. If you want to spend three weeks a year in your [Mayfair apartment](/areas/mayfair), or block off the Christmas week for family, Airbnb management is the only model that keeps that open. You block dates in the owner dashboard; we don't book over them." },

      { type: 'h3', text: '3. Is this one property or part of a portfolio?' },
      { type: 'p', text: 'For single premium properties, short-let management nearly always produces a better outcome. For multi-unit blocks or portfolios where the operational overhead of coordinating across units would be a problem, guaranteed rent is the structurally right answer.' },
      { type: 'p', text: 'Our 14-unit [Beaumont Court block in Marylebone](/areas/marylebone) is a textbook guaranteed rent setup. Single luxury units in Mayfair almost always go on short-let management.' },

      { type: 'h2', text: 'When we recommend each' },
      { type: 'p', text: 'Guaranteed rent is the right answer if you tick any of these boxes:' },
      {
        type: 'ul',
        items: [
          "You live abroad or can't easily attend to a UK property",
          'Your mortgage covenant requires fixed, contracted income',
          'You own multiple units in the same building',
          "You're approaching retirement and want predictable income",
          'You want certainty above maximum return',
        ],
      },
      { type: 'p', text: 'Short-let management is the right answer if you tick any of these:' },
      {
        type: 'ul',
        items: [
          'Your property is in a prime tourist or corporate let postcode (W1, W8, SW1, SW3, W11)',
          'You can absorb monthly variance without lifestyle impact',
          'You want maximum upside and accept the variability',
          'You want to use the property yourself periodically',
          "You're comfortable with a rolling agreement rather than a long lease",
        ],
      },

      { type: 'h2', text: 'One thing we will not do' },
      { type: 'p', text: "Tell you one of these is universally better. They're not. The right answer depends on your property, your financial situation, your relationship to risk, and whether you want personal use." },
      { type: 'p', text: 'Anyone who insists one model wins in every situation is selling. Get a recommendation from an operator who runs both.' },

      CLOSING_PARA,

      {
        type: 'cta',
        headline: 'Get an honest recommendation for your property',
        body:
          "We'll model both guaranteed rent and short-let income for your property and recommend the right one. No sales push, just an honest read.",
        href: '/contact',
        label: 'Book a free consultation',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // POST 7 — Tue 9 Jun 2026 — Market Insights
  // ─────────────────────────────────────────────────────────────────────
  {
    hiddenFromIndex: true,
    slug: 'private-rented-sector-london-2026',
    title: "London's Private Rented Sector in 2026: What Landlords Need to Know",
    excerpt:
      "Demand is up. Supply is down. Rents keep rising. Regulation is tightening. Here's where the London rental market actually sits in mid-2026 and what it means for your strategy.",
    category: 'Market Insights',
    date: '2026-06-09',
    readTime: '7 min read',
    author: TEAM,
    heroImage: 'https://images.unsplash.com/photo-1529408632839-a54952c491e5?w=1600&q=80',
    metaTitle: 'Private Rented Sector London 2026. Market Overview for Landlords',
    metaDescription:
      "Where London's rental market sits in 2026: rents, demand, supply, regulation and the strongest strategies for landlords in the current environment.",
    keywords: [
      'private rented sector london 2026',
      'london rental market 2026',
      'london landlord market overview',
      'london property investment 2026',
    ],
    body: [
      { type: 'p', text: "Six months into 2026, the London rental market is in an unusual position. Demand is at multi-year highs. Supply is at multi-year lows. Rents are still rising. And the regulatory backdrop has just shifted under landlords' feet with the [Renters Rights Act](/blog/renters-rights-act-2026-london-landlords)." },
      { type: 'p', text: "If you own property in London, or you're considering buying, this is what you actually need to know about the current market, and how to position your strategy for the next 12-18 months." },

      { type: 'h2', text: 'Where rents sit in mid-2026' },
      { type: 'p', text: 'Average private rents in London hit £2,252 per month in July 2025 (ONS) and have continued rising into 2026. Kensington & Chelsea remains the most expensive borough at around £3,616/month on average. Westminster, Camden and Islington all sit above £2,800.' },
      { type: 'p', text: "The growth pattern is unusual. Mid-tier rents (£2,000-£3,500) are climbing fastest because that's where the structural shortage is biting. Ultra-prime (£8,000+) is moving more slowly because that market was already at premium pricing." },
      { type: 'p', text: 'For landlords with property in the £2,000-£5,000/month bracket. Which covers most of our portfolio across [Marylebone](/areas/marylebone), [Pimlico](/areas/pimlico) and [Chelsea](/areas/chelsea). Pricing power is the strongest it has been in five years.' },

      { type: 'h2', text: 'Why supply has tightened so much' },
      { type: 'p', text: 'The shortage is not accidental. Three things have driven it.' },
      {
        type: 'ul',
        items: [
          'Section 24 tax changes have made highly leveraged BTL portfolios less profitable, prompting a wave of disposals between 2020 and 2024',
          'The end of the Furnished Holiday Let regime in April 2025 has removed a tax incentive that supported about 25,000 London short-lets',
          'Higher mortgage rates have stalled new BTL purchases. Net new private rental supply in London has been negative for three consecutive years',
        ],
      },
      { type: 'p', text: "The result: 12 to 15 prospective tenants per available property across most of Central London. Letting agents in Marylebone tell us they're back to running closed viewings to manage the volume." },

      { type: 'h2', text: 'Regulatory pressure has changed behaviour' },
      { type: 'p', text: 'The [Renters Rights Act](/blog/renters-rights-act-2026-london-landlords) came into force on 1 May 2026. The headline change. Section 21 abolition. Has had a measurable behavioural effect on landlords.' },
      { type: 'p', text: 'We see three responses pretty clearly in our enquiries:' },
      {
        type: 'ol',
        items: [
          'A small group are exiting BTL altogether and selling',
          'A larger group are sticking with ASTs but tightening tenant vetting significantly',
          'A growing group are moving to models that sit outside the Act. Short-let, mid-term and [guaranteed rent](/guaranteed-rent)',
        ],
      },
      { type: 'p', text: 'That third group is bigger than it looks. Our guaranteed rent enquiries have tripled since January, and the largest single source is landlords pre-empting Section 21 issues by switching structures before they need to.' },

      {
        type: 'cta',
        headline: 'Where does your property fit in the 2026 market?',
        body:
          "A free 20-minute call with our team will give you a clear read on where your property sits, what it could earn, and which model. AST, short-let or guaranteed rent. Fits the current market for your specific situation.",
        href: '/contact',
        label: 'Book a free market call',
      },

      { type: 'h2', text: 'Where opportunity sits now' },
      { type: 'p', text: 'For landlords willing to actively manage their position, opportunities are stronger than the gloomy headlines suggest.' },
      { type: 'p', text: "[Short-let yields](/blog/short-let-vs-long-let-london) in W1, W8 and SW3 remain 2-3x long-let equivalents. Mid-term lets have grown roughly 40% as a category in the last 18 months and command premium rates. Block-level guaranteed rent contracts are at the highest take-up we've seen. Large property owners want certainty above all else." },
      { type: 'p', text: 'Even within ASTs, the rental ceiling is rising. The post-1-May freeze on landlords adjusting rents annually has slowed growth at the lease-renewal point, but new lets are still pricing 8-12% above 2024 levels.' },

      { type: 'h2', text: 'Three strategies for the next 12 months' },

      { type: 'h3', text: '1. Tighten what you have' },
      { type: 'p', text: "If you're sticking with ASTs, the priority is tenant quality and property condition. The new [Decent Homes Standard](/blog/renters-rights-act-2026-london-landlords) will be enforced. Period buildings need audits on damp, electrical safety and structural condition. Tenants now have more leverage on disrepair. Investing in the property pre-emptively is cheaper than litigating." },

      { type: 'h3', text: '2. Consider a model switch' },
      { type: 'p', text: 'If your property sits in a strong short-let postcode and your mortgage allows it, the maths in 2026 favours short-let or guaranteed rent over AST renewal. We see this most clearly in [Mayfair](/areas/mayfair), Marylebone and Kensington.' },

      { type: 'h3', text: '3. Plan capital expenditure properly' },
      { type: 'p', text: 'Period buildings across Marylebone, Pimlico and Notting Hill will need Decent Homes Standard work over the next 18 months. Front-loading this expenditure protects rental income and prevents larger problems later.' },

      { type: 'h2', text: 'The takeaway' },
      { type: 'p', text: "London's rental market in 2026 is structurally tight, regulatorily complex, and rewards landlords with a clear strategy. Passive holding still produces income, but active management. Pricing properly, choosing the right letting model, and pre-empting regulatory issues. Produces materially better outcomes." },

      CLOSING_PARA,

      {
        type: 'cta',
        headline: 'Make sure your property is set up for 2026',
        body:
          "Free 20-minute call with a Central London property specialist. We'll review your situation, model your options and give you an honest market read.",
        href: '/contact',
        label: 'Book my free consultation',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // POST 8 — Thu 11 Jun 2026 — Regulations
  // ─────────────────────────────────────────────────────────────────────
  {
    hiddenFromIndex: true,
    slug: 'ast-tenancy-agreement-guide-landlords',
    title: 'AST Tenancy Agreements: A Plain English Guide for London Landlords',
    excerpt:
      "What an Assured Shorthold Tenancy actually is, the clauses every London landlord needs to know, and why some landlords are moving away from ASTs entirely.",
    category: 'Regulations',
    date: '2026-06-11',
    readTime: '7 min read',
    author: TEAM,
    heroImage: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=1600&q=80',
    metaTitle: 'AST Tenancy Agreement. Plain English Landlord Guide for 2026',
    metaDescription:
      "What an AST is, the key clauses landlords need to understand, what's changing under the Renters Rights Act, and why some landlords are moving away.",
    keywords: [
      'AST tenancy agreement landlord guide',
      'assured shorthold tenancy explained',
      'ast vs guaranteed rent',
      'tenancy agreement london',
    ],
    body: [
      { type: 'p', text: "If you've let property in the UK at any point since 1989, you've used an Assured Shorthold Tenancy (AST). It's the standard residential tenancy contract for England and Wales, and most landlords have signed dozens of them without ever reading the small print." },
      { type: 'p', text: 'Two things make ASTs worth understanding properly in 2026. First, the [Renters Rights Act](/blog/renters-rights-act-2026-london-landlords) has just rewritten parts of how they work. Second, knowing your AST helps you decide whether it remains the right contract for your property.' },
      { type: 'p', text: "Here's the plain-English guide." },

      { type: 'h2', text: 'What an AST actually is' },
      { type: 'p', text: 'An Assured Shorthold Tenancy is the default residential tenancy contract in England and Wales. It was created by the Housing Act 1988 and has been the standard since 1989.' },
      { type: 'p', text: 'It gives the tenant possession of the property in exchange for a defined rent for a defined term. The tenant has security of tenure during the term. Meaning the landlord can only remove them via specific legal grounds. But the landlord retains the freehold (or leasehold) and significant control over how the property is used.' },
      { type: 'p', text: 'Before 1 May 2026, the standard structure was a 6 or 12-month fixed term followed by a rolling periodic tenancy. After the Act, the fixed-term option has been removed entirely. Every AST is now periodic from day one.' },

      { type: 'h2', text: 'The key clauses every landlord should know' },
      { type: 'p', text: 'Most standard AST templates contain 40-50 clauses. A handful do most of the work.' },

      { type: 'h3', text: '1. Rent and rent reviews' },
      { type: 'p', text: 'The rent figure, payment frequency, and any rent review mechanism. Under the Act, rent increases are now capped at one per year and challengeable at the First-tier Tribunal.' },

      { type: 'h3', text: '2. Deposit and protection' },
      { type: 'p', text: 'Maximum 5 weeks rent (or 6 weeks if annual rent exceeds £50,000). Must be lodged in a government-approved deposit scheme within 30 days. Failure to protect carries automatic statutory penalties.' },

      { type: 'h3', text: '3. Repair obligations' },
      { type: 'p', text: 'The landlord is responsible for structure, exterior, plumbing, heating and electricity. Tenant covers minor day-to-day items. The [Decent Homes Standard](/blog/renters-rights-act-2026-london-landlords) now applies on top of these baseline obligations.' },

      { type: 'h3', text: '4. Permitted use' },
      { type: 'p', text: "The property must be used as the tenant's only or principal home. Subletting (including listing on Airbnb) is normally prohibited without written consent." },

      { type: 'h3', text: '5. Termination grounds' },
      { type: 'p', text: 'Pre-May 2026, Section 21 allowed no-fault termination after the fixed term. Post-May 2026, Section 21 is abolished entirely. Landlords now rely on Section 8 grounds: sale of property, moving back in, persistent arrears, anti-social behaviour, or major refurbishment.' },

      { type: 'h2', text: "What's changing under the Renters Rights Act" },
      { type: 'p', text: "Even if you've used ASTs for decades, the post-1-May 2026 version is meaningfully different. The five biggest changes:" },
      {
        type: 'ul',
        items: [
          'Section 21 no-fault eviction is abolished',
          'Fixed-term ASTs become rolling periodic by default. Tenant can leave at any time with 2 months notice',
          'Rental bidding is illegal. Landlords must advertise an asking rent and accept it',
          'Annual rent reviews are capped and challengeable at the First-tier Tribunal',
          'All landlords must register on a national database; properties must meet the Decent Homes Standard',
        ],
      },
      { type: 'p', text: 'If your AST was drafted before May 2026 and runs past that date, the new statutory rules override anything in your contract. The contract stays in force; the rules have changed around it.' },

      {
        type: 'cta',
        headline: 'Want certainty without the AST risks?',
        body:
          'Our guaranteed rent product gives you fixed monthly income at full market rate, paid the same date every month, with all the Section 21/Section 8 complexity handled by us. 1-5 year terms.',
        href: '/guaranteed-rent',
        label: 'Explore guaranteed rent',
      },

      { type: 'h2', text: 'Why some landlords are moving away from ASTs entirely' },
      { type: 'p', text: 'Most London landlords will keep using ASTs because they own a single property and an AST remains the simplest contract. But for landlords who can no longer accept the new risk profile, alternatives now look more attractive than they did 12 months ago.' },
      { type: 'p', text: 'Two alternatives sit outside the Act:' },

      { type: 'h3', text: 'Guaranteed rent (corporate let)' },
      { type: 'p', text: "When the tenant is a company rather than an individual, the AST framework doesn't apply. Different legislation governs the relationship. This is the legal basis of our [guaranteed rent product](/guaranteed-rent). We sign the lease as a company, you receive a fixed monthly payment, and the Renters Rights Act doesn't apply." },

      { type: 'h3', text: 'Short-let / serviced accommodation' },
      { type: 'p', text: "Stays under 90 nights aren't ASTs. They're licences for short-term occupation, governed by different rules including London's [90-day cap](/blog/90-day-rule-airbnb-london). [Short-let management](/property-management) takes the property out of the AST framework entirely." },

      { type: 'p', text: 'Both routes are completely legitimate. Both remove most of the AST-specific risks landlords are worried about. Both deliver income that. For properties in the right postcodes. Meets or exceeds long-let returns.' },

      { type: 'h2', text: 'How to decide what to do with your AST property now' },
      {
        type: 'ol',
        items: [
          'If your current AST runs past 1 May 2026, accept it has converted to periodic and update your records',
          'Review your tenant. If the relationship is solid and rent is paid on time, the change is mostly procedural',
          "If your tenant is on a problematic AST, take advice on the new Section 8 grounds for possession (it's slower but possible)",
          'For new lettings, consider whether AST, [short-let](/property-management) or [guaranteed rent](/guaranteed-rent) is the best fit for your property in 2026',
          'Update your buildings and contents insurance. Many policies are written against ASTs',
        ],
      },

      CLOSING_PARA,

      {
        type: 'cta',
        headline: 'Get a free model of all three options for your property',
        body:
          "We'll show you AST, short-let and guaranteed rent income for your specific property (area, bedrooms, finish) so you can compare like for like.",
        href: '/guaranteed-rent',
        label: 'Get my free comparison',
      },

      { type: 'p', text: 'This article is general guidance only and does not constitute legal advice. The Renters Rights Act and AST law are complex; landlords should consult a qualified solicitor for advice on their property.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // POST 9 — Sun 14 Jun 2026 — Landlord Guides
  // ─────────────────────────────────────────────────────────────────────
  {
    hiddenFromIndex: true,
    slug: 'property-management-central-london',
    title: 'Property Management in Central London: What to Look For and What to Avoid',
    excerpt:
      'Choosing the wrong property manager is one of the most expensive mistakes a London landlord can make. Red flags, green flags and questions to ask before you sign.',
    category: 'Landlord Guides',
    date: '2026-06-14',
    readTime: '7 min read',
    author: TEAM,
    heroImage: 'https://images.unsplash.com/photo-1526654196244-3bdc251b0965?w=1600&q=80',
    metaTitle: 'Property Management Central London. What to Look For and Avoid',
    metaDescription:
      'How to choose a property manager in Central London: red flags, green flags, questions to ask, and what good management actually looks like.',
    keywords: [
      'property management central london',
      'london property manager',
      'short let manager london',
      'central london letting agent',
    ],
    body: [
      { type: 'p', text: "Choosing a property manager is one of those decisions that doesn't feel important until it goes wrong. By the time you realise the manager isn't delivering, you've usually lost three months of rent, a chunk of property condition, and a fair amount of confidence in the asset." },
      { type: 'p', text: "We see this all the time. Landlords come to us from other managers, frustrated with vague monthly reports, missing rent, or guest reviews that have collapsed. The pattern is consistent." },
      { type: 'p', text: "Here's how to choose right the first time. And what to look out for if you're considering moving from a manager that isn't working." },

      { type: 'h2', text: 'The red flags' },

      { type: 'h3', text: '1. Vague fee structure' },
      { type: 'p', text: 'The best managers have a clear, single fee. Ours is [18% + VAT](/pricing) of net payout for short-let, with a one-off £149 onboarding. No extras.' },
      { type: 'p', text: "Be sceptical of managers with 'starting from' fees, 'tiered packages' or 'à la carte' add-ons. These structures exist to inflate the headline rate later via call-out charges, photography fees, listing fees and monthly retainers." },

      { type: 'h3', text: '2. No clear answer on who does the housekeeping' },
      { type: 'p', text: "Ask: 'Who specifically cleans my property between guests?' If the answer is vague. 'we have a network of cleaners' or 'we use trusted contractors'. That's a red flag." },
      { type: 'p', text: 'Good managers either have in-house housekeeping or named, vetted teams. Cleaners on demand via gig-economy apps produce inconsistent results, which shows up in guest reviews within weeks.' },

      { type: 'h3', text: '3. No in-person quality check between guests' },
      { type: 'p', text: "Cleaners are not quality control. They're cleaners. If the manager's quality process is 'the cleaner sends a checklist photo', the small things. Broken kettle, stained sheet, low towels. Will slip through repeatedly." },
      { type: 'p', text: 'This is the single biggest operational difference between good and average operators.' },

      { type: 'h3', text: '4. Slow or unclear monthly reporting' },
      { type: 'p', text: "You should receive a monthly report covering gross income, platform fees, management fees, net payout, occupancy, ADR and forward bookings. If the report is a PDF email with no detail, or arrives late, the operator isn't taking reporting seriously." },

      { type: 'h3', text: '5. No real reviews you can verify' },
      { type: 'p', text: "Any operator should be able to show you live listings they manage today. If they can't or won't, walk away." },

      { type: 'h2', text: 'The green flags' },

      { type: 'h3', text: '1. Clear fee, clearly explained' },
      { type: 'p', text: 'One number, in writing, no add-ons. The fee should be calculated on income you receive, not gross bookings before your payout.' },

      { type: 'h3', text: '2. In-person quality inspection between every guest' },
      { type: 'p', text: "Our [Quality Officer attends every changeover](/property-management). Every single one. The job isn't to clean. That's housekeeping. The job is to inspect: linen quality, towel count, consumables, fault checks, defect log. It's how five-star reviews are protected at scale." },

      { type: 'h3', text: '3. Strong base of existing managed properties in your area' },
      { type: 'p', text: 'Managers operating across [Marylebone](/areas/marylebone), [Kensington](/areas/high-street-kensington) and [Pimlico](/areas/pimlico) understand local demand patterns. Managers with a single property in your area are still learning.' },

      { type: 'h3', text: '4. Monthly reporting via owner dashboard' },
      { type: 'p', text: 'Real-time visibility into bookings, revenue, occupancy and payouts. Mobile-accessible. Not a spreadsheet on demand.' },

      { type: 'h3', text: '5. References that will actually take your call' },
      { type: 'p', text: 'Ask for the contact details of three current landlords. Call them. The ones who are happy will say so quickly and clearly.' },

      {
        type: 'cta',
        headline: 'Want a benchmark for your current manager?',
        body:
          "We'll give you an honest second opinion on the income and service you're getting today. No pressure to switch. Just a clear read on whether you're being well served.",
        href: '/contact',
        label: 'Get a second opinion',
      },

      { type: 'h2', text: 'Five questions to ask before signing' },
      {
        type: 'ol',
        items: [
          'Who specifically inspects the property between guests, and how often? (Ours: a named Quality Officer, every changeover.)',
          'How is dynamic pricing managed, what tools do you use, and how often do rates update?',
          'What is your average occupancy across properties in my postcode in the last 12 months?',
          'Can I see two listings you currently manage and read the actual reviews?',
          'Can you put me in touch with two existing landlords who will speak honestly?',
        ],
      },
      { type: 'p', text: "If a manager can't answer all five clearly, keep looking." },

      { type: 'h2', text: 'What good management actually looks like' },
      { type: 'p', text: 'Day to day, you should be aware of your property without having to chase. Bookings come in. The property is cleaned to a documented standard between every stay. Guests are responded to within 30 minutes. Maintenance issues are resolved without you hearing about most of them.' },
      { type: 'p', text: 'At the end of each month, you receive a clear report and a clean payment. At the end of each year, the property is in similar condition to when the manager took it on. Sometimes better. Reviews stay above 4.7.' },
      { type: 'p', text: "If your current setup doesn't match that description, your manager isn't earning their fee." },

      { type: 'h2', text: 'On switching managers' },
      { type: 'p', text: 'Switching is easier than most landlords think. The standard process: 30 days notice on the current contract, key handover, owner-dashboard migration, listing transfer (the listings are linked to the property, not the manager, on most platforms). We onboard switching landlords in less than a week routinely.' },
      { type: 'p', text: "If you're frustrated with your current manager, the cost of switching is almost always lower than the cost of staying." },

      CLOSING_PARA,

      {
        type: 'cta',
        headline: 'Free 20-minute call on your current setup',
        body:
          "Whether you're considering professional management for the first time or looking to switch, a free 20-minute call gives you a clear read on what's possible.",
        href: '/contact',
        label: 'Book a free consultation',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // POST 10 — Tue 16 Jun 2026 — Tax & Finance
  // ─────────────────────────────────────────────────────────────────────
  {
    hiddenFromIndex: true,
    slug: 'airbnb-tax-guide-london-2026',
    title: 'Airbnb Tax Guide for London Landlords 2026: What You Actually Need to Know',
    excerpt:
      'Every short-let pound is taxable income. Plain-English guide to declaring, claiming and structuring your Airbnb earnings. Including post-FHL rules and what HMRC checks.',
    category: 'Tax & Finance',
    date: '2026-06-16',
    readTime: '8 min read',
    author: TEAM,
    heroImage: 'https://images.unsplash.com/photo-1772588627354-ca3617853217?w=1600&q=80',
    metaTitle: 'Airbnb Tax London Landlord 2026. Plain English Guide',
    metaDescription:
      '2026 tax guide for London short-let landlords: declaring income, post-FHL rules, allowable expenses, the £90k VAT threshold and council tax vs business rates.',
    keywords: [
      'airbnb tax london landlord 2026',
      'short let tax uk',
      'furnished holiday let tax post fhl',
      'london airbnb income tax',
    ],
    body: [
      { type: 'p', text: 'The biggest mistake we see with new short-let landlords is not declaring properly. HMRC has had a data-sharing agreement with Airbnb since 2020 and, since 2024, with every other major platform. They know what you earned. The only question is whether you declared it.' },
      { type: 'p', text: "This is the 2026 tax guide for London short-let landlords. Covering what to declare, how it's taxed, what's changed since the abolition of the FHL regime, and the structural decisions that have the biggest impact on your effective tax rate." },
      { type: 'p', text: 'This is general guidance only. Tax is complex and circumstances vary. Consult a qualified accountant before making decisions.' },

      { type: 'h2', text: 'Do I need to declare?' },
      { type: 'p', text: 'Yes. Always. Income from short-letting your property via Airbnb, Booking.com, Vrbo, Expedia or direct is taxable income. There are two narrow exceptions:' },
      {
        type: 'ul',
        items: [
          'The Rent-a-Room scheme: if you let a furnished room in your own main residence, the first £7,500 of income per tax year is tax-free',
          'The £1,000 trading allowance: if total miscellaneous income is below £1,000 in a year, no declaration is required',
        ],
      },
      { type: 'p', text: 'Anyone earning more than £1,000 from short-letting a property they do not live in must declare it via Self Assessment.' },

      { type: 'h2', text: 'How short-let income is taxed' },
      { type: 'p', text: 'Income from short-letting a property is treated as rental income. Property Income on the SA105 Self Assessment supplementary page. It is taxed at your marginal rate: 20%, 40% or 45%.' },
      { type: 'p', text: 'Allowable expenses are deducted from gross income to arrive at taxable profit. The main deductions for a Central London short-let:' },
      {
        type: 'ul',
        items: [
          'Management fees (our [18% management fee](/pricing) is fully deductible)',
          'Platform fees taken by Airbnb / Booking.com / Vrbo',
          'Cleaning costs per turnaround and deep cleans',
          'Utility bills paid by the landlord',
          'Linen, consumables and welcome packs',
          'Insurance (specialist short-let policies)',
          'Maintenance and minor repairs',
          'Mortgage interest (subject to the residential restriction. 20% tax credit only)',
        ],
      },

      { type: 'h2', text: 'The 2025 FHL abolition, and what it means now' },
      { type: 'p', text: 'Until 5 April 2025, properties meeting Furnished Holiday Let (FHL) criteria enjoyed three meaningful advantages: full mortgage interest deductibility, capital allowances on furniture, and Business Asset Disposal Relief on sale.' },
      { type: 'p', text: 'As of 6 April 2025, the FHL regime no longer exists. Short-let properties are now taxed like any other rental. Meaning the residential mortgage interest restriction applies, and FHL-specific reliefs are gone.' },
      { type: 'p', text: 'Practically: if you bought a Central London short-let on a high-leverage residential mortgage and were relying on full interest deductibility, your effective tax rate is materially worse than it was in 2024. Many of our clients have moved financing into corporate structures (limited company ownership) since the announcement.' },

      { type: 'h2', text: 'The £90,000 VAT threshold. London-specific risk' },
      { type: 'p', text: "Short-let income is not exempt from VAT. It's a taxable supply. Once gross short-let income exceeds £90,000 in any rolling 12-month period, the landlord (or their limited company) must register for VAT and charge 20% on every booking." },
      { type: 'p', text: 'In [Mayfair](/areas/mayfair), Marylebone and Knightsbridge, two-bed apartments routinely generate £150,000+ in gross short-let income. VAT registration is a real consideration.' },
      { type: 'p', text: "The Tour Operators Margin Scheme (TOMS) can mitigate some of the VAT impact for managed short-lets, but it's structurally complex and the right answer depends on the property and the operator structure. Worth a conversation with an accountant if you're approaching the threshold." },

      {
        type: 'cta',
        headline: 'Want your property structured tax-efficiently from day one?',
        body:
          'When we onboard a property we set up cleaning accounting, expense tracking and payout routing to maximise your net. Speak to us about how we structure new properties.',
        href: '/contact',
        label: 'Get a free property review',
      },

      { type: 'h2', text: 'Council tax vs business rates' },
      { type: 'p', text: 'A short-let property can in some circumstances be reclassified from council tax to business rates, provided occupancy thresholds are met (140 nights available, 70 nights actually let). For some smaller properties, Small Business Rates Relief means an effective rate of zero. Meaningfully cheaper than council tax.' },
      { type: 'p', text: '2024 rule changes made this harder to achieve in practice. The Valuation Office Agency now scrutinises applications closely; HMRC and the VOA share data on short-let occupancy.' },

      { type: 'h2', text: 'The 90-day rule and tax classification' },
      { type: 'p', text: "London's [90-day rule](/blog/90-day-rule-airbnb-london) interacts with tax classification in subtle ways. Properties used predominantly as short-lets (above 90 days, with planning permission) are typically classified as commercial for council tax / business rates purposes. Properties operating within the 90-night cap typically remain residential." },
      { type: 'p', text: 'Mixing short-stay and mid-term lets keeps you on the residential side of this line. Operating compliantly within the cap matters for both regulation and tax.' },

      { type: 'h2', text: 'The top five tax mistakes we see' },
      {
        type: 'ol',
        items: [
          'Not declaring at all. HMRC data is comprehensive. Penalties for non-disclosure can reach 100% of the unpaid tax, plus interest',
          'Treating Airbnb cleaning fees as non-income. Cleaning fees collected from guests are gross income. The cost of cleaning is a separate expense to deduct',
          'Forgetting to deduct platform fees and management fees. Airbnb takes ~15% before payout; managers take 18% on top. Both are fully deductible',
          'Mishandling the 90-day rule. Exceeding 90 days without planning permission can reclassify the property for tax purposes',
          'Assuming FHL still applies. It does not, for any year ending after 5 April 2025',
        ],
      },

      { type: 'h2', text: 'Structural decisions that make the biggest difference' },
      { type: 'p', text: 'Three structural choices have outsized impact on your effective tax rate:' },
      {
        type: 'ul',
        items: [
          'Personal vs limited company ownership. Post-FHL, limited company ownership is more attractive than it was, especially for highly leveraged properties',
          'Whether to bring the property under the VAT threshold via management structure (TOMS)',
          'Council tax vs business rates classification. Small properties with Small Business Rates Relief can save thousands annually',
        ],
      },
      { type: 'p', text: "None of these are decisions to make on a blog post. They're conversations with a qualified accountant who knows the London short-let market." },

      CLOSING_PARA,

      {
        type: 'cta',
        headline: 'Get an introduction to our trusted accountancy partners',
        body:
          'We work with two London-based accountancy firms who specialise in short-let property taxation. Free introduction. No obligation, no referral fee.',
        href: '/contact',
        label: 'Request an introduction',
      },

      { type: 'p', text: 'This article is general information only. Tax law is complex and individual circumstances vary. Landlords should consult a qualified accountant or tax adviser before acting on anything described here.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // POST 11 — Thu 18 Jun 2026 — Area Guides
  // ─────────────────────────────────────────────────────────────────────
  {
    hiddenFromIndex: true,
    slug: 'marylebone-property-investment',
    title: "Why Marylebone Is One of London's Best Areas for Short-Let Property Investment",
    excerpt:
      "Steady demand. Premium guests. Year-round occupancy. Why we manage more property in Marylebone than anywhere else. And what makes a Marylebone short-let perform.",
    category: 'Area Guides',
    date: '2026-06-18',
    readTime: '6 min read',
    author: TEAM,
    heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&q=80',
    metaTitle: 'Marylebone Property Investment Short-Let. Landlord Guide',
    metaDescription:
      "Why Marylebone is one of London's strongest short-let areas. Demand drivers, guest profile, average returns, and the properties that perform best.",
    keywords: [
      'marylebone property investment short let',
      'marylebone airbnb',
      'short let marylebone w1',
      'marylebone landlord',
    ],
    body: [
      { type: 'p', text: "We manage more property in Marylebone than anywhere else. There's a reason for that. And it's not just that our head office is in the area. Marylebone is consistently one of the strongest-performing short-let postcodes in London, year after year." },
      { type: 'p', text: "If you own property in W1U, W1G or W1H, or you're considering it, here's what makes the area work and what to think about when setting up a Marylebone short-let." },

      { type: 'h2', text: 'What makes Marylebone work' },
      { type: 'p', text: 'Three structural factors drive demand in Marylebone that few other London areas can match.' },

      { type: 'h3', text: '1. Harley Street and the private medical sector' },
      { type: 'p', text: 'Harley Street is the densest concentration of private medical practice in the UK. International patients travel for surgery, oncology, fertility and orthopaedic treatments. And they stay for two weeks to three months at a time. They pay premium rates for accommodation within walking distance of clinics.' },
      { type: 'p', text: 'This is a uniquely Marylebone driver. No other London neighbourhood has equivalent year-round medical-led demand.' },

      { type: 'h3', text: '2. Corporate guests around Baker Street and Wigmore Street' },
      { type: 'p', text: 'The area between Baker Street and Bond Street is dense with corporate offices. Marks & Spencer head office, the BBC, multiple law firms, and a strong financial services presence. Weekday business travel is high; mid-week occupancy on our [Marylebone portfolio](/areas/marylebone) averages 88%.' },

      { type: 'h3', text: '3. Marylebone High Street and Chiltern Street tourism' },
      { type: 'p', text: "Marylebone High Street has become one of the prettiest, most curated retail streets in London. Daunt Books, the Sunday farmers' market, La Fromagerie, Conran Shop. It's a destination in its own right. Tourist demand peaks in spring, summer and the Christmas markets." },

      { type: 'h2', text: 'The guest profile' },
      { type: 'p', text: "Marylebone's guest mix is heavily skewed toward longer, premium stays. Average booking length across our portfolio is 7-9 nights. Significantly longer than the London average of 3-4." },
      {
        type: 'ul',
        items: [
          '35% medical and family-of-medical guests (international, 14-90 night stays)',
          '30% corporate business travellers (mid-week, 3-5 night stays)',
          '25% leisure and cultural tourists (weekend, 3-4 night stays)',
          '10% mid-term corporate let (3-6 month assignments)',
        ],
      },
      { type: 'p', text: 'Compared to areas like Notting Hill or Shoreditch where bookings are dominated by short weekend leisure stays, Marylebone is a mid-stay market. And that materially affects how a property should be set up.' },

      { type: 'h2', text: 'What types of property perform best' },
      { type: 'p', text: 'In our experience managing 30+ Marylebone units, performance varies dramatically by property type.' },

      { type: 'h3', text: 'Strongest performers' },
      {
        type: 'ul',
        items: [
          '1-bed apartments in mansion blocks (Chiltern Street, Devonshire Street, Wimpole Street). Consistent corporate and medical demand',
          '2-bed apartments above ground-floor retail on Marylebone High Street. Family and longer-stay leisure',
          'Studios near Harley Street. Single medical patients and short-stay business',
          'Full residential blocks. We operate a 14-unit block ([Beaumont Court](/areas/marylebone)) under [guaranteed rent](/guaranteed-rent), and the model works exceptionally well for block-level ownership',
        ],
      },

      { type: 'h3', text: 'Weaker performers' },
      {
        type: 'ul',
        items: [
          'Properties above busy ground-floor pubs or late-licence bars (noise complaints)',
          'Apartments above Marylebone Station ticket halls (transient noise, less premium feel)',
          'Walk-up flats above the second floor without lifts (medical guests struggle)',
          '3-bed+ luxury apartments. These can work but rates are too high for the typical Marylebone guest profile; better suited to Mayfair',
        ],
      },

      {
        type: 'cta',
        headline: 'Own property in Marylebone? Get a free valuation',
        body:
          "We'll send a guaranteed monthly figure and a projected short-let income within one business day. No fee, no obligation, no pressure.",
        href: '/lp/marylebone',
        label: 'Get my Marylebone valuation',
      },

      { type: 'h2', text: 'Realistic returns in Marylebone' },
      { type: 'p', text: 'Conservative short-let estimates for Marylebone properties. Net of our 18% management fee and 10% conservative ADR cushion. Typically come out as follows. These are realistic targets, not headline figures, and most landlords exceed them in year one.' },
      {
        type: 'table',
        headers: ['Property type', 'Long-let / mo', 'Short-let net / mo', 'Guaranteed rent / mo'],
        rows: [
          ['Studio', '£1,600', '£3,200', '£1,600'],
          ['1-bed', '£2,200', '£4,200', '£2,200'],
          ['2-bed', '£3,200', '£6,400', '£3,200'],
          ['3-bed', '£4,500', '£8,800', '£4,500'],
        ],
      },
      { type: 'p', text: "Long-let and guaranteed rent are pegged at full market rate. They're the same number. Short-let net is conservative and most landlords beat it." },

      { type: 'h2', text: 'Risks specific to Marylebone' },
      { type: 'p', text: 'Three things to be aware of:' },
      {
        type: 'ol',
        items: [
          "London's [90-day rule](/blog/90-day-rule-airbnb-london) applies. Most Marylebone properties operate to the cap and then switch to mid-term lets. Typically extending Harley Street medical stays. For the rest of the year",
          'Westminster City Council is one of the most enforcement-active boroughs. Stay strictly compliant',
          'Many Marylebone leasehold blocks have explicit short-let restrictions in the head lease. Check before listing',
        ],
      },

      { type: 'h2', text: 'Why we work in Marylebone specifically' },
      { type: 'p', text: 'Our team is based two minutes from Marylebone High Street. We know the porters, the cleaners, the building managers, the local maintenance team, the medical-stay agents. That density of local knowledge translates into faster issue resolution, better guest experience, and ultimately higher returns.' },
      { type: 'p', text: 'We manage [Beaumont Court](/areas/marylebone) under guaranteed rent and a further 15 individual units in W1U and W1G under short-let management. The portfolio averages 4.9 stars and 88% occupancy.' },

      CLOSING_PARA,

      {
        type: 'cta',
        headline: 'Specialist Marylebone property management',
        body:
          "Free valuation in 24 hours. Choose between guaranteed rent and short-let management. We'll model both for your specific Marylebone property.",
        href: '/lp/marylebone',
        label: 'Get my Marylebone valuation',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // POST 12 — Sun 21 Jun 2026 — Area Guides
  // ─────────────────────────────────────────────────────────────────────
  {
    hiddenFromIndex: true,
    slug: 'kensington-short-let-guide',
    title: "Short-Let Management in Kensington: A Landlord's Complete Guide",
    excerpt:
      "Why Kensington consistently outperforms. 94% occupancy across our W8 portfolio, premium guest profile, year-round demand. Plus the streets and unit types that perform best.",
    category: 'Area Guides',
    date: '2026-06-21',
    readTime: '6 min read',
    author: TEAM,
    heroImage: 'https://images.unsplash.com/photo-1526654196244-3bdc251b0965?w=1600&q=80',
    metaTitle: 'Kensington Short-Let Management. Complete Landlord Guide W8',
    metaDescription:
      'Everything London landlords need to know about short-let management in Kensington W8: demand, guest mix, best streets, realistic returns.',
    keywords: [
      'kensington short let management',
      'high street kensington airbnb',
      'short let w8',
      'kensington property manager',
    ],
    body: [
      { type: 'p', text: 'Kensington W8 is one of the strongest short-let postcodes in London. We manage a 12-unit portfolio across two buildings on Kensington High Street. Branded [Kensington Gate](/areas/high-street-kensington). And average occupancy across the portfolio is 94% across the calendar year.' },
      { type: 'p', text: "If you own property in W8, or you're considering buying, here's the complete guide to what makes Kensington work for short-let and what to expect from professional management." },

      { type: 'h2', text: 'Why Kensington works for short-let' },
      { type: 'p', text: 'Kensington has the unusual combination of being central enough to attract serious tourist demand, residential enough that the properties remain attractive long-term, and culturally significant enough to draw an international guest profile.' },

      { type: 'h3', text: 'Cultural and tourist demand' },
      { type: 'p', text: 'Kensington Palace, Hyde Park, the V&A, the Natural History Museum and Royal Albert Hall are all within a 15-minute walk of Kensington High Street. Tourist demand is consistent year-round, with peaks during Wimbledon, the Chelsea Flower Show and the summer holidays.' },

      { type: 'h3', text: 'Corporate demand from Earls Court and Olympia' },
      { type: 'p', text: 'Kensington Olympia hosts ~120 exhibitions per year, drawing 1.5m+ visitors annually. Corporate exhibitors and attendees fill short-let inventory across W8 and SW5 for 4-7 night stays.' },

      { type: 'h3', text: 'International family stays' },
      { type: 'p', text: 'Kensington is a primary destination for affluent international families visiting London for 2-4 week stays. Typically renting 2 and 3-bed apartments. Average daily rate for these stays is significantly higher than tourist demand.' },

      { type: 'h2', text: 'The 94% occupancy story' },
      { type: 'p', text: "Our Kensington Gate portfolio averages 94% across 12 months. That's substantially higher than the London average (~70%) and our overall portfolio average (~80%)." },
      { type: 'p', text: 'Three things drive it:' },
      {
        type: 'ol',
        items: [
          'Mix of short-stay and mid-term. We operate strictly to [the 90-day rule](/blog/90-day-rule-airbnb-london) and then switch to 90+ night mid-term lets, which fill the calendar without compliance risk',
          'Active corporate channel. We have direct booking relationships with three London exhibition organisers and a private medical concierge service, both of which deliver consistent mid-week occupancy',
          'Premium guest experience. [our Quality Officer attends every changeover](/property-management), which protects our 4.9 average rating and keeps us at the top of platform search results',
        ],
      },

      { type: 'h2', text: 'The best streets and unit types' },
      { type: 'p', text: 'Kensington property is not uniform. Some streets and building types significantly outperform others.' },

      { type: 'h3', text: 'Strongest streets' },
      {
        type: 'ul',
        items: [
          'Kensington High Street (above retail). Strong tourist + retail-day-out guests',
          'Phillimore Gardens. Hyde Park-facing, top-tier rates',
          'Holland Park. Slightly quieter, premium leisure stays',
          'Stratford Road. Boutique residential street, family demand',
          'Earls Court Road. Strong corporate and exhibition demand',
        ],
      },

      { type: 'h3', text: 'Best unit types' },
      {
        type: 'ul',
        items: [
          '1-bed apartments. Strongest tenant pool, best gross-to-net ratios',
          '2-bed in mansion blocks. Family stays at premium rates',
          '3-bed in period buildings. Premium international family demand',
        ],
      },

      { type: 'h3', text: 'Weaker performers' },
      {
        type: 'ul',
        items: [
          'Walk-up flats above the second floor in buildings without lifts. Limits family guest pool',
          'Studios in interior blocks (no view, no light). Lower nightly rate',
          'Properties on Cromwell Road specifically (heavy traffic, noise complaints)',
        ],
      },

      {
        type: 'cta',
        headline: 'Own property in Kensington? Get a free estimate',
        body:
          "We'll model a realistic monthly short-let income for your Kensington property, conservatively against our existing W8 portfolio. Free, 24-hour turnaround.",
        href: '/lp/kensington',
        label: 'Get my Kensington estimate',
      },

      { type: 'h2', text: 'Pricing in Kensington' },
      { type: 'p', text: 'Conservative net short-let income estimates for Kensington properties, net of our 18% management fee:' },
      {
        type: 'table',
        headers: ['Property type', 'Avg nightly (peak)', 'Avg nightly (off-peak)', 'Net monthly'],
        rows: [
          ['Studio', '£260', '£190', '£3,500-£4,800'],
          ['1-bed', '£350', '£260', '£5,000-£7,000'],
          ['2-bed', '£550', '£400', '£8,200-£11,500'],
          ['3-bed', '£800', '£580', '£12,000-£16,000'],
        ],
      },
      { type: 'p', text: 'These are conservative figures based on properties we manage today. Most owners beat them in year one.' },

      { type: 'h2', text: 'Compliance in Kensington' },
      { type: 'p', text: 'Kensington & Chelsea is one of the two most enforcement-active boroughs in London (Westminster is the other). The borough actively monitors platforms and responds quickly to neighbour complaints.' },
      { type: 'p', text: 'Our approach: strict adherence to [the 90-day rule](/blog/90-day-rule-airbnb-london), full HMRC declaration of all income (see our [tax guide](/blog/airbnb-tax-guide-london-2026)), and proactive noise management. Every property in our W8 portfolio has noise-monitoring devices installed and our no-parties policy is enforced.' },
      { type: 'p', text: 'We have not had a single enforcement notice across our Kensington portfolio in three years of operation.' },

      { type: 'h2', text: 'What good Kensington management looks like' },
      { type: 'p', text: 'Demanding guest profile means demanding standards. Kensington guests pay premium rates and expect hotel-equivalent service. The properties that consistently get 5-star reviews share three characteristics:' },
      {
        type: 'ol',
        items: [
          'Quality housekeeping with in-person quality check between every guest',
          '24/7 in-stay support with under-30-minute response times',
          'Concierge-level guest experience. Restaurant bookings, local recommendations, late check-outs accommodated',
        ],
      },
      { type: 'p', text: "This is what our W8 portfolio delivers as standard. It's the operational reason occupancy stays at 94%. Guests rebook and refer." },

      CLOSING_PARA,

      {
        type: 'cta',
        headline: 'Specialist Kensington short-let management',
        body:
          'Free income estimate in 24 hours for your Kensington property. We currently manage 12 units across W8 and have capacity for a small number of additional properties this year.',
        href: '/lp/kensington',
        label: 'Get my free estimate',
      },
    ],
  },
]

/**
 * Posts that should appear on the /blog index list and the homepage preview.
 * Direct article URLs, the sitemap, and slug lookups continue to use the
 * full BLOG_POSTS array. So posts hidden from the index remain reachable
 * by direct link and can be restored by flipping their hiddenFromIndex flag.
 */
export const VISIBLE_BLOG_POSTS: BlogPost[] = BLOG_POSTS.filter(
  (p) => !p.hiddenFromIndex,
)

export function getBlogPostBySlug(slug: string): BlogPost | null {
  return BLOG_POSTS.find((p) => p.slug === slug) ?? null
}

export function getRelatedPosts(currentSlug: string, n = 3): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.slug !== currentSlug).slice(0, n)
}

export function getAllCategories(): BlogCategory[] {
  const set = new Set<BlogCategory>()
  for (const p of VISIBLE_BLOG_POSTS) set.add(p.category)
  return Array.from(set)
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug)
}
