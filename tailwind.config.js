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
      },
      colors: {
        icecold: "#a0d2eb",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
