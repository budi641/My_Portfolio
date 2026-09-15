import type { Config } from "tailwindcss"

const config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f3eee4",
        ink: "#1f1b16",
        mute: "#5c5348",
        rule: "#c9c1b2",
        margin: "#c45c5c",
        pen: "#243652",
      },
      fontFamily: {
        hand: ["var(--font-hand)", "Comic Sans MS", "Comic Neue", "cursive"],
      },
      borderRadius: {
        DEFAULT: "0.375rem",
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
