// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      workSans: "work Sans",
      inter: "Inter"
    },
    extend: {
      colors: {
        // navBg: "#ffffff",
        // gray: "#F4F4F4",
        // starGray: "D9D9D9",
        // bluePrimary: "#04989E",
        // blueSecondary: "#00C9DA",
        // yellow: "#FFD15C",
        // navClr: "rgba(255, 255, 255, 0.50);"
        primaryBlue: "#397FC0 ",
        primaryGradient: "#00C6FF",
        textLight: "#8F8F8F",
        cardBorder: "#00C6FF",
        overviewBlue: "#000FFF",
        overviewWhite: "#F9F9F9",
        dark25: "#E2E2E2",
        dark: '#1E1E1E',
        dark50: "#8F8F8F",
        dashmain: "#F0EFEF",
        aliceBlue: "#EAF0FB",
      },
      animation: {
        slide: "slide 25s linear infinite"
      },
      // keyframes: {
      //   slide: {
      //     "0%,100%": { transform: "translateX(5%)" },
      //     "50%": { transform: "translateX(-120%)" }
      //   }
      // },
      fontSize: {
        text6Xl: "74px",
      },
      width: {
        wAbout: "442px",
        dashCards: "333.33px",
        widthhh: "833.33px",
        width404: "404px"
      },
      height: {
        overview: "493px",
        dashCards: "336px",
        rect62: "454px"
      },
      top: {
        topHigh: "-200px"
      }

    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
}

