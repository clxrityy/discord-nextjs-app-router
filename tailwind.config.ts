import type { Config } from 'tailwindcss';

import configuration from "./src/lib/config";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: configuration.style.colors.primary[500],
          700: configuration.style.colors.primary[700],
          800: configuration.style.colors.primary[800],
          900: configuration.style.colors.primary[900],
          950: configuration.style.colors.primary[950],
        },
        secondary: {
          100: configuration.style.colors.secondary[100],
          300: configuration.style.colors.secondary[300],
          700: configuration.style.colors.secondary[700],
          800: configuration.style.colors.secondary[800],
          900: configuration.style.colors.secondary[900],
        }
      }
    },
  },
  plugins: [],
}

export default config;

