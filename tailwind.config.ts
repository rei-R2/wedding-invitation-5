import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ["var(--font-helvetica)"],
        "helvetica-bold": ["var(--font-helvetica-bold)"],
        italiana: ["var(--font-italiana)"],
        tangerine: ["var(--font-tangerine)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
