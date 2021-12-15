module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      body: [
        "Arial",
        '"Hiragino Sans"',
        '"Hiragino Kaku Gothic ProN"',
        "Meiryo",
        "sans-serif",
      ],
    },
    colors: {
      black: "#444444",
      white: "#ffffff",
      gray: "#F5F5F5",
    },
    backgroundImage: {
      "main-visual": "url('./../img/mainvisual.jpg')",
      fashion: "url('./../img/fashion.jpg')",
    },
    screens: {
      tablet: { max: "896px" },
    },
    extend: {
      fontSize: {
        ss: ".75rem",
        sm: ".875rem",
        mm: "1.25rem",
        lm: "1.5rem",
      },
      maxWidth: {
        290: "290px",
        1200: "1200px",
      },
      padding: {
        "5%": "5%",
      },
      spacing: {
        33: "33%",
        48: "48%",
        49: "49%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
