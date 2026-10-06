export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        cream: '#F2ECE1',
        paper: '#FAF7F1',
        ink: '#1B1A17',
        forest: { DEFAULT: '#1E3A2F', deep: '#14281F' },
        terracotta: '#B4532F',
        sand: '#E3D7C3',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        display: ['Archivo', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        ui: 'cubic-bezier(0.23, 1, 0.32, 1)',
        cine: 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
    },
  },
};
