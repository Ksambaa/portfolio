// Minimal Tailwind config that scans src/ for classes, 
// enables theme customization, 
// and allows plugin integration.

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

