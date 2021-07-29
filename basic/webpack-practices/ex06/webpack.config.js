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
            test: /\.svg$/i,
            loader: 'file-loader',
            options: {
                outputPath: '/assets/images',
                name: '[name].[ext]'
            } 
        }]
    },
    devServer: {
        contentBase: path.resolve('public'),
        watchContentBase: true,
        host: "0.0.0.0",
        port: 9999,
        inline: true,
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true
    }
}