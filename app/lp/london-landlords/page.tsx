import type { Metadata } from 'next'
import { ShieldCheck, CalendarCheck, Sparkles, Wallet } from 'lucide-react'
import { LandingPageLayout } from '@/components/lp/LandingPageLayout'

// Landing page for the Facebook and Instagram Airbnb management ads.
// Ads link here with UTM tags (utm_source=facebook&utm_content=ad1 etc),
// which the form passes through to the lead email, so every enquiry says
// which ad it came from. Not indexed: it exists for paid traffic only.
export const metadata: Metadata = {
  title: 'Earn More From Your London Flat With Airbnb | Taj Cribs',
  description:
    'Airbnb and short let management for London landlords. Guests, cleaning and pricing handled, a Quality Officer after every checkout. Free income estimate in 24 hours.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/lp/london-landlords' },
}

const INCLUDED = [
  {
    icon: ShieldCheck,
    title: 'Inspected after every checkout',
    body: 'A trained Quality Officer checks your flat in person after every single stay.',
  },
  {
    icon: Sparkles,
    title: 'Guests, cleaning and pricing done for you',
    body: 'Listings, messages, check ins, housekeeping and daily pricing. You do nothing.',
  },
  {
    icon: CalendarCheck,
    title: 'No tenant locked in for years',
    body: 'Short and medium stays mean you keep control of your property.',
  },
  {
    icon: Wallet,
    title: 'Paid monthly with a clear statement',
    body: 'One payout every month showing bookings, fees and what you earned.',
  },
]

const STEPS = [
  { n: '1', title: 'Free income estimate', body: 'Tell us about your flat and we send a realistic monthly figure within 24 hours.' },
  { n: '2', title: 'Onboarding form', body: 'Fill in our short form and sign the management agreement.' },
  { n: '3', title: 'We set up and list your flat', body: 'Photos, listing and pricing on Airbnb, Booking.com and more.' },
  { n: '4', title: 'Bookings start', body: 'Guests arrive, we handle the rest, and you get paid.' },
]

export default function LondonLandlordsLandingPage() {
  return (
    <LandingPageLayout
      areaLabel="Airbnb Management · London"
      headline="Earn more from your London flat with Airbnb."
      subheadline="Still managing it yourself, or stuck on a long let? Hand it over to Taj Cribs. We run your flat on Airbnb and other platforms, handle every guest, and you get one payment a month."
      formTitle="Get your free income estimate"
      formSource="facebook_ads_lp"
      defaultService="short-let-management"
    >
      {/* BEFORE / AFTER, matching the ad */}
      <section className="bg-white section-pad !py-16 lg:!py-20">
        <div className="container-edge max-w-4xl">
          <div className="text-center">
            <span className="eyebrow !text-gold-700">Before and after</span>
            <h2 className="mt-4 text-fluid-3xl font-extrabold tracking-tighter text-navy-900">
              Same flat. A very different monthly income.
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-md border border-light-line bg-cream p-8 text-center">
              <p className="text-xs uppercase tracking-widest font-bold text-navy-900/55">Before · Long term let</p>
              <p className="mt-3 text-5xl font-extrabold tracking-tightest text-navy-900 tabular-nums">£2,000</p>
              <p className="mt-1 text-sm font-semibold text-navy-900/60">per month</p>
            </div>
            <div className="rounded-md border-2 border-gold-500 bg-navy-950 p-8 text-center text-white">
              <p className="text-xs uppercase tracking-widest font-bold text-gold-500">After · Airbnb management with Taj Cribs</p>
              <p className="mt-3 text-5xl font-extrabold tracking-tightest text-gold-500 tabular-nums">£4,000+</p>
              <p className="mt-1 text-sm font-semibold text-white/70">per month</p>
            </div>
          </div>
          <p className="mt-5 text-center text-xs text-navy-900/50">
            Example figures. Every flat is different, so your free estimate is based on your property, area and size.
          </p>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="bg-cream section-pad !py-16 lg:!py-20">
        <div className="container-edge max-w-5xl">
          <div className="text-center">
            <span className="eyebrow !text-gold-700">Fully managed</span>
            <h2 className="mt-4 text-fluid-3xl font-extrabold tracking-tighter text-navy-900">
              Completely hands off for you.
            </h2>
          </div>
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {INCLUDED.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex gap-4 rounded-md bg-white border border-light-line p-6">
                <span className="w-11 h-11 shrink-0 rounded-sm bg-navy-950 flex items-center justify-center text-gold-500">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="font-bold text-navy-900">{title}</p>
                  <p className="mt-1 text-sm text-navy-900/65 leading-relaxed">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white section-pad !py-16 lg:!py-20">
        <div className="container-edge max-w-5xl">
          <div className="text-center">
            <span className="eyebrow !text-gold-700">How switching works</span>
            <h2 className="mt-4 text-fluid-3xl font-extrabold tracking-tighter text-navy-900">
              Four simple steps.
            </h2>
          </div>
          <ol className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((s) => (
              <li key={s.n} className="rounded-md border border-light-line p-6">
                <span className="w-10 h-10 rounded-full border-2 border-gold-500 flex items-center justify-center font-extrabold text-gold-600">
                  {s.n}
                </span>
                <p className="mt-4 font-bold text-navy-900">{s.title}</p>
                <p className="mt-1 text-sm text-navy-900/65 leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <a href="#top" className="btn-gold">Get my free income estimate</a>
          </div>
        </div>
      </section>
    </LandingPageLayout>
  )
}
