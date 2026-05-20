'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { pushDataLayer } from '@/lib/utils'

// Realistic nightly ADR × occupancy assumptions per Central London postcode.
// These match figures in lib/data/areas.ts.
type AreaModel = {
  label: string
  postcode: string
  // [studio, 1bed, 2bed, 3bed]  base nightly ADR for short-let
  adr: [number, number, number, number]
  // realistic year-round occupancy %
  occupancy: number
  // guaranteed rent factor: monthly = adr * 30 * occupancy * factor
  // (factor reflects our risk premium ~ 0.72 of net short-let take)
  guaranteedFactor: number
}

const AREAS: AreaModel[] = [
  { label: 'Marylebone', postcode: 'W1', adr: [180, 240, 360, 520], occupancy: 0.88, guaranteedFactor: 0.55 },
  { label: 'Mayfair', postcode: 'W1', adr: [320, 480, 720, 1100], occupancy: 0.84, guaranteedFactor: 0.5 },
  { label: 'High St Kensington', postcode: 'W8', adr: [210, 290, 420, 600], occupancy: 0.94, guaranteedFactor: 0.55 },
  { label: 'Pimlico', postcode: 'SW1', adr: [150, 200, 290, 420], occupancy: 0.86, guaranteedFactor: 0.6 },
  { label: 'Chelsea', postcode: 'SW3', adr: [210, 290, 410, 580], occupancy: 0.9, guaranteedFactor: 0.55 },
  { label: 'Westminster', postcode: 'SW1', adr: [170, 230, 330, 470], occupancy: 0.85, guaranteedFactor: 0.55 },
  { label: 'Notting Hill', postcode: 'W11', adr: [195, 270, 390, 540], occupancy: 0.88, guaranteedFactor: 0.55 },
  { label: 'Canary Wharf', postcode: 'E14', adr: [135, 180, 245, 340], occupancy: 0.82, guaranteedFactor: 0.6 },
]

const BEDROOM_OPTIONS = [
  { value: 0, label: 'Studio' },
  { value: 1, label: '1 Bedroom' },
  { value: 2, label: '2 Bedroom' },
  { value: 3, label: '3+ Bedroom' },
]

function fmt(n: number) {
  return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(n)
}

export function IncomeCalculator({ defaultArea = 'Marylebone' }: { defaultArea?: string }) {
  const [areaLabel, setAreaLabel] = useState(defaultArea)
  const [bedrooms, setBedrooms] = useState(1)

  const area = AREAS.find((a) => a.label === areaLabel) ?? AREAS[0]

  const calc = useMemo(() => {
    const nightly = area.adr[bedrooms]
    const monthlyGross = Math.round(nightly * 30 * area.occupancy)
    const monthlyNet = Math.round(monthlyGross * 0.82) // 18% mgmt fee
    const guaranteedMonthly = Math.round(monthlyGross * area.guaranteedFactor)
    const annualNet = monthlyNet * 12
    return { nightly, monthlyGross, monthlyNet, guaranteedMonthly, annualNet }
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
        Real figures, modelled on the properties we manage today.
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
        <div className="bg-cream rounded-md p-6 border border-light-line">
          <p className="eyebrow">Short-let Management</p>
          <p className="mt-4 text-3xl font-extrabold tabular-nums tracking-tighter text-navy-900">
            {fmt(calc.monthlyNet)}<span className="text-base text-navy-900/55">/mo</span>
          </p>
          <p className="mt-1 text-xs text-navy-900/55">Net of our 18% fee</p>
          <div className="mt-5 pt-4 border-t border-light-line">
            <div className="flex justify-between text-xs text-navy-900/65 mt-1">
              <span>Gross / month</span>
              <span className="font-semibold tabular-nums">{fmt(calc.monthlyGross)}</span>
            </div>
            <div className="flex justify-between text-xs text-navy-900/65 mt-1">
              <span>ADR</span>
              <span className="font-semibold tabular-nums">{fmt(calc.nightly)} / night</span>
            </div>
            <div className="flex justify-between text-xs text-navy-900/65 mt-1">
              <span>Annual net</span>
              <span className="font-semibold tabular-nums">{fmt(calc.annualNet)}</span>
            </div>
          </div>
        </div>

        <div className="bg-navy-900 text-white rounded-md p-6 border border-navy-700">
          <p className="eyebrow !text-gold-400">Guaranteed Rent</p>
          <p className="mt-4 text-3xl font-extrabold tabular-nums tracking-tighter text-gold-500">
            {fmt(calc.guaranteedMonthly)}<span className="text-base text-white/55">/mo</span>
          </p>
          <p className="mt-1 text-xs text-white/55">Fixed for 3–5 years</p>
          <div className="mt-5 pt-4 border-t border-white/10">
            <div className="flex items-start gap-2 text-xs text-white/70 mt-1 leading-relaxed">
              <TrendingUp size={14} className="mt-0.5 text-gold-400 shrink-0" />
              <span>Lower upside than short-let — but absolutely predictable. Paid same day every month.</span>
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
        Estimates only. Final figures depend on furnishing, finish quality, calendar timing, and platform performance.
      </p>
    </div>
  )
}
