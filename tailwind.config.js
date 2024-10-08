/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#FEF7F2",
        accent: "#2B1B12",
        card: "#DDC7BB",
      },
      fontSize: {
        "clamp-title": "clamp(2.5rem,4vw,4rem)",
        "clamp-para": "clamp(1rem,4vw,1.5rem)",
      },
    },
  },
  plugins: [],
};
