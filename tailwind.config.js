/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "wh-10": "#f4f4f4",
        "wh-50": "#FBFBFB",
        "wh-300": "#C9C9C9",
        "wh-500": "#595959",
        "wh-700": "#0f0f0f",
        "accent-red": "#EA9648",
        "accent-orange": "#F6CF68",
        "accent-green": "#C2E9B4",
      },
    },
    backgroundImage: (theme) => ({
      "gradient-gradual":
        "linear-gradient(180deg, rgba(116,116,116,0) 66.15%, #000000 100%",
    }),
  },
  screens: {
    xs: "480px",
    sm: "768px",
    md: "1060px",
  },
  plugins: [],
};
