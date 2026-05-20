import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
     primary: "#181411",      // Deep Cocoa Black
accent: "#8C5A46",       // Muted Terracotta Brown
supporting: "#F3ECE4",   // Soft Warm Ivory
details: "#4A3A32",      // Smoky Walnut
      },

      fontFamily: {
        jakarta: ["var(--font-jakarta)"],
      },

      boxShadow: {
        premium:
          "0 20px 60px rgba(15, 23, 42, 0.08)",
      },
    },
  },

  plugins: [],
};

export default config;