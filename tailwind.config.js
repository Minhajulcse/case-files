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
          950: '#090a0d',
          900: '#101217',
          850: '#15181f',
          800: '#1c202a',
          750: '#232936',
          700: '#2b3242',
          600: '#3a4358',
          500: '#525e7a',
          400: '#7582a1',
          300: '#a1acc4',
          200: '#ccd4e2',
          100: '#e8edf5',
          50: '#f5f7fa',
        },
        desk: {
          dark: '#0e1014',
          surface: '#15181f',
          border: '#262c38',
          card: '#1b1f28',
          hover: '#222834',
        },
        blood: {
          900: '#420d11',
          800: '#611319',
          700: '#851921',
          600: '#a81e28',
          500: '#cb2431',
          400: '#e53e4c',
        },
        brass: {
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
        serif: ['"Cinzel"', 'Georgia', 'serif'],
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
