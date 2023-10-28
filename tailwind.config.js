/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-pink": "#EB568E",
        "primary-blue": "#144EE3",
        "primary-black": "#0B101B",
        "primary-grey": "#181E29",
        "lite": "#C9CED6",
      },
      screens : {
        "extra_small" :"400px", 
        "xx_small" : "270px"
      }
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
