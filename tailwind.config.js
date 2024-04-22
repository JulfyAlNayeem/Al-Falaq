/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      fontSize: {
        xs: ['12px', '16px'],
      },

  
     

      backgroundImage: {
        // 'hero-img':  "url('public/background/.svg')",
        // 'hero-two':  "url('/src/assets/office-bg.jpg')",
      },
      
      fontFamily: {
        // neon: ["Tilt Neon", "sans-serif"],
      },
      colors: {
        
        "dark": "#0f1729",
        "lightDark":"#5fa5fa",
        'brown': '#633a00',
        
      },
      screens: {
        // sm: "740px",
        // md:"968px",
        // lg: "1100px",
        // xl: "1100px",
        // "wide": "1440px",
      },
    },
  },
  plugins: [],
}