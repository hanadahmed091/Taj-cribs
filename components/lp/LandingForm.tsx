'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ArrowRight, AlertCircle } from 'lucide-react'
import { cn, getStoredUtm, pushDataLayer } from '@/lib/utils'

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  phone: z.string().min(7, 'Please enter your phone'),
  email: z.string().email('Please enter a valid email'),
  propertyAddress: z.string().min(2, 'Property address required'),
  postcode: z.string().min(2, 'Postcode required'),
  bedrooms: z.string().min(1, 'Select bedrooms'),
  service: z.string().min(1, 'Select a service'),
  hearAbout: z.string().min(1, 'Select an option'),
})

type FormValues = z.infer<typeof schema>

const BEDROOM_OPTIONS = ['Studio', '1 Bed', '2 Bed', '3 Bed', '4 Bed+']
const SERVICE_OPTIONS = [
  { value: 'guaranteed-rent', label: 'Guaranteed Rent' },
  { value: 'short-let-management', label: 'Short-Let Management' },
  { value: 'not-sure', label: 'Not Sure Yet' },
]
const HEAR_OPTIONS = ['Google', 'Google Ads', 'Referral', 'Social Media', 'Other']

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const

export function LandingForm({
  title,
  source,
  defaultService,
  className,
}: {
  title: string
  source: string
  defaultService?: 'guaranteed-rent' | 'short-let-management' | undefined
  className?: string
}) {
  const router = useRouter()
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle')
  const [utmParams, setUtmParams] = useState<Record<string, string>>({})

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { service: defaultService ?? '' },
  })

  // Capture UTM params from URL on mount and merge with whatever
  // UtmCapture already stashed in sessionStorage.
  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    const fromUrl: Record<string, string> = {}
    for (const key of UTM_KEYS) {
      const v = params.get(key)
      if (v) fromUrl[key] = v
    }
    const fromStorage = getStoredUtm()
    setUtmParams({ ...fromStorage, ...fromUrl })
  }, [])

  async function onSubmit(values: FormValues) {
    setStatus('submitting')
    try {
      const payload = { ...values, source, utm: utmParams }
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Submission failed')

      pushDataLayer('form_submission_valuation', {
        source,
        service: values.service,
        ...utmParams,
      })

      router.push('/thank-you')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn(
        'bg-white rounded-md p-6 lg:p-8 border border-light-line space-y-4',
        className,
      )}
    >
      <div>
        <h3 className="font-extrabold text-fluid-xl tracking-tight text-navy-900 leading-snug">
          {title}
        </h3>
        <p className="mt-1 text-sm text-navy-900/60">
          We respond within 2 business hours.
        </p>
      </div>

      <Field label="Full Name" error={errors.name?.message}>
        <input
          type="text"
          autoComplete="name"
          {...register('name')}
          className={inputCls}
          placeholder="Your name"
        />
      </Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Phone" error={errors.phone?.message}>
          <input
            type="tel"
            autoComplete="tel"
            {...register('phone')}
            className={inputCls}
            placeholder="+44…"
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            type="email"
            autoComplete="email"
            {...register('email')}
            className={inputCls}
            placeholder="you@example.com"
          />
        </Field>
      </div>

      <Field label="Property Address" error={errors.propertyAddress?.message}>
        <input
          type="text"
          autoComplete="street-address"
          {...register('propertyAddress')}
          className={inputCls}
          placeholder="Street name"
        />
      </Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Postcode" error={errors.postcode?.message}>
          <input
            type="text"
            autoComplete="postal-code"
            {...register('postcode')}
            className={inputCls}
            placeholder="e.g. W1U 5HR"
          />
        </Field>
        <Field label="Bedrooms" error={errors.bedrooms?.message}>
          <select {...register('bedrooms')} className={inputCls} defaultValue="">
            <option value="" disabled>Select…</option>
            {BEDROOM_OPTIONS.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Service Interest" error={errors.service?.message}>
        <select {...register('service')} className={inputCls} defaultValue={defaultService ?? ''}>
          <option value="" disabled>Select service…</option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </Field>

      <Field label="How did you hear about us?" error={errors.hearAbout?.message}>
        <select {...register('hearAbout')} className={inputCls} defaultValue="">
          <option value="" disabled>Select…</option>
          {HEAR_OPTIONS.map((h) => (
            <option key={h} value={h}>{h}</option>
          ))}
        </select>
      </Field>

      {/* Hidden UTM mirrors — for any non-JS form handlers / debugging.
          The real values still go through utm prop in the JSON payload. */}
      {UTM_KEYS.map((key) => (
        <input
          key={key}
          type="hidden"
          name={key}
          value={utmParams[key] ?? ''}
          readOnly
        />
      ))}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-gold w-full justify-center disabled:opacity-60 !py-4"
      >
        {status === 'submitting' ? 'Sending…' : 'Get My Free Valuation'}
        <ArrowRight size={18} />
      </button>

      {status === 'error' && (
        <p className="flex items-center gap-2 text-sm text-red-700">
          <AlertCircle size={16} />
          Something went wrong. Please call us on the number below.
        </p>
      )}
    </form>
  )
}

const inputCls =
  'w-full px-4 py-3 text-sm border border-light-line bg-white rounded-sm text-navy-900 placeholder:text-navy-900/35 focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900 transition-colors'

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="block text-[10px] uppercase tracking-widest font-semibold text-navy-900/60 mb-2">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  )
}
