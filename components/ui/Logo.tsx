import Image from 'next/image'
import Link from 'next/link'
import { SITE } from '@/lib/config'
import { cn } from '@/lib/utils'

// Brand lockup: mark + "Taj Cribs" wordmark + tagline, linking home.
// `tone="dark"` is the core palette for light backgrounds. The site chrome
// sits on navy, so the header and footer use `tone="light"`, which swaps
// the wordmark to cream and the tagline to the mark's gold for contrast.
export function Logo({
  tone = 'dark',
  className,
  priority = false,
  taglineFrom = 'sm',
}: {
  tone?: 'dark' | 'light'
  // Breakpoint the tagline appears at. The site header uses 'xl' because
  // it only has room for the tagline beside the full nav at that width.
  taglineFrom?: 'sm' | 'xl'
  className?: string
  priority?: boolean
}) {
  return (
    <Link
      href="/"
      aria-label={`${SITE.shortName} home`}
      className={cn('flex items-center gap-3 shrink-0', className)}
    >
      <Image
        src="/logo-mark.svg"
        alt=""
        width={40}
        height={40}
        priority={priority}
        className="w-8 h-8 md:w-10 md:h-10"
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-serif font-semibold text-xl md:text-2xl tracking-normal',
            tone === 'dark' ? 'text-[#1F3A34]' : 'text-[#FBF9F4]',
          )}
        >
          {SITE.shortName}
        </span>
        <span
          className={cn(
            'hidden mt-1 text-[10px] uppercase tracking-[0.2em] font-medium',
            taglineFrom === 'xl' ? 'xl:block' : 'sm:block',
            tone === 'dark' ? 'text-[#8A6A38]' : 'text-[#C9A46A]',
          )}
        >
          Stays &amp; Property Management
        </span>
      </span>
    </Link>
  )
}
