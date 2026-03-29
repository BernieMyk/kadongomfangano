import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        primary: '#B88B4A',
        'primary-dark': '#9A7035',
        'primary-light': '#D4B896',
        
        // Backgrounds
        'light-bg': '#F9F8F6',
        'light-secondary': '#FFFFFF',
        'light-tertiary': '#F2F0ED',
        
        'dark-bg': '#0F1115',
        'dark-secondary': '#1A1D23',
        'dark-tertiary': '#252A33',
        
        // Text
        'light-text': '#1A1A1A',
        'light-text-secondary': '#3C3C3C',
        'light-text-muted': '#7A7A7A',
        
        'dark-text': '#E8E8E8',
        'dark-text-secondary': '#C8C8C8',
        'dark-text-muted': '#808080',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
export default config
