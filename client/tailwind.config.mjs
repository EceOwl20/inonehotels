/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cormorant': ['CormorantGaramond', 'serif'],
        'jost': ['Jost', 'sans-serif'],
      },
      fontWeight: {
        'thin': '100',      // Jost-Thin
        'extralight': '200', // Jost-ExtraLight
        'light': '300',     // Jost-Light, CormorantGaramond-Light
        'normal': '400',    // Jost-Regular, CormorantGaramond-Regular
        'medium': '500',    // Jost-Medium, CormorantGaramond-Medium
        'semibold': '600',  // Jost-SemiBold, CormorantGaramond-SemiBold
        'bold': '700',      // Jost-Bold, CormorantGaramond-Bold
        'extrabold': '800', // Jost-ExtraBold
        'black': '900',     // Jost-Black
      },
      
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
