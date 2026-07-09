/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
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
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4.5s ease-in-out infinite',
        'float-fast': 'float 3.5s ease-in-out infinite',
        'particle': 'particle linear infinite',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        particle: {
          '0%': { transform: 'translateY(50px) scale(0)', opacity: '0' },
          '10%': { opacity: '0.8', transform: 'translateY(20px) scale(1)' },
          '80%': { opacity: '0.5' },
          '100%': { transform: 'translateY(-200px) scale(0.2)', opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
