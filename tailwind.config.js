/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#FEF7F2",
        accent: "#2B1B12",
        card: "#DDC7BB",
      },
    },
  },
  plugins: [],
};
