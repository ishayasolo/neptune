/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "neptune-primary-blue": "#2C314F",
        "neptune-secondary-blue": "#204D9E",
        "neptune-secondary-gray": "#787B8E",
      },
    },
  },
  plugins: [],
}
