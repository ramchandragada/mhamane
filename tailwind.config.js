/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#141210",
          soft: "#2a2622",
          mute: "#5c564e",
        },
        stone: {
          DEFAULT: "#e8e2d8",
          warm: "#f3eee6",
          deep: "#cfc5b6",
        },
        copper: {
          DEFAULT: "#1eb8c9",
          bright: "#3fd0df",
          deep: "#1594a3",
        },
        brand: {
          DEFAULT: "#1eb8c9",
          bright: "#3fd0df",
          deep: "#1594a3",
        },
        steel: {
          DEFAULT: "#3d4a55",
          light: "#6b7a88",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        brand: "0.18em",
      },
      animation: {
        "fade-up": "fadeUp 0.9s ease-out forwards",
        "fade-in": "fadeIn 1.1s ease-out forwards",
        "ken-burns": "kenBurns 18s ease-out forwards",
        reveal: "reveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        kenBurns: {
          "0%": { transform: "scale(1.08)" },
          "100%": { transform: "scale(1)" },
        },
        reveal: {
          "0%": { clipPath: "inset(0 0 100% 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
      },
    },
  },
  plugins: [],
};
