/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter_400Regular"],
        interBold: ["Inter_600SemiBold"],
      },
      boxShadow: {
        subtle: "0px 1px 2px 0px #0000000D",
      },
    },
  },
  plugins: [],
};
