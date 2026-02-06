/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'warm-gray': '#3d405b',
        'warm-white': '#fff8f0',
        'cream': '#fef9f3',
        'terracotta': '#e07a5f',
        'terracotta-light': '#f4a261',
        'warm-orange': '#f77f00',
        'soft-green': '#81b29a',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
