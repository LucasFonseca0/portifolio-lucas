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
      colors:{
        primary: '#ff0000', // cor primária vermelha
        secondary: '#990000', // cor secundária vermelha
        light: '#ffcccc', // cor vermelha clara
        dark: '#660000', // cor vermelha escura
        default: '#cc0000',// cor vermelha padrão
      }
    },
    darkMode: "class",
  plugins: [nextui()],
  },
  plugins: [],
};
export default config;
