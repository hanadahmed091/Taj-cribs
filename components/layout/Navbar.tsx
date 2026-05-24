'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { NAV_LINKS, SITE } from '@/lib/config'
import { cn, pushDataLayer } from '@/lib/utils'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Body scroll lock while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Close on Escape for keyboard users.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-navy-950/85 backdrop-blur-md border-b border-white/5 py-3'
          : 'bg-transparent py-5',
      )}
    >
      <div className="container-edge flex items-center justify-between">
        <Link
          href="/"
          className="text-white font-extrabold tracking-tighter text-xl flex items-center gap-2"
          aria-label={SITE.name}
        >
          <span><span className="text-gold-500">{SITE.shortName.charAt(0)}</span>{SITE.shortName.slice(1)}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/85 hover:text-gold-400 text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${SITE.phone.replace(/\s/g, '')}`}
            onClick={() => pushDataLayer('phone_click', { location: 'navbar' })}
            className="text-white/85 hover:text-gold-400 text-sm font-medium flex items-center gap-2 transition-colors"
          >
            <Phone size={14} />
            {SITE.phoneDisplay}
          </a>
          <WhatsAppButton variant="icon" location="navbar" className="!w-9 !h-9" />
          <Link
            href="/contact"
            onClick={() => pushDataLayer('cta_valuation_request', { location: 'navbar' })}
            className="btn-gold !py-3 !px-5 text-sm"
          >
            Free Valuation
          </Link>
        </div>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="lg:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* SCRIM — dims the page behind the menu panel. Tapping it closes
          the menu. Sits inside <header> so it shares the z-50 stacking
          context. Renders BEFORE the panel in DOM order so the panel
          paints on top of it. Transition values are inline rather than
          via Tailwind classes because Tailwind v3 ties transforms to a
          CSS custom property that doesn't transition reliably without
          @property registration; using inline style avoids the trap. */}
      <div
        className={cn(
          'lg:hidden fixed inset-0 bg-navy-950/70 backdrop-blur-sm',
          !open && 'pointer-events-none',
        )}
        style={{
          opacity: open ? 1 : 0,
          transition: 'opacity 300ms ease-out',
        }}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* PANEL — side sheet, slides in from the right. Fully opaque
          bg-navy-950. Transform is set inline so the transition runs
          against a real value instead of a Tailwind CSS variable that
          fails to interpolate. Background is never animated, so the
          panel can never be semi-transparent. */}
      <aside
        className={cn(
          'lg:hidden fixed inset-y-0 right-0 w-[85%] max-w-sm bg-navy-950 shadow-[0_0_60px_rgba(0,0,0,0.5)] flex flex-col overflow-y-auto overscroll-contain',
          !open && 'pointer-events-none',
        )}
        style={{
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 500ms ease-out',
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
      >
        {/* Panel header with close button. The close sits where the
            original hamburger sat so the spatial pattern is consistent. */}
        <div className="flex items-center justify-end px-4 py-5 shrink-0">
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="text-white p-2"
          >
            <X size={22} />
          </button>
        </div>

        <div className="px-6 pb-12 flex flex-col gap-1 flex-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white text-3xl font-bold tracking-tight border-b border-white/10 py-5"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-auto pt-10 flex flex-col gap-4">
            <a
              href={`tel:${SITE.phone.replace(/\s/g, '')}`}
              onClick={() => pushDataLayer('phone_click', { location: 'mobile_menu' })}
              className="text-gold-400 text-base flex items-center gap-2"
            >
              <Phone size={16} />
              {SITE.phoneDisplay}
            </a>
            <WhatsAppButton
              variant="full"
              location="mobile_menu"
              className="!justify-center w-full"
            />
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-gold justify-center"
            >
              Get Free Valuation
            </Link>
          </div>
        </div>
      </aside>
    </header>
  )
}
