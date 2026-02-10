/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '135': '1.35',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // keep Mantine defaults
  },
};
