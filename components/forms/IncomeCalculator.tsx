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
// area.marketRent[bedrooms - 1] and area.adr[bedrooms - 1]. There is NO
// hardcoded fallback figure anywhere in this file. Change either lookup
// table below and the calculator updates everywhere it's used.
//
// Bedroom counts of 5+, or the OTHER_LONDON area, do not consult these
// tables — they trigger the "Let's talk." card instead, because both
// scenarios vary too much for a calculator to give a useful figure.
type AreaModel = {
  label: string
  postcode: string
  // [1bed, 2bed, 3bed, 4bed]  market nightly ADR for short-let
  adr: [number, number, number, number]
  // realistic year-round occupancy %
  occupancy: number
  // Market AST monthly rent for that area / bedroom count.
  // 2025/26 figures based on borough averages and ONS / Rightmove data.
  // Treat these as midpoint indicative; actual offers vary with finish,
  // furnishing and specific street.
  // [1bed, 2bed, 3bed, 4bed]
  marketRent: [number, number, number, number]
}

const OTHER_LONDON = 'Other Central London'

const AREAS: AreaModel[] = [
  { label: 'Marylebone',         postcode: 'W1',  adr: [240, 360, 520, 680],   occupancy: 0.88, marketRent: [2200, 3200, 4500, 6200]  },
  { label: 'Mayfair',            postcode: 'W1',  adr: [480, 720, 1100, 1500], occupancy: 0.84, marketRent: [3200, 5000, 8000, 11000] },
  { label: 'High St Kensington', postcode: 'W8',  adr: [290, 420, 600, 800],   occupancy: 0.94, marketRent: [2400, 3500, 5000, 6800]  },
  { label: 'Pimlico',            postcode: 'SW1', adr: [200, 290, 420, 560],   occupancy: 0.86, marketRent: [1900, 2800, 3800, 5000]  },
  { label: 'Chelsea',            postcode: 'SW3', adr: [290, 410, 580, 780],   occupancy: 0.9,  marketRent: [2500, 3800, 5500, 7200]  },
  { label: 'Westminster',        postcode: 'SW1', adr: [230, 330, 470, 620],   occupancy: 0.85, marketRent: [2100, 3000, 4200, 5500]  },
  { label: 'Notting Hill',       postcode: 'W11', adr: [270, 390, 540, 720],   occupancy: 0.88, marketRent: [2300, 3400, 4800, 6500]  },
  { label: 'Canary Wharf',       postcode: 'E14', adr: [180, 245, 340, 450],   occupancy: 0.82, marketRent: [1800, 2500, 3400, 4500]  },
]

// Bedroom values are used directly as labels (1, 2, 3, 4) and as a
// sentinel for the catch-all 5+. Lookup into area tuples uses value-1.
const BEDROOM_OPTIONS = [
  { value: 1, label: '1 bedroom' },
  { value: 2, label: '2 bedrooms' },
  { value: 3, label: '3 bedrooms' },
  { value: 4, label: '4 bedrooms' },
  { value: 5, label: '5+ bedrooms' },
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
  /**
   * Options to render. Set `divider: true` on an option to draw a thin
   * separator line above it — used to set "Other Central London" apart
   * from the named areas above it in the list.
   */
  options: { value: T; label: string; divider?: boolean }[]
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
                className={opt.divider ? 'border-t border-light-line' : undefined}
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

  // True when the chosen combination is outside what a calculator can
  // model usefully: either 5+ bedrooms (catch-all) or an area outside
  // our named coverage. Triggers the "Let's talk." message card.
  const showLetsTalk = bedrooms === 5 || areaLabel === OTHER_LONDON

  const area = AREAS.find((a) => a.label === areaLabel) ?? AREAS[0]

  const calc = useMemo(() => {
    // Bedroom values are 1..4 here; 5 (catch-all) never reaches this
    // branch because the renderer short-circuits to the Let's talk card.
    const idx = Math.max(0, Math.min(bedrooms - 1, area.adr.length - 1))
    const marketAdr = area.adr[idx]
    const conservativeAdr = Math.round(marketAdr * CONSERVATIVE_FACTOR)
    const monthlyGross = Math.round(conservativeAdr * 30 * area.occupancy)
    const monthlyNet = Math.round(monthlyGross * MGMT_NET_FACTOR)
    const guaranteedMonthly = area.marketRent[idx]
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
            options={[
              ...AREAS.map((a) => ({
                value: a.label,
                label: `${a.label} ${a.postcode}`,
              })),
              { value: OTHER_LONDON, label: OTHER_LONDON, divider: true },
            ]}
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

      {showLetsTalk ? (
        <motion.div
          key={`letstalk-${areaLabel}-${bedrooms}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <div className="bg-navy-900 text-white rounded-md p-6 lg:p-8 border border-navy-700">
            <p className="eyebrow !text-gold-400">Tailored estimate</p>
            <p className="mt-4 text-3xl font-extrabold tracking-tighter text-gold-500">
              Let&apos;s talk.
            </p>
            <p className="mt-4 text-white/80 leading-relaxed">
              This combination needs a tailored estimate. Speak to our team for
              a specific figure for your property.
            </p>
            <Link
              href="/contact"
              onClick={() =>
                pushDataLayer('cta_valuation_request', {
                  location: 'income_calculator_lets_talk',
                  area: areaLabel,
                  bedrooms,
                })
              }
              className="btn-gold mt-7 inline-flex !text-navy-950"
            >
              Speak to our team
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      ) : (
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
      )}

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
