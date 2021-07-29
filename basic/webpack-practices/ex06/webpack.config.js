const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module : {
        rules: [{
            test: /\.(c|sc|sa)ss$/i,
            use: ['style-loader','css-loader','sass-loader']
        },{
            test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,
            type: 'assets/resource'
        }]
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
    }
}