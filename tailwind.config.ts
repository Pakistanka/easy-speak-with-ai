import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/entities/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Используем CSS переменные из globals.css
        black: 'var(--color-black)',
        white: 'var(--color-white)',
        darkGrey: 'var(--color-dark-grey)',
        grey: 'var(--color-grey)',
        lightGrey: 'var(--color-light-grey)',
        midnightBlue: 'var(--color-midnight-blue)',
        darkBlue: 'var(--color-dark-blue)',
        blue: 'var(--color-blue)',
        lightBlue: 'var(--color-light-blue)',
        pastelBlue: 'var(--color-pastel-blue)',
        yellow: 'var(--color-yellow)',
        brilge: 'var(--color-brilge)',
        pink: 'var(--color-pink)',
        lightPink: 'var(--color-light-pink)',
        success: 'var(--color-success)',
        failure: 'var(--color-failure)',
              theme: {
        bg: 'var(--color-theme-bg)',
        active: 'var(--color-theme-active)',
      },
      },
      backgroundImage: {
        // Градиенты
        'gradient-pink-blue': 'linear-gradient(135deg, #E466A8 0%, #BCB7FA 25%, #5666ED 50%, #3F3D56 100%)',
        'gradient-pink-yellow': 'linear-gradient(135deg, #E466A8 0%, #FFBBBB 25%, #FCA345 50%, #FFFFEB 100%)',
        'gradient-blue': 'linear-gradient(135deg, #5666ED 0%, #3F3D56 100%)',
        'gradient-pink': 'linear-gradient(135deg, #E466A8 0%, #FFBBBB 100%)',
      },
      boxShadow: {
        'neumorph-light': '0px 4px 8px 0px rgba(202,202,202,0.3), 0px 2px 4px 0px rgba(255,255,255,0.5) inset',
        'neumorph-dark': '0px 4px 8px 0px rgba(47,46,65,0.3), 0px 2px 4px 0px rgba(255,255,255,0.1) inset',
        'neumorph-primary': '0px 4px 8px 0px rgba(86,102,237,0.3), 0px 2px 4px 0px rgba(255,255,255,0.25) inset',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

export default config;