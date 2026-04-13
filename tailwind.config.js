/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#060914',
        panel: '#0b1228',
        neonBlue: '#2fb8ff',
        neonCyan: '#58f2ff',
        neonViolet: '#9f6bff',
      },
      boxShadow: {
        neon: '0 0 30px rgba(47, 184, 255, 0.35)',
        violet: '0 0 30px rgba(159, 107, 255, 0.35)',
      },
      backgroundImage: {
        'hud-grid':
          'linear-gradient(rgba(47,184,255,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(47,184,255,0.09) 1px, transparent 1px)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        radarSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.8s ease-in-out infinite',
        float: 'float 5s ease-in-out infinite',
        radar: 'radarSweep 8s linear infinite',
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body: ['Rajdhani', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

