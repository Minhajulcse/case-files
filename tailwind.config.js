/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: {
          950: '#101411',
          900: '#191f1a',
          850: '#20271f',
          800: '#2e362e',
          750: '#394238',
          700: '#434d42',
          600: '#535e51',
          500: '#839080',
          400: '#a2afa1',
          300: '#c1cabe',
          200: '#d8dfd4',
          100: '#eceee5',
          50: '#f6f3e9',
        },
        desk: {
          dark: '#0e1014',
          surface: '#20271f',
          border: '#262c38',
          card: '#1b1f28',
          hover: '#222834',
        },
        blood: {
          950: '#2c1c18',
          300: '#e9bfa5',
          200: '#f2cfb4',
          100: '#f6e4d7',
          900: '#412a21',
          800: '#543528',
          700: '#69442d',
          600: '#855538',
          500: '#b97e55',
          400: '#d8a977',
        },
        brass: {
          950: '#251e12',
          200: '#f1ddb1',
          900: '#38280f',
          800: '#5c431b',
          700: '#825f27',
          600: '#a87b33',
          500: '#c59b4c',
          400: '#d9b36a',
          300: '#ebcc8d',
        },
        parchment: {
          900: '#1f1a14',
          800: '#332b21',
          700: '#524536',
          200: '#ded4c1',
          100: '#ebe3d3',
          50: '#f5efe4',
        }
      },
      fontFamily: {
        sans: ['"Inter"', '"Hind Siliguri"', 'system-ui', 'sans-serif'],
        bengali: ['"Hind Siliguri"', '"Inter"', 'sans-serif'],
        mono: ['"Courier Prime"', '"Special Elite"', 'ui-monospace', 'monospace'],
        serif: ['Georgia', '"Noto Serif Bengali"', 'serif'],
      },
      boxShadow: {
        'case-folder': '0 8px 30px rgba(0, 0, 0, 0.7), 0 0 1px rgba(255, 255, 255, 0.08)',
        'dossier': '0 12px 35px -5px rgba(0, 0, 0, 0.8), inset 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'pin': '0 4px 8px rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [],
}
