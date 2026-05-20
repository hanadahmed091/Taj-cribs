'use client'

import { usePathname } from 'next/navigation'

// Hides the main site chrome on landing pages (/lp/*) where we want a
// minimal, conversion-only layout. Navbar/Footer are passed as slots so
// they can remain server components.
export function SiteFrame({
  navbar,
  footer,
  children,
}: {
  navbar: React.ReactNode
  footer: React.ReactNode
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isLanding = pathname?.startsWith('/lp')
  const isThankYou = pathname === '/thank-you'

  if (isLanding || isThankYou) {
    return <main>{children}</main>
  }

  return (
    <>
      {navbar}
      <main>{children}</main>
      {footer}
    </>
  )
}
