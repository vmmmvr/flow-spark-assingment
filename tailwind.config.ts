import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'blue-600': '#2563eb', // Customizing the focus border color
        gray: {
          main: "#4D5973",
          light:"#F5F5F7",
          text: "#1B2845",
          dark: "#4D5973"
        },
        primary: {
          main: "#32BAAE",
          light: "#F1FCFB",
          dark: "#16504B",
          text: "#16504B"
        }
      },
      borderRadius: {
        'xl': '0.75rem', // Ensuring rounded corners are consistent
    }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
});
export default config;
