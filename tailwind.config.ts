import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#0a3d62",
          dark: "#051e31",
        },
        secondary: "#3498db",
      },
      fontFamily: {
        sans: ["var(--font-family)"],
      },
    },
  },
  plugins: [],
};
export default config;
