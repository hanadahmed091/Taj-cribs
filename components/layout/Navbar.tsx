'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { NAV_LINKS, SITE } from '@/lib/config'
import { cn, pushDataLayer } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
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
          <span className="text-gold-500">P</span>
          <span>{SITE.shortName}</span>
          <span className="hidden sm:inline-block text-[10px] uppercase tracking-widest text-muted font-semibold ml-2 border-l border-white/10 pl-2">
            Central London
          </span>
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

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${SITE.phone.replace(/\s/g, '')}`}
            onClick={() => pushDataLayer('phone_click', { location: 'navbar' })}
            className="text-white/85 hover:text-gold-400 text-sm font-medium flex items-center gap-2 transition-colors"
          >
            <Phone size={14} />
            {SITE.phoneDisplay}
          </a>
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

      <div
        className={cn(
          'lg:hidden fixed inset-x-0 top-[64px] bottom-0 bg-navy-950 transition-all duration-500',
          open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none',
        )}
      >
        <div className="container-edge pt-10 pb-16 flex flex-col gap-1 h-full">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white text-3xl font-bold tracking-tight border-b border-white/10 py-5"
              style={{ transitionDelay: `${i * 40}ms` }}
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
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-gold justify-center"
            >
              Get Free Valuation
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
