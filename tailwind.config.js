/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/stories/**/*.{ts,tsx}",
    "./node_modules/flowbite.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          background: "#e7ecee",
          icon:"#ec4899",
          text:{
            "500":"#4b5563",
            "800":"#1f2937"
          }
        },
        secondary: {
          background:"#ffffff",
          icon:"#8b5cf6",
          text:"#fafafa"
        }
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
