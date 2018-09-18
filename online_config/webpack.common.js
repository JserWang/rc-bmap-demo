const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PUBLIC_PATH = process.env.NODE_ENV === 'production' ? './' : '../';
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    main: './index.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash:12].js',
    publicPath: PUBLIC_PATH,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?cacheDirectory',
        options: {
          presets: ['babel-preset-env', 'babel-preset-react'].map(require.resolve),
          plugins: [
            require.resolve('babel-plugin-transform-class-properties'),
          ],
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          devMode ? { loader: 'style-loader' } : MiniCssExtractPlugin.loader,
          'css-loader?modules&localIdentName=[name]-[hash:base64:5]',
        ],
      },
      {// antd样式处理
        test: /\.css$/,
        exclude: /src/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(md)$/,
        include: /src/,
        use: [
          'text-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve(__dirname, '../node_modules'),
    ],
    alias: {
      components: path.resolve(__dirname, '../src/components'),
      utils: path.resolve(__dirname, '../src/util'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Demo',
      template: './index.html',
    }),
  ],
};
