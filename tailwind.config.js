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
          950: '#08080a',
          900: '#0f1115',
          850: '#14171f',
          800: '#1a1e27',
          700: '#262c38',
          600: '#353d4c',
          500: '#4e586b',
          400: '#758095',
          300: '#9ea8bc',
          200: '#c7cee0',
          100: '#e5e9f2',
          50: '#f4f6fa',
        },
        blood: {
          900: '#4c0f13',
          800: '#6d141b',
          700: '#911a24',
          600: '#b91c2b',
          500: '#dc2638',
          400: '#ef4456',
        },
        evidence: {
          manila: '#e8dcbe',
          sepia: '#997e58',
          stamp: '#b83b3b',
          tape: '#d8b248',
          chalk: '#e2e8f0',
        }
      },
      fontFamily: {
        mono: ['"Courier Prime"', '"Special Elite"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Cinzel"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'corkboard': 'radial-gradient(ellipse at center, rgba(38, 28, 20, 0.95), rgba(18, 14, 10, 0.98))',
        'vignette': 'radial-gradient(circle at center, transparent 40%, rgba(5, 5, 8, 0.9) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
