/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    screens: {
      'modile': { 'min': "350px", 'max': "500px" },
    },
  },
  plugins: [],
};
