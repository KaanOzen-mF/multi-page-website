/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    zIndex: {
      1000: "1000",
    },
    fontFamily: {
      jost: ["Jost", "sans-serif"],
    },

    colors: {
      peach: "#e7816b",
      black: "#1d1c1e",
      white: "#ffffff",
      lightPeach: "#ffad9b",
      darkGrey: "#333136",
      lightGrey: "#f1f3f5",
      lightPeachWhite: "#FDF3F0",
    },

    boxShadow: {
      custom: " 0px -40px 80px 0px rgba(93,2,2,0.49)",
    },

    backgroundSize: {
      "200%": "200%",
    },

    height: { aboutHeader2: "480px", mapHeight: "420px" },
    width: {
      mapWidth: "94%",
      mapLgWidth: "30%",
      half: "50%",
      upperQuarter: "75%",
      cardWitch: "85%",
    },
    letterSpacing: {
      designCardSpacing: "5px",
      footerCardSpacing: "3px",
    },
  },
  plugins: [],
};
