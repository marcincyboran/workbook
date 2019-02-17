const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/js/index.js' ],
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'js/[name].bundle.js'
    },
    devServer: {
        contentBase: './dist',
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
            }
        }
    },
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "style/[name].css",
            chunkFilename: "style/[id].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test:/\.(s*)css$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
};