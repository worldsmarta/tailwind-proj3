module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "heading-col": "#3e1640",
        "box-col": "#511f50",
        "smtext-col": "#7b366c",
        "para-col": "#cfcccf",
        "rate-box-col": "#f6f2f8"
      },
    },

    screens: {
      'sm': { 'min': '1279px', 'max': '1778px' }
    },

    container: {
      center: true
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
