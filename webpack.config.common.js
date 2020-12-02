const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const mode = process.env.NODE_ENV || "development";
const isProd = mode === "production";

module.exports = {
  mode,
  entry: {
    options: "./src/options/app.tsx",
    main: "./src/main/main.ts",
    background: "./src/background/background.ts",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "static", to: "." }],
    }),
  ],
  devtool: process.env.NODE_ENV === "production" ? false : "cheap-module-source-map",

  optimization: {
    minimize: isProd,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            pure_funcs: ["console.info", "console.warn", "console.time", "console.timeEnd"],
          },
        },
      }),
    ],
  },
};
