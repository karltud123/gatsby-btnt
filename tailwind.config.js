module.exports = {
  purge: {
    mode: "layers",
    layers: ["base", "components", "utilities"],
    enabled: true,
    content: ["./src/**/*.html", "./src/**/*.js"],
  },
  theme: {
    extend: {
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
          lifestyle: "#66C0CA",
        },
      },
      height: theme => ({
        btvideo: "520px",
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
