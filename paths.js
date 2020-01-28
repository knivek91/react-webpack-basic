const path = require("path");

module.exports = {
  root: path.resolve(__dirname, "./"),
  entry: path.resolve(__dirname, "src/index.js"),
  output: path.resolve(__dirname, "dist"),
  html: path.resolve(__dirname, "src/index.html"),
  imagesFolder: "images",
  fontsFolder: "fonts",
  cssFolder: "css",
  jsFolder: "js"
};

// "file-loader": "^5.0.2",
//"url-loader": "^3.0.0", // only use this if you want to use files
