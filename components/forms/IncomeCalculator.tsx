'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { pushDataLayer } from '@/lib/utils'

// Pricing model:
// - Short-let projection: ADR × 0.9 (10% conservative cushion) × 30 × occupancy
//   then minus our 18% management fee. We intentionally project below true
//   market ADR so landlords are rarely disappointed.
// - Guaranteed rent: full local market AST rent for that area / bedroom count,
//   paid as a fixed monthly amount regardless of occupancy.
type AreaModel = {
  label: string
  postcode: string
  // [studio, 1bed, 2bed, 3bed]  market nightly ADR for short-let
  adr: [number, number, number, number]
  // realistic year-round occupancy %
  occupancy: number
  // Market AST monthly rent for that area / bedroom count.
  marketRent: [number, number, number, number]
}

const AREAS: AreaModel[] = [
  { label: 'Marylebone',         postcode: 'W1',  adr: [180, 240, 360, 520], occupancy: 0.88, marketRent: [2300, 2900, 4500, 6500] },
  { label: 'Mayfair',            postcode: 'W1',  adr: [320, 480, 720, 1100], occupancy: 0.84, marketRent: [3000, 4500, 7800, 12000] },
  { label: 'High St Kensington', postcode: 'W8',  adr: [210, 290, 420, 600], occupancy: 0.94, marketRent: [2400, 3200, 5500, 8000] },
  { label: 'Pimlico',            postcode: 'SW1', adr: [150, 200, 290, 420], occupancy: 0.86, marketRent: [1900, 2400, 3800, 5500] },
  { label: 'Chelsea',            postcode: 'SW3', adr: [210, 290, 410, 580], occupancy: 0.9,  marketRent: [2400, 3200, 5500, 8500] },
  { label: 'Westminster',        postcode: 'SW1', adr: [170, 230, 330, 470], occupancy: 0.85, marketRent: [2100, 2600, 4200, 6200] },
  { label: 'Notting Hill',       postcode: 'W11', adr: [195, 270, 390, 540], occupancy: 0.88, marketRent: [2200, 2900, 4500, 6800] },
  { label: 'Canary Wharf',       postcode: 'E14', adr: [135, 180, 245, 340], occupancy: 0.82, marketRent: [1700, 2200, 3200, 4500] },
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
        Real figures, modelled on properties we manage today. Short-let
        projections sit 10% below market ADR — most landlords exceed them.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="block">
          <span className="block text-[10px] uppercase tracking-widest font-semibold text-navy-900/60 mb-2">
            Area
          </span>
          <select
            value={areaLabel}
            onChange={(e) => {
              setAreaLabel(e.target.value)
              pushDataLayer('calculator_area_changed', { area: e.target.value })
            }}
            className="w-full px-4 py-3 text-sm border border-light-line bg-white rounded-sm font-medium focus:outline-none focus:border-navy-900"
          >
            {AREAS.map((a) => (
              <option key={a.label} value={a.label}>
                {a.label} {a.postcode}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="block text-[10px] uppercase tracking-widest font-semibold text-navy-900/60 mb-2">
            Bedrooms
          </span>
          <select
            value={bedrooms}
            onChange={(e) => setBedrooms(Number(e.target.value))}
            className="w-full px-4 py-3 text-sm border border-light-line bg-white rounded-sm font-medium focus:outline-none focus:border-navy-900"
          >
            {BEDROOM_OPTIONS.map((b) => (
              <option key={b.value} value={b.value}>{b.label}</option>
            ))}
          </select>
        </label>
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
              Our estimates are based on conservative projections — most landlords exceed these figures.
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
                {' '}of your property — regardless of occupancy. No voids, no chasing rent, no hassle.
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
