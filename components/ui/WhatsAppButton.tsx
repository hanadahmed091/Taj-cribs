'use client'

import { SITE } from '@/lib/config'
import { cn, pushDataLayer } from '@/lib/utils'

/**
 * Official WhatsApp glyph path. Defined once at module scope so all
 * three variants reuse the same SVG without re-declaring the markup.
 */
function WhatsAppGlyph({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

type Variant = 'full' | 'icon' | 'link'

export type WhatsAppButtonProps = {
  /**
   * - 'full' (default): green pill with logo + label. Use in footers,
   *   contact-page sidebars, post-submit screens, LP CTAs.
   * - 'icon':  44x44 green square with just the logo. Use in tight
   *   header / navbar slots beside the existing phone link.
   * - 'link':  subtle text-link style with a small green glyph. Use
   *   inline next to "Or call us on …" patterns where a green pill
   *   would be visually heavy.
   */
  variant?: Variant
  /** Visible label for 'full' and 'link' variants. Defaults to the agreed copy. */
  label?: string
  /** Analytics location tag (passed to dataLayer alongside the click event). */
  location?: string
  /** Optional extra classes, merged with the variant defaults. */
  className?: string
}

export function WhatsAppButton({
  variant = 'full',
  label = 'Message us on WhatsApp',
  location,
  className,
}: WhatsAppButtonProps) {
  // Mirrors the existing pushDataLayer('phone_click', …) pattern used by
  // the pricing-page hero so phone vs WhatsApp can be compared as two
  // tracked alt-channels in the same funnel.
  const onClick = () => pushDataLayer('whatsapp_click', { location })

  const commonProps = {
    href: SITE.whatsapp,
    target: '_blank' as const,
    rel: 'noopener',
    'aria-label': label,
    onClick,
  }

  if (variant === 'icon') {
    // 44x44 hit-target; matches the tap-size of the Phone icon used in
    // the navbar contact slot. rounded-sm to echo .btn-gold (border
    // radius 2px) without introducing a new shape primitive.
    return (
      <a
        {...commonProps}
        className={cn(
          'inline-flex items-center justify-center w-11 h-11 rounded-sm',
          'bg-[#25D366] text-white transition-all duration-500 ease-smooth',
          'hover:bg-[#1ebe5d] hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-12px_rgba(37,211,102,0.55)]',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]',
          className,
        )}
      >
        <WhatsAppGlyph size={20} />
      </a>
    )
  }

  if (variant === 'link') {
    // Mirrors the existing "Or call us on" inline-link rhythm:
    // semibold text, gold underline accent on hover. Uses the
    // WhatsApp green only on the icon glyph so the surrounding copy
    // colour adapts to whatever surface it sits on (dark or light).
    return (
      <a
        {...commonProps}
        className={cn(
          'inline-flex items-center gap-2 font-semibold underline-offset-4',
          'hover:underline decoration-[#25D366] decoration-2',
          'transition-colors',
          className,
        )}
      >
        <span className="text-[#25D366]">
          <WhatsAppGlyph size={16} />
        </span>
        {label}
      </a>
    )
  }

  // 'full' — green pill that mirrors .btn-gold proportions
  // (padding 16/28px, font-weight 600, border-radius 2px, -2px hover
  // lift, smooth easing) so it slots in beside existing CTAs without
  // looking foreign. Colour is the official WhatsApp green only.
  return (
    <a
      {...commonProps}
      className={cn(
        'inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-sm',
        'bg-[#25D366] text-white font-semibold tracking-tight',
        'transition-all duration-500 ease-smooth border border-[#25D366]',
        'hover:bg-[#1ebe5d] hover:border-[#1ebe5d] hover:-translate-y-0.5',
        'hover:shadow-[0_18px_38px_-16px_rgba(37,211,102,0.55)]',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]',
        className,
      )}
    >
      <WhatsAppGlyph size={20} />
      {label}
    </a>
  )
}
