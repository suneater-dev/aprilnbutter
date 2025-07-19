import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // April & Butter Brand Colors - Earth Tones & Warm Neutrals
        primary: {
          25: '#fcfbf9',   // ultra light cream
          50: '#faf8f5',   // lightest cream
          100: '#f5f1ea',  // warm white
          200: '#ebe3d5',  // light beige
          300: '#ddd0bb',  // soft beige
          400: '#cab499',  // medium beige
          500: '#b8977a',  // warm tan
          600: '#a07c5c',  // deeper tan
          700: '#8b6849',  // brown
          800: '#74563d',  // deep brown
          900: '#5d4432',  // darkest brown
        },
        secondary: {
          50: '#f9f7f4',   // pale cream
          100: '#f2ede6',  // light cream
          200: '#e8dcc9',  // warm cream
          300: '#d9c5a3',  // light caramel
          400: '#c8a677',  // caramel
          500: '#b68a55',  // golden brown
          600: '#9d7046',  // deep caramel
          700: '#825c3a',  // chocolate
          800: '#6b4c32',  // dark chocolate
          900: '#583f2b',  // darkest chocolate
        },
        accent: {
          50: '#fdf9f7',   // blush white
          100: '#faf2ed',  // pale blush
          200: '#f2ddd0',  // light blush
          300: '#e6c2a8',  // soft peach
          400: '#d49e7a',  // peach
          500: '#c57c54',  // terracotta
          600: '#b36242',  // burnt orange
          700: '#954f37',  // rust
          800: '#7a4231',  // deep rust
          900: '#64372b',  // darkest rust
        },
        neutral: {
          50: '#fafaf9',   // pure white
          100: '#f5f5f4',  // off white
          200: '#e7e5e4',  // light gray
          300: '#d6d3d1',  // medium gray
          400: '#a8a29e',  // warm gray
          500: '#78716c',  // darker gray
          600: '#57534e',  // charcoal
          700: '#44403c',  // dark charcoal
          800: '#292524',  // near black
          900: '#1c1917',  // black
        },
        sage: {
          50: '#f6f7f6',   // pale sage
          100: '#ebeeeb',  // light sage
          200: '#d4dbd4',  // soft sage
          300: '#b3c2b3',  // medium sage
          400: '#8fa18f',  // sage green
          500: '#708070',  // deep sage
          600: '#596559',  // forest sage
          700: '#4a534a',  // dark sage
          800: '#3d433d',  // charcoal sage
          900: '#343734',  // darkest sage
        }
      },
      fontFamily: {
        'display': ['var(--font-playfair)', 'serif'],
        'body': ['var(--font-inter)', 'sans-serif'],
        'accent': ['var(--font-dancing)', 'cursive'],
        'nav': ['var(--font-montserrat)', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'title': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(139, 104, 73, 0.1), 0 10px 20px -2px rgba(139, 104, 73, 0.04)',
        'warm': '0 4px 20px -2px rgba(184, 151, 122, 0.15)',
        'glow': '0 0 30px rgba(197, 124, 84, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'texture': "url('/images/paper-texture.jpg')",
        'gradient-warm': 'linear-gradient(135deg, #faf8f5 0%, #f2ede6 100%)',
        'gradient-earth': 'linear-gradient(135deg, #cab499 0%, #b8977a 100%)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

export default config