/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/public/images/icons/watermark.png')",
      },
      boxShadow: {
        'white': '0 0 10px rgba(255, 255, 255, 0.8)',
        'green': '0 0 15px rgba(0, 255, 50, 0.6)'
      },
      textColor: {
        'custom-red': '#c81c36',
      },
  },
  plugins: [],
}

}