import { NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  propertyAddress: z.string().optional(),
  postcode: z.string(),
  propertyType: z.string().optional(),
  portfolioDetails: z.string().optional(),
  bedrooms: z.string().optional(),
  service: z.string().optional(),
  message: z.string().optional(),
  hearAbout: z.string().optional(),
  source: z.string().optional(),
  utm: z.record(z.string()).optional(),
})

/**
 * Turns the form's `source` and captured visit data into readable lines
 * for the lead email. Without this the email says who enquired but not
 * how they arrived, which makes it impossible to tell ad leads from
 * organic ones or to see which search term brought them.
 */
function attributionLines(source?: string, utm?: Record<string, string>): string[] {
  const u = utm ?? {}
  const clean = (v?: string) => (v ? v.replace(/[\r\n]+/g, ' ').slice(0, 200) : '')
  const channel = u.gclid
    ? 'Google Ads (paid click)'
    : u.utm_source
      ? `${clean(u.utm_source)}${u.utm_medium ? ` / ${clean(u.utm_medium)}` : ''}`
      : u.referrer
        ? `Link or search on ${clean(u.referrer)}`
        : 'Direct (typed the address, or tapped a link in an app or message)'
  const lines = [`Channel: ${channel}`]
  if (u.utm_term) lines.push(`Search keyword: ${clean(u.utm_term)}`)
  if (u.utm_campaign) lines.push(`Campaign: ${clean(u.utm_campaign)}`)
  if (u.landing_page) lines.push(`First page they saw: ${clean(u.landing_page)}`)
  if (source) lines.push(`Form used: ${clean(source)}`)
  return lines
}

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const parsed = schema.safeParse(json)
    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: 'invalid_payload' }, { status: 400 })
    }

    // Send via Resend if configured, otherwise log only.
    const apiKey = process.env.RESEND_API_KEY
    const to = process.env.LEAD_RECIPIENT || 'Nimra@tajcribs.co.uk'

    if (apiKey) {
      const { Resend } = await import('resend')
      const resend = new Resend(apiKey)
      const payload = parsed.data

      // Reply-to = the lead's own email, so a plain "Reply" in your inbox goes
      // straight to the customer. The schema already validates email, but stay
      // defensive: if it's somehow blank/malformed, omit reply_to entirely so
      // the send still succeeds rather than failing.
      const replyTo = payload.email?.trim()
      const hasValidReplyTo = !!replyTo && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(replyTo)

      // Show a friendly placeholder instead of a blank/awkward gap.
      const field = (value?: string) =>
        value && value.trim() ? value.trim() : '(not provided)'

      // Property line: join address + postcode, skipping whichever part is blank.
      const propertyParts = [payload.propertyAddress, payload.postcode]
        .map((p) => p?.trim())
        .filter(Boolean)
      const property = propertyParts.length ? propertyParts.join(', ') : '(not provided)'

      // Outward postcode (e.g. "W1" from "W1 2AB") for an at-a-glance subject.
      const postcodeArea = payload.postcode?.trim().split(/\s+/)[0]?.toUpperCase()

      const text = [
        'New enquiry from your website',
        '',
        `Name: ${field(payload.name)}`,
        `Email: ${field(payload.email)}`,
        `Phone: ${field(payload.phone)}`,
        `Property: ${property}`,
        `Type: ${field(payload.propertyType)}`,
        `Service: ${field(payload.service)}`,
        `Message: ${field(payload.message)}`,
        '',
        'How they found you',
        ...attributionLines(payload.source, payload.utm),
      ].join('\n')

      await resend.emails.send({
        from: 'Taj Cribs Leads <Nimra@tajcribs.co.uk>',
        to,
        ...(hasValidReplyTo ? { reply_to: replyTo } : {}),
        subject: `New lead: ${payload.name}, ${postcodeArea || 'area n/a'}, ${
          payload.service?.trim() || 'service unspecified'
        }`,
        text,
      })
    } else {
      console.log('[lead]', parsed.data)
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact-api]', err)
    return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 })
  }
}
