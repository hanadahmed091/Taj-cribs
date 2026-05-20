import { NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  propertyAddress: z.string().optional(),
  postcode: z.string(),
  propertyType: z.string().optional(),
  service: z.string().optional(),
  message: z.string().optional(),
  hearAbout: z.string().optional(),
  source: z.string().optional(),
  utm: z.record(z.string()).optional(),
})

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const parsed = schema.safeParse(json)
    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: 'invalid_payload' }, { status: 400 })
    }

    // Send via Resend if configured, otherwise log only.
    const apiKey = process.env.RESEND_API_KEY
    const to = process.env.LEAD_RECIPIENT || 'hello@tajcribs.co.uk'

    if (apiKey) {
      const { Resend } = await import('resend')
      const resend = new Resend(apiKey)
      const payload = parsed.data
      await resend.emails.send({
        from: 'Taj Cribs Leads <leads@tajcribs.co.uk>',
        to,
        subject: `New lead: ${payload.name} — ${payload.service ?? 'service unspecified'}`,
        text: JSON.stringify(payload, null, 2),
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
