/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-body': 'hsl(180, 31%, 95%)',
    },
    backgroundImage: {
        'nav-img': "url('/public/Images/bg.jpg')",
        'nav-mobile': "url('public\Images\bg-header-mobile.png')",
      }
  },
  plugins: [],
}
}
