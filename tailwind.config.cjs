/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        arvo: ["Arvo", "sans-serif"],
        "source-sans": ["Source Sans Pro", "sans-serif"],
      },
      backgroundColor: {
        "gradient-1":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 77.03%)",
      },
    },
  },
  plugins: [],
};
