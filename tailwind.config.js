/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        daylight: "F9F9F9",
        night: "#131417",
        midnight: "#17171C",
        lightshadow: "rgba(0,0,0,0.03)",
      },
    },
  },
  plugins: [],
};
