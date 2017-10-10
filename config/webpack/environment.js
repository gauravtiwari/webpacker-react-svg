const { environment } = require("@rails/webpacker");

environment.loaders.set("svg", {
  test: /\.svg$/,
  use: [
    {
      loader: "babel-loader"
    },
    {
      loader: "react-svg-loader",
      options: {
        jsx: true // true outputs JSX tags
      }
    }
  ]
});

module.exports = environment;
