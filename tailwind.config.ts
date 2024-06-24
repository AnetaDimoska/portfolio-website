import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
        xxxl: "1600px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        darkBlue: "#3f3d56",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)", opacity: "0.35" },
          "50%": { transform: "rotate(3deg)" },
        },
        fallBackward: {
          "0%": { transform: "translate(-50%,-50%) rotateX(0deg) scale(1)" },
          "100%": {
            transform: "translate(-50%,-50%) rotateX(15deg) scale(0.9)",
          },
        },
        slideInFromRight: {
          "0%": {
            transform: "translateX(-30%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        slideFromTop: {
          "0%": {
            transform: "translateY(-50px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slideFromBottom: {
          "0%": {
            transform: "translateY(0)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(-20px)",
            opacity: "1",
          },
        },
        bounceCard: {
          "0%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
            opacity: "1",
          },
        },
        pop: {
          "0%": {
            transform: "translateY(-25%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        wing: {
          "0%, 100%": {
            transform: "rotateY(0deg)",
          },
          "50%": {
            transform: "rotateY(8deg) rotateX(-7deg)",
          },
        },
        moveLine: {
          "0%": {
            height: "0"
          },
          "100%": {
            height: "100%"
          },
        },
        movedown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out infinite",
        fallBackward: "fallBackward 0.6s ease-in-out forwards",
        wing: "wing 3s ease-in-out infinite",
        bounceCard: "bounceCard 1s ease-out 1.5s forwards",
        slideInFromRight: "slideInFromRight 0.5s ease-out forwards",
        slideDeskFromTop: "slideFromTop 1s ease-out 1s forwards",
        slideCardsFromTop: "slideFromTop 1s ease-out 1.8s forwards",
        slideComputerFromTop: "slideFromTop 1s ease-out 1.5s forwards",
        slideNavFromTop: "slideFromTop 0.8s ease-out 0.5s forwards",
        slideInFromRightDelayed: "slideInFromRight 0.5s ease-out 2s forwards",
        slideFromBottom: "slideFromBottom 1s ease-out 1.5s forwards",
        slideHeroButtons: "slideFromBottom 1s ease-out 1.8s forwards",
        pop: "pop 1s ease-out forwards",
        popDelayOne: "pop 1s ease-out 0.8s forwards",
        popDelayTwo: "pop 1s ease-out 1s forwards",
        popDelayThree: "pop 1s ease-out 1.2s forwards",
        movedown: "movedown 1s linear forwards",
        moveLine: "moveLine 3s linear forwards",
      },
      perspective: {
        "1000": "1000px",
      },
    },
  },
  plugins: [

  ],
  darkMode: "class",
};
export default config;
