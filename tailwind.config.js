/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#38bdf8',
          DEFAULT: '#0284c7',
          dark: '#0369a1',
          accent: '#06b6d4',
          navy: '#0f172a',
        },
      },
      // Una sola familia tipográfica para todo el sitio
      fontFamily: {
        sans: ['"Plus Jakarta Sans Variable"', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        kenburns: { '0%': { transform: 'scale(1.05)' }, '100%': { transform: 'scale(1.18) translate(-1.5%, -1%)' } },
        rise: { '0%': { transform: 'translateY(0) scale(.6)', opacity: '0' }, '15%': { opacity: '.7' }, '100%': { transform: 'translateY(-110vh) scale(1)', opacity: '0' } },
        wave: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        shimmer: { '100%': { transform: 'translateX(100%)' } },
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        kenburns: 'kenburns 22s ease-in-out infinite alternate',
        rise: 'rise linear infinite',
        wave: 'wave 14s linear infinite',
      },
    },
  },
  plugins: [],
}
