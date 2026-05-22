import { cn } from '@/lib/utils'

export function SectionLabel({
  children,
  align = 'left',
  onLight = false,
  className,
}: {
  children: React.ReactNode
  align?: 'left' | 'center'
  // Set on cream/white backgrounds. The default gold-500 only passes
  // WCAG AA contrast on dark (navy) backgrounds; on light backgrounds
  // the label and divider switch to the darker gold-700.
  onLight?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex items-center gap-3',
        align === 'center' && 'justify-center',
        className,
      )}
    >
      <span className={cn('gold-divider', onLight && '!bg-gold-700')} />
      <span className={cn('eyebrow', onLight && '!text-gold-700')}>{children}</span>
    </div>
  )
}
