import Link from 'next/link'
import { Phone } from 'lucide-react'
import { SITE } from '@/lib/config'

// Landing pages: minimal chrome. SiteFrame in the root layout strips the
// site Navbar/Footer for any /lp/* route. We add a tiny landing header here.
export default function LpLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="absolute top-0 left-0 right-0 z-50 py-6">
        <div className="container-edge flex items-center justify-between">
          <Link
            href="/"
            className="text-white font-extrabold tracking-tighter text-xl flex items-center gap-2"
          >
            <span><span className="text-gold-500">{SITE.shortName.charAt(0)}</span>{SITE.shortName.slice(1)}</span>
          </Link>
          <a
            href={`tel:${SITE.phone.replace(/\s/g, '')}`}
            className="text-white text-sm font-semibold flex items-center gap-2 hover:text-gold-400 transition-colors"
          >
            <Phone size={14} />
            {SITE.phoneDisplay}
          </a>
        </div>
      </header>
      <div className="flex-1">{children}</div>
      <footer className="bg-navy-950 text-white/55 py-8 text-center text-xs px-4">
        {SITE.shortName} · Central London Property Specialists · {SITE.email}
      </footer>
    </div>
  )
}
