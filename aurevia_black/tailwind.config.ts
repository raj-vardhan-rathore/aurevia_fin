import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#060605",
          950: "#040403",
          900: "#0a0908",
          800: "#121110",
        },
        ivory: {
          DEFAULT: "#EDEAE3",
          muted: "#8C877D",
        },
        gold: {
          DEFAULT: "#C9A961",
          soft: "#E4CE9B",
          deep: "#8C7333",
        },
        wine: {
          DEFAULT: "#6E1F2B",
          deep: "#4A1319",
        },
        line: "rgba(237,234,227,0.08)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.86" },
        },
        drift: {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(-6px,-10px,0)" },
        },
        petal: {
          "0%": { transform: "translate3d(0,0,0) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "0.5" },
          "90%": { opacity: "0.35" },
          "100%": {
            transform: "translate3d(-14px,120px,0) rotate(35deg)",
            opacity: "0",
          },
        },
      },
      animation: {
        breathe: "breathe 6s ease-in-out infinite",
        drift: "drift 14s ease-in-out infinite alternate",
        petal: "petal 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
