/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#1f1f1f",
        primary: "#feb900",
        smoke: "#6c757d"
      },

      backgroundColor: {
        dark: "#1f1f1f",
        primary: "#feb900"
      }
    },
  },
  plugins: [],
};
