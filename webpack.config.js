const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');	
const WebpackMd5Hash = require("webpack-md5-hash");

module.exports = {
  mode: "development",
  entry: './src/index.js', // load react index file
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, // 'style-loader'
            options: {
              publicPath: (resourcePath, context) => {
                console.log('====>>>>', path.relative(path.dirname(resourcePath), context) + '/')
                // publicPath is the relative path of the resource to the context
                // e.g. for ./css/admin/main.css the publicPath will be ../../
                // while for ./css/main.css the publicPath will be ../
                return path.relative(path.dirname(resourcePath), context) + '/';
              }
            },
          },
          {
            options: {
              import: true,
              modules: false,
              importLoaders: 2
            },
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loaders: ['file-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss']
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    // @ts-ignore
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      filename: 'index.html',
      template: './src/index.html' // default template to load any static/dynamic page using webpack html plugin
    }),
    new WebpackMd5Hash(),
    // Keep the output to a single chunk
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
  })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    hot: true
  }
};
