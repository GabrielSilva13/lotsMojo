/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "card-pattern":
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLIqgk3Wh7LLxnTFgifoaaVtjC1CbXUPKBeQ&usqp=CAU')",
      },
      colors: {
        "circle-effect-bg-color": "rgba(255,255,255,.2)",
      },
      animation: {
        circle: "circle .75s",
      },
      keyframes: {
        circle: {
          "0%": {
            opacity: 1,
          },
          "40%": {
            opacity: 1,
          },
          "100%": {
            width: "200%",
            height: "200%",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
