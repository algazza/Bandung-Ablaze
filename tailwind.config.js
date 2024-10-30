/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8B0000",
        secondary: "#CC3700",
        backgroundColor: "#1A1A1A",
        accent: "#CCAA00",
        textColor: "#E0E0E0",
      },
      fontFamily: {
        Playfair: ["Playfair Display", "serif"],
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};
