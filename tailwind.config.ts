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
        bg: "var(--bg)",
        paper: "var(--paper)",
        tile: "var(--tile)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        hair: "var(--hair)",
        brandRed: "var(--red)",
        red: {
          DEFAULT: "var(--red)",
          brand: "var(--red)",
        },
        brandGreen: "var(--green)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Archivo", "Inter Tight", "sans-serif"],
        body: ["var(--font-body)", "Manrope", "Inter Tight", "sans-serif"],
        mono: ["var(--font-mono)", "Space Grotesk", "monospace"],
      },
      borderRadius: {
        none: "0px",
        sm: "2px",
        DEFAULT: "4px",
        md: "6px",
        lg: "8px",
        full: "9999px",
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        normal: "-0.01em",
        mono: "0.04em",
      },
      spacing: {
        "safe-top": "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)",
        "safe-left": "env(safe-area-inset-left)",
        "safe-right": "env(safe-area-inset-right)",
      },
      aspectRatio: {
        "4/5": "4 / 5",
        "21/9": "21 / 9",
        "9/16": "9 / 16",
        "1/1": "1 / 1",
      },
    },
  },
  plugins: [],
};

export default config;
