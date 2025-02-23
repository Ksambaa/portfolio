// Minimal Tailwind config that scans src/ for classes, 
// enables theme customization, 
// and allows plugin integration.

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // You can customize your dark mode colors here
        dark: {
          bg: '#1a1a1a',
          card: '#2d2d2d',
          text: '#ffffff',
          muted: '#a3a3a3',
        },
      },
    },
  },
  plugins: [],
}

