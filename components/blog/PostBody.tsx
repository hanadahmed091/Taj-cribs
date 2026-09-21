import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { BlogBlock } from '@/lib/data/blog'
import { SITE } from '@/lib/config'

const LINK_CLASS =
  'text-navy-900 font-medium underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-600 transition-colors'

// Parses inline `[label](/href)` link syntax and `**bold**` text. Internal
// links render as next/link with the brand underline style; absolute
// http(s) links render as a plain <a> that opens in a new tab. Anything
// else is emitted as a plain string. Used by p/ul/ol/quote/table blocks so
// post authors can sprinkle links and emphasis naturally in prose.
export function renderInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = []
  const inlineRe = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  while ((match = inlineRe.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    const key = `${match.index}-${parts.length}`
    if (match[3] !== undefined) {
      parts.push(
        <strong key={key} className="font-bold text-navy-900">
          {match[3]}
        </strong>,
      )
    } else if (/^https?:\/\//.test(match[2])) {
      parts.push(
        <a key={key} href={match[2]} target="_blank" rel="noopener" className={LINK_CLASS}>
          {match[1]}
        </a>,
      )
    } else {
      parts.push(
        <Link key={key} href={match[2]} className={LINK_CLASS}>
          {match[1]}
        </Link>,
      )
    }
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex))
  return parts
}

export function PostBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="article-body">
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'p':
            return (
              <p
                key={i}
                className="text-base leading-[1.85] text-navy-900/85 mb-6"
              >
                {renderInline(b.text)}
              </p>
            )
          case 'h2':
            return (
              <h2
                key={i}
                className="mt-14 mb-5 text-fluid-2xl font-bold tracking-tight leading-tight border-l-4 border-gold-500 pl-5"
              >
                {b.text}
              </h2>
            )
          case 'h3':
            return (
              <h3
                key={i}
                className="mt-9 mb-3 text-fluid-xl font-semibold tracking-tight leading-tight"
              >
                {b.text}
              </h3>
            )
          case 'ul':
            return (
              <ul key={i} className="my-6 space-y-3">
                {b.items.map((item, ii) => (
                  <li
                    key={ii}
                    className="flex items-start gap-3 text-navy-900/85 leading-[1.75]"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                    <span>{renderInline(item)}</span>
                  </li>
                ))}
              </ul>
            )
          case 'ol':
            return (
              <ol key={i} className="my-6 space-y-4 counter-reset">
                {b.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 text-navy-900/85 leading-[1.75]"
                  >
                    <span className="font-extrabold text-gold-500 tabular-nums shrink-0 mt-0.5">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span>{renderInline(item)}</span>
                  </li>
                ))}
              </ol>
            )
          case 'quote':
            return (
              <blockquote
                key={i}
                className="my-8 border-l-4 border-gold-500 pl-6 italic text-navy-900/90 text-fluid-lg leading-relaxed"
              >
                {renderInline(b.text)}
              </blockquote>
            )
          case 'table':
            return (
              <div key={i} className="my-8 overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse text-sm">
                  <thead>
                    <tr>
                      {b.headers.map((h, hi) => (
                        <th
                          key={hi}
                          className="text-left py-3 px-4 text-[10px] uppercase tracking-widest font-semibold text-navy-900/55 border-b border-light-line"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row, ri) => (
                      <tr key={ri} className={ri % 2 === 0 ? 'bg-cream' : 'bg-white'}>
                        {row.map((cell, ci) => (
                          <td
                            key={ci}
                            className={`py-3 px-4 align-top ${ci === 0 ? 'font-semibold text-navy-900' : 'text-navy-900/80'}`}
                          >
                            {renderInline(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          case 'cta':
            return (
              <aside
                key={i}
                className="my-12 bg-navy-900 text-white rounded-md p-8 lg:p-10 not-prose"
              >
                <h4 className="font-extrabold text-fluid-2xl tracking-tighter text-gold-500 leading-tight">
                  {b.headline}
                </h4>
                <p className="mt-4 text-white/80 leading-relaxed">{b.body}</p>
                <Link
                  href={b.href}
                  className="btn-gold mt-7 !text-navy-950"
                >
                  {b.label}
                  <ArrowRight size={16} />
                </Link>
                {b.secondaryPhone && (
                  <p className="mt-5 text-sm text-white/60">
                    Or call us on{' '}
                    <a
                      href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                      className="font-semibold text-white hover:text-gold-400 transition-colors"
                    >
                      {SITE.phoneDisplay}
                    </a>
                    .
                  </p>
                )}
              </aside>
            )
          case 'img':
            return (
              <figure key={i} className="my-10 not-prose">
                <div className="relative aspect-[16/9] overflow-hidden rounded-md bg-cream">
                  <Image
                    src={b.src}
                    alt={b.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 720px"
                    className="object-cover"
                  />
                </div>
                {b.caption && (
                  <figcaption className="mt-3 text-sm italic text-navy-900/60 text-center">
                    {b.caption}
                  </figcaption>
                )}
              </figure>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
