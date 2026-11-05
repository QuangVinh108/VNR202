/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        heritage: {
          red: '#A6192E',
          deepRed: '#761426',
          ivory: '#F5F0E6',
          ivoryLight: '#FAF7F2',
          ivoryDark: '#ECE4D4',
          gold: '#C6A15B',
          goldLight: '#DFBF7A',
          goldDark: '#9C7A39',
          navy: '#24364B',
          ocean: '#286C83',
          oceanDeep: '#184758',
          oceanLight: '#3D8FA8',
          oceanMist: '#EBF4F7',
          dark: '#292929',
          muted: '#777777',
          surfaceRed: '#FFF5F6'
        }
      },
      fontFamily: {
        heading: ['"Playfair Display"', '"Be Vietnam Pro"', 'serif'],
        sans: ['"Be Vietnam Pro"', 'sans-serif'],
      },
      boxShadow: {
        'heritage': '0 4px 20px -2px rgba(166, 25, 46, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'heritage-hover': '0 12px 30px -4px rgba(166, 25, 46, 0.14), 0 4px 10px -2px rgba(0, 0, 0, 0.05)',
        'ocean': '0 4px 20px -2px rgba(40, 108, 131, 0.12), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'ocean-hover': '0 12px 30px -4px rgba(40, 108, 131, 0.2), 0 4px 10px -2px rgba(0, 0, 0, 0.06)',
        'parchment': '0 2px 10px rgba(198, 161, 91, 0.15)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.75', transform: 'scale(1.05)' },
        },
        radar: {
          '0%': { transform: 'scale(0.8)', opacity: '0.9' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        }
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 5s ease-in-out infinite',
        'spin-slow': 'spin-slow 25s linear infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'radar': 'radar 2.5s cubic-bezier(0, 0.2, 0.8, 1) infinite',
      }
    },
  },
  plugins: [],
}

