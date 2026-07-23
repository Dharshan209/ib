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
          DEFAULT: "#3B8F00",
          dark: "#2F7100",
        },
        secondary: "#D9692F",
        navy: {
          DEFAULT: "#000088",
          50: "#E9E9F6",
          100: "#C9C9EC",
          200: "#9494DA",
          400: "#2E2EAE",
          500: "#000088",
          600: "#00006E",
          700: "#000057",
          900: "#000030",
        },
        green: {
          50: "#F1F8E8",
          100: "#DEEFC7",
          200: "#C2E293",
          300: "#9FD25B",
          400: "#6FBB27",
          500: "#46A800",
          600: "#3B8F00",
          700: "#2F7100",
          800: "#255900",
          900: "#1E4A00",
          ink: "#2F7100",
        },
        orange: {
          50: "#FCF0E9",
          100: "#F9DCCB",
          500: "#D9692F",
          600: "#BF5522",
          700: "#99431B",
          ink: "#99431B",
        },
        ink: {
          DEFAULT: "#17173A",
          2: "#55566E",
          3: "#8A8B9C",
        },
        paper: "#FAFAF6",
        surface: "#FFFFFF",
        sunk: "#F3F3EC",
        line: {
          DEFAULT: "#E6E6DC",
          strong: "#D5D5C8",
        },
        success: {
          DEFAULT: "#2E7D00",
          bg: "#EAF6DE",
        },
        warning: {
          DEFAULT: "#B4690E",
          bg: "#FBEFD6",
        },
      },
      fontFamily: {
        sans: ["var(--font-plex-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
        grotesk: ["var(--font-grotesk)", "var(--font-plex-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
