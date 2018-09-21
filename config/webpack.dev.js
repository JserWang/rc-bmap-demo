const merge = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common');
const { SERVER_PORT, WEB_PORT } = require('../const');

const webUrl = `http://127.0.0.1:${WEB_PORT}`;
const proxyUrl = `http://127.0.0.1:${SERVER_PORT}`;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../src/'),
    compress: true,
    port: WEB_PORT,
    historyApiFallback: true,
    publicPath: webUrl,
    // 错误、警告展示设置
    overlay: {
      errors: true,
      warnings: true,
    },
    disableHostCheck: true,
    quiet: false,
    noInfo: false,
    proxy: {
      '/api': {
        target: proxyUrl,
        changeOrigin: true,
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
});
