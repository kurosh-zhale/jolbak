/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    screens: {
      'mobile': { 'min': "350px", 'max': "500px" },
    },
  },
  plugins: [],
};
