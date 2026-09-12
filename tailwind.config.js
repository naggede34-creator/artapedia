/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B1220",
        surface: "#121B2E",
        surface2: "#1B2740",
        line: "#26314A",
        ink: "#EDF1F7",
        muted: "#93A1BC",
        amber: {
          DEFAULT: "#F0A939",
          soft: "#3A2E1A",
          bright: "#FFC773"
        },
        teal: {
          DEFAULT: "#35D0B8",
          soft: "#123832",
          bright: "#7CF2DF"
        },
        rose: {
          DEFAULT: "#F2617A",
          soft: "#3A1B22"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      maxWidth: {
        content: "1160px"
      }
    }
  },
  plugins: []
};
