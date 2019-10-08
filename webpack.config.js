const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SvgStore = require('webpack-svgstore-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const config = {
  entry: ['./src/js'],
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: !isProd ? '[name].js' : '[name].[hash].js',
  },
  devtool: isProd && 'cheap-module-source-map',
  devServer: {
    compress: true,
    overlay: true,
    historyApiFallback: true,
    port: 8080,
    hot: true,
    open: true,
    contentBase: path.resolve(__dirname, 'build/'),
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          output: {
            comments: false,
          }
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
          loader: 'file-loader',
          exclude: /\.(js|css|html|svg)/,
          options: { 
              name: 'images/[name].[ext]' 
          },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules', path.resolve(__dirname, 'src/js')],
    alias: {
      images: path.resolve(__dirname, 'src/images/')
    }
  },
  stats: {
    builtAt: false,
    children: false,
    colors: true,
    hash: false,
    publicPath: false
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: !isProd ? '[name].css' : '[name].[hash].css',
    }),
    new HtmlWebpackPlugin({
      inject: false, // inject script at the bottom of the body
      // hash: true, // add hash to files for hash busting
      template: './index.html', // entry template
      filename: 'index.html', // output template
    }),
    isProd && new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new CopyPlugin([
      { 
        from: 'src/images', 
        to: 'images',
        force: true 
      },
    ]),
    new SvgStore({
      svgoOptions: {
        plugins: [
          { removeTitle: true }
        ]
      },
    })
  ].filter(Boolean),
};

module.exports = config;