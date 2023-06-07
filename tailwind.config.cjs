/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {

      colors: {
        dark: "#1f1f1f",
        primary: "#0078d4"
      },
    },
  },
  plugins: [],
};
