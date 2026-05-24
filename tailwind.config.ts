import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020B18',
          900: '#061325',
          800: '#0A1E38',
          700: '#0F2847',
          600: '#1A3A5C',
        },
        gold: {
          700: '#856A29',
          600: '#A8873E',
          500: '#C9A96E',
          400: '#D9BE8A',
          300: '#E8D5B0',
        },
        cream: '#F8F5EF',
        muted: '#8899AA',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: 'clamp(56px, 9vw, 130px)',
        'fluid-4xl': 'clamp(40px, 5.5vw, 72px)',
        'fluid-3xl': 'clamp(28px, 4vw, 48px)',
        'fluid-2xl': 'clamp(22px, 2.5vw, 32px)',
        'fluid-xl': 'clamp(18px, 1.8vw, 22px)',
        'fluid-lg': 'clamp(16px, 1.5vw, 18px)',
      },
      letterSpacing: {
        tightest: '-0.03em',
        tighter: '-0.02em',
        widest: '0.15em',
      },
      maxWidth: {
        content: '1280px',
      },
      borderColor: {
        'navy-line': 'rgba(26, 58, 92, 0.4)',
        'light-line': '#E5E5E5',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'marquee': 'marquee 20s linear infinite',
        'radial-pan': 'radial-pan 18s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(-4px)' },
          '50%': { transform: 'translateY(4px)' },
        },
        // Use translate3d (not translateX) so mobile browsers
        // — especially Safari iOS and lower-end Android Chrome —
        // promote the marquee track to its own GPU compositor layer
        // from the first frame. translateX alone is technically
        // 2D-transformable but mobile engines often keep it on the
        // main thread, which makes the 92 duplicated spans repaint
        // every frame and stutters on scroll. translate3d guarantees
        // hardware-accelerated compositing.
        marquee: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' },
        },
        'radial-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}

export default config
