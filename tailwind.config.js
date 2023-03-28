/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins'],
    },
    extend: {
      colors: {
        bgColor: '#1A0938',
        mainTextColor: '#FFFFFF',
        subTextColor: '#A7A7A7',
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
      backgroundImage: {
        subBg:
          'linear-gradient(180deg, rgba(213, 18, 193, 0.7) 0%, #1A0938 39.57%, #1A0938 39.58%)',
      },
    },
  },
  plugins: [],
}
