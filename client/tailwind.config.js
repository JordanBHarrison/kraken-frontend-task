/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./partials/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        "2/3": "2 / 3",
        "4/5": "4 / 5",
      },
      borderRadius: {
        "xxl": "25px",
      },
      colors: {
        "hemocyanin": "#180048",
        "ice": "#f0ffff",
        "plum": "#600e6b",
        "purplehaze": "#a49fc8",
        "siphon": "#100030",
        "soholights": "#f050f8",
      }
    },
  },
  plugins: [],
}
