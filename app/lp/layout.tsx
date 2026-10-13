import { Phone } from 'lucide-react'
import { SITE, COMPANIES } from '@/lib/config'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { Logo } from '@/components/ui/Logo'

// Landing pages: minimal chrome. SiteFrame in the root layout strips the
// site Navbar/Footer for any /lp/* route. We add a tiny landing header here.
export default function LpLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="absolute top-0 left-0 right-0 z-50 py-6">
        <div className="container-edge flex items-center justify-between">
          <Logo tone="light" priority />
          <div className="flex items-center gap-3">
            <a
              href={`tel:${SITE.phone.replace(/\s/g, '')}`}
              className="text-white text-sm font-semibold flex items-center gap-2 hover:text-gold-400 transition-colors"
            >
              <Phone size={14} />
              {SITE.phoneDisplay}
            </a>
            <WhatsAppButton variant="icon" location="lp_header" className="!w-9 !h-9" />
          </div>
        </div>
      </header>
      <div className="flex-1">{children}</div>
      <footer className="bg-navy-950 text-white/55 py-8 text-center text-xs px-4">
        {SITE.shortName} · London Property Specialists · {SITE.email}
        <p className="mt-2 text-[11px] text-white/40">
          {COMPANIES.management.name}, company number {COMPANIES.management.number}, registered office{' '}
          {COMPANIES.management.registeredOffice}. {COMPANIES.main.name}, company number {COMPANIES.main.number}.
          Registered in England and Wales.
        </p>
      </footer>
    </div>
  )
}
