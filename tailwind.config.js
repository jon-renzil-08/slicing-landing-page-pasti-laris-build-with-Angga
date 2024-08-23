/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        clashdisplay : ['Clash Display', 'sans-serif'],
      },
      colors: {
        textColors: "#0B251C",
      },
      backgroundColor: {
        bgGreenColors: "#B7EB38",
      },
      screens: {
        "2xl": "1300px",
      },
      lineHeight: {
        'extra-tight': '1.1',
        'extra-loose': '2.5',
      },
    },
  },
  plugins: [],
};
