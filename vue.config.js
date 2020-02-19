const webpack = require("webpack");

console.debug("test");

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        VERSION: JSON.stringify(require("./package.json").version)
      })
    ]
  }
};
