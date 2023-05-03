/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundColor: {
        dark: "#1f1f1f",
      },

      colors: {
        dark: "#1f1f1f",
      },
    },
  },
  plugins: [],
};
