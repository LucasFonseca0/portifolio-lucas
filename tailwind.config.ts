import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Poppins: ["var(--font-Poppins)"],
      },
      colors: {
        primaryLightest: '#ffedcc', // laranja pastel mais claro
        primaryLight: '#ffdab9', // laranja pastel claro
        primary: '#ffb366', // laranja pastel padrão
        primaryDark: '#ff9933', // laranja pastel escuro
        primaryDarkest: '#ff8000', // laranja pastel mais escuro
        secondary: '#003366', // azul escuro para contraste
    }
    
    
    
    ,
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(2rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out',
      },
    },
    darkMode: "class",
  plugins: [nextui()],
  },

};
export default config;
