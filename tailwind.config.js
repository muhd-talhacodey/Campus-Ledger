/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0A0A0C',
          surface: '#121216',
          card: '#18181E',
          cardHover: '#1F1F27',
          border: '#272730',
        },
        gold: {
          50: '#FFFDF5',
          100: '#FFF9E6',
          200: '#FFF0BF',
          300: '#FFE699',
          400: '#FFD700',
          500: '#D4AF37',
          600: '#AA8C2C',
          700: '#806921',
          800: '#554616',
          900: '#2B230B',
          950: '#171205',
        },
      },
      boxShadow: {
        'gold-sm': '0 0 10px rgba(212, 175, 55, 0.16)',
        'gold-md': '0 0 20px rgba(212, 175, 55, 0.22)',
        'gold-lg': '0 0 35px rgba(212, 175, 55, 0.28)',
        'gold-glow': '0 0 50px -10px rgba(212, 175, 55, 0.35)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
