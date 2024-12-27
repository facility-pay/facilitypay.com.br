import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx,svg,png}",
    "./src/hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      "full-video-screen":
        "linear-gradient(#0006,#0006), url('../assets/images/video-thumb.png')",
      "mobile-full-video-screen":
        "linear-gradient(#0006,#0006), url('../assets/images/mobile-video-thumb.png')",
      "indicate-participate":
        "linear-gradient(#0009,#0009), url('../assets/images/participate.png')",
      "home-section3":
        "linear-gradient(#0009,#0009), url('../assets/images/advantages.png')",
      example:
        "linear-gradient(#0009,#0009), url(https://facilitypay.com.br/wp-content/uploads/2024/05/FacilityPay-a-melhor-maquina-de-2024-segundo-os-especialistas.png)",
      section1: "linear-gradient(#E0E8EA, #FFFFFF, #E4EBED)",
      simulator: "linear-gradient(#EFF4F848, #D5DFE748)",
      "loop-banner": "linear-gradient(#E6ECF265, #E6ECF220)",
      footer: "linear-gradient(to bottom left, #F2BF27, #FF9D00)",
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
        "white-3": "#FFFFFF03",
        "gray-dark": "#272A2E",
        "grey-light-text": "#4A4F54",
        "grey-lighter-text": "#45484D",
        "grey-lightest": "#E6ECF2",
        "grey-lightest-50": "#E6ECF250",
        "grey-light": "#EFF4F8",
        "grey-divider": "#CDD5DC",
        "gray-divider-1": "#C9CDD2",
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
            transform: "translate(calc(-50% - 0.75rem))",
          },
        },
        "scroll-right": {
          "0%": { transform: "translateX(calc(-50% - 0.75rem))" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
