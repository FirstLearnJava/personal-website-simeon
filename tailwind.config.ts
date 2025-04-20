import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        projectBackground: '#eef1f6',
      },
      fontFamily: {
        lora: 'var(--font-lora)',
        mont: 'var(--font-mont)',
        dmSans: 'var(--font-dmSans)',
        inter: 'var(--font-inter)',
      },
    },
    screens: {
      xxxl: { max: '1560px' },
      xxl: { max: '1459px' },
      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1025px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '769px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
      xs: { max: '479px' },
      minxxl: { min: '1459px' },
      minxl: { min: '1279px' },
      minlg: { min: '1025px' },
      minmd: { min: '769px' },
      minsm: { min: '639px' },
      minxs: { min: '479px' },
    },
  },
  plugins: [],
} satisfies Config;
