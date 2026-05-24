import { PROPERTIES, type Property } from './properties'

// Static area metadata. The displayed list of areas, however, is derived
// from PROPERTIES at render time (see deriveAreas()).
//
// Note: we no longer publish indicative avg monthly / nightly rates on
// the site. Those were modelled figures and not defensible against a
// landlord challenging them, so they've been replaced sitewide with a
// "Free valuation" prompt. Don't reintroduce a rate field here.
//
// Stats policy: do NOT add invented occupancy %, yield %, or other
// unverified performance numbers to any field on this record. Only
// figures the operator has explicitly confirmed (e.g. the Marylebone
// £15,000/month guaranteed-rent payment) may appear.

/**
 * Deep, locally-grounded content for a borough page. Optional — boroughs
 * without a content block continue to render the legacy one-paragraph
 * intro + demand line. Populate this in stages, per-borough.
 */
export type AreaContent = {
  /** Hero overview paragraphs. First paragraph replaces the legacy `intro` in the hero. */
  overview: string[]
  /** Property character section — typical housing stock. */
  propertyCharacter: { heading: string; body: string[] }
  /** Who rents / stays in this borough. */
  guestProfile: {
    heading: string
    profiles: { label: string; body: string }[]
  }
  /** Real stations, parks, landmarks. */
  locationTransport: { heading: string; body: string[] }
  /** 90-day rule, conservation areas, council-specific planning quirks. */
  regulation: { heading: string; body: string[] }
  /** Optional serviced-accommodation block (Mayfair / Kensington / Chelsea / Marylebone). */
  servicedAccommodation?: { heading: string; body: string[] }
}

export type AreaMeta = {
  slug: string
  name: string         // e.g. "Marylebone"
  postcode: string     // e.g. "W1"
  tagline: string
  intro: string        // legacy hero paragraph — used when `content` absent
  demand: string       // legacy one-line demand banner — used when `content` absent
  content?: AreaContent
}

export const AREA_META: Record<string, AreaMeta> = {
  marylebone: {
    slug: 'marylebone',
    name: 'Marylebone',
    postcode: 'W1',
    tagline: 'Block & portfolio management',
    intro:
      "Marylebone runs from Marble Arch in the west to Great Portland Street in the east, with Regent's Park to the north and Oxford Street to the south. It's a Westminster postcode that holds two distinct rental markets in the same square mile: long-term residents in the mansion blocks off Marylebone High Street, and a constant rotation of short-stay guests drawn by Harley Street consultations, Wigmore Hall concerts and the Marylebone Village retail scene.",
    demand: 'Year-round corporate, medical and leisure demand.',
    content: {
      overview: [
        "Marylebone runs from Marble Arch in the west to Great Portland Street in the east, with Regent's Park to the north and Oxford Street to the south. It's a Westminster postcode that holds two distinct rental markets in the same square mile: long-term residents in the mansion blocks off Marylebone High Street, and a constant rotation of short-stay guests drawn by Harley Street consultations, Wigmore Hall concerts and the Marylebone Village retail scene.",
        'For landlords, that mix is the reason both our products work here. Guaranteed rent suits owners of mansion-block flats or whole-building portfolios who want a fixed monthly payment and zero operational involvement. Short-let management suits owners closer to Wigmore Street, Chiltern Street and the High Street, where nightly rates support a more dynamic calendar.',
        'We currently operate a Marylebone block under our guaranteed-rent programme — the landlord receives £15,000 per month on a fixed schedule, with all operations, tenants and maintenance handled by our team.',
      ],
      propertyCharacter: {
        heading: 'Marylebone housing stock.',
        body: [
          "Marylebone's stock is unusually consistent for Zone 1. The dominant typology is the late-Victorian and Edwardian mansion block — red brick or Portland stone, porter at the door, 1- to 3-bedroom flats with original cornicing and reception rooms facing inward to garden squares. Bryanston Square, Montagu Square, Dorset Square and the streets off Hyde Park sit on this template.",
          'Between the blocks you get Georgian and early-Victorian terraces, most converted to flats decades ago, many with rear mews access. The newer-build stock is concentrated around Chiltern Street and Marylebone Lane — typically boutique conversions above retail, smaller floorplates, designed for short stays.',
          'Listed-building consent and conservation-area constraints are an everyday consideration north of Wigmore Street; we factor that in at onboarding.',
        ],
      },
      guestProfile: {
        heading: 'The Marylebone guest mix.',
        profiles: [
          {
            label: 'Harley Street medical visitors',
            body: 'Patients and families staying weeks at a time while undergoing treatment at the Harley Street and Wimpole Street clinics. They prioritise quiet, central, walkable. Often booked through medical concierge services.',
          },
          {
            label: 'Corporate visitors around Baker Street',
            body: 'Staff visiting BBC Studios, the Westminster Magistrates’ Court area, and the Bond Street / Mayfair professional services cluster. Mid-week heavy, typical stays one to four weeks.',
          },
          {
            label: 'Wigmore Hall & Royal Academy of Music audiences',
            body: 'Shorter weekend bookings tied to performance schedules and term-time recitals.',
          },
          {
            label: 'High Street weekend visitors',
            body: 'Marylebone High Street and the Daunt Books / Conran Shop corridor pulls weekend visitors who want central without the Soho noise.',
          },
          {
            label: 'Long-let professionals',
            body: "For our guaranteed-rent stock, occupants tend to be Marylebone's standing population of finance and professional services tenants, often on corporate housing budgets.",
          },
        ],
      },
      locationTransport: {
        heading: 'Connections.',
        body: [
          'Four tube lines run through the area: Bakerloo (Marylebone, Edgware Road, Baker Street, Regent’s Park, Oxford Circus), Circle and Hammersmith & City (Baker Street, Edgware Road, Great Portland Street), and Jubilee at Baker Street and Bond Street.',
          'The Elizabeth line at Bond Street puts Canary Wharf around 17 minutes east and Heathrow Terminal 5 around 32 minutes west. Marylebone mainline runs to Birmingham, Oxford and the Chilterns.',
          "Regent's Park sits on the northern edge, Hyde Park to the south-west, and Oxford Street and Bond Street are within walking distance for retail and food.",
        ],
      },
      regulation: {
        heading: 'What Marylebone landlords should know.',
        body: [
          'Marylebone is governed by Westminster City Council, which enforces the 90-day rule for short-let on entire properties more strictly than most London boroughs. We operate every short-let unit Rule-compliant — by restricting nights, by structuring stays over 90 nights (which sit outside the rule), or by operating on the guaranteed-rent corporate-let model where the 90-day rule does not apply.',
          'Most of north Marylebone falls inside the Dorset Square and Portman Estate conservation areas, and a meaningful share of the stock is listed — typically Grade II — which affects what can change inside and outside the property.',
          'Leasehold restrictions on short-let are common in mansion blocks; we check head-lease terms before agreeing any short-let arrangement.',
        ],
      },
      servicedAccommodation: {
        heading: 'Serviced accommodation in Marylebone.',
        body: [
          'Marylebone supports the longer-stay, hotel-alternative end of the serviced-accommodation market well — Harley Street demand, corporate visitors avoiding Mayfair pricing, and the Wigmore Hall crowd all book multi-week.',
          'For landlords with a 1- or 2-bed Marylebone flat suited to this market, we operate it under our serviced-accommodation programme: full furnishing brief, multi-platform listing, in-house housekeeping on a hotel turnaround cadence, and 24/7 guest support. [OPTIONAL: typical monthly net for a serviced 1-bed in Marylebone — fill in once verified]',
        ],
      },
    },
  },
  'high-street-kensington': {
    slug: 'high-street-kensington',
    name: 'High Street Kensington',
    postcode: 'W8',
    tagline: 'Short-let specialists',
    intro:
      'High Street Kensington W8 is one of the most consistent short-let postcodes in Central London. Demand is anchored by Kensington Palace and the Kensington Gardens approach, the High Street retail corridor, and the South Kensington museum quarter — the V&A, Natural History Museum and Science Museum — a short walk south.',
    demand: 'Strong year-round tourist and corporate demand.',
    content: {
      overview: [
        'High Street Kensington W8 is one of the most consistent short-let postcodes in Central London. Demand is anchored by Kensington Palace and the Kensington Gardens approach, the High Street retail corridor, and the South Kensington museum quarter — the V&A, Natural History Museum and Science Museum — a short walk south.',
        'The borough is Royal Borough of Kensington and Chelsea (RBKC), which gives the area a different regulatory texture from neighbouring Westminster. Most of W8 sits inside the Kensington Conservation Area and the Holland Park Conservation Area, with a high concentration of grade-listed terraces. That shapes everything from window replacements to short-let suitability.',
        'We currently operate a Kensington portfolio under short-let management — request a free valuation for your W8 property.',
      ],
      propertyCharacter: {
        heading: 'Kensington W8 housing stock.',
        body: [
          'The dominant typology is the white-stucco mid-19th-century terrace — six- and seven-storey, often converted into flats decades ago, with reception rooms facing the street and bedrooms toward private gardens. Tightly packed around Edwardes Square, Kensington Square, Earl’s Terrace and the streets running south from the High Street.',
          'The second layer is Edwardian and inter-war mansion blocks — red brick, porter, lift, larger floorplates, common around Phillimore Gardens, Iverna Gardens and Kensington Court. The third layer is the Holland Park edge: detached and semi-detached white-stucco villas, larger gardens, set back from the road.',
          'Listed-building consent is a frequent consideration; we check status before quoting any furnishing or internal works.',
        ],
      },
      guestProfile: {
        heading: 'The Kensington guest mix.',
        profiles: [
          {
            label: 'Museum-quarter family visitors',
            body: 'Half-term, school holiday and weekend visits centred on the V&A / Natural History / Science Museum triangle. Multi-night stays in 2- and 3-bed units.',
          },
          {
            label: 'Kensington Palace and Royal Parks tourism',
            body: 'Year-round international leisure, particularly strong in summer.',
          },
          {
            label: 'High Street retail and lifestyle visitors',
            body: 'The High Street, Whole Foods, the Design Museum on the Holland Park edge, and the wider lifestyle corridor pull weekend visitors who want central without the Soho noise.',
          },
          {
            label: 'Imperial College and Royal Brompton medical visitors',
            body: 'Imperial’s South Kensington campus and Royal Brompton Hospital pull professional medium-stay bookings.',
          },
          {
            label: 'Corporate professionals',
            body: 'Embassies along Kensington Palace Gardens and the cluster of professional services around the High Street.',
          },
        ],
      },
      locationTransport: {
        heading: 'Connections.',
        body: [
          'High Street Kensington station (Circle, District) sits at the centre of the postcode; Notting Hill Gate (Central, Circle, District) is on the north edge, Gloucester Road (Piccadilly, Circle, District) on the south-east, South Kensington (Piccadilly, Circle, District) within walking distance for the museum quarter, Holland Park (Central) for the western edge.',
          'The Piccadilly line at Gloucester Road runs direct to Heathrow Terminals 2/3, 4 and 5 — meaningful for international guest bookings. Kensington Gardens and Hyde Park form the eastern boundary; Holland Park borders the west.',
        ],
      },
      regulation: {
        heading: 'What Kensington landlords should know.',
        body: [
          'RBKC enforces the London 90-day rule for entire-property short-let. We operate every short-let unit Rule-compliant — either by capping nights, by mixing stays over 90 nights (which sit outside the rule), or by switching to the corporate-let / guaranteed-rent model where the rule does not apply.',
          'RBKC’s listed-building density also means even cosmetic exterior or fenestration changes can need consent. Lease covenants in mansion blocks frequently restrict short-let; we check head-lease terms at onboarding.',
        ],
      },
      servicedAccommodation: {
        heading: 'Serviced accommodation in Kensington.',
        body: [
          'Kensington is one of the strongest serviced-accommodation markets in Central London — the combination of museum-quarter family stays, Imperial / Royal Brompton visiting academics, and a steady international tourist baseline supports the longer-stay product reliably.',
          'For landlords with a W8 1- or 2-bed flat suited to this market, we would operate it under our serviced-accommodation programme — request a free valuation. [OPTIONAL: typical monthly net for a serviced 1-bed in Kensington — fill in once verified]',
        ],
      },
    },
  },
  pimlico: {
    slug: 'pimlico',
    name: 'Pimlico',
    postcode: 'SW1',
    tagline: 'Guaranteed rent & blocks',
    intro:
      'Pimlico SW1 sits between the river and Victoria, with Westminster and Whitehall to the east and Chelsea to the west. The area is governed by Westminster City Council. Its character is residential: largely white-stucco mid-19th-century terraces laid out on Thomas Cubitt’s grid, fronting onto squares — Eccleston Square, Warwick Square, St George’s Square.',
    demand: 'Corporate-led demand with lower seasonality than W1.',
    content: {
      overview: [
        'Pimlico SW1 sits between the river and Victoria, with Westminster and Whitehall to the east and Chelsea to the west. The area is governed by Westminster City Council. Its character is residential: largely white-stucco mid-19th-century terraces laid out on Thomas Cubitt’s grid, fronting onto squares — Eccleston Square, Warwick Square, St George’s Square. Steady, low-volatility rental demand year-round, with a strong corporate weekday tilt from Westminster and Victoria.',
        'For landlords, SW1 supports both products. Guaranteed rent suits owners of mansion-block flats and serviced-apartment buildings near Vauxhall Bridge and Lupus Street, where corporate demand is consistent. Short-let management suits well-presented period flats closer to Belgravia, where nightly pricing supports a more dynamic calendar.',
        'We currently operate a Pimlico building under our guaranteed-rent programme — request a free valuation for your SW1 unit.',
      ],
      propertyCharacter: {
        heading: 'Pimlico housing stock.',
        body: [
          'Pimlico’s dominant typology is the Thomas Cubitt white-stucco terrace — five storeys, columned porticoes, raised ground floor, basement flat, repeated street after street. Most were converted to 1- and 2-bedroom flats in the 20th century. The squares — St George’s, Eccleston, Warwick — preserve the original residential pattern.',
          'Between the terraces sit mansion blocks (Dolphin Square is the most famous, but smaller blocks repeat through SW1V) and post-war infill where wartime bomb damage was rebuilt. Closer to the river, modern conversions and purpose-built serviced apartments are concentrated.',
        ],
      },
      guestProfile: {
        heading: 'The Pimlico guest mix.',
        profiles: [
          {
            label: 'Whitehall and Westminster corporate stays',
            body: 'Civil service contractors, parliamentary visitors, departmental visitors needing walkable access to Westminster.',
          },
          {
            label: 'Victoria-area business travel',
            body: 'Victoria station spillover for guests with regional or south-coast travel.',
          },
          {
            label: 'Tate Britain and South Bank cultural visitors',
            body: 'Weekend leisure, often two- to four-night stays.',
          },
          {
            label: 'Westminster Hospital and St George’s adjacency',
            body: 'Medium-stay medical visitors.',
          },
          {
            label: 'Long-let professionals',
            body: 'Pimlico’s resident population skews professional services and civil service.',
          },
        ],
      },
      locationTransport: {
        heading: 'Connections.',
        body: [
          'Pimlico station (Victoria line) sits in the middle of the postcode, Victoria (Victoria, Circle, District, mainline) on the north edge for South Coast and Brighton-line rail, Vauxhall (Victoria, mainline) on the south-west, and St James’s Park (District, Circle) walking distance for Westminster.',
          'Westminster, Whitehall and Parliament are within a 15-minute walk. The Thames Embankment runs the southern boundary. Tate Britain is on Millbank at the south-eastern edge; Battersea Power Station sits across the river to the west.',
        ],
      },
      regulation: {
        heading: 'What Pimlico landlords should know.',
        body: [
          'Westminster City Council enforces the 90-day rule strictly; we operate every short-let unit Rule-compliant or switch to the corporate-let / guaranteed-rent model.',
          'Much of Pimlico falls inside the Pimlico Conservation Area, a large designation that protects the Cubitt terraces. Listed-building status is common, particularly on the squares. Lease covenants restricting short-let are widespread in mansion blocks; we check head-lease terms before agreeing arrangements.',
        ],
      },
    },
  },
  mayfair: {
    slug: 'mayfair',
    name: 'Mayfair',
    postcode: 'W1',
    tagline: 'Ultra-premium short-let',
    intro:
      'Mayfair commands the top of the Central London nightly market. Demand is led by high-net-worth leisure, family offices, embassy-related travel and executives staying near the Bond Street and Berkeley Square professional services cluster. White-glove housekeeping, concierge handovers and discretion-led guest vetting are standard.',
    demand: 'Ultra-premium leisure and executive demand year-round.',
  },
  chelsea: {
    slug: 'chelsea',
    name: 'Chelsea',
    postcode: 'SW3',
    tagline: 'Premium residential',
    intro:
      'Chelsea SW3 is Royal Borough of Kensington and Chelsea territory — riverside south, Brompton Cross north, Sloane Square east, World’s End and Chelsea Harbour west. The King’s Road runs through the middle. The combination of design appeal, brand and walkability supports strong year-round leisure demand, with a long-stay segment driven by the Royal Hospital Chelsea, Chelsea & Westminster Hospital and the residential streets around Cheyne Walk.',
    demand: 'Leisure-led demand with strong weekend bookings year-round.',
    content: {
      overview: [
        'Chelsea SW3 is Royal Borough of Kensington and Chelsea territory — riverside south, Brompton Cross north, Sloane Square east, World’s End and Chelsea Harbour west. The King’s Road runs through the middle. The combination of design appeal, brand and walkability supports strong year-round leisure demand, with a long-stay segment driven by the Royal Hospital Chelsea, Chelsea & Westminster Hospital and the residential streets around Cheyne Walk.',
        'For landlords, SW3 supports active short-let management strongly on the smaller flats near the King’s Road. The corporate-let / guaranteed-rent model works on larger flats and townhouses, where the operator profile matters more than the nightly rate.',
        'We currently operate a Chelsea flat under our short-let management programme on a corporate let — request a free valuation for your SW3 property.',
      ],
      propertyCharacter: {
        heading: 'Chelsea housing stock.',
        body: [
          'Three dominant typologies. Georgian and early-Victorian terraces along Cheyne Walk, Cheyne Row, Tite Street and the riverside streets — listed, often grade II*, with garden access and a premium that reflects scarcity.',
          'Edwardian mansion blocks around Sloane Avenue, Pont Street and the Brompton Cross area — red brick or stone, porter, lift. Modern riverside conversions and new-builds at Chelsea Harbour and Imperial Wharf — larger floorplates, underground parking, gym, concierge.',
          'Between these, a scatter of mews — Cheyne Mews, Glebe Place — and the post-war and 1960s flats that infill the older terraced fabric.',
        ],
      },
      guestProfile: {
        heading: 'The Chelsea guest mix.',
        profiles: [
          {
            label: 'King’s Road leisure couples and families',
            body: 'Long weekends and week-long stays, design and lifestyle motivated.',
          },
          {
            label: 'Royal Hospital and Chelsea Flower Show visitors',
            body: 'Concentrated late spring; multi-night high-demand period.',
          },
          {
            label: 'Chelsea & Westminster Hospital visitors and patients',
            body: 'Medium-stay medical bookings, often booked through hospital concierge.',
          },
          {
            label: 'Design industry stays',
            body: 'Saatchi Gallery, the King’s Road retail and design cluster, the Design Centre at Chelsea Harbour.',
          },
          {
            label: 'Corporate relocations into SW3 and SW10',
            body: 'Often three- to six-month assignments before a permanent move.',
          },
        ],
      },
      locationTransport: {
        heading: 'Connections.',
        body: [
          'Sloane Square (Circle, District) sits on the north-east edge; South Kensington (Piccadilly, Circle, District) on the north for museum-quarter walking access; Fulham Broadway (District) west; Imperial Wharf (Overground) for the riverside.',
          'No tube station sits inside the heart of SW3 itself, which keeps the area quieter and is part of its character. The Thames Embankment runs the southern boundary. Battersea Park sits directly across the river via Chelsea Bridge. Hyde Park is a short walk north via Sloane Street.',
        ],
      },
      regulation: {
        heading: 'What Chelsea landlords should know.',
        body: [
          'RBKC enforces the 90-day rule for entire-property short-let. Most of SW3 falls inside the Chelsea Conservation Area and the smaller Cheyne Conservation Area, with a high concentration of listed buildings — grade I / II* listings cluster along Cheyne Walk and the riverside streets.',
          'Lease restrictions on short-let are routine in mansion blocks; we check head-lease terms at onboarding.',
        ],
      },
      servicedAccommodation: {
        heading: 'Serviced accommodation in Chelsea.',
        body: [
          'Chelsea supports the longer-stay serviced-accommodation product well — hospital visitors, Royal Hospital adjacencies, and the steady design-industry visitor base all book multi-week.',
          'For landlords with an SW3 1- or 2-bed flat or townhouse suited to this market, we would operate it under our serviced-accommodation programme — request a free valuation. [OPTIONAL: typical monthly net for a serviced 1-bed in Chelsea — fill in once verified]',
        ],
      },
    },
  },
  westminster: {
    slug: 'westminster',
    name: 'Westminster',
    postcode: 'SW1',
    tagline: 'Mixed portfolio management',
    intro:
      'Westminster SW1 has an unusual demand mix: government, parliamentary, embassy and tourist short-let all in the same square mile. We cover Westminster under both our guaranteed-rent and short-let management products — request a free valuation for your unit.',
    demand: 'Government, corporate weekday and tourist weekend demand.',
  },
  'notting-hill': {
    slug: 'notting-hill',
    name: 'Notting Hill',
    postcode: 'W11',
    tagline: 'Boutique short-let',
    intro:
      'Notting Hill W11 is one of London’s most photographed neighbourhoods, and that translates directly to short-let demand. The Westbourne Grove, Portobello and Holland Park corridor pulls steady leisure bookings — shorter average stays than other Central London postcodes, with strong long-weekend pricing in the spring and summer.',
    demand: 'Leisure-led demand with strong long-weekend bookings.',
  },
  'canary-wharf': {
    slug: 'canary-wharf',
    name: 'Canary Wharf',
    postcode: 'E14',
    tagline: 'Corporate let specialists',
    intro:
      'Canary Wharf E14 is one of the most consistent corporate-let markets in London: weekday demand driven by the financial services cluster, a deep mid-stay segment for project teams and relocations, and softer weekend pricing. We cover the wharf under short-let management for executives and project teams.',
    demand: 'Mid-stay corporate demand, weekday-led.',
  },
  'kings-cross': {
    slug: 'kings-cross',
    name: "King's Cross",
    postcode: 'N1',
    tagline: 'Short-let & guaranteed rent specialists',
    intro:
      "King's Cross has transformed into one of London's most dynamic neighbourhoods. Home to Google, Central Saint Martins and outstanding transport links across the city and internationally via St Pancras. Strong year-round demand from corporate travellers, students and tourists makes it an excellent short-let and guaranteed rent location.",
    demand: 'Year-round corporate, student and international traveller demand.',
  },
  'earls-court': {
    slug: 'earls-court',
    name: "Earl's Court",
    postcode: 'SW5',
    tagline: 'Guaranteed Rent specialists',
    intro:
      "Earl's Court SW5 sits at one of London's best-connected interchanges. Royal Borough of Kensington and Chelsea territory, bordered by Kensington to the north, Chelsea to the east, Fulham to the south, and West Brompton to the west. The District and Piccadilly lines meet at Earl's Court station, putting Heathrow on a direct ride and the City, Westminster and the West End within roughly 15-20 minutes.",
    demand: 'International, corporate weekday and leisure weekend demand.',
    content: {
      overview: [
        "Earl's Court SW5 sits at one of London's best-connected interchanges. Royal Borough of Kensington and Chelsea territory, bordered by Kensington to the north, Chelsea to the east, Fulham to the south, and West Brompton to the west. The District and Piccadilly lines meet at Earl's Court station, putting Heathrow on a direct ride and the City, Westminster and the West End within roughly 15-20 minutes.",
        "The guest mix is unusually balanced. International visitors arrive direct via Heathrow on the Piccadilly. Professionals on mid-stay corporate assignments use the postcode for its connections rather than its prestige. Steady leisure demand reaches up to the South Kensington museum quarter and west to Olympia. SW5 sits outside the prime W1 enforcement pressure on the 90-day rule, but we still operate every short-let unit Rule-compliant.",
        "We took on Earl's Court Apartments because the demand profile supports our guaranteed-rent model on a longer fixed lease — request a free valuation for your SW5 property.",
      ],
      propertyCharacter: {
        heading: "Earl's Court SW5 housing stock.",
        body: [
          "Two dominant typologies. White-stucco mid-Victorian terraces along Cromwell Road, Earl's Court Square, Nevern Square and the streets running south — typically converted to 1- and 2-bedroom flats decades ago.",
          'Edwardian mansion blocks around Earls Court Road, Penywern Road and the area behind the station — red brick or Portland stone, lifts, porter where present. Smaller pockets of post-war flats infill the older fabric.',
          "The Earl's Court Exhibition Centre site is the major regeneration project — long-term residential development under construction will materially change the western edge of the postcode over the next decade.",
        ],
      },
      guestProfile: {
        heading: "The Earl's Court guest mix.",
        profiles: [
          {
            label: 'International arrivals via Heathrow',
            body: 'Direct Piccadilly access (no transfer) is the postcode’s biggest pull for international leisure and business travellers.',
          },
          {
            label: 'Corporate mid-stay teams',
            body: 'Project teams and consultants who need easy onward travel to City and Westminster without the W1 price premium.',
          },
          {
            label: 'South Kensington museum-quarter visitors',
            body: 'Walking distance south-east to the V&A / Natural History / Science Museum cluster.',
          },
          {
            label: 'Olympia exhibitions visitors',
            body: 'West Brompton-side trade fairs and conferences.',
          },
          {
            label: 'Stamford Bridge match-day visitors',
            body: 'Chelsea FC’s ground sits on the south-east border.',
          },
        ],
      },
      locationTransport: {
        heading: 'Connections.',
        body: [
          "Earl's Court station (District, Piccadilly) is the postcode’s anchor. Gloucester Road (Piccadilly, Circle, District) sits a short walk north-east, West Brompton (District, Overground) on the south, Barons Court (Piccadilly, District) on the west.",
          'The Piccadilly direct line to all Heathrow terminals is the single biggest transport asset. Brompton Cemetery, the Stamford Bridge area and the south-eastern reach of Chelsea sit within walking distance.',
        ],
      },
      regulation: {
        heading: "What Earl's Court landlords should know.",
        body: [
          'SW5 is RBKC governed, the same regulatory framework as Kensington and Chelsea. RBKC enforces the 90-day rule less aggressively than Westminster’s prime postcodes but the rule still applies.',
          "The Earl's Court Conservation Area covers most of the central stock; listed-building status is less common here than in W8 or SW3 but does occur. Lease covenants restricting short-let are common in mansion blocks; we check head-lease terms before agreeing arrangements.",
        ],
      },
    },
  },
  'nine-elms': {
    slug: 'nine-elms',
    name: 'Nine Elms',
    postcode: 'SW8',
    tagline: 'Short-let & guaranteed rent coverage',
    intro:
      'Nine Elms is one of the largest regeneration zones in Central London — a post-2010 redevelopment of former industrial land between Battersea and Vauxhall. The area straddles Lambeth Borough Council (most of it) and Wandsworth Borough Council (the Battersea Power Station western edge). The US Embassy, Battersea Power Station, and the New Covent Garden Market all sit inside the postcode, with the new Linear Park running the spine.',
    demand: 'Growing corporate short-let demand as the area matures.',
    content: {
      overview: [
        'Nine Elms is one of the largest regeneration zones in Central London — a post-2010 redevelopment of former industrial land between Battersea and Vauxhall. The area straddles Lambeth Borough Council (most of it) and Wandsworth Borough Council (the Battersea Power Station western edge). The US Embassy, Battersea Power Station, and the New Covent Garden Market all sit inside the postcode, with the new Linear Park running the spine.',
        'The housing stock is almost entirely modern — purpose-built apartment towers and mid-rise mixed-use blocks delivered between 2014 and the present. Demand is led by corporate relocations into the redevelopment’s commercial space, embassy-related visitors, and a growing leisure segment as Battersea Power Station establishes itself as a destination.',
        'We cover Nine Elms under both short-let management and guaranteed rent — request a free valuation for your SW8 unit.',
      ],
      propertyCharacter: {
        heading: 'Nine Elms SW8 housing stock.',
        body: [
          'The dominant typology is the modern apartment tower — concrete-and-glass, 20+ storeys, large amenity offer (pool, gym, concierge), single-aspect or wraparound floor-to-ceiling glazing. Embassy Gardens, Sky Gardens, the Battersea Power Station residential phases, and the One Thames City development are the names that recur.',
          'Mid-rise mixed-use sits between the towers — retail or commercial at ground, residential above. Very little period stock. What pre-2010 housing existed was largely industrial and has been replaced.',
          'Floorplates are larger than W1 averages; specification is consistent and aimed at the international buyer market.',
        ],
      },
      guestProfile: {
        heading: 'The Nine Elms guest mix.',
        profiles: [
          {
            label: 'US Embassy-related visitors',
            body: 'Diplomatic, contractor and visa-related stays of variable length.',
          },
          {
            label: 'Corporate relocations into the commercial cluster',
            body: 'Apple’s London HQ moved into Battersea Power Station; the surrounding office space attracts the same profile.',
          },
          {
            label: 'Battersea Power Station destination visitors',
            body: 'Leisure stays for the shopping and entertainment redevelopment, particularly weekends.',
          },
          {
            label: 'Overseas investor-owner guests',
            body: 'A meaningful share of Nine Elms stock is owned by overseas buyers who use units personally a few weeks a year — the same units suit professionally-managed short-let the rest of the time.',
          },
          {
            label: 'Northern Line extension commuters',
            body: 'The 2021 Battersea Power Station / Nine Elms station opening pulled in mid-stay corporate guests who need the City and Bank connection.',
          },
        ],
      },
      locationTransport: {
        heading: 'Connections.',
        body: [
          'Three stations serve the postcode. Vauxhall (Victoria, mainline) on the eastern edge, Nine Elms (Northern, opened 2021) in the centre, Battersea Power Station (Northern, opened 2021) on the west. The Northern extension runs direct to Bank, Moorgate and King’s Cross. Vauxhall mainline runs to Waterloo in two minutes and across the South West.',
          'The riverside walk runs the full length of the postcode. Linear Park provides the spine green space. Battersea Park sits immediately west.',
        ],
      },
      regulation: {
        heading: 'What Nine Elms landlords should know.',
        body: [
          'Lambeth (most of SW8) and Wandsworth (Battersea side) enforce the 90-day rule less aggressively than Westminster or RBKC, but the rule still applies and we operate every short-let unit Rule-compliant.',
          'Conservation-area constraints are minimal — the housing is overwhelmingly post-2010 new-build. The most relevant restrictions sit in the building lease covenants themselves. Many Nine Elms developments restrict short-let or require management-company approval; we check head-lease terms before agreeing any arrangement, and we know which buildings the standard short-let model works in and which it doesn’t.',
        ],
      },
    },
  },
  waterloo: {
    slug: 'waterloo',
    name: 'Waterloo',
    postcode: 'SE1',
    tagline: 'Guaranteed Rent specialists',
    intro:
      'Waterloo SE1 sits at the centre of one of London’s densest transport hubs and one of its most concentrated cultural quarters. The area is governed by Lambeth Borough Council, with Southwark immediately east. The combination of Waterloo / Waterloo East mainline, four tube lines, and the South Bank cultural strip drives a guest mix that’s unusually balanced across corporate weekday and leisure weekend demand.',
    demand: 'Corporate weekday and cultural-tourism weekend demand.',
    content: {
      overview: [
        'Waterloo SE1 sits at the centre of one of London’s densest transport hubs and one of its most concentrated cultural quarters. The area is governed by Lambeth Borough Council, with Southwark immediately east. The combination of Waterloo / Waterloo East mainline, four tube lines, and the South Bank cultural strip drives a guest mix that’s unusually balanced across corporate weekday and leisure weekend demand.',
        'For landlords, SE1 is one of the most reliable mid-stay corporate markets in London, with low seasonality compared with W1.',
        'We currently operate a Waterloo building under our guaranteed-rent programme on a fixed-term lease — request a free valuation for your SE1 property.',
      ],
      propertyCharacter: {
        heading: 'Waterloo SE1 housing stock.',
        body: [
          'The stock divides three ways. New-build apartments dominate the post-1990 redevelopment of the South Bank — concrete-and-glass mid-rise around the Old Vic, Waterloo Road and the streets behind the Royal Festival Hall.',
          'Converted industrial and warehouse stock around Lower Marsh, Webber Street and toward Southwark. Modest Victorian terraces further south toward Lambeth North and Elephant & Castle, mostly converted to flats.',
          'Floorplates are smaller than W1 or W8 averages. Tower-block stock with views over the river commands a premium.',
        ],
      },
      guestProfile: {
        heading: 'The Waterloo guest mix.',
        profiles: [
          {
            label: 'City of London corporate weekday stays',
            body: 'Waterloo & City line (the ’Drain’) gives a sub-five-minute commute to Bank — a major draw for project teams and consultants.',
          },
          {
            label: 'Mainline rail business travellers',
            body: 'Waterloo serves the South West — Surrey, Hampshire, the south coast — and a steady flow of out-of-London business visitors.',
          },
          {
            label: 'South Bank cultural visitors',
            body: 'National Theatre, Royal Festival Hall, BFI Southbank, Tate Modern (Southwark side), London Eye, Old Vic, Young Vic. Weekend leisure-led.',
          },
          {
            label: 'St Thomas’ and Guy’s Hospital visitors',
            body: 'Medium-stay medical bookings.',
          },
          {
            label: 'Eurostar travellers',
            body: 'St Pancras is one transfer; some travellers prefer SE1 as the base for shorter Continental trips.',
          },
        ],
      },
      locationTransport: {
        heading: 'Connections.',
        body: [
          'Waterloo station (Bakerloo, Jubilee, Northern, Waterloo & City, mainline) and Waterloo East (mainline) anchor the postcode. Southwark (Jubilee) sits a short walk east, Lambeth North (Bakerloo) south. The Jubilee runs direct to Canary Wharf in around 12 minutes; the Waterloo & City runs to Bank in under five.',
          'The South Bank cultural quarter runs along the riverside from Westminster Bridge to Blackfriars Bridge. Borough Market and London Bridge are walking distance east.',
        ],
      },
      regulation: {
        heading: 'What Waterloo landlords should know.',
        body: [
          'Lambeth’s enforcement profile on the 90-day rule is less aggressive than Westminster’s or RBKC’s, but the rule still applies and we operate every short-let unit Rule-compliant.',
          'Most of the post-1990 stock falls outside conservation-area constraints; the older fabric closer to Lambeth Road and Cornwall Road may sit inside the Lower Marsh Conservation Area. Lease covenants on new-build stock frequently restrict short-let; we check head-lease terms before agreeing arrangements.',
        ],
      },
    },
  },
  // Minimal AREA_META stub for liverpool-street. Exists so the Liverpool
  // Street property card on the homepage portfolio grid links to a real
  // page instead of 404'ing. No `content` block yet — page renders the
  // legacy hero + demand banner + property card + FAQ layout. Upgrade
  // to a full content block when there's local detail to write.
  'liverpool-street': {
    slug: 'liverpool-street',
    name: 'Liverpool Street',
    postcode: 'EC2',
    tagline: 'Guaranteed Rent specialists',
    intro:
      'Liverpool Street EC2 sits in the heart of the City of London, served by Liverpool Street station (Central, Circle, Hammersmith & City, Metropolitan, mainline and Elizabeth lines). The area combines high-density financial-services office stock with the residential pockets around Spitalfields, Bishopsgate and Broadgate. We operate a Liverpool Street building under our guaranteed-rent programme — request a free valuation for your EC2 property.',
    demand: 'Corporate weekday demand from the City and Canary Wharf-bound commuters.',
  },
}

export type DerivedArea = AreaMeta & {
  propertyCount: number
  properties: Property[]
}

// Single source for areas displayed on the homepage Areas section and the
// /areas index page. Derived from PROPERTIES so adding a property auto-shows
// its area (we still need an AREA_META entry for the long-form page).
export function deriveAreas(): DerivedArea[] {
  const seen = new Set<string>()
  const derived: DerivedArea[] = []

  for (const property of PROPERTIES) {
    if (seen.has(property.areaSlug)) continue
    seen.add(property.areaSlug)
    const meta = AREA_META[property.areaSlug]
    if (!meta) continue
    const properties = PROPERTIES.filter((p) => p.areaSlug === property.areaSlug)
    derived.push({ ...meta, propertyCount: properties.length, properties })
  }

  // Then append additional areas we cover (AREA_META) that don't yet have
  // a representative property, so the homepage Areas section still shows them.
  for (const slug of Object.keys(AREA_META)) {
    if (seen.has(slug)) continue
    seen.add(slug)
    derived.push({ ...AREA_META[slug], propertyCount: 0, properties: [] })
  }

  return derived
}

export function getAreaBySlug(slug: string): DerivedArea | null {
  const meta = AREA_META[slug]
  if (!meta) return null
  const properties = PROPERTIES.filter((p) => p.areaSlug === slug)
  return { ...meta, propertyCount: properties.length, properties }
}

export function getAllAreaSlugs(): string[] {
  return Object.keys(AREA_META)
}

/**
 * Returns a clean product label for the area detail page hero stat row.
 * Pulls from the tagline string to detect which products we offer in an
 * area. Falls back to "Guaranteed Rent & Short-Let Management" when the
 * tagline doesn't mention either product explicitly, since Taj Cribs
 * operates both products across Central London by default.
 */
export function getAreaProductLabel(area: Pick<AreaMeta, 'tagline'>): string {
  const tag = area.tagline.toLowerCase()
  const hasGR = /guaranteed[\s-]?rent/.test(tag)
  const hasSLM = /short[\s-]?let/.test(tag)
  if (hasGR && hasSLM) return 'Guaranteed Rent & Short-Let Management'
  if (hasGR) return 'Guaranteed Rent'
  if (hasSLM) return 'Short-Let Management'
  return 'Guaranteed Rent & Short-Let Management'
}
