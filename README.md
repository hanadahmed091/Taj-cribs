# Taj Cribs Property — Central London Short-Let & Guaranteed Rent

Awwwards-style Next.js 14 marketing site for a Central London property management & guaranteed rent company. Navy & gold editorial design.

## Install & run

```bash
npm install
cp .env.example .env.local   # add GTM ID and Resend key if you have them
npm run dev
```

Open `http://localhost:3000`.

## Routes

| Path | Purpose |
| --- | --- |
| `/` | Home (hero, services, how it works, portfolio, testimonials, why us, areas, blog preview, final CTA) |
| `/guaranteed-rent` | SEO target: "guaranteed rent london" — hero form, calculator, comparison, case studies, FAQ |
| `/property-management` | SEO target: "airbnb management london" — services grid, platforms, case studies, FAQ |
| `/areas` | Index of all areas |
| `/areas/[slug]` | One page per area, auto-generated from `PROPERTIES` + `AREA_META` |
| `/contact` | Form, contact details, embedded map |
| `/lp/guaranteed-rent` | Paid landing — Google Ads "guaranteed rent london" |
| `/lp/airbnb-management` | Paid landing — Google Ads "airbnb management london" |
| `/lp/marylebone` | Hyperlocal landing — Marylebone landlords |
| `/lp/kensington` | Hyperlocal landing — Kensington landlords |
| `/api/contact` | POST endpoint for lead form |
| `/sitemap.xml`, `/robots.txt` | Auto-generated from app data |

## Adding a new property (the only edit you need)

1. Open `lib/data/properties.ts`
2. Add one object to the `PROPERTIES` array
3. (Optional) Add a testimonial in `lib/data/testimonials.ts`
4. If the property is in a **new area** that isn't already in `lib/data/areas.ts → AREA_META`, add an entry there too.

Everything else updates automatically:
- The portfolio grid on the home page
- The areas section (derived from `PROPERTIES`)
- The `/areas/[slug]` dynamic page for that area
- The sitemap
- The footer area links

## Stats counter — single source of truth

The "500+ properties" figure lives in `lib/config.ts` → `SITE.managedPortfolioCount`. Update once and it propagates everywhere on the site.

## Analytics

GTM is wired up via `components/providers/AnalyticsScripts.tsx` — set `NEXT_PUBLIC_GTM_ID` in `.env.local`. CTAs fire `pushDataLayer()` events with names listed in the v2 spec (`cta_guaranteed_rent_hero`, `form_submission_valuation`, `portfolio_card_click`, etc.). UTM params are captured to `sessionStorage` on landing and sent with every form submission.

## Lead emails

The `/api/contact` route uses [Resend](https://resend.com). Set `RESEND_API_KEY` + `LEAD_RECIPIENT` in `.env.local`. If not configured the route logs to console — useful for local dev.

## Design tokens

CSS variables live in `app/globals.css`. Tailwind theme extension in `tailwind.config.ts` maps them to utility classes (`text-navy-900`, `bg-gold-500`, etc.). Fluid type scale via `text-hero`, `text-fluid-4xl`, …

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind v3
- Framer Motion + Lenis smooth scroll
- React Hook Form + Zod
- Resend for transactional email
- Poppins via `next/font/google`
