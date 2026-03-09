
module.exports = {
  content: ['./src/**/*.{html,js}'], // Paths to all template files
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        secondary: '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  darkMode: 'class', // or 'media'
  plugins: [],
}