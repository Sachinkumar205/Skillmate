/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#4F46E5',
        accent: '#10B981',
        background: {
          50: '#EFF6FF', // Light blue-50 for gradient start
          DEFAULT: '#FFFFFF', // White for gradient end
        },
        gray: {
          600: '#4B5563',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'hero-heading': ['48px', { lineHeight: '1.2' }], // Example, will adjust as needed
        'section-heading': ['32px', { lineHeight: '1.2' }],
        'card-title': ['20px', { lineHeight: '1.2' }],
        'body-text': ['16px', { lineHeight: '1.5' }],
      }
    },
  },
  plugins: [],
}
