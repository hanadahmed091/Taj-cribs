const items = [
  'Marylebone W1',
  'Mayfair W1',
  'Soho W1',
  'Fitzrovia W1',
  'Paddington W2',
  'Quality checked every checkout ✦',
  'Kensington W8',
  'Maida Vale W9',
  'Notting Hill W11',
  'West Kensington W14',
  'Westminster SW1',
  'Belgravia SW1',
  'Pimlico SW1',
  'Knightsbridge SW1',
  'Quality checked every checkout ✦',
  'Chelsea SW3',
  "Earl's Court SW5",
  'Fulham SW6',
  'South Kensington SW7',
  'Nine Elms SW8',
  'West Brompton SW10',
  'Battersea SW11',
  'Quality checked every checkout ✦',
  'Waterloo SE1',
  'South Bank SE1',
  'Borough SE1',
  'Kennington SE11',
  'Bermondsey SE16',
  'Camden NW1',
  'Hampstead NW3',
  "St John's Wood NW8",
  'Quality checked every checkout ✦',
  'Islington N1',
  "King's Cross N1",
  'Bloomsbury WC1',
  'Covent Garden WC2',
  'Clerkenwell EC1',
  'Quality checked every checkout ✦',
  'Moorgate EC2',
  'Aldgate EC3',
  'Blackfriars EC4',
  'Shoreditch E1',
  'Whitechapel E1',
  'Canary Wharf E14',
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
