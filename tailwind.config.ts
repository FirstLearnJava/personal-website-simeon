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
      xxl: { max: '1459px' },
      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1019px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '769px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
      xs: { max: '479px' },
      minxxl: { min: '1460px' },
      minxl: { min: '1280px' },
      minlg: { min: '1020px' },
      minmd: { min: '770px' },
      minsm: { min: '640px' },
      minxs: { min: '480px' },
    },
  },
  plugins: [],
} satisfies Config;
