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
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3000'
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
                    path.resolve(__dirname, "src/js")
                ],
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                include: [
                    path.resolve(__dirname, "src/assets")
                ],
                use: [
                    {
                    loader: 'file-loader',
                    options: {
                        name: '[folder]/[name].[ext]',
                        outputPath: 'assets',
                      },
                    }
                ]
            },
            {
                test:/\.(s*)css$/,
                include: [
                    path.resolve(__dirname, "src/style")
                ],
                use: [
                    { 
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    { loader: "css-loader" },
                    { loader: "resolve-url-loader" },
                    { 
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            sourceMapContents: false
                        }
                    },
                ]                    
            }
        ]
    }
};