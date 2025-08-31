import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'puff-gold': '#E7B045',
        'puff-brown': '#6B4F3A',
        'puff-cream': '#FFF3E0',
        'puff-beige': '#F0E4D7',
      },
      fontFamily: {
        display: ['var(--font-cormorant)'],
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
};

export default config;
