'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react'
import { cn, getStoredUtm, pushDataLayer } from '@/lib/utils'

// The dropdown value that reveals the free-text postcode input.
const OTHER_CENTRAL_LONDON = 'Other Zone 1 or 2 area'

// The property-type value that reveals the portfolio details textarea.
const PORTFOLIO_MULTIPLE = 'Portfolio (multiple)'

// Loose UK postcode pattern. Not exhaustive, just enough to catch
// obvious typos. Case-insensitive, optional space before the inward
// code.
const UK_POSTCODE_REGEX = /^[A-Z]{1,2}[0-9][A-Z0-9]?\s?[0-9][A-Z]{2}$/i

const schema = z
  .object({
    name: z.string().min(2, 'Please enter your name'),
    email: z.string().email('Please enter a valid email'),
    phone: z.string().min(7, 'Please enter your phone'),
    propertyAddress: z.string().optional(),
    postcode: z.string().min(2, 'Postcode required'),
    customPostcode: z.string().optional(),
    propertyType: z.string().optional(),
    portfolioDetails: z
      .string()
      .max(1000, 'Please keep this under 1000 characters')
      .optional(),
    service: z.string().min(1, 'Please choose a service'),
    message: z.string().optional(),
    hearAbout: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    // When "Other Central London" is chosen, the free-text postcode
    // becomes required and must roughly look like a UK postcode.
    if (data.postcode === OTHER_CENTRAL_LONDON) {
      const value = data.customPostcode?.trim() ?? ''
      if (value === '') {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['customPostcode'],
          message: 'Please enter your postcode',
        })
      } else if (!UK_POSTCODE_REGEX.test(value)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['customPostcode'],
          message: 'Please enter a valid UK postcode',
        })
      }
    }

    // When "Portfolio (multiple)" is chosen, the portfolio details
    // textarea becomes required with a sensible minimum so it isn't
    // just whitespace.
    if (data.propertyType === PORTFOLIO_MULTIPLE) {
      const value = data.portfolioDetails?.trim() ?? ''
      if (value.length < 10) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['portfolioDetails'],
          message: 'Please tell us a little about your properties',
        })
      }
    }
  })

type FormValues = z.infer<typeof schema>

const POSTCODE_OPTIONS = [
  'W1 (Marylebone / Mayfair)',
  'SW1 (Westminster / Pimlico)',
  'SW3 (Chelsea)',
  "SW5 (Earl's Court)",
  'W8 (Kensington)',
  'W11 (Notting Hill)',
  'SE1 (Waterloo)',
  'SW8 (Nine Elms / Vauxhall)',
  'EC2 (Liverpool Street)',
  "N1 / WC1 (King's Cross)",
  'E14 (Canary Wharf)',
  OTHER_CENTRAL_LONDON,
]

const SERVICE_OPTIONS = [
  { value: 'guaranteed-rent', label: 'Guaranteed Rent', hint: 'A fixed rent every month, no voids' },
  { value: 'short-let-management', label: 'Airbnb Management', hint: 'We run it on Airbnb, you earn more' },
  { value: 'not-sure', label: 'Not sure yet', hint: "We'll tell you which pays more" },
] as const

const RESPONSE_PROMISE = "We'll get back to you within 24 hours."


const PROPERTY_TYPES = ['1 Bedroom', '2 Bedroom', '3 Bedroom', '4+ Bedroom', 'Full Block', 'Portfolio (multiple)']

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
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { service: defaultService },
  })

  const showCustomPostcode = watch('postcode') === OTHER_CENTRAL_LONDON
  const showPortfolio = watch('propertyType') === PORTFOLIO_MULTIPLE
  const selectedService = watch('service')
  const submitLabel =
    selectedService === 'guaranteed-rent'
      ? 'Get my guaranteed rent figure'
      : selectedService === 'short-let-management'
        ? 'Get my free income estimate'
        : 'Get my free valuation'

  async function onSubmit(values: FormValues) {
    setStatus('submitting')
    try {
      const utm = getStoredUtm()
      // Collapse the postcode into a single clean field for the
      // downstream handler: the typed postcode when "Other Central
      // London" was chosen, otherwise the selected area. customPostcode
      // is dropped from the payload so the receiver gets one field.
      const { customPostcode, portfolioDetails, ...rest } = values
      const postcode =
        values.postcode === OTHER_CENTRAL_LONDON && customPostcode
          ? customPostcode.trim()
          : values.postcode
      // Only send portfolioDetails when a portfolio was selected and
      // the field has content. Otherwise it is omitted entirely.
      const portfolio =
        values.propertyType === PORTFOLIO_MULTIPLE && portfolioDetails?.trim()
          ? { portfolioDetails: portfolioDetails.trim() }
          : {}
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...rest, postcode, ...portfolio, source, utm }),
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
          We&apos;ve received your enquiry. {RESPONSE_PROMISE}
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
      <fieldset>
        <legend className="block text-[10px] uppercase tracking-widest font-semibold text-navy-900/60 mb-2">
          What are you looking for? <span className="text-gold-600">*</span>
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {SERVICE_OPTIONS.map((opt) => {
            const active = selectedService === opt.value
            return (
              <label
                key={opt.value}
                className={cn(
                  'flex cursor-pointer flex-col gap-1 rounded-sm border px-4 py-3 transition-colors focus-within:ring-1 focus-within:ring-navy-900',
                  active
                    ? 'border-navy-900 bg-navy-950 text-white'
                    : 'border-light-line bg-white text-navy-900 hover:border-navy-900/50',
                )}
              >
                <input type="radio" value={opt.value} {...register('service')} className="sr-only" />
                <span className="text-sm font-bold">{opt.label}</span>
                <span className={cn('text-xs', active ? 'text-white/70' : 'text-navy-900/55')}>{opt.hint}</span>
              </label>
            )
          })}
        </div>
        {errors.service?.message && (
          <span className="mt-1 block text-xs text-red-600">{errors.service.message}</span>
        )}
      </fieldset>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Your name" required error={errors.name?.message}>
          <input
            type="text"
            autoComplete="name"
            {...register('name')}
            className={inputCls}
            placeholder="Full name"
          />
        </Field>
        <Field label="Phone" required error={errors.phone?.message}>
          <input
            type="tel"
            autoComplete="tel"
            {...register('phone')}
            className={inputCls}
            placeholder="+44…"
          />
        </Field>
      </div>

      <Field label="Email" required error={errors.email?.message}>
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
        <Field label="Postcode area" required error={errors.postcode?.message}>
          <select
            {...register('postcode', {
              onChange: (e) => {
                // Clear the typed postcode whenever the user picks a
                // known area, so a stale value can't be submitted.
                if (e.target.value !== OTHER_CENTRAL_LONDON) {
                  setValue('customPostcode', '', { shouldValidate: false })
                }
              },
            })}
            className={inputCls}
            defaultValue=""
          >
            <option value="" disabled>Select postcode area</option>
            {POSTCODE_OPTIONS.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </Field>
      </div>

      {showCustomPostcode && (
        <Field label="Your postcode" required error={errors.customPostcode?.message}>
          <input
            type="text"
            autoComplete="postal-code"
            {...register('customPostcode')}
            className={inputCls}
            placeholder="e.g. SW7 2AA"
          />
        </Field>
      )}

      <Field label="Property type">
          <select
            {...register('propertyType', {
              onChange: (e) => {
                // Clear the portfolio details whenever the user picks a
                // single property type, so a stale value can't be sent.
                if (e.target.value !== PORTFOLIO_MULTIPLE) {
                  setValue('portfolioDetails', '', { shouldValidate: false })
                }
              },
            })}
            className={inputCls}
            defaultValue=""
          >
            <option value="" disabled>Select type</option>
            {PROPERTY_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </Field>

      {showPortfolio && (
        <Field label="Tell us about your properties" required error={errors.portfolioDetails?.message}>
          <textarea
            {...register('portfolioDetails')}
            rows={4}
            maxLength={1000}
            className={cn(inputCls, 'resize-y')}
            placeholder="e.g. 2 x 2-bed in Chelsea SW3, 1 x studio in Marylebone W1, 3-bed townhouse in Pimlico SW1"
          />
        </Field>
      )}

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
        {status === 'submitting' ? 'Sending…' : submitLabel}
        <ArrowRight size={18} />
      </button>

      {status === 'error' && (
        <p className="flex items-center gap-2 text-sm text-red-700">
          <AlertCircle size={16} />
          Something went wrong. Please call us on the number above.
        </p>
      )}

      <p className="text-xs text-navy-900/55">
        {RESPONSE_PROMISE} No spam. Your details are private.
      </p>
    </form>
  )
}

const inputCls =
  'w-full px-4 py-3 text-sm border border-light-line bg-white rounded-sm text-navy-900 placeholder:text-navy-900/35 focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900 transition-colors'

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string
  error?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="block text-[10px] uppercase tracking-widest font-semibold text-navy-900/60 mb-2">
        {label}
        {required && <span className="text-gold-600"> *</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  )
}
