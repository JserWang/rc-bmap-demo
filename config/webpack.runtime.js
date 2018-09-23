const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
        uglifyOptions: {
          mangle: {
            safari10: true,
          },
        },
      }),
      new OptimizeCSSAssetsPlugin({}), // use OptimizeCSSAssetsPlugin
    ],
    runtimeChunk: {
      name: 'manifest',
    },
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        libs: {// node_modules内的依赖库
          test: /[\\/]node_modules[\\/]/,
          name: 'chunk-libs',
          minChunks: 1, // 被不同entry引用次数(import),1次的话没必要提取
          maxInitialRequests: 5,
          minSize: 0,
          priority: 100,
          chunks: 'initial',
          // enforce: true?
        },
        antd: {
          test: /[\\/]node_modules[\\/]antd[\\/]/,
          name: 'chunk-antd',
          priority: 110,
        },
        map: {
          test: /[\\/]node_modules[\\/]rc-bmap[\\/]/,
          name: 'chunk-map',
          priority: 115,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?cacheDirectory',
        options: {
          presets: ['babel-preset-env', 'babel-preset-react', 'babel-preset-stage-0'].map(require.resolve),
          plugins: [
            [require.resolve('babel-plugin-transform-runtime'), {
              helpers: false,
              polyfill: false,
              regenerator: true,
              moduleName: 'babel-runtime',
            }],
            require.resolve('babel-plugin-transform-class-properties'),
            require.resolve('babel-plugin-transform-decorators-legacy'),
            [require.resolve('babel-plugin-import'), { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
          ],
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
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
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:12].css',
      chunkFilename: '[name].[contenthash:12].css', // use contenthash *
    }),
  ],
};
