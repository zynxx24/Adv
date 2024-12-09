import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        balineseYellow: "#f9c74f", // Example hex code for yellow
        balineseRed: "#d62828", // Example hex code for red
        balineseBlack: "#1b1b1b", // Example hex code for black
      },
    },
  },
  plugins: [],
} satisfies Config;
