import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { LeadForm } from '@/components/forms/LeadForm'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { SITE } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Contact Taj Cribs | Free Valuation in 24 Hours',
  description:
    'Speak to Taj Cribs Property about guaranteed rent or short-let management for your Central London property. Free 24-hour valuation, 2-hour response.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-950 text-white pt-[120px] pb-12 lg:pt-[160px] lg:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-50" />
        <div className="container-edge relative max-w-3xl">
          <SectionLabel className="!justify-start">Get In Touch</SectionLabel>
          <h1 className="mt-6 text-hero font-extrabold tracking-tightest leading-[0.95]">
            Let&apos;s talk about <br />
            <span className="text-gold-500">your property.</span>
          </h1>
          <p className="mt-8 text-fluid-lg text-white/75 leading-relaxed">
            Free valuation. Guaranteed monthly figure within one business day. No obligation.
          </p>
        </div>
      </section>

      <section className="bg-cream pb-24 -mt-1">
        <div className="container-edge">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-16">
            <div className="lg:col-span-7">
              <LeadForm variant="full" source="contact_page" />
            </div>

            <aside className="lg:col-span-5 space-y-10">
              <ContactRow
                icon={<Phone size={18} className="text-gold-500" />}
                label="Phone"
                value={
                  <a
                    href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                    className="text-fluid-2xl font-extrabold tracking-tighter text-navy-900 hover:text-gold-600 transition-colors"
                  >
                    {SITE.phoneDisplay}
                  </a>
                }
              />

              <ContactRow
                icon={<Mail size={18} className="text-gold-500" />}
                label="Email"
                value={
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-fluid-xl font-bold text-navy-900 hover:text-gold-600 transition-colors break-all"
                  >
                    {SITE.email}
                  </a>
                }
              />

              <ContactRow
                icon={<MapPin size={18} className="text-gold-500" />}
                label="Office"
                value={
                  <p className="font-medium leading-relaxed">
                    {SITE.address.line1}<br />
                    {SITE.address.locality} {SITE.address.postcode}<br />
                    {SITE.address.country}
                  </p>
                }
              />

              <ContactRow
                icon={<Clock size={18} className="text-gold-500" />}
                label="Response time"
                value={
                  <p className="font-medium leading-relaxed">
                    We respond to all enquiries within{' '}
                    <span className="font-bold text-navy-900">
                      {SITE.responsePromiseHours} business hours
                    </span>.
                  </p>
                }
              />

              <div className="rounded-md overflow-hidden border border-light-line">
                <iframe
                  title="Taj Cribs Property office map"
                  src="https://maps.google.com/maps?q=Marylebone%20High%20Street%20London&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full aspect-[4/3]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

function ContactRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: React.ReactNode
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="w-9 h-9 flex items-center justify-center bg-navy-950 rounded-sm">{icon}</span>
        <span className="eyebrow">{label}</span>
      </div>
      <div className="mt-3 text-navy-900">{value}</div>
    </div>
  )
}
