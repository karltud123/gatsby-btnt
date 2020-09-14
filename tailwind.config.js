module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
      },
      lineHeight: {
        "extra-loose": "2.5",
        11: "60px",
      },
      colors: {
        btgray: {
          100: "#2d2d2d",
          200: "#979797",
          300: "#aaaaaa",
          400: "#9b9b9b",
          500: "#6f6f6f",
        },
        btblue: {
          100: "#007bad",
          200: "#00425c ",
          lifestyle: "#66C0CA",
        },
      },
      height: theme => ({
        btvideo: "450px",
      }),
      width: theme => ({
        btlogomobile: "187px",
        btlogodesktop: "407px",
      }),
    },
  },
  variants: {},
  plugins: [],
}
