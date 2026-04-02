/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        //sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-mona-sans)', 'sans-serif'],
        mona: ['var(--font-mona-sans)', 'sans-serif'],
      },
      colors: {
        background: "#F5F7F9",
        foreground: "#1E293B",
        primary: "#1FA3C4",
        secondary: "#b6fb6f",
        accent: "#F47A20",
        muted: "#64748B",
      },
    },
  },
  plugins: [],
};