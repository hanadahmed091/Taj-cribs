import Link from 'next/link'
import { Mail, MapPin, Phone, Instagram, Linkedin } from 'lucide-react'
import { SITE } from '@/lib/config'
import { deriveAreas } from '@/lib/data/areas'

export function Footer() {
  const areas = deriveAreas()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 text-white/80">
      <div className="container-edge pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Link href="/" className="text-white font-extrabold tracking-tighter text-2xl flex items-center gap-2">
              <span className="text-gold-500">T</span>
              {SITE.shortName}
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              Central London short-let management and guaranteed rent specialists.
              We manage blocks and portfolios across Central London, and pay
              landlords on time, every time.
            </p>
            <div className="mt-7 flex items-center gap-4">
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/70 hover:text-gold-400 hover:border-gold-500 transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/70 hover:text-gold-400 hover:border-gold-500 transition-colors"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="eyebrow !text-white/40 mb-5">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/guaranteed-rent" className="hover:text-gold-400 transition-colors">Guaranteed Rent</Link></li>
              <li><Link href="/property-management" className="hover:text-gold-400 transition-colors">Property Management</Link></li>
              <li><Link href="/pricing" className="hover:text-gold-400 transition-colors">Pricing</Link></li>
              <li><Link href="/blog" className="hover:text-gold-400 transition-colors">Insights</Link></li>
              <li><Link href="/contact" className="hover:text-gold-400 transition-colors">Free Valuation</Link></li>
            </ul>

            <h4 className="eyebrow !text-white/40 mb-5 mt-10">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-gold-400 transition-colors">Terms and Conditions</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="eyebrow !text-white/40 mb-5">Areas We Cover</h4>
            <ul className="space-y-3 text-sm grid grid-cols-2 gap-x-4">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link href={`/areas/${a.slug}`} className="hover:text-gold-400 transition-colors">
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="eyebrow !text-white/40 mb-5">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="flex items-start gap-3 hover:text-gold-400 transition-colors">
                  <Phone size={16} className="mt-0.5 shrink-0 text-gold-500" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-start gap-3 hover:text-gold-400 transition-colors">
                  <Mail size={16} className="mt-0.5 shrink-0 text-gold-500" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold-500" />
                <span>{SITE.address.line1}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-white/50">
          <span>© {year} {SITE.name}. All rights reserved.</span>
          <div className="flex flex-wrap gap-6">
            <span>Registered in England & Wales</span>
            <span>Licensed property management</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
