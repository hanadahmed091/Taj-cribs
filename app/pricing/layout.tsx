import type { Metadata } from 'next'

// Metadata exports are not allowed in client components.
// The page itself is a client component (see app/pricing/page.tsx)
// so we host its <head> metadata here in this server-component layout.
export const metadata: Metadata = {
  title: 'Pricing | Short-Let Management London',
  description:
    'Clear, transparent pricing for short-let management and guaranteed rent in Central London. No hidden fees. No setup costs. We only earn when you earn.',
  alternates: { canonical: '/pricing' },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
