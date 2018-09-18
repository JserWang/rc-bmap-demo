const merge = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../src/'),
    compress: true,
    port: 9000,
    historyApiFallback: true,
    publicPath: '//localhost:9000/',
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
        target: 'http://127.0.0.1:3000',
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
