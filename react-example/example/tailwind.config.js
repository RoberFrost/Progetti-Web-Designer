/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
    
      colors:{
        
        primary:"#12E0C0",
        secondary:"#EBD9FD",
        accent:"#FF5353",
        cuore: "#ff0000",

      },

      backgroundColor: {
      
        bgPrimary:"#12E0C0",
        bgCustomPurple:"#800080",
        bgCustomYellow:"#daa520",
        bgCustomGreen:"#7fffd4",
      },
      
      backgroundImage:{

        bgHeader:"linear-gradient(to-bottom, rgba(255,255,255,0.88), rgba(255,255,255,0.88))",      
      
      },


    },
  },
  plugins: [],
}