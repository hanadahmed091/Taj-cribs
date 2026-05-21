'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react'
import { cn, getStoredUtm, pushDataLayer } from '@/lib/utils'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(7, 'Please enter your phone'),
  propertyAddress: z.string().optional(),
  postcode: z.string().min(2, 'Postcode required'),
  propertyType: z.string().optional(),
  service: z.string().optional(),
  message: z.string().optional(),
  hearAbout: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

const POSTCODE_OPTIONS = [
  'W1 (Marylebone / Mayfair)',
  'W8 (Kensington)',
  'SW1 (Pimlico / Westminster)',
  'SW3 (Chelsea)',
  'W11 (Notting Hill)',
  'E14 (Canary Wharf)',
  'Other Central London',
]

const PROPERTY_TYPES = ['Studio', '1 Bedroom', '2 Bedroom', '3 Bedroom', '4+ Bedroom', 'Full Block', 'Portfolio (multiple)']

const HEAR_ABOUT = ['Google Search', 'Google Ads', 'Friend / Referral', 'Instagram', 'LinkedIn', 'Other']

export function LeadForm({
  variant = 'full',
  source = 'contact_page',
  defaultService,
  className,
}: {
  variant?: 'full' | 'compact'
  source?: string
  defaultService?: 'guaranteed-rent' | 'short-let-management' | undefined
  className?: string
}) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { service: defaultService },
  })

  async function onSubmit(values: FormValues) {
    setStatus('submitting')
    try {
      const utm = getStoredUtm()
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, source, utm }),
      })
      if (!res.ok) throw new Error('Submission failed')
      pushDataLayer('form_submission_valuation', { source, service: values.service })
      pushDataLayer('form_submission_contact', { source, service: values.service })
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={cn('bg-white rounded-md p-8 border border-light-line text-center', className)}>
        <CheckCircle2 className="mx-auto text-gold-600" size={42} />
        <h3 className="mt-5 font-bold text-fluid-2xl tracking-tight">Thank you.</h3>
        <p className="mt-3 text-navy-900/70 text-fluid-lg leading-relaxed">
          We&apos;ve received your enquiry. We aim to respond as soon as possible.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn('bg-white rounded-md p-6 lg:p-8 border border-light-line space-y-5', className)}
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Your name" error={errors.name?.message}>
          <input
            type="text"
            autoComplete="name"
            {...register('name')}
            className={inputCls}
            placeholder="Full name"
          />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input
            type="tel"
            autoComplete="tel"
            {...register('phone')}
            className={inputCls}
            placeholder="+44…"
          />
        </Field>
      </div>

      <Field label="Email" error={errors.email?.message}>
        <input
          type="email"
          autoComplete="email"
          {...register('email')}
          className={inputCls}
          placeholder="you@example.com"
        />
      </Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {variant === 'full' && (
          <Field label="Property address" error={errors.propertyAddress?.message}>
            <input
              type="text"
              autoComplete="street-address"
              {...register('propertyAddress')}
              className={inputCls}
              placeholder="Optional"
            />
          </Field>
        )}
        <Field label="Postcode area" error={errors.postcode?.message}>
          <select {...register('postcode')} className={inputCls} defaultValue="">
            <option value="" disabled>Select postcode area</option>
            {POSTCODE_OPTIONS.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Property type">
          <select {...register('propertyType')} className={inputCls} defaultValue="">
            <option value="" disabled>Select type</option>
            {PROPERTY_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </Field>
        <Field label="Service interested in">
          <select {...register('service')} className={inputCls} defaultValue={defaultService ?? ''}>
            <option value="" disabled>Select service</option>
            <option value="guaranteed-rent">Guaranteed Rent</option>
            <option value="short-let-management">Short-Let Management</option>
            <option value="not-sure">Not sure, advise me</option>
          </select>
        </Field>
      </div>

      {variant === 'full' && (
        <>
          <Field label="Message (optional)">
            <textarea
              {...register('message')}
              rows={3}
              className={cn(inputCls, 'resize-none')}
              placeholder="Anything specific we should know?"
            />
          </Field>
          <Field label="How did you hear about us?">
            <select {...register('hearAbout')} className={inputCls} defaultValue="">
              <option value="" disabled>Select option</option>
              {HEAR_ABOUT.map((h) => (
                <option key={h} value={h}>{h}</option>
              ))}
            </select>
          </Field>
        </>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-gold w-full justify-center disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending…' : 'Get my free valuation'}
        <ArrowRight size={18} />
      </button>

      {status === 'error' && (
        <p className="flex items-center gap-2 text-sm text-red-700">
          <AlertCircle size={16} />
          Something went wrong. Please call us on the number above.
        </p>
      )}

      <p className="text-xs text-navy-900/55">
        We aim to respond as soon as possible. No spam. Your details are private.
      </p>
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
