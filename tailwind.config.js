/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    './src/Components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
    
  ],
  theme: {
    extend: {
      height:{
        '100':'34rem'
      }
    },
  },
  plugins: [],
}

