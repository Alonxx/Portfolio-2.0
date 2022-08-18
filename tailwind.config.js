/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        text: "text 8s ease infinite",
        floatRight: "floatRight 2s ease-in-out infinite",
        floatLeft: "floatLeft 2s ease-in-out infinite",
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        floatRight: {
          "0%": {
            transform: "rotate(20deg) translatey(0px) ",
          },
          "50%": {
            transform: "rotate(20deg) translatey(-5px)",
          },
          "100% ": {
            transform: "rotate(20deg) translatey(0px)",
          },
        },
        floatLeft: {
          "0%": {
            transform: "rotate(-20deg) translatey(0px) ",
          },
          "50%": {
            transform: "rotate(-20deg) translatey(-5px)",
          },
          "100% ": {
            transform: "rotate(-20deg) translatey(0px)",
          },
        },
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
