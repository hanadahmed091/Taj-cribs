import type { Metadata } from 'next'
import { LandingPageLayout } from '@/components/lp/LandingPageLayout'

const INCLUDED = [
  'Professional photos and listing on Airbnb, Booking.com and more',
  'Daily pricing to maximise your income',
  'Guest messages, check ins and vetting',
  'Cleaning and laundry after every stay',
  'Quality Officer inspection after every checkout',
  'Monthly payout with a clear statement',
]

export const metadata: Metadata = {
  title: 'Airbnb & Short-Let Management London | Taj Cribs',
  description:
    'Full-service Airbnb and short-let management in London. Listings, guests, cleaning, 24/7 support. Free income estimate for your property.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/lp/airbnb-management' },
}

export default function AirbnbManagementLandingPage() {
  return (
    <LandingPageLayout
      areaLabel="Airbnb & Short-Let Management, London"
      headline="Your London property. Fully managed. Maximum returns."
      subheadline="We handle listings, bookings, guests, housekeeping and maintenance for one flat 18% management fee. You receive one monthly payment. Nothing else required from you."
      formTitle="Get your free income estimate"
      defaultService="short-let-management"
      // Testimonial intentionally omitted — the previous attribution
      // (James T. / Kensington Gate W8) was tied to an invented
      // portfolio. Re-add a verified landlord quote here when one
      // becomes available.
    >
      <section className="bg-white section-pad !py-16 lg:!py-20">
        <div className="container-edge max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2 text-center md:text-left">
              <span className="eyebrow !text-gold-700">Simple pricing</span>
              <p className="mt-4 font-extrabold text-7xl tracking-tighter text-gold-600 tabular-nums">18%</p>
              <p className="mt-2 text-fluid-lg font-bold text-navy-900">Flat management fee</p>
              <p className="mt-2 text-sm text-navy-900/60 leading-relaxed">
                One clear fee on your bookings. Your free estimate shows exactly what you would take home.
              </p>
            </div>
            <ul className="md:col-span-3 grid grid-cols-1 gap-3">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-md border border-light-line bg-cream px-4 py-3 text-sm font-semibold text-navy-900">
                  <span className="mt-0.5 text-gold-600" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </LandingPageLayout>
  )
}
