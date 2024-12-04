/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 2s infinite",
        pulse: "pulse 1.5s infinite",
      },
      colors: {
        yellow: {
          400: "#FBBF24",
          500: "#F59E0B",
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Enable dark mode using the 'class' strategy
};
