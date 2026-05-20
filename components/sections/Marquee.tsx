const items = [
  'Marylebone W1',
  'Mayfair W1',
  'Quality checked every checkout ✦',
  'Kensington W8',
  'Pimlico SW1',
  'Chelsea SW3',
  'Westminster SW1',
  'Notting Hill W11',
  'Canary Wharf E14',
  'Quality checked every checkout ✦',
  'Belgravia SW1',
  'Soho W1',
  'Fitzrovia W1',
  'Knightsbridge SW1',
]

export function Marquee() {
  return (
    <div className="bg-navy-950 border-y border-white/5 overflow-hidden py-6">
      <div className="flex gap-12 whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12 text-white/40 text-sm uppercase tracking-widest font-semibold"
          >
            {item}
            <span className="text-gold-500 text-base">●</span>
          </span>
        ))}
      </div>
    </div>
  )
}
