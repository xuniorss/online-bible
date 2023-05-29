/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         fontFamily: {
            lato: 'var(--font-lato)',
            montserrat: 'var(--font-montserrat)',
         },
         colors: {
            background: '#2C2C2C',
            lemon: '#00FF00',
         },
      },
   },
   plugins: [],
}
