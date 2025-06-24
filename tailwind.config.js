/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#5E3BEE",
      light: "#FFFFFF",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"]
    },
    backgroundColor: {
      primary: "#5E3BEE",
      shade: "#F5FCFF",
      purple: "#E62872",
      light: "#FFFFFF"
    }
  },
  plugins: [],
};
