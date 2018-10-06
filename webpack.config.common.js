const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    options: "./src/options.js",
    content: "./src/content.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.jsx$/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["@babel/env"] }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js"]
  },
  optimization:
    process.env.NODE_ENV === "production"
      ? {
          minimizer: [
            new UglifyJsPlugin({
              uglifyOptions: {
                compress: true,
                ecma: 6,
                mangle: true
              },
              sourceMap: false
            })
          ]
        }
      : {},
  plugins: [new CopyWebpackPlugin([{ from: "static", to: "." }])],
  devtool: process.env.NODE_ENV === "production" ? false : "cheap-module-source-map"
};
