'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, ArrowRight, ChevronDown, Check } from 'lucide-react'
import Link from 'next/link'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { cn, pushDataLayer } from '@/lib/utils'

// Pricing model:
// - Short-let projection: ADR × 0.9 (10% conservative cushion) × 30 × occupancy
//   then minus our 18% management fee. We intentionally project below true
//   market ADR so landlords are rarely disappointed.
// - Guaranteed rent: full local market AST rent for that area / bedroom count,
//   paid as a fixed monthly amount regardless of occupancy.
//
// Both figures are derived dynamically from the selected area + bedrooms via
// area.marketRent[bedrooms] and area.adr[bedrooms]. There is NO hardcoded
// fallback figure anywhere in this file — change either lookup table below
// and the calculator updates everywhere it's used.
type AreaModel = {
  label: string
  postcode: string
  // [studio, 1bed, 2bed, 3bed]  market nightly ADR for short-let
  adr: [number, number, number, number]
  // realistic year-round occupancy %
  occupancy: number
  // Market AST monthly rent for that area / bedroom count.
  // 2025/26 figures based on borough averages and ONS / Rightmove data.
  // Treat these as midpoint indicative; actual offers vary with finish,
  // furnishing and specific street.
  marketRent: [number, number, number, number]
}

const AREAS: AreaModel[] = [
  { label: 'Marylebone',         postcode: 'W1',  adr: [180, 240, 360, 520],  occupancy: 0.88, marketRent: [1600, 2200, 3200, 4500] },
  { label: 'Mayfair',            postcode: 'W1',  adr: [320, 480, 720, 1100], occupancy: 0.84, marketRent: [2000, 3200, 5000, 8000] },
  { label: 'High St Kensington', postcode: 'W8',  adr: [210, 290, 420, 600],  occupancy: 0.94, marketRent: [1700, 2400, 3500, 5000] },
  { label: 'Pimlico',            postcode: 'SW1', adr: [150, 200, 290, 420],  occupancy: 0.86, marketRent: [1400, 1900, 2800, 3800] },
  { label: 'Chelsea',            postcode: 'SW3', adr: [210, 290, 410, 580],  occupancy: 0.9,  marketRent: [1700, 2500, 3800, 5500] },
  { label: 'Westminster',        postcode: 'SW1', adr: [170, 230, 330, 470],  occupancy: 0.85, marketRent: [1500, 2100, 3000, 4200] },
  { label: 'Notting Hill',       postcode: 'W11', adr: [195, 270, 390, 540],  occupancy: 0.88, marketRent: [1600, 2300, 3400, 4800] },
  { label: 'Canary Wharf',       postcode: 'E14', adr: [135, 180, 245, 340],  occupancy: 0.82, marketRent: [1300, 1800, 2500, 3400] },
]

const BEDROOM_OPTIONS = [
  { value: 0, label: 'Studio' },
  { value: 1, label: '1 Bedroom' },
  { value: 2, label: '2 Bedroom' },
  { value: 3, label: '3+ Bedroom' },
]

const CONSERVATIVE_FACTOR = 0.9 // 10% below market ADR
const MGMT_NET_FACTOR = 0.82    // after 18% management fee

function fmt(n: number) {
  return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(n)
}

/**
 * Custom dropdown used for the calculator's Area and Bedrooms inputs.
 *
 * Native <select> elements opened their dropdown menu as a layout-flow
 * overlay that hid the Bedrooms field on mobile and looked broken on
 * DevTools mobile emulation. This component renders the menu as an
 * absolutely-positioned floating panel with z-50, so the surrounding
 * form layout never shifts and the menu paints cleanly above every
 * field below it. When the menu closes, the page is in exactly the
 * same state as before it opened.
 *
 * Keyboard: Space / Enter / ArrowDown to open; ArrowUp/ArrowDown to
 * move highlight; Enter to commit; Escape to close. Outside-click
 * closes the menu.
 */
function CalcDropdown<T extends string | number>({
  value,
  options,
  onChange,
  ariaLabel,
}: {
  value: T
  options: { value: T; label: string }[]
  onChange: (v: T) => void
  ariaLabel: string
}) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const selectedIdx = options.findIndex((o) => o.value === value)
  const selectedLabel = selectedIdx >= 0 ? options[selectedIdx].label : ''
  const [activeIdx, setActiveIdx] = useState(selectedIdx >= 0 ? selectedIdx : 0)

  // Reset active highlight when selection changes externally or menu opens.
  useEffect(() => {
    if (open) setActiveIdx(selectedIdx >= 0 ? selectedIdx : 0)
  }, [open, selectedIdx])

  // Close on outside click.
  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('touchstart', onDown)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('touchstart', onDown)
    }
  }, [open])

  // Keyboard handlers while open.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        setOpen(false)
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveIdx((i) => (i + 1) % options.length)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveIdx((i) => (i - 1 + options.length) % options.length)
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        onChange(options[activeIdx].value)
        setOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, options, activeIdx, onChange])

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (!open && (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault()
            setOpen(true)
          }
        }}
        className="w-full px-4 py-3 text-sm border border-light-line bg-white rounded-sm font-medium focus:outline-none focus:border-navy-900 flex items-center justify-between text-left text-navy-900"
      >
        <span className="truncate">{selectedLabel}</span>
        <ChevronDown
          size={16}
          className={cn('shrink-0 text-navy-900/55 transition-transform duration-200', open && 'rotate-180')}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={ariaLabel}
          className="absolute top-full left-0 right-0 z-50 mt-1 max-h-64 overflow-auto border border-light-line bg-white rounded-sm shadow-[0_20px_40px_-12px_rgba(6,19,37,0.25)]"
        >
          {options.map((opt, i) => {
            const isSelected = opt.value === value
            const isActive = i === activeIdx
            return (
              <li
                key={String(opt.value)}
                role="option"
                aria-selected={isSelected}
              >
                <button
                  type="button"
                  onClick={() => {
                    onChange(opt.value)
                    setOpen(false)
                  }}
                  onMouseEnter={() => setActiveIdx(i)}
                  className={cn(
                    'w-full px-4 py-3 text-sm text-left font-medium flex items-center justify-between gap-3 transition-colors',
                    isSelected
                      ? 'bg-navy-900 text-white'
                      : isActive
                        ? 'bg-cream text-navy-900'
                        : 'bg-white text-navy-900 hover:bg-cream',
                  )}
                >
                  <span className="truncate">{opt.label}</span>
                  {isSelected && <Check size={14} className="shrink-0" />}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export function IncomeCalculator({ defaultArea = 'Marylebone' }: { defaultArea?: string }) {
  const [areaLabel, setAreaLabel] = useState(defaultArea)
  const [bedrooms, setBedrooms] = useState(1)

  const area = AREAS.find((a) => a.label === areaLabel) ?? AREAS[0]

  const calc = useMemo(() => {
    const marketAdr = area.adr[bedrooms]
    const conservativeAdr = Math.round(marketAdr * CONSERVATIVE_FACTOR)
    const monthlyGross = Math.round(conservativeAdr * 30 * area.occupancy)
    const monthlyNet = Math.round(monthlyGross * MGMT_NET_FACTOR)
    const guaranteedMonthly = area.marketRent[bedrooms]
    const annualNet = monthlyNet * 12
    const annualGuaranteed = guaranteedMonthly * 12
    return {
      marketAdr,
      conservativeAdr,
      monthlyGross,
      monthlyNet,
      guaranteedMonthly,
      annualNet,
      annualGuaranteed,
    }
  }, [area, bedrooms])

  return (
    <div className="bg-white rounded-md border border-light-line p-6 lg:p-10">
      <div className="flex items-center gap-3">
        <SectionLabel>Income Calculator</SectionLabel>
      </div>
      <h3 className="mt-4 font-extrabold text-fluid-2xl tracking-tighter leading-tight">
        Estimate your monthly income.
      </h3>
      <p className="mt-2 text-sm text-navy-900/65">
        Rough indicative figures, based on 2025/26 Central London market data.
        Actual offers vary with finish, furnishing and the specific street, so
        figures shown can be higher or lower. We model conservatively, around
        10% below market rates.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <span className="block text-[10px] uppercase tracking-widest font-semibold text-navy-900/60 mb-2">
            Area
          </span>
          <CalcDropdown
            ariaLabel="Area"
            value={areaLabel}
            options={AREAS.map((a) => ({
              value: a.label,
              label: `${a.label} ${a.postcode}`,
            }))}
            onChange={(v) => {
              setAreaLabel(v)
              pushDataLayer('calculator_area_changed', { area: v })
            }}
          />
        </div>

        <div>
          <span className="block text-[10px] uppercase tracking-widest font-semibold text-navy-900/60 mb-2">
            Bedrooms
          </span>
          <CalcDropdown
            ariaLabel="Bedrooms"
            value={bedrooms}
            options={BEDROOM_OPTIONS}
            onChange={(v) => setBedrooms(v)}
          />
        </div>
      </div>

      <motion.div
        key={`${areaLabel}-${bedrooms}`}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* SHORT-LET — conservative projection */}
        <div className="bg-cream rounded-md p-6 border border-light-line">
          <p className="eyebrow">Short-let Management</p>
          <p className="mt-4 text-3xl font-extrabold tabular-nums tracking-tighter text-navy-900">
            {fmt(calc.monthlyNet)}<span className="text-base text-navy-900/55">/mo</span>
          </p>
          <p className="mt-1 text-xs text-navy-900/55">
            Conservative estimate, net of our 18% fee
          </p>
          <div className="mt-5 pt-4 border-t border-light-line">
            <div className="flex justify-between text-xs text-navy-900/65 mt-1">
              <span>Gross / month</span>
              <span className="font-semibold tabular-nums">{fmt(calc.monthlyGross)}</span>
            </div>
            <div className="flex justify-between text-xs text-navy-900/65 mt-1">
              <span>ADR (conservative)</span>
              <span className="font-semibold tabular-nums">{fmt(calc.conservativeAdr)} / night</span>
            </div>
            <div className="flex justify-between text-xs text-navy-900/65 mt-1">
              <span>Annual net</span>
              <span className="font-semibold tabular-nums">{fmt(calc.annualNet)}</span>
            </div>
            <p className="mt-4 text-[11px] leading-relaxed text-navy-900/60 italic">
              Our estimates are based on conservative projections. Most landlords exceed these figures.
            </p>
          </div>
        </div>

        {/* GUARANTEED RENT — full market AST rent */}
        <div className="bg-navy-900 text-white rounded-md p-6 border border-navy-700">
          <p className="eyebrow !text-gold-400">Guaranteed Rent</p>
          <p className="mt-4 text-3xl font-extrabold tabular-nums tracking-tighter text-gold-500">
            {fmt(calc.guaranteedMonthly)}<span className="text-base text-white/55">/mo</span>
          </p>
          <p className="mt-1 text-xs text-white/55">
            Full market rent, paid same day every month
          </p>
          <div className="mt-5 pt-4 border-t border-white/10">
            <div className="flex justify-between text-xs text-white/65 mt-1">
              <span>Annual guaranteed</span>
              <span className="font-semibold tabular-nums">{fmt(calc.annualGuaranteed)}</span>
            </div>
            <div className="flex justify-between text-xs text-white/65 mt-1">
              <span>Vacancy risk</span>
              <span className="font-semibold">On us, not you</span>
            </div>
            <div className="flex items-start gap-2 text-[11px] text-white/70 mt-4 leading-relaxed">
              <ShieldCheck size={14} className="mt-0.5 text-gold-400 shrink-0" />
              <span>
                We guarantee you the <strong className="text-white">full market rental value</strong>
                {' '}of your property, regardless of occupancy. No voids, no chasing rent, no hassle.
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      <Link
        href="/contact"
        onClick={() =>
          pushDataLayer('cta_valuation_request', {
            location: 'income_calculator',
            area: areaLabel,
            bedrooms,
          })
        }
        className="btn-gold w-full justify-center mt-8"
      >
        Get an exact figure for your property
        <ArrowRight size={18} />
      </Link>
      <p className="mt-4 text-xs text-navy-900/55">
        Indicative figures. Final guaranteed rent offer depends on furnishing,
        finish quality and condition; final short-let income depends on calendar
        timing and platform performance.
      </p>
    </div>
  )
}
