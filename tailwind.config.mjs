/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grid: ['Gridular', 'sans-serif'],
        punk: ['Big Shoulders', 'sans-serif']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        '3xl': '1800px',
        '4xl': '2160px',
        'max-1080': { max: '1080px' },
        'xs': {'max': '639px'},
      },
    },
  },
  plugins: [],
};
