/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#ffffff', // white
        'bg-secondary': 'rgb(55 65 81)', // gray-800
        'text-primary': '#000000', // black
        'text-secondary': 'rgb(55 65 81)', // gray-800,
        'text-primary-strong': 'rgb(37 99 235)',
        'text-secondary-strong': 'rgb(21 128 61)',
        'button-primary': 'rgb(37 99 235)', // blue 600
        'button-primary-hover': 'rgb(29 78 216)', // blue-700
        'button-secondary': 'rgb(21 128 61)', // green 600
        'button-secondary-hover': 'rgb(22 163 74)', // green 700
        'border-primary-focus': 'rgb(37 99 235)', // blue-600
      }
    }
  },
  plugins: [],
}
