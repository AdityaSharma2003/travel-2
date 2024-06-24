/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Define custom colors here if needed
        'custom-light-bg': '#f3f4f6',
        'custom-dark-bg': '#1f2937',
        'custom-light-text': '#1f2937',
        'custom-dark-text': '#f3f4f6',
        // Add other custom colors if needed
      },
    },
  },
  variants: {
    extend: {
      // Add dark mode variants for additional utilities if needed
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [],
};



