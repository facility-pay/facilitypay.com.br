import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      "full-video-screen":
        "linear-gradient(#0006,#0006), url(https://cdn.prod.website-files.com/65c1399ac999a342139b5069/660492b660901f344d12ee80_Photo_BG_POS_Beauty.webp)",
      "home-section3":
        "linear-gradient(#00000090,#00000095), url(https://cdn.prod.website-files.com/65c1399ac999a342139b5069/660492b660901f344d12ee80_Photo_BG_POS_Beauty.webp)",
      section1: "linear-gradient(#E0E8EA, #FFFFFF, #E4EBED)",
      simulator: "linear-gradient(#EFF4F8, #D5DFE7)",
      "loop-banner": "linear-gradient(#E6ECF265, #E6ECF220)",
    },
    screens: {
      phone: "768px",
      tablet: "1024px",
      desktop: "1280px",
      ultra: "1536px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#4A748A",
        "primary-dark": "#1F678D",
        "dark-blue-heading": "#2C4C5E",
        "dark-blue": "#011F26",
        secondary: "rgba(255, 187, 0, 1)",
        black: "#000000",
        white: "#FFFFFF",
        "gray-dark": "#272A2E",
        "grey-light-text": "#4A4F54",
        "grey-lighter-text": "#45484D",
        "grey-lightest": "#E6ECF2",
        "grey-light": "#EFF4F8",
        gradient1: "rgba(230, 236, 242, 0.65)",
        gradient2: "rgba(230, 236, 242, 0.2)",
        gradient3: "#E0E8EA",
        gradient4: "#FFFFFF",
        gradient5: "#E4EBED",
        description: "#6C6F74",
        "description-15": "#6C6F7415",
        "description-55": "#6C6F7475",
        "blue-flag": "#1F678D",
        whatsapp: "#3DBE64",
        "white-20": "#FFFFFF20",
        "white-50": "#FFFFFF50",
      },
      keyframes: {
        scroll: {
          "100%": {
            transform: "translate(calc(-50% - 0.625rem))",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
