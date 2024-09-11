/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '300px', // Override the default sm breakpoint
        // You can also customize other breakpoints if needed
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },

      backgroundImage: {
        'backimagehome': "url('https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_medium.jpg')"
        
      },
      fontFamily: {
        Roboto:["Roboto","sans-serif"],
        netflix: ['NetflixSans-Medium', 'sans-serif'],
        netflixnormal: ['NetflixSans-Regular','sans-serif']
      },
         },
  },
  plugins: [],
}

