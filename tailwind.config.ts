import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

     colors:{
      primaryColor:'#333',
      secondaryColor:'#F00C89',
      secondaryLightColor:'rgba(240, 12, 137, 0.10)',
      accentColor:'#651A71',
      switchColor:'rgba(0, 0, 0, 0.60)',
      switchBgColor:'rgba(0, 0, 0, 0.70)',
      inputColor:'rgba(255, 255, 255, 0.08)',
      inputTextColor:'rgba(255, 255, 255, 0.60)',


     },

      backgroundImage: {
        btnColor:'linear-gradient(96deg, #F30B88 0.94%, #9E24B6 94.94%)',

      },
    

      borderColor:{
         primaryBorder:'rgba(0, 0, 0, 0.10)'
      },
      boxShadow:{
        Cardone:'0px 0px 49.404px 0px rgba(243, 11, 136, 0.25)'
      },

      fontFamily:{
       "Poppins":["Poppins","sans-serif"],
        "Noto-Sans-Bengali":["Noto Sans Bengali","sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
