const HtmlWebpacPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: "./app/index.js",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './bundle.js'
    },
    module :{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpacPlugin ({
            template: './app/index.html',
            hast: true,
            filename: 'index.html'
        })
    ],
    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, 'dist'),
        writeToDisk: true
    }

}