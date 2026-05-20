import { cn } from '@/lib/utils'

export function SectionLabel({
  children,
  align = 'left',
  className,
}: {
  children: React.ReactNode
  align?: 'left' | 'center'
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
      <span className="gold-divider" />
      <span className="eyebrow">{children}</span>
    </div>
  )
}
