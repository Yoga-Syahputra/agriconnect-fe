/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2F855A", // green-700
          light: "#48BB78", // green-500
          dark: "#276749", // green-800
        },
        secondary: {
          DEFAULT: "#F6E05E", // yellow-400
          light: "#FAF089", // yellow-300
          dark: "#D69E2E", // yellow-600
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
    },
  },
  plugins: [],
};
