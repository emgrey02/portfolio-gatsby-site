module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        header: ["Shadows Into Light Two"],
        body: [],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ["gatsby-plugin-postcss", require("@tailwindcss/forms")],
};
