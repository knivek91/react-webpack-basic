const HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require("./paths");

// only if is need it install dotenv to . . .
// Add the contents of `<project_root>/.env`
// to `process.env`, if .env exists
// This is for local development only.
//dotenv.config();

const fileName = env =>
  env === "production" ? "bundle.[chunkhash:8].js" : "bundle.js";

module.exports = (env, argv) => ({
  entry: paths.entry,
  output: {
    path: paths.dist,
    filename: fileName(argv.mode)
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
      //   NOTE: only use this when you want to use a file
      //   {
      //     test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      //     loader: require.resolve("url-loader"),
      //     options: { limit: 10000, name: "static/media/[name].[chunkhash:8].[ext]" }
      //   }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "BoilerPlate React + Webpack4",
      template: paths.html,
      hash: process.env.NODE_ENV === "production"
    })
  ],
  devtool: "cheap-module-source-map"
});

// "./src/index.html"
