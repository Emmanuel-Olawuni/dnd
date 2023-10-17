const { nextui } = require("@nextui-org/react");
import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: "#8976FD",
      "text-blue": "#332C5C",
      "text-gray": "#606778",
      black: "#12141A",
      textBlack: '#030229',
      border: "#CAD0DB",
      white: {
        100: "#ffffff",
        200: "#ffffff",
        300: "#ffffff",
        400: "#ffffff",
        500: "#ffffff",
        600: "#cccccc",
        700: "#999999",
        800: "#666666",
        900: "#333333",
      },
    },
    fontFamily: {
      inter: "var(--inter)",
      nunito: "var(--nunito)",
    },
    fontSize: {
      sm: "14px",
      md: "18px",
      lg: "20px",
      xl: "24px",
      "2xl": "30px",
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
