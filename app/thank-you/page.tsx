import type { Metadata } from 'next'
import { ThankYouContent } from './ThankYouContent'

export const metadata: Metadata = {
  title: 'Thank you | Taj Cribs',
  description:
    'Thank you for your enquiry. One of our Central London property specialists will be in touch within 2 hours.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/thank-you' },
}

export default function ThankYouPage() {
  return <ThankYouContent />
}
