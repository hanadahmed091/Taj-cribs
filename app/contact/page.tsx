import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { LeadForm } from '@/components/forms/LeadForm'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { SITE } from '@/lib/config'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Contact | Free Valuation in 24 Hours',
  description:
    'Speak to Taj Cribs Property about guaranteed rent or short-let management for your Central London property. Free valuation, no obligation.',
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
            Free valuation for <br />
            <span className="text-gold-500">your Central London property.</span>
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
                icon={
                  <span className="text-[#25D366]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </span>
                }
                label="WhatsApp"
                value={<WhatsAppButton variant="full" location="contact_page" />}
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
                    {SITE.address.line1}
                  </p>
                }
              />

              <ContactRow
                icon={<Clock size={18} className="text-gold-500" />}
                label="Response time"
                value={
                  <p className="font-medium leading-relaxed">
                    We aim to respond as soon as possible.
                  </p>
                }
              />

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
        <span className="eyebrow !text-gold-700">{label}</span>
      </div>
      <div className="mt-3 text-navy-900">{value}</div>
    </div>
  )
}
