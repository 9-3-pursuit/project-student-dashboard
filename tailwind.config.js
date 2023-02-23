/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        babylonica: ["Babylonica", "cursive"],
        unbounded: ["Unbounded", "cursive"],
        kanit: ["Kanit", "sans-serif"],
      },
      colors: {
        icecold: "#a0d2eb",
      },
      animation: {
        tilt: "tilt 1s 10s linear",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(2deg)" },
          "75%": { transform: "rotate(-2deg)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
