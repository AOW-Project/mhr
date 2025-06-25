import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // now bg-background → background-color: hsl(var(--background))
        background: "hsl(var(--background))",
        border:     "hsl(var(--border))",

        // your custom purple:
        brandPurple: "#5E2D4F"
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter:   ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};

export default config;
