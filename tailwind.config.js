/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warborne': {
          dark: '#0a0a0a',
          darker: '#050505',
          gray: '#1a1a1a',
          orange: '#ff6b35',
          red: '#d32f2f',
          yellow: '#ffa726',
        },
        'mortaja': {
          primary: '#7c3aed',      // Morado más oscuro
          dark: '#5b21b6',         // Morado muy oscuro
          light: '#8b5cf6',        // Morado medio
          glow: '#a78bfa',         // Morado brillante
          deep: '#4c1d95',         // Morado profundo
          accent: '#ddd6fe',       // Morado suave
        }
      },
      fontFamily: {
        'military': ['Rajdhani', 'sans-serif'],
        'display': ['Orbitron', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(0deg, transparent 24%, rgba(255, 107, 53, 0.05) 25%, rgba(255, 107, 53, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 107, 53, 0.05) 75%, rgba(255, 107, 53, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 107, 53, 0.05) 25%, rgba(255, 107, 53, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 107, 53, 0.05) 75%, rgba(255, 107, 53, 0.05) 76%, transparent 77%, transparent)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 8s linear infinite',
        'fadeIn': 'fadeIn 0.3s ease-in-out',
        'wave': 'wave 3s ease-in-out infinite',
        'flag-wave': 'flagWave 2s ease-in-out infinite',
        'sway': 'sway 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'fabric-ripple': 'fabricRipple 3s ease-in-out infinite',
        'wave-slow': 'waveSlow 5s ease-in-out infinite',
        'wave-fast': 'waveFast 2.5s ease-in-out infinite',
        'float-particle': 'floatParticle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 107, 53, 0.5), 0 0 10px rgba(255, 107, 53, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.8), 0 0 30px rgba(255, 107, 53, 0.4)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        flagWave: {
          '0%, 100%': { transform: 'skewY(0deg) translateX(0)' },
          '25%': { transform: 'skewY(2deg) translateX(2px)' },
          '50%': { transform: 'skewY(0deg) translateX(0)' },
          '75%': { transform: 'skewY(-2deg) translateX(-2px)' },
        },
        sway: {
          '0%, 100%': { transform: 'perspective(400px) rotateY(0deg) rotateX(0deg)' },
          '25%': { transform: 'perspective(400px) rotateY(2deg) rotateX(1deg)' },
          '50%': { transform: 'perspective(400px) rotateY(0deg) rotateX(-1deg)' },
          '75%': { transform: 'perspective(400px) rotateY(-2deg) rotateX(0deg)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        fabricRipple: {
          '0%, 100%': { transform: 'scale(1) translateY(0)' },
          '33%': { transform: 'scale(1.005) translateY(-1px)' },
          '66%': { transform: 'scale(0.995) translateY(1px)' },
        },
        waveSlow: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(2px) translateY(1px)' },
          '50%': { transform: 'translateX(0) translateY(2px)' },
          '75%': { transform: 'translateX(-2px) translateY(1px)' },
        },
        waveFast: {
          '0%, 100%': { transform: 'translateX(0) scale(1)' },
          '50%': { transform: 'translateX(3px) scale(1.01)' },
        },
        floatParticle: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)', opacity: '0.3' },
          '25%': { transform: 'translateY(-10px) translateX(3px)', opacity: '0.7' },
          '50%': { transform: 'translateY(-15px) translateX(0)', opacity: '1' },
          '75%': { transform: 'translateY(-10px) translateX(-3px)', opacity: '0.7' },
        }
      }
    },
  },
  plugins: [],
}
