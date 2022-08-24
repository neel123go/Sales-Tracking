/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#292524",
          "secondary": "#DC8665",
          "accent": "#fdba74",
          "neutral": "#a8a29e",
          "base-100": "#E8E5EB",
          "info": "#ede9fe",
          "success": "#55C595",
          "error": "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}