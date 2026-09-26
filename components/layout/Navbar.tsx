'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { MAIN_LINKS, NAV_LINKS, SERVICE_LINKS, SITE } from '@/lib/config'
import { cn, pushDataLayer } from '@/lib/utils'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { Logo } from '@/components/ui/Logo'

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
        <Logo tone="light" taglineFrom="xl" priority />

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 ml-12">
          <ServicesMenu />
          {MAIN_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/85 hover:text-gold-400 text-sm font-medium whitespace-nowrap transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* A divider separates the page links from the contact actions.
            Between lg and xl there isn't room for the full phone number,
            so it collapses to its icon (the link keeps an aria-label). */}
        <div className="hidden lg:flex items-center gap-4 shrink-0 ml-auto pl-6">
          <span aria-hidden="true" className="w-px h-5 bg-white/20" />
          <a
            href={`tel:${SITE.phone.replace(/\s/g, '')}`}
            onClick={() => pushDataLayer('phone_click', { location: 'navbar' })}
            aria-label={`Call ${SITE.phoneDisplay}`}
            className="text-white/85 hover:text-gold-400 text-sm font-medium flex items-center gap-2 whitespace-nowrap transition-colors"
          >
            <Phone size={14} className="shrink-0" />
            <span className="hidden xl:inline">{SITE.phoneDisplay}</span>
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

// Desktop "Services" dropdown. Opens on hover and on click, supports
// keyboard (Enter/Space/ArrowDown to open, Escape to close and return
// focus), and closes on outside click or when focus leaves the menu.
function ServicesMenu() {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  useEffect(() => () => clearTimeout(closeTimer.current), [])

  const show = () => {
    clearTimeout(closeTimer.current)
    setOpen(true)
  }
  // Short delay so moving the pointer from the button to the panel
  // doesn't flicker the menu shut.
  const hide = () => {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpen(false), 150)
  }

  const focusItem = (index: number) => {
    const items = rootRef.current?.querySelectorAll<HTMLAnchorElement>('[role="menu"] a')
    items?.[index]?.focus()
  }

  return (
    <div
      ref={rootRef}
      className="relative"
      onPointerEnter={(e) => e.pointerType === 'mouse' && show()}
      onPointerLeave={(e) => e.pointerType === 'mouse' && hide()}
      onBlur={(e) => {
        if (!rootRef.current?.contains(e.relatedTarget as Node)) setOpen(false)
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="services-menu"
        // Hover has already opened it for mouse users, so a mouse click
        // keeps it open rather than toggling it shut. Touch and keyboard
        // (pointerType '') toggle.
        onClick={(e) => {
          if ((e.nativeEvent as PointerEvent).pointerType === 'mouse') show()
          else setOpen((v) => !v)
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown') {
            e.preventDefault()
            setOpen(true)
            requestAnimationFrame(() => focusItem(0))
          }
        }}
        className={cn(
          'flex items-center gap-1 text-sm font-medium whitespace-nowrap transition-colors',
          open ? 'text-gold-400' : 'text-white/85 hover:text-gold-400',
        )}
      >
        Services
        <ChevronDown
          size={14}
          aria-hidden="true"
          className={cn('transition-transform duration-200', open && 'rotate-180')}
        />
      </button>

      {/* pt-3 is an invisible hover bridge between button and panel. */}
      <div
        className={cn(
          'absolute left-0 top-full pt-3 transition-opacity duration-150',
          open ? 'opacity-100' : 'opacity-0 pointer-events-none invisible',
        )}
      >
        <ul
          id="services-menu"
          role="menu"
          aria-label="Services"
          className="min-w-[240px] bg-navy-950 border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] py-2"
          onKeyDown={(e) => {
            if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return
            e.preventDefault()
            const items = [...(rootRef.current?.querySelectorAll<HTMLAnchorElement>('[role="menu"] a') ?? [])]
            const i = items.indexOf(document.activeElement as HTMLAnchorElement)
            const next = e.key === 'ArrowDown' ? (i + 1) % items.length : (i - 1 + items.length) % items.length
            focusItem(next)
          }}
        >
          {SERVICE_LINKS.map((link) => (
            <li key={link.href} role="none">
              <Link
                href={link.href}
                role="menuitem"
                onClick={() => setOpen(false)}
                className="block px-5 py-3 text-sm font-medium text-white/85 hover:text-gold-400 hover:bg-white/5 focus-visible:text-gold-400 focus-visible:bg-white/5 outline-none whitespace-nowrap transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
