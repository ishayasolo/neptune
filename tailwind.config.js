/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "neptune-primary-blue": "#2C314F",
        "neptune-secondary-blue": "#204D9E",
        "neptune-tertiary-blue": "#EDF3FF",
        "neptune-primary-gray": "#787B8E",
        "neptune-secondary-gray": "#FAFCFF",
      },
      backgroundImage: {
        "steps-bg": "url('../src/assets/images/steps-bg.png')"
      }
    },
  },
  plugins: [],
}
