/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "orange-primary": "#FF5516",
      "blue-primary": "#000035",
      "gray-terciary": "#F7F7F7",
      "gray-text": "#858585",
      "white-background": "#FAFAFA",
      "black": "#000000",
      "white": "#FFFFFF",
      "carts": "#EDE9E9"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // fontFamily:{
      //   "my-font" : ["my-font", "sans-serif"]
      // }
    },
  },
  plugins: [],
};
