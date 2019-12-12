require('dotenv').config();

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

/*
    add code spliting 
    add adaptive
    webpack config
    own browserlist
    react memo
    reselect
    const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
    const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
    const safePostCssParser = require('postcss-safe-parser');
*/

const config = {
    entry: ['./src/js', './src/index.css'],
    output: {
        path: path.resolve(__dirname, 'build/'),
        filename: !isProd ? '[name].js' : '[name].[hash].js',
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        compress: true,
        overlay: true,
        hot: true,
        historyApiFallback: true,
        port: 8080,
        open: 'chrome',
        contentBase: path.resolve(__dirname, 'build/'),
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true,
                    },
                    output: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
        ],
    },
    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader',
                    },
                    {
                        test: /\.css$/,
                        use: [
                            {
                                loader: MiniCssExtractPlugin.loader,
                                options: {
                                    hmr: !isProd, // read about
                                },
                            },
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: {
                                        localIdentName: '[name]__[local]--[hash:base64:5]',
                                    },
                                    importLoaders: 3,
                                },
                            },
                            'postcss-loader',
                        ],
                    },
                    {
                        loader: 'file-loader',
                        exclude: /\.(js|css|html|svg)/,
                        options: {
                            name: 'images/[name]_[hash].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.json'],
        modules: ['node_modules', path.resolve(__dirname, 'src/js')],
        alias: {
            Images: path.resolve(__dirname, 'src/img/'),
        },
    },
    stats: {
        builtAt: false,
        children: false,
        colors: true,
        hash: false,
        publicPath: false,
    },
    node: {
        fs: 'empty',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: !isProd ? '[name].css' : '[name].[contenthash].css',
        }),
        new webpack.DefinePlugin({
            _API: JSON.stringify(process.env.API),
            _API_NK: JSON.stringify(process.env.API_NK),
            _ENV: JSON.stringify(process.env.NODE_ENV),
            _KEY: JSON.stringify(process.env.KEY),
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: './index.html',
            filename: 'index.html',
        }),
        isProd &&
            new CleanWebpackPlugin({
                cleanStaleWebpackAssets: false,
            }),
    ].filter(Boolean),
};

module.exports = config;
