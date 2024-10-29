/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8B0000",
        secondary: "#5D3A00",
        backgroundColor: "#FFF5E1",
        accent: "#FF4500",
        highlight: "#FFD700",
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
