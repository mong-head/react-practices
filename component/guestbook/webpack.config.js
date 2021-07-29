const path = require("path");

module.exports  = () => {
  const entry = path.resolve(`src/index.js`);
  return {
    mode: "none",
    entry: entry,
    output: {
      path: path.resolve("public"),
      filename: "bundle.js",
      assetModuleFilename: 'assets/images/[hash][ext]'
    },
    module: {
      rules: [
        {
          test: /\.(c|sa|sc)ss$/i,
          use: [
            "style-loader",
            { loader: "css-loader", options: { modules: true } },
            "sass-loader"
          ],
        },
        {
          test: /\.(svg|jpe?g|gif|png|tiff?|bmp|ico|)$/i,
          type: 'asset/resource'
        },
        {
          test: /\.js$/i,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
      ],
    },
    devtool: "eval-source-map",
    devServer: {
      contentBase: path.resolve("public"),
      watchContentBase: true,
      host: "0.0.0.0",
      port: 9999,
      inline: true,
      liveReload: true,
      hot: false,
      compress: true,
      historyApiFallback: true,
    },
  };
};
