import Link from 'next/link'
import { AREA_META } from '@/lib/data/areas'
import { SectionLabel } from '@/components/ui/SectionLabel'

/**
 * Internal-link block: every area page, optionally minus the current one,
 * plus the two core service pages. Rendered on area pages and on the
 * service pages so each area page is one click from its neighbours and
 * from the services, rather than only reachable via /areas and the footer.
 */
export function AreaLinks({
  excludeSlug,
  heading = 'Areas we cover',
  showServices = false,
}: {
  excludeSlug?: string
  heading?: string
  showServices?: boolean
}) {
  const areas = Object.values(AREA_META).filter((a) => a.slug !== excludeSlug)
  return (
    <section className="bg-white section-pad">
      <div className="container-edge max-w-4xl">
        <SectionLabel onLight>Central London coverage</SectionLabel>
        <h2 className="mt-5 text-fluid-3xl font-extrabold tracking-tighter leading-tight">
          {heading}
        </h2>
        <ul className="mt-8 flex flex-wrap gap-3">
          {areas.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/areas/${a.slug}`}
                className="inline-block rounded-sm border border-light-line px-4 py-2 text-sm font-semibold text-navy-900 hover:border-gold-500 hover:text-gold-700 transition-colors"
              >
                Guaranteed rent &amp; short-let in {a.name} {a.postcode}
              </Link>
            </li>
          ))}
        </ul>
        {showServices && (
          <p className="mt-8 text-navy-900/75 leading-relaxed">
            See how each route works:{' '}
            <Link href="/guaranteed-rent" className="font-semibold text-navy-900 underline underline-offset-4 hover:text-gold-700">
              guaranteed rent
            </Link>{' '}
            for a fixed monthly payment, or{' '}
            <Link href="/property-management" className="font-semibold text-navy-900 underline underline-offset-4 hover:text-gold-700">
              Airbnb and short-let management
            </Link>{' '}
            at a flat 18% fee.
          </p>
        )}
      </div>
    </section>
  )
}
