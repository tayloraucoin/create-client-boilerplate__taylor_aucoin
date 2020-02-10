require('dotenv').config()

const webpack = require('webpack');
const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require("compression-webpack-plugin")

const ENV = process.env.NODE_ENV || 'development';

module.exports = {
  mode: ENV,
  entry: [
    './app/index.js'
  ],
  output: {
    filename: 'bundle-[hash].js',
    path: path.resolve(__dirname, 'build/'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/, use:
        'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCSSExtractPlugin.loader,
         'css-loader',
         'sass-loader'
        ]
      },
      {
        test: /\.(gif|png|otf|jpg?g)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            }
          }
        ]
      },
      {
        test: /\.(svg)$/,
        use: [
          'svg-react-loader'
        ]
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new HTMLWebpackPlugin({
      filename: '404.html',
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV),
        'BASE_URL': JSON.stringify(ENV === 'production' && process.env.BASE_URL ? process.env.BASE_URL : ENV === 'production' ? process.env.BASE_URL_PROD : process.env.BASE_URL_DEV),
        'GOOGLE_MAPS_API_KEY': JSON.stringify(ENV === 'production' && process.env.GOOGLE_MAPS_API_KEY ? process.env.GOOGLE_MAPS_API_KEY : process.env.GOOGLE_MAPS_TESTING_API_KEY)
      }
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new MiniCSSExtractPlugin({
      filename: '[name].css'
    }),
    new CompressionPlugin()
    // new BundleAnalyzerPlugin()
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "initial"
        }
      }
    }
  },
  devServer: {
    historyApiFallback: true,
    inline: true
  }
};
