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
        projectBackground: '#f1f5f8',
      },
      fontFamily: {
        lora: 'var(--font-lora)',
        mont: 'var(--font-mont)',
      },
    },
  },
  plugins: [],
} satisfies Config;
