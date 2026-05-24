// Desktop items — the full list. Renders on md+ viewports. At ~14k px
// total content width × 2 (duplication for seamless loop), the track is
// about 24,000 px wide — comfortably handled by desktop GPUs.
const DESKTOP_ITEMS = [
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

// Mobile items — a curated subset (~half the list) chosen to keep the
// best-known boroughs and a few "Quality checked" callouts for rhythm.
// Combined with tighter `gap-6` and `text-xs` (vs desktop's `gap-12`
// and `text-sm`), this brings the mobile track from ~24,000 px wide
// down to roughly ~5,000 px — small enough to fit in 1-2 GPU tiles on
// most modern mobile devices (4096 px tile limit), instead of the 6-12
// tiles the full desktop track would need. Tile-recycling on the
// rasterizer thread is the primary cause of mobile marquee jank;
// shrinking the layer width is the only fix that actually addresses
// it (will-change / translate3d alone aren't enough at this width).
const MOBILE_ITEMS = [
  'Marylebone W1',
  'Mayfair W1',
  'Paddington W2',
  'Quality checked every checkout ✦',
  'Kensington W8',
  'Notting Hill W11',
  'Westminster SW1',
  'Belgravia SW1',
  'Pimlico SW1',
  'Knightsbridge SW1',
  'Quality checked every checkout ✦',
  'Chelsea SW3',
  "Earl's Court SW5",
  'South Kensington SW7',
  'Nine Elms SW8',
  'Battersea SW11',
  'Quality checked every checkout ✦',
  'Waterloo SE1',
  "King's Cross N1",
  'Covent Garden WC2',
  'Shoreditch E1',
  'Canary Wharf E14',
]

// Opaque equivalent of `text-white/40` rendered over navy-950 (#020B18).
// Math: each channel = 0.4 × 255 + 0.6 × <navy-channel>
//   R: 0.4×255 + 0.6×2  = 103.2 ≈ 0x67
//   G: 0.4×255 + 0.6×11 = 108.6 ≈ 0x6d
//   B: 0.4×255 + 0.6×24 = 116.4 ≈ 0x74
// Visually identical to `text-white/40` over navy-950 but renders
// without per-character alpha blending — cheaper for the rasterizer
// when the layer is tiled on mobile GPUs.
const ITEM_TEXT_CLASSES = 'text-[#676d74] uppercase tracking-widest font-semibold'

export function Marquee() {
  return (
    <div className="bg-navy-950 border-y border-white/5 overflow-hidden py-6">
      {/* Desktop track — full items list. Hidden below md to keep mobile
          off the wide compositor layer. */}
      <div className="marquee-track hidden md:flex gap-12 whitespace-nowrap animate-marquee">
        {[...DESKTOP_ITEMS, ...DESKTOP_ITEMS].map((item, i) => (
          <span
            key={`d-${i}`}
            className={`flex items-center gap-12 text-sm ${ITEM_TEXT_CLASSES}`}
          >
            {item}
            <span className="text-gold-500 text-base">●</span>
          </span>
        ))}
      </div>

      {/* Mobile track — curated subset + tighter spacing + smaller text.
          Shown below md only. Animation class and marquee-track class
          are the same so it gets the same speed and GPU promotion as
          the desktop track. */}
      <div className="marquee-track flex md:hidden gap-6 whitespace-nowrap animate-marquee">
        {[...MOBILE_ITEMS, ...MOBILE_ITEMS].map((item, i) => (
          <span
            key={`m-${i}`}
            className={`flex items-center gap-6 text-xs ${ITEM_TEXT_CLASSES}`}
          >
            {item}
            <span className="text-gold-500 text-sm">●</span>
          </span>
        ))}
      </div>
    </div>
  )
}
